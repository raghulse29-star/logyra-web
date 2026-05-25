'use client';

import { motion } from 'framer-motion';
import { useOpenChannel } from '@/components/providers/OpenChannelProvider';

const TelegramIcon = () => (
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#2AABEE" />
    <path d="M5.4 11.7l11.4-4.5c.6-.3 1.1.1.9.7l-2.1 9.8c-.2.8-.7 1-1.4.6l-3.8-2.8-1.8 1.8c-.2.2-.4.4-.8.4l.3-3.9 7.1-6.4c.3-.3-.1-.5-.5-.2L5.9 12.7c-.6.4-1.2.3-.5-.4z" fill="white" />
  </svg>
);

export default function CTASection() {
  const { open: openChannel } = useOpenChannel();
  return (
    <section id="cta" className="relative py-14 md:py-20 lg:py-32 bg-white flex items-center justify-center px-4">
      <div className="container mx-auto max-w-[900px] relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[20px] p-12 md:p-20 text-center overflow-hidden"
          style={{
            backgroundColor: 'var(--color-beige-lighter)',
            border: '1px solid rgba(63, 139, 95, 0.30)',
            boxShadow: '0 10px 40px -10px rgba(63, 139, 95, 0.15), 0 4px 24px rgba(10, 10, 10, 0.04)'
          }}
        >
          {/* Subtle top-right glow effect inside the card */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-50 blur-[80px]"
            style={{
              background: 'radial-gradient(circle, rgba(107,194,139,0.30) 0%, transparent 70%)',
              transform: 'translate(20%, -30%)'
            }}
          />

          <div className="relative z-10 flex flex-col items-center">

            {/* Telegram Icon */}
            <div className="mb-8 drop-shadow-md">
              <TelegramIcon />
            </div>

            {/* Headlines */}
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-fg)] tracking-tight leading-[1.2] mb-6">
              You&apos;ve been watching the market.<br />
              <span className="text-[var(--color-primary)]">Now watch how we read it.</span>
            </h2>

            {/* Subtext */}
            <p className="text-[var(--color-fg-muted)] text-[15px] md:text-[17px] leading-[1.6] max-w-2xl mx-auto mb-10">
              Join the Logyra Intelligence Channel. Free. No commitments. Just structured market thinking,<br className="hidden md:block" /> delivered daily.
            </p>

            {/* CTA Button */}
            <motion.button
              type="button"
              onClick={openChannel}
              whileHover={{ scale: 1.06, y: -4, boxShadow: '0 0 40px rgba(63,139,95,0.40), 0 14px 32px rgba(10,10,10,0.10)' }}
              whileTap={{ scale: 0.94, boxShadow: '0 0 24px rgba(63,139,95,0.30), 0 6px 18px rgba(10,10,10,0.08)' }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-primary-hover)] text-white font-bold text-sm tracking-[0.1em] uppercase px-8 py-3.5 rounded-[4px] shadow-lg cursor-pointer"
            >
              JOIN FREE ON TELEGRAM
            </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}