import fs from "fs";
import {
  Address,
  parseUnits,
  zeroAddress,
  isAddress,
  createPublicClient,
  http,
} from "viem";
import { dependencies } from "./dependencies";
import deployedContracts from "./deployments.json";
import { base } from "viem/chains";

type VaultParams = {
  name: string;
  symbol: string;
  asset: Address;
  lToken: Address;
  stakeToken: Address;
  stakeForFeeReduction: bigint;
  stakeForInstantWithdrawal: bigint;
  globalOwner: Address;
  globalPause: Address;
  globalAccessList: Address;
  liquidityManager: Address;
  feeRecipient: Address;
  liquidityBufferRate: bigint;
  aaveLendingPool: Address;
};

type VaultLiquidityInitParams = {
  initialAssetsPerShare: bigint;
  highWaterMark: bigint;
  yieldAPR: bigint;
  managementFeeRate: bigint;
  performanceFeeRate: bigint;
  withdrawalFeeRate: bigint;
  withdrawalGasFee: bigint;
  deploymentDelay: number;
};

const TEMP_TOKENS_FILE = "temp/deployedTokens.json";
const FOUR_YEARS_IN_SECONDS = BigInt(4 * 365 * 24 * 60 * 60);
const EMPTY_MERKLE_ROOT =
  "0x0000000000000000000000000000000000000000000000000000000000000000";

function toRay(amount: number, decimals = 2) {
  // @dev ex: amount = 100 & decimals = 2 => 100%
  return parseUnits(amount.toString(), 27 - decimals);
}

export function writeTempTokenAddress(
  chainId: number | string,
  symbol: string,
  address: string,
) {
  if (!fs.existsSync(TEMP_TOKENS_FILE)) {
    fs.mkdirSync("temp");
    fs.writeFileSync(TEMP_TOKENS_FILE, "{}", "utf8");
  }

  const deployedTokens: {
    [chainId: string]: {
      [symbol: string]: string;
    };
  } = JSON.parse(fs.readFileSync(TEMP_TOKENS_FILE, "utf8"));

  const stringChainId = chainId.toString();

  deployedTokens[stringChainId] ??= {};
  deployedTokens[stringChainId][symbol] = address;

  fs.writeFileSync(
    TEMP_TOKENS_FILE,
    JSON.stringify(deployedTokens, null, 2),
    "utf8",
  );
}

export async function getReferenceBaseAssetsPerShare(
  symbol: "lyUSD" | "lyEUR",
): Promise<bigint> {
  const client = createPublicClient({
    chain: base,
    transport: http(base.rpcUrls.default.http[0]),
  });

  const result = await client.readContract({
    abi: [
      {
        type: "function",
        inputs: [{ name: "shares", internalType: "uint256", type: "uint256" }],
        name: "convertToAssets",
        outputs: [{ name: "assets", internalType: "uint256", type: "uint256" }],
        stateMutability: "view",
      },
    ],
    address: getTokenAddress(8453, symbol),
    functionName: "convertToAssets",
    args: [10n ** 18n],
  });

  return result;
}

export function getTokenAddress(
  chainId: number | string,
  symbol: string,
  allowZeroAddress = false,
): Address {
  const stringChainId = chainId.toString();

  const fromDeps = (dependencies as any)[stringChainId]?.[symbol];
  const fromTemp = fs.existsSync(TEMP_TOKENS_FILE)
    ? JSON.parse(fs.readFileSync(TEMP_TOKENS_FILE, "utf8"))?.[stringChainId]?.[
        symbol
      ]
    : undefined;
  const fromDeployments =
    (deployedContracts as any)[stringChainId]?.[0]?.contracts?.[
      `${symbol}_Proxy`
    ]?.address ||
    (deployedContracts as any)[stringChainId]?.[0]?.contracts?.[symbol]
      ?.address;

  const address = fromTemp || fromDeps || fromDeployments || zeroAddress;

  if (
    !address ||
    !isAddress(address) ||
    (address === zeroAddress && !allowZeroAddress)
  )
    throw Error(`Token ${symbol} not found for chain ${chainId}`);

  return address as Address;
}

export function getGeneralChainConfig(chainId: number) {
  const chainConfig = configsContracts[chainId];

  if (!chainConfig) throw Error("Chain not found");

  return chainConfig;
}

