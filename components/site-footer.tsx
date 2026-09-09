/* eslint-disable next/no-html-link-for-pages */
import { MapPin, Phone } from 'lucide-react';

import { BUSINESS, ORDER_LINKS } from '@/lib/business';
import { withBasePath } from '@/lib/paths';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <p className="footer-wordmark">WOFI’S</p>
          <p>The artisan pizza experience in Palwal.</p>
        </div>
        <div>
          <h2>Explore</h2>
          <a href={withBasePath('/menu')}>Menu</a>
          <a href={withBasePath('/about')}>About</a>
          <a href={withBasePath('/visit')}>Visit us</a>
        </div>
        <div>
          <h2>Find us</h2>
          <a href={ORDER_LINKS.maps} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" /> {BUSINESS.address}
          </a>
          <a href={`tel:${BUSINESS.phone}`}>
            <Phone aria-hidden="true" /> {BUSINESS.phone}
          </a>
        </div>
        <div>
          <h2>Order & follow</h2>
          <a href={ORDER_LINKS.zomato} target="_blank" rel="noreferrer">
            Zomato
          </a>
          <a href={ORDER_LINKS.swiggy} target="_blank" rel="noreferrer">
            Swiggy
          </a>
          <a href={ORDER_LINKS.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} WOFI’S. All rights reserved.</span>
        <span>Menu prices and availability may change.</span>
      </div>
    </footer>
  );
}
