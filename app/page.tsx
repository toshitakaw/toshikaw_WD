/* eslint-disable next/no-html-link-for-pages */
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

import { BUSINESS, ORDER_LINKS } from '@/lib/business';
import { pagePath, withBasePath } from '@/lib/paths';

export const dynamic = 'force-static';

const featured = [
  {
    name: 'Classic Margherita',
    price: '₹335',
    description: 'Tomato base sauce, fresh basil and cheese.',
    image: withBasePath('/assets/wofis-12.webp'),
  },
  {
    name: 'Spaghetti Aglio Olio',
    price: '₹339',
    description: 'Cherry tomatoes and olives, served with garlic bread.',
    image: withBasePath('/assets/wofis-17.webp'),
  },
  {
    name: 'Creamy Oreo Shake',
    price: '₹199',
    description: 'A thick, creamy and chocolatey house shake.',
    image: withBasePath('/assets/wofis-20.webp'),
  },
];

const categories = [
  { label: 'Neapolitan Pizza', id: 'neapolitan-pizza' },
  { label: 'Pasta', id: 'pasta' },
  { label: 'Stuffed Sticks', id: 'garlic-bread-stuffed-sticks' },
  { label: 'Sandwiches', id: 'sandwich' },
  { label: 'Burgers', id: 'burger' },
  { label: 'Wraps', id: 'wraps' },
  { label: 'Shakes', id: 'shakes' },
  { label: 'Desserts', id: 'desserts' },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero-shell section-pad">
        <div className="site-container hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow">The artisan pizza · Palwal</p>
            <h1>Handcrafted flavour, served with heart.</h1>
            <p className="hero-lede">
              Artisan pizza, comforting pastas, loaded sandwiches and house-made
              sips—all in a warm corner of New Colony.
            </p>
            <div className="button-row">
              <a
                className="button button-primary"
                href={ORDER_LINKS.zomato}
                target="_blank"
                rel="noreferrer"
              >
                Order on Zomato <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button-ghost" href={pagePath('/menu')}>
                Explore the menu
              </a>
            </div>
            <div className="hero-location">
              <MapPin aria-hidden="true" />
              <span>Near Gupta Nursing Home, New Colony, Palwal</span>
            </div>
          </div>
          <div className="hero-visual reveal-up delay-1">
            <div className="hero-image-frame">
              <Image
                className="hero-image"
                src={withBasePath('/assets/wofis-07.webp')}
                alt="A WOFI’S artisan pizza topped with creamy burrata and basil"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
              />
            </div>
            <div className="hero-stamp" aria-label="Handcrafted in Palwal">
              <span>HANDCRAFTED</span>
              <strong>W</strong>
              <span>IN PALWAL</span>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Menu highlights">
        <div>
          <span>NEAPOLITAN PIZZA</span>
          <i>✦</i>
          <span>PASTA</span>
          <i>✦</i>
          <span>SHAKES</span>
          <i>✦</i>
          <span>DESSERTS</span>
          <i>✦</i>
          <span>NEAPOLITAN PIZZA</span>
          <i>✦</i>
          <span>PASTA</span>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Start here</p>
              <h2>WOFI’S must tries</h2>
            </div>
            <p>
              Three favourites from the current menu, made for first visits and
              repeat cravings.
            </p>
          </div>
          <div className="feature-grid">
            {featured.map((item, index) => (
              <article className="food-card" key={item.name}>
                <div className="food-card-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 720px) 100vw, 33vw"
                  />
                  <span className="must-try">Must try</span>
                  <span className="card-index">0{index + 1}</span>
                </div>
                <div className="food-card-copy">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <strong>{item.price}</strong>
                </div>
              </article>
            ))}
          </div>
          <div className="centered-action">
            <a className="text-link" href={pagePath('/menu')}>
              See all 16 menu categories <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad category-section">
        <div className="site-container category-layout">
          <div className="category-intro">
            <p className="eyebrow light">More than pizza</p>
            <h2>A menu for every kind of craving.</h2>
            <p>
              From oven-baked favourites to coffee, coolers and desserts, browse
              the complete menu without pinching or zooming.
            </p>
            <a className="button button-gold" href={pagePath('/menu')}>
              View full menu <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="category-list">
            {categories.map((category, index) => (
              <a
                href={`${pagePath('/menu')}#${category.id}`}
                key={category.id}
              >
                <span>0{index + 1}</span>
                <strong>{category.label}</strong>
                <ArrowRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="site-container experience-grid">
          <div className="experience-image">
            <Image
              src={withBasePath('/assets/wofis-06.webp')}
              alt="Green and wood-toned seating inside WOFI’S in Palwal"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div className="experience-copy">
            <p className="eyebrow">Pull up a chair</p>
            <h2>A warm table in the heart of Palwal.</h2>
            <p>
              Deep greens, warm wood and food made to share. Visit WOFI’S in New
              Colony for an easygoing artisan dining experience.
            </p>
            <a className="text-link" href={pagePath('/visit')}>
              Plan your visit <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="site-container gallery-heading">
          <div>
            <p className="eyebrow light">From WOFI’S</p>
            <h2>Fresh from the table.</h2>
          </div>
          <a
            className="text-link light-link"
            href={ORDER_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Follow on Instagram <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className="site-container gallery-grid">
          <div className="gallery-wide">
            <Image
              src={withBasePath('/assets/wofis-01.webp')}
              alt="A freshly baked WOFI’S artisan pizza"
              fill
              sizes="(max-width: 700px) 100vw, 50vw"
            />
          </div>
          <div>
            <Image
              src={withBasePath('/assets/wofis-15.webp')}
              alt="Crispy fries from WOFI’S"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
          </div>
          <div>
            <Image
              src={withBasePath('/assets/wofis-03.webp')}
              alt="A WOFI’S creamy chocolate cookie shake"
              fill
              sizes="(max-width: 700px) 50vw, 25vw"
            />
          </div>
        </div>
      </section>

      <section className="order-band">
        <div className="site-container order-band-inner">
          <div>
            <p className="eyebrow light">Craving WOFI’S?</p>
            <h2>Order your favourites.</h2>
          </div>
          <div className="button-row">
            <a
              className="button button-gold"
              href={ORDER_LINKS.swiggy}
              target="_blank"
              rel="noreferrer"
            >
              Order on Swiggy
            </a>
            <a
              className="button button-outline-light"
              href={`tel:${BUSINESS.phone}`}
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
