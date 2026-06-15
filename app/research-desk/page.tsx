'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const tickerItems = [
  'Nifty 50', 'Bank Nifty', 'Sensex', 'Index Options', 'Stock Options',
  'Equity', 'Commodity', 'XAUUSD', 'Forex Pairs', 'BTCUSD',
  'Crypto Markets', 'MCX Gold',
];

const openChannelFeatures = [
  'Pre-market briefs before 9:15 AM IST every trading day',
  'Market opening and closing summaries',
  'Mid-day context notes and market reads',
  'Educational trade setups and framework references',
  'Inner Circle performance visibility — track our desk daily',
  'Weekly structure reviews and sector reads',
  'Covers Indian, Forex, and Crypto markets',
];

const innerCircleFeatures = [
  'Full pre-market brief with complete context and positioning framework',
  '2–7 intraday educational setups during market hours',
  'Real-time market structure updates as conditions evolve',
  'EOD debrief — what happened, why, and what to watch next',
  'Weekly deep-dive review with sector and data analysis',
  'Priority access to the research team for framework clarifications',
  'Choose your market: Indian F&O, Forex, or Crypto',
];

type CellKind = 'yes' | 'partial' | 'no' | 'text';
const compareRows: { label: string; free: { kind: CellKind; text: string }; paid: { kind: CellKind; text: string } }[] = [
  { label: 'Access',             free: { kind: 'text',    text: 'Free, public Telegram' },        paid: { kind: 'text',    text: 'Paid, private Telegram' } },
  { label: 'Pre-Market Brief',   free: { kind: 'partial', text: 'Summary level' },                paid: { kind: 'yes',     text: 'Full context + framework' } },
  { label: 'Intraday Setups',    free: { kind: 'no',      text: 'Not delivered live' },           paid: { kind: 'yes',     text: '2–7 setups during market hours' } },
  { label: 'Posting Timing',     free: { kind: 'text',    text: 'Post-market (performance)' },    paid: { kind: 'text',    text: 'Real-time, during market hours' } },
  { label: 'EOD Debrief',        free: { kind: 'partial', text: 'Performance summary only' },     paid: { kind: 'yes',     text: 'Full debrief + next-session context' } },
  { label: 'Weekly Review',      free: { kind: 'partial', text: 'Open summary' },                 paid: { kind: 'yes',     text: 'Sector data + F&O analytics' } },
  { label: 'Research Team Access', free: { kind: 'no',    text: 'Not available' },                paid: { kind: 'yes',     text: 'Direct access, priority response' } },
  // { label: 'Markets Covered',    free: { kind: 'text',    text: 'All markets (reference)' },      paid: { kind: 'text',    text: 'Your chosen market — full depth' } },
  { label: 'Cost',               free: { kind: 'text',    text: '₹0 — Always free' },             paid: { kind: 'text',    text: 'From ₹3,399 / month (GST incl.)' } },
];

function Cell({ kind, text }: { kind: CellKind; text: string }) {
  if (kind === 'text') return <span className="text-[var(--color-fg-muted)] text-xs md:text-sm">{text}</span>;
  const styles = {
    yes:     { bg: 'bg-[var(--color-primary)]/15', stroke: '#3F8B5F', icon: <polyline points="20 6 9 17 4 12" /> },
    partial: { bg: 'bg-[var(--color-accent)]/10', stroke: '#3F8B5F', icon: <path d="M5 12h14" /> },
    no:      { bg: 'bg-[var(--color-error)]/12', stroke: '#e05555', icon: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> },
  }[kind];
  return (
    <span className="inline-flex items-start gap-2 text-[var(--color-fg-muted)] text-xs md:text-sm">
      <span className={`inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full ${styles.bg} shrink-0 mt-0.5`}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={styles.stroke} strokeWidth="2.5">
          {styles.icon}
        </svg>
      </span>
      <span>{text}</span>
    </span>
  );
}

