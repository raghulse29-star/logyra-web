'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const sectionNavItems = [
  { id: 'derivatives', label: 'Derivatives Coverage' },
  { id: 'research-briefs', label: 'Daily Research Briefs' },
  { id: 'telegram', label: 'Private Telegram Access' },
  { id: 'plans', label: 'Subscription Plans' },
  { id: 'legal', label: 'Legal' },
];

const derivativesFeatures = [
  { title: 'Index Options Analysis', desc: 'Nifty 50 & Bank Nifty options chain insights with IV analysis, key strike levels, and max pain reads every session.' },
  { title: 'Open Interest Tracking', desc: 'Real-time OI buildup and unwinding data — decoded into positioning context. PCR trends and institutional flow reads.' },
  { title: 'Options Chain Interpretation', desc: 'Max pain, PCR ratios, and open interest buildup decoded into actionable context.' },
  { title: 'Futures Market Structure', desc: 'Rollover data, futures premium analysis, and institutional positioning insights — especially around expiry weeks.' },
  { title: 'IV & Greeks Breakdown', desc: 'Implied volatility regime shifts and options Greeks context for educated positioning.' },
  { title: 'Sector Rotation Signals', desc: 'F&O-based sector rotation data to identify institutional money flow directions.' },
];

const researchBriefItems = [
  { time: '7:30 AM', label: 'Pre-Market Brief', desc: 'Global market wrap, SGX Nifty levels, and key events for the trading day.' },
  { time: '9:00 AM', label: 'Opening Setup', desc: 'Key levels, expected move, and the bias for the session with full context.' },
  { time: '9:15 AM – 3:30 PM', label: 'Intraday Educational Setups', desc: '2–7 live setups during market hours — structure-based, risk-defined, with full reasoning context.' },
  { time: '12:30 PM', label: 'Mid-Session Context', desc: 'What held, what broke, and how the afternoon positioning context looks from the desk.' },
  { time: '3:30 PM', label: 'EOD Debrief', desc: 'What happened, why it happened, and what to watch for next session.' },
  { time: 'Weekly', label: 'Review Note', desc: 'Week-in-review with sector performance, F&O data, and upcoming catalysts.' },
];

const clarityIs = [
  'Structured educational research delivered in real-time',
  'Institutional analysis framework applied to Indian F&O markets',
  'A discipline system — to build thinking, not dependency',
  'A reference environment for participants who execute independently',
  'Consistent, documented research process — not personal opinion',
];

const clarityIsNot = [
  'Not a signal-selling service or trade advisory',
  'Not SEBI-registered investment advisory',
  'Not a profit-guarantee or return-promise service',
  'Not a copy-trade or auto-execute platform',
  'Not for passive followers who don\'t apply thinking',
];

const priceCardFeatures = [
  'Daily F&O pre-market brief before 9:15 AM',
  'Intraday educational setups (2–7 per day)',
  'Private Telegram channel access',
  'EOD debrief — every market day',
  'Weekly structure review notes',
  'Research team access for clarifications',
];

const priceTiers = [
  { key: 'monthly' as const,    label: 'Monthly',     price: '₹3,399', duration: '1 month access',  saving: '',                payLink: '/pay/monthly' },
  { key: 'quarterly' as const,  label: 'Quarterly',   price: '₹6,699', duration: '3 months access', saving: 'SAVE ₹3,498',     payLink: '/pay/quarterly' },
  { key: 'half-yearly' as const,label: 'Half-Yearly', price: '₹9,990', duration: '6 months access', saving: 'SAVE ₹10,404',    payLink: '/pay/half-yearly' },
];

const telegramFeatures = [
  'Real-time F&O research and market structure updates',
  'Pre-market brief delivered before market opens at 9:15 AM',
  'Educational context for every significant market move',
  'Weekly review notes every Friday post-market',
  'Moderated environment — zero noise, zero tips',
  'Direct access to the research team for clarifications',
];

const sampleMessages = [
  { time: '7:32 AM', text: '📋 Pre-Market Brief — BankNifty shows strong put writing at 48,000. Bias: cautiously bullish above 47,800.' },
  { time: '9:05 AM', text: '📊 Opening Setup — Nifty gap-up open expected. Watch 22,150 as immediate resistance. IV crush likely post-open.' },
  { time: '3:35 PM', text: '📝 EOD Debrief — Index held key support. Options data shows short covering. Next session: watch 22,200 breakout.' },
];

