import { createConfig, http } from 'wagmi'
import { mainnet, sepolia, base, baseSepolia, bsc, bscTestnet } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID

export const config = createConfig({
  chains: [mainnet, sepolia, base, baseSepolia, bsc, bscTestnet],
  connectors: [
    injected(),
    ...(projectId
      ? [walletConnect({ projectId, showQrModal: true })]
      : []),
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
  ssr: true,
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
