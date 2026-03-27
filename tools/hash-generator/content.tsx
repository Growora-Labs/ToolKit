export default function HashGeneratorContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is a hash function?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              A cryptographic hash function takes any input and produces a fixed-length string called a <strong style={{ color: 'var(--ink)' }}>digest</strong>. The same input always produces the same output, but you cannot reverse the process — you cannot reconstruct the original input from the hash alone. This property makes hashes useful for data integrity verification, digital signatures, and <strong style={{ color: 'var(--ink)' }}>checksums</strong>.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              Two critical properties of a secure hash function are <strong style={{ color: 'var(--ink)' }}>collision resistance</strong> — it should be computationally infeasible to find two different inputs that produce the same hash — and <strong style={{ color: 'var(--ink)' }}>pre-image resistance</strong> — given a hash, you cannot find the original input. SHA-256 and SHA-512 satisfy both properties; SHA-1 does not (it has known collision vulnerabilities).
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              For message authentication, use <strong style={{ color: 'var(--ink)' }}>HMAC</strong> (Hash-based Message Authentication Code) — a construction that combines a hash function with a secret key to verify both integrity and authenticity of a message. HMAC-SHA256 is the standard for API request signing.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              This tool uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Web Crypto SubtleCrypto API</a> to compute hashes locally in your browser. All four SHA variants are generated simultaneously — no server call, no data stored.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to generate a hash
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Enter your text', desc: 'Type or paste any text into the input field. You can hash a single word, a paragraph, an API key, or any string.' },
                { n: '2', title: 'Click Generate', desc: 'All four hash algorithms (SHA-1, SHA-256, SHA-384, SHA-512) are computed simultaneously. Press ⌘↵ (Mac) or Ctrl+↵ (Windows) as a keyboard shortcut.' },
                { n: '3', title: 'Choose uppercase if needed', desc: 'Toggle Uppercase output to get the hash in uppercase hex characters. Both formats are identical in value — some systems require one or the other.' },
                { n: '4', title: 'Copy the hash you need', desc: 'Click Copy next to any algorithm to copy just that hash to your clipboard.' },
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
              SHA-1 vs SHA-256 vs SHA-512 — which to use?
            </h2>
            <div style={{ overflowX: 'auto', marginBottom: 20 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Algorithm', 'Output length', 'Security', 'Use case'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['SHA-1',   '160 bits / 40 hex chars',  '⚠️ Deprecated',     'Legacy systems only — do not use for new projects'],
                  ['SHA-256', '256 bits / 64 hex chars',  '✅ Current standard','File integrity, API signing, TLS certificates, Git commits'],
                  ['SHA-384', '384 bits / 96 hex chars',  '✅ Strong',          'TLS 1.2/1.3 cipher suites, intermediate security requirement'],
                  ['SHA-512', '512 bits / 128 hex chars', '✅ Strongest',       'High-security applications, 64-bit systems (faster than SHA-256)'],
                ].map(([algo, length, sec, use], i) => (
                    <tr key={algo} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--green)' }}>{algo}</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--ink-2)' }}>{length}</td>
                      <td style={{ padding: '10px 14px' }}>{sec}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{use}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              For most purposes, <strong style={{ color: 'var(--ink)' }}>SHA-256 is the right choice</strong>. It is the current <a href="https://csrc.nist.gov/projects/hash-functions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>NIST standard</a>, used by TLS, code signing, and the majority of modern APIs.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <div style={{ padding: '20px 24px', background: 'var(--amber-lt)', border: '1px solid rgba(217,119,6,.25)', borderRadius: 'var(--r-l)' }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>
                ⚠️ Don't use SHA for password hashing
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
                SHA algorithms are designed to be fast — which makes them unsuitable for storing passwords. Fast hashing means an attacker can try billions of guesses per second. For passwords, use slow dedicated algorithms: <strong>bcrypt</strong>, <strong>Argon2</strong>, or <strong>scrypt</strong>. These are intentionally slow and include salting by design.
              </p>
            </div>
          </section>

        </div>
      </div>
  );
}