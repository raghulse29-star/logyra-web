import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Channel — Free Market Research on Telegram',
  description:
    'Logyra Open Channel: free, structured daily market briefs and educational research on Telegram. Pre-market reads, EOD wraps, and weekly reviews across Indian, Forex, and Crypto markets. ₹0 — always free.',
  keywords: [
    'free market research Telegram',
    'logyra open channel',
    'free trading channel India',
    'pre-market brief Telegram',
    'forex research free',
  ],
  alternates: { canonical: '/research-desk/open-channel' },
  openGraph: {
    title: 'Logyra Open Channel — Free Daily Market Research on Telegram',
    description:
      'Pre-market briefs, EOD wraps, and weekly reviews — free, on Telegram. Track our desk daily.',
    url: '/research-desk/open-channel',
    type: 'website',
  },
  twitter: {
    title: 'Logyra Open Channel — Free Market Research',
    description: 'Free daily structured market research on Telegram.',
  },
};

export default function OpenChannelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
