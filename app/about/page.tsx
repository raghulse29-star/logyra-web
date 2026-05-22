'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const beliefs = [
  {
    num: '01',
    title: 'Markets have structure. Most participants never see it.',
    desc: 'Price does not move randomly. It moves through liquidity zones, order blocks, and institutional positioning — structures that repeat, that can be documented, and that can be learned. The gap between retail loss and institutional consistency is not luck. It is structural understanding. That is what Logyra is built to deliver.',
  },
  {
    num: '02',
    title: 'Information without framework is noise.',
    desc: 'There is no shortage of market data. There is a severe shortage of processed, contextualised, framework-grounded intelligence. A data point means nothing without the structural context that tells you why it matters. Every Logyra research brief is built on this — data read through a documented analytical framework, not broadcast raw.',
  },
  {
    num: '03',
    title: 'The goal is thinking, not dependency.',
    desc: 'A participant who follows instructions will always need someone to follow. A participant who learns to read structure operates independently. Logyra is not in the business of creating dependency. Every research brief, every educational setup, every framework note is designed to build a participant\'s ability to think — not replace it.',
  },
  {
    num: '04',
    title: 'Discipline is the only edge that compounds.',
    desc: 'No methodology works without execution discipline. No research is valuable without a participant who applies it consistently. Markets reward process-driven participants over outcome-chasing ones — across every time frame, every asset class, every cycle. Logyra\'s research is built around this reality, not against it.',
  },
  {
    num: '05',
    title: 'Honesty about what research can and cannot do.',
    desc: 'We do not make performance claims. We do not promise outcomes. We do not frame past research as evidence of future results. Markets involve risk — and serious participants know this. Logyra\'s role is to sharpen the thinking that goes into decisions, not to manufacture confidence in the absence of it.',
  },
];

const numbers = [
  { val: '12,000+', label: 'Participants reached through structured market education' },
  { val: '5+',      label: 'Years of active research framework development across markets' },
  { val: '3',       label: 'Asset classes covered under one unified research architecture' },
  { val: '₹0',      label: 'Performance guaranteed. Ever. By design.' },
];

const coverageCards = [
  {
    title: 'Indian F&O Markets',
    desc: 'Index options and stock options research — Nifty 50, Bank Nifty, and Sensex. Open interest analysis, IV context, PCR reads, and options chain interpretation delivered every market day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
    ),
  },
  {
    title: 'Indian Equity & Commodity',
    desc: 'Equity market structure coverage and sector rotation analysis. MCX commodity research — gold, silver, crude oil — aligned to Indian commodity market hours and institutional positioning data.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
    ),
  },
  {
    title: 'Forex & Global Metals',
    desc: 'London and New York session coverage for Indian participants — XAUUSD, major currency pairs, and DXY structure analysis. IST-timed delivery using the SMC/ICT analytical framework.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
    ),
  },
  {
    title: 'Digital Assets',
    desc: 'Bitcoin and major altcoin market structure research — on-chain context, liquidity zone mapping, and structural analysis for participants who approach crypto with the same discipline as traditional markets.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#6bc28b" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
    ),
  },
];

const pillars = [
  { title: 'Process Repeatability', desc: 'Every analysis follows the same documented framework — regardless of market condition, volatility regime, or outcome. Consistency of process is the only thing that can be controlled.' },
  { title: 'Data Over Opinion',     desc: 'Research briefs are grounded in derivative data, order flow, and structural reads — not personal market sentiment or analyst opinion. The data speaks. We contextualise it.' },
  { title: 'Institutional Framing', desc: 'Logyra reads markets the way institutional desks do — through liquidity, positioning, and structural logic — and delivers that reading in a format accessible to individual participants.' },
  { title: 'Zero Performance Claims', desc: 'Logyra has never published an accuracy percentage, a profit claim, or a performance guarantee. We do not start now. Our credibility rests on consistency of research quality — nothing else.' },
  { title: 'Execution Independence', desc: 'Research informs. It does not instruct. Every subscriber is expected to apply their own judgment, manage their own risk, and take full responsibility for their execution decisions.' },
  { title: 'Daily Delivery',         desc: 'Market intelligence has no value without consistency. Logyra delivers structured research every market day — across Indian, Forex, and Crypto sessions — without exception.' },
];

