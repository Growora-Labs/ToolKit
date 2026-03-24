import type { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Layout } from '../../components/ui/Layout';
import { FaqSection } from '../../components/ui/FaqSection';
import { ToolCard } from '../../components/ui/ToolCard';
import { getBySlug, getLiveSlugs, TOOLS } from '../../lib/registry';
import type { ToolMeta, FaqItem } from '../../lib/types';

/* ── Static paths — only live tools get pages ─────────── */
export const getStaticPaths: GetStaticPaths = () => ({
    paths: getLiveSlugs()
        .filter(s => s !== 'password-generator') // homepage handles this one
        .map(slug => ({ params: { slug } })),
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
    'word-counter':       () => import('../../tools/word-counter'),
    'case-converter':     () => import('../../tools/case-converter'),
    'color-palette':      () => import('../../tools/color-palette'),
    'uuid-generator':     () => import('../../tools/uuid-generator'),
    'lorem-ipsum':        () => import('../../tools/lorem-ipsum'),
    'base64':             () => import('../../tools/base64'),
    'username-generator': () => import('../../tools/username-generator'),
    'json-formatter':     () => import('../../tools/json-formatter'),
};

const TOOL_WIDGETS: Record<string, React.ComponentType> = {
    'word-counter':       dynamic(() => import('../../tools/word-counter/component'),       { ssr: false }) as React.ComponentType,
    'case-converter':     dynamic(() => import('../../tools/case-converter/component'),     { ssr: false }) as React.ComponentType,
    'color-palette':      dynamic(() => import('../../tools/color-palette/component'),      { ssr: false }) as React.ComponentType,
    'uuid-generator':     dynamic(() => import('../../tools/uuid-generator/component'),     { ssr: false }) as React.ComponentType,
    'lorem-ipsum':        dynamic(() => import('../../tools/lorem-ipsum/component'),        { ssr: false }) as React.ComponentType,
    'base64':             dynamic(() => import('../../tools/base64/component'),             { ssr: false }) as React.ComponentType,
    'username-generator': dynamic(() => import('../../tools/username-generator/component'), { ssr: false }) as React.ComponentType,
    'json-formatter':     dynamic(() => import('../../tools/json-formatter/component'),     { ssr: false }) as React.ComponentType,
};

/* ── Word counter sidebar (specific to this tool) ──────── */
const WordCounterSidebar = dynamic(
    () => import('../../tools/word-counter').then(m => {
        const { whatsMeasured, commonLimits } = m as {
            whatsMeasured: { label: string; desc: string }[];
            commonLimits:  { platform: string; limit: string }[];
        };

        return function Sidebar() {
            return (
                <div className="a2" style={{ paddingTop: 44 }}>
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
    () => import('../../tools/case-converter').then(m => {
        const { useCases } = m as { useCases: { label: string; desc: string }[] };
        return function Sidebar() {
            return (
                <div className="a2" style={{ paddingTop: 44 }}>
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
    () => import('../../tools/color-palette').then(m => {
        const { harmonySidebar, colorTips } = m as {
            harmonySidebar: { label: string; desc: string }[];
            colorTips: { tip: string; desc: string }[];
        };
        return function Sidebar() {
            return (
                <div className="a2" style={{ paddingTop: 44 }}>
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
        <div className="a2" style={{ paddingTop: 44 }}>
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
    () => import('../../tools/uuid-generator').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; value: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const Base64Sidebar = dynamic(
    () => import('../../tools/base64').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; value: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const JsonSidebar = dynamic(
    () => import('../../tools/json-formatter').then(m => {
        const { sidebarInfo } = m as { sidebarInfo: { label: string; desc: string }[] };
        return function Sidebar() { return <InfoSidebar items={sidebarInfo} />; };
    }), { ssr: false }
) as React.ComponentType;

const LoremSidebar = dynamic(
    () => import('../../tools/lorem-ipsum').then(m => {
        const { useCases } = m as { useCases: { label: string; desc: string }[] };
        return function Sidebar() { return <InfoSidebar items={useCases.map(u => ({ label: u.label, desc: u.desc }))} />; };
    }), { ssr: false }
) as React.ComponentType;

const UsernameSidebar = dynamic(
    () => import('../../tools/username-generator').then(m => {
        const { styleGuide } = m as { styleGuide: { style: string; example: string; desc: string }[] };
        return function Sidebar() {
            return (
                <div className="a2" style={{ paddingTop: 44 }}>
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

/* ── Sidebar router ────────────────────────────────────── */
function ToolSidebar({ slug }: { slug: string }) {
    if (slug === 'word-counter')       return <WordCounterSidebar />;
    if (slug === 'case-converter')     return <CaseConverterSidebar />;
    if (slug === 'color-palette')      return <ColorPaletteSidebar />;
    if (slug === 'uuid-generator')     return <UuidSidebar />;
    if (slug === 'base64')             return <Base64Sidebar />;
    if (slug === 'json-formatter')     return <JsonSidebar />;
    if (slug === 'lorem-ipsum')        return <LoremSidebar />;
    if (slug === 'username-generator') return <UsernameSidebar />;
    return null;
}

/* ── Page ─────────────────────────────────────────────── */
interface Props { tool: ToolMeta; }

const ToolPage: NextPage<Props> = ({ tool }) => {
    const Widget = TOOL_WIDGETS[tool.slug];
    const relatedTools = TOOLS.filter(t => t.category === tool.category && t.slug !== tool.slug).slice(0, 4);

    return (
        <>
            <Head>
                <title>{tool.name} — Free Online Tool | ToolKit</title>
                <meta name="description" content={tool.description} />
                <meta name="keywords" content={tool.keywords.join(', ')} />
                <link rel="canonical" href={`https://www.webtoolkit.tech/tools/${tool.slug}`} />
                <meta property="og:title" content={`${tool.name} | ToolKit`} />
                <meta property="og:description" content={tool.description} />
                <meta property="og:type" content="website" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org', '@type': 'WebApplication',
                        name: `${tool.name} — ToolKit`,
                        description: tool.description,
                        applicationCategory: 'UtilitiesApplication',
                        operatingSystem: 'Any',
                        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
                    }),
                }} />
            </Head>

            <Layout>
                {/* ── Hero + Tool ───────────────────────────── */}
                <section style={{ maxWidth: 1000, margin: '0 auto', padding: '52px 24px 0' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 620px) 1fr', gap: 48, alignItems: 'start' }}>

                        {/* Left */}
                        <div>
                            <p className="ov a0" style={{ marginBottom: 10 }}>Free online tool · {tool.category}</p>
                            <h1 className="disp a1" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 12 }}>
                                {tool.name}
                            </h1>
                            <p className="a2" style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 28, maxWidth: 480 }}>
                                {tool.description}
                            </p>
                            {Widget && (
                                <div className="card a3" style={{ padding: 'clamp(18px, 3vw, 28px)' }}>
                                    <Widget />
                                </div>
                            )}
                        </div>

                        {/* Right — tool-specific sidebar */}
                        <ToolSidebar slug={tool.slug} />
                    </div>
                </section>

                {/* ── FAQ ───────────────────────────────────── */}
                <ToolFaq slug={tool.slug} />

                {/* ── Related tools ─────────────────────────── */}
                {relatedTools.length > 0 && (
                    <section style={{ maxWidth: 1000, margin: '64px auto 0', padding: '0 24px' }}>
                        <p className="ov" style={{ marginBottom: 10 }}>More in {tool.category}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 7 }}>
                            {relatedTools.map(t => <ToolCard key={t.slug} tool={t} />)}
                        </div>
                    </section>
                )}

            </Layout>
        </>
    );
};

/* ── Async FAQ loader ──────────────────────────────────── */
function ToolFaq({ slug }: { slug: string }) {
    const loader = TOOL_DATA[slug];
    if (!loader) return null;

    const LazyFaq = dynamic(
        () => loader().then(m => {
            const items = m.faq as FaqItem[];
            return function Faq() {
                return <FaqSection items={items} />;
            };
        }),
        { ssr: false }
    );

    return <LazyFaq />;
}

export default ToolPage;