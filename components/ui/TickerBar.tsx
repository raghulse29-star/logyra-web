'use client';

import { useEffect, useRef } from 'react';

const tickers = [
  { symbol: 'XAUUSD', price: '2,387.40', change: '+1.24%', up: true },
  { symbol: 'EURUSD', price: '1.0842', change: '-0.18%', up: false },
  { symbol: 'NIFTY50', price: '22,540', change: '+0.67%', up: true },
  { symbol: 'BTCUSD', price: '68,430', change: '+2.11%', up: true },
  { symbol: 'USDINR', price: '83.42', change: '-0.05%', up: false },
  { symbol: 'BANKNIFTY', price: '48,720', change: '+0.43%', up: true },
  { symbol: 'ETHUSD', price: '3,560', change: '+1.85%', up: true },
  { symbol: 'GBPUSD', price: '1.2734', change: '-0.09%', up: false },
  { symbol: 'CRUDE OIL', price: '82.40', change: '+0.92%', up: true },
  { symbol: 'SENSEX', price: '74,210', change: '+0.55%', up: true },
];

export default function TickerBar() {
  return (
    <div className="fixed top-16 md:top-18 left-0 right-0 z-40 bg-[var(--color-bg-section)] border-b border-[var(--color-border)] h-9 overflow-hidden">
      <div className="ticker-wrap h-full flex items-center">
        <div className="ticker-content">
          {[...tickers, ...tickers].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-4">
              <span className="text-body-xs font-mono font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">
                {t.symbol}
              </span>
              <span className="text-body-xs font-mono text-[var(--color-text-heading)]">{t.price}</span>
              <span
                className="text-body-xs font-mono font-semibold"
                style={{ color: t.up ? '#4ade80' : '#f87171' }}
              >
                {t.up ? '▲' : '▼'} {t.change}
              </span>
              <span className="text-[var(--color-border)] mx-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
