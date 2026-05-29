// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { FixedTermInvestmentVaultBase } from "./FixedTermInvestmentVaultBase.t.sol";
import { FixedTermInvestmentVault } from "src/core/FixedTermInvestmentVault.sol";

contract FixedTermInvestmentVault_Feature_Test is
  FixedTermInvestmentVaultBase
{
  function test_depositAllowsExactCapacityAndRejectsOneWeiMore()
    public
  {
    vm.prank(alice);
    vault.deposit(CAPACITY, alice);

    assertEq(vault.totalAssets(), CAPACITY);

    vm.prank(bob);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.deposit(1, bob);
  }

  function test_zeroCapacityDisablesDepositCap() public {
    vault.updateMaxDepositCapacity(0);

    vm.prank(alice);
    vault.deposit(CAPACITY, alice);

    vm.prank(bob);
    vault.deposit(CAPACITY, bob);

    assertEq(vault.maxDepositCapacity(), 0);
    assertEq(vault.totalAssets(), CAPACITY * 2);
  }

  function test_depositUsesTotalAssetsAcrossMultipleUsers()
    public
  {
    vm.prank(alice);
    vault.deposit(400 ether, alice);

    vm.prank(bob);
    vault.deposit(350 ether, bob);

    vm.prank(carol);
    vault.deposit(250 ether, carol);

    assertEq(vault.totalAssets(), CAPACITY);
    assertGt(vault.balanceOf(alice), vault.balanceOf(carol));
    assertGt(vault.balanceOf(bob), vault.balanceOf(carol));
  }

  function test_depositForDifferentReceiverCountsTowardCapacity()
    public
  {
    vm.prank(alice);
    vault.deposit(999 ether, bob);

    assertEq(vault.balanceOf(alice), 0);
    assertGt(vault.balanceOf(bob), 0);

    vm.prank(carol);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.deposit(2 ether, carol);
  }

  function test_mintRespectsCapacity() public {
    vm.prank(alice);
    vault.deposit(900 ether, alice);

    uint256 sharesWithinCapacity = vault.convertToShares(100 ether);
    vm.prank(bob);
    vault.mint(sharesWithinCapacity, bob);

    assertEq(vault.totalAssets(), CAPACITY);

    vm.prank(carol);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.mint(1, carol);
  }

  function test_withdrawAndRedeemRevertBeforeOperationEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.prank(alice);
    vm.expectRevert(
      FixedTermInvestmentVault.OperationNotEnded.selector
    );
    vault.withdraw(1 ether, alice, alice);

    vm.prank(alice);
    vm.expectRevert(
      FixedTermInvestmentVault.OperationNotEnded.selector
    );
    vault.redeem(shares, alice, alice);
  }

  function test_approvedOperatorCannotWithdrawBeforeEndDate()
    public
  {
    vm.prank(alice);
    vault.deposit(100 ether, alice);

    uint256 shares = vault.balanceOf(alice);

    vm.prank(alice);
    vault.approve(operator, shares);

    vm.prank(operator);
    vm.expectRevert(
      FixedTermInvestmentVault.OperationNotEnded.selector
    );
    vault.redeem(shares, operator, alice);
  }

  function test_zeroEndDateDisablesWithdrawalLock() public {
    vault.updateOperationEndDate(0);

    vm.prank(alice);
    vault.deposit(100 ether, alice);

    vm.prank(liquidityManager);
    vault.depositToBuffer(100 ether);

    uint256 initialBalance = asset.balanceOf(alice);

    vm.prank(alice);
    vault.withdraw(10 ether, alice, alice);

    assertEq(vault.operationEndDate(), 0);
    assertEq(asset.balanceOf(alice), initialBalance + 10 ether);
  }

  function test_migrationMintAddsAssetsAndSharesWithoutMovingTokens()
    public
  {
    uint256 migratedAssets = 125 ether;
    uint256 managerBalanceBefore = asset.balanceOf(liquidityManager);
    uint256 expectedShares = vault.convertToShares(migratedAssets);

    uint256 mintedShares = vault.mintMigrationPosition(
      alice,
      migratedAssets
    );

    assertEq(mintedShares, expectedShares);
    assertEq(vault.totalAssets(), migratedAssets);
    assertEq(vault.balanceOf(alice), expectedShares);
    assertEq(asset.balanceOf(liquidityManager), managerBalanceBefore);
  }

  function test_migrationMintUsesCurrentPricePerShare() public {
    vm.prank(alice);
    vault.deposit(200 ether, alice);

    vault.setTotalAssets(240 ether);

    uint256 expectedShares = vault.convertToShares(60 ether);
    uint256 mintedShares = vault.mintMigrationPosition(bob, 60 ether);

    assertEq(mintedShares, expectedShares);
    assertEq(vault.totalAssets(), 300 ether);
    assertEq(vault.balanceOf(bob), expectedShares);
    assertApproxEqAbs(vault.convertToAssets(expectedShares), 60 ether, 1);
  }

  function test_migrationMintCountsTowardFutureDepositCapacity()
    public
  {
    vault.mintMigrationPosition(alice, 900 ether);

    vm.prank(bob);
    vault.deposit(100 ether, bob);

    assertEq(vault.totalAssets(), CAPACITY);

    vm.prank(carol);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.deposit(1, carol);
  }

  function test_migrationMintCanExceedCapacityForLegacyPositions()
    public
  {
    vault.mintMigrationPosition(alice, CAPACITY + 1 ether);

    assertEq(vault.totalAssets(), CAPACITY + 1 ether);

    vm.prank(bob);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.deposit(1, bob);
  }

  function test_disablingMigrationMintingPermanentlyBlocksMint()
    public
  {
    vault.mintMigrationPosition(alice, 100 ether);

    vault.disableMigrationMinting();

    assertFalse(vault.migrationMintingEnabled());

    vm.expectRevert(
      FixedTermInvestmentVault.MigrationMintingDisabled.selector
    );
    vault.mintMigrationPosition(bob, 1 ether);
  }
}
