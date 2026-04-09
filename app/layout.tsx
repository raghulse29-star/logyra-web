import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Logyra Research | Think Like the Market Moves',
  description: 'Logyra Research delivers institutional-grade market intelligence, forex research, data-driven strategies, and real-time trade insights to traders at every level.',
  keywords: ['forex research', 'market analysis', 'trade intelligence', 'logyra', 'stock market', 'trading strategies'],
  authors: [{ name: 'Logyra Research' }],
  creator: 'Logyra Research',
  openGraph: {
    title: 'Logyra Research | Think Like the Market Moves',
    description: 'Institutional-grade market intelligence, forex research, and data-driven trading strategies.',
    url: 'https://logyra.com',
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="noise-overlay bg-[var(--color-bg)] antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
