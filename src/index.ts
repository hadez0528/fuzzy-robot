export * from "./Provider";
export * from "./hooks/modules";
export * from "./hooks/useDisconnect";
export * from "./hooks/useConnect";
export * from "./hooks/useSigner";
export * from "./hooks/useAddress";
export * from "./hooks/useReadonlySDK";
export * from "./hooks/connectors/useMetamask";

// re-exports
export { defaultChains, defaultL2Chains, useAccount, useNetwork } from "wagmi";
