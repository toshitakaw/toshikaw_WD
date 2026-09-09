import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ExternalLinkIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from 'lucide-react';

import { BUSINESS, ORDER_LINKS } from '@/lib/business';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Visit Us',
  description:
    'Find WOFI’S in New Colony, Palwal, call the restaurant or open directions.',
};

export default function VisitPage() {
  return (
    <main id="main-content">
      <section className="visit-hero">
        <div className="visit-hero-image">
          <Image
            src="/assets/wofis-06.webp"
            alt="The warm green-and-wood interior at WOFI’S Palwal"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="site-container visit-hero-copy">
          <p className="eyebrow light">Visit WOFI’S</p>
          <h1>Your table is waiting.</h1>
          <p>Find us in New Colony, Palwal.</p>
        </div>
      </section>

      <section className="section-pad section-cream">
        <div className="site-container visit-grid">
          <div className="visit-address">
            <p className="eyebrow">Where to find us</p>
            <h2>WOFI’S, Palwal</h2>
            <p>{BUSINESS.address}</p>
            <a
              className="button button-primary"
              href={ORDER_LINKS.maps}
              target="_blank"
              rel="noreferrer"
            >
              <MapPinIcon aria-hidden="true" /> Open directions
            </a>
          </div>
          <div className="contact-cards">
            <a href={`tel:${BUSINESS.phone}`}>
              <PhoneIcon aria-hidden="true" />
              <span>
                <small>Call WOFI’S</small>
                <strong>{BUSINESS.phone}</strong>
              </span>
            </a>
            <a href={ORDER_LINKS.whatsapp} target="_blank" rel="noreferrer">
              <MessageCircleIcon aria-hidden="true" />
              <span>
                <small>Ask us on WhatsApp</small>
                <strong>Message WOFI’S</strong>
              </span>
              <ExternalLinkIcon aria-hidden="true" />
            </a>
            <div className="hours-note">
              <small>Opening hours</small>
              <p>Please call the restaurant for today’s opening hours.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="order-options">
        <div className="site-container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow light">Prefer delivery?</p>
              <h2>Order through your usual app.</h2>
            </div>
            <p>These links open WOFI’S on the selected ordering platform.</p>
          </div>
          <div className="order-option-grid">
            <a href={ORDER_LINKS.zomato} target="_blank" rel="noreferrer">
              <span>Z</span>
              <div>
                <small>Open WOFI’S on</small>
                <strong>Zomato</strong>
              </div>
              <ExternalLinkIcon aria-hidden="true" />
            </a>
            <a href={ORDER_LINKS.swiggy} target="_blank" rel="noreferrer">
              <span>S</span>
              <div>
                <small>Open WOFI’S on</small>
                <strong>Swiggy</strong>
              </div>
              <ExternalLinkIcon aria-hidden="true" />
            </a>
            <a href={ORDER_LINKS.instagram} target="_blank" rel="noreferrer">
              <span>＠</span>
              <div>
                <small>See more from WOFI’S</small>
                <strong>Instagram</strong>
              </div>
              <ExternalLinkIcon aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
