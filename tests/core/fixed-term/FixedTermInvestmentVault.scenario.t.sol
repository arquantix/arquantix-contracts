// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { FixedTermInvestmentVaultBase } from "./FixedTermInvestmentVaultBase.t.sol";
import { FixedTermInvestmentVault } from "src/core/FixedTermInvestmentVault.sol";
import { ILedgityDataProvider } from "src/interfaces/ILedgityDataProvider.sol";

contract FixedTermInvestmentVault_Scenario_Test is
  FixedTermInvestmentVaultBase
{
  function test_scenario_capacityEndDateRequestsAndFinalExit()
    public
  {
    vm.prank(alice);
    vault.deposit(500 ether, alice);

    vm.prank(bob);
    vault.deposit(300 ether, bob);

    vm.prank(carol);
    vault.deposit(200 ether, carol);

    assertEq(vault.totalAssets(), CAPACITY);

    vm.prank(alice);
    vm.expectRevert(
      FixedTermInvestmentVault.OperationNotEnded.selector
    );
    vault.withdraw(10 ether, alice, alice);

    vault.updateOperationEndDate(block.timestamp + ONE_WEEK);

    uint256 aliceRequestShares = vault.balanceOf(alice) / 2;
    uint256 carolRequestShares = vault.balanceOf(carol);

    vm.prank(alice);
    vault.requestWithdrawal(aliceRequestShares);

    vm.prank(carol);
    vault.requestWithdrawal(carolRequestShares);

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);
    uint256 requestLiquidity = requests[0].amount + requests[1].amount;

    vm.prank(liquidityManager);
    vault.processRequests(_requestIds(0, 1), requestLiquidity);

    vm.warp(vault.operationEndDate());

    vm.prank(liquidityManager);
    vault.depositToBuffer(600 ether);

    uint256 bobShares = vault.balanceOf(bob);
    uint256 aliceShares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.redeem(aliceShares, alice, alice);

    vm.prank(bob);
    vault.redeem(bobShares, bob, bob);

    requests = vault.getWithdrawalRequests(false, 0);

    assertTrue(requests[0].processed);
    assertTrue(requests[1].processed);
    assertEq(vault.balanceOf(alice), 0);
    assertEq(vault.balanceOf(bob), 0);
    assertEq(vault.balanceOf(carol), 0);
  }

  function test_scenario_migrationMintThenRevokeAndOperateNormally()
    public
  {
    vault.mintMigrationPosition(alice, 350 ether);
    vault.mintMigrationPosition(bob, 250 ether);

    assertEq(vault.totalAssets(), 600 ether);
    assertGt(vault.balanceOf(alice), vault.balanceOf(bob));

    vault.disableMigrationMinting();

    vm.expectRevert(
      FixedTermInvestmentVault.MigrationMintingDisabled.selector
    );
    vault.mintMigrationPosition(carol, 1 ether);

    vm.prank(carol);
    vault.deposit(400 ether, carol);

    assertEq(vault.totalAssets(), CAPACITY);

    uint256 aliceShares = vault.balanceOf(alice);
    vm.prank(alice);
    vault.requestWithdrawal(aliceShares / 2);

    ILedgityDataProvider.WithdrawalRequestRead[]
      memory requests = vault.getWithdrawalRequests(false, 0);

    vm.prank(liquidityManager);
    vault.processRequests(_requestIds(0), requests[0].amount);

    vm.warp(vault.operationEndDate());

    uint256 finalLiquidity = vault.totalAssets();
    vm.prank(liquidityManager);
    vault.depositToBuffer(finalLiquidity);

    uint256 bobShares = vault.balanceOf(bob);
    uint256 carolShares = vault.balanceOf(carol);

    vm.prank(bob);
    vault.redeem(bobShares, bob, bob);

    vm.prank(carol);
    vault.redeem(carolShares, carol, carol);

    assertFalse(vault.migrationMintingEnabled());
    assertEq(vault.balanceOf(bob), 0);
    assertEq(vault.balanceOf(carol), 0);
  }
}
