import type { MetadataRoute } from 'next';
import { SITE_URL, IS_PRODUCTION_HOST } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  if (!IS_PRODUCTION_HOST) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/pay/', '/_next/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
