import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Layout } from '@/components/ui/Layout';
import { FaqSection } from '@/components/ui/FaqSection';
import { ToolCard } from '@/components/ui/ToolCard';
import { getBySlug, getLiveSlugs, TOOLS } from '@/lib/registry';
import type { ToolMeta, FaqItem } from '@/lib/types';

/* ── Static paths — only live tools get pages ─────────── */
export const getStaticPaths: GetStaticPaths = () => ({
    paths: getLiveSlugs().map(slug => ({ params: { slug } })),
    fallback: false,
});

/* ── Static props ──────────────────────────────────────── */
export const getStaticProps: GetStaticProps = ({ params }) => {
    const slug = params?.slug as string;
    const tool = getBySlug(slug);
    if (!tool) return { notFound: true };
    return { props: { tool } };
};

/* ── Dynamic tool loader ───────────────────────────────── */

// Map slug → dynamic import of { faq, ...sidebar data }
const TOOL_DATA: Record<string, () => Promise<{ faq: FaqItem[]; [key: string]: unknown }>> = {
    'regex-tester':       () => import('@/tools/regex-tester'),
    'password-generator': () => import('@/tools/password-generator'),
    'word-counter':       () => import('@/tools/word-counter'),
    'case-converter':     () => import('@/tools/case-converter'),
    'color-palette':      () => import('@/tools/color-palette'),
    'uuid-generator':     () => import('@/tools/uuid-generator'),
    'lorem-ipsum':        () => import('@/tools/lorem-ipsum'),
    'base64':             () => import('@/tools/base64'),
    'username-generator': () => import('@/tools/username-generator'),
    'json-formatter':     () => import('@/tools/json-formatter'),
    'hash-generator':     () => import('@/tools/hash-generator'),
    'url-encoder':        () => import('@/tools/url-encoder'),
    'markdown-editor':    () => import('@/tools/markdown-editor'),
};

const TOOL_WIDGETS: Record<string, React.ComponentType> = {
    'regex-tester':       dynamic(() => import('@/tools/regex-tester/component'),       { ssr: false }) as React.ComponentType,
    'password-generator': dynamic(() => import('@/tools/password-generator/component'), { ssr: false }) as React.ComponentType,
    'word-counter':       dynamic(() => import('@/tools/word-counter/component'),       { ssr: false }) as React.ComponentType,
    'case-converter':     dynamic(() => import('@/tools/case-converter/component'),     { ssr: false }) as React.ComponentType,
    'color-palette':      dynamic(() => import('@/tools/color-palette/component'),      { ssr: false }) as React.ComponentType,
    'uuid-generator':     dynamic(() => import('@/tools/uuid-generator/component'),     { ssr: false }) as React.ComponentType,
    'lorem-ipsum':        dynamic(() => import('@/tools/lorem-ipsum/component'),        { ssr: false }) as React.ComponentType,
    'base64':             dynamic(() => import('@/tools/base64/component'),             { ssr: false }) as React.ComponentType,
    'username-generator': dynamic(() => import('@/tools/username-generator/component'), { ssr: false }) as React.ComponentType,
    'json-formatter':     dynamic(() => import('@/tools/json-formatter/component'),     { ssr: false }) as React.ComponentType,
    'hash-generator':     dynamic(() => import('@/tools/hash-generator/component'),     { ssr: false }) as React.ComponentType,
    'url-encoder':        dynamic(() => import('@/tools/url-encoder/component'),        { ssr: false }) as React.ComponentType,
    'markdown-editor':    dynamic(() => import('@/tools/markdown-editor/component'),    { ssr: false }) as React.ComponentType,
};

