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
  { label: 'Markets Covered',    free: { kind: 'text',    text: 'All markets (reference)' },      paid: { kind: 'text',    text: 'Your chosen market — full depth' } },
  { label: 'Cost',               free: { kind: 'text',    text: '₹0 — Always free' },             paid: { kind: 'text',    text: 'From ₹3,399 / month (GST incl.)' } },
];

function Cell({ kind, text }: { kind: CellKind; text: string }) {
  if (kind === 'text') return <span className="text-gray-300 text-sm">{text}</span>;
  const styles = {
    yes:     { bg: 'bg-[#6bc28b]/15', stroke: '#6bc28b', icon: <polyline points="20 6 9 17 4 12" /> },
    partial: { bg: 'bg-[#B8FD4B]/10', stroke: '#B8FD4B', icon: <path d="M5 12h14" /> },
    no:      { bg: 'bg-[#e05555]/12', stroke: '#e05555', icon: <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></> },
  }[kind];
  return (
    <span className="inline-flex items-center gap-2 text-gray-300 text-sm">
      <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${styles.bg} shrink-0`}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={styles.stroke} strokeWidth="2.5">
          {styles.icon}
        </svg>
      </span>
      {text}
    </span>
  );
}

export default function ResearchDeskPage() {
  return (
    <main className="font-sans bg-[#0a0f0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#18261b] pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#6bc28b]/8 blur-[140px] rounded-full" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 border border-[#2e3b30] bg-[#17221a] text-[#B8FD4B] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8FD4B] animate-pulse" />
              Research Desk
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5 max-w-3xl"
          >
            One platform.<br />
            Two levels of{' '}
            <span className="text-[#6bc28b]">market intelligence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10"
          >
            Logyra&apos;s Research Desk delivers structured, institutional-grade market analysis across Indian and global markets — through a free open channel and a private paid tier for serious participants.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {[
              { label: 'Open Channel',    href: '/research-desk/open-channel',  external: false },
              { label: 'Inner Circle',    href: '/research-desk/inner-circle',  external: false },
              { label: 'Compare Tiers',   href: '#compare',                     external: false, anchor: true },
              { label: 'Markets Covered', href: '#markets',                     external: false, anchor: true },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (!item.anchor) return;
                  e.preventDefault();
                  const el = document.getElementById(item.href.slice(1));
                  if (!el) return;
                  const navbar = window.innerWidth < 640 ? 80 : 96;
                  const top = el.getBoundingClientRect().top + window.scrollY - navbar - 16;
                  window.scrollTo({ top, behavior: 'smooth' });
                }}
                className="text-[12px] text-gray-300 border border-white/20 hover:border-[#6bc28b]/60 hover:text-[#6bc28b] px-3 py-1.5 rounded-sm transition-all duration-200 tracking-wide cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Markets Ticker ── */}
      <div id="markets" className="bg-[#111315] border-y border-white/[0.06] py-7 overflow-hidden relative scroll-mt-28">
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#111315] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#111315] to-transparent z-10 pointer-events-none" />
        <div className="flex animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((m, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 text-[13px] font-semibold text-gray-400 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6bc28b]" />
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ── Two Tiers ── */}
      <section className="bg-[#111315] py-14 md:py-20 lg:py-28" id="tiers">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Choose Your Access Level</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Start free.<br />
              <span className="text-[#6bc28b]">Upgrade when ready.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Both tiers deliver structured research. The difference is in depth, timing, and the level of direct engagement with our desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Open Channel */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col p-8 sm:p-10 bg-[#17221a] border border-white/[0.06] rounded-2xl hover:border-[#6bc28b]/30 transition-all duration-300"
            >
              <span className="inline-flex items-center gap-2 self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm bg-[#6bc28b]/12 border border-[#6bc28b]/25 text-[#6bc28b] mb-6">
                Free · Open · Always On
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#111d14] border border-white/[0.08] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8">
                  <path d="M21 5L2 12.5L9 13.5M21 5L18.5 19L9 13.5M21 5L9 13.5M9 13.5V19L12.2 16" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Open Channel</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Logyra&apos;s public intelligence feed — daily market reads, educational setups, and performance visibility. Zero cost. Zero noise.
              </p>
              <div className="h-px bg-white/[0.07] mb-6" />
              <ul className="space-y-3 mb-8 flex-1">
                {openChannelFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-[#6bc28b] shrink-0 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/research-desk/open-channel"
                className="flex items-center justify-center gap-2 w-full py-3.5 border border-white/20 hover:border-[#6bc28b] hover:text-[#6bc28b] text-gray-200 text-[12px] font-bold tracking-[0.15em] uppercase rounded-lg transition-colors"
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
              className="relative flex flex-col p-8 sm:p-10 bg-gradient-to-br from-[#17221a] to-[#1c2e1c] border border-[#6bc28b]/40 rounded-2xl hover:border-[#6bc28b] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#6bc28b]" />
              <span className="inline-flex items-center gap-2 self-start text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-sm bg-[#B8FD4B]/10 border border-[#B8FD4B]/25 text-[#B8FD4B] mb-6">
                Paid · Private · Daily Research
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#111d14] border border-white/[0.08] flex items-center justify-center mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#B8FD4B" strokeWidth="1.8">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Inner Circle</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Private Telegram access. Full research depth. Real-time market structure coverage across your chosen market — every market day.
              </p>
              <div className="h-px bg-white/[0.07] mb-6" />
              <ul className="space-y-3 mb-8 flex-1">
                {innerCircleFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <span className="text-[#6bc28b] shrink-0 mt-0.5">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/research-desk/inner-circle"
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#6bc28b] hover:bg-[#B8FD4B] text-[#0d1a10] text-[12px] font-bold tracking-[0.15em] uppercase rounded-lg transition-colors"
              >
                View Inner Circle Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="bg-[#18261b] py-14 md:py-20 lg:py-28" id="compare">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Tier Comparison</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What&apos;s the<br />
              <span className="text-[#6bc28b]">actual difference?</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Both tiers share the same research framework. What changes is depth, timing, and how much of the desk&apos;s work you see.
            </p>
          </div>

          <div className="border border-white/[0.08] rounded-xl overflow-hidden bg-[#111d14]">
            {/* Header row */}
            <div className="hidden md:grid grid-cols-[1.2fr_1fr_1fr] bg-[#17221a] text-[11px] font-bold tracking-[0.12em] uppercase">
              <div className="px-6 py-5 text-gray-500" />
              <div className="px-6 py-5 text-[#6bc28b]">Open Channel</div>
              <div className="px-6 py-5 text-[#B8FD4B]">Inner Circle</div>
            </div>
            {compareRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] ${i > 0 ? 'border-t border-white/[0.07]' : ''}`}
              >
                <div className="px-6 py-4 md:py-5 text-white text-sm font-medium bg-[#17221a]/40 md:bg-transparent">
                  {row.label}
                </div>
                <div className="px-6 py-3 md:py-5 border-t md:border-t-0 md:border-l border-white/[0.05]">
                  <div className="md:hidden text-[10px] font-bold tracking-[0.12em] uppercase text-[#6bc28b] mb-1.5">Open Channel</div>
                  <Cell kind={row.free.kind} text={row.free.text} />
                </div>
                <div className="px-6 py-3 md:py-5 border-t md:border-t-0 md:border-l border-white/[0.05]">
                  <div className="md:hidden text-[10px] font-bold tracking-[0.12em] uppercase text-[#B8FD4B] mb-1.5">Inner Circle</div>
                  <Cell kind={row.paid.kind} text={row.paid.text} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4 italic">
            * Open Channel content is intentionally delayed and partial. It exists to demonstrate the quality and consistency of our research — not replace it.
          </p>
        </div>
      </section>

      {/* ── Who Is It For ── */}
      <section className="bg-[#111315] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Self-Qualify</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Which tier<br />
              <span className="text-[#6bc28b]">is right for you?</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Both require the same commitment — to read the market correctly, not to follow instructions. Choose based on where you are.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Open Channel is for you if…',
                desc: 'You want to understand how institutional research works, track our desk\'s performance, and build market awareness before committing to a paid channel.',
                dot: '#6bc28b',
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
                desc: 'You are an active market participant who needs real-time structured research delivered to your private Telegram — and you operate with your own execution discipline.',
                dot: '#B8FD4B',
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
                className="bg-[#17221a] border border-white/[0.06] rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-3">{persona.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{persona.desc}</p>
                <ul className="space-y-2.5">
                  {persona.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: persona.dot }} />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={persona.cta.href}
                  className="inline-flex items-center gap-2 mt-7 text-[#6bc28b] hover:text-[#B8FD4B] text-[12px] font-bold tracking-[0.12em] uppercase transition-colors"
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
