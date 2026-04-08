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
          ? '0 0 60px rgba(74,222,128,0.3), 0 20px 60px rgba(0,0,0,0.4)'
          : '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(74,222,128,0.1)',
      } : undefined}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`glass-card rounded-2xl ${glow ? 'shadow-[var(--shadow-glow)]' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}
