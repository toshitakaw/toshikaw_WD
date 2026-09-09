import { copyFile, mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const outputDirectory = join(process.cwd(), 'dist', 'client');
const routes = ['about', 'menu', 'visit'];

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

console.log('Prepared clean route URLs for GitHub Pages.');
