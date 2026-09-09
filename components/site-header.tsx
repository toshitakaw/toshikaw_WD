'use client';

/* eslint-disable next/no-html-link-for-pages */

import Image from 'next/image';
import { Menu, MessageCircle } from 'lucide-react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ORDER_LINKS } from '@/lib/business';
import { pagePath, withBasePath } from '@/lib/paths';

const nav: Array<{
  href: '/' | '/menu' | '/about' | '/visit';
  label: string;
}> = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About' },
  { href: '/visit', label: 'Visit us' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href={pagePath('/')} aria-label="WOFI’S home">
          <Image
            src={withBasePath('/assets/wofis-08.webp')}
            alt=""
            width={52}
            height={52}
            priority
          />
          <span>
            <strong>WOFI’S</strong>
            <small>THE ARTISAN PIZZA</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <a href={pagePath(item.href)} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-cta"
          href={ORDER_LINKS.zomato}
          target="_blank"
          rel="noreferrer"
        >
          Order now
        </a>
        <Sheet>
          <SheetTrigger className="mobile-menu-button" aria-label="Open menu">
            <Menu aria-hidden="true" />
          </SheetTrigger>
          <SheetContent className="mobile-sheet">
            <SheetHeader>
              <SheetTitle className="mobile-sheet-title">WOFI’S</SheetTitle>
              <SheetDescription>Artisan pizza in Palwal</SheetDescription>
            </SheetHeader>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <a
                      aria-label={item.label}
                      href={pagePath(item.href)}
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mobile-sheet-action">
              <a
                className="button button-primary"
                href={ORDER_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle aria-hidden="true" /> Message WOFI’S
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
