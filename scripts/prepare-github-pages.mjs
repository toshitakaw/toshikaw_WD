import { copyFile, cp, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const routes = ['about', 'menu', 'visit'];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\/+|\/+$/g, '');

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = join(outputDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await copyFile(
      join(outputDirectory, `${route}.html`),
      join(routeDirectory, 'index.html'),
    );
  }),
);

// Vinext writes asset-prefixed framework files inside the base-path directory.
// GitHub Pages mounts the artifact root at that base path, so the files must
// also exist at the artifact root for /<repository>/_next/* requests to work.
if (basePath) {
  await cp(
    join(outputDirectory, basePath, '_next'),
    join(outputDirectory, '_next'),
    { recursive: true, force: true },
  );
}

console.log('Prepared clean route URLs for GitHub Pages.');
