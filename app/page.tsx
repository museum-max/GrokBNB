'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'

export default function Home() {
  const { isConnected, address } = useAccount()

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%)',
        color: '#fff',
      }}
    >
      <h1 style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>GrokBNB</h1>
      <p style={{ color: '#aaa', marginBottom: '2.5rem' }}>
        Next.js + wagmi + RainbowKit
      </p>

      <ConnectButton showBalance={{ smallScreen: false, largeScreen: true }} />

      {isConnected && (
        <div
          style={{
            marginTop: '2rem',
            padding: '1rem 1.5rem',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 12,
            fontSize: 14,
            color: '#ccc',
          }}
        >
          Connected as{' '}
          <span style={{ fontFamily: 'monospace', color: '#fff' }}>
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        </div>
      )}
    </main>
  )
}
