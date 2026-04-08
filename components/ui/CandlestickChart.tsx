'use client';

import { motion } from 'framer-motion';

const candles = [
  { x: 10, open: 68, close: 52, high: 72, low: 48, up: false },
  { x: 28, open: 52, close: 62, high: 64, low: 48, up: true },
  { x: 46, open: 62, close: 58, high: 66, low: 55, up: false },
  { x: 64, open: 58, close: 72, high: 75, low: 55, up: true },
  { x: 82, open: 72, close: 65, high: 76, low: 63, up: false },
  { x: 100, open: 65, close: 78, high: 80, low: 63, up: true },
  { x: 118, open: 78, close: 74, high: 82, low: 72, up: false },
  { x: 136, open: 74, close: 85, high: 88, low: 72, up: true },
  { x: 154, open: 85, close: 80, high: 89, low: 78, up: false },
  { x: 172, open: 80, close: 90, high: 93, low: 78, up: true },
  { x: 190, open: 90, close: 88, high: 94, low: 86, up: false },
  { x: 208, open: 88, close: 95, high: 97, low: 86, up: true },
];

// Convert y value (0-100) to SVG coordinate (90 to 10 i.e. inverted)
const toSVG = (v: number) => 90 - (v / 100) * 80;

export default function CandlestickChart() {
  return (
    <svg
      width="100%"
      viewBox="0 0 230 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Candlestick price chart for XAUUSD"
    >
      {/* Grid lines */}
      {[0, 25, 50, 75, 100].map((v) => (
        <line
          key={v}
          x1="0"
          y1={toSVG(v)}
          x2="230"
          y2={toSVG(v)}
          stroke="rgba(74,222,128,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* Area fill under close prices */}
      <motion.path
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        d={`M${candles[0].x} ${toSVG(candles[0].close)} ${candles.map((c) => `L${c.x} ${toSVG(c.close)}`).join(' ')} L${candles[candles.length - 1].x} 90 L${candles[0].x} 90 Z`}
        fill="url(#areaGrad)"
      />

      {/* Candles */}
      {candles.map((c, i) => {
        const color = c.up ? '#4ade80' : '#f87171';
        const bodyTop = toSVG(Math.max(c.open, c.close));
        const bodyBottom = toSVG(Math.min(c.open, c.close));
        const bodyH = Math.max(bodyBottom - bodyTop, 2);
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${c.x}px 50px` }}
          >
            {/* Wick */}
            <line x1={c.x} y1={toSVG(c.high)} x2={c.x} y2={toSVG(c.low)} stroke={color} strokeWidth="1" />
            {/* Body */}
            <rect
              x={c.x - 5}
              y={bodyTop}
              width={10}
              height={bodyH}
              rx="1"
              fill={color}
              fillOpacity="0.85"
            />
          </motion.g>
        );
      })}

      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
