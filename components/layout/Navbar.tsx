'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// 1. Updated Data Structure to support infinite nesting
type MenuItem = {
  label: string;
  href: string;
  activeOn?: string[];
  hasDropdown?: boolean;
  children?: MenuItem[];
  accent?: string;
  tag?: string;
};

const navLinks: MenuItem[] = [
  { label: 'Home', href: '/', activeOn: ['/'] },
  {
    label: 'Research Desk',
    href: '/research-desk',
    hasDropdown: true,
    activeOn: [
      '/research-desk',
      '/research-desk/open-channel',
      '/research-desk/inner-circle',
      '/research-desk/inner-circle/index-options',
      '/inner-circle',
    ],
    children: [
      { label: 'Open Channel', href: '/research-desk/open-channel', accent: '#7dd3fc', tag: 'FREE' },
      { label: 'Inner Circle', href: '/research-desk/inner-circle', accent: '#B8FD4B', tag: 'PRIVATE' },
    ]
  },
  { label: 'About us', href: '/about', activeOn: ['/about'] },
  { label: 'Legal', href: '/legal', activeOn: ['/legal'] },
  // { label: 'Contact Us', href: '/#contact' },
];

// 2. Desktop Recursive SubMenu Components
function DesktopSubMenuItem({ item }: { item: MenuItem }) {
  const [isHovered, setIsHovered] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative px-3 py-2 mx-2 rounded-lg hover:bg-[var(--color-primary-tint)] transition-colors cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={item.href} className="flex items-center justify-between gap-3 text-[14px] whitespace-nowrap">
        <span style={item.accent ? { color: item.accent } : undefined} className={item.accent ? 'font-semibold' : 'text-[var(--color-fg-muted)] group-hover:text-[var(--color-primary)]'}>
          {item.label}
        </span>
        {item.tag && (
          <span
            className="text-[9px] font-bold tracking-[0.12em] uppercase px-1.5 py-0.5 rounded-sm border"
            style={{ color: item.accent, borderColor: `${item.accent}66`, backgroundColor: `${item.accent}1a` }}
          >
            {item.tag}
          </span>
        )}
        {hasChildren && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 -rotate-90 ml-1 text-[var(--color-fg-muted)]">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </Link>

      {hasChildren && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -8, y: -4 }}
              animate={{ opacity: 1, x: 0, y: -4 }}
              exit={{ opacity: 0, x: -8, y: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-[calc(100%+4px)] min-w-[180px] bg-white/98 backdrop-blur-xl border border-[var(--color-border)] rounded-xl shadow-[0_8px_28px_rgba(10,10,10,0.10)] py-2 flex flex-col z-50"
            >
              {item.children!.map(child => (
                <DesktopSubMenuItem key={child.label} item={child} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

// 3. Updated Desktop Top-Level Link
function NavLink({ link, index }: { link: MenuItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();
  const isActive = link.activeOn?.includes(pathname) ?? false;
  const hasChildren = link.children && link.children.length > 0;

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
        className={`relative text-[16px] xl:text-[17px] font-medium flex items-center gap-1.5 py-1 transition-colors duration-200 ${
          isActive ? 'text-[var(--color-primary)]' : 'text-[var(--color-fg-muted)] hover:text-[var(--color-primary)]'
        }`}
      >
        <AnimatePresence>
          {hovered && !isActive && (
            <motion.span
              layoutId="nav-hover-bg"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 -mx-3 -my-1 rounded-lg bg-[var(--color-primary-tint)] pointer-events-none"
            />
          )}
        </AnimatePresence>

        <span className="relative z-10">{link.label}</span>

        {link.hasDropdown && (
          <motion.svg
            animate={{ rotate: hovered ? 180 : 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            className="relative z-10 mt-0.5 opacity-70"
          >
            <polyline points="6 9 12 15 18 9" />
          </motion.svg>
        )}
      </Link>

      {/* Main Dropdown Container */}
      {hasChildren && (
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[120%] left-0 min-w-[200px] bg-white/98 backdrop-blur-xl border border-[var(--color-border)] rounded-xl shadow-[0_8px_28px_rgba(10,10,10,0.10)] py-2 flex flex-col z-50"
            >
              {link.children!.map(child => (
                <DesktopSubMenuItem key={child.label} item={child} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {isActive && (
        <motion.span layoutId="active-underline" className="absolute -bottom-[22px] left-0 w-full h-[2px] rounded-full bg-[var(--color-primary)]" />
      )}
      {!isActive && (
        <motion.span
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          initial={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="absolute -bottom-[22px] left-0 w-full h-[2px] rounded-full bg-[var(--color-primary)]/40 origin-left"
        />
      )}
    </motion.li>
  );
}

// 4. Mobile Accordion Menu Component
function MobileMenuItem({ item, setMenuOpen }: { item: MenuItem; setMenuOpen: (v: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = item.activeOn?.includes(pathname) ?? false;
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="flex flex-col w-full">
      <div className={`flex items-center rounded-xl text-[15px] font-medium transition-all duration-200 ${
        isActive ? 'text-[var(--color-primary)] bg-[var(--color-primary-tint)]' : 'text-[var(--color-fg-muted)]'
      }`}>
        {/* Label — always navigates */}
        <Link
          href={item.href}
          onClick={() => { if (!hasChildren) setMenuOpen(false); }}
          className="flex-1 flex items-center gap-2 py-3 px-3 hover:text-[var(--color-primary)] transition-colors"
        >
          <span style={item.accent ? { color: item.accent } : undefined} className={item.accent ? 'font-semibold' : ''}>
            {item.label}
          </span>
          {item.tag && (
            <span
              className="text-[9px] font-bold tracking-[0.12em] uppercase px-1.5 py-0.5 rounded-sm border"
              style={{ color: item.accent, borderColor: `${item.accent}66`, backgroundColor: `${item.accent}1a` }}
            >
              {item.tag}
            </span>
          )}
        </Link>
        {/* Chevron — only toggles submenu */}
        {hasChildren && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-3 shrink-0 hover:text-[var(--color-primary)] transition-colors"
            aria-label="Expand"
          >
            <motion.svg animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
              <polyline points="6 9 12 15 18 9" />
            </motion.svg>
          </button>
        )}
      </div>

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden flex flex-col gap-1 border-l-2 ml-4 pl-2 border-[var(--color-border)] mt-1"
          >
            {item.children!.map(child => (
              <MobileMenuItem key={child.label} item={child} setMenuOpen={setMenuOpen} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Main Navbar Component ---
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
          ? 'bg-white/95 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_4px_18px_rgba(10,10,10,0.06)]'
          : 'bg-white border-b border-[var(--color-border-subtle)]'
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-4 sm:px-6 flex items-center justify-between h-20 sm:h-24">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }} className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Logyra Research"
              width={203}
              height={80}
              priority
              className="h-14 sm:h-16 w-auto"
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-10">
          {navLinks.map((link, i) => (
            <NavLink key={link.label} link={link} index={i} />
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.4 }} className="flex items-center gap-2">
            <IconButton label="Notifications">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </IconButton>
            <IconButton label="Settings">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </IconButton>
          </motion.div> */}

          {/* CTA Button */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55, duration: 0.45 }}>
            <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}>
              <Link href="/#contact" className="relative inline-block bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-[12px] xl:text-[13px] font-bold tracking-wider px-5 xl:px-6 py-2.5 xl:py-3 rounded-lg overflow-hidden uppercase transition-colors" style={{ boxShadow: '0 8px 24px rgba(63,139,95,0.30)' }}>
                <motion.span className="absolute inset-0 -skew-x-12 bg-white/20" initial={{ x: '-110%' }} whileHover={{ x: '110%' }} transition={{ duration: 0.55, ease: 'easeInOut' }} />
                <span className="relative z-10">CONNECT WITH US</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Hamburger */}
        <motion.button whileTap={{ scale: 0.9 }} className="lg:hidden flex flex-col gap-[5px] min-w-[44px] min-h-[44px] items-center justify-center p-2.5 rounded-lg hover:bg-[var(--color-primary-tint)] transition-colors" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <motion.span animate={menuOpen ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="block w-5 h-0.5 bg-[var(--color-fg)] rounded-full origin-center" />
          <motion.span animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.2 }} className="block w-5 h-0.5 bg-[var(--color-fg)] rounded-full" />
          <motion.span animate={menuOpen ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }} className="block w-5 h-0.5 bg-[var(--color-fg)] rounded-full origin-center" />
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
            className="lg:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-[var(--color-border)] max-h-[85vh] overflow-y-auto"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.label} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.055, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}>
                  <MobileMenuItem item={link} setMenuOpen={setMenuOpen} />
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex items-center gap-2 py-2 px-3 mt-2 border-t border-[var(--color-border)] text-[var(--color-fg-muted)]">
                <motion.button whileTap={{ scale: 0.9 }} className="hover:text-[var(--color-primary)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--color-primary-tint)]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                </motion.button>
                <motion.button whileTap={{ scale: 0.9 }} className="hover:text-[var(--color-primary)] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-[var(--color-primary-tint)]">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                </motion.button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="mt-2">
                <Link href="/#contact" onClick={() => setMenuOpen(false)} className="relative flex items-center justify-center w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold tracking-wider min-h-[44px] rounded-xl text-center uppercase text-sm overflow-hidden transition-colors" style={{ boxShadow: '0 8px 24px rgba(63,139,95,0.30)' }}>
                  CONTACT US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}