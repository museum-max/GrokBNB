import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { mainnet, sepolia, base, baseSepolia, bsc, bscTestnet } from 'wagmi/chains'

export const config = getDefaultConfig({
  appName: 'GrokBNB',
  projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [mainnet, sepolia, base, baseSepolia, bsc, bscTestnet],
  ssr: true,
})

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
