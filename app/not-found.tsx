import { withBasePath } from '@/lib/paths';

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <p className="eyebrow">404</p>
      <h1>This table is not on the menu.</h1>
      <p>The page you are looking for may have moved.</p>
      <a className="button button-primary" href={withBasePath('/')}>
        Back to WOFI’S
      </a>
    </main>
  );
}
