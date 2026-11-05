# GrokBNB

Next.js + wagmi + RainbowKit starter with BNB Chain support.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## WalletConnect Project ID (required for full wallet list)

1. Go to [cloud.reown.com](https://cloud.reown.com) and create a free project
2. Copy the Project ID
3. Create `.env.local`:

```
NEXT_PUBLIC_WC_PROJECT_ID=your_project_id_here
```

On Vercel: add the same variable in **Project Settings → Environment Variables**.

## Features

- Next.js App Router
- RainbowKit (beautiful connect button)
- wagmi v2 + viem
- Chains: Ethereum, Sepolia, Base, Base Sepolia, BNB Chain, BNB Testnet

## Deploy on Vercel

Push to `main` — Vercel auto-deploys.
