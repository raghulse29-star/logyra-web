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
  {
    value: 0,
    prefix: '₹',
    suffix: '',
    label: 'Promised. Ever.',
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
    <section id="numbers" className="relative py-24 lg:py-32 bg-[#1B1D21] flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-[1200px]">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Left Column: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 flex flex-col items-start"
          >
            {/* Milestone Badge */}
            <div className="inline-block border border-[#2A3B4D] bg-[#161B22]/50 text-[#A8E02C] text-xs font-bold tracking-[0.15em] px-3.5 py-1.5 mb-8 uppercase rounded-sm">
              MILESTONE
            </div>
            
            {/* Main Headline */}
            <h2 className="text-[2.5rem] md:text-[3.25rem] lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-6 tracking-tight">
              Numbers That<br />Weren't Announced.<br />They Were Built.
            </h2>
            
            {/* Sub-headline */}
            <p className="text-[#D1D5DB] text-lg md:text-xl leading-[1.6] max-w-[90%]">
              Effective progress tracking and milestone setting are<br className="hidden md:block" /> critical components of...
            </p>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            variants={containerVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 w-full max-w-[600px]"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVar}
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(0,0,0,0.45), 0 0 30px rgba(168,224,44,0.15)', borderColor: '#4D6B56' }}
                whileTap={{ y: -4, scale: 0.97, boxShadow: '0 12px 30px rgba(0,0,0,0.4), 0 0 20px rgba(168,224,44,0.1)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#2D4335] rounded-[24px] p-6 sm:p-8 flex flex-col items-center justify-center text-center aspect-square sm:aspect-auto sm:h-[220px] shadow-lg border border-transparent cursor-default"
              >
                {/* Number Value */}
                <h3 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#A8E02C] mb-3 sm:mb-4 leading-none tracking-tight">
                  {stat.prefix}
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </h3>
                
                {/* Text Label */}
                <p className="text-[#E5E7EB] text-sm sm:text-[15px] leading-[1.4] whitespace-pre-line px-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}