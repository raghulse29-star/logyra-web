import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Index Options Research — Nifty & Bank Nifty F&O',
  description:
    'Daily Nifty 50 & Bank Nifty options research: options-chain analysis, OI buildup, max pain, IV regime reads, futures structure, and sector rotation — delivered to private Telegram every market day.',
  keywords: [
    'Nifty options research',
    'Bank Nifty research',
    'index options strategy',
    'options chain analysis',
    'open interest analysis',
    'F&O research India',
    'IV analysis Nifty',
  ],
  alternates: { canonical: '/research-desk/inner-circle/index-options' },
  openGraph: {
    title: 'Index Options Research — Nifty & Bank Nifty F&O',
    description:
      'Daily F&O research on Nifty and Bank Nifty — options chain, OI, IV, and futures structure.',
    url: '/research-desk/inner-circle/index-options',
    type: 'website',
  },
  twitter: {
    title: 'Index Options Research — Nifty & Bank Nifty',
    description: 'Daily F&O research on India\'s index options.',
  },
};

export default function IndexOptionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
