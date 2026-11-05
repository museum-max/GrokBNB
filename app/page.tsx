'use client'

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from 'wagmi'
import { mainnet, sepolia, base, baseSepolia, bsc, bscTestnet } from 'wagmi/chains'
import { useEffect, useState } from 'react'

const chains = [mainnet, sepolia, base, baseSepolia, bsc, bscTestnet]

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { address, isConnected } = useAccount()
  const { connectors, connect, isPending } = useConnect()
  const { disconnect } = useDisconnect()
  const chainId = useChainId()
  const { switchChain } = useSwitchChain()

  // Prevent hydration mismatch (server vs client wallet state)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: 640, margin: '0 auto' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>GrokBNB</h1>
        <p style={{ color: '#666' }}>Loading...</p>
      </main>
    )
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: 640, margin: '0 auto' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>GrokBNB</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>Next.js + wagmi starter</p>

      {!isConnected ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <p>Connect your wallet to get started:</p>
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              disabled={isPending}
              style={{
                padding: '0.75rem 1.25rem',
                borderRadius: 8,
                border: '1px solid #ddd',
                background: '#111',
                color: '#fff',
                cursor: isPending ? 'not-allowed' : 'pointer',
                fontSize: 16,
              }}
            >
              {isPending ? 'Connecting...' : `Connect with ${connector.name}`}
            </button>
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', background: '#f5f5f5', borderRadius: 8 }}>
            <p style={{ margin: 0, fontSize: 14, color: '#666' }}>Connected</p>
            <p style={{ margin: '0.25rem 0 0', fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {address}
            </p>
          </div>

          <div>
            <p style={{ marginBottom: '0.5rem' }}>Network</p>
            <select
              value={chainId}
              onChange={(e) => switchChain({ chainId: Number(e.target.value) })}
              style={{ padding: '0.5rem', borderRadius: 6, fontSize: 15 }}
            >
              {chains.map((chain) => (
                <option key={chain.id} value={chain.id}>
                  {chain.name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => disconnect()}
            style={{
              padding: '0.75rem 1.25rem',
              borderRadius: 8,
              border: '1px solid #ddd',
              background: '#fff',
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </main>
  )
}
