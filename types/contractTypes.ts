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
// axUSD
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const axUsdAbi = [
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
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const axUsdAddress = {
  8453: '0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC',
} as const

/**
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const axUsdConfig = { address: axUsdAddress, abi: axUsdAbi } as const

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
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsd = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"RAY"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdRay = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'RAY',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"aToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdAToken = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'aToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"aaveLendingPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdAaveLendingPool = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'aaveLendingPool',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"accountWithdrawalFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdAccountWithdrawalFee =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'accountWithdrawalFee',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdAllowance = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"asset"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdAsset = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'asset',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"convertToAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdConvertToAssets = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'convertToAssets',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"convertToShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdConvertToShares = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'convertToShares',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdDecimals = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decimalsOffset"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdDecimalsOffset = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'decimalsOffset',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"deploymentDelay"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdDeploymentDelay = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'deploymentDelay',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"feeRecipient"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdFeeRecipient = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'feeRecipient',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getBufferAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetBufferAssets = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getBufferAssets',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getCCIPAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetCcipAdmin = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getCCIPAdmin',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getFeeData"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetFeeData = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getFeeData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getUserWithdrawalRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetUserWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getUserWithdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getWithdrawalRequestCount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetWithdrawalRequestCount =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getWithdrawalRequestCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getWithdrawalRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getWithdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getWithdrawalRequestsByIds"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGetWithdrawalRequestsByIds =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getWithdrawalRequestsByIds',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"globalOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGlobalOwner = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'globalOwner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"globalPause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGlobalPause = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'globalPause',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"globalRestrict"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdGlobalRestrict = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'globalRestrict',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"hasBufferStrategy"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdHasBufferStrategy =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'hasBufferStrategy',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"highWaterMark"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdHighWaterMark = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'highWaterMark',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"isBurner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdIsBurner = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'isBurner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"isMinter"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdIsMinter = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'isMinter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"isPausedLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdIsPausedLocal = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'isPausedLocal',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"lToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdLToken = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'lToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"lastCompoundTime"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdLastCompoundTime = /*#__PURE__*/ createUseReadContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'lastCompoundTime' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"lastFeeTime"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdLastFeeTime = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'lastFeeTime',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"liquidityBufferRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdLiquidityBufferRate =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'liquidityBufferRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"liquidityManager"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdLiquidityManager = /*#__PURE__*/ createUseReadContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'liquidityManager' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"managementFeeRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdManagementFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'managementFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxDeposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdMaxDeposit = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxDeposit',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxMint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdMaxMint = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxMint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxRedeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdMaxRedeem = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxRedeem',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxWithdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdMaxWithdraw = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxWithdraw',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdName = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdOwner = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdPaused = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"performanceFeeRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdPerformanceFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'performanceFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewDeposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdPreviewDeposit = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewDeposit',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewMint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdPreviewMint = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewMint',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewRedeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdPreviewRedeem = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewRedeem',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewWithdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdPreviewWithdraw = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewWithdraw',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdProxiableUuid = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"stakeForFeeReduction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdStakeForFeeReduction =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'stakeForFeeReduction',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"stakeForInstantWithdrawal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdStakeForInstantWithdrawal =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'stakeForInstantWithdrawal',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"stakeToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdStakeToken = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'stakeToken',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdSymbol = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"totalAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdTotalAssets = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'totalAssets',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdrawalFeeRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdWithdrawalFeeRate =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'withdrawalFeeRate',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdrawalGasFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdWithdrawalGasFee = /*#__PURE__*/ createUseReadContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'withdrawalGasFee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdrawalRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdWithdrawalRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'withdrawalRequests',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"yieldAPR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useReadAxUsdYieldApr = /*#__PURE__*/ createUseReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'yieldAPR',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsd = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdApprove = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdBurn = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"depositToBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdDepositToBuffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdGrantBurnRole = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'grantBurnRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdGrantMintRole = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'grantMintRole',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"harvestFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdHarvestFees = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'harvestFees',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"migrateLToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdMigrateLToken = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'migrateLToken',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdMint = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"pauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdPauseLocal = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'pauseLocal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"processRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdProcessRequests =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"recoverERC20"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdRecoverErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'recoverERC20',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdRedeem = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"requestWithdrawal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdRequestWithdrawal =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdRevokeBurnRole = /*#__PURE__*/ createUseWriteContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'revokeBurnRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdRevokeMintRole = /*#__PURE__*/ createUseWriteContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'revokeMintRole' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdSetAccountWithdrawalFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setCCIPAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdSetCcipAdmin = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'setCCIPAdmin',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setTotalAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdSetTotalAssets = /*#__PURE__*/ createUseWriteContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'setTotalAssets' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"skimBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdSkimBuffer = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'skimBuffer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"unpauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUnpauseLocal = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'unpauseLocal',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateAPR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateApr = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateAPR',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateBufferRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateBufferRate =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateDeploymentDelay =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateFeeRates"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateFeeRates = /*#__PURE__*/ createUseWriteContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'updateFeeRates' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateHighWaterMark"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateHighWaterMark =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultManagers"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateVaultManagers =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultParams"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateVaultParams =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpdateWithdrawalGasFee =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpgradeTo = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWriteAxUsdWithdraw = /*#__PURE__*/ createUseWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsd = /*#__PURE__*/ createUseSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdDeposit = /*#__PURE__*/ createUseSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"depositToBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdDepositToBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdGrantBurnRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'grantBurnRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdGrantMintRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'grantMintRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"harvestFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdHarvestFees =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'harvestFees',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"migrateLToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdMigrateLToken =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'migrateLToken',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdMint = /*#__PURE__*/ createUseSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"pauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdPauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'pauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"processRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdProcessRequests =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"recoverERC20"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdRecoverErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'recoverERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdRedeem = /*#__PURE__*/ createUseSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"requestWithdrawal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdRequestWithdrawal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdRevokeBurnRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'revokeBurnRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdRevokeMintRole =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'revokeMintRole',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdSetAccountWithdrawalFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setCCIPAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdSetCcipAdmin =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'setCCIPAdmin',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setTotalAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdSetTotalAssets =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'setTotalAssets',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"skimBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdSkimBuffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'skimBuffer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdTransfer = /*#__PURE__*/ createUseSimulateContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'transfer' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"unpauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUnpauseLocal =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'unpauseLocal',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateAPR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateApr =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateAPR',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateBufferRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateBufferRate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateDeploymentDelay =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateFeeRates"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateFeeRates =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateFeeRates',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateHighWaterMark"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateHighWaterMark =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultManagers"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateVaultManagers =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultParams"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateVaultParams =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpdateWithdrawalGasFee =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpgradeTo =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'upgradeTo',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useSimulateAxUsdWithdraw = /*#__PURE__*/ createUseSimulateContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'withdraw' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"APRUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdAprUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'APRUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"AccountWithdrawalFeeSet"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdAccountWithdrawalFeeSetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'AccountWithdrawalFeeSet',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BufferRateUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdBufferRateUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BufferRateUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BurnAccessGranted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdBurnAccessGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BurnAccessGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BurnAccessRevoked"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdBurnAccessRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BurnAccessRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"CCIPAdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdCcipAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'CCIPAdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"DeploymentDelayUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdDeploymentDelayUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'DeploymentDelayUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdDepositEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Deposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"FeeRatesUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdFeeRatesUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'FeeRatesUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"HighWaterMarkUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdHighWaterMarkUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'HighWaterMarkUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"MintAccessGranted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdMintAccessGrantedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'MintAccessGranted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"MintAccessRevoked"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdMintAccessRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'MintAccessRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdPausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Paused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"RateCheckpointUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdRateCheckpointUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'RateCheckpointUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"TotalAssetsUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdTotalAssetsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'TotalAssetsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdUnpausedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Unpaused',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"VaultManagersUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdVaultManagersUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'VaultManagersUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"VaultParamsUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdVaultParamsUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'VaultParamsUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Withdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"WithdrawalGasFeeUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdWithdrawalGasFeeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'WithdrawalGasFeeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"WithdrawalProcessed"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdWithdrawalProcessedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'WithdrawalProcessed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"WithdrawalRequested"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const useWatchAxUsdWithdrawalRequestedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'WithdrawalRequested',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsd = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"RAY"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdRay = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'RAY',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"aToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdAToken = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'aToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"aaveLendingPool"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdAaveLendingPool = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'aaveLendingPool',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"accountWithdrawalFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdAccountWithdrawalFee = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'accountWithdrawalFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdAllowance = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"asset"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdAsset = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'asset',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdBalanceOf = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"convertToAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdConvertToAssets = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'convertToAssets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"convertToShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdConvertToShares = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'convertToShares',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdDecimals = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decimalsOffset"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdDecimalsOffset = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'decimalsOffset',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"deploymentDelay"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdDeploymentDelay = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'deploymentDelay',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"feeRecipient"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdFeeRecipient = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'feeRecipient',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getBufferAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetBufferAssets = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getBufferAssets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getCCIPAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetCcipAdmin = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getCCIPAdmin',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getFeeData"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetFeeData = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getFeeData',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getUserWithdrawalRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetUserWithdrawalRequests =
  /*#__PURE__*/ createReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getUserWithdrawalRequests',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getWithdrawalRequestCount"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetWithdrawalRequestCount =
  /*#__PURE__*/ createReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getWithdrawalRequestCount',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getWithdrawalRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetWithdrawalRequests = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'getWithdrawalRequests',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"getWithdrawalRequestsByIds"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGetWithdrawalRequestsByIds =
  /*#__PURE__*/ createReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'getWithdrawalRequestsByIds',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"globalOwner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGlobalOwner = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'globalOwner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"globalPause"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGlobalPause = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'globalPause',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"globalRestrict"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdGlobalRestrict = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'globalRestrict',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"hasBufferStrategy"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdHasBufferStrategy = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'hasBufferStrategy',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"highWaterMark"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdHighWaterMark = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'highWaterMark',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"isBurner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdIsBurner = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'isBurner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"isMinter"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdIsMinter = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'isMinter',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"isPausedLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdIsPausedLocal = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'isPausedLocal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"lToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdLToken = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'lToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"lastCompoundTime"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdLastCompoundTime = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'lastCompoundTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"lastFeeTime"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdLastFeeTime = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'lastFeeTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"liquidityBufferRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdLiquidityBufferRate = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'liquidityBufferRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"liquidityManager"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdLiquidityManager = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'liquidityManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"managementFeeRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdManagementFeeRate = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'managementFeeRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxDeposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdMaxDeposit = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxDeposit',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxMint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdMaxMint = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxMint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxRedeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdMaxRedeem = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxRedeem',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"maxWithdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdMaxWithdraw = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'maxWithdraw',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdName = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdOwner = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdPaused = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"performanceFeeRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdPerformanceFeeRate = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'performanceFeeRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewDeposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdPreviewDeposit = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewDeposit',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewMint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdPreviewMint = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewMint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewRedeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdPreviewRedeem = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewRedeem',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"previewWithdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdPreviewWithdraw = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'previewWithdraw',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"proxiableUUID"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdProxiableUuid = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"stakeForFeeReduction"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdStakeForFeeReduction = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'stakeForFeeReduction',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"stakeForInstantWithdrawal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdStakeForInstantWithdrawal =
  /*#__PURE__*/ createReadContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'stakeForInstantWithdrawal',
  })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"stakeToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdStakeToken = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'stakeToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdSymbol = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"totalAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdTotalAssets = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'totalAssets',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdTotalSupply = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdrawalFeeRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdWithdrawalFeeRate = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'withdrawalFeeRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdrawalGasFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdWithdrawalGasFee = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'withdrawalGasFee',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdrawalRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdWithdrawalRequests = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'withdrawalRequests',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"yieldAPR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const readAxUsdYieldApr = /*#__PURE__*/ createReadContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'yieldAPR',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsd = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdApprove = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdBurn = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdDecreaseAllowance = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'decreaseAllowance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdDeposit = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"depositToBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdDepositToBuffer = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'depositToBuffer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdGrantBurnRole = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'grantBurnRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdGrantMintRole = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'grantMintRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"harvestFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdHarvestFees = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'harvestFees',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdIncreaseAllowance = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'increaseAllowance',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdInitialize = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"migrateLToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdMigrateLToken = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'migrateLToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdMint = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"pauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdPauseLocal = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'pauseLocal',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"processRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdProcessRequests = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'processRequests',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"recoverERC20"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdRecoverErc20 = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'recoverERC20',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdRedeem = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"requestWithdrawal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdRequestWithdrawal = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'requestWithdrawal',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdRevokeBurnRole = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'revokeBurnRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdRevokeMintRole = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'revokeMintRole',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdSetAccountWithdrawalFee =
  /*#__PURE__*/ createWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setCCIPAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdSetCcipAdmin = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'setCCIPAdmin',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setTotalAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdSetTotalAssets = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'setTotalAssets',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"skimBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdSkimBuffer = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'skimBuffer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdTransfer = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"unpauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUnpauseLocal = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'unpauseLocal',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateAPR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateApr = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateAPR',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateBufferRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateBufferRate = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateBufferRate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateDeploymentDelay =
  /*#__PURE__*/ createWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateFeeRates"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateFeeRates = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateFeeRates',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateHighWaterMark"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateHighWaterMark = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateHighWaterMark',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultManagers"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateVaultManagers = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateVaultManagers',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultParams"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateVaultParams = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateVaultParams',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpdateWithdrawalGasFee =
  /*#__PURE__*/ createWriteContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpgradeTo = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdUpgradeToAndCall = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'upgradeToAndCall',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const writeAxUsdWithdraw = /*#__PURE__*/ createWriteContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsd = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdApprove = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdBurn = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"burnAndRemintBlacklistedShares"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdBurnAndRemintBlacklistedShares =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'burnAndRemintBlacklistedShares',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"decreaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdDecreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdDeposit = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'deposit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"depositToBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdDepositToBuffer =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'depositToBuffer',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdGrantBurnRole = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'grantBurnRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"grantMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdGrantMintRole = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'grantMintRole',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"harvestFees"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdHarvestFees = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'harvestFees',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"increaseAllowance"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdIncreaseAllowance =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdInitialize = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"migrateLToken"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdMigrateLToken = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'migrateLToken',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdMint = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"pauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdPauseLocal = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'pauseLocal',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"processRequests"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdProcessRequests =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'processRequests',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"recoverERC20"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdRecoverErc20 = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'recoverERC20',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdRedeem = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdRenounceOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"requestWithdrawal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdRequestWithdrawal =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'requestWithdrawal',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeBurnRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdRevokeBurnRole = /*#__PURE__*/ createSimulateContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'revokeBurnRole' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"revokeMintRole"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdRevokeMintRole = /*#__PURE__*/ createSimulateContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'revokeMintRole' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setAccountWithdrawalFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdSetAccountWithdrawalFee =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'setAccountWithdrawalFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setCCIPAdmin"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdSetCcipAdmin = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'setCCIPAdmin',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"setTotalAssets"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdSetTotalAssets = /*#__PURE__*/ createSimulateContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'setTotalAssets' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"skimBuffer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdSkimBuffer = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'skimBuffer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdTransfer = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdTransferOwnership =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"unpauseLocal"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUnpauseLocal = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'unpauseLocal',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateAPR"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateApr = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'updateAPR',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateBufferRate"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateBufferRate =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateBufferRate',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateDeploymentDelay"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateDeploymentDelay =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateDeploymentDelay',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateFeeRates"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateFeeRates = /*#__PURE__*/ createSimulateContract(
  { abi: axUsdAbi, address: axUsdAddress, functionName: 'updateFeeRates' },
)

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateHighWaterMark"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateHighWaterMark =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateHighWaterMark',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultManagers"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateVaultManagers =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateVaultManagers',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateVaultParams"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateVaultParams =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateVaultParams',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"updateWithdrawalGasFee"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpdateWithdrawalGasFee =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'updateWithdrawalGasFee',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeTo"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpgradeTo = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'upgradeTo',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"upgradeToAndCall"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdUpgradeToAndCall =
  /*#__PURE__*/ createSimulateContract({
    abi: axUsdAbi,
    address: axUsdAddress,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link axUsdAbi}__ and `functionName` set to `"withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const simulateAxUsdWithdraw = /*#__PURE__*/ createSimulateContract({
  abi: axUsdAbi,
  address: axUsdAddress,
  functionName: 'withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"AdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BeaconUpgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdBeaconUpgradedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Upgraded"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Upgraded',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"APRUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdAprUpdatedEvent = /*#__PURE__*/ createWatchContractEvent(
  { abi: axUsdAbi, address: axUsdAddress, eventName: 'APRUpdated' },
)

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"AccountWithdrawalFeeSet"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdAccountWithdrawalFeeSetEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'AccountWithdrawalFeeSet',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BufferRateUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdBufferRateUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BufferRateUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BurnAccessGranted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdBurnAccessGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BurnAccessGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"BurnAccessRevoked"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdBurnAccessRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'BurnAccessRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"CCIPAdminChanged"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdCcipAdminChangedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'CCIPAdminChanged',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"DeploymentDelayUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdDeploymentDelayUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'DeploymentDelayUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Deposit"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdDepositEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Deposit',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"FeeRatesUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdFeeRatesUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'FeeRatesUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"HighWaterMarkUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdHighWaterMarkUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'HighWaterMarkUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdInitializedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"MintAccessGranted"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdMintAccessGrantedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'MintAccessGranted',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"MintAccessRevoked"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdMintAccessRevokedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'MintAccessRevoked',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdOwnershipTransferredEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Paused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdPausedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Paused',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"RateCheckpointUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdRateCheckpointUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'RateCheckpointUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"TotalAssetsUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdTotalAssetsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'TotalAssetsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Unpaused"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdUnpausedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Unpaused',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"VaultManagersUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdVaultManagersUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'VaultManagersUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"VaultParamsUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdVaultParamsUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'VaultParamsUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"Withdraw"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdWithdrawEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: axUsdAbi,
  address: axUsdAddress,
  eventName: 'Withdraw',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"WithdrawalGasFeeUpdated"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdWithdrawalGasFeeUpdatedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'WithdrawalGasFeeUpdated',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"WithdrawalProcessed"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdWithdrawalProcessedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'WithdrawalProcessed',
  })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link axUsdAbi}__ and `eventName` set to `"WithdrawalRequested"`
 *
 * [__View Contract on Base Basescan__](https://basescan.org/address/0xEF3fbcEEA9d0A1F343433b3d5F2FF2dc28946BdC)
 */
export const watchAxUsdWithdrawalRequestedEvent =
  /*#__PURE__*/ createWatchContractEvent({
    abi: axUsdAbi,
    address: axUsdAddress,
    eventName: 'WithdrawalRequested',
  })
