import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '@/components/ui/Layout';
import { ToolCard } from '@/components/ui/ToolCard';
import { FaqSection } from '@/components/ui/FaqSection';
import { TOOLS } from '@/lib/registry';
import type { ToolMeta, FaqItem } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';
const PAGE_URL = `${BASE_URL}/tools/developer`;

const FAQ: FaqItem[] = [
  {
    q: 'What is the most useful developer tool on this page?',
    a: 'It depends on your daily workflow. JSON Formatter is the most universally used — almost every developer works with JSON APIs. Base64 Encoder is essential for working with data URIs and authentication headers. Regex Tester is invaluable for anyone working with text processing or log parsing.',
  },
  {
    q: 'Do these tools work offline?',
    a: 'All tools run entirely in your browser with no server calls for the core functionality. Once the page is loaded, the tool logic works without an internet connection. The only exception is if your browser needs to load fonts or other static assets.',
  },
  {
    q: 'What is the difference between URL encoding and Base64 encoding?',
    a: 'URL encoding (percent-encoding) makes text safe for use in URLs by replacing special characters with %XX sequences. Base64 encoding converts binary data to ASCII text for transmission through text-only channels. URL encoding is for URLs; Base64 is for binary data transport in emails, JWTs, and data URIs.',
  },
  {
    q: 'Why does my JSON have a syntax error?',
    a: 'The most common JSON errors are: trailing commas after the last property (not allowed in JSON), single quotes instead of double quotes, unquoted property keys, and undefined or NaN values (not valid JSON types). Use the JSON Formatter\'s Validate mode to get a specific error message.',
  },
  {
    q: 'When should I use a UUID as a database primary key?',
    a: 'Use UUIDs when you need to generate IDs across distributed systems without coordination, when you want to avoid leaking sequential IDs in public APIs, or when merging data from multiple databases. The tradeoff is larger storage size and slightly slower index performance compared to integer IDs.',
  },
];

interface Props { tools: ToolMeta[]; }

export const getStaticProps: GetStaticProps = () => {
  const tools = TOOLS.filter(t => t.category === 'Developer Tools');
  return { props: { tools } };
};

const DeveloperPage: NextPage<Props> = ({ tools }) => {
  const liveTools = tools.filter(t => t.live);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',       item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'All Tools',  item: `${BASE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Developer Tools', item: PAGE_URL },
    ],
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Online Developer Tools',
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
        <title>Free Online Developer Tools — JSON Formatter, Base64, UUID, Regex & More | ToolKit</title>
        <meta name="description" content="Free browser-based developer tools: JSON formatter, Base64 encoder/decoder, UUID generator, URL encoder, regex tester, timestamp converter and more. No signup." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title"       content="Free Online Developer Tools | ToolKit" />
        <meta property="og:description" content="JSON formatter, Base64 encoder, UUID generator, regex tester and more. All browser-based, no signup, no tracking." />
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
              <li aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>Developer Tools</li>
            </ol>
          </nav>

          <div style={{ marginBottom: 48 }}>
            <p className="ov" style={{ marginBottom: 10 }}>Developer Tools</p>
            <h1 className="disp" style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: 16, maxWidth: 680 }}>
              Free Online Developer Tools
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 620 }}>
              A collection of browser-based utilities for everyday development tasks. Format JSON, encode Base64, generate UUIDs, test regex patterns, convert timestamps, and more — all running locally in your browser with no data sent to any server.
            </p>
          </div>

          <div className="tools-grid" style={{ marginBottom: 64 }}>
            {tools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
          </div>

          <div style={{ maxWidth: 720, marginBottom: 64 }}>

            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Tools developers use every day
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                Every tool in this category targets a specific, recurring task in a development workflow. They are not feature-heavy applications — they solve one problem quickly and get out of your way. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>MDN Web Docs</a> are the reference for the browser APIs used here.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
                All tools use native browser APIs — no external libraries are loaded for the core functionality. The JSON Formatter uses <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>JSON.parse()</code> and <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>JSON.stringify()</code>. The UUID Generator uses <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>crypto.randomUUID()</code>. The Base64 tool uses <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>btoa()</code> and <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>atob()</code>. What runs in the tool runs identically in your code.
              </p>
            </section>

            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Which tool do you need?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { tool: 'JSON Formatter',     when: 'Debugging API responses, reading config files, validating JSON before sending a request.' },
                  { tool: 'Base64 Encoder',     when: 'Working with data URIs, HTTP Basic Auth headers, JWT tokens, or MIME email attachments.' },
                  { tool: 'UUID Generator',     when: 'Generating database primary keys, API resource IDs, session tokens, or idempotency keys.' },
                  { tool: 'URL Encoder',        when: 'Building query strings, encoding special characters in URLs, debugging redirect parameters.' },
                  { tool: 'Regex Tester',       when: 'Validating patterns before adding to code, testing email/URL/date regex, debugging capture groups.' },
                  { tool: 'Timestamp Converter',when: 'Converting Unix epoch timestamps to human-readable dates and back. Essential for log analysis.' },
                ].map(({ tool, when }) => (
                  <div key={tool} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                    <div style={{ minWidth: 160, fontSize: 14, fontWeight: 700, color: 'var(--ink)', flexShrink: 0 }}>{tool}</div>
                    <div style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.6 }}>{when}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          <FaqSection items={FAQ} />

          <div style={{ marginTop: 64 }}>
            <p className="ov" style={{ marginBottom: 12 }}>More tool categories</p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {[
                { href: '/tools/security', label: 'Security'       },
                { href: '/tools/text',     label: 'Text & Writing' },
                { href: '/tools/design',   label: 'Design'         },
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

export default DeveloperPage;
