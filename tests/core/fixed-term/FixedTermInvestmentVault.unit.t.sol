// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { FixedTermInvestmentVaultBase } from "./FixedTermInvestmentVaultBase.t.sol";
import { FixedTermInvestmentVault } from "src/core/FixedTermInvestmentVault.sol";

contract FixedTermInvestmentVault_Unit_Test is
  FixedTermInvestmentVaultBase
{
  function test_initializesFixedTermInvestmentParams() public view {
    assertEq(vault.maxDepositCapacity(), CAPACITY);
    assertEq(vault.operationEndDate(), block.timestamp + THIRTY_DAYS);
    assertTrue(vault.withdrawalRequestsEnabled());
    assertTrue(vault.migrationMintingEnabled());
    assertEq(address(vault.asset()), address(asset));
    assertEq(vault.owner(), address(this));
    assertEq(vault.name(), "Fixed Term Vault");
    assertEq(vault.symbol(), "ftUSD");
  }

  function test_adminCanIncreaseCapacityAndDepositsContinue()
    public
  {
    vm.prank(alice);
    vault.deposit(CAPACITY, alice);

    vm.prank(bob);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.deposit(1 ether, bob);

    vault.updateMaxDepositCapacity(CAPACITY + 1 ether);

    vm.prank(bob);
    vault.deposit(1 ether, bob);

    assertEq(vault.maxDepositCapacity(), CAPACITY + 1 ether);
    assertGt(vault.balanceOf(bob), 0);
  }

  function test_adminCanLowerCapacityBelowCurrentAssets()
    public
  {
    vm.prank(alice);
    vault.deposit(800 ether, alice);

    vault.updateMaxDepositCapacity(500 ether);

    assertEq(vault.maxDepositCapacity(), 500 ether);

    vm.prank(bob);
    vm.expectRevert(
      FixedTermInvestmentVault.DepositCapacityExceeded.selector
    );
    vault.deposit(1, bob);
  }

  function test_adminCanMoveEndDateForwardAndBackward() public {
    uint256 laterEndDate = vault.operationEndDate() + THIRTY_DAYS;

    vault.updateOperationEndDate(laterEndDate);
    assertEq(vault.operationEndDate(), laterEndDate);

    uint256 earlierEndDate = block.timestamp + ONE_WEEK;
    vault.updateOperationEndDate(earlierEndDate);
    assertEq(vault.operationEndDate(), earlierEndDate);
  }

  function test_onlyAdminCanUpdateInvestmentParams() public {
    vm.expectRevert();
    vm.prank(alice);
    vault.updateMaxDepositCapacity(CAPACITY + 1);

    vm.expectRevert();
    vm.prank(bob);
    vault.updateOperationEndDate(block.timestamp + ONE_WEEK);
  }

  function test_onlyAdminCanUpdateWithdrawalRequestSwitch()
    public
  {
    vm.expectRevert();
    vm.prank(alice);
    vault.updateWithdrawalRequestsEnabled(false);
  }

  function test_onlyAdminCanUseMigrationControls() public {
    vm.expectRevert();
    vm.prank(alice);
    vault.mintMigrationPosition(alice, 100 ether);

    vm.expectRevert();
    vm.prank(alice);
    vault.disableMigrationMinting();
  }

  function test_migrationMintRejectsZeroAddressAndZeroAmount()
    public
  {
    vm.expectRevert(FixedTermInvestmentVault.ZeroAddress.selector);
    vault.mintMigrationPosition(address(0), 100 ether);

    vm.expectRevert(FixedTermInvestmentVault.ZeroAmount.selector);
    vault.mintMigrationPosition(alice, 0);
  }
}
