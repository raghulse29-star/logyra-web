'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

type Product = {
  num: string;
  name: string;
  market: string;
  desc: string;
  status: 'live' | 'soon';
  href?: string;
  price?: string;
  includes?: string[];
};

const indianProducts: Product[] = [
  {
    num: '01 — Index Options',
    name: 'Index Options\nInner Circle',
    market: 'Nifty 50 · Bank Nifty · Sensex · Midcap Select',
    desc: 'Institutional-grade F&O educational research — pre-market briefs, intraday structure coverage, OI analysis, IV context, and EOD debriefs. Built for index options participants who want clarity, not noise.',
    status: 'live',
    price: '₹3,399',
    href: '/research-desk/inner-circle/index-options',
    includes: [
      'Daily pre-market brief with derivatives data context',
      '2–7 intraday educational setups during market hours',
      'Options chain, OI buildup, and PCR reads',
      'Weekly sector rotation and F&O structure review',
      'Priority research team access for clarifications',
    ],
  },
  {
    num: '02 — Stock Options',
    name: 'Stock Options\nInner Circle',
    market: 'High-Conviction Stock F&O · NSE Listed',
    desc: 'Curated stock options coverage — high-conviction ideas with defined expiry strategy, sector correlation, and full options structure analysis. Launching soon.',
    status: 'soon',
  },
  {
    num: '03 — Equity',
    name: 'Equity Research\nInner Circle',
    market: 'Indian Equities · NSE / BSE',
    desc: 'Long-form equity structure analysis — institutional order flow, sector rotation, and swing-trade framework coverage across Indian listed equities. Launching soon.',
    status: 'soon',
  },
  {
    num: '04 — Commodity',
    name: 'Commodity\nInner Circle',
    market: 'MCX Gold · Silver · Crude · Agricultural',
    desc: 'Indian commodity markets research — MCX gold, silver, crude oil, and agricultural commodity structure analysis. Pre-market, intraday, and EOD coverage aligned to MCX timing.',
    status: 'soon',
  },
];

const globalProducts: Product[] = [
  {
    num: '05 — Forex',
    name: 'Forex Markets\nInner Circle',
    market: 'XAUUSD · Major Pairs · DXY · Global Metals',
    desc: 'London and NY session coverage — XAUUSD, major currency pairs, and DXY structure analysis using SMC/ICT methodology. IST-timed research delivery for Indian participants.',
    status: 'soon',
  },
  {
    num: '06 — Crypto',
    name: 'Crypto Markets\nInner Circle',
    market: 'BTCUSD · ETHUSD · Altcoin Structure',
    desc: 'Digital asset market structure research — Bitcoin and Ethereum structural analysis, on-chain context, and altcoin framework reads. Built for serious crypto participants, not speculators.',
    status: 'soon',
  },
];

const promises = [
  { icon: '📋', title: 'Pre-Market Brief',    desc: 'Full context and session framework before 9:15 AM — not a summary, the complete read.' },
  { icon: '⚡', title: 'Real-Time Setups',    desc: 'Live educational setups during market hours — 2 to 7 per day, with defined risk and full structure context.' },
  { icon: '📊', title: 'EOD Debrief',         desc: 'What happened, why it happened, and what to watch next session — every single day.' },
  { icon: '🎯', title: 'Desk Access',         desc: 'Priority response from the research team for framework questions — direct, not moderated.' },
];

const hiwSteps = [
  { num: 'STEP 01', title: 'Choose Your Product',  desc: 'Select the market and subscription period — monthly, quarterly, or half-yearly.' },
  { num: 'STEP 02', title: 'Complete Payment',     desc: 'Secure payment via Cashfree — UPI, netbanking, or card. Processing stays within the Logyra interface.' },
  { num: 'STEP 03', title: 'Receive Invite Link',  desc: 'Your private Telegram channel invite is generated and delivered immediately upon payment confirmation.' },
  { num: 'STEP 04', title: 'Access Begins',        desc: 'You\'re in. Research starts from the next market session. Your subscription tracks automatically.' },
];

