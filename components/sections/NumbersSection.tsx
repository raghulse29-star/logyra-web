'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString('en-IN'));
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: 'easeOut' });
      const unsubscribe = rounded.on('change', (v) => setDisplay(v));
      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [inView, value, count, rounded]);

  return <span ref={ref}>{display}</span>;
}

const stats = [
  {
    value: 12000,
    prefix: '',
    suffix: '+',
    label: 'Participants Trained',
  },
  {
    value: 5,
    prefix: '',
    suffix: '+',
    label: 'Years in Indian & Global\nMarkets',
  },
  {
    value: 3,
    prefix: '',
    suffix: '',
    label: 'Asset Classes Covered',
  },
];

const containerVar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVar = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function NumbersSection() {
  return (
    <section id="numbers" className="relative py-8 md:py-10 lg:py-12 bg-white flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-[1200px]">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">

          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 flex flex-col items-start"
          >
            {/* Milestone Badge */}
            <div className="inline-block border border-[var(--color-border)] bg-white text-[var(--color-primary)] text-[11px] font-bold tracking-[0.15em] px-3 py-1 mb-5 uppercase rounded-sm">
              MILESTONE
            </div>

            {/* Main Headline */}
            <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold text-[var(--color-fg)] leading-[1.15] mb-4 tracking-tight">
              Numbers That<br />Weren&apos;t Announced.<br />They Were Built.
            </h2>

            {/* Sub-headline */}
            <p className="text-[var(--color-fg-muted)] text-[15px] md:text-base leading-[1.6] max-w-[90%]">
             Across five years and three markets, Logyra&apos;s research frameworks have been tested, refined, and delivered to over twelve thousand participants.
            </p>
          </motion.div>

          {/* Right Column: Stats Grid on 3D elevated card */}
          <div className="lg:w-1/2 w-full max-w-[600px] relative">
            {/* Layered 3D back cards — give depth */}
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[32px] bg-[var(--color-beige)]/60 -z-20" />
            <div aria-hidden className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-[32px] bg-[var(--color-beige-lighter)] -z-10 shadow-[0_8px_30px_rgba(10,10,10,0.06)]" />

            {/* Front elevated card containing the stats grid */}
            <motion.div
              variants={containerVar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 p-4 md:p-5 rounded-[28px] bg-white border border-[var(--color-border)] shadow-[0_20px_50px_rgba(10,10,10,0.10),0_4px_12px_rgba(10,10,10,0.04)]"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={cardVar}
                  whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(10,10,10,0.10), 0 0 24px rgba(63,139,95,0.18)', borderColor: 'rgba(63,139,95,0.30)' }}
                  whileTap={{ y: -3, scale: 0.97, boxShadow: '0 10px 24px rgba(10,10,10,0.08), 0 0 16px rgba(63,139,95,0.12)' }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[var(--color-beige-lighter)] rounded-[18px] p-4 sm:p-5 flex flex-col items-center justify-center text-center aspect-square sm:aspect-auto sm:h-[160px] border border-[var(--color-border)] cursor-default"
                >
                  {/* Number Value */}
                  <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[var(--color-primary)] mb-2 leading-none tracking-tight">
                    {stat.prefix}
                    <AnimatedNumber value={stat.value} />
                    {stat.suffix}
                  </h3>

                  {/* Text Label */}
                  <p className="text-[var(--color-fg-muted)] text-[12px] sm:text-[13px] leading-[1.4] whitespace-pre-line px-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}