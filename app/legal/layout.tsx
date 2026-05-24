import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal, Terms & Disclaimers',
  description:
    'Logyra Research legal terms, disclaimers, intellectual property notice, and content usage policies for the Open Channel and Inner Circle subscriptions.',
  alternates: { canonical: '/legal' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': 0 },
  },
  openGraph: {
    title: 'Legal & Terms — Logyra Research',
    description:
      'Terms, disclaimers, and content policies for Logyra Research subscribers.',
    url: '/legal',
    type: 'website',
  },
};

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
