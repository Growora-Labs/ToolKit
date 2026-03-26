import type { ReactNode } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* ── Logo ─────────────────────────────────────── */
export function Logo() {
    return (
        <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
            <img
                src="/logo.svg"
                alt="ToolKit"
                width={120}
                height={32}
                style={{ display: 'block', height: 32, width: 'auto' }}
            />
        </Link>
    );
}

const CATEGORIES = [
    { href: '/tools/security',  label: 'Security'        },
    { href: '/tools/developer', label: 'Developer Tools' },
    { href: '/tools/text',      label: 'Text & Writing'  },
    { href: '/tools/design',    label: 'Design'          },
];

/* ── Layout ───────────────────────────────────── */
interface LayoutProps {
    children: ReactNode;
    activeNav?: 'home' | 'tools';
}

export function Layout({ children, activeNav }: LayoutProps) {
    const router = useRouter();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) => {
        if (activeNav === 'home'  && href === '/')      return true;
        if (activeNav === 'tools' && href === '/tools') return true;
        return router.pathname === href || router.pathname.startsWith(href + '/');
    };

    return (
        <div style={{ background: 'var(--page-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* ── Header ──────────────────────────────── */}
            <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(244,243,239,.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
                <div className="wrap-wide" style={{ height: 54, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <Logo />

                    {/* Desktop nav */}
                    <style>{`
                        @media(min-width:640px){ .desktop-nav { display:flex!important } }
                        @media(min-width:640px){ .ham { display:none!important } }
                        @media(max-width:639px){ .mob-menu-wrap { display:block!important } }
                    `}</style>
                    <nav className="desktop-nav" style={{ display: 'none', alignItems: 'center', gap: 2 }} aria-label="Main navigation">
                        <Link href="/"      className={`nav-pill${isActive('/') && router.pathname === '/' ? ' on' : ''}`}>Home</Link>
                        <Link href="/tools" className={`nav-pill${router.pathname === '/tools' ? ' on' : ''}`}>All Tools</Link>

                        {/* Divider */}
                        <span style={{ width: 1, height: 16, background: 'var(--border)', margin: '0 6px' }} />

                        {/* Category links */}
                        {CATEGORIES.map(({ href, label }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`nav-pill${isActive(href) ? ' on' : ''}`}
                                style={{ fontSize: 12 }}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(o => !o)}
                        aria-label="Toggle menu"
                        className="ham"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}
                    >
                        <span style={{ display: 'block', width: 20, height: 2, background: open ? 'transparent' : 'var(--ink)', borderRadius: 2, transition: 'all .2s' }} />
                        <span style={{ display: 'block', width: 20, height: 2, background: 'var(--ink)', borderRadius: 2, transform: open ? 'rotate(45deg) translate(5px, -4px)' : 'none', transition: 'all .2s' }} />
                        <span style={{ display: 'block', width: 20, height: 2, background: open ? 'transparent' : 'var(--ink)', borderRadius: 2, transition: 'all .2s' }} />
                    </button>
                </div>

                {/* Mobile dropdown */}
                {open && (
                    <div className="mob-menu-wrap" style={{ display: 'none', borderTop: '1px solid var(--border)', background: 'var(--white)', padding: '8px 16px 16px' }}>
                        {/* Main links */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 12 }}>
                            {[{ href: '/', label: 'Home' }, { href: '/tools', label: 'All Tools' }].map(({ href, label }) => (
                                <Link key={href} href={href} onClick={() => setOpen(false)} style={{ padding: '10px 12px', borderRadius: 'var(--r-m)', fontSize: 15, fontWeight: 500, color: isActive(href) ? 'var(--green)' : 'var(--ink-2)', background: isActive(href) ? 'var(--green-lt)' : 'transparent', textDecoration: 'none', display: 'block' }}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                        {/* Category links */}
                        <div style={{ borderTop: '1px solid var(--border)', paddingTop: 10 }}>
                            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: 6, paddingLeft: 12 }}>Categories</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                {CATEGORIES.map(({ href, label }) => (
                                    <Link key={href} href={href} onClick={() => setOpen(false)} style={{ padding: '9px 12px', borderRadius: 'var(--r-m)', fontSize: 14, fontWeight: 500, color: isActive(href) ? 'var(--green)' : 'var(--ink-2)', background: isActive(href) ? 'var(--green-lt)' : 'transparent', textDecoration: 'none', display: 'block' }}>
                                        {label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* ── Main ───────────────────────────────── */}
            <main style={{ flex: 1 }}>
                {children}
            </main>

            {/* ── Footer ─────────────────────────────── */}
            <footer style={{ borderTop: '1px solid var(--border)', marginTop: 64 }}>
                <div className="wrap-wide" style={{ padding: '32px 0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'start', gap: 32, flexWrap: 'wrap' }}>

                        {/* Brand */}
                        <div>
                            <Logo />
                            <p style={{ fontSize: 13, color: 'var(--ink-4)', marginTop: 10, maxWidth: 200, lineHeight: 1.55 }}>
                                Free browser-based tools.<br />No signup. No tracking.
                            </p>
                        </div>

                        {/* Categories */}
                        <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', paddingLeft: 16 }}>
                            <div>
                                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: 12 }}>Tools</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                                    <Link href="/tools" style={{ fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none' }}>All Tools</Link>
                                    {CATEGORIES.map(({ href, label }) => (
                                        <Link key={href} href={href} style={{ fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none' }}>{label}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Copyright */}
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontSize: 13, color: 'var(--ink-4)' }}>© {new Date().getFullYear()} ToolKit</p>
                        </div>

                    </div>
                </div>
            </footer>

        </div>
    );
}