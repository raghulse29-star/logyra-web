'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  // Reduced parallax range — less movement = less lag, especially on mobile
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#18261b] pt-16 sm:pt-20"
      style={{ position: 'relative' }}
    >
      {/* Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Radial soft glow — contained so it can't overflow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] bg-[#6bc28b] opacity-[0.06] rounded-full blur-[100px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">

          {/* Left content */}
          <div className="relative z-20">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6"
            >
              <span className="inline-block bg-[#a3f585] text-[#18261b] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                Forge Intelligence
              </span>
            </motion.div>

            {/* Heading — properly scaled across breakpoints */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6 font-bold tracking-tight"
            >
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1] text-[#e6f2eb]">
                Think Like
              </span>
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1] text-[#bcedaa] mt-1 sm:mt-2">
                the Market
              </span>
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1] text-[#a3f585] mt-1 sm:mt-2">
                Moves
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#9ab8a3] text-[15px] sm:text-base lg:text-lg max-w-[460px] mb-8 sm:mb-10 leading-relaxed font-normal"
            >
              Logyra equips you with institutional frameworks, risk discipline, and real market understanding — so you operate with clarity, not emotion.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="#platform"
                className="inline-block bg-[#5ebf82] hover:bg-[#4ea870] text-white text-[12px] sm:text-[13px] font-bold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_0_25px_rgba(94,191,130,0.3)] transition-all uppercase"
              >
                Access the Platform
              </Link>
            </motion.div>
          </div>

          {/* Right: Hero Image — fixed overflow, properly contained */}
          <div className="relative w-full hidden lg:flex items-center justify-center h-[480px] xl:h-[540px]">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full flex items-center justify-end"
            >
              <img
                src="/images/img1.webp"
                alt="Market intelligence chart visualization"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(107,194,139,0.15)]"
              />
            </motion.div>
          </div>

          {/* Mobile hero image — shown only on small screens */}
          <div className="lg:hidden w-full flex items-center justify-center mt-4">
            <img
              src="/images/img1.webp"
              alt="Market intelligence chart visualization"
              className="w-full max-w-sm h-auto object-contain drop-shadow-[0_0_20px_rgba(107,194,139,0.15)]"
            />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
