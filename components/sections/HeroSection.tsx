'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useOpenChannel } from '@/components/providers/OpenChannelProvider';

export default function HeroSection() {
  const { open: openChannel } = useOpenChannel();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[var(--color-bg-card)] pt-16 sm:pt-20"
    >
      {/* Glow — smaller, GPU-composited (opacity only, no blur change on scroll) */}
      <div className="absolute top-[15%] left-0 w-[300px] h-[300px] bg-[var(--color-primary)] opacity-[0.07] rounded-full blur-[80px] pointer-events-none" />

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
              <span className="inline-block bg-[var(--color-primary-tint)] text-[var(--color-bg-card)] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-sm">
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
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[var(--color-fg)]">
                Think Like
              </span>
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[var(--color-primary-tint)] mt-1 sm:mt-2">
                the Market
              </span>
              <span className="block text-[2.4rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.5rem] leading-[1.05] text-[var(--color-primary-tint)] mt-1 sm:mt-2">
                Moves
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="text-[var(--color-fg-muted)] text-[15px] sm:text-base lg:text-lg max-w-[460px] mb-8 sm:mb-10 leading-relaxed"
            >
              Logyra equips you with institutional frameworks, risk discipline, and real market understanding — so you operate with clarity, not emotion.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={openChannel}
                className="inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-hover)] text-white text-[12px] sm:text-[13px] font-bold tracking-wider px-6 sm:px-8 py-3.5 sm:py-4 rounded shadow-[0_0_20px_rgba(94,191,130,0.25)] transition-colors uppercase cursor-pointer"
              >
                Access the Platform
              </button>
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
              src="/images/img1.webp"
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
              src="/images/img1.webp"
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
