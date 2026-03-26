import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '@/components/ui/Layout';
import { ToolCard } from '@/components/ui/ToolCard';
import { FaqSection } from '@/components/ui/FaqSection';
import { TOOLS } from '@/lib/registry';
import type { ToolMeta, FaqItem } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';
const PAGE_URL = `${BASE_URL}/tools/text`;

const FAQ: FaqItem[] = [
  {
    q: 'How many words is a 5-minute read?',
    a: 'At an average reading speed of 238 words per minute, a 5-minute read is approximately 1,190 words. Use the Word Counter tool to check your exact reading time based on your actual word count.',
  },
  {
    q: 'What is the difference between Title Case and Sentence case?',
    a: 'Title Case capitalizes the first letter of most words (following style guide rules for small words like "and", "the", "in"). Sentence case capitalizes only the first word and proper nouns — it reads more naturally and is increasingly preferred in modern web interfaces.',
  },
  {
    q: 'How many paragraphs of Lorem Ipsum should I use for a mockup?',
    a: 'For a single content card or section, 1 paragraph is enough. For a full page layout, 3–5 paragraphs gives a realistic sense of content density. Use words or sentences mode for shorter UI elements like headings, labels, and buttons.',
  },
  {
    q: 'What Markdown is supported?',
    a: 'The Markdown Editor supports headings (# to ######), bold (**text**), italic (*text*), inline code (`code`), code blocks (```), links ([text](url)), images, unordered lists (- item), ordered lists (1. item), blockquotes (> text), and horizontal rules (---). This covers GitHub Flavored Markdown for most common use cases.',
  },
  {
    q: 'What is the best word count for SEO blog posts?',
    a: 'For competitive topics, 1,500–2,500 words tends to perform well in search results. However, word count alone doesn\'t determine ranking — content quality and relevance matter more. Focus on fully covering the topic rather than hitting a specific number.',
  },
];

interface Props { tools: ToolMeta[]; }

export const getStaticProps: GetStaticProps = () => {
  const tools = TOOLS.filter(t => t.category === 'Text & Writing');
  return { props: { tools } };
};

const TextPage: NextPage<Props> = ({ tools }) => {
  const liveTools = tools.filter(t => t.live);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',           item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'All Tools',      item: `${BASE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Text & Writing', item: PAGE_URL },
    ],
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Online Text & Writing Tools',
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
        <title>Free Online Text & Writing Tools — Word Counter, Case Converter, Lorem Ipsum & More | ToolKit</title>
        <meta name="description" content="Free browser-based text tools: word counter, case converter (camelCase, snake_case), Lorem Ipsum generator, Markdown editor and more. No signup, instant results." />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:title"       content="Free Text & Writing Tools | ToolKit" />
        <meta property="og:description" content="Word counter, case converter, Lorem Ipsum generator, Markdown editor and more. Browser-based, no signup." />
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
              <li aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>Text & Writing</li>
            </ol>
          </nav>

          <div style={{ marginBottom: 48 }}>
            <p className="ov" style={{ marginBottom: 10 }}>Text & Writing Tools</p>
            <h1 className="disp" style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: 16, maxWidth: 680 }}>
              Free Online Text & Writing Tools
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 620 }}>
              Tools for writers, developers, and content creators. Count words and characters, convert text between cases, generate placeholder text, write Markdown with live preview, and more — all free and browser-based.
            </p>
          </div>

          <div className="tools-grid" style={{ marginBottom: 64 }}>
            {tools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
          </div>

          <div style={{ maxWidth: 720, marginBottom: 64 }}>

            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Text tools for every workflow
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                Whether you're a developer reformatting variable names, a writer checking essay length, a designer filling mockups with placeholder text, or a content marketer converting copy to Title Case for headlines — this collection covers the text manipulation tasks that come up in every creative and technical workflow.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
                All tools process text entirely in your browser. No text you enter is stored, transmitted, or used for any purpose. This matters particularly for drafts, confidential documents, and proprietary content.
              </p>
            </section>

            <section style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                Common text tasks — which tool to use
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { task: 'Check essay or article length',     tool: 'Word Counter',       href: '/tools/word-counter' },
                  { task: 'Meet Twitter/LinkedIn character limits', tool: 'Word Counter',  href: '/tools/word-counter' },
                  { task: 'Convert variable names to camelCase', tool: 'Case Converter',  href: '/tools/case-converter' },
                  { task: 'Fix accidental caps lock',           tool: 'Case Converter',   href: '/tools/case-converter' },
                  { task: 'Fill design mockups with text',      tool: 'Lorem Ipsum',      href: '/tools/lorem-ipsum' },
                  { task: 'Write and preview README files',     tool: 'Markdown Editor',  href: '/tools/markdown-editor' },
                  { task: 'Convert Markdown to HTML',           tool: 'Markdown Editor',  href: '/tools/markdown-editor' },
                ].map(({ task, tool, href }) => (
                  <div key={task} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, fontSize: 14, color: 'var(--ink-2)', minWidth: 200 }}>{task}</div>
                    <Link href={href} style={{ fontSize: 13, fontWeight: 600, color: 'var(--green)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                      {tool} →
                    </Link>
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
                { href: '/tools/security',  label: 'Security'        },
                { href: '/tools/developer', label: 'Developer Tools' },
                { href: '/tools/design',    label: 'Design'          },
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

export default TextPage;
