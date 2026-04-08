'use client';

import { motion } from 'framer-motion';

const platforms = [
  {
    badge: 'LOGYRA INTELLIGENCE — TELEGRAM',
    title: 'Logyra Intelligence — Telegram',
    desc: 'Daily market bias. Multi-asset research notes. HTF context and liquidity zone analysis. Zero noise.',
    cta: 'JOIN FREE ON TELEGRAM',
    image: '/images/telegram-3d.png', // Replace with your actual 3D Telegram image path
    bgClass: 'bg-[#0088CC]', // Telegram Blue
  },
  {
    badge: 'PAID - INVITE-ONLY',
    title: 'Logyra Discord — The Floor',
    desc: 'Structured trade discussions. Live session access. Institutional thinking culture. For serious participants only.',
    cta: 'VIEW MEMBERSHIP ACCESS',
    image: '/images/discord-3d.png', // Replace with your actual 3D Discord image path
    bgClass: 'bg-[#5865F2]', // Discord Purple/Blue
  },
  {
    badge: 'RESEARCH PRO - INSTITUTIONAL',
    title: 'Logyra Research Access — Whop',
    desc: 'Full research desk access. Advanced framework breakdowns. Multi-asset weekly intelligence reports.',
    cta: 'VIEW RESEARCH TIERS',
    image: '/images/whop-3d.png', // Replace with your actual 3D Whop image path
    bgClass: 'bg-[#FF5C00]', // Whop Orange
  },
];

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function TeachSection() {
  return (
    <section id="teach" className="relative py-24 lg:py-32 bg-[#0B0F17]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-[#D3FF33] text-black text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 uppercase tracking-[0.2em] rounded-sm">
            Forge Intelligence
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What We Teach, and How We Teach It
          </h2>
          
          <p className="text-[#8B95A5] max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Percentages reflect curriculum depth and framework coverage — not trading performance or return<br className="hidden md:block" /> expectations. Educational content only.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {platforms.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVar}
              whileHover={{ y: -10, boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
              whileTap={{ y: -5, scale: 0.98, boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <motion.div className="flex flex-col h-full rounded-[20px] overflow-hidden bg-[#1A241E] border border-transparent hover:border-[#2A3B30] active:border-[#2A3B30] transition-colors duration-300 group">

                {/* Top Image Section */}
                <div className={`w-full h-[220px] sm:h-[260px] relative flex items-center justify-center overflow-hidden ${p.bgClass}`}>
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] object-contain drop-shadow-2xl"
                    whileHover={{ scale: 1.12, rotate: 6 }}
                    whileTap={{ scale: 1.08, rotate: 4 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Glow overlay on image section hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 group-active:opacity-20 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)' }} />
                </div>

                {/* Bottom Content Section */}
                <div className="flex flex-col flex-1 p-6 sm:p-8">
                  {/* Card Badge */}
                  <div className="self-start inline-flex mb-5">
                    <span className="bg-[#243528] text-[#71D089] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {p.badge}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl sm:text-[1.35rem] font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#D3FF33] group-active:text-[#D3FF33]">
                    {p.title}
                  </h3>

                  <p className="text-[#8B95A5] text-sm leading-[1.6] mb-8 flex-1">
                    {p.desc}
                  </p>

                  {/* Full Width Button CTA */}
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2, boxShadow: '0 0 24px rgba(211,255,51,0.25)' }}
                    whileTap={{ scale: 0.96, boxShadow: '0 0 16px rgba(211,255,51,0.2)' }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#26372B] hover:bg-[#2C4132] text-[#D3FF33] font-bold text-sm py-4 px-6 rounded-lg transition-colors uppercase tracking-wide"
                  >
                    {p.cta}
                  </motion.button>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}