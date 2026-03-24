import type { GetServerSideProps } from 'next';
import {TOOLS} from "@/lib/registry";

function generateSitemap(baseUrl: string): string {
  const staticPaths = ['/', '/tools'];

  // Live tool pages (excluding password-generator which lives at /)
  const toolPaths = TOOLS
    .filter(t => t.live && t.slug !== 'password-generator')
    .map(t => `/tools/${t.slug}`);

  const allPaths = [...staticPaths, ...toolPaths];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths.map(path => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export default function Sitemap() { return null; }

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';
  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap(baseUrl));
  res.end();
  return { props: {} };
};
