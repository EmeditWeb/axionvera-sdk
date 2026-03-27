export { StellarClient } from "./client/stellarClient";

export { VaultContract } from "./contracts/vault";

export type { WalletConnector } from "./wallet/walletConnector";
export { LocalKeypairWalletConnector } from "./wallet/walletConnector";

export type { AxionveraNetwork, NetworkConfig } from "./utils/networkConfig";
export { getDefaultRpcUrl, getNetworkPassphrase, resolveNetworkConfig } from "./utils/networkConfig";

export type { BuildContractCallParams, ContractCallArg } from "./utils/transactionBuilder";
export { buildContractCallOperation, buildContractCallTransaction, toScVal } from "./utils/transactionBuilder";

export type { RetryConfig } from "./utils/httpInterceptor";
export { createHttpClientWithRetry, retry } from "./utils/httpInterceptor";

// Export MSW handlers for consumer testing
export { server, setupMswTest, overrideHandlers } from "./test/msw/server";
export {
    handlers,
    healthHandler,
    accountHandler,
    transactionHandler,
    submitTransactionHandler,
    rateLimitHandler,
    serverErrorHandler,
    notFoundHandler
} from "./test/msw/handlers";
