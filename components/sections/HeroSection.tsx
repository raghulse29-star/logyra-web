'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-16 sm:pt-20"
    >
      {/* Soft warm glow */}
      <div className="absolute top-[15%] left-0 w-[420px] h-[420px] bg-[var(--color-accent)] opacity-[0.10] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[8%] w-[320px] h-[320px] bg-[var(--color-primary)] opacity-[0.07] rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center py-8 sm:py-10 lg:py-14">

          {/* Left content */}
          <div className="relative z-20">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6"
            >
              <span className="inline-block bg-[var(--color-primary)] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
                Read the market. Not the noise.
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 sm:mb-6 font-bold tracking-tight"
            >
              <span className="block text-[1.7rem] sm:text-[2.2rem] md:text-[2.7rem] lg:text-[3.6rem] leading-[1.05] text-[var(--color-fg)]">
                Logyra
              </span>
              <span className="block text-[1.7rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.6rem] leading-[1.1] text-[var(--color-primary)] mt-2 sm:mt-3 whitespace-nowrap">
                Logical Reasoning
              </span>
              <span className="block text-[1.7rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.6rem] leading-[1.1] text-[var(--color-primary)] mt-1 whitespace-nowrap">
                & Analysis
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[var(--color-fg-muted)] text-[15px] sm:text-base lg:text-lg max-w-[460px] mb-8 sm:mb-10 leading-relaxed"
            >
              We work on delivering institutional frameworks, risk discipline, and real market understanding — so you operate with clarity, not emotion.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/research-desk/open-channel"
                className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-hover)] text-white text-[12px] sm:text-[13px] font-bold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_6px_24px_rgba(63,139,95,0.30)] transition-colors uppercase cursor-pointer"
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
            className="hidden lg:flex items-center justify-center h-[460px] xl:h-[520px] relative"
          >
            <Image
              src="/icons/Digital presentation-amico.svg"
              alt="Logyra market intelligence chart visualization"
              fill
              priority
              sizes="(min-width: 1280px) 600px, (min-width: 1024px) 50vw, 0px"
              className="object-contain"
            />
          </motion.div>

          {/* Mobile hero image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:hidden w-full flex items-center justify-center"
          >
            <Image
              src="/icons/Digital presentation-amico.svg"
              alt="Logyra market intelligence chart visualization"
              width={320}
              height={320}
              priority
              sizes="(max-width: 1024px) 320px, 0px"
              className="w-full max-w-[320px] h-auto object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
