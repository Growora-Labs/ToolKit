import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import type { FaqItem } from '../types';
import { TOOL_SECTIONS } from '../data/tools';

const PasswordGenerator = dynamic(() => import('../components/PasswordGenerator'), { ssr: false });

/* ── Data ─────────────────────────────────────────────── */

const NEXT_TOOLS = [
  { name: 'Lorem Ipsum Generator',   desc: 'Placeholder text for designs'    },
  { name: 'Word Counter',            desc: 'Words, characters, reading time'  },
  { name: 'UUID Generator',          desc: 'Unique IDs in one click'          },
  { name: 'Base64 Encoder',          desc: 'Encode & decode strings'          },
  { name: 'JSON Formatter',          desc: 'Prettify & validate JSON'         },
  { name: 'Color Palette Generator', desc: 'Beautiful color combinations'     },
];

const FAQ: FaqItem[] = [
  {
    q: 'Is this password generator safe to use?',
    a: 'Yes — completely. Everything runs in your browser via the Web Crypto API (the same standard that powers HTTPS). No password ever leaves your device.',
  },
  {
    q: 'How long should my password be?',
    a: 'At least 16 characters for everyday accounts. For banking or email, use 20+ characters with symbols enabled.',
  },
  {
    q: 'Can I reuse passwords across sites?',
    a: 'Never. One breach exposes every account that shares it. Generate a unique password per site and store them in a password manager.',
  },
  {
    q: 'Where should I store generated passwords?',
    a: 'A dedicated password manager — Bitwarden (free & open-source), 1Password, or similar. Avoid plain-text files or browser autofill for sensitive accounts.',
  },
  {
    q: 'What actually makes a password strong?',
    a: 'Length matters most. A 24-character lowercase-only password is statistically stronger than an 8-character one with every character type. Prioritise length, then add variety.',
  },
];

const SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Password Generator — ToolKit',
  description: 'Free browser-based password generator. Strong random passwords — never stored or transmitted.',
  applicationCategory: 'SecurityApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

