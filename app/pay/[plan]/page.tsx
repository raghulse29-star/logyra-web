'use client';

import { useParams, notFound } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';

const planConfig: Record<string, {
  label: string;
  price: string;
  duration: string;
  cashfreeUrl: string;
  features: string[];
}> = {
  monthly: {
    label: 'Monthly Plan',
    price: '₹3,399',
    duration: '1 month access',
    cashfreeUrl: 'https://payments.cashfree.com/forms/logyra-fno-1month',
    features: ['Daily F&O pre-market brief', 'Intraday educational context', 'Private Telegram channel', 'Weekly review notes'],
  },
  quarterly: {
    label: 'Quarterly Plan',
    price: '₹6,699',
    duration: '3 months access',
    cashfreeUrl: 'https://payments.cashfree.com/forms/logyra-fno-3month',
    features: ['Everything in monthly', 'Market structure walkthroughs', 'Sector rotation analysis', 'Priority support'],
  },
  'half-yearly': {
    label: 'Half-Yearly Plan',
    price: '₹9,990',
    duration: '6 months access',
    cashfreeUrl: 'https://payments.cashfree.com/forms?code=logyra-fno-6month',
    features: ['Everything in quarterly', 'Monthly deep-dive report', 'Early access to new modules', 'Direct researcher access'],
  },
};

export default function PayPage() {
  const params = useParams();
  const plan = params.plan as string;
  const config = planConfig[plan];
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  if (!config) return notFound();

  return (
    <div className="min-h-screen bg-[#111315] font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 flex flex-col">

        {/* Top bar with plan summary */}
        <div className="bg-[#18261b] border-b border-white/[0.07]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <Link href="/research-desk/inner-circle/index-options#plans" className="text-gray-400 hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </Link>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B8FD4B] text-[10px] font-bold tracking-[0.15em] uppercase">F&O Inner Circle</span>
                  <span className="text-gray-600 text-[10px]">·</span>
                  <span className="text-gray-400 text-[10px] tracking-wide">{config.label}</span>
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <span className="text-white font-bold text-lg">{config.price}</span>
                  <span className="text-gray-500 text-xs">Incl. GST · {config.duration}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {config.features.slice(0, 2).map(f => (
                <span key={f} className="text-[10px] text-gray-400 border border-white/[0.08] px-2 py-1 rounded-sm">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Payment iframe area */}
        <div className="flex-1 relative pt-4 pb-8 px-4 sm:px-8 md:px-16 lg:px-32 bg-[#0d1610]">
          {/* Loading shimmer */}
          {!iframeLoaded && !iframeError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#111315]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-8 h-8 border-2 border-[#6bc28b]/30 border-t-[#6bc28b] rounded-full"
              />
              <p className="text-gray-500 text-sm">Loading payment form…</p>
            </div>
          )}

          {/* Iframe error fallback */}
          {iframeError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-4 bg-[#111315]">
              <div className="text-center max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[#B8FD4B]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B8FD4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">Complete your payment</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Click below to open the secure payment page for{' '}
                  <span className="text-white">{config.label}</span> at{' '}
                  <span className="text-[#6bc28b]">{config.price}</span>.
                </p>
                <a
                  href={config.cashfreeUrl}
                  className="inline-block bg-[#6bc28b] text-[#0d1a10] font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-[#B8FD4B] transition-colors"
                >
                  Proceed to Payment →
                </a>
              </div>
            </div>
          )}

          <iframe
            src={config.cashfreeUrl}
            className={`w-full rounded-xl transition-opacity duration-300 ${iframeLoaded && !iframeError ? 'opacity-100' : 'opacity-0'}`}
            style={{ height: 'max(calc(100dvh - 80px), 900px)', border: 'none' }}
            title={`Payment — ${config.label}`}
            onLoad={() => setIframeLoaded(true)}
            onError={() => { setIframeError(true); setIframeLoaded(true); }}
            allow="payment"
          />
        </div>

      </main>
    </div>
  );
}
