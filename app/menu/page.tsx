import type { Metadata } from 'next';
import Image from 'next/image';

import { MenuExplorer } from '@/components/menu-explorer';
import { withBasePath } from '@/lib/paths';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Browse the full WOFI’S menu of artisan pizza, pasta, burgers, wraps, drinks and desserts.',
};

export default function MenuPage() {
  return (
    <main id="main-content" className="menu-page">
      <section className="page-hero menu-hero">
        <div className="site-container page-hero-grid">
          <div>
            <p className="eyebrow light">The complete menu</p>
            <h1>Find your next favourite.</h1>
            <p>
              Search every current item, jump between categories and see prices
              at a glance.
            </p>
          </div>
          <div className="menu-hero-art">
            <Image
              src={withBasePath('/assets/wofis-21.webp')}
              alt="The wooden WOFI’S menu cover"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
      <section className="menu-body">
        <div className="site-container">
          <MenuExplorer />
          <p className="menu-note">
            Prices and availability may change. Please confirm current details
            when ordering.
          </p>
        </div>
      </section>
    </main>
  );
}
