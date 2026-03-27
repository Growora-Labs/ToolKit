import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '@/components/ui/Layout';
import { ToolCard } from '@/components/ui/ToolCard';
import { FaqSection } from '@/components/ui/FaqSection';
import { TOOLS } from '@/lib/registry';
import type { ToolMeta, FaqItem } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';
const PAGE_URL = `${BASE_URL}/tools/security`;

const FAQ: FaqItem[] = [
  {
    q: 'Are these security tools safe to use?',
    a: 'Yes. Every tool on this page runs entirely in your browser using the Web Crypto API. No data — passwords, hashes, or keys — is ever sent to a server, stored, or logged. You can verify this by checking your network tab while using the tools.',
  },
  {
    q: 'What is the difference between hashing and encryption?',
    a: 'Hashing is a one-way process — you cannot reverse a hash to get the original input. Encryption is two-way — data can be decrypted with the right key. Use hashing for integrity verification and password storage (with bcrypt/Argon2). Use encryption for data that needs to be recovered.',
  },
  {
    q: 'How long should a secure password be?',
    a: 'NIST recommends at least 15 characters for general accounts. For high-value accounts like email or banking, use 20+ characters with a mix of uppercase, lowercase, numbers, and symbols. Length matters more than complexity.',
  },
  {
    q: 'Should I use SHA-256 for storing passwords?',
    a: 'No. SHA-256 is too fast — attackers can try billions of guesses per second. Use bcrypt, Argon2, or scrypt for password storage. These are intentionally slow algorithms designed to resist brute-force attacks.',
  },
  {
    q: 'What is a QR code used for in security?',
    a: 'QR codes are commonly used for two-factor authentication (2FA) setup, sharing WiFi credentials securely, and encoding URLs or contact information. When generating QR codes for sensitive data, use a client-side tool like this one so the data never leaves your device.',
  },
];

interface Props { tools: ToolMeta[]; }

export const getStaticProps: GetStaticProps = () => {
  const tools = TOOLS.filter(t => t.category === 'Security');
  return { props: { tools } };
};

