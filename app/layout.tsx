import type { Metadata } from 'next';
import '@/styles/globals.css';
import OpenChannelProvider from '@/components/providers/OpenChannelProvider';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1JG1HS9VBZ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-1JG1HS9VBZ');
            `,
          }}
        />
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1503201084417175');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1503201084417175&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover" />
        <link rel="icon" type="image/png" href="/images/faviconnn.png" />
        <link rel="apple-touch-icon" href="/images/faviconnn.png" />
        <link rel="shortcut icon" href="/images/faviconnn.png" />
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
        <WhatsAppFloat />
      </body>
    </html>
  );
}
