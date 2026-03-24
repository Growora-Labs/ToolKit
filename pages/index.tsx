import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Layout } from '../components/ui/Layout';
import { FaqSection } from '../components/ui/FaqSection';
import { ToolCard } from '../components/ui/ToolCard';
import { getByCategory, getLiveTools, getSoonTools } from '../lib/registry';
import { faq, sidebarFeatures } from '../tools/password-generator';
import { IcoShield, IcoLock, IcoSliders, IcoZap } from '../components/icons';

const PasswordGenerator = dynamic(() => import('../tools/password-generator/component'), { ssr: false });

const SCHEMA = {
  '@context': 'https://schema.org', '@type': 'WebApplication',
  name: 'Password Generator — ToolKit',
  description: 'Free browser-based password generator. Strong random passwords — never stored or transmitted.',
  applicationCategory: 'SecurityApplication', operatingSystem: 'Any',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const FEATURE_ICONS = [IcoShield, IcoLock, IcoSliders, IcoZap];

const HomePage: NextPage = () => {
  const byCategory = getByCategory();
  const liveCount  = getLiveTools().length;
  const soonCount  = getSoonTools().length;

  return (
    <>
      <Head>
        <title>Free Password Generator — Strong &amp; Secure | ToolKit</title>
        <meta name="description" content="Generate strong, random passwords instantly. 100% free and browser-based — passwords never leave your device." />
        <link rel="canonical" href="https://www.webtoolkit.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
        <meta name="google-site-verification" content="PN-2TYCsAwTEBdNWnk2Llr-uMkVUoAo_0hLfCk9S1R4" />
      </Head>

      <Layout activeNav="home">

        {/* ── Hero + Tool ─────────────────────────────── */}
        <section style={{ maxWidth: 1000, margin: '0 auto', padding: '52px 24px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 620px) 1fr', gap: 48, alignItems: 'start' }}>

            {/* Left */}
            <div>
              <p className="ov a0" style={{ marginBottom: 10 }}>Free online tool</p>
              <h1 className="disp a1" style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: 12 }}>
                Password Generator
              </h1>
              <p className="a2" style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 28, maxWidth: 480 }}>
                Create strong, cryptographically random passwords in seconds. No signup, no tracking, nothing stored.
              </p>
              <div className="card a3" style={{ padding: 'clamp(18px, 3vw, 28px)' }}>
                <PasswordGenerator />
              </div>
            </div>

            {/* Right */}
            <div className="a2" style={{ paddingTop: 44 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 16 }}>Why use this tool?</p>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {sidebarFeatures.map(({ label, desc, color, bg }, i) => {
                  const Icon = FEATURE_ICONS[i];
                  return (
                    <div key={label} style={{ display: 'flex', gap: 13, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 8, background: bg, color, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={15} />
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 3 }}>{label}</div>
                        <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Coming soon strip */}
              <div style={{ marginTop: 24, padding: 14, background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink)' }}>More tools coming</span>
                  <Link href="/tools" style={{ fontSize: 11, color: 'var(--green)', textDecoration: 'none', fontWeight: 600 }}>View all →</Link>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {getSoonTools().slice(0, 4).map(t => (
                    <div key={t.slug} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, padding: '6px 0', borderBottom: '1px solid var(--border)' }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ink-2)', lineHeight: 1 }}>{t.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--ink-4)', marginTop: 2 }}>{t.tagline}</div>
                      </div>
                      <span className="badge b-amber">Soon</span>
                    </div>
                  ))}
                  <div style={{ paddingTop: 4, fontSize: 11, color: 'var(--ink-4)' }}>+ {soonCount - 4} more planned</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────── */}
        <FaqSection items={faq} />

        {/* ── All tools ───────────────────────────────── */}
        <section style={{ maxWidth: 1000, margin: '72px auto 0', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 8 }}>
            <div>
              <p className="ov" style={{ marginBottom: 10 }}>All tools</p>
              <h2 className="hdg" style={{ fontSize: 'clamp(18px, 2.5vw, 22px)' }}>What's in the toolkit</h2>
            </div>
            <Link href="/tools" style={{ fontSize: 13, color: 'var(--green)', textDecoration: 'none', fontWeight: 600 }}>View full directory →</Link>
          </div>

          {Array.from(byCategory.entries()).map(([category, tools]) => (
            <div key={category} style={{ marginBottom: 28 }}>
              <p className="ov" style={{ marginBottom: 10 }}>{category}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 7 }}>
                {tools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
              </div>
            </div>
          ))}
        </section>

      </Layout>
    </>
  );
};

export default HomePage;
