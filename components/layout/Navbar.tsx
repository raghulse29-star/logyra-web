'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '#', active: true },
  { label: 'Crypto', href: '#crypto' },
  { label: 'Research Desk', href: '#research', hasDropdown: true },
  { label: 'Control Hub', href: '#control', hasDropdown: true },
  { label: 'About us', href: '#about' },
  { label: 'Legal', href: '#legal' },
  { label: 'Contact Us', href: '#contact' },
];

function NavLink({ link, index }: { link: typeof navLinks[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 + index * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={link.href}
        className={`relative text-[14px] xl:text-[15px] font-medium flex items-center gap-1.5 py-1 transition-colors duration-200 ${
          link.active ? 'text-[#6bc28b]' : 'text-gray-200 hover:text-white'
        }`}
      >
        {/* Animated hover highlight blob */}
        <AnimatePresence>
          {hovered && !link.active && (
            <motion.span
              layoutId="nav-hover-bg"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 -mx-3 -my-1 rounded-lg bg-white/[0.07] pointer-events-none"
            />
          )}
        </AnimatePresence>

        <span className="relative z-10">{link.label}</span>

        {link.hasDropdown && (
          <motion.svg
            animate={{ rotate: hovered ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 mt-0.5 opacity-70"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        )}
      </Link>

      {/* Active underline — always visible for active link */}
      {link.active && (
        <motion.span
          layoutId="active-underline"
          className="absolute -bottom-[22px] left-0 w-full h-[2px] rounded-full bg-[#6bc28b]"
        />
      )}

      {/* Hover underline — slides in from left */}
      {!link.active && (
        <motion.span
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          initial={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-[22px] left-0 w-full h-[2px] rounded-full bg-white/40 origin-left"
        />
      )}
    </motion.li>
  );
}

function IconButton({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.15, color: '#ffffff' }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative text-gray-200 transition-colors p-1.5 rounded-lg hover:bg-white/10"
      aria-label={label}
    >
      {children}
    </motion.button>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans ${
        scrolled
          ? 'bg-[#2d4233]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]'
          : 'bg-[#3b5440]'
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <div className="shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="6" fill="#6bc28b" />
                <circle cx="12" cy="12" r="5" fill="#1b2a22" />
              </svg>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-wide text-white">
              Logyra
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link, i) => (
            <NavLink key={link.label} link={link} index={i} />
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            className="flex items-center gap-2"
          >
            <IconButton label="Notifications">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>
            </IconButton>
            <IconButton label="Settings">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </IconButton>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.45 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="#contact"
                className="relative inline-block bg-[#6bc28b] text-white text-[12px] xl:text-[13px] font-bold tracking-wider px-5 xl:px-6 py-2.5 xl:py-3 rounded-lg overflow-hidden uppercase"
                style={{ boxShadow: '0 0 24px rgba(107,194,139,0.4)' }}
              >
                {/* Shimmer sweep */}
                <motion.span
                  className="absolute inset-0 -skew-x-12 bg-white/20"
                  initial={{ x: '-110%' }}
                  whileHover={{ x: '110%' }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                />
                <span className="relative z-10">CONNECT WITH US</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block w-5 h-0.5 bg-white rounded-full origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-5 h-0.5 bg-white rounded-full"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="block w-5 h-0.5 bg-white rounded-full origin-center"
          />
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-[#2d3f33]/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.055, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center justify-between py-3 px-3 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                      link.active
                        ? 'text-[#6bc28b] bg-[#6bc28b]/10'
                        : 'text-gray-200 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    )}
                    {link.active && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="w-1.5 h-1.5 rounded-full bg-[#6bc28b]"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* Icons row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 py-3 px-3 mt-2 border-t border-white/10 text-gray-300"
              >
                <motion.button whileTap={{ scale: 0.9 }} className="hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                </motion.button>
                <motion.button whileTap={{ scale: 0.9 }} className="hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                </motion.button>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-2"
              >
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="relative block w-full bg-[#6bc28b] text-white font-bold tracking-wider py-4 rounded-xl text-center uppercase text-sm overflow-hidden"
                  style={{ boxShadow: '0 0 24px rgba(107,194,139,0.35)' }}
                >
                  CONNECT WITH US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
