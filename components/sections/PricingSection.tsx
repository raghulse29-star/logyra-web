'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    num: '01',
    label: 'Monthly',
    price: '3,399',
    duration: '1 month access',
    savings: null,
    badge: null,
    featured: false,
    payLink: '/pay/monthly',
    features: ['Daily F&O pre-market brief', 'Intraday educational context', 'Private Telegram channel', 'Weekly review notes'],
  },
  {
    num: '02',
    label: 'Quarterly',
    price: '6,699',
    duration: '3 months access',
    savings: 'Save ₹3,498 vs monthly',
    badge: 'MOST CHOSEN',
    featured: true,
    payLink: '/pay/quarterly',
    features: ['Everything in monthly', 'Market structure walkthroughs', 'Sector rotation analysis', 'Priority support'],
  },
  {
    num: '03',
    label: 'Half-Yearly',
    price: '9,990',
    duration: '6 months access',
    savings: 'Save ₹10,404 vs monthly',
    badge: null,
    featured: false,
    payLink: '/pay/half-yearly',
    features: ['Everything in quarterly', 'Monthly deep-dive report', 'Early access to new modules', 'Direct researcher access'],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-[#111315] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        <div className="mb-14">
          <div className="flex items-center gap-4 mb-5">
            <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap">Subscription Plans</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Choose your access,{' '}
            <span className="text-[#6bc28b]">start learning today.</span>
          </h2>
          <p className="text-gray-400 max-w-xl leading-relaxed">
            Unlock institutional-grade F&amp;O research and pre-market briefs. All plans include private Telegram access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-white/[0.08] rounded-xl overflow-hidden">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.num}
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

              <div className={`text-[11px] font-medium tracking-[0.12em] uppercase mb-5 text-gray-500 ${plan.badge ? 'mt-5' : ''}`}>
                {plan.num} — {plan.label}
              </div>

              <div className="text-5xl font-bold text-white mb-1">₹{plan.price}</div>
              <div className="text-xs text-gray-500 mb-6">Incl. GST · {plan.duration}</div>

              {plan.savings ? (
                <div className="self-start text-[9px] font-bold tracking-[0.12em] uppercase px-3 py-1.5 mb-6 border border-[#B8FD4B]/30 text-[#B8FD4B] bg-[#B8FD4B]/5 rounded-sm">
                  {plan.savings}
                </div>
              ) : (
                <div className="mb-6" />
              )}

              <ul className="space-y-0 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm py-3 border-b border-white/[0.07] text-gray-300">
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

        <p className="text-center text-gray-500 text-xs mt-6 tracking-wide">
          All plans include access to the private F&amp;O research channel.{' '}
          <Link href="/inner-circle#plans" className="text-[#6bc28b] hover:underline">
            View full plan details →
          </Link>
        </p>
      </div>
    </section>
  );
}