export default function ResearchDeskPage() {
  return (
    <main className="font-sans bg-[var(--color-bg)]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[var(--color-bg-card)] pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[var(--color-primary)]/5 blur-[140px] rounded-full" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-accent)] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              Research Desk
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-fg)] leading-[1.08] mb-5 max-w-3xl"
          >
            We Read the Market.<br />
            <span className="text-[var(--color-primary)]">You Decide What to Do With It.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[var(--color-fg-muted)] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            Every market day, our desk publishes analysis across Indian Equity, Derivatives &amp; Commodity, Forex, and Crypto — free for those exploring, private for those who trade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/research-desk/open-channel"
              className="inline-flex items-center justify-center text-[12px] font-bold tracking-[0.12em] uppercase border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary-tint)] px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              Explore Free Channel
            </Link>
            <Link
              href="/research-desk/inner-circle"
              className="inline-flex items-center justify-center text-[12px] font-bold tracking-[0.12em] uppercase bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              View Inner Circle
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Markets Ticker ── */}
      <div id="markets" className="bg-[var(--color-beige-light)] border-y border-[var(--color-border)] py-7 overflow-hidden relative scroll-mt-28">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[var(--color-beige-light)] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[var(--color-beige-light)] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 text-[13px] font-semibold text-[var(--color-fg-muted)] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]" />
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ── Two Tiers ── */}
      <section className="bg-white pt-14 pb-10 md:pt-20 md:pb-12 lg:pt-28 lg:pb-16" id="tiers">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Two Tiers. One Framework</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-fg)] mb-4">
              Start with the open feed.<br />
              <span className="text-[var(--color-primary)]">Move inside when the depth matters.</span>
            </h2>
            <p className="text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              Same framework. Same desk. What&apos;s different: how much you see, and when you see it.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Open Channel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col p-8 sm:p-10 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl hover:border-[var(--color-primary)]/30 transition-all duration-300"
              style={{ boxShadow: '0 4px 24px rgba(10,10,10,0.06)' }}
            >
              <span className="inline-flex items-center gap-2 self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm bg-[var(--color-primary)]/12 border border-[var(--color-primary)]/25 text-[var(--color-primary)] mb-6">
                Free · Open · Always On
              </span>
              <div className="w-12 h-12 rounded-xl bg-[var(--color-beige-lighter)] border border-[var(--color-border)] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3F8B5F" strokeWidth="1.8">
                  <path d="M21 5L2 12.5L9 13.5M21 5L18.5 19L9 13.5M21 5L9 13.5M9 13.5V19L12.2 16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-fg)] mb-2">Open Channel</h3>
              <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed mb-6">
                Our open intelligence feed. Daily market reads, educational setups, and desk performance — visible to anyone. Zero cost. Zero noise.
              </p>
              <div className="h-px bg-[var(--color-border)] mb-6" />
              <ul className="space-y-3 mb-8 flex-1">
                {openChannelFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-fg-muted)]">
                    <span className="text-[var(--color-primary)] shrink-0 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/research-desk/open-channel"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-[var(--color-primary)] hover:bg-[var(--color-primary-tint)] text-[var(--color-primary)] text-[12px] font-bold tracking-[0.15em] uppercase rounded-lg transition-colors"
              >
                Explore Open Channel
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>

            {/* Inner Circle */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative flex flex-col p-8 sm:p-10 bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-beige-lighter)] border border-[var(--color-primary)]/40 rounded-2xl hover:border-[var(--color-primary)] transition-all duration-300 overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(63,139,95,0.10)' }}
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[var(--color-primary)]" />
              <span className="inline-flex items-center gap-2 self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm bg-[var(--color-accent)]/15 border border-[var(--color-accent)]/35 text-[var(--color-primary)] mb-6">
                Paid · Private · Daily Research
              </span>
              <div className="w-12 h-12 rounded-xl bg-[var(--color-beige-lighter)] border border-[var(--color-border)] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3F8B5F" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-fg)] mb-2">Inner Circle</h3>
              <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed mb-6">
                Private access. Real-time depth. Every setup the desk identifies — delivered to your Telegram as it happens, not after the fact.
              </p>
              <div className="h-px bg-[var(--color-border)] mb-6" />
              <ul className="space-y-3 mb-8 flex-1">
                {innerCircleFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[var(--color-fg-muted)]">
                    <span className="text-[var(--color-primary)] shrink-0 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/research-desk/inner-circle"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white text-[12px] font-bold tracking-[0.15em] uppercase rounded-lg transition-colors"
              >
                Join Inner Circle
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-[var(--color-grey-section)] pt-12 pb-14 md:pt-14 md:pb-20 lg:pt-16 lg:pb-28" id="compare">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Tier Comparison</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-fg)] mb-4">
              What&apos;s the<br />
              <span className="text-[var(--color-primary)]">actual difference?</span>
            </h2>
            <p className="text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              Both tiers share the same research framework. What changes is depth, timing, and how much of the desk&apos;s work you see.
            </p>
          </div>

          <p className="text-sm md:text-[15px] text-[var(--color-fg-muted)] max-w-2xl leading-relaxed mb-6 border-l-2 border-[var(--color-primary)] pl-4">
            Open Channel content is intentionally delayed and partial. It exists to demonstrate the quality and consistency of our research — not replace it.
          </p>

          <div className="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-card)] overflow-x-auto" style={{ boxShadow: '0 4px 24px rgba(10,10,10,0.06)' }}>
            <div className="min-w-[560px]">
              {/* Header row */}
              <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-[var(--color-beige-lighter)] text-[10px] md:text-[11px] font-bold tracking-[0.12em] uppercase">
                <div className="px-3 py-3 md:px-6 md:py-5 text-[var(--color-fg-subtle)]" />
                <div className="px-3 py-3 md:px-6 md:py-5 text-[var(--color-primary)] border-l border-[var(--color-border)]">Open Channel</div>
                <div className="px-3 py-3 md:px-6 md:py-5 text-[var(--color-primary)] border-l border-[var(--color-border)]">Inner Circle</div>
              </div>
              {compareRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.1fr_1fr_1fr] border-t border-[var(--color-border)]"
                >
                  <div className="px-3 py-3 md:px-6 md:py-5 text-[var(--color-fg)] text-xs md:text-sm font-medium">
                    {row.label}
                  </div>
                  <div className="px-3 py-3 md:px-6 md:py-5 border-l border-[var(--color-border)]">
                    <Cell kind={row.free.kind} text={row.free.text} />
                  </div>
                  <div className="px-3 py-3 md:px-6 md:py-5 border-l border-[var(--color-border)]">
                    <Cell kind={row.paid.kind} text={row.paid.text} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Is It For ── */}
      <section className="bg-white py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-primary)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Who Is This For</span>
              <div className="flex-1 h-px bg-[var(--color-border)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-fg)] mb-4">
              Where are you<br />
              <span className="text-[var(--color-primary)]">right now?</span>
            </h2>
            <p className="text-[var(--color-fg-muted)] max-w-xl leading-relaxed">
              Both require the same commitment — to read the market correctly, not to follow instructions. Choose based on where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Open Channel is for you if…',
                desc: 'You\'re not ready to commit yet — and that\'s fine. The open channel is where you verify us before you trust us.',
                dot: '#3F8B5F',
                points: [
                  'You\'re exploring structured market analysis for the first time',
                  'You want to track Logyra\'s performance before subscribing',
                  'You trade part-time or are building foundational market literacy',
                  'You follow Indian, Forex, or Crypto markets but need consistent context',
                  'You want zero-noise, zero-hype market reading as a daily reference',
                ],
                cta: { href: '/research-desk/open-channel', label: 'Explore Open Channel →' },
              },
              {
                title: 'Inner Circle is for you if…',
                desc: 'You trade. You have your own execution process. You need the desk\'s full read & live trade setups, reference and data — before the market opens and when it\'s live, not after it closes.',
                dot: '#3F8B5F',
                points: [
                  'You trade actively and need intraday structure and positioning context',
                  'You want to see every setup the desk identifies — not just the summary',
                  'You require pre-market clarity before 9:15 AM every day',
                  'You value direct access to the research team for framework questions',
                  'You understand that research informs — it does not replace your judgment',
                ],
                cta: { href: '/research-desk/inner-circle', label: 'View Inner Circle →' },
              },
            ].map((persona, i) => (
              <motion.div
                key={persona.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8"
                style={{ boxShadow: '0 4px 24px rgba(10,10,10,0.06)' }}
              >
                <h3 className="text-xl font-bold text-[var(--color-fg)] mb-3">{persona.title}</h3>
                <p className="text-[var(--color-fg-muted)] text-sm leading-relaxed mb-6">{persona.desc}</p>
                <ul className="space-y-2.5">
                  {persona.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-[var(--color-fg-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: persona.dot }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={persona.cta.href}
                  className="inline-flex items-center gap-2 mt-7 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] text-[12px] font-bold tracking-[0.12em] uppercase transition-colors"
                >
                  {persona.cta.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
