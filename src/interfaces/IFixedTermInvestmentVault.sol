// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

// Interfaces
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { IAaveLendingPoolV3 } from "src/interfaces/IAaveLendingPoolV3.sol";
import { ILedgityDataProvider } from "src/interfaces/ILedgityDataProvider.sol";
import { IVaultLiquidityModule } from "src/interfaces/IVaultLiquidityModule.sol";
import { ILedgityYieldVault } from "src/interfaces/ILedgityYieldVault.sol";

interface IFixedTermInvestmentVault is ILedgityYieldVault {}
