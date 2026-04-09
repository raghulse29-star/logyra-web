'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#18261b] pt-16 sm:pt-20"
    >
      {/* Glow — smaller, GPU-composited (opacity only, no blur change on scroll) */}
      <div className="absolute top-[15%] left-0 w-[300px] h-[300px] bg-[#6bc28b] opacity-[0.07] rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center py-12 sm:py-16 lg:py-20">

          {/* Left content */}
          <div className="relative z-20">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6"
            >
              <span className="inline-block bg-[#a3f585] text-[#18261b] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                Forge Intelligence
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6 font-bold tracking-tight"
            >
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[#e6f2eb]">
                Think Like
              </span>
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[#bcedaa] mt-1 sm:mt-2">
                the Market
              </span>
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[#a3f585] mt-1 sm:mt-2">
                Moves
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#9ab8a3] text-[15px] sm:text-base lg:text-lg max-w-[460px] mb-8 sm:mb-10 leading-relaxed"
            >
              Logyra equips you with institutional frameworks, risk discipline, and real market understanding — so you operate with clarity, not emotion.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="#platform"
                className="inline-block bg-[#5ebf82] hover:bg-[#4ea870] active:bg-[#4ea870] text-white text-[12px] sm:text-[13px] font-bold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_0_20px_rgba(94,191,130,0.25)] transition-colors uppercase"
              >
                Access the Platform
              </Link>
            </motion.div>
          </div>

          {/* Desktop hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-center h-[460px] xl:h-[520px]"
          >
            <img
              src="/images/img1.webp"
              alt="Market intelligence chart visualization"
              className="w-full h-full object-contain"
              loading="eager"
            />
          </motion.div>

          {/* Mobile hero image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden w-full flex items-center justify-center"
          >
            <img
              src="/images/img1.webp"
              alt="Market intelligence chart visualization"
              className="w-full max-w-[320px] h-auto object-contain"
              loading="eager"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
