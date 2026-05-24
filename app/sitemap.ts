import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
    { path: '/',                                       changeFrequency: 'weekly',  priority: 1.0 },
    { path: '/about',                                  changeFrequency: 'monthly', priority: 0.7 },
    { path: '/research-desk',                          changeFrequency: 'weekly',  priority: 0.9 },
    { path: '/research-desk/open-channel',             changeFrequency: 'weekly',  priority: 0.8 },
    { path: '/research-desk/inner-circle',             changeFrequency: 'weekly',  priority: 0.9 },
    { path: '/research-desk/inner-circle/index-options', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/legal',                                  changeFrequency: 'yearly',  priority: 0.3 },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
