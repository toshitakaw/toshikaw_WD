import type { MetadataRoute } from 'next';

import { SITE_URL } from '@/lib/site-url';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/menu', '/about', '/visit'].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: path === '/menu' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/menu' ? 0.9 : 0.7,
  }));
}
