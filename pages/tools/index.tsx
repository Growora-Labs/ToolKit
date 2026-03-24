import type { NextPage } from 'next';
import Head from 'next/head';
import {getByCategory, getLiveTools, getSoonTools} from "@/lib/registry";
import {Layout} from "@/components/ui/Layout";
import {ToolCard} from "@/components/ui/ToolCard";

const ToolsPage: NextPage = () => {
  const byCategory = getByCategory();
  const liveCount  = getLiveTools().length;
  const soonCount  = getSoonTools().length;

  return (
      <>
        <Head>
          <title>All Free Tools — Generators &amp; Utilities | ToolKit</title>
          <meta name="description" content="Free online tools for developers, designers and everyone. Browser-based, no signup, no limits." />
          <link rel="canonical" href="https://www.webtoolkit.tech/tools" />
        </Head>

        <Layout activeNav="tools">
          <div className="wrap-wide" style={{ paddingTop: 'clamp(32px,5vw,48px)', paddingBottom: 80 }}>

            {/* Header */}
            <div className="a0" style={{ marginBottom: 32 }}>
              <p className="ov" style={{ marginBottom: 10 }}>Tools directory</p>
              <h1 className="disp" style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', marginBottom: 10 }}>
                All Free Tools
              </h1>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, maxWidth: 420 }}>
                Browser-based utilities — no signup, no tracking, no limits.
              </p>
            </div>

            {/* Status pill */}
            <div className="a1" style={{
              display: 'inline-flex', alignItems: 'center', gap: 14,
              padding: '8px 14px', background: 'var(--white)',
              border: '1px solid var(--border)', borderRadius: 'var(--r-l)',
              marginBottom: 40, boxShadow: 'var(--sh-xs)',
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

            {/* Categories */}
            {Array.from(byCategory.entries()).map(([category, tools]) => (
                <div key={category} style={{ marginBottom: 36 }}>
                  <p className="ov" style={{ marginBottom: 12 }}>{category}</p>
                  <div className="tools-grid">
                    {tools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
                  </div>
                </div>
            ))}

          </div>
        </Layout>
      </>
  );
};

export default ToolsPage;