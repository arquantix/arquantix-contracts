// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { FixedTermInvestmentVaultBase } from "./FixedTermInvestmentVaultBase.t.sol";
import { FixedTermInvestmentVault } from "src/core/FixedTermInvestmentVault.sol";
import { ILedgityDataProvider } from "src/interfaces/ILedgityDataProvider.sol";

contract FixedTermInvestmentVault_Functional_Test is
  FixedTermInvestmentVaultBase
{
  function test_zeroEndDateStillAllowsWithdrawalRequests() public {
    vault.updateOperationEndDate(0);

    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.requestWithdrawal(shares);

    assertEq(vault.balanceOf(alice), 0);
    assertEq(vault.getWithdrawalRequestCount(), 1);
  }

  function test_requestWithdrawalWorksBeforeOperationEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.requestWithdrawal(shares);

    assertEq(vault.balanceOf(alice), 0);
    assertEq(vault.getWithdrawalRequestCount(), 1);

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);

    assertEq(requests[0].user, alice);
    assertEq(requests[0].amount, 100 ether);
    assertFalse(requests[0].processed);

    vm.prank(liquidityManager);
    vault.processRequests(_requestIds(0), requests[0].amount);

    assertTrue(vault.getWithdrawalRequests(false, 0)[0].processed);
  }

  function test_requestWithdrawalWorksAtOperationEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.warp(vault.operationEndDate());

    vm.prank(alice);
    vault.requestWithdrawal(shares);

    assertEq(vault.balanceOf(alice), 0);
    assertEq(vault.getWithdrawalRequestCount(), 1);
  }

  function test_disablingWithdrawalRequestsCancelsPendingAndBlocksNewRequests()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);
    vm.prank(bob);
    vault.deposit(100 ether, bob);

    uint256 aliceShares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.requestWithdrawal(aliceShares);

    assertEq(vault.balanceOf(alice), 0);

    vault.updateWithdrawalRequestsEnabled(false);

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);

    assertFalse(vault.withdrawalRequestsEnabled());
    assertTrue(requests[0].processed);
    assertEq(vault.balanceOf(alice), aliceShares);

    uint256 bobShares = vault.balanceOf(bob);

    vm.expectRevert(
      FixedTermInvestmentVault.WithdrawalRequestsDisabled.selector
    );
    vm.prank(bob);
    vault.requestWithdrawal(bobShares);
  }

  function test_adminCanCancelSelectedPendingWithdrawalRequests()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);
    vm.prank(bob);
    vault.deposit(100 ether, bob);

    uint256 aliceShares = vault.balanceOf(alice);
    uint256 bobShares = vault.balanceOf(bob);

    vm.prank(alice);
    vault.requestWithdrawal(aliceShares);
    vm.prank(bob);
    vault.requestWithdrawal(bobShares);

    vault.cancelPendingWithdrawalRequests(_requestIds(0));

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);

    assertTrue(requests[0].processed);
    assertFalse(requests[1].processed);
    assertEq(vault.balanceOf(alice), aliceShares);
    assertEq(vault.balanceOf(bob), 0);
  }

  function test_cancellingWithdrawalRequestRestoresSharesAtLatestPps()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);
    vm.prank(bob);
    vault.deposit(100 ether, bob);

    uint256 aliceShares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.requestWithdrawal(aliceShares);

    vault.setTotalAssets(110 ether);

    uint256 expectedAssets = vault.convertToAssets(aliceShares);

    vault.cancelPendingWithdrawalRequests(_requestIds(0));

    assertEq(vault.balanceOf(alice), aliceShares);
    assertEq(vault.convertToAssets(aliceShares), expectedAssets);
  }

  function test_adminCanHandleWithdrawalRequestBeforeEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.requestWithdrawal(shares / 2);

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);

    uint256 initialBalance = asset.balanceOf(alice);

    vm.prank(liquidityManager);
    vault.processRequests(_requestIds(0), requests[0].amount);

    assertTrue(vault.getWithdrawalRequests(false, 0)[0].processed);
    assertEq(asset.balanceOf(alice), initialBalance + requests[0].amount);

    uint256 remainingShares = vault.balanceOf(alice);

    vm.expectRevert(
      FixedTermInvestmentVault.OperationNotEnded.selector
    );
    vm.prank(alice);
    vault.redeem(remainingShares, alice, alice);
  }

  function test_partialRequestWithdrawalLeavesRemainingSharesLocked()
    public
  {
    vm.prank(alice);
    vault.deposit(200 ether, alice);

    uint256 requestedShares = vault.balanceOf(alice) / 2;

    vm.prank(alice);
    vault.requestWithdrawal(requestedShares);

    assertGt(vault.balanceOf(alice), 0);
    assertEq(vault.getWithdrawalRequestCount(), 1);

    uint256 remainingShares = vault.balanceOf(alice);

    vm.expectRevert(
      FixedTermInvestmentVault.OperationNotEnded.selector
    );
    vm.prank(alice);
    vault.redeem(remainingShares, alice, alice);
  }

  function test_multipleRequestsCanBeProcessedTogetherBeforeEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(200 ether, alice);
    vm.prank(bob);
    vault.deposit(300 ether, bob);

    uint256 aliceShares = vault.balanceOf(alice);
    uint256 bobShares = vault.balanceOf(bob);

    vm.prank(alice);
    vault.requestWithdrawal(aliceShares);
    vm.prank(bob);
    vault.requestWithdrawal(bobShares);

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);
    uint256 liquidityRequired = requests[0].amount + requests[1].amount;

    uint256 initialAliceAssets = asset.balanceOf(alice);
    uint256 initialBobAssets = asset.balanceOf(bob);

    vm.prank(liquidityManager);
    vault.processRequests(_requestIds(0, 1), liquidityRequired);

    requests = vault.getWithdrawalRequests(false, 0);

    assertTrue(requests[0].processed);
    assertTrue(requests[1].processed);
    assertEq(asset.balanceOf(alice), initialAliceAssets + 200 ether);
    assertEq(asset.balanceOf(bob), initialBobAssets + 300 ether);
  }
}
