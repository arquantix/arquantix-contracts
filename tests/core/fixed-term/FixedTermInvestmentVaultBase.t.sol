// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

import { Test } from "foundry/lib/forge-std/src/Test.sol";
import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import { ERC1967Proxy } from "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { FixedTermInvestmentVault } from "src/core/FixedTermInvestmentVault.sol";
import { GlobalOwner } from "src/globals/GlobalOwner.sol";
import { GlobalPause } from "src/globals/GlobalPause.sol";
import { GlobalAccessList } from "src/globals/GlobalAccessList.sol";
import { ILedgityYieldVault } from "src/interfaces/ILedgityYieldVault.sol";
import { IVaultLiquidityModule } from "src/interfaces/IVaultLiquidityModule.sol";
import { IAaveLendingPoolV3 } from "src/interfaces/IAaveLendingPoolV3.sol";

contract FixedTermMockERC20 is ERC20 {
  uint8 private immutable _decimals;

  constructor(
    string memory name_,
    string memory symbol_,
    uint8 decimals_
  ) ERC20(name_, symbol_) {
    _decimals = decimals_;
  }

  function decimals() public view override returns (uint8) {
    return _decimals;
  }

  function mint(address account, uint256 amount) external {
    _mint(account, amount);
  }
}

abstract contract FixedTermInvestmentVaultBase is Test {
  uint256 internal constant INITIAL_BALANCE = 1_000_000 ether;
  uint256 internal constant CAPACITY = 1_000 ether;
  uint256 internal constant ONE_WEEK = 7 days;
  uint256 internal constant THIRTY_DAYS = 30 days;

  address internal alice = address(0xA11CE);
  address internal bob = address(0xB0B);
  address internal carol = address(0xCA401);
  address internal operator = address(0x0A11);
  address internal liquidityManager = address(0x777);
  address payable internal feeRecipient = payable(address(0xfee));

  FixedTermMockERC20 internal asset;
  GlobalOwner internal globalOwner;
  GlobalPause internal globalPause;
  GlobalAccessList internal globalAccessList;
  FixedTermInvestmentVault internal vault;

  function setUp() public virtual {
    asset = new FixedTermMockERC20("Mock USD", "mUSD", 18);
    asset.mint(alice, INITIAL_BALANCE);
    asset.mint(bob, INITIAL_BALANCE);
    asset.mint(carol, INITIAL_BALANCE);
    asset.mint(liquidityManager, INITIAL_BALANCE);

    globalOwner = GlobalOwner(
      address(
        new ERC1967Proxy(
          address(new GlobalOwner()),
          abi.encodeWithSelector(GlobalOwner.initialize.selector)
        )
      )
    );
    globalPause = GlobalPause(
      address(
        new ERC1967Proxy(
          address(new GlobalPause()),
          abi.encodeWithSelector(
            GlobalPause.initialize.selector,
            address(globalOwner)
          )
        )
      )
    );
    globalAccessList = GlobalAccessList(
      address(
        new ERC1967Proxy(
          address(new GlobalAccessList()),
          abi.encodeWithSelector(
            GlobalAccessList.initialize.selector,
            address(globalOwner)
          )
        )
      )
    );

    vault = _createVault(CAPACITY, block.timestamp + THIRTY_DAYS);

    _approveVault(alice);
    _approveVault(bob);
    _approveVault(carol);
    _approveVault(liquidityManager);
  }

  function _createVault(
    uint256 maxDepositCapacity,
    uint256 operationEndDate
  ) internal returns (FixedTermInvestmentVault) {
    FixedTermInvestmentVault implementation = new FixedTermInvestmentVault();
    ERC1967Proxy proxy = new ERC1967Proxy(address(implementation), "");
    FixedTermInvestmentVault fixedTermVault = FixedTermInvestmentVault(
      address(proxy)
    );

    fixedTermVault.initialize(
      ILedgityYieldVault.VaultParams({
        name: "Fixed Term Vault",
        symbol: "ftUSD",
        asset: IERC20(address(asset)),
        lToken: IERC20(address(0)),
        stakeToken: IERC20(address(0)),
        stakeForFeeReduction: 0,
        stakeForInstantWithdrawal: 0,
        globalOwner: address(globalOwner),
        globalPause: address(globalPause),
        globalAccessList: address(globalAccessList),
        liquidityManager: liquidityManager,
        feeRecipient: feeRecipient,
        liquidityBufferRate: 0,
        aaveLendingPool: IAaveLendingPoolV3(address(0))
      }),
      IVaultLiquidityModule.VaultLiquidityInitParams({
        highWaterMark: 0,
        deploymentDelay: 0,
        initialAssetsPerShare: 0,
        yieldAPR: 0,
        managementFeeRate: 0,
        performanceFeeRate: 0,
        withdrawalFeeRate: 0,
        withdrawalGasFee: 0
      })
    );

    fixedTermVault.updateMaxDepositCapacity(maxDepositCapacity);
    fixedTermVault.updateOperationEndDate(operationEndDate);

    return fixedTermVault;
  }

  function _approveVault(address user) internal {
    vm.prank(user);
    asset.approve(address(vault), type(uint256).max);
  }

  function _requestIds(
    uint256 requestId
  ) internal pure returns (uint256[] memory requestIds) {
    requestIds = new uint256[](1);
    requestIds[0] = requestId;
  }

  function _requestIds(
    uint256 requestId0,
    uint256 requestId1
  ) internal pure returns (uint256[] memory requestIds) {
    requestIds = new uint256[](2);
    requestIds[0] = requestId0;
    requestIds[1] = requestId1;
  }
}
