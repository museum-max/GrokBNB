# GrokBNB

Next.js + wagmi starter with BNB Chain support.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- Next.js App Router
- wagmi v2 + viem
- TanStack Query
- Wallet connection (Injected + optional WalletConnect)
- Chains: Ethereum, Sepolia, Base, Base Sepolia, BNB Chain, BNB Testnet

## Optional: WalletConnect

1. Get a free Project ID at [cloud.reown.com](https://cloud.reown.com)
2. Create `.env.local`:

```
NEXT_PUBLIC_WC_PROJECT_ID=your_project_id
```

## Deploy on Vercel

Just push to `main`. Vercel auto-deploys.
