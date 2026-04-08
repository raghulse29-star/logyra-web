'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const sizes = {
  sm: 'px-5 py-2 text-body-sm',
  md: 'px-7 py-3 text-body-sm',
  lg: 'px-9 py-4 text-body-md',
};

const variants = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'bg-transparent text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const classes = `${variants[variant]} ${sizes[size]} inline-flex items-center justify-center gap-2 font-semibold ${className}`;

  const hoverAnim = variant === 'primary'
    ? { scale: 1.05, y: -3, boxShadow: '0 0 40px rgba(74,222,128,0.45), 0 10px 30px rgba(0,0,0,0.3)' }
    : variant === 'outline'
    ? { scale: 1.04, y: -2, boxShadow: '0 0 24px rgba(74,222,128,0.2)' }
    : { scale: 1.03, y: -1 };

  const tapAnim = variant === 'primary'
    ? { scale: 0.95, boxShadow: '0 0 24px rgba(74,222,128,0.3)' }
    : variant === 'outline'
    ? { scale: 0.96, boxShadow: '0 0 14px rgba(74,222,128,0.15)' }
    : { scale: 0.96 };

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={hoverAnim}
        whileTap={tapAnim}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : hoverAnim}
      whileTap={disabled ? {} : tapAnim}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`${classes} disabled:opacity-60 disabled:cursor-not-allowed`}
    >
      {children}
    </motion.button>
  );
}
