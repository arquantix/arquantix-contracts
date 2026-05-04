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
// GlobalAccessList
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0x9d20e110a7b33479cA90ed80a4f48CBcfCcD505F)
 */
export const globalAccessListAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'AccountAlreadyRestricted' },
  { type: 'error', inputs: [], name: 'AccountNotRestricted' },
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
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
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
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
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
// StakingPositions
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stakingPositionsAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'ERC721ReceiverRejectedTokens' },
  {
    type: 'error',
    inputs: [],
    name: 'ERC721TransferToNonERC721ReceiverImplementer',
  },
  { type: 'error', inputs: [], name: 'LockDurationNotInFuture' },
  { type: 'error', inputs: [], name: 'LockDurationTooLong' },
  { type: 'error', inputs: [], name: 'LockExpired' },
  { type: 'error', inputs: [], name: 'LockNotExpired' },
  { type: 'error', inputs: [], name: 'NoLockFound' },
  { type: 'error', inputs: [], name: 'NonExistentToken' },
  { type: 'error', inputs: [], name: 'NotApprovedOrOwner' },
  { type: 'error', inputs: [], name: 'NotOwner' },
  { type: 'error', inputs: [], name: 'SafeCastOverflow' },
  { type: 'error', inputs: [], name: 'SafeCastUnderflow' },
  { type: 'error', inputs: [], name: 'SameAddress' },
  { type: 'error', inputs: [], name: 'UserIsRestricted' },
  { type: 'error', inputs: [], name: 'ZeroAddress' },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
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
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
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
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
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
  { type: 'event', anonymous: false, inputs: [], name: 'BreakerActivated' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'depositType',
        internalType: 'enum IStakingPositions.DepositType',
        type: 'uint8',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'locktime',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
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
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
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
        name: 'prevSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'supply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Supply',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
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
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Withdraw',
  },
  {
    type: 'function',
    inputs: [
      { name: '_approved', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'artProxy',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_owner', internalType: 'address', type: 'address' }],
    name: 'balanceOfAccountNFT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'balanceOfNFT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOfNFTAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'breaker',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'checkpoint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_value', internalType: 'uint256', type: 'uint256' },
      { name: '_lockDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createLock',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'depositFor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLockedBalance',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingPositions.LockedBalance',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'int128', type: 'int128' },
          { name: 'end', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'getPointHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingPositions.GlobalPoint',
        type: 'tuple',
        components: [
          { name: 'bias', internalType: 'int128', type: 'int128' },
          { name: 'slope', internalType: 'int128', type: 'int128' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_user', internalType: 'address', type: 'address' }],
    name: 'getUserNFTs',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingPositions.NFTData[]',
        type: 'tuple[]',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          {
            name: 'locked',
            internalType: 'struct IStakingPositions.LockedBalance',
            type: 'tuple',
            components: [
              { name: 'amount', internalType: 'int128', type: 'int128' },
              { name: 'end', internalType: 'uint256', type: 'uint256' },
            ],
          },
          { name: 'votingPower', internalType: 'uint256', type: 'uint256' },
          { name: 'votingPowerAt', internalType: 'uint256', type: 'uint256' },
          { name: 'owner', internalType: 'address', type: 'address' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getUserPointHistory',
    outputs: [
      {
        name: '',
        internalType: 'struct IStakingPositions.UserPoint',
        type: 'tuple',
        components: [
          { name: 'bias', internalType: 'int128', type: 'int128' },
          { name: 'slope', internalType: 'int128', type: 'int128' },
          { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_user', internalType: 'address', type: 'address' }],
    name: 'getUserTotalVotingPower',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_user', internalType: 'address', type: 'address' },
      { name: '_timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getUserTotalVotingPowerAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'iMaxTime',
    outputs: [{ name: '', internalType: 'int128', type: 'int128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_lockDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseUnlockTime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token_', internalType: 'address', type: 'address' },
      { name: 'rewardsDistributor_', internalType: 'address', type: 'address' },
      { name: 'maxTime_', internalType: 'uint256', type: 'uint256' },
      { name: 'globalOwner_', internalType: 'address', type: 'address' },
      { name: 'globalPause_', internalType: 'address', type: 'address' },
      { name: 'globalAccessList_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_spender', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'isApprovedOrOwner',
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
    name: 'maxTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
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
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ownerToNFTokenIdList',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardsDistributor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_proxy', internalType: 'address', type: 'address' }],
    name: 'setArtProxy',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_maxTime', internalType: 'uint256', type: 'uint256' }],
    name: 'setMaxTime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    name: 'slopeChanges',
    outputs: [{ name: 'change', internalType: 'int128', type: 'int128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'supply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_interfaceID', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
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
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
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
    inputs: [{ name: '_timestamp', internalType: 'uint256', type: 'uint256' }],
    name: 'totalSupplyAt',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
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
    name: 'unlockAll',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'userPointEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// StakingRewardsDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stakingRewardsDistributorAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'InvalidTokenId' },
  { type: 'error', inputs: [], name: 'NotApprovedOrOwner' },
  { type: 'error', inputs: [], name: 'NotOwner' },
  { type: 'error', inputs: [], name: 'OnlyStakingPositions' },
  { type: 'error', inputs: [], name: 'UserIsRestricted' },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  { type: 'error', inputs: [], name: 'ZeroDuration' },
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
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'fromWeek',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'toWeek',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BaseRewardsClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'periodId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'startWeek',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'duration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'weeklyAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BaseRewardsDeposited',
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
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolFeesDeposited',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolRewardsClaimed',
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
    type: 'function',
    inputs: [],
    name: 'WEEK',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'baseRewardCursor',
    outputs: [
      { name: '_weekCursor', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'baseRewardPeriodCursor',
    outputs: [
      { name: '_periodCursor', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_periodId', internalType: 'uint256', type: 'uint256' }],
    name: 'baseRewardPeriods',
    outputs: [
      { name: 'startWeek', internalType: 'uint256', type: 'uint256' },
      { name: 'endWeek', internalType: 'uint256', type: 'uint256' },
      { name: 'totalAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'weeklyAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_periodId', internalType: 'uint256', type: 'uint256' },
      { name: '_week', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'baseRewardsPerWeek',
    outputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'claim',
    outputs: [
      { name: 'baseRewards', internalType: 'uint256', type: 'uint256' },
      { name: 'protocolRewards', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'claimMany',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'to', internalType: 'address', type: 'address' },
    ],
    name: 'claimOnWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimable',
    outputs: [
      { name: 'baseRewards', internalType: 'uint256', type: 'uint256' },
      { name: 'protocolRewards', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'cumulativeProtocolRewardsPerToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentPeriodId',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'depositBaseRewards',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'depositProtocolFees',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      { name: 'staking_', internalType: 'address', type: 'address' },
      { name: 'globalOwner_', internalType: 'address', type: 'address' },
      { name: 'globalPause_', internalType: 'address', type: 'address' },
      { name: 'globalAccessList_', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'lastTokenTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'onLockCreated',
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
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'pendingBaseRewards',
    outputs: [
      { name: 'pendingRewards', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'protocolRewardsPerTokenPaid',
    outputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
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
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'staking',
    outputs: [
      { name: '', internalType: 'contract IStakingPositions', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
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
    inputs: [],
    name: 'unpauseLocal',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'staking_', internalType: 'address', type: 'address' },
      { name: 'token_', internalType: 'address', type: 'address' },
    ],
    name: 'updateAddresses',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const useReadStakingPositions = /*#__PURE__*/ createUseReadContract({
  abi: stakingPositionsAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"artProxy"`
 */
export const useReadStakingPositionsArtProxy =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'artProxy',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadStakingPositionsBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOfAccountNFT"`
 */
export const useReadStakingPositionsBalanceOfAccountNft =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOfAccountNFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOfNFT"`
 */
export const useReadStakingPositionsBalanceOfNft =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOfNFT',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOfNFTAt"`
 */
export const useReadStakingPositionsBalanceOfNftAt =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOfNFTAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"breaker"`
 */
export const useReadStakingPositionsBreaker =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'breaker',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadStakingPositionsDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"epoch"`
 */
export const useReadStakingPositionsEpoch = /*#__PURE__*/ createUseReadContract(
  { abi: stakingPositionsAbi, functionName: 'epoch' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getApproved"`
 */
export const useReadStakingPositionsGetApproved =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getApproved',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getLockedBalance"`
 */
export const useReadStakingPositionsGetLockedBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getLockedBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getPointHistory"`
 */
export const useReadStakingPositionsGetPointHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getPointHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserNFTs"`
 */
export const useReadStakingPositionsGetUserNfTs =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserNFTs',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserPointHistory"`
 */
export const useReadStakingPositionsGetUserPointHistory =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserPointHistory',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserTotalVotingPower"`
 */
export const useReadStakingPositionsGetUserTotalVotingPower =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserTotalVotingPower',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserTotalVotingPowerAt"`
 */
export const useReadStakingPositionsGetUserTotalVotingPowerAt =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserTotalVotingPowerAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"globalOwner"`
 */
export const useReadStakingPositionsGlobalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"globalPause"`
 */
export const useReadStakingPositionsGlobalPause =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const useReadStakingPositionsGlobalRestrict =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"iMaxTime"`
 */
export const useReadStakingPositionsIMaxTime =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'iMaxTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadStakingPositionsIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"isApprovedOrOwner"`
 */
export const useReadStakingPositionsIsApprovedOrOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'isApprovedOrOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const useReadStakingPositionsIsPausedLocal =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"maxTime"`
 */
export const useReadStakingPositionsMaxTime =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'maxTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"name"`
 */
export const useReadStakingPositionsName = /*#__PURE__*/ createUseReadContract({
  abi: stakingPositionsAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"owner"`
 */
export const useReadStakingPositionsOwner = /*#__PURE__*/ createUseReadContract(
  { abi: stakingPositionsAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"ownerOf"`
 */
export const useReadStakingPositionsOwnerOf =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'ownerOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"ownerToNFTokenIdList"`
 */
export const useReadStakingPositionsOwnerToNfTokenIdList =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'ownerToNFTokenIdList',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"paused"`
 */
export const useReadStakingPositionsPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadStakingPositionsProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"rewardsDistributor"`
 */
export const useReadStakingPositionsRewardsDistributor =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'rewardsDistributor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"slopeChanges"`
 */
export const useReadStakingPositionsSlopeChanges =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'slopeChanges',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"supply"`
 */
export const useReadStakingPositionsSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'supply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadStakingPositionsSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadStakingPositionsSymbol =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'symbol',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"token"`
 */
export const useReadStakingPositionsToken = /*#__PURE__*/ createUseReadContract(
  { abi: stakingPositionsAbi, functionName: 'token' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"tokenId"`
 */
export const useReadStakingPositionsTokenId =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'tokenId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"tokenURI"`
 */
export const useReadStakingPositionsTokenUri =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'tokenURI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadStakingPositionsTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"totalSupplyAt"`
 */
export const useReadStakingPositionsTotalSupplyAt =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'totalSupplyAt',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"userPointEpoch"`
 */
export const useReadStakingPositionsUserPointEpoch =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingPositionsAbi,
    functionName: 'userPointEpoch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const useWriteStakingPositions = /*#__PURE__*/ createUseWriteContract({
  abi: stakingPositionsAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteStakingPositionsApprove =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"checkpoint"`
 */
export const useWriteStakingPositionsCheckpoint =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"createLock"`
 */
export const useWriteStakingPositionsCreateLock =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'createLock',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"depositFor"`
 */
export const useWriteStakingPositionsDepositFor =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseAmount"`
 */
export const useWriteStakingPositionsIncreaseAmount =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseAmount',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseUnlockTime"`
 */
export const useWriteStakingPositionsIncreaseUnlockTime =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseUnlockTime',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteStakingPositionsInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useWriteStakingPositionsPauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useWriteStakingPositionsRecoverErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteStakingPositionsRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteStakingPositionsSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteStakingPositionsSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const useWriteStakingPositionsSetArtProxy =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setMaxTime"`
 */
export const useWriteStakingPositionsSetMaxTime =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'setMaxTime',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteStakingPositionsTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteStakingPositionsTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unlockAll"`
 */
export const useWriteStakingPositionsUnlockAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'unlockAll',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useWriteStakingPositionsUnpauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteStakingPositionsUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteStakingPositionsUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"withdraw"`
 */
export const useWriteStakingPositionsWithdraw =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const useSimulateStakingPositions =
  /*#__PURE__*/ createUseSimulateContract({ abi: stakingPositionsAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateStakingPositionsApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"checkpoint"`
 */
export const useSimulateStakingPositionsCheckpoint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"createLock"`
 */
export const useSimulateStakingPositionsCreateLock =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'createLock',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"depositFor"`
 */
export const useSimulateStakingPositionsDepositFor =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseAmount"`
 */
export const useSimulateStakingPositionsIncreaseAmount =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseAmount',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseUnlockTime"`
 */
export const useSimulateStakingPositionsIncreaseUnlockTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseUnlockTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateStakingPositionsInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useSimulateStakingPositionsPauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useSimulateStakingPositionsRecoverErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateStakingPositionsRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateStakingPositionsSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateStakingPositionsSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const useSimulateStakingPositionsSetArtProxy =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setMaxTime"`
 */
export const useSimulateStakingPositionsSetMaxTime =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'setMaxTime',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateStakingPositionsTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateStakingPositionsTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unlockAll"`
 */
export const useSimulateStakingPositionsUnlockAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'unlockAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useSimulateStakingPositionsUnpauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateStakingPositionsUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateStakingPositionsUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"withdraw"`
 */
export const useSimulateStakingPositionsWithdraw =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const useWatchStakingPositionsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: stakingPositionsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchStakingPositionsAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchStakingPositionsApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchStakingPositionsApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const useWatchStakingPositionsBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchStakingPositionsBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"BreakerActivated"`
 */
export const useWatchStakingPositionsBreakerActivatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'BreakerActivated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Deposit"`
 */
export const useWatchStakingPositionsDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchStakingPositionsInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const useWatchStakingPositionsMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchStakingPositionsOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchStakingPositionsPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Supply"`
 */
export const useWatchStakingPositionsSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Supply',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchStakingPositionsTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchStakingPositionsUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchStakingPositionsUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Withdraw"`
 */
export const useWatchStakingPositionsWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const useReadStakingRewardsDistributor =
  /*#__PURE__*/ createUseReadContract({ abi: stakingRewardsDistributorAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"WEEK"`
 */
export const useReadStakingRewardsDistributorWeek =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'WEEK',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardCursor"`
 */
export const useReadStakingRewardsDistributorBaseRewardCursor =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardCursor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardPeriodCursor"`
 */
export const useReadStakingRewardsDistributorBaseRewardPeriodCursor =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardPeriodCursor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardPeriods"`
 */
export const useReadStakingRewardsDistributorBaseRewardPeriods =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardPeriods',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardsPerWeek"`
 */
export const useReadStakingRewardsDistributorBaseRewardsPerWeek =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardsPerWeek',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimable"`
 */
export const useReadStakingRewardsDistributorClaimable =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimable',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"cumulativeProtocolRewardsPerToken"`
 */
export const useReadStakingRewardsDistributorCumulativeProtocolRewardsPerToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'cumulativeProtocolRewardsPerToken',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"currentPeriodId"`
 */
export const useReadStakingRewardsDistributorCurrentPeriodId =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'currentPeriodId',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"globalOwner"`
 */
export const useReadStakingRewardsDistributorGlobalOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"globalPause"`
 */
export const useReadStakingRewardsDistributorGlobalPause =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const useReadStakingRewardsDistributorGlobalRestrict =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const useReadStakingRewardsDistributorIsPausedLocal =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"lastTokenTime"`
 */
export const useReadStakingRewardsDistributorLastTokenTime =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'lastTokenTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"owner"`
 */
export const useReadStakingRewardsDistributorOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"paused"`
 */
export const useReadStakingRewardsDistributorPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"pendingBaseRewards"`
 */
export const useReadStakingRewardsDistributorPendingBaseRewards =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'pendingBaseRewards',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"protocolRewardsPerTokenPaid"`
 */
export const useReadStakingRewardsDistributorProtocolRewardsPerTokenPaid =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'protocolRewardsPerTokenPaid',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadStakingRewardsDistributorProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"staking"`
 */
export const useReadStakingRewardsDistributorStaking =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'staking',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"startTime"`
 */
export const useReadStakingRewardsDistributorStartTime =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'startTime',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"token"`
 */
export const useReadStakingRewardsDistributorToken =
  /*#__PURE__*/ createUseReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'token',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const useWriteStakingRewardsDistributor =
  /*#__PURE__*/ createUseWriteContract({ abi: stakingRewardsDistributorAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claim"`
 */
export const useWriteStakingRewardsDistributorClaim =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimMany"`
 */
export const useWriteStakingRewardsDistributorClaimMany =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimMany',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimOnWithdrawal"`
 */
export const useWriteStakingRewardsDistributorClaimOnWithdrawal =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimOnWithdrawal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositBaseRewards"`
 */
export const useWriteStakingRewardsDistributorDepositBaseRewards =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositBaseRewards',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositProtocolFees"`
 */
export const useWriteStakingRewardsDistributorDepositProtocolFees =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositProtocolFees',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteStakingRewardsDistributorInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"onLockCreated"`
 */
export const useWriteStakingRewardsDistributorOnLockCreated =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'onLockCreated',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useWriteStakingRewardsDistributorPauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useWriteStakingRewardsDistributorRecoverErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteStakingRewardsDistributorRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteStakingRewardsDistributorTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useWriteStakingRewardsDistributorUnpauseLocal =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"updateAddresses"`
 */
export const useWriteStakingRewardsDistributorUpdateAddresses =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'updateAddresses',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useWriteStakingRewardsDistributorUpgradeTo =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteStakingRewardsDistributorUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const useSimulateStakingRewardsDistributor =
  /*#__PURE__*/ createUseSimulateContract({ abi: stakingRewardsDistributorAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claim"`
 */
export const useSimulateStakingRewardsDistributorClaim =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimMany"`
 */
export const useSimulateStakingRewardsDistributorClaimMany =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimMany',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimOnWithdrawal"`
 */
export const useSimulateStakingRewardsDistributorClaimOnWithdrawal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimOnWithdrawal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositBaseRewards"`
 */
export const useSimulateStakingRewardsDistributorDepositBaseRewards =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositBaseRewards',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositProtocolFees"`
 */
export const useSimulateStakingRewardsDistributorDepositProtocolFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositProtocolFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateStakingRewardsDistributorInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"onLockCreated"`
 */
export const useSimulateStakingRewardsDistributorOnLockCreated =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'onLockCreated',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const useSimulateStakingRewardsDistributorPauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const useSimulateStakingRewardsDistributorRecoverErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateStakingRewardsDistributorRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateStakingRewardsDistributorTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const useSimulateStakingRewardsDistributorUnpauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"updateAddresses"`
 */
export const useSimulateStakingRewardsDistributorUpdateAddresses =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'updateAddresses',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const useSimulateStakingRewardsDistributorUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateStakingRewardsDistributorUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const useWatchStakingRewardsDistributorEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchStakingRewardsDistributorAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"BaseRewardsClaimed"`
 */
export const useWatchStakingRewardsDistributorBaseRewardsClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'BaseRewardsClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"BaseRewardsDeposited"`
 */
export const useWatchStakingRewardsDistributorBaseRewardsDepositedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'BaseRewardsDeposited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchStakingRewardsDistributorBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchStakingRewardsDistributorInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchStakingRewardsDistributorOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Paused"`
 */
export const useWatchStakingRewardsDistributorPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"ProtocolFeesDeposited"`
 */
export const useWatchStakingRewardsDistributorProtocolFeesDepositedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'ProtocolFeesDeposited',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"ProtocolRewardsClaimed"`
 */
export const useWatchStakingRewardsDistributorProtocolRewardsClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'ProtocolRewardsClaimed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Unpaused"`
 */
export const useWatchStakingRewardsDistributorUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchStakingRewardsDistributorUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Upgraded',
  })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const readStakingPositions = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"artProxy"`
 */
export const readStakingPositionsArtProxy = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'artProxy',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readStakingPositionsBalanceOf = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOfAccountNFT"`
 */
export const readStakingPositionsBalanceOfAccountNft =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOfAccountNFT',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOfNFT"`
 */
export const readStakingPositionsBalanceOfNft =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOfNFT',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"balanceOfNFTAt"`
 */
export const readStakingPositionsBalanceOfNftAt =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'balanceOfNFTAt',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"breaker"`
 */
export const readStakingPositionsBreaker = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'breaker',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"decimals"`
 */
export const readStakingPositionsDecimals = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"epoch"`
 */
export const readStakingPositionsEpoch = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'epoch',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getApproved"`
 */
export const readStakingPositionsGetApproved = /*#__PURE__*/ createReadContract(
  { abi: stakingPositionsAbi, functionName: 'getApproved' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getLockedBalance"`
 */
export const readStakingPositionsGetLockedBalance =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getLockedBalance',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getPointHistory"`
 */
export const readStakingPositionsGetPointHistory =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getPointHistory',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserNFTs"`
 */
export const readStakingPositionsGetUserNfTs = /*#__PURE__*/ createReadContract(
  { abi: stakingPositionsAbi, functionName: 'getUserNFTs' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserPointHistory"`
 */
export const readStakingPositionsGetUserPointHistory =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserPointHistory',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserTotalVotingPower"`
 */
export const readStakingPositionsGetUserTotalVotingPower =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserTotalVotingPower',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"getUserTotalVotingPowerAt"`
 */
export const readStakingPositionsGetUserTotalVotingPowerAt =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'getUserTotalVotingPowerAt',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"globalOwner"`
 */
export const readStakingPositionsGlobalOwner = /*#__PURE__*/ createReadContract(
  { abi: stakingPositionsAbi, functionName: 'globalOwner' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"globalPause"`
 */
export const readStakingPositionsGlobalPause = /*#__PURE__*/ createReadContract(
  { abi: stakingPositionsAbi, functionName: 'globalPause' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const readStakingPositionsGlobalRestrict =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"iMaxTime"`
 */
export const readStakingPositionsIMaxTime = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'iMaxTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readStakingPositionsIsApprovedForAll =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"isApprovedOrOwner"`
 */
export const readStakingPositionsIsApprovedOrOwner =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'isApprovedOrOwner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const readStakingPositionsIsPausedLocal =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"maxTime"`
 */
export const readStakingPositionsMaxTime = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'maxTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"name"`
 */
export const readStakingPositionsName = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"owner"`
 */
export const readStakingPositionsOwner = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readStakingPositionsOwnerOf = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"ownerToNFTokenIdList"`
 */
export const readStakingPositionsOwnerToNfTokenIdList =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'ownerToNFTokenIdList',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"paused"`
 */
export const readStakingPositionsPaused = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'paused',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readStakingPositionsProxiableUuid =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"rewardsDistributor"`
 */
export const readStakingPositionsRewardsDistributor =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'rewardsDistributor',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"slopeChanges"`
 */
export const readStakingPositionsSlopeChanges =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'slopeChanges',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"supply"`
 */
export const readStakingPositionsSupply = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'supply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readStakingPositionsSupportsInterface =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"symbol"`
 */
export const readStakingPositionsSymbol = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"token"`
 */
export const readStakingPositionsToken = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'token',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"tokenId"`
 */
export const readStakingPositionsTokenId = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'tokenId',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readStakingPositionsTokenUri = /*#__PURE__*/ createReadContract({
  abi: stakingPositionsAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readStakingPositionsTotalSupply = /*#__PURE__*/ createReadContract(
  { abi: stakingPositionsAbi, functionName: 'totalSupply' },
)

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"totalSupplyAt"`
 */
export const readStakingPositionsTotalSupplyAt =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'totalSupplyAt',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"userPointEpoch"`
 */
export const readStakingPositionsUserPointEpoch =
  /*#__PURE__*/ createReadContract({
    abi: stakingPositionsAbi,
    functionName: 'userPointEpoch',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const writeStakingPositions = /*#__PURE__*/ createWriteContract({
  abi: stakingPositionsAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"approve"`
 */
export const writeStakingPositionsApprove = /*#__PURE__*/ createWriteContract({
  abi: stakingPositionsAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"checkpoint"`
 */
export const writeStakingPositionsCheckpoint =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"createLock"`
 */
export const writeStakingPositionsCreateLock =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'createLock',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"depositFor"`
 */
export const writeStakingPositionsDepositFor =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseAmount"`
 */
export const writeStakingPositionsIncreaseAmount =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseAmount',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseUnlockTime"`
 */
export const writeStakingPositionsIncreaseUnlockTime =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseUnlockTime',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"initialize"`
 */
export const writeStakingPositionsInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const writeStakingPositionsPauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const writeStakingPositionsRecoverErc20 =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeStakingPositionsRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeStakingPositionsSafeTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeStakingPositionsSetApprovalForAll =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const writeStakingPositionsSetArtProxy =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setMaxTime"`
 */
export const writeStakingPositionsSetMaxTime =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'setMaxTime',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeStakingPositionsTransferFrom =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeStakingPositionsTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unlockAll"`
 */
export const writeStakingPositionsUnlockAll = /*#__PURE__*/ createWriteContract(
  { abi: stakingPositionsAbi, functionName: 'unlockAll' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const writeStakingPositionsUnpauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const writeStakingPositionsUpgradeTo = /*#__PURE__*/ createWriteContract(
  { abi: stakingPositionsAbi, functionName: 'upgradeTo' },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeStakingPositionsUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"withdraw"`
 */
export const writeStakingPositionsWithdraw = /*#__PURE__*/ createWriteContract({
  abi: stakingPositionsAbi,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const simulateStakingPositions = /*#__PURE__*/ createSimulateContract({
  abi: stakingPositionsAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"approve"`
 */
export const simulateStakingPositionsApprove =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'approve',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"checkpoint"`
 */
export const simulateStakingPositionsCheckpoint =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'checkpoint',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"createLock"`
 */
export const simulateStakingPositionsCreateLock =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'createLock',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"depositFor"`
 */
export const simulateStakingPositionsDepositFor =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'depositFor',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseAmount"`
 */
export const simulateStakingPositionsIncreaseAmount =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseAmount',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"increaseUnlockTime"`
 */
export const simulateStakingPositionsIncreaseUnlockTime =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'increaseUnlockTime',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateStakingPositionsInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const simulateStakingPositionsPauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const simulateStakingPositionsRecoverErc20 =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateStakingPositionsRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateStakingPositionsSafeTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateStakingPositionsSetApprovalForAll =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setArtProxy"`
 */
export const simulateStakingPositionsSetArtProxy =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'setArtProxy',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"setMaxTime"`
 */
export const simulateStakingPositionsSetMaxTime =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'setMaxTime',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateStakingPositionsTransferFrom =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateStakingPositionsTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unlockAll"`
 */
export const simulateStakingPositionsUnlockAll =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'unlockAll',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const simulateStakingPositionsUnpauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const simulateStakingPositionsUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateStakingPositionsUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingPositionsAbi}__ and `functionName` set to `"withdraw"`
 */
export const simulateStakingPositionsWithdraw =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingPositionsAbi,
    functionName: 'withdraw',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__
 */
export const watchStakingPositionsEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: stakingPositionsAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchStakingPositionsAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Approval"`
 */
export const watchStakingPositionsApprovalEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchStakingPositionsApprovalForAllEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 */
export const watchStakingPositionsBatchMetadataUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'BatchMetadataUpdate',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchStakingPositionsBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"BreakerActivated"`
 */
export const watchStakingPositionsBreakerActivatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'BreakerActivated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Deposit"`
 */
export const watchStakingPositionsDepositEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchStakingPositionsInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"MetadataUpdate"`
 */
export const watchStakingPositionsMetadataUpdateEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'MetadataUpdate',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchStakingPositionsOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Paused"`
 */
export const watchStakingPositionsPausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Supply"`
 */
export const watchStakingPositionsSupplyEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Supply',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchStakingPositionsTransferEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Unpaused"`
 */
export const watchStakingPositionsUnpausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchStakingPositionsUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingPositionsAbi}__ and `eventName` set to `"Withdraw"`
 */
export const watchStakingPositionsWithdrawEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingPositionsAbi,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const readStakingRewardsDistributor = /*#__PURE__*/ createReadContract({
  abi: stakingRewardsDistributorAbi,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"WEEK"`
 */
export const readStakingRewardsDistributorWeek =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'WEEK',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardCursor"`
 */
export const readStakingRewardsDistributorBaseRewardCursor =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardCursor',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardPeriodCursor"`
 */
export const readStakingRewardsDistributorBaseRewardPeriodCursor =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardPeriodCursor',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardPeriods"`
 */
export const readStakingRewardsDistributorBaseRewardPeriods =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardPeriods',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"baseRewardsPerWeek"`
 */
export const readStakingRewardsDistributorBaseRewardsPerWeek =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'baseRewardsPerWeek',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimable"`
 */
export const readStakingRewardsDistributorClaimable =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimable',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"cumulativeProtocolRewardsPerToken"`
 */
export const readStakingRewardsDistributorCumulativeProtocolRewardsPerToken =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'cumulativeProtocolRewardsPerToken',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"currentPeriodId"`
 */
export const readStakingRewardsDistributorCurrentPeriodId =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'currentPeriodId',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"globalOwner"`
 */
export const readStakingRewardsDistributorGlobalOwner =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'globalOwner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"globalPause"`
 */
export const readStakingRewardsDistributorGlobalPause =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'globalPause',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"globalRestrict"`
 */
export const readStakingRewardsDistributorGlobalRestrict =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'globalRestrict',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"isPausedLocal"`
 */
export const readStakingRewardsDistributorIsPausedLocal =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'isPausedLocal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"lastTokenTime"`
 */
export const readStakingRewardsDistributorLastTokenTime =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'lastTokenTime',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"owner"`
 */
export const readStakingRewardsDistributorOwner =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"paused"`
 */
export const readStakingRewardsDistributorPaused =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'paused',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"pendingBaseRewards"`
 */
export const readStakingRewardsDistributorPendingBaseRewards =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'pendingBaseRewards',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"protocolRewardsPerTokenPaid"`
 */
export const readStakingRewardsDistributorProtocolRewardsPerTokenPaid =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'protocolRewardsPerTokenPaid',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const readStakingRewardsDistributorProxiableUuid =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"staking"`
 */
export const readStakingRewardsDistributorStaking =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'staking',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"startTime"`
 */
export const readStakingRewardsDistributorStartTime =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'startTime',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"token"`
 */
export const readStakingRewardsDistributorToken =
  /*#__PURE__*/ createReadContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'token',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const writeStakingRewardsDistributor = /*#__PURE__*/ createWriteContract(
  { abi: stakingRewardsDistributorAbi },
)

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claim"`
 */
export const writeStakingRewardsDistributorClaim =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimMany"`
 */
export const writeStakingRewardsDistributorClaimMany =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimMany',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimOnWithdrawal"`
 */
export const writeStakingRewardsDistributorClaimOnWithdrawal =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimOnWithdrawal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositBaseRewards"`
 */
export const writeStakingRewardsDistributorDepositBaseRewards =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositBaseRewards',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositProtocolFees"`
 */
export const writeStakingRewardsDistributorDepositProtocolFees =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositProtocolFees',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"initialize"`
 */
export const writeStakingRewardsDistributorInitialize =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"onLockCreated"`
 */
export const writeStakingRewardsDistributorOnLockCreated =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'onLockCreated',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const writeStakingRewardsDistributorPauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const writeStakingRewardsDistributorRecoverErc20 =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeStakingRewardsDistributorRenounceOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeStakingRewardsDistributorTransferOwnership =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const writeStakingRewardsDistributorUnpauseLocal =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"updateAddresses"`
 */
export const writeStakingRewardsDistributorUpdateAddresses =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'updateAddresses',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const writeStakingRewardsDistributorUpgradeTo =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeStakingRewardsDistributorUpgradeToAndCall =
  /*#__PURE__*/ createWriteContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const simulateStakingRewardsDistributor =
  /*#__PURE__*/ createSimulateContract({ abi: stakingRewardsDistributorAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claim"`
 */
export const simulateStakingRewardsDistributorClaim =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claim',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimMany"`
 */
export const simulateStakingRewardsDistributorClaimMany =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimMany',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"claimOnWithdrawal"`
 */
export const simulateStakingRewardsDistributorClaimOnWithdrawal =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'claimOnWithdrawal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositBaseRewards"`
 */
export const simulateStakingRewardsDistributorDepositBaseRewards =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositBaseRewards',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"depositProtocolFees"`
 */
export const simulateStakingRewardsDistributorDepositProtocolFees =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'depositProtocolFees',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"initialize"`
 */
export const simulateStakingRewardsDistributorInitialize =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"onLockCreated"`
 */
export const simulateStakingRewardsDistributorOnLockCreated =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'onLockCreated',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"pauseLocal"`
 */
export const simulateStakingRewardsDistributorPauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"recoverERC20"`
 */
export const simulateStakingRewardsDistributorRecoverErc20 =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateStakingRewardsDistributorRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateStakingRewardsDistributorTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"unpauseLocal"`
 */
export const simulateStakingRewardsDistributorUnpauseLocal =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"updateAddresses"`
 */
export const simulateStakingRewardsDistributorUpdateAddresses =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'updateAddresses',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeTo"`
 */
export const simulateStakingRewardsDistributorUpgradeTo =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateStakingRewardsDistributorUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: stakingRewardsDistributorAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__
 */
export const watchStakingRewardsDistributorEvent =
  /*#__PURE__*/ createWatchContractEvent({ abi: stakingRewardsDistributorAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchStakingRewardsDistributorAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"BaseRewardsClaimed"`
 */
export const watchStakingRewardsDistributorBaseRewardsClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'BaseRewardsClaimed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"BaseRewardsDeposited"`
 */
export const watchStakingRewardsDistributorBaseRewardsDepositedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'BaseRewardsDeposited',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchStakingRewardsDistributorBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchStakingRewardsDistributorInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchStakingRewardsDistributorOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Paused"`
 */
export const watchStakingRewardsDistributorPausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"ProtocolFeesDeposited"`
 */
export const watchStakingRewardsDistributorProtocolFeesDepositedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'ProtocolFeesDeposited',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"ProtocolRewardsClaimed"`
 */
export const watchStakingRewardsDistributorProtocolRewardsClaimedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'ProtocolRewardsClaimed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Unpaused"`
 */
export const watchStakingRewardsDistributorUnpausedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link stakingRewardsDistributorAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchStakingRewardsDistributorUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: stakingRewardsDistributorAbi,
    eventName: 'Upgraded',
  })
