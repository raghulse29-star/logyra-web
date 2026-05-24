import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Desk — Market Intelligence Across Indian & Global Markets',
  description:
    'Logyra Research Desk delivers structured, institutional-grade market analysis across Indian equities, F&O, Forex, and Crypto — through a free Open Channel and a private Inner Circle tier.',
  keywords: [
    'market research India',
    'F&O research',
    'forex research',
    'crypto research',
    'pre-market brief',
    'intraday setups',
    'logyra research desk',
  ],
  alternates: { canonical: '/research-desk' },
  openGraph: {
    title: 'Logyra Research Desk — Two Levels of Market Intelligence',
    description:
      'Free Open Channel + private Inner Circle. Structured research across Indian equities, F&O, Forex, and Crypto.',
    url: '/research-desk',
    type: 'website',
  },
  twitter: {
    title: 'Logyra Research Desk',
    description:
      'Structured market intelligence across Indian and global markets.',
  },
};

export default function ResearchDeskLayout({ children }: { children: React.ReactNode }) {
  return children;
}
