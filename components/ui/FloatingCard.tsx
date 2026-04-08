'use client';

import { motion } from 'framer-motion';

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down';
}

export default function FloatingCard({ children, className = '', delay = 0, direction = 'up' }: FloatingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 20 : -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <motion.div
        animate={{ y: direction === 'up' ? [0, -6, 0] : [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: delay + 0.5 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
