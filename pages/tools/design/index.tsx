import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '@/components/ui/Layout';
import { ToolCard } from '@/components/ui/ToolCard';
import { FaqSection } from '@/components/ui/FaqSection';
import { TOOLS } from '@/lib/registry';
import type { ToolMeta, FaqItem } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';
const PAGE_URL = `${BASE_URL}/tools/design`;

const FAQ: FaqItem[] = [
  {
    q: 'What is the difference between HEX, RGB, and HSL color formats?',
    a: 'HEX (#ff6600) is the most common format in web development — compact and widely supported. RGB (255, 102, 0) is the native format for screens and required for CSS rgba() transparency. HSL (24°, 100%, 50%) is the most human-friendly — hue, saturation, and lightness are intuitive to adjust for color harmony work.',
  },
  {
    q: 'What color harmony mode should I use for a website?',
    a: 'Analogous palettes (adjacent colors on the wheel) are the safest choice for backgrounds and UI — they feel cohesive and calm. Use complementary colors for calls-to-action and highlight elements where you want contrast. Monochromatic works perfectly for minimal, premium brands.',
  },
  {
    q: 'How do I create a consistent color palette for a brand?',
    a: 'Start by locking your primary brand color in the Color Palette Generator. Select Analogous or Complementary mode and generate until you find supporting colors that feel right. Export as CSS variables and apply the 60-30-10 rule: primary color for 60% of surfaces, secondary for 30%, accent for 10%.',
  },
  {
    q: 'What makes a good username for social media?',
    a: 'A good username is short (under 15 characters), pronounceable, consistent across platforms, and free of confusing characters. Avoid numbers at the end (looks like a fallback), and be cautious with dots and dashes which can cause issues on some platforms.',
  },
  {
    q: 'What is WCAG color contrast?',
    a: 'WCAG (Web Content Accessibility Guidelines) requires a minimum contrast ratio of 4.5:1 between text and background for normal text, and 3:1 for large text. Meeting this ensures your content is readable by users with visual impairments. Use a contrast checker to verify your color combinations.',
  },
];

interface Props { tools: ToolMeta[]; }

export const getStaticProps: GetStaticProps = () => {
  const tools = TOOLS.filter(t => t.category === 'Design');
  return { props: { tools } };
};

const DesignPage: NextPage<Props> = ({ tools }) => {
  const liveTools = tools.filter(t => t.live);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',      item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'All Tools', item: `${BASE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Design',    item: PAGE_URL },
    ],
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Online Design Tools',
    url: PAGE_URL,
    numberOfItems: liveTools.length,
    itemListElement: liveTools.map((t, i) => ({
      '@type': 'ListItem', position: i + 1,
      name: t.name, url: `${BASE_URL}/tools/${t.slug}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(item => ({
      '@type': 'Question', name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <Head>
        <title>Free Online Design Tools — Color Palette Generator, Color Converter & More | ToolKit</title>
        <meta name="description" content="Free browser-based design tools: color palette generator with 7 harmony modes, color converter (HEX, RGB, HSL), CSS gradient generator, username generator and more." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title"       content="Free Online Design Tools | ToolKit" />
        <meta property="og:description" content="Color palette generator, color converter, CSS gradient generator and more. Browser-based design utilities, no signup." />
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={PAGE_URL} />
        <meta property="og:image"       content={`${BASE_URL}/og-image.png`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <Layout>
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(32px,5vw,52px) 16px 0' }}>

          <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
            <ol style={{ display: 'flex', gap: 6, alignItems: 'center', listStyle: 'none', fontSize: 13, color: 'var(--ink-3)' }}>
              <li><Link href="/"      style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Home</Link></li>
              <li aria-hidden>›</li>
              <li><Link href="/tools" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Tools</Link></li>
              <li aria-hidden>›</li>
              <li aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>Design</li>
            </ol>
          </nav>

          <div style={{ marginBottom: 48 }}>
            <p className="ov" style={{ marginBottom: 10 }}>Design Tools</p>
            <h1 className="disp" style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: 16, maxWidth: 680 }}>
              Free Online Design Tools
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 620 }}>
              Color tools and creative utilities for designers and frontend developers. Generate harmonious color palettes, convert between color formats, create CSS gradients, and build visual identities — all in your browser, with instant copy for CSS variables and HEX values.
            </p>
          </div>

          <div className="tools-grid" style={{ marginBottom: 64 }}>
            {tools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
          </div>

          <div style={{ maxWidth: 720, marginBottom: 64 }}>

            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Color tools for designers and developers
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                Color is one of the most powerful and most difficult elements of design. The right palette creates trust, communicates brand personality, and guides user attention. The wrong one creates confusion and friction. These tools apply color theory principles automatically so you get harmonious results without needing a design degree.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
                All color values are generated in HSL internally — the most intuitive color space for human reasoning — and exported in the format you need: HEX for copy-paste into code, RGB for CSS with transparency, or CSS custom properties for design systems. The <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>WCAG 2.2 guidelines</a> set the standard for accessible color contrast.
              </p>
            </section>

            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Color formats — quick reference
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                      {['Format', 'Example', 'Best used for'].map(h => (
                        <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['HEX',  '#ff6600',              'CSS color values, design tools, most common format'],
                      ['RGB',  'rgb(255, 102, 0)',      'CSS with transparency (rgba), canvas, JavaScript manipulation'],
                      ['HSL',  'hsl(24, 100%, 50%)',   'Color harmony work, lightness adjustments, design systems'],
                      ['HSV',  'hsv(24, 100%, 100%)',  'Used internally by Adobe and Figma color pickers'],
                    ].map(([fmt, example, use], i) => (
                      <tr key={fmt} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                        <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>{fmt}</td>
                        <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--ink-2)' }}>{example}</td>
                        <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

          </div>

          <FaqSection items={FAQ} />

          <div style={{ marginTop: 64 }}>
            <p className="ov" style={{ marginBottom: 12 }}>More tool categories</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { href: '/tools/security',  label: 'Security'        },
                { href: '/tools/developer', label: 'Developer Tools' },
                { href: '/tools/text',      label: 'Text & Writing'  },
              ].map(({ href, label }) => (
                <Link key={href} href={href} style={{ padding: '8px 16px', background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 'var(--r-l)', fontSize: 14, fontWeight: 500, color: 'var(--ink-2)', textDecoration: 'none' }}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>

        </div>
      </Layout>
    </>
  );
};

export default DesignPage;
