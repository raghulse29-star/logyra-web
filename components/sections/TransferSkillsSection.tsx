'use client';

import { motion } from 'framer-motion';

// --- Icons ---
const TelegramIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#2AABEE" />
    <path d="M5.4 11.7l11.4-4.5c.6-.3 1.1.1.9.7l-2.1 9.8c-.2.8-.7 1-1.4.6l-3.8-2.8-1.8 1.8c-.2.2-.4.4-.8.4l.3-3.9 7.1-6.4c.3-.3-.1-.5-.5-.2L5.9 12.7c-.6.4-1.2.3-.5-.4z" fill="white" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

// --- Animation Variants ---
const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TransferSkillsSection() {
  return (
    <section id="transfer-skills" className="relative py-24 lg:py-32 bg-[#111315]">
      <div className="container mx-auto px-4 max-w-[1100px]">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            We Don&apos;t Sell Courses. We Transfer Skills.
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
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

          {/* Card 1: Telegram (Active State) */}
          <motion.div variants={cardVar}>
            <div className="flex flex-col h-full rounded-[24px] p-8 md:p-10 bg-[#16211A] border border-[#1e3025]">

              <div className="mb-8 drop-shadow-lg inline-block">
                <TelegramIcon />
              </div>

              <div className="border-b border-[#2A3B30] pb-5 mb-6">
                <h3 className="text-[1.75rem] font-bold text-white mb-3">
                  Logyra Intelligence — <span className="text-[#A8E02C]">Telegram</span>
                </h3>
                <div className="flex items-center gap-2 text-[#A8E02C] text-xs font-bold tracking-[0.15em] uppercase">
                  <span>FREE</span>
                  <span className="text-[#A8E02C]/60 text-[10px]">&bull;</span>
                  <span>OPEN</span>
                  <span className="text-[#A8E02C]/60 text-[10px]">&bull;</span>
                  <span>ALWAYS ON</span>
                </div>
              </div>

              <p className="text-[#9CA3AF] text-lg leading-[1.6] mb-12 flex-1">
                Daily market bias. Multi-asset coverage. Research notes. Structured analysis. Zero noise.
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-3 text-[#A8E02C] font-bold text-sm tracking-wide uppercase mt-auto"
              >
                <ArrowRightIcon />
                JOIN FREE ON TELEGRAM
              </a>
            </div>
          </motion.div>

          {/* Card 2: Discord (Disabled/Coming Soon State) */}
          <motion.div variants={cardVar}>
            <div className="relative flex flex-col h-full rounded-[24px] p-8 md:p-10 bg-[#1A1C20] border border-[#2B2F36]">

              <div className="absolute top-8 right-8 text-[#A8E02C] text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase">
                COMING SOON / INVITE ONLY
              </div>

              <div className="h-12 mb-8"></div>

              <div className="border-b border-[#2B2F36] pb-5 mb-6 mt-1.5">
                <h3 className="text-[1.75rem] font-bold text-[#6B7280] mb-3">
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

              <p className="text-[#6B7280] text-lg leading-[1.6] mb-12 flex-1">
                Trade discussions. Live session access. Institutional thinking culture. For serious participants.
              </p>

              <div className="inline-flex items-center gap-3 text-[#9CA3AF] font-bold text-sm tracking-wide uppercase mt-auto">
                <LockIcon />
                COMING SOON / INVITE ONLY
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
