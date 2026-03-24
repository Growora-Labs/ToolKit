import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { TOOL_SECTIONS, IcoZap } from '../../data/tools';

const liveCount = TOOL_SECTIONS.flatMap(s => s.tools).filter(t => t.live).length;
const soonCount = TOOL_SECTIONS.flatMap(s => s.tools).filter(t => !t.live).length;

/* ── Shared logo ──────────────────────────────────────── */
function Logo() {
    return (
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <div style={{
                width: 27, height: 27, background: 'var(--ink)', borderRadius: 7,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
                <IcoZap size={13} />
            </div>
            <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
        ToolKit
      </span>
        </Link>
    );
}

/* ── Page ─────────────────────────────────────────────── */
const ToolsPage: NextPage = () => (
    <>
        <Head>
            <title>All Free Tools — Generators &amp; Utilities | ToolKit</title>
            <meta name="description" content="Free online tools for developers, designers and everyone. Password generators, text tools, dev utilities — browser-based, no signup." />
            <link rel="canonical" href="https://yourtoolkit.com/tools" />
        </Head>

        <div style={{ background: 'var(--page-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Header */}
            <header style={{
                position: 'sticky', top: 0, zIndex: 40,
                background: 'rgba(244,243,239,.92)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--border)',
            }}>
                <div className="wrap-wide" style={{ height: 54, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Logo />
                    <nav style={{ display: 'flex', gap: 3 }}>
                        <Link href="/"      className="nav-pill">Password Generator</Link>
                        <Link href="/tools" className="nav-pill on">All Tools</Link>
                    </nav>
                </div>
            </header>

            <main style={{ flex: 1 }}>
                <div className="wrap-wide" style={{ paddingTop: 48, paddingBottom: 88 }}>

                    {/* Page header */}
                    <div className="a0" style={{ marginBottom: 32 }}>
                        <p className="ov" style={{ marginBottom: 10 }}>Tools directory</p>
                        <h1 className="disp" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: 10 }}>
                            All Free Tools
                        </h1>
                        <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 420 }}>
                            Browser-based utilities — no signup, no tracking, no limits.
                        </p>
                    </div>

                    {/* Status summary */}
                    <div className="a1" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 14,
                        padding: '8px 14px',
                        background: 'var(--white)', border: '1px solid var(--border)',
                        borderRadius: 'var(--r-l)', marginBottom: 40, boxShadow: 'var(--sh-xs)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} />
                            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{liveCount} live</span>
                        </div>
                        <span style={{ width: 1, height: 12, background: 'var(--border)' }} />
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--border-md)', display: 'inline-block' }} />
                            <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>{soonCount} coming soon</span>
                        </div>
                    </div>

                    {/* Sections */}
                    {TOOL_SECTIONS.map(section => (
                        <div key={section.category} style={{ marginBottom: 36 }}>
                            <p className="ov" style={{ marginBottom: 12 }}>{section.category}</p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 8 }}>
                                {section.tools.map(tool => {
                                    if (tool.live && tool.href) {
                                        return (
                                            <Link key={tool.name} href={tool.href} className="tc-live">
                                                <div className="ti">
                                                    <tool.Icon size={15} />
                                                </div>
                                                <div style={{ minWidth: 0, flex: 1 }}>
                                                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
                                                        {tool.name}
                                                    </div>
                                                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 3 }}>
                                                        {tool.desc}
                                                    </div>
                                                </div>
                                                <span className="badge b-green">Live</span>
                                            </Link>
                                        );
                                    }
                                    return (
                                        <div key={tool.name} className="tc-soon" aria-disabled="true">
                                            <div className="ti">
                                                <tool.Icon size={15} />
                                            </div>
                                            <div style={{ minWidth: 0, flex: 1 }}>
                                                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>
                                                    {tool.name}
                                                </div>
                                                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 3 }}>
                                                    {tool.desc}
                                                </div>
                                            </div>
                                            <span className="badge b-gray">Soon</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}

                </div>
            </main>

            <footer style={{ borderTop: '1px solid var(--border)' }}>
                <div className="wrap-wide" style={{
                    height: 52, display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
                }}>
                    <Logo />
                    <p style={{ fontSize: 13, color: 'var(--ink-4)' }}>© {new Date().getFullYear()} ToolKit · Free forever</p>
                </div>
            </footer>

        </div>
    </>
);

export default ToolsPage;