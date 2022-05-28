export type PrivateKeyGenerateType = "seed" | "mnemonic" | "generate";
export const isPrivateKeyGenerateType = (
  arg: any
): arg is PrivateKeyGenerateType => {
  return arg === "seed" || arg === "mnemonic" || arg === "generate";
};