export async function getParametersForVault(
  chainId: number,
  name: string,
  symbol: "lyUSD" | "lyEUR",
  globalOwner: Address,
  globalPause: Address,
  globalAccessList: Address,
): Promise<[VaultParams, VaultLiquidityInitParams]> {
  const chainConfig = configsContracts[chainId];
  const vaultConfig = chainConfig?.vaults?.[symbol];

  if (!chainConfig || !vaultConfig) throw Error("Vault not found");
  if (!vaultConfig.asset) throw Error("Asset not found");

  if (
    vaultConfig.liquidityManager === zeroAddress ||
    chainConfig.feeRecipient === zeroAddress
  )
    throw Error("Invalid liquidityManager or feeRecipient");

  const referenceBaseAssetsPerShare =
    await getReferenceBaseAssetsPerShare(symbol);
  const initialAssetsPerShare =
    vaultConfig.initialAssetsPerShare || referenceBaseAssetsPerShare;
  console.log("=> Initial Share Price: ", initialAssetsPerShare);

  return [
    {
      name,
      symbol,
      stakeToken: chainConfig.stakeToken,
      globalOwner,
      globalPause,
      globalAccessList,
      //
      stakeForFeeReduction: chainConfig.stakeForFeeReduction,
      stakeForInstantWithdrawal: chainConfig.stakeForInstantWithdrawal,
      feeRecipient: chainConfig.feeRecipient,
      //
      lToken: vaultConfig.lToken,
      asset: vaultConfig.asset,
      liquidityManager: vaultConfig.liquidityManager,
      liquidityBufferRate: vaultConfig.liquidityBufferRate,
      aaveLendingPool: vaultConfig.aaveLendingPool,
    },
    {
      initialAssetsPerShare,
      highWaterMark: vaultConfig.highWaterMark,
      deploymentDelay: vaultConfig.deploymentDelay,
      yieldAPR: vaultConfig.yieldAPR,
      managementFeeRate: vaultConfig.managementFeeRate,
      performanceFeeRate: vaultConfig.performanceFeeRate,
      withdrawalFeeRate: vaultConfig.withdrawalFeeRate,
      withdrawalGasFee: vaultConfig.withdrawalGasFee,
    },
  ];
}

const configsContracts: {
  [chainId: string]: {
    owner: Address;
    feeRecipient: Address;
    stakeForFeeReduction: bigint;
    stakeForInstantWithdrawal: bigint;
    stakeToken: Address;
    maxLockDurationSeconds: bigint;
    vaults: {
      [symbol: string]: {
        asset: Address | undefined;
        lToken: Address;
        liquidityBufferRate: bigint;
        liquidityManager: Address;
        aaveLendingPool: Address;
        //
        initialAssetsPerShare: bigint;
        highWaterMark: bigint;
        deploymentDelay: number;
        yieldAPR: bigint;
        managementFeeRate: bigint;
        performanceFeeRate: bigint;
        withdrawalFeeRate: bigint;
        withdrawalGasFee: bigint;
      };
    };
  };
} = {
  // Base
  [8453]: {
    owner: "0x972c17D0adA071db4a0395505dD3Ad0a80809053",
    feeRecipient: "0x22F74606AC919A4CA912Ad787A9bf1093902f692",
    stakeForFeeReduction: 0n,
    stakeForInstantWithdrawal: 0n,
    stakeToken: getTokenAddress(8453, "LDY"),
    maxLockDurationSeconds: FOUR_YEARS_IN_SECONDS,
    initialMerkleRoot: EMPTY_MERKLE_ROOT,
    vaults: {
      lyUSD: {
        asset: getTokenAddress(8453, "USDC"),
        lToken: getTokenAddress(8453, "LUSDC", true),
        liquidityBufferRate: toRay(10),
        liquidityManager: "0xE7616e98d2506E571E8f6E38e7Bfd0b55642ACac",
        aaveLendingPool: dependencies[8453].AAVE_LENDING_POOL,
        //
        initialAssetsPerShare: 0n, // defaults to fetching Base vault price
        highWaterMark: 0n, // default 1:1 ratio
        deploymentDelay: 1, // days
        yieldAPR: toRay(9), // 9% APR in RAY
        managementFeeRate: 0n, // 0.2% in RAY
        performanceFeeRate: 0n, // 2% in RAY
        withdrawalFeeRate: toRay(0.3), // 0.05% in RAY
        withdrawalGasFee: 0n,
      },
    },
  },
};
