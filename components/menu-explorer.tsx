'use client';

import { useEffect, useMemo, useState } from 'react';
import { SearchIcon, XIcon } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { MENU } from '@/lib/menu-data';

export function MenuExplorer() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const sectionId = decodeURIComponent(window.location.hash.slice(1));
    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const normalized = query.trim().toLowerCase();
  const categories = useMemo(
    () =>
      MENU.map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          [category.name, item.name, item.description ?? '']
            .join(' ')
            .toLowerCase()
            .includes(normalized),
        ),
      })).filter((category) => category.items.length > 0),
    [normalized],
  );
  const count = categories.reduce(
    (sum, category) => sum + category.items.length,
    0,
  );

  return (
    <>
      <div className="menu-tools">
        <div className="menu-search">
          <SearchIcon aria-hidden="true" />
          <Input
            aria-label="Search the menu"
            placeholder="Search pizza, paneer, coffee…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              <XIcon aria-hidden="true" />
            </button>
          )}
        </div>
        <p aria-live="polite">{count} items</p>
      </div>

      {categories.length ? (
        <>
          <nav className="category-nav" aria-label="Menu categories">
            <div className="site-container category-nav-scroll">
              {categories.map((category) => (
                <a href={`#${category.id}`} key={category.id}>
                  {category.name}
                </a>
              ))}
            </div>
          </nav>
          <div className="menu-sections">
            {categories.map((category, categoryIndex) => (
              <section
                className="menu-category"
                id={category.id}
                key={category.id}
              >
                <div className="menu-category-heading">
                  <span>{String(categoryIndex + 1).padStart(2, '0')}</span>
                  <h2>{category.name}</h2>
                  <small>{category.items.length} items</small>
                </div>
                <div className="menu-items">
                  {category.items.map((item) => (
                    <article
                      className="menu-item"
                      key={`${category.id}-${item.name}`}
                    >
                      <div>
                        <h3>{item.name}</h3>
                        {item.description && <p>{item.description}</p>}
                        {item.featured && (
                          <span className="menu-badge">WOFI’S pick</span>
                        )}
                      </div>
                      <strong>{item.price}</strong>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </>
      ) : (
        <div className="menu-empty">
          <span>Nothing matched “{query}”.</span>
          <p>Try a dish, ingredient or category.</p>
          <button
            type="button"
            className="button button-primary"
            onClick={() => setQuery('')}
          >
            Clear search
          </button>
        </div>
      )}
    </>
  );
}