function ProductCard({ product, onNotify }: { product: Product; onNotify: (name: string) => void }) {
  if (product.status === 'live') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col p-8 sm:p-10 bg-gradient-to-br from-[#17221a] to-[#1c2e1c] border border-[#6bc28b]/40 rounded-2xl overflow-hidden hover:border-[#6bc28b] hover:-translate-y-1 transition-all duration-300"
      >
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#6bc28b]" />
        <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm bg-[#6bc28b]/12 border border-[#6bc28b]/25 text-[#6bc28b] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6bc28b]" />
          Live Now
        </span>
        <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-500 mb-2">{product.num}</div>
        <h3 className="font-display text-2xl font-bold text-white mb-1.5 whitespace-pre-line leading-tight">{product.name}</h3>
        <div className="text-sm text-gray-500 mb-4">{product.market}</div>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{product.desc}</p>
        <div className="h-px bg-white/[0.07] mb-5" />
        <ul className="space-y-2 mb-6">
          {product.includes!.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] text-gray-300">
              <span className="text-[#6bc28b] shrink-0 mt-0.5">—</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2 mb-5">
          <span className="font-display text-3xl font-bold text-white">{product.price}</span>
          <span className="text-xs text-gray-500">/ month (GST incl.)</span>
        </div>
        <Link
          href={product.href!}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#6bc28b] hover:bg-[#B8FD4B] text-[#0d1a10] text-[12px] font-bold tracking-[0.12em] uppercase rounded-lg transition-colors"
        >
          View Plans & Subscribe
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col p-8 sm:p-10 bg-[#111315] border border-white/[0.06] rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
    >
      <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm bg-white/[0.04] border border-white/[0.07] text-gray-500 mb-6">
        Coming Soon
      </span>
      <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-600 mb-2">{product.num}</div>
      <h3 className="font-display text-2xl font-bold text-gray-500 mb-1.5 whitespace-pre-line leading-tight">{product.name}</h3>
      <div className="text-sm text-gray-600 mb-4">{product.market}</div>
      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{product.desc}</p>
      <div className="h-px bg-white/[0.05] mb-5" />
      <p className="text-[13px] text-gray-500 mb-4">Get notified when this opens:</p>
      <button
        onClick={() => onNotify(product.name.replace('\n', ' '))}
        className="flex items-center justify-center gap-2 w-full py-3 border border-white/[0.08] hover:border-white/20 hover:text-gray-200 text-gray-400 text-[12px] font-semibold tracking-[0.06em] uppercase rounded-lg transition-colors"
      >
        🔔 Notify Me When Live
      </button>
    </motion.div>
  );
}

export default function InnerCircleHubPage() {
  const [notifyProduct, setNotifyProduct] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function close() {
    setNotifyProduct(null);
    setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <main className="font-sans bg-[#0a0f0a]">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#0d130d] border-b border-white/[0.05] pt-24 sm:pt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[#6bc28b] transition-colors">Home</Link>
          <span className="text-gray-700">›</span>
          <Link href="/research-desk" className="hover:text-[#6bc28b] transition-colors">Research Desk</Link>
          <span className="text-gray-700">›</span>
          <span className="text-gray-300">Inner Circle</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#18261b] pt-14 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right_center,rgba(184,253,75,0.05),transparent_60%)]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
            <span className="inline-flex items-center gap-2 border border-[#2e3b30] bg-[#17221a] text-[#B8FD4B] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FD4B] animate-pulse" />
              Paid · Private · Daily Research
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5 max-w-3xl"
          >
            Private research.<br />
            Real-time depth.<br />
            <span className="text-[#B8FD4B]">Your market.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            The Inner Circle is Logyra&apos;s private research channel — delivering structured, institutional-grade analysis to serious market participants across Indian F&amp;O, Forex, and Crypto. Choose your market. Get the full desk behind it.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-10 border-t border-white/10">
            {[
              { val: '3+',  label: 'Structured briefs per day' },
              { val: '2–7', label: 'Setups during market hours' },
              { val: '5+',  label: 'Years of research framework' },
              { val: '₹0',  label: 'Promised. Ever.' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
              >
                <div className="font-display text-2xl md:text-3xl font-bold text-[#6bc28b] mb-1">{stat.val}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IC Promise ── */}
      <section className="bg-[#0a0f0a] py-12 md:py-16 border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[#17221a] border border-white/[0.06] rounded-2xl overflow-hidden">
            {promises.map((p, i) => (
              <div
                key={p.title}
                className={`p-7 ${i < promises.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-white/[0.06]' : ''} ${i < 2 ? 'lg:border-b-0' : ''}`}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="font-display text-base font-bold text-white mb-2">{p.title}</h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Listing ── */}
      <section className="bg-[#111315] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Choose Your Market</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Select a segment.<br />
              <span className="text-[#6bc28b]">Get the full desk.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Every Inner Circle product delivers the same research depth and discipline — applied to your chosen asset class.
            </p>
          </div>

          {/* Indian Markets divider */}
          <div className="flex items-center gap-5 mb-9">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 border border-[#6bc28b]/30 text-[#6bc28b] rounded-sm whitespace-nowrap">
              🇮🇳 Indian Markets
            </span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {indianProducts.map((p) => (
              <ProductCard key={p.num} product={p} onNotify={setNotifyProduct} />
            ))}
          </div>

          {/* Global Markets divider */}
          <div className="flex items-center gap-5 mb-9">
            <div className="flex-1 h-px bg-white/[0.07]" />
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 border border-white/[0.1] text-gray-400 rounded-sm whitespace-nowrap">
              🌐 Forex & Crypto Markets
            </span>
            <div className="flex-1 h-px bg-white/[0.07]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {globalProducts.map((p) => (
              <ProductCard key={p.num} product={p} onNotify={setNotifyProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[#18261b] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Access Flow</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              From payment<br />
              <span className="text-[#6bc28b]">to private channel.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Immediate access upon payment confirmation. No manual delays, no approval required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 max-w-4xl">
            {hiwSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`p-5 sm:pr-6 ${i < hiwSteps.length - 1 ? 'sm:border-r border-white/[0.07]' : ''}`}
              >
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-gray-500 mb-3">{step.num}</div>
                <h4 className="font-display text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-[13px] text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-gradient-to-br from-[#17221a] via-[#1c2e1c] to-[#162016] border-y border-[#6bc28b]/25 py-16 md:py-20 text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 leading-[1.05]">
            One market.<br />
            <span className="text-[#6bc28b]">Full desk intelligence.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Start with Index Options — the only live product. Others are being built and will open segment by segment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/research-desk/inner-circle/index-options"
              className="inline-flex items-center gap-2 bg-[#6bc28b] hover:bg-[#B8FD4B] text-[#0d1a10] text-sm font-bold tracking-[0.06em] uppercase px-7 py-4 rounded-lg transition-colors"
            >
              View Index Options Plans →
            </Link>
            <a
              href="https://t.me/logyra_insights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#6bc28b] hover:text-[#6bc28b] text-gray-200 text-sm font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              Start Free on Telegram
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-5">Not SEBI registered. Educational research only. Markets involve risk.</p>
        </div>
      </section>

      <Footer />

      {/* ── Notify Modal ── */}
      <AnimatePresence>
        {notifyProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.22 }}
              className="relative bg-[#17221a] border border-[#6bc28b]/30 rounded-2xl p-8 sm:p-10 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-5 text-gray-500 hover:text-white text-2xl leading-none transition-colors"
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Stay in the loop</h3>
                  <p className="text-sm text-gray-400 mb-6">
                    We&apos;ll notify you when <span className="text-[#6bc28b] font-semibold">{notifyProduct}</span> opens for access.
                  </p>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                      setTimeout(close, 3000);
                    }}
                    className="flex flex-col gap-3"
                  >
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[#0d130d] border border-white/[0.08] focus:border-[#6bc28b] rounded-lg text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-[#0d130d] border border-white/[0.08] focus:border-[#6bc28b] rounded-lg text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number (optional)"
                      className="w-full px-4 py-3 bg-[#0d130d] border border-white/[0.08] focus:border-[#6bc28b] rounded-lg text-sm text-white placeholder:text-gray-600 outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#6bc28b] hover:bg-[#B8FD4B] text-[#0d1a10] text-sm font-bold tracking-[0.06em] uppercase rounded-lg transition-colors mt-1"
                    >
                      Notify Me When It Opens
                    </button>
                  </form>
                  <p className="text-[11px] text-gray-500 text-center mt-3">No spam. One email when it launches. That&apos;s it.</p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">✓</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Registered.</h3>
                  <p className="text-sm text-gray-400">We&apos;ll reach you when this product goes live. No spam.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
