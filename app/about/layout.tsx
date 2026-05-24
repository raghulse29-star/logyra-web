import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Logyra Research',
  description:
    'Logyra Research is an institutional-grade market intelligence desk. Learn about our research process, framework, and the team building disciplined market thinking for serious participants.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Logyra Research',
    description:
      'Institutional-grade market intelligence built on research discipline, not opinions. Learn who we are and how we think.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About Logyra Research',
    description:
      'Institutional-grade market intelligence built on research discipline.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
