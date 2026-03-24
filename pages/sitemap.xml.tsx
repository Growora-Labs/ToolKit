import type { GetServerSideProps } from 'next';

const PATHS: string[] = [
  '/',
  '/tools',
  '/tools/username-generator',
  '/tools/lorem-ipsum',
  '/tools/color-palette',
  '/tools/word-counter',
  '/tools/base64',
  '/tools/uuid',
  '/tools/hash',
  '/tools/json-formatter',
  '/tools/markdown',
  '/tools/case-converter',
  '/tools/url-encoder',
];

function generateSitemap(baseUrl: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PATHS.map(
  path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
).join('\n')}
</urlset>`;
}

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://yourtoolkit.com';
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap(baseUrl));
  res.end();
  return { props: {} };
};
