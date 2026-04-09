'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XTwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" fill="currentColor" />
  </svg>
);

const footerLinks = {
  QuickLinks: [
    { label: 'Research', href: '#' },
    { label: 'Learn', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Blog', href: '#' },
  ],
  Company: [
    { label: 'Pricing', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

const colVar = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const linkVar = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.2 + i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const socialVar = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, delay: 0.5 + i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[#2B352A] pt-20 pb-8 px-4 font-sans overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">

        {/* Top divider line — animated */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-[#4a6b4d] to-transparent mb-16 origin-left"
        />

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand */}
          <motion.div
            custom={0}
            variants={colVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-5">
              <motion.span
                whileHover={{ letterSpacing: '0.12em' }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-white tracking-wide inline-block"
              >
                LOGYRA
              </motion.span>
            </Link>
            <p className="text-[#A3B1A4] text-[15px] max-w-[200px] leading-relaxed mb-6">
              Market Intelligence. Research-First.
            </p>
            {/* Glow dot accent */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6bc28b] shadow-[0_0_8px_rgba(107,194,139,0.8)]" />
              <span className="text-[#6bc28b] text-[11px] font-bold tracking-widest uppercase">Active Research</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            custom={1}
            variants={colVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:ml-12"
          >
            <h4 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#6bc28b]" />
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.QuickLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  custom={i}
                  variants={linkVar}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#A3B1A4] hover:text-white text-[15px] transition-colors duration-200"
                  >
                    <motion.span
                      className="w-0 group-hover:w-3 h-px bg-[#6bc28b] inline-block transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            custom={2}
            variants={colVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#6bc28b]" />
              COMPANY
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.Company.map((link, i) => (
                <motion.li
                  key={link.label}
                  custom={i}
                  variants={linkVar}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#A3B1A4] hover:text-white text-[15px] transition-colors duration-200"
                  >
                    <motion.span
                      className="w-0 group-hover:w-3 h-px bg-[#6bc28b] inline-block transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            custom={3}
            variants={colVar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-white text-[11px] font-bold tracking-[0.15em] uppercase mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-[#6bc28b]" />
              CONNECT
            </h4>
            <p className="text-[#A3B1A4] text-[15px] mb-5">
              Join the Intelligence Channel
            </p>

            {/* Telegram CTA */}
            <motion.div
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-[#00D47E] hover:text-[#00F592] text-[12px] font-bold tracking-wider uppercase mb-8 transition-colors group"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                TELEGRAM CHANNEL
                <motion.svg
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </motion.svg>
              </Link>
            </motion.div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <LinkedInIcon />, label: 'LinkedIn' },
                { icon: <XTwitterIcon />, label: 'X / Twitter' },
              ].map((s, i) => (
                <motion.a
                  key={s.label}
                  href="#"
                  custom={i}
                  variants={socialVar}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.15, y: -3, backgroundColor: '#ffffff', color: '#1E2922' }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ duration: 0.2 }}
                  aria-label={s.label}
                  className="w-10 h-10 bg-[#E8F5E9] text-[#1E2922] flex items-center justify-center rounded-sm cursor-pointer"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pt-6 border-t border-[#3D4A3D] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider text-[#A3B1A4]"
        >
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-center md:text-left">
            <span>COPYRIGHT © 2026 LOGYRA RESEARCH PVT LTD. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-[#00D47E]">|</span>
            <span className="text-[#00D47E] font-medium">NOT SEBI REGISTERED | EDUCATIONAL CONTENT ONLY</span>
          </div>

          <div className="flex items-center gap-6">
            {['PRIVACY POLICY', 'TERMS OF SERVICE', 'API DOCS'].map((label) => (
              <motion.div key={label} whileHover={{ color: '#ffffff' }} transition={{ duration: 0.15 }}>
                <Link href="#" className="hover:text-white transition-colors">
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
