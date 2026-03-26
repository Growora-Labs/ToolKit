export default function UuidGeneratorContent() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
      <div>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            What is a UUID?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            A UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify objects in computer systems without requiring a central authority to assign them. The standard format is 32 hexadecimal digits displayed in five groups separated by hyphens: <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</code>. The specification is defined in <a href="https://www.rfc-editor.org/rfc/rfc4122" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>RFC 4122</a>.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            This tool generates <strong style={{ color: 'var(--ink)' }}>Version 4 UUIDs</strong> — randomly generated using <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>window.crypto.randomUUID()</code>, the same Web Crypto API your browser uses for secure operations. With 122 bits of entropy, the probability of generating two identical UUIDs is approximately 1 in 5.3 × 10³⁶.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            How to generate UUIDs
          </h2>
          <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: '1', title: 'Set the count', desc: 'Use the count input to generate between 1 and 50 UUIDs at once. Useful for seeding databases or generating test fixtures.' },
              { n: '2', title: 'Toggle uppercase if needed', desc: 'Some systems require uppercase UUIDs. Click the UPPERCASE toggle to switch between formats — the value is identical either way.' },
              { n: '3', title: 'Click Generate', desc: 'A new set of cryptographically random UUIDs is generated immediately. Each click produces a completely new set.' },
              { n: '4', title: 'Copy individually or all at once', desc: 'Click the copy icon next to any UUID to copy it, or use Copy All when you need multiple UUIDs as a newline-separated list.' },
            ].map(({ n, title, desc }) => (
              <li key={n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{n}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-3)', margin: 0 }}>{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            When to use UUIDs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {[
              { title: 'Database primary keys',   desc: 'UUIDs allow distributed systems to generate IDs independently without coordination. Preferred over auto-increment when merging databases.' },
              { title: 'API resource identifiers', desc: 'Expose UUIDs in REST API endpoints instead of sequential integers to avoid leaking record counts and prevent enumeration attacks.' },
              { title: 'Session tokens',           desc: 'Use UUIDs as session, request, or correlation IDs for tracing requests across microservices.' },
              { title: 'File names',               desc: 'Generate UUID-based file names when storing uploads to avoid collisions and prevent predictable paths.' },
              { title: 'Idempotency keys',         desc: 'Send a UUID with each API request as an idempotency key to safely retry requests without duplicate operations.' },
              { title: 'Test data generation',     desc: 'Generate bulk UUIDs to seed test databases, mock fixtures, or populate staging environments.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
