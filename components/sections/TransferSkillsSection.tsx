'use client';

import { motion } from 'framer-motion';

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
  return (
    <section id="transfer-skills" className="relative py-14 md:py-20 lg:py-32 bg-[#111315] overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A8E02C] opacity-[0.025] rounded-full blur-[120px] pointer-events-none" />

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
            className="inline-block border border-[#2e3b30] bg-[#17221a] text-[#A8E02C] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm mb-6"
          >
            Platforms
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            We Don&apos;t Sell Courses. We Transfer Skills.
          </h2>
          <p className="text-gray-400 text-[15px] md:text-[17px] max-w-3xl mx-auto leading-relaxed">
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
              whileHover={{ y: -10, boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 40px rgba(42,171,238,0.15)' }}
              whileTap={{ y: -5, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full rounded-[24px] p-8 md:p-10 bg-[#16211A] border border-[#1e3025] hover:border-[#2d4a35] transition-colors duration-300 group relative overflow-hidden"
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

              <div className="border-b border-[#2A3B30] pb-5 mb-6">
                <h3 className="text-[1.6rem] font-bold text-white mb-3 group-hover:text-[#A8E02C] transition-colors duration-300">
                  Logyra Intelligence — <span className="text-[#A8E02C]">Telegram</span>
                </h3>
                <div className="flex items-center gap-2 text-[#A8E02C] text-xs font-bold tracking-[0.15em] uppercase">
                  <motion.span
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-1.5 h-1.5 rounded-full bg-[#A8E02C] inline-block"
                  />
                  <span>FREE</span>
                  <span className="text-[#A8E02C]/60 text-[10px]">&bull;</span>
                  <span>OPEN</span>
                  <span className="text-[#A8E02C]/60 text-[10px]">&bull;</span>
                  <span>ALWAYS ON</span>
                </div>
              </div>

              <p className="text-[#9CA3AF] text-[15px] md:text-[17px] leading-[1.65] mb-12 flex-1">
                Daily market bias. Multi-asset coverage. Research notes. Structured analysis. Zero noise.
              </p>

              <motion.a
                href="#"
                whileHover={{ x: 6 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-3 text-[#A8E02C] font-bold text-sm tracking-wide uppercase mt-auto group/link"
              >
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <ArrowRightIcon />
                </motion.span>
                JOIN FREE ON TELEGRAM
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Card 2: Discord — Coming Soon */}
          <motion.div variants={cardVar}>
            <motion.div
              whileHover={{ y: -10, boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 40px rgba(88,101,242,0.1)' }}
              whileTap={{ y: -5, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col h-full rounded-[24px] p-8 md:p-10 bg-[#1A1C20] border border-[#2B2F36] hover:border-[#3a3f4a] transition-colors duration-300 group overflow-hidden"
            >
              {/* Coming soon badge */}
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="absolute top-8 right-8 text-[#A8E02C] text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase"
              >
                COMING SOON / INVITE ONLY
              </motion.div>

              <div className="h-11 mb-8" />

              <div className="border-b border-[#2B2F36] pb-5 mb-6 mt-1.5">
                <h3 className="text-[1.6rem] font-bold text-[#6B7280] mb-3">
                  Logyra Discord — The Floor
                </h3>
                <div className="flex items-center gap-2 text-[#6B7280] text-xs font-bold tracking-[0.15em] uppercase">
                  <span>COMMUNITY</span>
                  <span className="text-[#6B7280]/40 text-[10px]">&bull;</span>
                  <span>STRUCTURED</span>
                  <span className="text-[#6B7280]/40 text-[10px]">&bull;</span>
                  <span>MODERATED</span>
                </div>
              </div>

              <p className="text-[#6B7280] text-[15px] md:text-[17px] leading-[1.65] mb-12 flex-1">
                Trade discussions. Live session access. Institutional thinking culture. For serious participants.
              </p>

              <div className="inline-flex items-center gap-3 text-[#9CA3AF] font-bold text-sm tracking-wide uppercase mt-auto">
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
