'use client';

import { motion } from 'framer-motion';

const platforms = [
  {
    badge: 'LOGYRA INTELLIGENCE — TELEGRAM',
    title: 'Logyra Intelligence — Telegram',
    desc: 'Daily market bias. Multi-asset research notes. HTF context and liquidity zone analysis. Zero noise.',
    cta: 'JOIN FREE ON TELEGRAM',
    image: '/images/img8.webp',
    accentColor: '#0088CC',
    glowColor: 'rgba(0, 136, 204, 0.4)',
  },
  {
    badge: 'PAID - INVITE-ONLY',
    title: 'Logyra Discord — The Floor',
    desc: 'Structured trade discussions. Live session access. Institutional thinking culture. For serious participants only.',
    cta: 'VIEW MEMBERSHIP ACCESS',
    image: '/images/img9.webp',
    accentColor: '#5865F2',
    glowColor: 'rgba(88, 101, 242, 0.4)',
  },
  {
    badge: 'RESEARCH PRO - INSTITUTIONAL',
    title: 'Logyra Research Access — Whop',
    desc: 'Full research desk access. Advanced framework breakdowns. Multi-asset weekly intelligence reports.',
    cta: 'VIEW RESEARCH TIERS',
    image: '/images/img10.webp',
    accentColor: '#FF5C00',
    glowColor: 'rgba(255, 92, 0, 0.4)',
  },
];

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardVar = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function TeachSection() {
  return (
    <section id="teach" className="relative py-24 lg:py-32 bg-[#0B0F17]">
      <div className="container mx-auto px-4 max-w-[1200px]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block bg-[#D3FF33] text-black text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 uppercase tracking-[0.2em] rounded-sm"
          >
            Forge Intelligence
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What We Teach, and How We Teach It
          </h2>

          <p className="text-[#8B95A5] max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
            Percentages reflect curriculum depth and framework coverage — not trading performance or return
            <br className="hidden md:block" /> expectations. Educational content only.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVar}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {platforms.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVar}
              whileHover={{
                y: -12,
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 40px ${p.glowColor}`,
              }}
              whileTap={{ y: -6, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="h-full group"
            >
              <div
                className="flex flex-col h-full rounded-[20px] overflow-hidden border border-white/5 group-hover:border-white/15 transition-colors duration-500"
                style={{ background: '#131820' }}
              >
                {/* Full-bleed image area */}
                <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {/* Gradient overlay — fades image into card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131820] via-[#131820]/20 to-transparent pointer-events-none" />
                  {/* Accent color tint on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.15 }}
                    transition={{ duration: 0.4 }}
                    style={{ background: p.accentColor }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 sm:p-8 -mt-2">
                  {/* Badge */}
                  <div className="self-start inline-flex mb-4">
                    <span
                      className="text-[10px] sm:text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                      style={{
                        background: `${p.accentColor}22`,
                        color: p.accentColor,
                        border: `1px solid ${p.accentColor}44`,
                      }}
                    >
                      {p.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-[1.3rem] font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[#D3FF33]">
                    {p.title}
                  </h3>

                  <p className="text-[#8B95A5] text-sm leading-[1.65] mb-8 flex-1">
                    {p.desc}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.03,
                      y: -2,
                      boxShadow: '0 0 28px rgba(211,255,51,0.3)',
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full bg-[#1E2B22] hover:bg-[#273D2C] text-[#D3FF33] font-bold text-[13px] py-4 px-6 rounded-xl transition-colors uppercase tracking-wide border border-[#D3FF33]/10 hover:border-[#D3FF33]/30"
                  >
                    {p.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