const SecurityPage: NextPage<Props> = ({ tools }) => {
  const liveTools = tools.filter(t => t.live);

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'All Tools', item: `${BASE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'Security Tools', item: PAGE_URL },
    ],
  };

  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Free Online Security Tools',
    description: 'Browser-based security utilities — password generator, hash generator, QR code generator and more.',
    url: PAGE_URL,
    numberOfItems: liveTools.length,
    itemListElement: liveTools.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      url: `${BASE_URL}/tools/${t.slug}`,
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
      <>
        <Head>
          <title>Free Online Security Tools — Password Generator, Hash Generator & More | ToolKit</title>
          <meta name="description" content="Free browser-based security tools: password generator, SHA-256 hash generator, bcrypt generator, JWT decoder and QR code generator. No signup, 100% client-side." />
          <link rel="canonical" href={PAGE_URL} />
          <meta property="og:title"       content="Free Online Security Tools | ToolKit" />
          <meta property="og:description" content="Browser-based security utilities. Generate strong passwords, compute hashes, decode JWTs and create QR codes — all in your browser." />
          <meta property="og:type"        content="website" />
          <meta property="og:url"         content={PAGE_URL} />
          <meta property="og:image"       content={`${BASE_URL}/og-image.png`} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </Head>

        <Layout>
          <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(32px,5vw,52px) 16px 0' }}>

            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" style={{ marginBottom: 20 }}>
              <ol style={{ display: 'flex', gap: 6, alignItems: 'center', listStyle: 'none', fontSize: 13, color: 'var(--ink-3)' }}>
                <li><Link href="/"      style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Home</Link></li>
                <li aria-hidden>›</li>
                <li><Link href="/tools" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Tools</Link></li>
                <li aria-hidden>›</li>
                <li aria-current="page" style={{ color: 'var(--ink)', fontWeight: 600 }}>Security</li>
              </ol>
            </nav>

            {/* Hero */}
            <div style={{ marginBottom: 48 }}>
              <p className="ov" style={{ marginBottom: 10 }}>Security Tools</p>
              <h1 className="disp" style={{ fontSize: 'clamp(28px, 5vw, 48px)', marginBottom: 16, maxWidth: 680 }}>
                Free Online Security Tools
              </h1>
              <p style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'var(--ink-2)', lineHeight: 1.7, maxWidth: 620, marginBottom: 0 }}>
                Browser-based security utilities that run entirely on your device. Generate cryptographically strong passwords, compute SHA hashes, decode JWT tokens, and create QR codes — without sending any data to a server.
              </p>
            </div>

            {/* Tools grid */}
            <div className="tools-grid" style={{ marginBottom: 64 }}>
              {tools.map(tool => <ToolCard key={tool.slug} tool={tool} />)}
            </div>

            {/* Variant pages */}
            {tools.some(t => (t.variants ?? []).length > 0) && (
                <div style={{ marginBottom: 64 }}>
                  <p className="ov" style={{ marginBottom: 12 }}>Specialized versions</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {tools.flatMap(t => (t.variants ?? []).map(v => (
                        <Link
                            key={v.slug}
                            href={`/tools/${t.slug}/${v.slug}`}
                            style={{ padding: '7px 14px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', fontSize: 13, fontWeight: 500, color: 'var(--ink-2)', textDecoration: 'none' }}
                        >
                          {v.seoH1}
                        </Link>
                    )))}
                  </div>
                </div>
            )}

            {/* Content */}
            <div style={{ maxWidth: 720, marginBottom: 64 }}>

              <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                  Why use browser-based security tools?
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                  Every security tool on ToolKit runs 100% in your browser using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Web Crypto API</a>. This means your passwords, plaintext inputs, and cryptographic keys never leave your device — there is no server to breach, no logs to leak, and no third party involved.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                  This is especially important for security-related operations. When you generate a password or compute a hash on a server-based tool, you're trusting that the operator doesn't log your input. With client-side tools, you don't need to trust anyone — the code runs locally and you can verify it using your browser's developer tools.
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
                  The <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>OWASP Top 10</a> consistently lists broken authentication and cryptographic failures as the most critical web application security risks. Strong, unique passwords and proper hashing are the first line of defense against both.
                </p>
              </section>

              <section style={{ marginBottom: 48 }}>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                  Security fundamentals every developer should know
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { title: 'Unique password per account', desc: 'A single compromised password should never expose other accounts. Use a password manager (Bitwarden, 1Password) to store unique generated passwords for every service.' },
                    { title: 'Use SHA-256, not SHA-1', desc: 'SHA-1 is deprecated and considered cryptographically broken. Use SHA-256 or SHA-512 for all new implementations. SHA-256 is the current standard for TLS, code signing, and API authentication.' },
                    { title: 'Never hash passwords with SHA', desc: 'SHA is too fast for password storage. Use bcrypt, Argon2id, or scrypt — algorithms designed to be deliberately slow and resistant to GPU-accelerated brute-force attacks.' },
                    { title: 'Verify file integrity with checksums', desc: 'When downloading sensitive software or configuration files, verify the SHA-256 checksum provided by the publisher against the hash you compute locally.' },
                  ].map(({ title, desc }) => (
                      <div key={title} style={{ padding: '16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', display: 'flex', gap: 14 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', flexShrink: 0, marginTop: 6 }} />
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{title}</div>
                          <div style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.6 }}>{desc}</div>
                        </div>
                      </div>
                  ))}
                </div>
              </section>

            </div>

            {/* FAQ */}
            <FaqSection items={FAQ} />

            {/* Related categories */}
            <div style={{ marginTop: 64 }}>
              <p className="ov" style={{ marginBottom: 12 }}>More tool categories</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {[
                  { href: '/tools/developer', label: 'Developer Tools' },
                  { href: '/tools/text',      label: 'Text & Writing'  },
                  { href: '/tools/design',    label: 'Design'          },
                ].map(({ href, label }) => (
                    <Link key={href} href={href} style={{ padding: '8px 16px', background: 'var(--white)', border: '1.5px solid var(--border)', borderRadius: 'var(--r-l)', fontSize: 14, fontWeight: 500, color: 'var(--ink-2)', textDecoration: 'none', transition: 'border-color .14s' }}>
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

export default SecurityPage;