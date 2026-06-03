import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FixedTermInvestmentVault
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fixedTermInvestmentVaultAbi = [
  { type: 'error', inputs: [], name: 'DepositCapacityExceeded' },
  { type: 'error', inputs: [], name: 'InsufficientLiquidity' },
  { type: 'error', inputs: [], name: 'InsufficientStakeForInstantWithdrawal' },
  { type: 'error', inputs: [], name: 'MigrationMintingDisabled' },
  { type: 'error', inputs: [], name: 'MissingWithdrawalRequestFee' },
  { type: 'error', inputs: [], name: 'MustImplementMintAndBurnFunctions' },
  { type: 'error', inputs: [], name: 'OnlyLiquidityManager' },
  { type: 'error', inputs: [], name: 'OperationNotEnded' },
  { type: 'error', inputs: [], name: 'RateAboveHundredPercent' },
  { type: 'error', inputs: [], name: 'RequestAlreadyProcessed' },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderNotBurner',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderNotCCIPAdmin',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderNotMinter',
  },
  { type: 'error', inputs: [], name: 'TransferFailed' },
  { type: 'error', inputs: [], name: 'UserIsRestricted' },
  { type: 'error', inputs: [], name: 'WithdrawalRequestSharesUnavailable' },
  { type: 'error', inputs: [], name: 'WithdrawalRequestsDisabled' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroAddressCCIPAdmin' },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAPR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'oldAPR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'APRUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'withdrawalFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AccountWithdrawalFeeSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bufferRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BufferRateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'burner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BurnAccessGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'burner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BurnAccessRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CCIPAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldDelay',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'newDelay',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'DeploymentDelayUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'managementFeeRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'performanceRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'withdrawalRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FeeRatesUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldHighWaterMark',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newHighWaterMark',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'HighWaterMarkUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [],
    name: 'MigrationMintingPermanentlyDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MigrationSharesMinted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MintAccessGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MintAccessRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAPR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RateCheckpointUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTotalAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newTotalAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TotalAssetsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidityManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'feeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'VaultManagersUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newStakeToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newStakeForFeeReduction',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newStakeForInstantWithdrawal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAaveLendingPool',
        internalType: 'contract IAaveLendingPoolV3',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'VaultParamsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldGasFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newGasFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawalGasFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawalProcessed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawalRequested',
  },
  {
    type: 'function',
    inputs: [],
    name: 'RAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'aToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'aaveLendingPool',
    outputs: [
      {
        name: '',
        internalType: 'contract IAaveLendingPoolV3',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'accountWithdrawalFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'asset',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'burnFrom', internalType: 'address', type: 'address' },
      { name: 'remintTo', internalType: 'address', type: 'address' },
    ],
    name: 'burnAndRemintBlacklistedShares',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'cancelPendingWithdrawalRequests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'convertToAssets',
    outputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'convertToShares',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimalsOffset',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deploymentDelay',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'deposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'depositToBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'disableMigrationMinting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeRecipient',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBufferAssets',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCCIPAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFeeData',
    outputs: [
      { name: 'feeShares', internalType: 'uint256', type: 'uint256' },
      { name: 'pricePerShare', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'onlyPending', internalType: 'bool', type: 'bool' },
      { name: 'maxRange', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getUserWithdrawalRequests',
    outputs: [
      {
        name: 'requests',
        internalType: 'struct ILedgityDataProvider.WithdrawalRequestRead[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'processed', internalType: 'bool', type: 'bool' },
          { name: 'hasFeeReduction', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getWithdrawalRequestCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'onlyPending', internalType: 'bool', type: 'bool' },
      { name: 'maxRange', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getWithdrawalRequests',
    outputs: [
      {
        name: 'requests',
        internalType: 'struct ILedgityDataProvider.WithdrawalRequestRead[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'processed', internalType: 'bool', type: 'bool' },
          { name: 'hasFeeReduction', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'getWithdrawalRequestsByIds',
    outputs: [
      {
        name: 'requests',
        internalType: 'struct ILedgityDataProvider.WithdrawalRequestRead[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'processed', internalType: 'bool', type: 'bool' },
          { name: 'hasFeeReduction', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalOwner',
    outputs: [
      { name: '', internalType: 'contract IGlobalOwner', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalPause',
    outputs: [
      { name: '', internalType: 'contract IGlobalPause', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalRestrict',
    outputs: [
      { name: '', internalType: 'contract IGlobalAccessList', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'burner', internalType: 'address', type: 'address' }],
    name: 'grantBurnRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'grantMintRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'harvestFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hasBufferStrategy',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'highWaterMark',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IFixedTermInvestmentVault.VaultParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'asset', internalType: 'contract IERC20', type: 'address' },
          {
            name: 'stakeToken',
            internalType: 'contract IERC20',
            type: 'address',
          },
          {
            name: 'stakeForFeeReduction',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'stakeForInstantWithdrawal',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'globalOwner', internalType: 'address', type: 'address' },
          { name: 'globalPause', internalType: 'address', type: 'address' },
          {
            name: 'globalAccessList',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'liquidityManager',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'feeRecipient',
            internalType: 'address payable',
            type: 'address',
          },
          {
            name: 'liquidityBufferRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'aaveLendingPool',
            internalType: 'contract IAaveLendingPoolV3',
            type: 'address',
          },
        ],
      },
      {
        name: 'vaultLiquidityInitParams',
        internalType: 'struct IVaultLiquidityModule.VaultLiquidityInitParams',
        type: 'tuple',
        components: [
          { name: 'highWaterMark', internalType: 'uint256', type: 'uint256' },
          {
            name: 'initialAssetsPerShare',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'yieldAPR', internalType: 'uint256', type: 'uint256' },
          {
            name: 'managementFeeRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'performanceFeeRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'withdrawalFeeRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'withdrawalGasFee',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'deploymentDelay', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isBurner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isPausedLocal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastCompoundTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastFeeTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidityBufferRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidityManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'managementFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'maxDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxDepositCapacity',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'maxMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'maxRedeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'maxWithdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'migrationMintingEnabled',
    outputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'assets', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintMigrationPosition',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'operationEndDate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseLocal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'performanceFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'previewDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'previewMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'previewRedeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'previewWithdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'addAssets', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'processRequests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'recoverERC20',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares_', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver_', internalType: 'address', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'requestWithdrawal',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'burner', internalType: 'address', type: 'address' }],
    name: 'revokeBurnRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'revokeMintRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'withdrawalFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAccountWithdrawalFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'setCCIPAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newTotalAssets', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setTotalAssets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'skimBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeForFeeReduction',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeForInstantWithdrawal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalAssets',
    outputs: [
      { name: 'currentTotalAssets', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpauseLocal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAPR', internalType: 'uint256', type: 'uint256' }],
    name: 'updateAPR',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'bufferRate', internalType: 'uint256', type: 'uint256' }],
    name: 'updateBufferRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newDeploymentDelay', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'updateDeploymentDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'managementRate_', internalType: 'uint256', type: 'uint256' },
      { name: 'performanceRate_', internalType: 'uint256', type: 'uint256' },
      { name: 'withdrawalRate_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateFeeRates',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newHighWaterMark', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateHighWaterMark',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'maxDepositCapacity_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateMaxDepositCapacity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operationEndDate_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateOperationEndDate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newLiquidityManager', internalType: 'address', type: 'address' },
      {
        name: 'newFeeRecipient',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    name: 'updateVaultManagers',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newStakeToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      {
        name: 'newStakeForFeeReduction',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'newStakeForInstantWithdrawal',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'newAaveLendingPool',
        internalType: 'contract IAaveLendingPoolV3',
        type: 'address',
      },
    ],
    name: 'updateVaultParams',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newWithdrawalGasFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateWithdrawalGasFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
    name: 'updateWithdrawalRequestsEnabled',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets_', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver_', internalType: 'address', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawalFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawalGasFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawalRequestShares',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawalRequests',
    outputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'processed', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawalRequestsEnabled',
    outputs: [{ name: 'enabled', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'yieldAPR',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GlobalAccessList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const globalAccessListAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  { type: 'error', inputs: [], name: 'AccountAlreadyRestricted' },
  { type: 'error', inputs: [], name: 'AccountNotRestricted' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RestrictAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UnrestrictAccount',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'nbAccounts', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRestrictedAccounts',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalOwner',
    outputs: [
      { name: '', internalType: 'contract IGlobalOwner', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'globalOwner_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isRestricted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'restrictAccount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'restrictedAccounts',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'unRestrictAccount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const globalAccessListAddress = {
  8453: '0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const globalAccessListConfig = {
  address: globalAccessListAddress,
  abi: globalAccessListAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GlobalOwner
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const globalOwnerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const globalOwnerAddress = {
  8453: '0x705Ee678D187CeAcbA3707C788b7B439b41cF085',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const globalOwnerConfig = {
  address: globalOwnerAddress,
  abi: globalOwnerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GlobalPause
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const globalPauseAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalOwner',
    outputs: [
      { name: '', internalType: 'contract GlobalOwner', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'globalOwner_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
] as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const globalPauseAddress = {
  8453: '0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const globalPauseConfig = {
  address: globalPauseAddress,
  abi: globalPauseAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LedgityYieldVault
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ledgityYieldVaultAbi = [
  { type: 'error', inputs: [], name: 'InsufficientLiquidity' },
  { type: 'error', inputs: [], name: 'InsufficientStakeForInstantWithdrawal' },
  { type: 'error', inputs: [], name: 'MissingWithdrawalRequestFee' },
  { type: 'error', inputs: [], name: 'MustImplementMintAndBurnFunctions' },
  { type: 'error', inputs: [], name: 'NoLTokenSet' },
  { type: 'error', inputs: [], name: 'OnlyLiquidityManager' },
  { type: 'error', inputs: [], name: 'RateAboveHundredPercent' },
  { type: 'error', inputs: [], name: 'RequestAlreadyProcessed' },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderNotBurner',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderNotCCIPAdmin',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'SenderNotMinter',
  },
  { type: 'error', inputs: [], name: 'TransferFailed' },
  { type: 'error', inputs: [], name: 'UserIsRestricted' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroAddressCCIPAdmin' },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAPR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'oldAPR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'APRUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'withdrawalFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AccountWithdrawalFeeSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'bufferRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BufferRateUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'burner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BurnAccessGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'burner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BurnAccessRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CCIPAdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldDelay',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'newDelay',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
    ],
    name: 'DeploymentDelayUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'managementFeeRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'performanceRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'withdrawalRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'FeeRatesUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldHighWaterMark',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newHighWaterMark',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'HighWaterMarkUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MintAccessGranted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MintAccessRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Paused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAPR',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RateCheckpointUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldTotalAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newTotalAssets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TotalAssetsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'Unpaused',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'liquidityManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'feeRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'VaultManagersUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newLToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newStakeToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newStakeForFeeReduction',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newStakeForInstantWithdrawal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newAaveLendingPool',
        internalType: 'contract IAaveLendingPoolV3',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'VaultParamsUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'assets',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldGasFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newGasFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawalGasFeeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawalProcessed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'shares',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'WithdrawalRequested',
  },
  {
    type: 'function',
    inputs: [],
    name: 'RAY',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'aToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'aaveLendingPool',
    outputs: [
      {
        name: '',
        internalType: 'contract IAaveLendingPoolV3',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'accountWithdrawalFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'asset',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'burnFrom', internalType: 'address', type: 'address' },
      { name: 'remintTo', internalType: 'address', type: 'address' },
    ],
    name: 'burnAndRemintBlacklistedShares',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'convertToAssets',
    outputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'convertToShares',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimalsOffset',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'subtractedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deploymentDelay',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'deposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'depositToBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'feeRecipient',
    outputs: [{ name: '', internalType: 'address payable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBufferAssets',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCCIPAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getFeeData',
    outputs: [
      { name: 'feeShares', internalType: 'uint256', type: 'uint256' },
      { name: 'pricePerShare', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'onlyPending', internalType: 'bool', type: 'bool' },
      { name: 'maxRange', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getUserWithdrawalRequests',
    outputs: [
      {
        name: 'requests',
        internalType: 'struct ILedgityDataProvider.WithdrawalRequestRead[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'processed', internalType: 'bool', type: 'bool' },
          { name: 'hasFeeReduction', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getWithdrawalRequestCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'onlyPending', internalType: 'bool', type: 'bool' },
      { name: 'maxRange', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getWithdrawalRequests',
    outputs: [
      {
        name: 'requests',
        internalType: 'struct ILedgityDataProvider.WithdrawalRequestRead[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'processed', internalType: 'bool', type: 'bool' },
          { name: 'hasFeeReduction', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'getWithdrawalRequestsByIds',
    outputs: [
      {
        name: 'requests',
        internalType: 'struct ILedgityDataProvider.WithdrawalRequestRead[]',
        type: 'tuple[]',
        components: [
          { name: 'requestId', internalType: 'uint256', type: 'uint256' },
          { name: 'user', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
          { name: 'processed', internalType: 'bool', type: 'bool' },
          { name: 'hasFeeReduction', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalOwner',
    outputs: [
      { name: '', internalType: 'contract IGlobalOwner', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalPause',
    outputs: [
      { name: '', internalType: 'contract IGlobalPause', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'globalRestrict',
    outputs: [
      { name: '', internalType: 'contract IGlobalAccessList', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'burner', internalType: 'address', type: 'address' }],
    name: 'grantBurnRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'grantMintRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'harvestFees',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'hasBufferStrategy',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'highWaterMark',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'addedValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct ILedgityYieldVault.VaultParams',
        type: 'tuple',
        components: [
          { name: 'name', internalType: 'string', type: 'string' },
          { name: 'symbol', internalType: 'string', type: 'string' },
          { name: 'asset', internalType: 'contract IERC20', type: 'address' },
          { name: 'lToken', internalType: 'contract IERC20', type: 'address' },
          {
            name: 'stakeToken',
            internalType: 'contract IERC20',
            type: 'address',
          },
          {
            name: 'stakeForFeeReduction',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'stakeForInstantWithdrawal',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'globalOwner', internalType: 'address', type: 'address' },
          { name: 'globalPause', internalType: 'address', type: 'address' },
          {
            name: 'globalAccessList',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'liquidityManager',
            internalType: 'address',
            type: 'address',
          },
          {
            name: 'feeRecipient',
            internalType: 'address payable',
            type: 'address',
          },
          {
            name: 'liquidityBufferRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'aaveLendingPool',
            internalType: 'contract IAaveLendingPoolV3',
            type: 'address',
          },
        ],
      },
      {
        name: 'vaultLiquidityInitParams',
        internalType: 'struct IVaultLiquidityModule.VaultLiquidityInitParams',
        type: 'tuple',
        components: [
          { name: 'highWaterMark', internalType: 'uint256', type: 'uint256' },
          {
            name: 'initialAssetsPerShare',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'yieldAPR', internalType: 'uint256', type: 'uint256' },
          {
            name: 'managementFeeRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'performanceFeeRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'withdrawalFeeRate',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'withdrawalGasFee',
            internalType: 'uint256',
            type: 'uint256',
          },
          { name: 'deploymentDelay', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isBurner',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isPausedLocal',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastCompoundTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastFeeTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidityBufferRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'liquidityManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'managementFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'maxDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'maxMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'maxRedeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'maxWithdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'migrateLToken',
    outputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver', internalType: 'address', type: 'address' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauseLocal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'performanceFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'previewDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'previewMint',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'previewRedeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'assets', internalType: 'uint256', type: 'uint256' }],
    name: 'previewWithdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requestIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'addAssets', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'processRequests',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'recoverERC20',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'shares_', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver_', internalType: 'address', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'shares', internalType: 'uint256', type: 'uint256' }],
    name: 'requestWithdrawal',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'burner', internalType: 'address', type: 'address' }],
    name: 'revokeBurnRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'revokeMintRole',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'withdrawalFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setAccountWithdrawalFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAdmin', internalType: 'address', type: 'address' }],
    name: 'setCCIPAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newTotalAssets', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setTotalAssets',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'skimBuffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeForFeeReduction',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeForInstantWithdrawal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'stakeToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalAssets',
    outputs: [
      { name: 'currentTotalAssets', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpauseLocal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAPR', internalType: 'uint256', type: 'uint256' }],
    name: 'updateAPR',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'bufferRate', internalType: 'uint256', type: 'uint256' }],
    name: 'updateBufferRate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newDeploymentDelay', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'updateDeploymentDelay',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'managementRate_', internalType: 'uint256', type: 'uint256' },
      { name: 'performanceRate_', internalType: 'uint256', type: 'uint256' },
      { name: 'withdrawalRate_', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateFeeRates',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newHighWaterMark', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateHighWaterMark',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newLiquidityManager', internalType: 'address', type: 'address' },
      {
        name: 'newFeeRecipient',
        internalType: 'address payable',
        type: 'address',
      },
    ],
    name: 'updateVaultManagers',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newLToken', internalType: 'contract IERC20', type: 'address' },
      {
        name: 'newStakeToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      {
        name: 'newStakeForFeeReduction',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'newStakeForInstantWithdrawal',
        internalType: 'uint256',
        type: 'uint256',
      },
      {
        name: 'newAaveLendingPool',
        internalType: 'contract IAaveLendingPoolV3',
        type: 'address',
      },
    ],
    name: 'updateVaultParams',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newWithdrawalGasFee', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'updateWithdrawalGasFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
    ],
    name: 'upgradeTo',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'assets_', internalType: 'uint256', type: 'uint256' },
      { name: 'receiver_', internalType: 'address', type: 'address' },
      { name: 'owner_', internalType: 'address', type: 'address' },
    ],
    name: 'withdraw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawalFeeRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'withdrawalGasFee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawalRequests',
    outputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'processed', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'yieldAPR',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const useReadFixedTermInvestmentVault =
  /*#__PURE__*/ createUseReadContract({ abi: fixedTermInvestmentVaultAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"RAY"`
 */
export const useReadFixedTermInvestmentVaultRay =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'RAY',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"aToken"`
 */
export const useReadFixedTermInvestmentVaultAToken =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'aToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"aaveLendingPool"`
 */
export const useReadFixedTermInvestmentVaultAaveLendingPool =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'aaveLendingPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"accountWithdrawalFee"`
 */
export const useReadFixedTermInvestmentVaultAccountWithdrawalFee =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'accountWithdrawalFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadFixedTermInvestmentVaultAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"asset"`
 */
export const useReadFixedTermInvestmentVaultAsset =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'asset',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadFixedTermInvestmentVaultBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"convertToAssets"`
 */
export const useReadFixedTermInvestmentVaultConvertToAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'convertToAssets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"convertToShares"`
 */
export const useReadFixedTermInvestmentVaultConvertToShares =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'convertToShares',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadFixedTermInvestmentVaultDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decimalsOffset"`
 */
export const useReadFixedTermInvestmentVaultDecimalsOffset =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decimalsOffset',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"deploymentDelay"`
 */
export const useReadFixedTermInvestmentVaultDeploymentDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'deploymentDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"feeRecipient"`
 */
export const useReadFixedTermInvestmentVaultFeeRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'feeRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getBufferAssets"`
 */
export const useReadFixedTermInvestmentVaultGetBufferAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getBufferAssets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getCCIPAdmin"`
 */
export const useReadFixedTermInvestmentVaultGetCcipAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getCCIPAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getFeeData"`
 */
export const useReadFixedTermInvestmentVaultGetFeeData =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getFeeData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getUserWithdrawalRequests"`
 */
export const useReadFixedTermInvestmentVaultGetUserWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getUserWithdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getWithdrawalRequestCount"`
 */
export const useReadFixedTermInvestmentVaultGetWithdrawalRequestCount =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getWithdrawalRequestCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getWithdrawalRequests"`
 */
export const useReadFixedTermInvestmentVaultGetWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getWithdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getWithdrawalRequestsByIds"`
 */
export const useReadFixedTermInvestmentVaultGetWithdrawalRequestsByIds =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getWithdrawalRequestsByIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"globalOwner"`
 */
export const useReadFixedTermInvestmentVaultGlobalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"globalPause"`
 */
export const useReadFixedTermInvestmentVaultGlobalPause =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const useReadFixedTermInvestmentVaultGlobalRestrict =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"hasBufferStrategy"`
 */
export const useReadFixedTermInvestmentVaultHasBufferStrategy =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'hasBufferStrategy',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"highWaterMark"`
 */
export const useReadFixedTermInvestmentVaultHighWaterMark =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'highWaterMark',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"isBurner"`
 */
export const useReadFixedTermInvestmentVaultIsBurner =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'isBurner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"isMinter"`
 */
export const useReadFixedTermInvestmentVaultIsMinter =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'isMinter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const useReadFixedTermInvestmentVaultIsPausedLocal =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"lastCompoundTime"`
 */
export const useReadFixedTermInvestmentVaultLastCompoundTime =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'lastCompoundTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"lastFeeTime"`
 */
export const useReadFixedTermInvestmentVaultLastFeeTime =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'lastFeeTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"liquidityBufferRate"`
 */
export const useReadFixedTermInvestmentVaultLiquidityBufferRate =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'liquidityBufferRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"liquidityManager"`
 */
export const useReadFixedTermInvestmentVaultLiquidityManager =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'liquidityManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"managementFeeRate"`
 */
export const useReadFixedTermInvestmentVaultManagementFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'managementFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxDeposit"`
 */
export const useReadFixedTermInvestmentVaultMaxDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxDepositCapacity"`
 */
export const useReadFixedTermInvestmentVaultMaxDepositCapacity =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxDepositCapacity',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxMint"`
 */
export const useReadFixedTermInvestmentVaultMaxMint =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxMint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxRedeem"`
 */
export const useReadFixedTermInvestmentVaultMaxRedeem =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxRedeem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxWithdraw"`
 */
export const useReadFixedTermInvestmentVaultMaxWithdraw =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxWithdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"migrationMintingEnabled"`
 */
export const useReadFixedTermInvestmentVaultMigrationMintingEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'migrationMintingEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"name"`
 */
export const useReadFixedTermInvestmentVaultName =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"operationEndDate"`
 */
export const useReadFixedTermInvestmentVaultOperationEndDate =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'operationEndDate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"owner"`
 */
export const useReadFixedTermInvestmentVaultOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"paused"`
 */
export const useReadFixedTermInvestmentVaultPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"performanceFeeRate"`
 */
export const useReadFixedTermInvestmentVaultPerformanceFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'performanceFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewDeposit"`
 */
export const useReadFixedTermInvestmentVaultPreviewDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewMint"`
 */
export const useReadFixedTermInvestmentVaultPreviewMint =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewMint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewRedeem"`
 */
export const useReadFixedTermInvestmentVaultPreviewRedeem =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewRedeem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewWithdraw"`
 */
export const useReadFixedTermInvestmentVaultPreviewWithdraw =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewWithdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadFixedTermInvestmentVaultProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"stakeForFeeReduction"`
 */
export const useReadFixedTermInvestmentVaultStakeForFeeReduction =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'stakeForFeeReduction',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"stakeForInstantWithdrawal"`
 */
export const useReadFixedTermInvestmentVaultStakeForInstantWithdrawal =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'stakeForInstantWithdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"stakeToken"`
 */
export const useReadFixedTermInvestmentVaultStakeToken =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'stakeToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadFixedTermInvestmentVaultSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"totalAssets"`
 */
export const useReadFixedTermInvestmentVaultTotalAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'totalAssets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadFixedTermInvestmentVaultTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalFeeRate"`
 */
export const useReadFixedTermInvestmentVaultWithdrawalFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalGasFee"`
 */
export const useReadFixedTermInvestmentVaultWithdrawalGasFee =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalGasFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalRequestShares"`
 */
export const useReadFixedTermInvestmentVaultWithdrawalRequestShares =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalRequestShares',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalRequests"`
 */
export const useReadFixedTermInvestmentVaultWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalRequestsEnabled"`
 */
export const useReadFixedTermInvestmentVaultWithdrawalRequestsEnabled =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalRequestsEnabled',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"yieldAPR"`
 */
export const useReadFixedTermInvestmentVaultYieldApr =
  /*#__PURE__*/ createUseReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'yieldAPR',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const useWriteFixedTermInvestmentVault =
  /*#__PURE__*/ createUseWriteContract({ abi: fixedTermInvestmentVaultAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteFixedTermInvestmentVaultApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteFixedTermInvestmentVaultBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const useWriteFixedTermInvestmentVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"cancelPendingWithdrawalRequests"`
 */
export const useWriteFixedTermInvestmentVaultCancelPendingWithdrawalRequests =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'cancelPendingWithdrawalRequests',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteFixedTermInvestmentVaultDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteFixedTermInvestmentVaultDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const useWriteFixedTermInvestmentVaultDepositToBuffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"disableMigrationMinting"`
 */
export const useWriteFixedTermInvestmentVaultDisableMigrationMinting =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'disableMigrationMinting',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const useWriteFixedTermInvestmentVaultGrantBurnRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const useWriteFixedTermInvestmentVaultGrantMintRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const useWriteFixedTermInvestmentVaultHarvestFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteFixedTermInvestmentVaultIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteFixedTermInvestmentVaultInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteFixedTermInvestmentVaultMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mintMigrationPosition"`
 */
export const useWriteFixedTermInvestmentVaultMintMigrationPosition =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mintMigrationPosition',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useWriteFixedTermInvestmentVaultPauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const useWriteFixedTermInvestmentVaultProcessRequests =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useWriteFixedTermInvestmentVaultRecoverErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteFixedTermInvestmentVaultRedeem =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteFixedTermInvestmentVaultRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const useWriteFixedTermInvestmentVaultRequestWithdrawal =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const useWriteFixedTermInvestmentVaultRevokeBurnRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const useWriteFixedTermInvestmentVaultRevokeMintRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const useWriteFixedTermInvestmentVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const useWriteFixedTermInvestmentVaultSetCcipAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const useWriteFixedTermInvestmentVaultSetTotalAssets =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const useWriteFixedTermInvestmentVaultSkimBuffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteFixedTermInvestmentVaultTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteFixedTermInvestmentVaultTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteFixedTermInvestmentVaultTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useWriteFixedTermInvestmentVaultUnpauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const useWriteFixedTermInvestmentVaultUpdateApr =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const useWriteFixedTermInvestmentVaultUpdateBufferRate =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const useWriteFixedTermInvestmentVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const useWriteFixedTermInvestmentVaultUpdateFeeRates =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const useWriteFixedTermInvestmentVaultUpdateHighWaterMark =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateMaxDepositCapacity"`
 */
export const useWriteFixedTermInvestmentVaultUpdateMaxDepositCapacity =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateMaxDepositCapacity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateOperationEndDate"`
 */
export const useWriteFixedTermInvestmentVaultUpdateOperationEndDate =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateOperationEndDate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const useWriteFixedTermInvestmentVaultUpdateVaultManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const useWriteFixedTermInvestmentVaultUpdateVaultParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const useWriteFixedTermInvestmentVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalRequestsEnabled"`
 */
export const useWriteFixedTermInvestmentVaultUpdateWithdrawalRequestsEnabled =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalRequestsEnabled',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteFixedTermInvestmentVaultUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteFixedTermInvestmentVaultUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteFixedTermInvestmentVaultWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const useSimulateFixedTermInvestmentVault =
  /*#__PURE__*/ createUseSimulateContract({ abi: fixedTermInvestmentVaultAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateFixedTermInvestmentVaultApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateFixedTermInvestmentVaultBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const useSimulateFixedTermInvestmentVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"cancelPendingWithdrawalRequests"`
 */
export const useSimulateFixedTermInvestmentVaultCancelPendingWithdrawalRequests =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'cancelPendingWithdrawalRequests',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateFixedTermInvestmentVaultDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateFixedTermInvestmentVaultDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const useSimulateFixedTermInvestmentVaultDepositToBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"disableMigrationMinting"`
 */
export const useSimulateFixedTermInvestmentVaultDisableMigrationMinting =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'disableMigrationMinting',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const useSimulateFixedTermInvestmentVaultGrantBurnRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const useSimulateFixedTermInvestmentVaultGrantMintRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const useSimulateFixedTermInvestmentVaultHarvestFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateFixedTermInvestmentVaultIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateFixedTermInvestmentVaultInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateFixedTermInvestmentVaultMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mintMigrationPosition"`
 */
export const useSimulateFixedTermInvestmentVaultMintMigrationPosition =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mintMigrationPosition',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useSimulateFixedTermInvestmentVaultPauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const useSimulateFixedTermInvestmentVaultProcessRequests =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useSimulateFixedTermInvestmentVaultRecoverErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateFixedTermInvestmentVaultRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateFixedTermInvestmentVaultRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const useSimulateFixedTermInvestmentVaultRequestWithdrawal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const useSimulateFixedTermInvestmentVaultRevokeBurnRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const useSimulateFixedTermInvestmentVaultRevokeMintRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const useSimulateFixedTermInvestmentVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const useSimulateFixedTermInvestmentVaultSetCcipAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const useSimulateFixedTermInvestmentVaultSetTotalAssets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const useSimulateFixedTermInvestmentVaultSkimBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateFixedTermInvestmentVaultTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateFixedTermInvestmentVaultTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateFixedTermInvestmentVaultTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useSimulateFixedTermInvestmentVaultUnpauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateApr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateBufferRate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateFeeRates =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateHighWaterMark =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateMaxDepositCapacity"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateMaxDepositCapacity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateMaxDepositCapacity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateOperationEndDate"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateOperationEndDate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateOperationEndDate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateVaultManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateVaultParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalRequestsEnabled"`
 */
export const useSimulateFixedTermInvestmentVaultUpdateWithdrawalRequestsEnabled =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalRequestsEnabled',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateFixedTermInvestmentVaultUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateFixedTermInvestmentVaultUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateFixedTermInvestmentVaultWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const useWatchFixedTermInvestmentVaultEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"APRUpdated"`
 */
export const useWatchFixedTermInvestmentVaultAprUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'APRUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"AccountWithdrawalFeeSet"`
 */
export const useWatchFixedTermInvestmentVaultAccountWithdrawalFeeSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'AccountWithdrawalFeeSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchFixedTermInvestmentVaultAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchFixedTermInvestmentVaultApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchFixedTermInvestmentVaultBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BufferRateUpdated"`
 */
export const useWatchFixedTermInvestmentVaultBufferRateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BufferRateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BurnAccessGranted"`
 */
export const useWatchFixedTermInvestmentVaultBurnAccessGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BurnAccessGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BurnAccessRevoked"`
 */
export const useWatchFixedTermInvestmentVaultBurnAccessRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BurnAccessRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"CCIPAdminChanged"`
 */
export const useWatchFixedTermInvestmentVaultCcipAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'CCIPAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"DeploymentDelayUpdated"`
 */
export const useWatchFixedTermInvestmentVaultDeploymentDelayUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'DeploymentDelayUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchFixedTermInvestmentVaultDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"FeeRatesUpdated"`
 */
export const useWatchFixedTermInvestmentVaultFeeRatesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'FeeRatesUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"HighWaterMarkUpdated"`
 */
export const useWatchFixedTermInvestmentVaultHighWaterMarkUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'HighWaterMarkUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchFixedTermInvestmentVaultInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MigrationMintingPermanentlyDisabled"`
 */
export const useWatchFixedTermInvestmentVaultMigrationMintingPermanentlyDisabledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MigrationMintingPermanentlyDisabled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MigrationSharesMinted"`
 */
export const useWatchFixedTermInvestmentVaultMigrationSharesMintedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MigrationSharesMinted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MintAccessGranted"`
 */
export const useWatchFixedTermInvestmentVaultMintAccessGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MintAccessGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MintAccessRevoked"`
 */
export const useWatchFixedTermInvestmentVaultMintAccessRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MintAccessRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchFixedTermInvestmentVaultOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchFixedTermInvestmentVaultPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"RateCheckpointUpdated"`
 */
export const useWatchFixedTermInvestmentVaultRateCheckpointUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'RateCheckpointUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"TotalAssetsUpdated"`
 */
export const useWatchFixedTermInvestmentVaultTotalAssetsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'TotalAssetsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchFixedTermInvestmentVaultTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchFixedTermInvestmentVaultUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchFixedTermInvestmentVaultUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"VaultManagersUpdated"`
 */
export const useWatchFixedTermInvestmentVaultVaultManagersUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'VaultManagersUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"VaultParamsUpdated"`
 */
export const useWatchFixedTermInvestmentVaultVaultParamsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'VaultParamsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchFixedTermInvestmentVaultWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"WithdrawalGasFeeUpdated"`
 */
export const useWatchFixedTermInvestmentVaultWithdrawalGasFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'WithdrawalGasFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"WithdrawalProcessed"`
 */
export const useWatchFixedTermInvestmentVaultWithdrawalProcessedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'WithdrawalProcessed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"WithdrawalRequested"`
 */
export const useWatchFixedTermInvestmentVaultWithdrawalRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'WithdrawalRequested',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessList = /*#__PURE__*/ createUseReadContract({
  abi: globalAccessListAbi,
  address: globalAccessListAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"getRestrictedAccounts"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessListGetRestrictedAccounts =
  /*#__PURE__*/ createUseReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'getRestrictedAccounts',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"globalOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessListGlobalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"isRestricted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessListIsRestricted =
  /*#__PURE__*/ createUseReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'isRestricted',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessListOwner = /*#__PURE__*/ createUseReadContract(
  {
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'owner',
  },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessListProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"restrictedAccounts"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useReadGlobalAccessListRestrictedAccounts =
  /*#__PURE__*/ createUseReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'restrictedAccounts',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessList = /*#__PURE__*/ createUseWriteContract({
  abi: globalAccessListAbi,
  address: globalAccessListAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"restrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListRestrictAccount =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'restrictAccount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"unRestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListUnRestrictAccount =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'unRestrictAccount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWriteGlobalAccessListUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessList =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"restrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListRestrictAccount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'restrictAccount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"unRestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListUnRestrictAccount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'unRestrictAccount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useSimulateGlobalAccessListUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"RestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListRestrictAccountEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'RestrictAccount',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"UnrestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const useWatchGlobalAccessListUnrestrictAccountEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'UnrestrictAccount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useReadGlobalOwner = /*#__PURE__*/ createUseReadContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useReadGlobalOwnerOwner = /*#__PURE__*/ createUseReadContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useReadGlobalOwnerPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useReadGlobalOwnerProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwner = /*#__PURE__*/ createUseWriteContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwnerAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwnerInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwnerRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwnerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwnerUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWriteGlobalOwnerUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwner = /*#__PURE__*/ createUseSimulateContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwnerAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwnerInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwnerRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwnerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwnerUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useSimulateGlobalOwnerUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const useWatchGlobalOwnerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useReadGlobalPause = /*#__PURE__*/ createUseReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"globalOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useReadGlobalPauseGlobalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useReadGlobalPauseOwner = /*#__PURE__*/ createUseReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useReadGlobalPausePaused = /*#__PURE__*/ createUseReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useReadGlobalPauseProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPause = /*#__PURE__*/ createUseWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPauseInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPausePause = /*#__PURE__*/ createUseWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPauseRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPauseTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPauseUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPauseUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWriteGlobalPauseUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPause = /*#__PURE__*/ createUseSimulateContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPauseInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPausePause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPauseRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPauseTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPauseUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPauseUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useSimulateGlobalPauseUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPausePausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const useWatchGlobalPauseUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const useReadLedgityYieldVault = /*#__PURE__*/ createUseReadContract({
  abi: ledgityYieldVaultAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"RAY"`
 */
export const useReadLedgityYieldVaultRay = /*#__PURE__*/ createUseReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'RAY',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"aToken"`
 */
export const useReadLedgityYieldVaultAToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'aToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"aaveLendingPool"`
 */
export const useReadLedgityYieldVaultAaveLendingPool =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'aaveLendingPool',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"accountWithdrawalFee"`
 */
export const useReadLedgityYieldVaultAccountWithdrawalFee =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'accountWithdrawalFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadLedgityYieldVaultAllowance =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"asset"`
 */
export const useReadLedgityYieldVaultAsset =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'asset',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLedgityYieldVaultBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"convertToAssets"`
 */
export const useReadLedgityYieldVaultConvertToAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'convertToAssets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"convertToShares"`
 */
export const useReadLedgityYieldVaultConvertToShares =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'convertToShares',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLedgityYieldVaultDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decimalsOffset"`
 */
export const useReadLedgityYieldVaultDecimalsOffset =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decimalsOffset',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"deploymentDelay"`
 */
export const useReadLedgityYieldVaultDeploymentDelay =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'deploymentDelay',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"feeRecipient"`
 */
export const useReadLedgityYieldVaultFeeRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'feeRecipient',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getBufferAssets"`
 */
export const useReadLedgityYieldVaultGetBufferAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getBufferAssets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getCCIPAdmin"`
 */
export const useReadLedgityYieldVaultGetCcipAdmin =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getCCIPAdmin',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getFeeData"`
 */
export const useReadLedgityYieldVaultGetFeeData =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getFeeData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getUserWithdrawalRequests"`
 */
export const useReadLedgityYieldVaultGetUserWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getUserWithdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getWithdrawalRequestCount"`
 */
export const useReadLedgityYieldVaultGetWithdrawalRequestCount =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getWithdrawalRequestCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getWithdrawalRequests"`
 */
export const useReadLedgityYieldVaultGetWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getWithdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getWithdrawalRequestsByIds"`
 */
export const useReadLedgityYieldVaultGetWithdrawalRequestsByIds =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getWithdrawalRequestsByIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"globalOwner"`
 */
export const useReadLedgityYieldVaultGlobalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"globalPause"`
 */
export const useReadLedgityYieldVaultGlobalPause =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const useReadLedgityYieldVaultGlobalRestrict =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"hasBufferStrategy"`
 */
export const useReadLedgityYieldVaultHasBufferStrategy =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'hasBufferStrategy',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"highWaterMark"`
 */
export const useReadLedgityYieldVaultHighWaterMark =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'highWaterMark',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"isBurner"`
 */
export const useReadLedgityYieldVaultIsBurner =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'isBurner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"isMinter"`
 */
export const useReadLedgityYieldVaultIsMinter =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'isMinter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const useReadLedgityYieldVaultIsPausedLocal =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"lToken"`
 */
export const useReadLedgityYieldVaultLToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'lToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"lastCompoundTime"`
 */
export const useReadLedgityYieldVaultLastCompoundTime =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'lastCompoundTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"lastFeeTime"`
 */
export const useReadLedgityYieldVaultLastFeeTime =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'lastFeeTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"liquidityBufferRate"`
 */
export const useReadLedgityYieldVaultLiquidityBufferRate =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'liquidityBufferRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"liquidityManager"`
 */
export const useReadLedgityYieldVaultLiquidityManager =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'liquidityManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"managementFeeRate"`
 */
export const useReadLedgityYieldVaultManagementFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'managementFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxDeposit"`
 */
export const useReadLedgityYieldVaultMaxDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'maxDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxMint"`
 */
export const useReadLedgityYieldVaultMaxMint =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'maxMint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxRedeem"`
 */
export const useReadLedgityYieldVaultMaxRedeem =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'maxRedeem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxWithdraw"`
 */
export const useReadLedgityYieldVaultMaxWithdraw =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'maxWithdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"name"`
 */
export const useReadLedgityYieldVaultName = /*#__PURE__*/ createUseReadContract(
  { abi: ledgityYieldVaultAbi, functionName: 'name' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLedgityYieldVaultOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"paused"`
 */
export const useReadLedgityYieldVaultPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"performanceFeeRate"`
 */
export const useReadLedgityYieldVaultPerformanceFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'performanceFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewDeposit"`
 */
export const useReadLedgityYieldVaultPreviewDeposit =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewDeposit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewMint"`
 */
export const useReadLedgityYieldVaultPreviewMint =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewMint',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewRedeem"`
 */
export const useReadLedgityYieldVaultPreviewRedeem =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewRedeem',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewWithdraw"`
 */
export const useReadLedgityYieldVaultPreviewWithdraw =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewWithdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadLedgityYieldVaultProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"stakeForFeeReduction"`
 */
export const useReadLedgityYieldVaultStakeForFeeReduction =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'stakeForFeeReduction',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"stakeForInstantWithdrawal"`
 */
export const useReadLedgityYieldVaultStakeForInstantWithdrawal =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'stakeForInstantWithdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"stakeToken"`
 */
export const useReadLedgityYieldVaultStakeToken =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'stakeToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadLedgityYieldVaultSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"totalAssets"`
 */
export const useReadLedgityYieldVaultTotalAssets =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'totalAssets',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLedgityYieldVaultTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdrawalFeeRate"`
 */
export const useReadLedgityYieldVaultWithdrawalFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdrawalFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdrawalGasFee"`
 */
export const useReadLedgityYieldVaultWithdrawalGasFee =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdrawalGasFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdrawalRequests"`
 */
export const useReadLedgityYieldVaultWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"yieldAPR"`
 */
export const useReadLedgityYieldVaultYieldApr =
  /*#__PURE__*/ createUseReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'yieldAPR',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const useWriteLedgityYieldVault = /*#__PURE__*/ createUseWriteContract({
  abi: ledgityYieldVaultAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteLedgityYieldVaultApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteLedgityYieldVaultBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const useWriteLedgityYieldVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLedgityYieldVaultDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const useWriteLedgityYieldVaultDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const useWriteLedgityYieldVaultDepositToBuffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const useWriteLedgityYieldVaultGrantBurnRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const useWriteLedgityYieldVaultGrantMintRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const useWriteLedgityYieldVaultHarvestFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLedgityYieldVaultIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteLedgityYieldVaultInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"migrateLToken"`
 */
export const useWriteLedgityYieldVaultMigrateLToken =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'migrateLToken',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteLedgityYieldVaultMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useWriteLedgityYieldVaultPauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const useWriteLedgityYieldVaultProcessRequests =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useWriteLedgityYieldVaultRecoverErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const useWriteLedgityYieldVaultRedeem =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLedgityYieldVaultRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const useWriteLedgityYieldVaultRequestWithdrawal =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const useWriteLedgityYieldVaultRevokeBurnRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const useWriteLedgityYieldVaultRevokeMintRole =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const useWriteLedgityYieldVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const useWriteLedgityYieldVaultSetCcipAdmin =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const useWriteLedgityYieldVaultSetTotalAssets =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const useWriteLedgityYieldVaultSkimBuffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLedgityYieldVaultTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteLedgityYieldVaultTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLedgityYieldVaultTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useWriteLedgityYieldVaultUnpauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const useWriteLedgityYieldVaultUpdateApr =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const useWriteLedgityYieldVaultUpdateBufferRate =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const useWriteLedgityYieldVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const useWriteLedgityYieldVaultUpdateFeeRates =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const useWriteLedgityYieldVaultUpdateHighWaterMark =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const useWriteLedgityYieldVaultUpdateVaultManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const useWriteLedgityYieldVaultUpdateVaultParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const useWriteLedgityYieldVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteLedgityYieldVaultUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteLedgityYieldVaultUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteLedgityYieldVaultWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const useSimulateLedgityYieldVault =
  /*#__PURE__*/ createUseSimulateContract({ abi: ledgityYieldVaultAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateLedgityYieldVaultApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateLedgityYieldVaultBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const useSimulateLedgityYieldVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLedgityYieldVaultDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const useSimulateLedgityYieldVaultDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const useSimulateLedgityYieldVaultDepositToBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const useSimulateLedgityYieldVaultGrantBurnRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const useSimulateLedgityYieldVaultGrantMintRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const useSimulateLedgityYieldVaultHarvestFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLedgityYieldVaultIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateLedgityYieldVaultInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"migrateLToken"`
 */
export const useSimulateLedgityYieldVaultMigrateLToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'migrateLToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateLedgityYieldVaultMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useSimulateLedgityYieldVaultPauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const useSimulateLedgityYieldVaultProcessRequests =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useSimulateLedgityYieldVaultRecoverErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const useSimulateLedgityYieldVaultRedeem =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLedgityYieldVaultRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const useSimulateLedgityYieldVaultRequestWithdrawal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const useSimulateLedgityYieldVaultRevokeBurnRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const useSimulateLedgityYieldVaultRevokeMintRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const useSimulateLedgityYieldVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const useSimulateLedgityYieldVaultSetCcipAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const useSimulateLedgityYieldVaultSetTotalAssets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const useSimulateLedgityYieldVaultSkimBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLedgityYieldVaultTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateLedgityYieldVaultTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLedgityYieldVaultTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useSimulateLedgityYieldVaultUnpauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const useSimulateLedgityYieldVaultUpdateApr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const useSimulateLedgityYieldVaultUpdateBufferRate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const useSimulateLedgityYieldVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const useSimulateLedgityYieldVaultUpdateFeeRates =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const useSimulateLedgityYieldVaultUpdateHighWaterMark =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const useSimulateLedgityYieldVaultUpdateVaultManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const useSimulateLedgityYieldVaultUpdateVaultParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const useSimulateLedgityYieldVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateLedgityYieldVaultUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateLedgityYieldVaultUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateLedgityYieldVaultWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const useWatchLedgityYieldVaultEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: ledgityYieldVaultAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"APRUpdated"`
 */
export const useWatchLedgityYieldVaultAprUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'APRUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"AccountWithdrawalFeeSet"`
 */
export const useWatchLedgityYieldVaultAccountWithdrawalFeeSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'AccountWithdrawalFeeSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchLedgityYieldVaultAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchLedgityYieldVaultApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchLedgityYieldVaultBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BufferRateUpdated"`
 */
export const useWatchLedgityYieldVaultBufferRateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BufferRateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BurnAccessGranted"`
 */
export const useWatchLedgityYieldVaultBurnAccessGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BurnAccessGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BurnAccessRevoked"`
 */
export const useWatchLedgityYieldVaultBurnAccessRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BurnAccessRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"CCIPAdminChanged"`
 */
export const useWatchLedgityYieldVaultCcipAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'CCIPAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"DeploymentDelayUpdated"`
 */
export const useWatchLedgityYieldVaultDeploymentDelayUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'DeploymentDelayUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchLedgityYieldVaultDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"FeeRatesUpdated"`
 */
export const useWatchLedgityYieldVaultFeeRatesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'FeeRatesUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"HighWaterMarkUpdated"`
 */
export const useWatchLedgityYieldVaultHighWaterMarkUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'HighWaterMarkUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchLedgityYieldVaultInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"MintAccessGranted"`
 */
export const useWatchLedgityYieldVaultMintAccessGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'MintAccessGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"MintAccessRevoked"`
 */
export const useWatchLedgityYieldVaultMintAccessRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'MintAccessRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLedgityYieldVaultOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchLedgityYieldVaultPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"RateCheckpointUpdated"`
 */
export const useWatchLedgityYieldVaultRateCheckpointUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'RateCheckpointUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"TotalAssetsUpdated"`
 */
export const useWatchLedgityYieldVaultTotalAssetsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'TotalAssetsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLedgityYieldVaultTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchLedgityYieldVaultUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchLedgityYieldVaultUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"VaultManagersUpdated"`
 */
export const useWatchLedgityYieldVaultVaultManagersUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'VaultManagersUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"VaultParamsUpdated"`
 */
export const useWatchLedgityYieldVaultVaultParamsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'VaultParamsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchLedgityYieldVaultWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"WithdrawalGasFeeUpdated"`
 */
export const useWatchLedgityYieldVaultWithdrawalGasFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'WithdrawalGasFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"WithdrawalProcessed"`
 */
export const useWatchLedgityYieldVaultWithdrawalProcessedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'WithdrawalProcessed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"WithdrawalRequested"`
 */
export const useWatchLedgityYieldVaultWithdrawalRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'WithdrawalRequested',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const readFixedTermInvestmentVault = /*#__PURE__*/ createReadContract({
  abi: fixedTermInvestmentVaultAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"RAY"`
 */
export const readFixedTermInvestmentVaultRay = /*#__PURE__*/ createReadContract(
  { abi: fixedTermInvestmentVaultAbi, functionName: 'RAY' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"aToken"`
 */
export const readFixedTermInvestmentVaultAToken =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'aToken',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"aaveLendingPool"`
 */
export const readFixedTermInvestmentVaultAaveLendingPool =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'aaveLendingPool',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"accountWithdrawalFee"`
 */
export const readFixedTermInvestmentVaultAccountWithdrawalFee =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'accountWithdrawalFee',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"allowance"`
 */
export const readFixedTermInvestmentVaultAllowance =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'allowance',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"asset"`
 */
export const readFixedTermInvestmentVaultAsset =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'asset',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readFixedTermInvestmentVaultBalanceOf =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"convertToAssets"`
 */
export const readFixedTermInvestmentVaultConvertToAssets =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'convertToAssets',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"convertToShares"`
 */
export const readFixedTermInvestmentVaultConvertToShares =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'convertToShares',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decimals"`
 */
export const readFixedTermInvestmentVaultDecimals =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decimalsOffset"`
 */
export const readFixedTermInvestmentVaultDecimalsOffset =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decimalsOffset',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"deploymentDelay"`
 */
export const readFixedTermInvestmentVaultDeploymentDelay =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'deploymentDelay',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"feeRecipient"`
 */
export const readFixedTermInvestmentVaultFeeRecipient =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'feeRecipient',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getBufferAssets"`
 */
export const readFixedTermInvestmentVaultGetBufferAssets =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getBufferAssets',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getCCIPAdmin"`
 */
export const readFixedTermInvestmentVaultGetCcipAdmin =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getCCIPAdmin',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getFeeData"`
 */
export const readFixedTermInvestmentVaultGetFeeData =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getFeeData',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getUserWithdrawalRequests"`
 */
export const readFixedTermInvestmentVaultGetUserWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getUserWithdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getWithdrawalRequestCount"`
 */
export const readFixedTermInvestmentVaultGetWithdrawalRequestCount =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getWithdrawalRequestCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getWithdrawalRequests"`
 */
export const readFixedTermInvestmentVaultGetWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getWithdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"getWithdrawalRequestsByIds"`
 */
export const readFixedTermInvestmentVaultGetWithdrawalRequestsByIds =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'getWithdrawalRequestsByIds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"globalOwner"`
 */
export const readFixedTermInvestmentVaultGlobalOwner =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"globalPause"`
 */
export const readFixedTermInvestmentVaultGlobalPause =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const readFixedTermInvestmentVaultGlobalRestrict =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"hasBufferStrategy"`
 */
export const readFixedTermInvestmentVaultHasBufferStrategy =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'hasBufferStrategy',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"highWaterMark"`
 */
export const readFixedTermInvestmentVaultHighWaterMark =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'highWaterMark',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"isBurner"`
 */
export const readFixedTermInvestmentVaultIsBurner =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'isBurner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"isMinter"`
 */
export const readFixedTermInvestmentVaultIsMinter =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'isMinter',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const readFixedTermInvestmentVaultIsPausedLocal =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"lastCompoundTime"`
 */
export const readFixedTermInvestmentVaultLastCompoundTime =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'lastCompoundTime',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"lastFeeTime"`
 */
export const readFixedTermInvestmentVaultLastFeeTime =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'lastFeeTime',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"liquidityBufferRate"`
 */
export const readFixedTermInvestmentVaultLiquidityBufferRate =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'liquidityBufferRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"liquidityManager"`
 */
export const readFixedTermInvestmentVaultLiquidityManager =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'liquidityManager',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"managementFeeRate"`
 */
export const readFixedTermInvestmentVaultManagementFeeRate =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'managementFeeRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxDeposit"`
 */
export const readFixedTermInvestmentVaultMaxDeposit =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxDeposit',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxDepositCapacity"`
 */
export const readFixedTermInvestmentVaultMaxDepositCapacity =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxDepositCapacity',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxMint"`
 */
export const readFixedTermInvestmentVaultMaxMint =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxMint',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxRedeem"`
 */
export const readFixedTermInvestmentVaultMaxRedeem =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxRedeem',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"maxWithdraw"`
 */
export const readFixedTermInvestmentVaultMaxWithdraw =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'maxWithdraw',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"migrationMintingEnabled"`
 */
export const readFixedTermInvestmentVaultMigrationMintingEnabled =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'migrationMintingEnabled',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"name"`
 */
export const readFixedTermInvestmentVaultName =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'name',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"operationEndDate"`
 */
export const readFixedTermInvestmentVaultOperationEndDate =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'operationEndDate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"owner"`
 */
export const readFixedTermInvestmentVaultOwner =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"paused"`
 */
export const readFixedTermInvestmentVaultPaused =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"performanceFeeRate"`
 */
export const readFixedTermInvestmentVaultPerformanceFeeRate =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'performanceFeeRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewDeposit"`
 */
export const readFixedTermInvestmentVaultPreviewDeposit =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewDeposit',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewMint"`
 */
export const readFixedTermInvestmentVaultPreviewMint =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewMint',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewRedeem"`
 */
export const readFixedTermInvestmentVaultPreviewRedeem =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewRedeem',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"previewWithdraw"`
 */
export const readFixedTermInvestmentVaultPreviewWithdraw =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'previewWithdraw',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readFixedTermInvestmentVaultProxiableUuid =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"stakeForFeeReduction"`
 */
export const readFixedTermInvestmentVaultStakeForFeeReduction =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'stakeForFeeReduction',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"stakeForInstantWithdrawal"`
 */
export const readFixedTermInvestmentVaultStakeForInstantWithdrawal =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'stakeForInstantWithdrawal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"stakeToken"`
 */
export const readFixedTermInvestmentVaultStakeToken =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'stakeToken',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"symbol"`
 */
export const readFixedTermInvestmentVaultSymbol =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"totalAssets"`
 */
export const readFixedTermInvestmentVaultTotalAssets =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'totalAssets',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readFixedTermInvestmentVaultTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalFeeRate"`
 */
export const readFixedTermInvestmentVaultWithdrawalFeeRate =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalFeeRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalGasFee"`
 */
export const readFixedTermInvestmentVaultWithdrawalGasFee =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalGasFee',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalRequestShares"`
 */
export const readFixedTermInvestmentVaultWithdrawalRequestShares =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalRequestShares',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalRequests"`
 */
export const readFixedTermInvestmentVaultWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdrawalRequestsEnabled"`
 */
export const readFixedTermInvestmentVaultWithdrawalRequestsEnabled =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdrawalRequestsEnabled',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"yieldAPR"`
 */
export const readFixedTermInvestmentVaultYieldApr =
  /*#__PURE__*/ createReadContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'yieldAPR',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const writeFixedTermInvestmentVault = /*#__PURE__*/ createWriteContract({
  abi: fixedTermInvestmentVaultAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"approve"`
 */
export const writeFixedTermInvestmentVaultApprove =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burn"`
 */
export const writeFixedTermInvestmentVaultBurn =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const writeFixedTermInvestmentVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"cancelPendingWithdrawalRequests"`
 */
export const writeFixedTermInvestmentVaultCancelPendingWithdrawalRequests =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'cancelPendingWithdrawalRequests',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const writeFixedTermInvestmentVaultDecreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const writeFixedTermInvestmentVaultDeposit =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const writeFixedTermInvestmentVaultDepositToBuffer =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"disableMigrationMinting"`
 */
export const writeFixedTermInvestmentVaultDisableMigrationMinting =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'disableMigrationMinting',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const writeFixedTermInvestmentVaultGrantBurnRole =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const writeFixedTermInvestmentVaultGrantMintRole =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const writeFixedTermInvestmentVaultHarvestFees =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const writeFixedTermInvestmentVaultIncreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const writeFixedTermInvestmentVaultInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mint"`
 */
export const writeFixedTermInvestmentVaultMint =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mintMigrationPosition"`
 */
export const writeFixedTermInvestmentVaultMintMigrationPosition =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mintMigrationPosition',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const writeFixedTermInvestmentVaultPauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const writeFixedTermInvestmentVaultProcessRequests =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const writeFixedTermInvestmentVaultRecoverErc20 =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const writeFixedTermInvestmentVaultRedeem =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeFixedTermInvestmentVaultRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const writeFixedTermInvestmentVaultRequestWithdrawal =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const writeFixedTermInvestmentVaultRevokeBurnRole =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const writeFixedTermInvestmentVaultRevokeMintRole =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const writeFixedTermInvestmentVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const writeFixedTermInvestmentVaultSetCcipAdmin =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const writeFixedTermInvestmentVaultSetTotalAssets =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const writeFixedTermInvestmentVaultSkimBuffer =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const writeFixedTermInvestmentVaultTransfer =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeFixedTermInvestmentVaultTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeFixedTermInvestmentVaultTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const writeFixedTermInvestmentVaultUnpauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const writeFixedTermInvestmentVaultUpdateApr =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const writeFixedTermInvestmentVaultUpdateBufferRate =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const writeFixedTermInvestmentVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const writeFixedTermInvestmentVaultUpdateFeeRates =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const writeFixedTermInvestmentVaultUpdateHighWaterMark =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateMaxDepositCapacity"`
 */
export const writeFixedTermInvestmentVaultUpdateMaxDepositCapacity =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateMaxDepositCapacity',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateOperationEndDate"`
 */
export const writeFixedTermInvestmentVaultUpdateOperationEndDate =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateOperationEndDate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const writeFixedTermInvestmentVaultUpdateVaultManagers =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const writeFixedTermInvestmentVaultUpdateVaultParams =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const writeFixedTermInvestmentVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalRequestsEnabled"`
 */
export const writeFixedTermInvestmentVaultUpdateWithdrawalRequestsEnabled =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalRequestsEnabled',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const writeFixedTermInvestmentVaultUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeFixedTermInvestmentVaultUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeFixedTermInvestmentVaultWithdraw =
  /*#__PURE__*/ createWriteContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const simulateFixedTermInvestmentVault =
  /*#__PURE__*/ createSimulateContract({ abi: fixedTermInvestmentVaultAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"approve"`
 */
export const simulateFixedTermInvestmentVaultApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burn"`
 */
export const simulateFixedTermInvestmentVaultBurn =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const simulateFixedTermInvestmentVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"cancelPendingWithdrawalRequests"`
 */
export const simulateFixedTermInvestmentVaultCancelPendingWithdrawalRequests =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'cancelPendingWithdrawalRequests',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const simulateFixedTermInvestmentVaultDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const simulateFixedTermInvestmentVaultDeposit =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const simulateFixedTermInvestmentVaultDepositToBuffer =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"disableMigrationMinting"`
 */
export const simulateFixedTermInvestmentVaultDisableMigrationMinting =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'disableMigrationMinting',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const simulateFixedTermInvestmentVaultGrantBurnRole =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const simulateFixedTermInvestmentVaultGrantMintRole =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const simulateFixedTermInvestmentVaultHarvestFees =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const simulateFixedTermInvestmentVaultIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateFixedTermInvestmentVaultInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mint"`
 */
export const simulateFixedTermInvestmentVaultMint =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"mintMigrationPosition"`
 */
export const simulateFixedTermInvestmentVaultMintMigrationPosition =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'mintMigrationPosition',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const simulateFixedTermInvestmentVaultPauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const simulateFixedTermInvestmentVaultProcessRequests =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const simulateFixedTermInvestmentVaultRecoverErc20 =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateFixedTermInvestmentVaultRedeem =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateFixedTermInvestmentVaultRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const simulateFixedTermInvestmentVaultRequestWithdrawal =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const simulateFixedTermInvestmentVaultRevokeBurnRole =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const simulateFixedTermInvestmentVaultRevokeMintRole =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const simulateFixedTermInvestmentVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const simulateFixedTermInvestmentVaultSetCcipAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const simulateFixedTermInvestmentVaultSetTotalAssets =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const simulateFixedTermInvestmentVaultSkimBuffer =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateFixedTermInvestmentVaultTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateFixedTermInvestmentVaultTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateFixedTermInvestmentVaultTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const simulateFixedTermInvestmentVaultUnpauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const simulateFixedTermInvestmentVaultUpdateApr =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const simulateFixedTermInvestmentVaultUpdateBufferRate =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const simulateFixedTermInvestmentVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const simulateFixedTermInvestmentVaultUpdateFeeRates =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const simulateFixedTermInvestmentVaultUpdateHighWaterMark =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateMaxDepositCapacity"`
 */
export const simulateFixedTermInvestmentVaultUpdateMaxDepositCapacity =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateMaxDepositCapacity',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateOperationEndDate"`
 */
export const simulateFixedTermInvestmentVaultUpdateOperationEndDate =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateOperationEndDate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const simulateFixedTermInvestmentVaultUpdateVaultManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const simulateFixedTermInvestmentVaultUpdateVaultParams =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const simulateFixedTermInvestmentVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"updateWithdrawalRequestsEnabled"`
 */
export const simulateFixedTermInvestmentVaultUpdateWithdrawalRequestsEnabled =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'updateWithdrawalRequestsEnabled',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const simulateFixedTermInvestmentVaultUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateFixedTermInvestmentVaultUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateFixedTermInvestmentVaultWithdraw =
  /*#__PURE__*/ createSimulateContract({
    abi: fixedTermInvestmentVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__
 */
export const watchFixedTermInvestmentVaultEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: fixedTermInvestmentVaultAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"APRUpdated"`
 */
export const watchFixedTermInvestmentVaultAprUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'APRUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"AccountWithdrawalFeeSet"`
 */
export const watchFixedTermInvestmentVaultAccountWithdrawalFeeSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'AccountWithdrawalFeeSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchFixedTermInvestmentVaultAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Approval"`
 */
export const watchFixedTermInvestmentVaultApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchFixedTermInvestmentVaultBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BufferRateUpdated"`
 */
export const watchFixedTermInvestmentVaultBufferRateUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BufferRateUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BurnAccessGranted"`
 */
export const watchFixedTermInvestmentVaultBurnAccessGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BurnAccessGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"BurnAccessRevoked"`
 */
export const watchFixedTermInvestmentVaultBurnAccessRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'BurnAccessRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"CCIPAdminChanged"`
 */
export const watchFixedTermInvestmentVaultCcipAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'CCIPAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"DeploymentDelayUpdated"`
 */
export const watchFixedTermInvestmentVaultDeploymentDelayUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'DeploymentDelayUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Deposit"`
 */
export const watchFixedTermInvestmentVaultDepositEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"FeeRatesUpdated"`
 */
export const watchFixedTermInvestmentVaultFeeRatesUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'FeeRatesUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"HighWaterMarkUpdated"`
 */
export const watchFixedTermInvestmentVaultHighWaterMarkUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'HighWaterMarkUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchFixedTermInvestmentVaultInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MigrationMintingPermanentlyDisabled"`
 */
export const watchFixedTermInvestmentVaultMigrationMintingPermanentlyDisabledEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MigrationMintingPermanentlyDisabled',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MigrationSharesMinted"`
 */
export const watchFixedTermInvestmentVaultMigrationSharesMintedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MigrationSharesMinted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MintAccessGranted"`
 */
export const watchFixedTermInvestmentVaultMintAccessGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MintAccessGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"MintAccessRevoked"`
 */
export const watchFixedTermInvestmentVaultMintAccessRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'MintAccessRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchFixedTermInvestmentVaultOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Paused"`
 */
export const watchFixedTermInvestmentVaultPausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"RateCheckpointUpdated"`
 */
export const watchFixedTermInvestmentVaultRateCheckpointUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'RateCheckpointUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"TotalAssetsUpdated"`
 */
export const watchFixedTermInvestmentVaultTotalAssetsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'TotalAssetsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchFixedTermInvestmentVaultTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Unpaused"`
 */
export const watchFixedTermInvestmentVaultUnpausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchFixedTermInvestmentVaultUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"VaultManagersUpdated"`
 */
export const watchFixedTermInvestmentVaultVaultManagersUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'VaultManagersUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"VaultParamsUpdated"`
 */
export const watchFixedTermInvestmentVaultVaultParamsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'VaultParamsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"Withdraw"`
 */
export const watchFixedTermInvestmentVaultWithdrawEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"WithdrawalGasFeeUpdated"`
 */
export const watchFixedTermInvestmentVaultWithdrawalGasFeeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'WithdrawalGasFeeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"WithdrawalProcessed"`
 */
export const watchFixedTermInvestmentVaultWithdrawalProcessedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'WithdrawalProcessed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link fixedTermInvestmentVaultAbi}__ and `eventName` set to `"WithdrawalRequested"`
 */
export const watchFixedTermInvestmentVaultWithdrawalRequestedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: fixedTermInvestmentVaultAbi,
    eventName: 'WithdrawalRequested',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessList = /*#__PURE__*/ createReadContract({
  abi: globalAccessListAbi,
  address: globalAccessListAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"getRestrictedAccounts"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessListGetRestrictedAccounts =
  /*#__PURE__*/ createReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'getRestrictedAccounts',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"globalOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessListGlobalOwner = /*#__PURE__*/ createReadContract(
  {
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'globalOwner',
  },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"isRestricted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessListIsRestricted =
  /*#__PURE__*/ createReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'isRestricted',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessListOwner = /*#__PURE__*/ createReadContract({
  abi: globalAccessListAbi,
  address: globalAccessListAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessListProxiableUuid =
  /*#__PURE__*/ createReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"restrictedAccounts"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const readGlobalAccessListRestrictedAccounts =
  /*#__PURE__*/ createReadContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'restrictedAccounts',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessList = /*#__PURE__*/ createWriteContract({
  abi: globalAccessListAbi,
  address: globalAccessListAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"restrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListRestrictAccount =
  /*#__PURE__*/ createWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'restrictAccount',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"unRestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListUnRestrictAccount =
  /*#__PURE__*/ createWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'unRestrictAccount',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListUpgradeTo = /*#__PURE__*/ createWriteContract(
  {
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeTo',
  },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const writeGlobalAccessListUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessList = /*#__PURE__*/ createSimulateContract({
  abi: globalAccessListAbi,
  address: globalAccessListAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"restrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListRestrictAccount =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'restrictAccount',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"unRestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListUnRestrictAccount =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'unRestrictAccount',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalAccessListAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const simulateGlobalAccessListUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"RestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListRestrictAccountEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'RestrictAccount',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalAccessListAbi}__ and `eventName` set to `"UnrestrictAccount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const watchGlobalAccessListUnrestrictAccountEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalAccessListAbi,
    address: globalAccessListAddress,
    eventName: 'UnrestrictAccount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const readGlobalOwner = /*#__PURE__*/ createReadContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const readGlobalOwnerOwner = /*#__PURE__*/ createReadContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"pendingOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const readGlobalOwnerPendingOwner = /*#__PURE__*/ createReadContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
  functionName: 'pendingOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const readGlobalOwnerProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwner = /*#__PURE__*/ createWriteContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwnerAcceptOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwnerInitialize = /*#__PURE__*/ createWriteContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwnerRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwnerTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwnerUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const writeGlobalOwnerUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwner = /*#__PURE__*/ createSimulateContract({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"acceptOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwnerAcceptOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwnerInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwnerRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwnerTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwnerUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalOwnerAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const simulateGlobalOwnerUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: globalOwnerAbi,
  address: globalOwnerAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerOwnershipTransferStartedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalOwnerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x705Ee678D187CeAcbA3707C788b7B439b41cF085)
 */
export const watchGlobalOwnerOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalOwnerAbi,
    address: globalOwnerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const readGlobalPause = /*#__PURE__*/ createReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"globalOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const readGlobalPauseGlobalOwner = /*#__PURE__*/ createReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'globalOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const readGlobalPauseOwner = /*#__PURE__*/ createReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const readGlobalPausePaused = /*#__PURE__*/ createReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const readGlobalPauseProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPause = /*#__PURE__*/ createWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPauseInitialize = /*#__PURE__*/ createWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPausePause = /*#__PURE__*/ createWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPauseRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPauseTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPauseUnpause = /*#__PURE__*/ createWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPauseUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const writeGlobalPauseUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPause = /*#__PURE__*/ createSimulateContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPauseInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"pause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPausePause = /*#__PURE__*/ createSimulateContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPauseRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPauseTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"unpause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPauseUnpause = /*#__PURE__*/ createSimulateContract({
  abi: globalPauseAbi,
  address: globalPauseAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPauseUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link globalPauseAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const simulateGlobalPauseUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: globalPauseAbi,
  address: globalPauseAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPausePausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link globalPauseAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xcE9541c61bFa94eC8588dcE0B43339A6299EE8CC)
 */
export const watchGlobalPauseUnpausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: globalPauseAbi,
    address: globalPauseAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const readLedgityYieldVault = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"RAY"`
 */
export const readLedgityYieldVaultRay = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'RAY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"aToken"`
 */
export const readLedgityYieldVaultAToken = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'aToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"aaveLendingPool"`
 */
export const readLedgityYieldVaultAaveLendingPool =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'aaveLendingPool',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"accountWithdrawalFee"`
 */
export const readLedgityYieldVaultAccountWithdrawalFee =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'accountWithdrawalFee',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"allowance"`
 */
export const readLedgityYieldVaultAllowance = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"asset"`
 */
export const readLedgityYieldVaultAsset = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'asset',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readLedgityYieldVaultBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"convertToAssets"`
 */
export const readLedgityYieldVaultConvertToAssets =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'convertToAssets',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"convertToShares"`
 */
export const readLedgityYieldVaultConvertToShares =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'convertToShares',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decimals"`
 */
export const readLedgityYieldVaultDecimals = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decimalsOffset"`
 */
export const readLedgityYieldVaultDecimalsOffset =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decimalsOffset',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"deploymentDelay"`
 */
export const readLedgityYieldVaultDeploymentDelay =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'deploymentDelay',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"feeRecipient"`
 */
export const readLedgityYieldVaultFeeRecipient =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'feeRecipient',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getBufferAssets"`
 */
export const readLedgityYieldVaultGetBufferAssets =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getBufferAssets',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getCCIPAdmin"`
 */
export const readLedgityYieldVaultGetCcipAdmin =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getCCIPAdmin',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getFeeData"`
 */
export const readLedgityYieldVaultGetFeeData = /*#__PURE__*/ createReadContract(
  { abi: ledgityYieldVaultAbi, functionName: 'getFeeData' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getUserWithdrawalRequests"`
 */
export const readLedgityYieldVaultGetUserWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getUserWithdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getWithdrawalRequestCount"`
 */
export const readLedgityYieldVaultGetWithdrawalRequestCount =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getWithdrawalRequestCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getWithdrawalRequests"`
 */
export const readLedgityYieldVaultGetWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getWithdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"getWithdrawalRequestsByIds"`
 */
export const readLedgityYieldVaultGetWithdrawalRequestsByIds =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'getWithdrawalRequestsByIds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"globalOwner"`
 */
export const readLedgityYieldVaultGlobalOwner =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"globalPause"`
 */
export const readLedgityYieldVaultGlobalPause =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const readLedgityYieldVaultGlobalRestrict =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"hasBufferStrategy"`
 */
export const readLedgityYieldVaultHasBufferStrategy =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'hasBufferStrategy',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"highWaterMark"`
 */
export const readLedgityYieldVaultHighWaterMark =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'highWaterMark',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"isBurner"`
 */
export const readLedgityYieldVaultIsBurner = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'isBurner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"isMinter"`
 */
export const readLedgityYieldVaultIsMinter = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'isMinter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const readLedgityYieldVaultIsPausedLocal =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"lToken"`
 */
export const readLedgityYieldVaultLToken = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'lToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"lastCompoundTime"`
 */
export const readLedgityYieldVaultLastCompoundTime =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'lastCompoundTime',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"lastFeeTime"`
 */
export const readLedgityYieldVaultLastFeeTime =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'lastFeeTime',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"liquidityBufferRate"`
 */
export const readLedgityYieldVaultLiquidityBufferRate =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'liquidityBufferRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"liquidityManager"`
 */
export const readLedgityYieldVaultLiquidityManager =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'liquidityManager',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"managementFeeRate"`
 */
export const readLedgityYieldVaultManagementFeeRate =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'managementFeeRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxDeposit"`
 */
export const readLedgityYieldVaultMaxDeposit = /*#__PURE__*/ createReadContract(
  { abi: ledgityYieldVaultAbi, functionName: 'maxDeposit' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxMint"`
 */
export const readLedgityYieldVaultMaxMint = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'maxMint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxRedeem"`
 */
export const readLedgityYieldVaultMaxRedeem = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'maxRedeem',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"maxWithdraw"`
 */
export const readLedgityYieldVaultMaxWithdraw =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'maxWithdraw',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"name"`
 */
export const readLedgityYieldVaultName = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"owner"`
 */
export const readLedgityYieldVaultOwner = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"paused"`
 */
export const readLedgityYieldVaultPaused = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"performanceFeeRate"`
 */
export const readLedgityYieldVaultPerformanceFeeRate =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'performanceFeeRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewDeposit"`
 */
export const readLedgityYieldVaultPreviewDeposit =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewDeposit',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewMint"`
 */
export const readLedgityYieldVaultPreviewMint =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewMint',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewRedeem"`
 */
export const readLedgityYieldVaultPreviewRedeem =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewRedeem',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"previewWithdraw"`
 */
export const readLedgityYieldVaultPreviewWithdraw =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'previewWithdraw',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readLedgityYieldVaultProxiableUuid =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"stakeForFeeReduction"`
 */
export const readLedgityYieldVaultStakeForFeeReduction =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'stakeForFeeReduction',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"stakeForInstantWithdrawal"`
 */
export const readLedgityYieldVaultStakeForInstantWithdrawal =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'stakeForInstantWithdrawal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"stakeToken"`
 */
export const readLedgityYieldVaultStakeToken = /*#__PURE__*/ createReadContract(
  { abi: ledgityYieldVaultAbi, functionName: 'stakeToken' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"symbol"`
 */
export const readLedgityYieldVaultSymbol = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"totalAssets"`
 */
export const readLedgityYieldVaultTotalAssets =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'totalAssets',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readLedgityYieldVaultTotalSupply =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdrawalFeeRate"`
 */
export const readLedgityYieldVaultWithdrawalFeeRate =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdrawalFeeRate',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdrawalGasFee"`
 */
export const readLedgityYieldVaultWithdrawalGasFee =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdrawalGasFee',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdrawalRequests"`
 */
export const readLedgityYieldVaultWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"yieldAPR"`
 */
export const readLedgityYieldVaultYieldApr = /*#__PURE__*/ createReadContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'yieldAPR',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const writeLedgityYieldVault = /*#__PURE__*/ createWriteContract({
  abi: ledgityYieldVaultAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"approve"`
 */
export const writeLedgityYieldVaultApprove = /*#__PURE__*/ createWriteContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burn"`
 */
export const writeLedgityYieldVaultBurn = /*#__PURE__*/ createWriteContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const writeLedgityYieldVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const writeLedgityYieldVaultDecreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const writeLedgityYieldVaultDeposit = /*#__PURE__*/ createWriteContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'deposit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const writeLedgityYieldVaultDepositToBuffer =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const writeLedgityYieldVaultGrantBurnRole =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const writeLedgityYieldVaultGrantMintRole =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const writeLedgityYieldVaultHarvestFees =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const writeLedgityYieldVaultIncreaseAllowance =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const writeLedgityYieldVaultInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"migrateLToken"`
 */
export const writeLedgityYieldVaultMigrateLToken =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'migrateLToken',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"mint"`
 */
export const writeLedgityYieldVaultMint = /*#__PURE__*/ createWriteContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const writeLedgityYieldVaultPauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const writeLedgityYieldVaultProcessRequests =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const writeLedgityYieldVaultRecoverErc20 =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const writeLedgityYieldVaultRedeem = /*#__PURE__*/ createWriteContract({
  abi: ledgityYieldVaultAbi,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeLedgityYieldVaultRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const writeLedgityYieldVaultRequestWithdrawal =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const writeLedgityYieldVaultRevokeBurnRole =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const writeLedgityYieldVaultRevokeMintRole =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const writeLedgityYieldVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const writeLedgityYieldVaultSetCcipAdmin =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const writeLedgityYieldVaultSetTotalAssets =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const writeLedgityYieldVaultSkimBuffer =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const writeLedgityYieldVaultTransfer = /*#__PURE__*/ createWriteContract(
  { abi: ledgityYieldVaultAbi, functionName: 'transfer' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeLedgityYieldVaultTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeLedgityYieldVaultTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const writeLedgityYieldVaultUnpauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const writeLedgityYieldVaultUpdateApr =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const writeLedgityYieldVaultUpdateBufferRate =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const writeLedgityYieldVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const writeLedgityYieldVaultUpdateFeeRates =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const writeLedgityYieldVaultUpdateHighWaterMark =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const writeLedgityYieldVaultUpdateVaultManagers =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const writeLedgityYieldVaultUpdateVaultParams =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const writeLedgityYieldVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const writeLedgityYieldVaultUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeLedgityYieldVaultUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeLedgityYieldVaultWithdraw = /*#__PURE__*/ createWriteContract(
  { abi: ledgityYieldVaultAbi, functionName: 'withdraw' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const simulateLedgityYieldVault = /*#__PURE__*/ createSimulateContract({
  abi: ledgityYieldVaultAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"approve"`
 */
export const simulateLedgityYieldVaultApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burn"`
 */
export const simulateLedgityYieldVaultBurn =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burn',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 */
export const simulateLedgityYieldVaultBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const simulateLedgityYieldVaultDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"deposit"`
 */
export const simulateLedgityYieldVaultDeposit =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'deposit',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"depositToBuffer"`
 */
export const simulateLedgityYieldVaultDepositToBuffer =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantBurnRole"`
 */
export const simulateLedgityYieldVaultGrantBurnRole =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"grantMintRole"`
 */
export const simulateLedgityYieldVaultGrantMintRole =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"harvestFees"`
 */
export const simulateLedgityYieldVaultHarvestFees =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const simulateLedgityYieldVaultIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateLedgityYieldVaultInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"migrateLToken"`
 */
export const simulateLedgityYieldVaultMigrateLToken =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'migrateLToken',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"mint"`
 */
export const simulateLedgityYieldVaultMint =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const simulateLedgityYieldVaultPauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"processRequests"`
 */
export const simulateLedgityYieldVaultProcessRequests =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const simulateLedgityYieldVaultRecoverErc20 =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateLedgityYieldVaultRedeem =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'redeem',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateLedgityYieldVaultRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"requestWithdrawal"`
 */
export const simulateLedgityYieldVaultRequestWithdrawal =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeBurnRole"`
 */
export const simulateLedgityYieldVaultRevokeBurnRole =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"revokeMintRole"`
 */
export const simulateLedgityYieldVaultRevokeMintRole =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 */
export const simulateLedgityYieldVaultSetAccountWithdrawalFee =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setCCIPAdmin"`
 */
export const simulateLedgityYieldVaultSetCcipAdmin =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"setTotalAssets"`
 */
export const simulateLedgityYieldVaultSetTotalAssets =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"skimBuffer"`
 */
export const simulateLedgityYieldVaultSkimBuffer =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateLedgityYieldVaultTransfer =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateLedgityYieldVaultTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateLedgityYieldVaultTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const simulateLedgityYieldVaultUnpauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateAPR"`
 */
export const simulateLedgityYieldVaultUpdateApr =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateBufferRate"`
 */
export const simulateLedgityYieldVaultUpdateBufferRate =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 */
export const simulateLedgityYieldVaultUpdateDeploymentDelay =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateFeeRates"`
 */
export const simulateLedgityYieldVaultUpdateFeeRates =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateHighWaterMark"`
 */
export const simulateLedgityYieldVaultUpdateHighWaterMark =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultManagers"`
 */
export const simulateLedgityYieldVaultUpdateVaultManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateVaultParams"`
 */
export const simulateLedgityYieldVaultUpdateVaultParams =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 */
export const simulateLedgityYieldVaultUpdateWithdrawalGasFee =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const simulateLedgityYieldVaultUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateLedgityYieldVaultUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateLedgityYieldVaultWithdraw =
  /*#__PURE__*/ createSimulateContract({
    abi: ledgityYieldVaultAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__
 */
export const watchLedgityYieldVaultEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: ledgityYieldVaultAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"APRUpdated"`
 */
export const watchLedgityYieldVaultAprUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'APRUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"AccountWithdrawalFeeSet"`
 */
export const watchLedgityYieldVaultAccountWithdrawalFeeSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'AccountWithdrawalFeeSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchLedgityYieldVaultAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Approval"`
 */
export const watchLedgityYieldVaultApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchLedgityYieldVaultBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BufferRateUpdated"`
 */
export const watchLedgityYieldVaultBufferRateUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BufferRateUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BurnAccessGranted"`
 */
export const watchLedgityYieldVaultBurnAccessGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BurnAccessGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"BurnAccessRevoked"`
 */
export const watchLedgityYieldVaultBurnAccessRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'BurnAccessRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"CCIPAdminChanged"`
 */
export const watchLedgityYieldVaultCcipAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'CCIPAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"DeploymentDelayUpdated"`
 */
export const watchLedgityYieldVaultDeploymentDelayUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'DeploymentDelayUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Deposit"`
 */
export const watchLedgityYieldVaultDepositEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"FeeRatesUpdated"`
 */
export const watchLedgityYieldVaultFeeRatesUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'FeeRatesUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"HighWaterMarkUpdated"`
 */
export const watchLedgityYieldVaultHighWaterMarkUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'HighWaterMarkUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchLedgityYieldVaultInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"MintAccessGranted"`
 */
export const watchLedgityYieldVaultMintAccessGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'MintAccessGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"MintAccessRevoked"`
 */
export const watchLedgityYieldVaultMintAccessRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'MintAccessRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchLedgityYieldVaultOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Paused"`
 */
export const watchLedgityYieldVaultPausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"RateCheckpointUpdated"`
 */
export const watchLedgityYieldVaultRateCheckpointUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'RateCheckpointUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"TotalAssetsUpdated"`
 */
export const watchLedgityYieldVaultTotalAssetsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'TotalAssetsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchLedgityYieldVaultTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Unpaused"`
 */
export const watchLedgityYieldVaultUnpausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchLedgityYieldVaultUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"VaultManagersUpdated"`
 */
export const watchLedgityYieldVaultVaultManagersUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'VaultManagersUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"VaultParamsUpdated"`
 */
export const watchLedgityYieldVaultVaultParamsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'VaultParamsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"Withdraw"`
 */
export const watchLedgityYieldVaultWithdrawEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"WithdrawalGasFeeUpdated"`
 */
export const watchLedgityYieldVaultWithdrawalGasFeeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'WithdrawalGasFeeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"WithdrawalProcessed"`
 */
export const watchLedgityYieldVaultWithdrawalProcessedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'WithdrawalProcessed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ledgityYieldVaultAbi}__ and `eventName` set to `"WithdrawalRequested"`
 */
export const watchLedgityYieldVaultWithdrawalRequestedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: ledgityYieldVaultAbi,
    eventName: 'WithdrawalRequested',
  })
