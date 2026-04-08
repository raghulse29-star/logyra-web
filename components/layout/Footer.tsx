'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// --- Icons ---
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XTwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" fill="currentColor"/>
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

export default function Footer() {
  return (
    <footer className="bg-[#2B352A] pt-20 pb-8 px-4 font-sans">
      <div className="container mx-auto max-w-[1200px]">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-3xl font-bold text-white tracking-wide">
                LOGYRA
              </span>
            </Link>
            <p className="text-white text-[15px] max-w-[200px] leading-relaxed">
              Market Intelligence. Research-First.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:ml-12">
            <h4 className="text-white text-sm font-bold tracking-[0.1em] uppercase mb-6">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.QuickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#A3B1A4] hover:text-white text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-[0.1em] uppercase mb-6">
              COMPANY
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.Company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#A3B1A4] hover:text-white text-[15px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Social */}
          <div>
            <h4 className="text-white text-sm font-bold tracking-[0.1em] uppercase mb-6">
              CONNECT
            </h4>
            <p className="text-[#A3B1A4] text-[15px] mb-4">
              Join the Intelligence Channel
            </p>
            <Link href="#" className="inline-flex items-center gap-2 text-[#00D47E] hover:text-[#00F592] text-[13px] font-bold tracking-wider uppercase mb-8 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              TELEGRAM CHANNEL
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-[#E8F5E9] hover:bg-white text-[#1E2922] flex items-center justify-center rounded-sm transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-[#E8F5E9] hover:bg-white text-[#1E2922] flex items-center justify-center rounded-sm transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" className="w-10 h-10 bg-[#E8F5E9] hover:bg-white text-[#1E2922] flex items-center justify-center rounded-sm transition-colors">
                <XTwitterIcon />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#3D4A3D] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-wider text-[#A3B1A4]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1 text-center md:text-left">
            <span>COPYRIGHT © 2026 LOGYRA RESEARCH PVT LTD. ALL RIGHTS RESERVED.</span>
            <span className="hidden md:inline text-[#00D47E]">|</span>
            <span className="text-[#00D47E] font-medium">NOT SEBI REGISTERED | EDUCATIONAL CONTENT ONLY</span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY POLICY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</Link>
            <Link href="#" className="hover:text-white transition-colors">API DOCS</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}