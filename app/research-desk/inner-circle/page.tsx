'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useOpenChannel } from '@/components/providers/OpenChannelProvider';

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
        className="relative flex flex-col p-8 sm:p-10 bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-elevated)] border border-[var(--color-primary)]/40 rounded-2xl overflow-hidden hover:border-[var(--color-primary)] hover:-translate-y-1 transition-all duration-300"
      >
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-primary)]" />
        <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm bg-[var(--color-primary)]/12 border border-[var(--color-primary)]/25 text-[var(--color-primary)] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
          Live Now
        </span>
        <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--color-fg-subtle)] mb-2">{product.num}</div>
        <h3 className="text-2xl font-bold text-[var(--color-fg)] mb-1.5 whitespace-pre-line leading-tight">{product.name}</h3>
        <div className="text-sm text-[var(--color-fg-subtle)] mb-4">{product.market}</div>
        <p className="text-sm text-[var(--color-fg-muted)] leading-relaxed mb-6 flex-1">{product.desc}</p>
        <div className="h-px bg-[var(--color-border)] mb-5" />
        <ul className="space-y-2 mb-6">
          {product.includes!.map((item) => (
            <li key={item} className="flex items-start gap-2 text-[13px] text-[var(--color-fg-muted)]">
              <span className="text-[var(--color-primary)] shrink-0 mt-0.5">—</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex items-baseline gap-2 mb-5">
          <span className="text-3xl font-bold text-[var(--color-fg)]">{product.price}</span>
          <span className="text-xs text-[var(--color-fg-subtle)]">/ month (GST incl.)</span>
        </div>
        <Link
          href={product.href!}
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-[12px] font-bold tracking-[0.12em] uppercase rounded-lg transition-colors"
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
      className="relative flex flex-col p-8 sm:p-10 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl opacity-80 hover:opacity-100 transition-opacity"
    >
      <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-bold tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm bg-[var(--color-beige-lighter)] border border-[var(--color-border)] text-[var(--color-fg-subtle)] mb-6">
        Coming Soon
      </span>
      <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--color-fg-subtle)] mb-2">{product.num}</div>
      <h3 className="text-2xl font-bold text-[var(--color-fg-muted)] mb-1.5 whitespace-pre-line leading-tight">{product.name}</h3>
      <div className="text-sm text-[var(--color-fg-subtle)] mb-4">{product.market}</div>
      <p className="text-sm text-[var(--color-fg-subtle)] leading-relaxed mb-6 flex-1">{product.desc}</p>
      <div className="h-px bg-[var(--color-border)] mb-5" />
      <p className="text-[13px] text-[var(--color-fg-subtle)] mb-4">Get notified when this opens:</p>
      <button
        onClick={() => onNotify(product.name.replace('\n', ' '))}
        className="flex items-center justify-center gap-2 w-full py-3 border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-[var(--color-fg-muted)] text-[12px] font-semibold tracking-[0.06em] uppercase rounded-lg transition-colors"
      >
        🔔 Notify Me When Live
      </button>
    </motion.div>
  );
}

