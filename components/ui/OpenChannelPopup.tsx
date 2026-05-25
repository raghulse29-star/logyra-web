'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitOpenChannel } from '@/app/actions/openChannel';

const TELEGRAM_URL = 'https://t.me/logyra_insights';
const STORAGE_KEY = 'logyra_open_channel_joined';

type Props = { isOpen: boolean; onClose: () => void };

export default function OpenChannelPopup({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Reset internal state when closed
  useEffect(() => {
    if (isOpen) return;
    const t = setTimeout(() => {
      setForm({ name: '', phone: '' });
      setError(null);
      setDone(false);
      setLoading(false);
    }, 300); // wait for exit animation
    return () => clearTimeout(t);
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    const result = await submitOpenChannel(form);
    setLoading(false);

    if (result.status === 'error') {
      setError(result.message);
      return;
    }

    setDone(true);
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore quota / private mode */
    }

    setTimeout(() => {
      window.open(TELEGRAM_URL, '_blank', 'noopener,noreferrer');
      onClose();
    }, 1200);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[300] bg-[#0A2415]/60 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: 'spring', damping: 26, stiffness: 280 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-gradient-to-br from-white via-[var(--color-beige-lighter)] to-[var(--color-beige-light)] border border-[var(--color-primary)]/30 rounded-2xl shadow-[0_24px_60px_rgba(10,10,10,0.20)] overflow-hidden"
          >
            {/* Decorative glows */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[var(--color-info)]/15 blur-[110px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[var(--color-primary)]/15 blur-[110px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent" />

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-lg text-[var(--color-fg-subtle)] hover:text-[var(--color-fg)] hover:bg-black/5 transition-colors text-2xl leading-none"
            >
              ×
            </button>

            <div className="relative p-8 sm:p-10">
              {done ? (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 14, stiffness: 200, delay: 0.05 }}
                    className="w-16 h-16 mx-auto mb-5 rounded-full bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/40 flex items-center justify-center"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3F8B5F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </motion.div>
                  <h3 className="text-xl font-bold text-[var(--color-fg)] mb-2">You&apos;re in.</h3>
                  <p className="text-[var(--color-fg-subtle)] text-sm">Opening Telegram…</p>
                </motion.div>
              ) : (
                <>
                  {/* Telegram icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', damping: 16, stiffness: 220, delay: 0.1 }}
                    className="w-14 h-14 mx-auto mb-5 rounded-full bg-[var(--color-info)] flex items-center justify-center shadow-[0_0_36px_rgba(34,158,217,0.55)]"
                  >
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                    </svg>
                  </motion.div>

                  <h2 className="text-2xl sm:text-[28px] font-bold text-[var(--color-fg)] text-center tracking-tight leading-tight mb-2">
                    Join the <span className="text-[var(--color-primary)]">Open Channel</span>
                  </h2>
                  <p className="text-center text-[var(--color-fg-subtle)] text-sm leading-relaxed mb-2">
                    Daily market reads · Pre-market briefs<br />
                     · Free forever
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-[0.15em] uppercase text-[var(--color-primary)] mb-7">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    12,000+ already joined
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (error) setError(null);
                      }}
                      disabled={loading}
                      maxLength={80}
                      className="w-full px-4 py-3.5 bg-white border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 rounded-lg text-[15px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-all disabled:opacity-60"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (error) setError(null);
                      }}
                      disabled={loading}
                      maxLength={20}
                      className="w-full px-4 py-3.5 bg-white border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 rounded-lg text-[15px] text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-all disabled:opacity-60"
                    />

                    <AnimatePresence>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          className="text-[var(--color-error)] text-xs text-center"
                        >
                          {error}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={loading ? undefined : { scale: 1.01 }}
                      whileTap={loading ? undefined : { scale: 0.98 }}
                      className="w-full mt-2 py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] disabled:bg-[var(--color-primary-muted)] disabled:cursor-not-allowed text-white text-sm font-bold tracking-[0.08em] uppercase rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(63,139,95,0.30)]"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                          </svg>
                          Joining…
                        </>
                      ) : (
                        <>
                          Join on Telegram
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-[10px] text-[var(--color-fg-subtle)] mt-2 leading-relaxed">
                      We&apos;ll only use your number to send you the channel link.<br />
                      No spam. Unsubscribe anytime.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