const truthIs = [
  'A market intelligence and research platform for independent participants',
  'An educational platform built on a documented institutional research framework',
  'A daily structured intelligence delivery service across three asset classes',
  'A skill-transfer environment — building independent thinking, not dependency',
  'A zero-hype, zero-claim, process-first research organisation',
];

const truthIsNot = [
  'Not a SEBI-registered investment advisor or research analyst',
  'Not a signal-selling, tip-sharing, or trade-calling service',
  'Not a profit-guarantee or return-promise platform',
  'Not a copy-trade or portfolio management service',
  'Not built for participants who want instructions instead of understanding',
];

export default function AboutPage() {
  return (
    <main className="font-sans bg-[#0a0f0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative bg-[#111711] pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#6bc28b]/5 blur-[140px] rounded-full" />
          <div className="absolute top-0 right-[10%] w-[320px] h-[320px] bg-[#6bc28b]/4 blur-[120px] rounded-full" />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-9"
          >
            <span className="inline-flex items-center gap-2 border border-[#6bc28b]/30 bg-[#17221a] text-[#6bc28b] text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6bc28b] animate-pulse" />
              About Logyra Research
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-8 max-w-3xl"
          >
            Built to read<br />
            the market.<br />
            <span className="text-[#6bc28b]">Not to follow it.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base md:text-lg max-w-2xl leading-relaxed mb-12"
          >
            Logyra Research is a market intelligence platform — built on the conviction that structured thinking beats reactive trading, and that every serious participant deserves access to institutional-grade research without the noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-14 h-[3px] bg-[#6bc28b] rounded-sm mb-12 origin-left"
          />

          <motion.blockquote
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-[720px] border-l-2 border-[#6bc28b] pl-7"
          >
            <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-snug text-gray-300 tracking-tight">
              <span className="text-white font-bold">Most participants lose not because they lack information</span> — they lose because they have too much of the wrong kind. Unstructured data. Borrowed opinions. Reactive decisions. We were built to fix that. <span className="text-white font-bold">Not with more information. With better thinking.</span>
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* ── What We Believe ── */}
      <section className="bg-[#0a0f0a] py-16 md:py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Our Conviction</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
              What we<br />
              <span className="text-[#6bc28b]">actually believe.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              These are not values on a wall. They are operational principles that determine what we publish, how we write it, and who we build it for.
            </p>
          </div>

          <div className="max-w-[860px] border-t border-white/[0.07]">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-5 sm:gap-7 py-8 sm:py-9 border-b border-white/[0.07]"
              >
                <div className="text-[13px] font-bold text-gray-500 tracking-[0.08em] pt-1">{b.num}</div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-white mb-2.5 leading-snug">{b.title}</h3>
                  <p className="text-[15px] text-gray-400 leading-[1.75]">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Numbers ── */}
      <section className="bg-[#111711] py-16 md:py-24 lg:py-28 border-y border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Track Record</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
              Numbers that<br />
              <span className="text-[#6bc28b]">were built, not announced.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The only metric Logyra has never published is a performance guarantee — because we do not make one.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[900px] border border-white/[0.08] rounded-xl overflow-hidden bg-[#17221a]">
            {numbers.map((n, i) => (
              <motion.div
                key={n.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`relative p-8 sm:p-10 group hover:bg-[#1c2c1c] transition-colors ${
                  i < 3 ? 'border-b sm:border-b-0 lg:border-b-0 sm:border-r border-white/[0.07]' : ''
                } ${i < 2 ? 'sm:border-b lg:border-b-0 border-white/[0.07]' : ''}`}
              >
                <span className="absolute top-0 left-0 right-0 h-[2px] bg-[#6bc28b] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#6bc28b] tracking-tight leading-none mb-3">{n.val}</div>
                <div className="text-[13px] text-gray-400 leading-[1.55]">{n.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Cover ── */}
      <section className="bg-[#0a0f0a] py-16 md:py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Research Coverage</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
              One framework.<br />
              <span className="text-[#6bc28b]">Every market.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The Logyra research architecture is applied uniformly across all asset classes. The framework does not change with the market — only the instrument does.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px]">
            {coverageCards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-[#17221a] border border-white/[0.07] hover:border-[#6bc28b]/30 hover:-translate-y-0.5 transition-all duration-300 rounded-xl p-7 sm:p-8"
              >
                <div className="w-11 h-11 rounded-lg bg-[#111711] border border-white/[0.08] flex items-center justify-center mb-5">
                  <div className="w-5 h-5">{c.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-[1.65]">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Philosophy ── */}
      <section className="bg-[#111711] py-16 md:py-24 lg:py-28 border-y border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Research Philosophy</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
              How we<br />
              <span className="text-[#6bc28b]">read the market.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              The Logyra framework is not a strategy. It is a structured way of understanding what the market is doing — and why — before forming any view on what it might do next.
            </p>
          </div>

          <div className="max-w-[820px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-extrabold leading-snug tracking-tight text-white mb-8"
            >
              We study <span className="text-[#6bc28b]">liquidity, order flow,</span> and market structure.<br />
              Not sentiment. Not headlines. Not retail opinion.
            </motion.p>
            <p className="text-base text-gray-400 leading-[1.75] mb-6">
              Every research brief Logyra publishes is built on a documented analytical process — not intuition, not personal opinion, and not market sentiment. The framework draws from Smart Money Concepts and ICT methodology, applied consistently across all markets and all time frames.
            </p>
            <p className="text-base text-gray-400 leading-[1.75]">
              The output is not a recommendation. It is structured intelligence — context that allows a disciplined participant to form their own view, identify their own risk, and execute with their own judgment. That distinction is not a legal disclaimer. It is a design principle.
            </p>
          </div>

          {/* Core Pillars */}
          <div className="mt-16">
            <div className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Core Pillars</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[900px]">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                  className="bg-[#17221a] border border-white/[0.07] rounded-xl p-7"
                >
                  <div className="w-8 h-[3px] bg-[#6bc28b] rounded-sm mb-5" />
                  <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-[13px] text-gray-400 leading-[1.65]">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IS / IS NOT ── */}
      <section className="bg-[#0a0f0a] py-16 md:py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Absolute Clarity</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
              What Logyra is.<br />
              <span className="text-[#6bc28b]">What it will never be.</span>
            </h2>
            <p className="text-gray-400 max-w-xl leading-relaxed">
              This is not a disclaimer. It is how we define ourselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="bg-[#17221a] border border-[#6bc28b]/25 rounded-2xl p-7 sm:p-9"
            >
              <div className="flex items-center gap-2 mb-6 text-[#6bc28b] text-[10px] font-bold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#6bc28b]" />
                What Logyra Research IS
              </div>
              <ul className="space-y-3.5">
                {truthIs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-[1.55]">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#1a0e0e] border border-[#e05555]/20 rounded-2xl p-7 sm:p-9"
            >
              <div className="flex items-center gap-2 mb-6 text-[#e05555] text-[10px] font-bold tracking-[0.12em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e05555]" />
                What Logyra Research IS NOT
              </div>
              <ul className="space-y-3.5">
                {truthIsNot.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300 leading-[1.55]">
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

      {/* ── CTA Band ── */}
      <section className="bg-gradient-to-br from-[#162416] via-[#1c2e1c] to-[#162016] border-y border-[#6bc28b]/25 py-16 md:py-24 text-center">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
            The research is live.<br />
            <span className="text-[#6bc28b]">Access starts free.</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-9 leading-relaxed max-w-[520px] mx-auto">
            Join the Open Channel at zero cost and track Logyra&apos;s research desk every day. Upgrade when you are ready.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://t.me/logyra_insights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6bc28b] hover:bg-[#B8FD4B] text-[#0d1a10] text-sm font-bold tracking-[0.06em] uppercase px-7 py-4 rounded-lg transition-colors"
            >
              Join Free on Telegram
            </a>
            <Link
              href="/research-desk/inner-circle"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#6bc28b] hover:text-[#6bc28b] text-gray-200 text-sm font-semibold px-6 py-4 rounded-lg transition-colors"
            >
              View Inner Circle →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