export default function InnerCircleHubPage() {
  const [notifyProduct, setNotifyProduct] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { open: openChannel } = useOpenChannel();

  function close() {
    setNotifyProduct(null);
    setTimeout(() => setSubmitted(false), 300);
  }

  return (
    <main className="font-sans bg-[var(--color-bg)]">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-[var(--color-bg-section)] border-b border-[var(--color-border)] pt-24 sm:pt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 text-xs text-[var(--color-fg-subtle)] flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <span className="text-[var(--color-fg-subtle)]">›</span>
          <Link href="/research-desk" className="hover:text-[var(--color-primary)] transition-colors">Research Desk</Link>
          <span className="text-[var(--color-fg-subtle)]">›</span>
          <span className="text-[var(--color-fg-muted)]">Inner Circle</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[var(--color-bg-card)] pt-14 pb-14 md:pt-20 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right_center,rgba(63,139,95,0.05),transparent_60%)]" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
            <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-accent)] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Paid · Private · Daily Research
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-fg)] leading-[1.08] mb-5 max-w-3xl"
          >
            Private research.<br />
            Real-time depth.<br />
            <span className="text-[var(--color-primary)]">Your market.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-fg-muted)] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            The Inner Circle is Logyra&apos;s private research channel — delivering structured, institutional-grade analysis to serious market participants across Indian F&amp;O, Forex, and Crypto. Choose your market. Get the full desk behind it.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 pt-10 border-t border-[var(--color-border)]">
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
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-1">{stat.val}</div>
                <div className="text-xs text-[var(--color-fg-subtle)]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IC Promise ── */}
      <section className="bg-[var(--color-bg-section)] py-12 md:py-16 border-b border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(10,10,10,0.06)]">
            {promises.map((p, i) => (
              <div
                key={p.title}
                className={`p-7 ${i < promises.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-[var(--color-border)]' : ''} ${i < 2 ? 'lg:border-b-0' : ''}`}
              >
                <div className="text-2xl mb-3">{p.icon}</div>
                <h4 className="text-base font-bold text-[var(--color-fg)] mb-2">{p.title}</h4>
                <p className="text-[13px] text-[var(--color-fg-muted)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Listing ── */}
      <section className="bg-[var(--color-bg-card)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Choose Your Market</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-fg)] mb-4">
              Select a segment.<br />
              <span className="text-[var(--color-primary)]">Get the full desk.</span>
            </h2>
            <p className="text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              Every Inner Circle product delivers the same research depth and discipline — applied to your chosen asset class.
            </p>
          </div>

          {/* Indian Markets divider */}
          <div className="flex items-center gap-5 mb-9">
            <div className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 border border-[var(--color-primary)]/30 text-[var(--color-primary)] rounded-sm whitespace-nowrap">
              🇮🇳 Indian Markets
            </span>
            <div className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {indianProducts.map((p) => (
              <ProductCard key={p.num} product={p} onNotify={setNotifyProduct} />
            ))}
          </div>

          {/* Global Markets divider */}
          <div className="flex items-center gap-5 mb-9">
            <div className="flex-1 h-px bg-[var(--color-border)]" />
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-1.5 border border-[var(--color-border)] text-[var(--color-fg-muted)] rounded-sm whitespace-nowrap">
              🌐 Forex & Crypto Markets
            </span>
            <div className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {globalProducts.map((p) => (
              <ProductCard key={p.num} product={p} onNotify={setNotifyProduct} />
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-[var(--color-bg-section)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Access Flow</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-fg)] mb-4">
              From payment<br />
              <span className="text-[var(--color-primary)]">to private channel.</span>
            </h2>
            <p className="text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
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
                className={`p-5 sm:pr-6 ${i < hiwSteps.length - 1 ? 'sm:border-r border-[var(--color-border)]' : ''}`}
              >
                <div className="text-[11px] font-bold tracking-[0.08em] uppercase text-[var(--color-fg-subtle)] mb-3">{step.num}</div>
                <h4 className="text-base font-bold text-[var(--color-fg)] mb-2">{step.title}</h4>
                <p className="text-[13px] text-[var(--color-fg-muted)] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-gradient-to-br from-[var(--color-beige-lighter)] via-[var(--color-beige-light)] to-[var(--color-beige-lighter)] border-y border-[var(--color-primary)]/25 py-16 md:py-20 text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-fg)] mb-4 leading-[1.05]">
            One market.<br />
            <span className="text-[var(--color-primary)]">Full desk intelligence.</span>
          </h2>
          <p className="text-[var(--color-fg-muted)] text-base md:text-lg mb-8 leading-relaxed">
            Start with Index Options — the only live product. Others are being built and will open segment by segment.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/research-desk/inner-circle/index-options"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-bold tracking-[0.06em] uppercase px-7 py-4 rounded-lg transition-colors"
            >
              View Index Options Plans →
            </Link>
            <button
              type="button"
              onClick={openChannel}
              className="inline-flex items-center gap-2 border border-[var(--color-primary)] hover:bg-[var(--color-primary-tint)] text-[var(--color-primary)] text-sm font-semibold px-6 py-4 rounded-lg transition-colors cursor-pointer"
            >
              Start Free on Telegram
            </button>
          </div>
          <p className="text-xs text-[var(--color-fg-subtle)] mt-5">Not SEBI registered. Educational research only. Markets involve risk.</p>
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
            className="fixed inset-0 z-[200] bg-[rgba(10,10,10,0.45)] backdrop-blur-sm flex items-center justify-center px-4"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.22 }}
              className="relative bg-[var(--color-bg-card)] border border-[var(--color-primary)]/30 rounded-2xl p-8 sm:p-10 w-full max-w-md shadow-[0_4px_24px_rgba(10,10,10,0.06)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute top-4 right-5 text-[var(--color-fg-subtle)] hover:text-[var(--color-fg)] text-2xl leading-none transition-colors"
              >
                ×
              </button>

              {!submitted ? (
                <>
                  <h3 className="text-2xl font-bold text-[var(--color-fg)] mb-2">Stay in the loop</h3>
                  <p className="text-sm text-[var(--color-fg-muted)] mb-6">
                    We&apos;ll notify you when <span className="text-[var(--color-primary)] font-semibold">{notifyProduct}</span> opens for access.
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
                      className="w-full px-4 py-3 bg-white border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-white border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="WhatsApp number (optional)"
                      className="w-full px-4 py-3 bg-white border border-[var(--color-border)] focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/15 rounded-lg text-sm text-[var(--color-fg)] placeholder:text-[var(--color-fg-subtle)] outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-sm font-bold tracking-[0.06em] uppercase rounded-lg transition-colors mt-1"
                    >
                      Notify Me When It Opens
                    </button>
                  </form>
                  <p className="text-[11px] text-[var(--color-fg-subtle)] text-center mt-3">No spam. One email when it launches. That&apos;s it.</p>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-4xl mb-3">✓</div>
                  <h3 className="text-xl font-bold text-[var(--color-fg)] mb-2">Registered.</h3>
                  <p className="text-sm text-[var(--color-fg-muted)]">We&apos;ll reach you when this product goes live. No spam.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
