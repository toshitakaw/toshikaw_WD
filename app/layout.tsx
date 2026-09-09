import type { Metadata } from 'next';
import { MessageCircle } from 'lucide-react';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { BUSINESS, ORDER_LINKS } from '@/lib/business';
import { SITE_URL } from '@/lib/site-url';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'WOFI’S — Artisan Pizza in Palwal',
    template: '%s | WOFI’S Palwal',
  },
  description:
    'Explore artisan pizza, pasta, burgers, shakes and more at WOFI’S in New Colony, Palwal.',
  openGraph: {
    title: 'WOFI’S — Artisan Pizza in Palwal',
    description:
      'Handcrafted food, bold flavours and a warm place to enjoy them in Palwal.',
    type: 'website',
  },
};

const restaurantSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: BUSINESS.fullName,
  telephone: `+91${BUSINESS.phone}`,
  servesCuisine: ['Pizza', 'Italian', 'Vegetarian'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Near Gupta Nursing Home, opposite Sai Optical, New Colony',
    addressLocality: 'Palwal',
    addressRegion: 'Haryana',
    postalCode: '121102',
    addressCountry: 'IN',
  },
  sameAs: [ORDER_LINKS.instagram, ORDER_LINKS.zomato, ORDER_LINKS.swiggy],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <a
          className="mobile-contact"
          href={ORDER_LINKS.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle aria-hidden="true" /> Message us
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </body>
    </html>
  );
}
