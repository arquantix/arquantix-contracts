// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { FixedTermInvestmentVaultBase } from "./FixedTermInvestmentVaultBase.t.sol";
import { FixedTermInvestmentVault } from "src/core/FixedTermInvestmentVault.sol";

contract FixedTermInvestmentVault_Integration_Test is
  FixedTermInvestmentVaultBase
{
  function test_processRequestsStillRequiresLiquidityManager()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.requestWithdrawal(shares);

    vm.prank(alice);
    vm.expectRevert(
      FixedTermInvestmentVault.OnlyLiquidityManager.selector
    );
    vault.processRequests(_requestIds(0), 100 ether);
  }

  function test_withdrawSucceedsAtOperationEndDate() public {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    vm.prank(liquidityManager);
    vault.depositToBuffer(100 ether);

    vm.warp(vault.operationEndDate());

    uint256 initialBalance = asset.balanceOf(alice);

    vm.prank(alice);
    vault.withdraw(10 ether, alice, alice);

    assertEq(asset.balanceOf(alice), initialBalance + 10 ether);
  }

  function test_redeemSucceedsAfterOperationEndDate() public {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    vm.prank(liquidityManager);
    vault.depositToBuffer(100 ether);

    vm.warp(vault.operationEndDate() + 1);

    uint256 shares = vault.balanceOf(alice);
    uint256 initialBalance = asset.balanceOf(alice);

    vm.prank(alice);
    vault.redeem(shares, alice, alice);

    assertEq(vault.balanceOf(alice), 0);
    assertEq(asset.balanceOf(alice), initialBalance + 100 ether);
  }

  function test_approvedOperatorCanRedeemAfterOperationEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    vm.prank(liquidityManager);
    vault.depositToBuffer(100 ether);

    uint256 shares = vault.balanceOf(alice);
    vm.prank(alice);
    vault.approve(operator, shares);

    vm.warp(vault.operationEndDate());

    vm.prank(operator);
    vault.redeem(shares, bob, alice);

    assertEq(vault.balanceOf(alice), 0);
    assertEq(asset.balanceOf(bob), INITIAL_BALANCE + 100 ether);
  }

  function test_pausedVaultStillBlocksDepositsWithdrawalsAndMigrationMint()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    vm.warp(vault.operationEndDate());

    vm.prank(liquidityManager);
    vault.depositToBuffer(100 ether);

    globalPause.pause();

    vm.prank(bob);
    vm.expectRevert();
    vault.deposit(1 ether, bob);

    vm.prank(alice);
    vm.expectRevert();
    vault.withdraw(1 ether, alice, alice);

    vm.expectRevert();
    vault.mintMigrationPosition(carol, 1 ether);
  }

  function test_restrictedUserCannotDepositOrRequestWithdrawal()
    public
  {
    globalAccessList.restrictAccount(alice);

    vm.expectRevert();
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    globalAccessList.unRestrictAccount(alice);

    vm.prank(alice);
    vault.deposit(100 ether, alice);

    globalAccessList.restrictAccount(alice);

    uint256 shares = vault.balanceOf(alice);

    vm.expectRevert();
    vm.prank(alice);
    vault.requestWithdrawal(shares);
  }

  function test_restrictedUserCannotReceiveMigrationMint()
    public
  {
    globalAccessList.restrictAccount(alice);

    vm.expectRevert();
    vault.mintMigrationPosition(alice, 100 ether);
  }
}