const plans = [
  {
    id: 'monthly',
    num: '01',
    label: 'Monthly',
    price: '3,399',
    duration: '1 month access',
    savings: null,
    badge: null,
    featured: false,
    payLink: '/pay/monthly',
    features: [
      'Daily F&O pre-market brief',
      'Intraday educational context',
      'Private Telegram channel',
      'Weekly review notes',
    ],
  },
  {
    id: 'quarterly',
    num: '02',
    label: 'Quarterly',
    price: '6,699',
    duration: '3 months access',
    savings: '₹3,498 VS MONTHLY',
    badge: 'MOST CHOSEN',
    featured: true,
    payLink: '/pay/quarterly',
    features: [
      'Everything in monthly',
      'Market structure walkthroughs',
      'Sector rotation analysis',
      'Priority support',
    ],
  },
  {
    id: 'half-yearly',
    num: '03',
    label: 'Half-Yearly',
    price: '9,990',
    duration: '6 months access',
    savings: '₹10,404 VS MONTHLY',
    badge: null,
    featured: false,
    payLink: '/pay/half-yearly',
    features: [
      'Everything in quarterly',
      'Monthly deep-dive report',
      'Early access to new modules',
      'Direct researcher access',
    ],
  },
];

const policies = [
  {
    title: 'Refund & Cancellation Policy',
    paragraphs: [
      'All subscription purchases are non-refundable once access has been granted to the private research channel. In the event of a technical failure in access delivery, please contact us within 48 hours of purchase and we will resolve or refund at our discretion.',
      'Subscriptions are non-transferable and valid only for the registered email and mobile number used at checkout.',
    ],
  },
  {
    title: 'Terms of Use',
    paragraphs: [
      'All content published by Logyra Research Pvt Ltd is strictly educational and informational in nature. No content constitutes investment advice, a recommendation to buy or sell securities, or a promise of returns of any kind.',
      'Subscribers must be 18 years or older. Content is for personal use only and may not be redistributed, shared, or resold in any form.',
    ],
  },
  {
    title: 'Privacy Policy',
    paragraphs: [
      'We collect only the information required to process your subscription — name, email, and mobile number. This information is never sold or shared with third parties for marketing purposes.',
      'Payment processing is handled by a certified payment gateway. We do not store card or UPI details on our servers.',
    ],
  },
  {
    title: 'Regulatory Disclaimer',
    paragraphs: [
      'Logyra Research Pvt Ltd is not a SEBI-registered investment advisor. All research and educational content is provided under the exemptions applicable to educational platforms and does not constitute regulated investment advice.',
      'Markets involve risk. Past educational scenarios discussed do not guarantee future outcomes.',
    ],
  },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navbar = window.innerWidth < 640 ? 80 : 96;
  const sectionNav = 48;
  const top = el.getBoundingClientRect().top + window.scrollY - navbar - sectionNav - 8;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function IndexOptionsProductPage() {
  const [activeSection, setActiveSection] = useState('derivatives');
  const [activeTier, setActiveTier] = useState<'monthly' | 'quarterly' | 'half-yearly'>('monthly');
  const currentTier = priceTiers.find((t) => t.key === activeTier)!;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sectionNavItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="font-sans">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#0d130d] border-b border-white/[0.05] pt-24 sm:pt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 text-xs text-gray-500 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#6bc28b] transition-colors">Home</Link>
          <span className="text-gray-700">›</span>
          <Link href="/research-desk" className="hover:text-[#6bc28b] transition-colors">Research Desk</Link>
          <span className="text-gray-700">›</span>
          <Link href="/research-desk/inner-circle" className="hover:text-[#6bc28b] transition-colors">Inner Circle</Link>
          <span className="text-gray-700">›</span>
          <span className="text-gray-300">Index Options</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#18261b] pt-12 pb-12 sm:pt-16 sm:pb-16 md:pt-24 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] sm:w-[480px] md:w-[700px] h-[200px] sm:h-[260px] md:h-[320px] bg-[#4ade80]/6 blur-[140px] rounded-full" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 border border-[#2e3b30] bg-[#17221a] text-[#B8FD4B] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FD4B] animate-pulse" />
                  Futures &amp; Options · Inner Circle · Live Now
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl"
              >
                Structured market research,{' '}
                <span className="text-[#6bc28b]">delivered daily.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
              >
                Institutional-grade F&amp;O educational insights and pre-market research briefs — built for serious index options participants who want clarity, not noise. Nifty 50, Bank Nifty, and Sensex — every market day.
              </motion.p>

              {/* ── Video placeholder (replace with YouTube embed later) ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative w-full max-w-[330px] aspect-video rounded-lg overflow-hidden bg-[#0d130d] border border-white/[0.08] group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#17221a] via-[#0d130d] to-[#0a0f0a]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,194,139,0.12),transparent_60%)]" />

                <div className="absolute top-0 left-0 right-0 h-9 bg-gradient-to-b from-black/40 to-transparent flex items-center px-3 z-10">
                  <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.1em] uppercase text-white/80">
                    <span className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                    Watch · 2:14
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="flex items-center justify-center w-[54px] h-[38px] rounded-lg bg-[#FF0000] group-hover:bg-[#cc0000] group-hover:scale-105 transition-all duration-200 shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-3.5 py-2.5 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10">
                  <div className="text-[9px] font-bold tracking-[0.12em] uppercase text-[#B8FD4B] mb-0.5">Walkthrough</div>
                  <div className="text-[12px] font-semibold text-white leading-snug">
                    How Logyra reads the F&amp;O market — in 2 minutes
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ── Sticky Price Card ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative bg-[#17221a] border border-[#6bc28b]/30 rounded-2xl p-6 sm:p-8 lg:sticky lg:top-36 overflow-hidden w-full max-w-[460px] mx-auto lg:mx-0"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#6bc28b]" />

              {/* Tier toggle */}
              <div className="flex border border-white/[0.08] rounded-lg overflow-hidden mb-7">
                {priceTiers.map((tier) => (
                  <button
                    key={tier.key}
                    onClick={() => setActiveTier(tier.key)}
                    className={`flex-1 py-2.5 text-[11px] font-bold tracking-wide transition-colors ${
                      activeTier === tier.key
                        ? 'bg-[#6bc28b] text-[#0d1a10]'
                        : 'text-gray-400 hover:text-gray-200'
                    } ${tier.key !== 'half-yearly' ? 'border-r border-white/[0.08]' : ''}`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              {/* Price display */}
              <div className="mb-6">
                <div className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  {currentTier.price}
                </div>
                <div className="text-xs text-gray-500 mt-1">Incl. GST · {currentTier.duration}</div>
                {currentTier.saving && (
                  <div className="inline-block mt-3 text-[10px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 border border-[#B8FD4B]/30 text-[#B8FD4B] bg-[#B8FD4B]/8 rounded-sm">
                    {currentTier.saving} VS MONTHLY
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="border-t border-white/[0.07] pt-5 mb-6 space-y-2.5">
                {priceCardFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[13px] text-gray-300">
                    <span className="text-[#6bc28b] shrink-0 mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href={currentTier.payLink}
                className="block w-full py-3.5 bg-[#6bc28b] hover:bg-[#B8FD4B] text-[#0d1a10] text-center text-[12px] font-bold tracking-[0.12em] uppercase rounded-lg transition-colors mb-3"
              >
                Subscribe → {currentTier.price}
              </Link>

              <p className="text-[11px] text-gray-500 text-center leading-relaxed">
                Secure payment via Cashfree · UPI, Card, Netbanking<br />
                Non-refundable once access is granted.{' '}
                <button onClick={() => scrollToSection('legal')} className="underline hover:text-gray-300 transition-colors">
                  Read policy
                </button>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sticky Section Nav ── */}
      <div className="sticky top-20 sm:top-24 z-40 bg-[#111d14]/98 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-2 sm:px-6">
          <div
            className="flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {sectionNavItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex-shrink-0 text-[10px] sm:text-[11px] font-semibold tracking-[0.08em] sm:tracking-[0.1em] uppercase px-3 sm:px-5 py-4 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-[#6bc28b]' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="section-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#6bc28b] rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Derivatives Coverage ── */}
      <section id="derivatives" className="bg-[#111315] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Derivatives Coverage</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              F&amp;O markets, decoded<br />
              <span className="text-[#6bc28b]">without the noise.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Every research brief is grounded in derivatives data — not opinion. We cover the full F&amp;O landscape across index and stock options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {derivativesFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group p-6 bg-[#17221a] border border-white/[0.06] rounded-xl hover:border-[#6bc28b]/30 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#B8FD4B]/10 flex items-center justify-center mb-4">
                  <span className="text-[#B8FD4B] text-[11px] font-bold font-mono">0{i + 1}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily Research Briefs ── */}
      <section id="research-briefs" className="bg-[#18261b] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Daily Research Briefs</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every session, covered<br />
              <span className="text-[#6bc28b]">from open to close.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Three structured briefs every trading day, plus a weekly review note — all grounded in data, not predictions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {researchBriefItems.map((brief, i) => (
              <motion.div
                key={brief.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 bg-[#111d14] border border-white/[0.07] rounded-xl"
              >
                <div className="shrink-0 w-16 h-16 rounded-xl bg-[#B8FD4B]/10 flex items-center justify-center">
                  <span className="text-[#B8FD4B] text-[11px] font-bold font-mono text-center leading-tight px-1">{brief.time}</span>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1.5">{brief.label}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{brief.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Private Telegram Access ── */}
      <section id="telegram" className="bg-[#111315] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Private Telegram Access</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Research delivered<br />
                <span className="text-[#6bc28b]">where you already are.</span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Your subscription unlocks access to our private Telegram channel — where research briefs are posted in real-time, every trading day.
              </p>
              <ul className="space-y-3">
                {telegramFeatures.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    className="flex items-start gap-3 text-gray-300 text-sm"
                  >
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#B8FD4B]/15 flex items-center justify-center shrink-0">
                      <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                        <polyline points="2,6 5,9 10,3" stroke="#B8FD4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Telegram preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-[#17222a] rounded-2xl border border-white/10 p-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                      <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">Logyra Inner Circle</div>
                    <div className="text-gray-400 text-xs">Private research channel</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-xs font-medium">Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {sampleMessages.map((msg, i) => (
                    <div key={i} className="bg-[#1e2d38] rounded-lg p-3">
                      <p className="text-gray-300 text-xs leading-relaxed">{msg.text}</p>
                      <p className="text-gray-500 text-[10px] mt-1.5">{msg.time}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-[#229ED9]/5 blur-xl -z-10 scale-110" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Clarity Check (IS / IS NOT) ── */}
      <section className="bg-[#18261b] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Clarity Check</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What this is.<br />
              <span className="text-[#6bc28b]">What this is not.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Understand this before you subscribe. The Inner Circle is built for a specific type of participant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* IS */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-[#17221a] border border-[#6bc28b]/25 rounded-2xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-2 mb-6 text-[#6bc28b] text-[10px] font-bold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6bc28b]" />
                What Logyra Inner Circle IS
              </div>
              <ul className="space-y-3">
                {clarityIs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="text-[#6bc28b] shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* IS NOT */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1a0e0e] border border-[#e05555]/25 rounded-2xl p-7 sm:p-8"
            >
              <div className="flex items-center gap-2 mb-6 text-[#e05555] text-[10px] font-bold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e05555]" />
                What Logyra Inner Circle IS NOT
              </div>
              <ul className="space-y-3">
                {clarityIsNot.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <span className="text-[#e05555] shrink-0 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Subscription Plans ── */}
      <section id="plans" className="bg-[#111315] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Subscription Plans</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose your access,<br />
              <span className="text-[#6bc28b]">start learning today.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08] rounded-xl overflow-hidden">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col p-5 sm:p-7 md:p-8 ${
                  plan.featured
                    ? 'bg-[#0f1f13] ring-1 ring-[#6bc28b]/40 z-10'
                    : 'bg-[#17221a]'
                } ${i < plans.length - 1 ? 'md:border-r border-b md:border-b-0 border-white/[0.08]' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-[#B8FD4B] text-[#0d1a10] text-[9px] font-bold tracking-[0.15em] uppercase px-4 py-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#0d1a10] animate-pulse" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className={`text-[11px] font-medium tracking-[0.12em] uppercase mb-5 ${plan.badge ? 'mt-5' : ''} text-gray-500`}>
                  {plan.num} — {plan.label}
                </div>

                <div className="text-5xl font-bold text-white mb-1">
                  ₹{plan.price}
                </div>
                <div className="text-xs text-gray-500 mb-6">
                  Incl. GST · {plan.duration}
                </div>

                {plan.savings ? (
                  <div className="self-start text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-6 border border-[#B8FD4B]/30 text-[#B8FD4B] bg-[#B8FD4B]/5 rounded-sm">
                    Save {plan.savings}
                  </div>
                ) : (
                  <div className="mb-6" />
                )}

                <ul className="space-y-0 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm py-3 border-b border-white/[0.07] text-gray-300"
                    >
                      <span className="mt-0.5 shrink-0 text-[#6bc28b]">—</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.payLink}
                  className={`block w-full py-3.5 text-center text-[11px] font-bold tracking-[0.15em] uppercase rounded-lg transition-all duration-200 ${
                    plan.featured
                      ? 'bg-[#6bc28b] text-[#0d1a10] hover:bg-[#B8FD4B]'
                      : 'border border-white/20 text-gray-300 hover:border-[#6bc28b] hover:text-[#6bc28b]'
                  }`}
                >
                  Subscribe →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Legal ── */}
      <section id="legal" className="bg-[#18261b] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Policies &amp; Terms</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent by design,<br />
              <span className="text-[#6bc28b]">clear on every term.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-white/[0.07] rounded-xl overflow-hidden">
            {policies.map((policy, i) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className={`p-6 sm:p-8 bg-[#17221a] ${i % 2 === 0 ? 'md:border-r border-white/[0.07]' : ''} ${i < policies.length - 1 ? 'border-b border-white/[0.07]' : ''} ${i >= 2 ? 'md:border-b-0' : ''}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8FD4B] shrink-0" />
                  <h3 className="text-white text-[11px] font-bold tracking-[0.12em] uppercase">
                    {policy.title}
                  </h3>
                </div>
                {policy.paragraphs.map((para, j) => (
                  <p key={j} className={`text-sm text-gray-400 leading-relaxed ${j > 0 ? 'mt-3' : ''}`}>
                    {para}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
