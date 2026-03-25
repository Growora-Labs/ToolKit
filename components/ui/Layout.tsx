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

const NAV_LINKS = [
    { href: '/',      label: 'Home'      },
    { href: '/tools', label: 'All Tools' },
];

/* ── Layout ───────────────────────────────────── */
interface LayoutProps {
    children: ReactNode;
    activeNav?: 'home' | 'tools';
}

export function Layout({ children, activeNav }: LayoutProps) {
    const router   = useRouter();
    const [open, setOpen] = useState(false);

    const isActive = (href: string) => {
        if (activeNav === 'home'  && href === '/')      return true;
        if (activeNav === 'tools' && href === '/tools') return true;
        return router.pathname === href;
    };

    return (
        <div style={{ background: 'var(--page-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

            {/* Header */}
            <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(244,243,239,.95)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border)' }}>
                <div className="wrap-wide" style={{ height: 54, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Logo />

                    {/* Desktop nav */}
                    <nav style={{ display: 'flex', gap: 3 }} aria-label="Main navigation">
                        <style>{`@media(min-width:480px){.desktop-nav-link{display:inline-flex!important}}`}</style>
                        {NAV_LINKS.map(({ href, label }) => (
                            <Link key={href} href={href} className={`nav-pill desktop-nav-link${isActive(href) ? ' on' : ''}`} style={{ display: 'none' }}>
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(o => !o)}
                        aria-label="Toggle menu"
                        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        <style>{`@media(min-width:480px){.ham{display:none!important}}`}</style>
                        <div className="ham" style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                            <span style={{ display: 'block', width: 20, height: 2, background: open ? 'transparent' : 'var(--ink)', borderRadius: 2, transition: 'all .2s' }} />
                            <span style={{ display: 'block', width: 20, height: 2, background: 'var(--ink)', borderRadius: 2, transform: open ? 'rotate(45deg) translate(5px, -4px)' : 'none', transition: 'all .2s' }} />
                            <span style={{ display: 'block', width: 20, height: 2, background: open ? 'transparent' : 'var(--ink)', borderRadius: 2, transition: 'all .2s' }} />
                        </div>
                    </button>
                </div>

                {/* Mobile dropdown */}
                {open && (
                    <div style={{ borderTop: '1px solid var(--border)', background: 'var(--white)', padding: '8px 16px 12px' }}>
                        <style>{`@media(min-width:480px){.mob-menu{display:none!important}}`}</style>
                        <div className="mob-menu" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {NAV_LINKS.map(({ href, label }) => (
                                <Link key={href} href={href} onClick={() => setOpen(false)}
                                      style={{ padding: '10px 12px', borderRadius: 'var(--r-m)', fontSize: 15, fontWeight: 500, color: isActive(href) ? 'var(--green)' : 'var(--ink-2)', background: isActive(href) ? 'var(--green-lt)' : 'transparent', textDecoration: 'none', display: 'block' }}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </header>

            {/* Main */}
            <main style={{ flex: 1 }}>
                {children}
            </main>

            {/* Footer */}
            <footer style={{ borderTop: '1px solid var(--border)', marginTop: 64 }}>
                <div className="wrap-wide" style={{ padding: '20px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                    <Logo />
                    <div style={{ display: 'flex', gap: 20 }}>
                        <Link href="/tools" style={{ fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none' }}>All Tools</Link>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--ink-4)' }}>© {new Date().getFullYear()} ToolKit</p>
                </div>
            </footer>

        </div>
    );
}