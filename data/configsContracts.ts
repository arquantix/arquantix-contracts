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

  const address = getTokenAddress(8453, symbol, true);
  if (address === zeroAddress) return 0n;

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
    address,
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
  symbol: "axUSD",
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

  const initialAssetsPerShare = vaultConfig.initialAssetsPerShare
    ? vaultConfig.initialAssetsPerShare
    : await getReferenceBaseAssetsPerShare(symbol as "lyUSD" | "lyEUR");
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
    owner: "0xA3C37ae68325c76a1dca3120fc94c2bA82B7972C", // Owner multisig (Safe 2/3)
    feeRecipient: "0x2296b81e9BBC085E117952FB9b15886b8BE3E1c9", // Fee Recipient multisig (Safe 2/3)
    stakeForFeeReduction: 0n,
    stakeForInstantWithdrawal: 0n,
    stakeToken: zeroAddress,
    maxLockDurationSeconds: FOUR_YEARS_IN_SECONDS,
    vaults: {
      axUSD: {
        asset: getTokenAddress(8453, "USDC"),
        lToken: zeroAddress,
        liquidityBufferRate: 0n, // 100% deployed, no idle reserve
        liquidityManager: "0x13BBea168E87710D28C3EF4bb97fE85aF3dBe050", // Fund Wallet multisig (Safe 2/3)
        aaveLendingPool: zeroAddress, // no Aave strategy
        //
        initialAssetsPerShare: parseUnits("1", 6), // 1 USDC per share (1:1 at launch)
        highWaterMark: 0n, // defaults to 1:1 ratio
        deploymentDelay: 1, // days
        yieldAPR: toRay(12), // 12% APR in RAY
        managementFeeRate: 0n,
        performanceFeeRate: toRay(10), // 10% in RAY
        withdrawalFeeRate: 0n,
        withdrawalGasFee: parseUnits("0.001", 18), // 0.001 ETH async withdrawal gas fee
      },
    },
  },
};
