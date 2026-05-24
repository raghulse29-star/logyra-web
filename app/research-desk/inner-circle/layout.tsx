import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inner Circle — Private Daily Research on Telegram',
  description:
    'Logyra Inner Circle: private paid Telegram access with full pre-market briefs, 2–7 intraday educational setups, EOD debriefs, weekly deep-dive reviews, and priority research-desk access. Choose your market: F&O, Forex, or Crypto.',
  keywords: [
    'inner circle Telegram',
    'paid research India',
    'F&O research subscription',
    'intraday setups',
    'institutional research framework',
    'logyra inner circle',
  ],
  alternates: { canonical: '/research-desk/inner-circle' },
  openGraph: {
    title: 'Logyra Inner Circle — Private Daily Research',
    description:
      'Private Telegram access. Full pre-market briefs, intraday setups, and EOD debriefs every market day.',
    url: '/research-desk/inner-circle',
    type: 'website',
  },
  twitter: {
    title: 'Logyra Inner Circle — Private Daily Research',
    description: 'Private daily market research on Telegram for serious participants.',
  },
};

export default function InnerCircleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
