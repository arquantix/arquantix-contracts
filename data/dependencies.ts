import { Address } from "viem";

export const dependencies: {
  [chainId: string]: {
    LDY?: Address;
    USDC?: Address;
    EURC?: Address;
    AAVE_LENDING_POOL: Address;
  };
} = {
  // Base
  "8453": {
    USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    EURC: "0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42",
    AAVE_LENDING_POOL: "0xA238Dd80C259a72e81d7e4664a9801593F98d1c5",
  },
};
