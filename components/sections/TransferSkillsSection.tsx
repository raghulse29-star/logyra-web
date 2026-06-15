'use client';

import { motion } from 'framer-motion';
import { useOpenChannel } from '@/components/providers/OpenChannelProvider';

const TelegramIcon = () => (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#2AABEE" />
    <path d="M5.4 11.7l11.4-4.5c.6-.3 1.1.1.9.7l-2.1 9.8c-.2.8-.7 1-1.4.6l-3.8-2.8-1.8 1.8c-.2.2-.4.4-.8.4l.3-3.9 7.1-6.4c.3-.3-.1-.5-.5-.2L5.9 12.7c-.6.4-1.2.3-.5-.4z" fill="white" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function TransferSkillsSection() {
  const { open: openChannel } = useOpenChannel();
  return (
    <section id="transfer-skills" className="relative py-10 md:py-14 lg:py-20 bg-white overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-[1100px] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block border border-[var(--color-border-strong)] bg-[var(--color-primary-tint)] text-[var(--color-primary)] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm mb-6"
          >
            MILESTONE
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-fg)] mb-4 tracking-tight">
            We Transfer Skills.
          </h2>
          <p className="text-[var(--color-fg-subtle)] text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed">
            Our frameworks are built against institutional standards of process and repeatability. You learn to think — not copy.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          {/* Card 1: Telegram */}
          <motion.div variants={cardVar}>
            <motion.div
              whileHover={{ y: -10, boxShadow: '0 28px 60px rgba(10,10,10,0.10), 0 0 32px rgba(42,171,238,0.18)' }}
              whileTap={{ y: -5, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full rounded-[24px] p-8 md:p-10 bg-[var(--color-beige-lighter)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors duration-300 group relative overflow-hidden shadow-[0_4px_24px_rgba(10,10,10,0.05)]"
            >
              {/* Shimmer on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0, background: 'linear-gradient(120deg, transparent 30%, rgba(42,171,238,0.06) 50%, transparent 70%)' }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              {/* Icon */}
              <motion.div
                className="mb-8 drop-shadow-lg inline-block"
                whileHover={{ scale: 1.1, rotate: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <TelegramIcon />
              </motion.div>

              <div className="border-b border-[var(--color-border)] pb-5 mb-6">
                <h3 className="text-[1.6rem] font-bold text-[var(--color-fg)] mb-3 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                  Logyra Intelligence — <span className="text-[var(--color-primary)]">Telegram</span>
                </h3>
                <div className="flex items-center gap-2 text-[var(--color-primary)] text-xs font-bold tracking-[0.15em] uppercase">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] inline-block"
                  />
                  <span>FREE</span>
                  <span className="text-[var(--color-primary)]/60 text-[10px]">&bull;</span>
                  <span>OPEN</span>
                  <span className="text-[var(--color-primary)]/60 text-[10px]">&bull;</span>
                  <span>ALWAYS ON</span>
                </div>
              </div>

              <p className="text-[var(--color-fg-muted)] text-[15px] md:text-[17px] leading-[1.65] mb-12 flex-1">
                Daily market bias. Multi-asset coverage. Research notes. Structured analysis. Zero noise.
              </p>

              <motion.button
                type="button"
                onClick={openChannel}
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 text-[var(--color-primary)] font-bold text-sm tracking-wide uppercase mt-auto group/link cursor-pointer self-start"
              >
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRightIcon />
                </motion.span>
                JOIN FREE ON TELEGRAM
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Card 2: Discord — Coming Soon */}
          <motion.div variants={cardVar}>
            <motion.div
              whileHover={{ y: -10, boxShadow: '0 28px 60px rgba(10,10,10,0.08), 0 0 32px rgba(88,101,242,0.12)' }}
              whileTap={{ y: -5, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col h-full rounded-[24px] p-8 md:p-10 bg-[var(--color-grey-section)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] transition-colors duration-300 group overflow-hidden shadow-[0_4px_24px_rgba(10,10,10,0.04)]"
            >
              {/* Coming soon badge */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute top-8 right-8 text-[var(--color-primary)] text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase"
              >
                COMING SOON / INVITE ONLY
              </motion.div>

              <div className="h-11 mb-8" />

              <div className="border-b border-[var(--color-border)] pb-5 mb-6 mt-1.5">
                <h3 className="text-[1.6rem] font-bold text-[var(--color-fg-subtle)] mb-3">
                  Logyra Discord — The Floor
                </h3>
                <div className="flex items-center gap-2 text-[var(--color-fg-subtle)] text-xs font-bold tracking-[0.15em] uppercase">
                  <span>COMMUNITY</span>
                  <span className="text-[var(--color-fg-subtle)]/40 text-[10px]">&bull;</span>
                  <span>STRUCTURED</span>
                  <span className="text-[var(--color-fg-subtle)]/40 text-[10px]">&bull;</span>
                  <span>MODERATED</span>
                </div>
              </div>

              <p className="text-[var(--color-fg-subtle)] text-[15px] md:text-[17px] leading-[1.65] mb-12 flex-1">
                Trade discussions. Live session access. Institutional thinking culture. For serious participants.
              </p>

              <div className="inline-flex items-center gap-3 text-[var(--color-fg-muted)] font-bold text-sm tracking-wide uppercase mt-auto">
                <LockIcon />
                COMING SOON / INVITE ONLY
              </div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
