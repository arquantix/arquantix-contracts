import { Address } from "viem";

export const dependencies: {
  [chainId: string]: {
    LDY?: Address;
    USDC?: Address;
    EURC?: Address;
    AAVE_LENDING_POOL: Address;
  };
} = {
  // Ethereum Mainnet
  "1": {
    LDY: "0x482dF7483a52496F4C65AB499966dfcdf4DDFDbc",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    EURC: "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
    AAVE_LENDING_POOL: "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2",
  },
  // Base
  "8453": {
    LDY: "0x055d20a70eFd45aB839Ae1A39603D0cFDBDd8a13",
    USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    EURC: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    AAVE_LENDING_POOL: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
  },
};
