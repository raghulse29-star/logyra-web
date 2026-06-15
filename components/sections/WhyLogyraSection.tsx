'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const reasons = [
  {
    title: 'Institutional-Grade Research',
    desc: 'We study liquidity, order flow, and market structure the way desks do.',
  },
  {
    title: 'Multi-Asset Coverage',
    desc: 'Indian equities, F&O, forex, and digital assets, covered under a single research architecture.',
  },
  {
    title: 'Execution Discipline, Not Signal Dependency',
    desc: 'We build the thinking that underpins decisions.',
  },
  {
    title: 'Zero-Hype Intelligence Culture',
    desc: 'Daily research, delivered in a format that serious participants can actually use.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyLogyraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="why-logyra" className="relative py-8 md:py-10 lg:py-12 bg-[var(--color-grey-section)] font-sans">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-7"
        >
          {/* Badge */}
          <div className="inline-block border border-[var(--color-border-strong)] bg-[var(--color-primary-tint)] text-[var(--color-primary)] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
The market has a structure; we read it.
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-fg)] mt-5 mb-3 tracking-tight">
            Why Logyra Research?
          </h2>

          <p className="text-[var(--color-fg-subtle)] text-[15px] md:text-[16px] max-w-3xl mx-auto">
            Professional market intelligence and trading education backed by rigorous research
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {reasons.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              whileTap={{ y: -4, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <div className="bg-[var(--color-beige-lighter)] hover:bg-white active:bg-white transition-colors duration-300 rounded-[14px] p-4 h-full flex flex-col text-left group relative overflow-hidden border border-[var(--color-border)] shadow-[0_4px_18px_rgba(10,10,10,0.04)] hover:shadow-[0_0_40px_rgba(63,139,95,0.14),0_18px_50px_rgba(10,10,10,0.08)] active:shadow-[0_0_40px_rgba(63,139,95,0.14),0_18px_50px_rgba(10,10,10,0.08)]">

                {/* Shimmer sweep on hover/tap */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[14px]"
                  style={{ background: 'linear-gradient(105deg, transparent 40%, rgba(63,139,95,0.06) 50%, transparent 60%)' }} />

                {/* Title */}
                <h3 className="text-[14px] md:text-[15px] font-bold text-[var(--color-fg)] leading-snug mb-1.5 transition-colors duration-300 group-hover:text-[var(--color-primary)] group-active:text-[var(--color-primary)]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[var(--color-fg-muted)] leading-relaxed font-normal">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}