export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(path: string) {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}

export function pagePath(path: '/' | '/menu' | '/about' | '/visit') {
  return path === '/'
    ? withBasePath('/index.html')
    : withBasePath(`${path}/index.html`);
}
