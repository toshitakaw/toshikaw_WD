/* eslint-disable next/no-html-link-for-pages */
import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

import { pagePath, withBasePath } from '@/lib/paths';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet WOFI’S, a warm, food-first artisan pizza restaurant in Palwal.',
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero about-hero">
        <div className="site-container about-hero-grid">
          <div>
            <p className="eyebrow light">About WOFI’S</p>
            <h1>Food with craft. A place with warmth.</h1>
            <p>
              WOFI’S is a food-first artisan restaurant in Palwal, built around
              expressive pizzas and a broad vegetarian menu.
            </p>
          </div>
          <div className="about-hero-image">
            <Image
              src={withBasePath('/assets/wofis-02.webp')}
              alt="A mushroom-topped WOFI’S artisan pizza on a wooden board"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="site-container about-statement">
          <p className="eyebrow">The WOFI’S character</p>
          <h2>Artisan at heart, easygoing by nature.</h2>
          <div className="about-columns">
            <p>
              From the menu to the dining room, WOFI’S pairs bold food with deep
              green, warm wood and a relaxed premium-casual atmosphere.
            </p>
            <p>
              The menu stretches beyond Neapolitan pizza into pasta, sandwiches,
              burgers, tacos, wraps, fries, quesadillas, coffee, shakes,
              mocktails and desserts.
            </p>
          </div>
        </div>
      </section>

      <section className="about-collage-section">
        <div className="site-container about-collage">
          <div className="collage-tall">
            <Image
              src={withBasePath('/assets/wofis-16.webp')}
              alt="WOFI’S drinks served inside the restaurant"
              fill
              sizes="(max-width: 700px) 100vw, 38vw"
            />
          </div>
          <div className="collage-copy">
            <p className="eyebrow light">One table, many moods</p>
            <h2>Pizza night, coffee stop or something sweet.</h2>
            <p>
              Choose a full meal, a quick bite or a drink and dessert. The
              complete menu is designed to be easy to explore.
            </p>
            <a className="button button-gold" href={pagePath('/menu')}>
              Browse the menu <ArrowRightIcon aria-hidden="true" />
            </a>
          </div>
          <div className="collage-square">
            <Image
              src={withBasePath('/assets/wofis-13.webp')}
              alt="Creamy WOFI’S penne pasta with olives"
              fill
              sizes="(max-width: 700px) 100vw, 30vw"
            />
          </div>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="site-container brand-detail-grid">
          <div>
            <p className="eyebrow">A look you can feel</p>
            <h2>Warm, grounded and unmistakably WOFI’S.</h2>
            <p>
              The restaurant’s real photography, packaging and menu details
              shape the experience—earthy colour, handcrafted texture and food
              at the centre.
            </p>
          </div>
          <div className="brand-detail-image">
            <Image
              src={withBasePath('/assets/wofis-21.webp')}
              alt="Wooden WOFI’S menu cover on a restaurant table"
              fill
              sizes="(max-width: 800px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
