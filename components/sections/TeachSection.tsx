'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useOpenChannel } from '@/components/providers/OpenChannelProvider';

const platforms = [
  {
    badge: 'FREE · OPEN · ALWAYS ON',
    title: 'Logyra Research — Telegram',
    desc: 'Daily market bias. Multi-asset research notes. HTF context and liquidity zone analysis. Zero noise.',
    cta: 'JOIN FREE ON TELEGRAM',
    ctaLink: '#',
    image: '/images/img8.webp',
    accentColor: '#0088CC',
    glowColor: 'rgba(0, 136, 204, 0.4)',
  },
  {
    badge: 'PAID · PRIVATE · DAILY RESEARCH',
    title: 'F&O Insights Inner Circle',
    desc: 'Full daily research package. Pre-market briefs, intraday educational setups, EOD wraps, and weekly structure reviews — delivered to your private Telegram every market day.',
    cta: 'JOIN Private ON TELEGRAM',
    ctaLink: '/inner-circle#plans',
    image: '/images/img9.webp',
    accentColor: '#5865F2',
    glowColor: 'rgba(88, 101, 242, 0.4)',
  },
  {
    badge: 'INVITE ONLY · LIVE ',
    title: 'The Floor',
    desc: 'Live  research environment. Real-time market commentary. Institutional  in practice by application only',
    cta: 'COMING SOON',
    ctaLink: '#',
    image: '/images/img10.webp',
    accentColor: '#FF5C00',
    glowColor: 'rgba(255, 92, 0, 0.4)',
    disabled: true,
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
  const { open: openChannel } = useOpenChannel();
  return (
    <section id="teach" className="relative py-14 md:py-20 lg:py-32 bg-[var(--color-bg-card)]">
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
            className="inline-block bg-[var(--color-accent)] text-black text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 uppercase tracking-[0.2em] rounded-sm"
          >
            LOGYRA INSIGHTS
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
             We Transfer Skills.
          </h2>

          <p className="text-[var(--color-fg-muted)] max-w-3xl mx-auto text-[15px] md:text-[17px] leading-relaxed">
           	Our frameworks are built against institutional standards of process and repeatability.
            <br className="hidden md:block" /> 
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
              whileHover={p.disabled ? undefined : {
                y: -12,
                boxShadow: `0 32px 80px rgba(0,0,0,0.6), 0 0 40px ${p.glowColor}`,
              }}
              whileTap={p.disabled ? undefined : { y: -6, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full group ${p.disabled ? 'opacity-60' : ''}`}
            >
              <div
                className="flex flex-col h-full rounded-[20px] overflow-hidden border border-white/5 group-hover:border-white/15 transition-colors duration-500 relative"
                style={{ background: '#131820' }}
              >
                {p.disabled && (
                  <span className="absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm border border-white/15 text-white/90 text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    Coming Soon
                  </span>
                )}
                {/* Full-bleed image area */}
                <div className="relative w-full h-[220px] sm:h-[260px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Gradient overlay — fades image into card body */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-[var(--color-bg-card)]/20 to-transparent pointer-events-none" />
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

                  <h3 className="text-xl sm:text-[1.3rem] font-bold text-white mb-3 transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                    {p.title}
                  </h3>

                  <p className="text-[var(--color-fg-muted)] text-sm leading-[1.65] mb-8 flex-1">
                    {p.desc}
                  </p>

                  {/* CTA Button */}
                  {p.disabled ? (
                    <span
                      aria-disabled="true"
                      className="block w-full bg-[var(--color-bg-button)] text-gray-500 font-bold text-[13px] py-4 px-6 rounded-xl uppercase tracking-wide border border-white/[0.06] text-center cursor-not-allowed select-none"
                    >
                      {p.cta}
                    </span>
                  ) : p.ctaLink === '#' ? (
                    <motion.button
                      type="button"
                      onClick={openChannel}
                      whileHover={{
                        scale: 1.03,
                        y: -2,
                        boxShadow: '0 0 28px rgba(211,255,51,0.3)',
                      }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                      className="block w-full bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-elevated)] text-[var(--color-accent)] font-bold text-[13px] py-4 px-6 rounded-xl transition-colors uppercase tracking-wide border border-[var(--color-accent)]/10 hover:border-[var(--color-accent)]/30 text-center cursor-pointer"
                    >
                      {p.cta}
                    </motion.button>
                  ) : (
                    <Link href={p.ctaLink}>
                      <motion.span
                        whileHover={{
                          scale: 1.03,
                          y: -2,
                          boxShadow: '0 0 28px rgba(211,255,51,0.3)',
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="block w-full bg-[var(--color-bg-elevated)] hover:bg-[var(--color-bg-elevated)] text-[var(--color-accent)] font-bold text-[13px] py-4 px-6 rounded-xl transition-colors uppercase tracking-wide border border-[var(--color-accent)]/10 hover:border-[var(--color-accent)]/30 text-center cursor-pointer"
                      >
                        {p.cta}
                      </motion.span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