/* ── Password generator sidebar ────────────────────────── */
const PasswordGeneratorSidebar = dynamic(
    () => import('@/tools/password-generator').then(m => {
        const { sidebarFeatures } = m as { sidebarFeatures: { label: string; desc: string; color: string; bg: string }[] };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>Why use this tool?</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {sidebarFeatures.map(({ label, desc, color, bg }) => (
                            <div key={label} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                                <div style={{ width: 30, height: 30, borderRadius: 7, background: bg, color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                                    ⚡
                                </div>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>{label}</div>
                                    <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }), { ssr: false }
) as React.ComponentType;

/* ── Word counter sidebar (specific to this tool) ──────── */
const WordCounterSidebar = dynamic(
    () => import('@/tools/word-counter').then(m => {
        const { whatsMeasured, commonLimits } = m as {
            whatsMeasured: { label: string; desc: string }[];
            commonLimits:  { platform: string; limit: string }[];
        };

        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>What's measured</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {whatsMeasured.map(({ label, desc }) => (
                            <div key={label} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                                    <polyline points="20 6 9 17 4 12"/>
                                </svg>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{label}</div>
                                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 20, padding: 14, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                        <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', marginBottom: 12 }}>Common limits to keep in mind</p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                            {commonLimits.map(({ platform, limit }) => (
                                <div key={platform} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: 12, color: 'var(--ink-2)' }}>{platform}</span>
                                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)', fontFamily: 'JetBrains Mono, monospace' }}>{limit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };
    }),
    { ssr: false }
) as React.ComponentType;

const CaseConverterSidebar = dynamic(
    () => import('@/tools/case-converter').then(m => {
        const { useCases } = m as { useCases: { label: string; desc: string }[] };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>When to use each case</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {useCases.map(({ label, desc }) => (
                            <div key={label} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                                <div style={{ minWidth: 0 }}>
                                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 2 }}>{label}</div>
                                    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }),
    { ssr: false }
) as React.ComponentType;

const ColorPaletteSidebar = dynamic(
    () => import('@/tools/color-palette').then(m => {
        const { harmonySidebar, colorTips } = m as {
            harmonySidebar: { label: string; desc: string }[];
            colorTips: { tip: string; desc: string }[];
        };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>
                        Color harmony modes
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {harmonySidebar.map(({ label, desc }) => (
                            <div key={label} style={{ display: 'flex', gap: 12, padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                                <div style={{ minWidth: 0 }}>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 2 }}>{label}</div>
                                    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', margin: '20px 0 12px' }}>
                        Color tips
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {colorTips.map(({ tip, desc }) => (
                            <div key={tip} style={{ padding: '12px 14px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-m)' }}>
                                <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{tip}</div>
                                <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>{desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }),
    { ssr: false }
) as React.ComponentType;

/* ── Generic info sidebar (UUID, Base64, JSON) ─────────── */
function InfoSidebar({ items }: { items: { label: string; value?: string; desc?: string }[] }) {
    return (
        <div className="tool-sidebar">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {items.map(({ label, value, desc }) => (
                    <div key={label} style={{ padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: value ? 2 : 4 }}>{label}</div>
                        {value && <div style={{ fontSize: 13, color: 'var(--ink-2)', fontFamily: 'JetBrains Mono, monospace' }}>{value}</div>}
                        {desc  && <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>{desc}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

const UuidSidebar = dynamic(
    () => import('@/tools/uuid-generator').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; value: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const Base64Sidebar = dynamic(
    () => import('@/tools/base64').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; value: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const JsonSidebar = dynamic(
    () => import('@/tools/json-formatter').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; desc: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const LoremSidebar = dynamic(
    () => import('@/tools/lorem-ipsum').then(m => {
        const { useCases } = m as { useCases: { label: string; desc: string }[] };
        return function Sidebar() { return <InfoSidebar items={useCases.map(u => ({ label: u.label, desc: u.desc }))} />; };
    }), { ssr: false }
) as React.ComponentType;

const UsernameSidebar = dynamic(
    () => import('@/tools/username-generator').then(m => {
        const { styleGuide } = m as { styleGuide: { style: string; example: string; desc: string }[] };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>Style guide</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {styleGuide.map(({ style, example, desc }) => (
                            <div key={style} style={{ padding: '11px 0', borderBottom: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 3 }}>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{style}</span>
                                    <span style={{ fontSize: 12, fontFamily: 'JetBrains Mono, monospace', color: 'var(--ink-3)' }}>{example}</span>
                                </div>
                                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }), { ssr: false }
) as React.ComponentType;

const HashSidebar = dynamic(
    () => import('@/tools/hash-generator').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; value: string; desc: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const UrlSidebar = dynamic(
    () => import('@/tools/url-encoder').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; value: string }[] };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>Common encodings</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {sidebarInfo.map(({ label, value }) => (
                            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: '1px solid var(--border)' }}>
                                <span style={{ fontSize: 13, color: 'var(--ink-2)' }}>{label}</span>
                                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--ink)', background: 'var(--border)', padding: '2px 8px', borderRadius: 'var(--r-s)' }}>{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }), { ssr: false }
) as React.ComponentType;

const MarkdownSidebar = dynamic(
    () => import('@/tools/markdown-editor').then(m => {
        const { cheatSheet } = m as { cheatSheet: { syntax: string; output: string }[] };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>Markdown cheatsheet</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {cheatSheet.map(({ syntax, output }) => (
                            <div key={syntax} style={{ display: 'flex', flexDirection: 'column', gap: 2, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                                <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--ink)', background: 'var(--border)', padding: '2px 6px', borderRadius: 4, alignSelf: 'flex-start' }}>{syntax}</code>
                                <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{output}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }), { ssr: false }
) as React.ComponentType;

const RegexSidebar = dynamic(
    () => import('@/tools/regex-tester').then(m => {
        const { cheatSheet } = m as { cheatSheet: { syntax: string; desc: string }[] };
        return function Sidebar() {
            return (
                <div className="tool-sidebar">
                    <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 14 }}>Regex cheatsheet</p>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {cheatSheet.map(({ syntax, desc }) => (
                            <div key={syntax} style={{ display: 'flex', alignItems: 'baseline', gap: 10, padding: '7px 0', borderBottom: '1px solid var(--border)' }}>
                                <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)', background: 'var(--green-lt)', padding: '1px 6px', borderRadius: 4, flexShrink: 0, minWidth: 80 }}>{syntax}</code>
                                <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{desc}</span>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };
    }), { ssr: false }
) as React.ComponentType;

/* ── Sidebar router ────────────────────────────────────── */
function ToolSidebar({ slug }: { slug: string }) {
    if (slug === 'password-generator') return <PasswordGeneratorSidebar />;
    if (slug === 'word-counter')       return <WordCounterSidebar />;
    if (slug === 'case-converter')     return <CaseConverterSidebar />;
    if (slug === 'color-palette')      return <ColorPaletteSidebar />;
    if (slug === 'uuid-generator')     return <UuidSidebar />;
    if (slug === 'base64')             return <Base64Sidebar />;
    if (slug === 'json-formatter')     return <JsonSidebar />;
    if (slug === 'lorem-ipsum')        return <LoremSidebar />;
    if (slug === 'username-generator') return <UsernameSidebar />;
    if (slug === 'hash-generator')     return <HashSidebar />;
    if (slug === 'url-encoder')        return <UrlSidebar />;
    if (slug === 'markdown-editor')    return <MarkdownSidebar />;
    if (slug === 'regex-tester')       return <RegexSidebar />;
    return null;
}

/* ── Page ─────────────────────────────────────────────── */
interface Props { tool: ToolMeta; }

const CATEGORY_SLUGS: Record<string, string> = {
    'Security':        '/tools/security',
    'Developer Tools': '/tools/developer',
    'Text & Writing':  '/tools/text',
    'Design':          '/tools/design',
};

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';

const ToolPage: NextPage<Props> = ({ tool }) => {
    const Widget = TOOL_WIDGETS[tool.slug];
    const relatedTools = TOOLS.filter(t => t.category === tool.category && t.slug !== tool.slug).slice(0, 4);
    const toolUrl = `${BASE_URL}/tools/${tool.slug}`;

    return (
        <>
            <Head>
                {/* ── Primary SEO ── */}
                <title>{tool.seoTitle}</title>
                <meta name="description" content={tool.seoDescription} />
                <meta name="keywords"    content={tool.keywords.join(', ')} />
                <link rel="canonical"    href={toolUrl} />

                {/* ── Open Graph ── */}
                <meta property="og:title"       content={tool.seoTitle} />
                <meta property="og:description" content={tool.seoDescription} />
                <meta property="og:type"        content="website" />
                <meta property="og:url"         content={toolUrl} />
                <meta property="og:image"       content={`${BASE_URL}/og-image.png`} />
                <meta property="og:site_name"   content="ToolKit" />

                {/* ── Twitter Card ── */}
                <meta name="twitter:card"        content="summary_large_image" />
                <meta name="twitter:title"       content={tool.seoTitle} />
                <meta name="twitter:description" content={tool.seoDescription} />
                <meta name="twitter:image"       content={`${BASE_URL}/og-image.png`} />

                {/* ── Structured data: SoftwareApplication (expanded) ── */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'SoftwareApplication',
                        '@id': `${toolUrl}/#software`,
                        name: tool.seoH1,
                        description: tool.seoDescription,
                        url: toolUrl,
                        applicationCategory: 'UtilitiesApplication',
                        operatingSystem: 'Web Browser',
                        featureList: tool.keywords,
                        audience: {
                            '@type': 'Audience',
                            audienceType: 'Developers, Designers, Everyone',
                        },
                        offers: {
                            '@type': 'Offer',
                            price: '0',
                            priceCurrency: 'USD',
                        },
                        isPartOf: {
                            '@type': 'WebSite',
                            '@id': `${BASE_URL}/#website`,
                            name: 'ToolKit',
                            url: BASE_URL,
                        },
                        publisher: {
                            '@type': 'Organization',
                            '@id': `${BASE_URL}/#organization`,
                        },
                    }),
                }} />

                {/* ── Structured data: HowTo ── */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'HowTo',
                        name: `How to use ${tool.name}`,
                        description: `Step-by-step guide to using the free online ${tool.name}.`,
                        tool: [{ '@type': 'HowToTool', name: tool.name, url: toolUrl }],
                        step: tool.slug === 'password-generator' ? [
                            { '@type': 'HowToStep', position: 1, name: 'Set password length', text: 'Use the length slider to choose between 8 and 64 characters. For most accounts, 16–20 characters is recommended.' },
                            { '@type': 'HowToStep', position: 2, name: 'Choose character types', text: 'Enable uppercase letters, lowercase letters, numbers, and symbols for maximum entropy.' },
                            { '@type': 'HowToStep', position: 3, name: 'Generate your password', text: 'Click Generate. A cryptographically random password appears instantly using the Web Crypto API.' },
                            { '@type': 'HowToStep', position: 4, name: 'Copy and save', text: 'Click the copy icon and paste the password directly into your password manager.' },
                        ] : [
                            { '@type': 'HowToStep', position: 1, name: 'Open the tool', text: `Navigate to ${tool.seoH1} on ToolKit. No signup or installation required.` },
                            { '@type': 'HowToStep', position: 2, name: 'Enter your input', text: 'Type or paste your content into the input field. The tool processes everything locally in your browser.' },
                            { '@type': 'HowToStep', position: 3, name: 'Get your result', text: 'Your result appears instantly. Click Copy to copy it to your clipboard.' },
                        ],
                        totalTime: 'PT1M',
                    }),
                }} />

                {/* ── Structured data: BreadcrumbList ── */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Home',            item: BASE_URL },
                            { '@type': 'ListItem', position: 2, name: 'All Tools',       item: `${BASE_URL}/tools` },
                            { '@type': 'ListItem', position: 3, name: tool.category,     item: `${BASE_URL}${CATEGORY_SLUGS[tool.category] ?? '/tools'}` },
                            { '@type': 'ListItem', position: 4, name: tool.name,         item: toolUrl },
                        ],
                    }),
                }} />
            </Head>

            <Layout>
                {/* ── Hero + Tool ───────────────────────────── */}
                <section style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(32px, 5vw, 52px) 16px 0' }}>
                    {/* Breadcrumb — visible, also semantic */}
                    <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
                        <ol style={{ display: 'flex', gap: 6, alignItems: 'center', listStyle: 'none', fontSize: 13, color: 'var(--ink-3)', flexWrap: 'wrap' }}>
                            <li><a href="/"      style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Home</a></li>
                            <li aria-hidden>›</li>
                            <li><a href="/tools" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Tools</a></li>
                            <li aria-hidden>›</li>
                            <li>
                                <a href={CATEGORY_SLUGS[tool.category] ?? '/tools'} style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>
                                    {tool.category}
                                </a>
                            </li>
                            <li aria-hidden>›</li>
                            <li aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>{tool.name}</li>
                        </ol>
                    </nav>

                    <div className="tool-grid">
                        {/* Left */}
                        <div>
                            <p className="ov a0" style={{ marginBottom: 10 }}>{tool.category}</p>
                            <h1 className="disp a1" style={{ fontSize: 'clamp(24px, 4vw, 40px)', marginBottom: 12 }}>
                                {tool.seoH1}
                            </h1>
                            <p className="a2" style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 24, maxWidth: 480 }}>
                                {tool.description}
                            </p>
                            {Widget && (
                                <div className="card a3" style={{ padding: 'clamp(16px, 3vw, 28px)' }}>
                                    <Widget />
                                </div>
                            )}
                        </div>

                        {/* Right — tool-specific sidebar (hidden on mobile via CSS) */}
                        <ToolSidebar slug={tool.slug} />
                    </div>
                </section>

                {/* ── FAQ with FAQPage schema ────────────────── */}
                <ToolContent slug={tool.slug} />

                {/* ── FAQ with FAQPage schema ────────────────── */}
                <ToolFaq slug={tool.slug} />

                {/* ── Related tools ─────────────────────────── */}
                {relatedTools.length > 0 && (
                    <section style={{ maxWidth: 1000, margin: '56px auto 0', padding: '0 16px' }}>
                        <p className="ov" style={{ marginBottom: 12 }}>More in {tool.category}</p>
                        <div className="tools-grid">
                            {relatedTools.map(t => <ToolCard key={t.slug} tool={t} />)}
                        </div>
                    </section>
                )}

            </Layout>
        </>
    );
};

/* ── Tool content sections ─────────────────────────────── */
const TOOL_CONTENT: Record<string, React.ComponentType> = {
    'password-generator': dynamic(() => import('@/tools/password-generator/content'), { ssr: false }) as React.ComponentType,
    'word-counter':       dynamic(() => import('@/tools/word-counter/content'),       { ssr: false }) as React.ComponentType,
    'json-formatter':     dynamic(() => import('@/tools/json-formatter/content'),     { ssr: false }) as React.ComponentType,
    'base64':             dynamic(() => import('@/tools/base64/content'),             { ssr: false }) as React.ComponentType,
    'case-converter':     dynamic(() => import('@/tools/case-converter/content'),     { ssr: false }) as React.ComponentType,
    'hash-generator':     dynamic(() => import('@/tools/hash-generator/content'),     { ssr: false }) as React.ComponentType,
    'url-encoder':        dynamic(() => import('@/tools/url-encoder/content'),        { ssr: false }) as React.ComponentType,
    'uuid-generator':     dynamic(() => import('@/tools/uuid-generator/content'),     { ssr: false }) as React.ComponentType,
    'lorem-ipsum':        dynamic(() => import('@/tools/lorem-ipsum/content'),        { ssr: false }) as React.ComponentType,
    'markdown-editor':    dynamic(() => import('@/tools/markdown-editor/content'),    { ssr: false }) as React.ComponentType,
    'color-palette':      dynamic(() => import('@/tools/color-palette/content'),      { ssr: false }) as React.ComponentType,
    'regex-tester':       dynamic(() => import('@/tools/regex-tester/content'),       { ssr: false }) as React.ComponentType,
    'username-generator': dynamic(() => import('@/tools/username-generator/content'), { ssr: false }) as React.ComponentType,
};

function ToolContent({ slug }: { slug: string }) {
    const Content = TOOL_CONTENT[slug];
    if (!Content) return null;
    return <Content />;
}

/* ── Async FAQ loader + FAQPage schema ─────────────────── */
function ToolFaq({ slug }: { slug: string }) {
    const loader = TOOL_DATA[slug];
    if (!loader) return null;

    const LazyFaq = dynamic(
        () => loader().then(m => {
            const items = m.faq as FaqItem[];
            const faqSchema = {
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: items.map(item => ({
                    '@type': 'Question',
                    name: item.q,
                    acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
            };
            return function Faq() {
                return (
                    <>
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                        />
                        <FaqSection items={items} />
                    </>
                );
            };
        }),
        { ssr: false }
    );

    return <LazyFaq />;
}

export default ToolPage;