/* ── SVG icons used on this page ─────────────────────── */
const IcoLock    = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
);
const IcoZap     = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
);
const IcoShield  = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
);
const IcoSliders = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
      <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
      <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
    </svg>
);
const IcoClock   = ({ size = 14 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
);

/* ── Shared: Logo ─────────────────────────────────────── */
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
const HomePage: NextPage = () => (
    <>
      <Head>
        <title>Free Password Generator — Strong &amp; Secure | ToolKit</title>
        <meta name="description" content="Generate strong, random passwords instantly. Customize length, symbols, numbers & more. 100% free, browser-based — passwords never leave your device." />
        <link rel="canonical" href="https://yourtoolkit.com/" />
        <meta property="og:title" content="Free Password Generator | ToolKit" />
        <meta property="og:description" content="Secure, random passwords in one click. 100% browser-based." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      </Head>

      <div style={{ background: 'var(--page-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

        {/* ══ Header ════════════════════════════════════════ */}
        <header style={{
          position: 'sticky', top: 0, zIndex: 40,
          background: 'rgba(244,243,239,.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div className="wrap-wide" style={{ height: 54, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Logo />
            <nav style={{ display: 'flex', gap: 3 }}>
              <Link href="/"      className="nav-pill on">Password Generator</Link>
              <Link href="/tools" className="nav-pill">All Tools</Link>
            </nav>
          </div>
        </header>

        {/* ══ Main ══════════════════════════════════════════ */}
        <main style={{ flex: 1 }}>

          {/* ── Hero: 2-column on desktop ──────────────────
            Left:  H1 + tool card  (640px max)
            Right: feature list    (fills remaining space)
        ────────────────────────────────────────────────── */}
          <section style={{ padding: '52px 24px 0', maxWidth: 1000, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 620px) 1fr',
              gap: 48,
              alignItems: 'start',
            }}>

              {/* LEFT column */}
              <div>
                {/* Eyebrow */}
                <p className="ov a0" style={{ marginBottom: 10 }}>Free online tool</p>

                {/* H1 — tighter, more editorial */}
                <h1 className="disp a1" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 12 }}>
                  Password Generator
                </h1>

                <p className="a2" style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 28, maxWidth: 480 }}>
                  Create strong, cryptographically random passwords in seconds.
                  No signup, no tracking, nothing stored.
                </p>

                {/* Tool card */}
                <div className="card a3" style={{ padding: 'clamp(20px, 3vw, 28px)' }}>
                  <PasswordGenerator />
                </div>
              </div>

              {/* RIGHT column — fills the empty space */}
              <div className="a2" style={{ paddingTop: 44 }}>

                {/* Why this tool */}
                <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>
                  Why use this tool?
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[
                    { Icon: IcoShield, color: 'var(--green)', bg: 'var(--green-lt)',
                      title: 'Cryptographically secure',
                      desc: 'Uses Web Crypto API — the same randomness source as your OS.' },
                    { Icon: IcoLock,   color: 'var(--blue)',  bg: 'var(--blue-lt)',
                      title: 'Zero data collection',
                      desc: 'Generated in your browser. Nothing is ever sent to a server.' },
                    { Icon: IcoSliders,color: 'var(--amber)', bg: 'var(--amber-lt)',
                      title: 'Fully customisable',
                      desc: 'Length from 8 to 64 chars. Toggle uppercase, numbers, symbols.' },
                    { Icon: IcoZap,    color: 'var(--ink-2)', bg: 'var(--border)',
                      title: 'Instant & free',
                      desc: 'No account, no rate limits, no ads. Always free.' },
                  ].map(({ Icon, color, bg, title, desc }) => (
                      <div key={title} style={{
                        display: 'flex', gap: 13, padding: '14px 0',
                        borderBottom: '1px solid var(--border)',
                      }}>
                        <div style={{
                          width: 32, height: 32, borderRadius: 8,
                          background: bg, color, flexShrink: 0,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <Icon size={15} />
                        </div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>{title}</div>
                          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                        </div>
                      </div>
                  ))}
                </div>

                {/* Coming soon strip */}
                <div style={{ marginTop: 24, padding: '14px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>More tools coming</span>
                    <Link href="/tools" style={{ fontSize: 11, color: 'var(--green)', textDecoration: 'none', fontWeight: 600 }}>View all →</Link>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {NEXT_TOOLS.slice(0, 4).map(t => (
                        <div key={t.name} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          gap: 8, padding: '7px 0',
                          borderBottom: '1px solid var(--border)',
                        }}>
                          <div style={{ minWidth: 0 }}>
                            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', lineHeight: 1 }}>{t.name}</div>
                            <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 2 }}>{t.desc}</div>
                          </div>
                          <span className="badge b-amber">Soon</span>
                        </div>
                    ))}
                    <div style={{ paddingTop: 4, fontSize: 11, color: 'var(--ink-4)' }}>
                      + {NEXT_TOOLS.length - 4} more planned
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────── */}
          <section style={{ maxWidth: 640, margin: '72px auto 0', padding: '0 24px' }}>
            <p className="ov" style={{ marginBottom: 10 }}>FAQ</p>
            <h2 className="hdg" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', marginBottom: 24 }}>
              Common questions
            </h2>
            {FAQ.map(item => (
                <details key={item.q} className="faq-item">
                  <summary>
                    <span>{item.q}</span>
                    <span className="faq-chevron" aria-hidden>+</span>
                  </summary>
                  <p className="faq-body">{item.a}</p>
                </details>
            ))}
          </section>

          {/* ── All tools ───────────────────────────────── */}
          <section style={{ maxWidth: 1000, margin: '72px auto 0', padding: '0 24px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
              <div>
                <p className="ov" style={{ marginBottom: 10 }}>All tools</p>
                <h2 className="hdg" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
                  What's in the toolkit
                </h2>
              </div>
              <Link href="/tools" style={{ fontSize: 13, color: 'var(--green)', textDecoration: 'none', fontWeight: 600 }}>
                View full directory →
              </Link>
            </div>

            {TOOL_SECTIONS.map(section => (
                <div key={section.category} style={{ marginBottom: 28 }}>
                  <p className="ov" style={{ marginBottom: 10 }}>{section.category}</p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 7 }}>
                    {section.tools.map(tool => {
                      if (tool.live && tool.href) {
                        return (
                            <Link key={tool.name} href={tool.href} className="tc-live">
                              <div className="ti"><tool.Icon size={14} /></div>
                              <div style={{ minWidth: 0, flex: 1 }}>
                                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>{tool.name}</div>
                                <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>{tool.desc}</div>
                              </div>
                              <span className="badge b-green">Live</span>
                            </Link>
                        );
                      }
                      return (
                          <div key={tool.name} className="tc-soon" aria-disabled="true">
                            <div className="ti"><tool.Icon size={14} /></div>
                            <div style={{ minWidth: 0, flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.2 }}>{tool.name}</div>
                              <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>{tool.desc}</div>
                            </div>
                            <span className="badge b-gray">Soon</span>
                          </div>
                      );
                    })}
                  </div>
                </div>
            ))}
          </section>

        </main>

        {/* ══ Footer ════════════════════════════════════════ */}
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
    </>
);

export default HomePage;