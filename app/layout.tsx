import type { Metadata } from 'next';
import '@/styles/globals.css';
import OpenChannelProvider from '@/components/providers/OpenChannelProvider';
import { SITE_URL, IS_PRODUCTION_HOST } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Logyra Research | Think Like the Market Moves',
    template: '%s | Logyra Research',
  },
  description:
    'Logyra Research delivers institutional-grade market intelligence, forex research, data-driven strategies, and real-time trade insights to traders at every level.',
  keywords: [
    'forex research',
    'market analysis',
    'trade intelligence',
    'logyra',
    'logyra research',
    'stock market research',
    'trading strategies',
    'F&O research India',
    'institutional trading framework',
  ],
  authors: [{ name: 'Logyra Research' }],
  creator: 'Logyra Research',
  publisher: 'Logyra Research',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Logyra Research | Think Like the Market Moves',
    description:
      'Institutional-grade market intelligence, forex research, and data-driven trading strategies.',
    url: SITE_URL,
    siteName: 'Logyra Research',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Logyra Research – Think Like the Market Moves',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logyra Research | Think Like the Market Moves',
    description: 'Institutional-grade market intelligence and trade insights.',
    images: ['/images/og-image.png'],
  },
  robots: IS_PRODUCTION_HOST
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Logyra Research',
  legalName: 'Logyra Research Pvt Ltd',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description:
    'Institutional-grade market intelligence and research desk covering Indian equities, F&O, Forex, and Crypto markets.',
  foundingDate: '2024',
  areaServed: 'IN',
  sameAs: [
    'https://t.me/logyra_insights',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Logyra Research',
  url: SITE_URL,
  publisher: { '@type': 'Organization', name: 'Logyra Research' },
  inLanguage: 'en',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="noise-overlay bg-[var(--color-bg)] antialiased" suppressHydrationWarning>
        <OpenChannelProvider>
          {children}
        </OpenChannelProvider>
      </body>
    </html>
  );
}
