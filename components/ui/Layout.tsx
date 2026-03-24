import type { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IcoZap } from '../icons';

/* ── Logo ─────────────────────────────────────────────── */
export function Logo() {
  return (
    <Link href="/" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <div style={{
        width: 27, height: 27, background: 'var(--ink)', borderRadius: 7,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <IcoZap size={13} />
      </div>
      <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', letterSpacing: '-0.02em' }}>
        ToolKit
      </span>
    </Link>
  );
}

/* ── Layout ───────────────────────────────────────────── */
interface LayoutProps {
  children: ReactNode;
  /** Active nav slug — defaults to current route */
  activeNav?: 'home' | 'tools';
}

export function Layout({ children, activeNav }: LayoutProps) {
  const router  = useRouter();
  const isTools = activeNav === 'tools' || router.pathname === '/tools';
  const isHome  = activeNav === 'home'  || router.pathname === '/';

  return (
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
            <Link href="/"      className={`nav-pill${isHome  ? ' on' : ''}`}>Password Generator</Link>
            <Link href="/tools" className={`nav-pill${isTools ? ' on' : ''}`}>All Tools</Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border)', marginTop: 80 }}>
        <div className="wrap-wide" style={{
          height: 52, display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 12,
        }}>
          <Logo />
          <div style={{ display: 'flex', gap: 20 }}>
            <Link href="/tools"   style={{ fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none' }}>All Tools</Link>
            <Link href="/privacy" style={{ fontSize: 13, color: 'var(--ink-3)', textDecoration: 'none' }}>Privacy</Link>
          </div>
          <p style={{ fontSize: 13, color: 'var(--ink-4)' }}>© {new Date().getFullYear()} ToolKit</p>
        </div>
      </footer>

    </div>
  );
}
