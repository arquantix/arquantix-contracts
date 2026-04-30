// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { Initializable } from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import { UUPSUpgradeable } from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import { OwnableUpgradeable } from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import { PausableUpgradeable } from "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import { GlobalOwner } from "./GlobalOwner.sol";

/**
 * @title GlobalPause
 * @author Lila Rest (https://lila.rest)
 * @custom:security-contact security@ledgity.com
 *
 * @notice Holds a global pause state shared by all contracts of the Ledgity Yield
 * codebase.
 *
 * @dev For further details, see "GlobalPause" section of whitepaper.
 * @custom:security-contact security@ledgity.com
 */
contract GlobalPause is
  Initializable,
  UUPSUpgradeable,
  OwnableUpgradeable,
  PausableUpgradeable
{
  /// @notice Reference to the GlobalOwner contract
  GlobalOwner public globalOwner;

  /**
   * @notice Prevents implementation contract from being initialized as recommended by
   * OpenZeppelin.
   * @dev See: https://docs.openzeppelin.com/contracts/4.x/api/proxy#Initializable-_disableInitializers--
   * @custom:oz-upgrades-unsafe-allow constructor
   */
  constructor() {
    _disableInitializers();
  }

  /**
   * @notice Initializer function of the contract. It replaces the constructor()
   * function in the context of upgradeable contracts.
   * @dev See: https://docs.openzeppelin.com/contracts/4.x/upgradeable
   * @param globalOwner_ The address of the GlobalOwner contract.
   */
  function initialize(address globalOwner_) public initializer {
    __Ownable_init();
    __Pausable_init();
    __UUPSUpgradeable_init();
    globalOwner = GlobalOwner(globalOwner_);
  }

  /**
   * @notice Override of OwnableUpgradeable.owner() that retrieves the owner's address
   * from the GlobalOwner contract instead.
   * @return The address of the owner
   */
  function owner() public view override returns (address) {
    return globalOwner.owner();
  }

  /**
   * @notice Override of OwnableUpgradeable.transferOwnership() that always reverts.
   * Ownership is managed by the GlobalOwner contract and must be modified there.
   */
  function transferOwnership(
    address newOwner
  ) public override onlyOwner {
    newOwner; // Silence unused variable compiler warning
    revert("Ownership is managed by GlobalOwner contract");
  }

  /**
   * @notice Override of OwnableUpgradeable.renounceOwnership() that always reverts.
   * Ownership is managed by the GlobalOwner contract and must be modified there.
   */
  function renounceOwnership() public override onlyOwner {
    revert("Ownership is managed by GlobalOwner contract");
  }

  /**
   * @notice Override of UUPSUpgradeable._authorizeUpgrade() function restricted to
   * global owner. It is called by the proxy contract during an upgrade.
   * @param newImplementation The address of the new implementation contract.
   */
  function _authorizeUpgrade(
    address newImplementation
  ) internal override onlyOwner {}

  /**
   * @dev Public implementation of PausableUpgradeable's pausing and unpausing functions
   * but restricted to contract's owner.
   */
  function pause() public onlyOwner {
    _pause();
  }

  function unpause() public onlyOwner {
    _unpause();
  }
}
