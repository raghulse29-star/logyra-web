'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useOpenChannel } from '@/components/providers/OpenChannelProvider';

const sampleMessages = [
  {
    label: 'Pre-Market Brief',
    color: '#6bc28b',
    text: 'BankNifty shows strong put writing at 48,000. PCR trending bullish. SGX Nifty +0.4%. Bias: cautiously bullish above 47,800. Watch 48,200 resistance intraday.',
    time: '7:48 AM',
  },
  {
    label: 'Market Opening Brief',
    color: '#B8FD4B',
    text: 'Nifty gap-up open as expected. 22,150 acting as immediate resistance — IV crush likely post-open. Structure intact above 22,000. Await first 15-min range establishment.',
    time: '9:20 AM',
  },
  {
    label: 'EOD Performance Summary',
    color: '#7dd3fc',
    text: 'Inner Circle today: Index Options desk tracked 3 setups — 2 structured exits, 1 held for tomorrow. Desk bias maintained. Full debrief in private channel.',
    time: '3:48 PM',
  },
];

const whatsInside = [
  {
    time: '8:48 AM IST Daily',
    title: 'Pre-Market Brief',
    desc: 'Before the Indian market opens — global market wrap, SGX Nifty levels, key events of the day, and the structural bias our desk will operate with. Context before chaos.',
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  },
  {
    time: '9:20 AM IST Daily',
    title: 'Market Opening Brief',
    desc: 'Immediate post-open reading — the first 15 minutes decoded. Key levels, expected session move, bias confirmation or invalidation. Structure, not speculation.',
    icon: <><path d="M3 3h18v18H3zM8 12h8M12 8v8" /></>,
  },
  {
    time: '12:30 PM IST',
    title: 'Mid-Day Context Note',
    desc: 'Lunch-session market check. What\'s held, what\'s broken, what the afternoon setup looks like. Keeps you calibrated through the full session without noise.',
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  },
  {
    time: 'Educational · Ongoing',
    title: 'Reference Trade Setups',
    desc: 'Educational setups from our SMC/ICT framework — real market structures explained with context. Not tips. Framework transfers that help you read independently.',
    icon: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
  },
  {
    time: '3:48 PM IST Daily',
    title: 'Inner Circle Performance Report',
    desc: 'Every day — a post-market summary of what the Inner Circle desk tracked. Setups identified, how they played, and what the data says. Full transparency on our performance.',
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></>,
  },
  {
    time: 'Weekly + Occasional',
    title: 'Weekly Reviews & Community Sessions',
    desc: 'Weekly structure reviews, sector reads, and occasional awareness sessions — live discussions on market structure, framework application, and reader questions.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  },
];

const timeline = [
  { time: '8:48 AM',           title: 'Pre-Market Brief',          desc: 'Global wrap, SGX Nifty, key levels, and session bias before India opens.',                      badge: 'open' },
  { time: '9:20 AM',           title: 'Market Opening Brief',      desc: 'Post-open read — first 15-minute structure, levels, and bias confirmation.',                 badge: 'open' },
  { time: '9:15 AM – 3:30 PM', title: 'Live Trade Setups (Inner Circle)', desc: '2–7 real-time educational setups delivered during market hours — exclusively in the private channel.', badge: 'ic' },
  { time: '12:30 PM',          title: 'Mid-Day Context Note',      desc: 'Market check at lunch — what held, what broke, afternoon positioning context.',              badge: 'open' },
  { time: '3:48 PM',           title: 'EOD Performance Summary',   desc: 'The desk\'s full daily performance — every setup, every outcome. Visible in the open channel.', badge: 'open' },
  { time: 'Weekly',            title: 'Weekly Structure Review',   desc: 'Sector performance, F&O data, structural reads, and what to watch the following week.',     badge: 'open' },
];

const markets = [
  {
    dot: '#6bc28b',
    title: 'Indian Markets — F&O',
    desc: 'Daily index and stock options coverage — Nifty 50, Bank Nifty, and Sensex. OI analysis, PCR, IV context, and structural positioning explained.',
    tags: ['Nifty 50', 'Bank Nifty', 'Sensex', 'Stock Options', 'Index Futures'],
  },
  {
    dot: '#B8FD4B',
    title: 'Indian Equity & Commodity',
    desc: 'Equity market structure coverage, sector rotation reads, and Indian commodity market (MCX) analysis — Gold, Silver, Crude, and more.',
    tags: ['Equities', 'MCX Gold', 'MCX Silver', 'Crude Oil', 'Commodity F&O'],
  },
  {
    dot: '#7dd3fc',
    title: 'Forex — Global Currency & Metals',
    desc: 'London and NY session coverage. Major currency pairs, XAUUSD (Gold), and key global macro-driven setups — structured using SMC/ICT framework.',
    tags: ['XAUUSD', 'EURUSD', 'GBPUSD', 'DXY', 'USDJPY'],
  },
  {
    dot: '#fb923c',
    title: 'Crypto Markets',
    desc: 'Bitcoin and major altcoin structure reads — on-chain context, liquidity zone mapping, and market structure analysis for digital asset participants.',
    tags: ['BTCUSD', 'ETHUSD', 'Altcoin Structure', 'Crypto OI'],
  },
];

const whyJoin = [
  { num: '01', title: 'Zero Cost to Evaluate',        desc: 'Track our desk\'s research quality, consistency, and market reads — every day, without spending a rupee. The performance record is public.' },
  { num: '02', title: 'No Signal Dependency',         desc: 'We don\'t issue instructions. Every brief is structured to improve your reading ability — not replace it. You\'ll leave smarter, not more dependent.' },
  { num: '03', title: 'Institutional Framework',      desc: 'SMC/ICT methodology explained through real market setups — the same analytical lens used by institutional desks, accessible to any participant.' },
  { num: '04', title: 'Natural Path to Inner Circle', desc: 'The Open Channel is intentionally incomplete. When you\'re ready for real-time depth, the upgrade to Inner Circle is a single decision — no pressure.' },
];

const funnelSteps = [
  { num: '01', title: 'Join Free',              desc: 'Enter the Open Channel with zero cost. Start tracking daily briefs and performance reports.' },
  { num: '02', title: 'Track the Desk',         desc: 'Watch the EOD summaries. See how the Inner Circle performs. Build conviction through observation.' },
  { num: '03', title: 'Develop the Framework',  desc: 'Apply educational setups and framework references to your own market reading daily.' },
  { num: '04', title: 'Decide to Upgrade',      desc: 'When you want the full depth, real-time setups, and direct research access — Inner Circle is ready.' },
];

export default function OpenChannelPage() {
  const { open: openChannel } = useOpenChannel();

  return (
    <main className="font-sans bg-[var(--color-bg)]">
      <Navbar />

      {/* ── Breadcrumb ── */}
      <div className="bg-[var(--color-bg-section)] border-b border-white/[0.05] pt-24 sm:pt-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <span className="text-gray-700">›</span>
          <Link href="/research-desk" className="hover:text-[var(--color-primary)] transition-colors">Research Desk</Link>
          <span className="text-gray-700">›</span>
          <span className="text-gray-300">Open Channel</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[var(--color-bg-card)] pt-14 pb-14 md:pt-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[var(--color-primary)]/8 blur-[140px] rounded-full" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
                <span className="inline-flex items-center gap-2 border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-primary)] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                  Free · Open · Always On
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.08] mb-5"
              >
                The market,<br />
                read every day.<br />
                <span className="text-[var(--color-primary)]">Free. Always.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-8"
              >
                Logyra&apos;s Open Channel is a free public intelligence feed — structured market research, educational setups, and real-time performance visibility, delivered every trading day on Telegram.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-5"
              >
                <button
                  type="button"
                  onClick={openChannel}
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-[var(--color-fg-inverse)] text-[13px] font-bold tracking-[0.06em] uppercase px-6 py-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 5L2 12.5L9 13.5M21 5L18.5 19L9 13.5M21 5L9 13.5M9 13.5V19L12.2 16" />
                  </svg>
                  Join Free on Telegram
                </button>
                <a
                  href="#whats-inside"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-gray-200 text-[13px] font-bold tracking-[0.06em] uppercase px-6 py-3.5 rounded-lg transition-colors"
                >
                  See What&apos;s Inside
                </a>
              </motion.div>
              <p className="text-xs text-gray-500">₹0 · No credit card. No signup. Open to all.</p>
            </div>

            {/* Telegram preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#17222a] rounded-2xl border border-white/10 overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
                <div className="bg-[#1f2c3a] px-5 py-3.5 flex items-center gap-3 border-b border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#2e7d32] flex items-center justify-center font-bold text-white">L</div>
                  <div>
                    <div className="text-white text-sm font-semibold">Logyra Intelligence</div>
                    <div className="text-gray-500 text-xs">@logyra_insights</div>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5 text-[var(--color-primary)] text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                    Live
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  {sampleMessages.map((msg) => (
                    <div key={msg.label} className="bg-[#1f2f3e] rounded-xl rounded-bl-sm p-3.5">
                      <div className="text-[10px] font-bold tracking-[0.08em] uppercase mb-1.5" style={{ color: msg.color }}>{msg.label}</div>
                      <p className="text-gray-300 text-xs leading-relaxed">{msg.text}</p>
                      <div className="text-gray-500 text-[10px] mt-1.5 text-right">{msg.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── What's Inside ── */}
      <section id="whats-inside" className="bg-[var(--color-bg-card)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-accent)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">What&apos;s Inside</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Not updates.<br />
              <span className="text-[var(--color-primary)]">Structured intelligence.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Every piece of content in the Open Channel has a purpose — to help you read the market better, track our desk&apos;s performance, and understand what precision research actually looks like.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whatsInside.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-7 bg-[var(--color-bg-card)] border border-white/[0.06] rounded-xl hover:border-[var(--color-primary)]/30 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--color-bg-card)] border border-white/[0.08] flex items-center justify-center mb-5">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-2">{item.time}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily Timeline ── */}
      <section className="bg-[var(--color-bg-card)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-accent)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Daily Delivery Schedule</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Every session.<br />
              <span className="text-[var(--color-primary)]">From open to close.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The Open Channel runs on the same discipline as our desk. If the market is open, content is live. No exceptions, no off days.
            </p>
          </div>

          <div className="max-w-2xl">
            {timeline.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="grid grid-cols-[110px_1fr] gap-6 relative pb-8 last:pb-0"
              >
                {i < timeline.length - 1 && (
                  <span className="absolute left-[55px] top-12 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)]/40 to-transparent" />
                )}
                <div className="bg-[var(--color-bg-card)] border border-white/[0.07] rounded-lg h-11 flex items-center justify-center text-[11px] font-bold tracking-[0.04em] text-[var(--color-primary)] px-2 text-center leading-tight">
                  {item.time}
                </div>
                <div className="pt-1">
                  <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                  <span
                    className="inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-0.5 rounded-sm"
                    style={
                      item.badge === 'ic'
                        ? { background: 'rgba(184,253,75,0.1)', color: '#B8FD4B', border: '1px solid rgba(184,253,75,0.25)' }
                        : { background: 'rgba(107,194,139,0.12)', color: '#6bc28b', border: '1px solid rgba(107,194,139,0.25)' }
                    }
                  >
                    {item.badge === 'ic' ? 'Inner Circle Only' : 'Open Channel'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-8 italic">
            * For Forex and Crypto: same structure applies to London (IST 1:30 PM) and NY Sessions (IST 6:30 PM onwards).
          </p>
        </div>
      </section>

      {/* ── Markets ── */}
      <section className="bg-[var(--color-bg-card)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-accent)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Markets Covered</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              All markets.<br />
              <span className="text-[var(--color-primary)]">One channel.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The Open Channel covers all asset classes that Logyra tracks — Indian equities and derivatives, global Forex, metals, and crypto. Broad by design, so every type of participant finds relevant context.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {markets.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[var(--color-bg-card)] border border-white/[0.06] rounded-xl p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: m.dot }} />
                  <h3 className="text-lg font-bold text-white">{m.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-gray-400 bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="bg-[var(--color-bg-card)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-accent)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Why The Open Channel</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Built to earn your<br />
              <span className="text-[var(--color-primary)]">trust first.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              Every platform asks you to pay before you see anything. We built the Open Channel so you can watch us work — for free — before you decide if the Inner Circle is right for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyJoin.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[var(--color-bg-card)] border border-white/[0.06] rounded-xl p-7"
              >
                <div className="text-4xl font-bold text-[var(--color-primary)]/40 mb-3 leading-none">{item.num}</div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Funnel ── */}
      <section className="bg-[var(--color-bg-card)] py-14 md:py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[var(--color-accent)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">The Logyra Journey</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              From curious<br />
              <span className="text-[var(--color-primary)]">to convinced.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The Open Channel is designed as the natural first step. Most serious participants who join eventually upgrade — because they see the results, not because they were pushed.
            </p>
          </div>

          <div className="bg-[var(--color-bg-card)] border border-white/[0.06] rounded-2xl p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
              How participants move from <span className="text-[var(--color-primary)]">open → paid</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-2xl">
              No marketing pressure. No sales calls. The research quality does the work. This is how the journey typically looks:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              {funnelSteps.map((step, i) => (
                <div
                  key={step.num}
                  className={`relative p-5 text-center ${i < funnelSteps.length - 1 ? 'md:border-r border-white/[0.07]' : ''} ${i < funnelSteps.length - 2 ? 'border-b lg:border-b-0 border-white/[0.07]' : ''}`}
                >
                  <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{step.num}</div>
                  <h4 className="text-sm font-semibold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                  {i < funnelSteps.length - 1 && (
                    <span className="hidden md:inline-flex absolute right-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 bg-[var(--color-bg-card)] border border-white/[0.07] rounded-full items-center justify-center text-[var(--color-primary)] text-[10px] z-10">›</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section className="bg-gradient-to-br from-[var(--color-bg-card)] via-[var(--color-bg-elevated)] to-[var(--color-bg-card)] border-y border-[var(--color-primary)]/25 py-16 md:py-20 text-center">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-[1.05]">
            Start here.<br />
            <span className="text-[var(--color-primary)]">For free.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
            Join Logyra&apos;s Open Channel on Telegram — no cost, no catch, no noise. Just structured market intelligence, every trading day.
          </p>
          <button
            type="button"
            onClick={openChannel}
            className="inline-flex items-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-accent)] text-[var(--color-fg-inverse)] text-sm md:text-base font-bold tracking-[0.06em] uppercase px-8 py-4 rounded-lg transition-colors cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 5L2 12.5L9 13.5M21 5L18.5 19L9 13.5M21 5L9 13.5M9 13.5V19L12.2 16" />
            </svg>
            Join @logyra_insights on Telegram
          </button>
          <p className="text-xs text-gray-500 mt-5">
            Already convinced you want the full Inner Circle?{' '}
            <Link href="/research-desk/inner-circle" className="text-[var(--color-accent)] hover:text-[var(--color-primary)] font-semibold transition-colors">
              See Inner Circle Products →
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
