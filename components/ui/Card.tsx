'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({ children, className = '', hover = true, glow = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        boxShadow: glow
          ? '0 0 48px rgba(63,139,95,0.25), 0 18px 48px rgba(10,10,10,0.10)'
          : '0 18px 48px rgba(10,10,10,0.08), 0 0 0 1px rgba(63,139,95,0.20)',
      } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card rounded-2xl ${glow ? 'shadow-[var(--shadow-glow)]' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
