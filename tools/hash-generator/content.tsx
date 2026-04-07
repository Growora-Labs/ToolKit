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

          {/* ── File integrity verification ───────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              File integrity verification with checksums
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              One of the most common practical uses for SHA hashing is verifying that a downloaded file has not been corrupted or tampered with. Software distributors publish a SHA-256 checksum alongside their download. After downloading, you hash the file locally and compare the result to the published value. If they match, the file is authentic and intact.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              This works because even a single bit change in the file produces a completely different hash — a property called the <strong style={{ color: 'var(--ink)' }}>avalanche effect</strong>. Changing one character in a 1 MB file will produce a hash with no resemblance to the original. You can verify file integrity on the command line:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'macOS / Linux', code: 'shasum -a 256 downloaded-file.zip\n# Compare output to the published checksum' },
                { label: 'Windows (PowerShell)', code: 'Get-FileHash downloaded-file.zip -Algorithm SHA256\n# Compare output to the published checksum' },
              ].map(({ label, code }) => (
                <div key={label} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-3)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                  <pre style={{ margin: 0, padding: '10px 12px', background: 'var(--page-bg)', borderRadius: 'var(--r-s)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)', lineHeight: 1.7 }}>{code}</pre>
                </div>
              ))}
            </div>
          </section>

          {/* ── Common hashing use cases ──────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Common hashing use cases in software development
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
              {[
                { title: 'API request signing', desc: 'HMAC-SHA256 is used to sign API requests (AWS Signature V4, GitHub webhooks) to prove authenticity without exposing the secret key.' },
                { title: 'Git commit IDs', desc: 'Every Git commit, tree, blob, and tag is identified by its SHA-1 hash (migrating to SHA-256). This ensures immutability — any change produces a new hash.' },
                { title: 'Data deduplication', desc: 'Hash file or record content to detect duplicates without byte-by-byte comparison. If two files have the same SHA-256 hash, they are identical.' },
                { title: 'Cache keys', desc: 'Hash the input parameters of a function or query to generate a cache key. Same inputs always produce the same key, regardless of parameter ordering.' },
                { title: 'Content addressing', desc: 'Content-addressable systems (IPFS, Docker image layers) use SHA-256 hashes as addresses. The content itself determines where it is stored.' },
                { title: 'Digital certificates (TLS)', desc: 'X.509 certificates are signed using SHA-256. The certificate fingerprint is the SHA-256 hash of the certificate DER-encoded form — used to verify authenticity.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ─────────────────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 24 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', overflow: 'hidden' }}>
              {[
                { q: 'Can I reverse a SHA hash to get the original text?', a: 'No. SHA hashing is a one-way function — it is computationally infeasible to reverse. You cannot reconstruct the input from the hash. However, for short or common inputs (like simple words or weak passwords), an attacker can use rainbow tables or dictionary attacks to find the matching preimage. This is why SHA should not be used for password storage without additional protections like salting.' },
                { q: 'What is the difference between a hash and a checksum?', a: 'The terms are often used interchangeably, but they differ in intent. A checksum (like CRC32 or Adler-32) is designed to detect accidental corruption — fast to compute but easily forged. A cryptographic hash (like SHA-256) is designed to resist intentional manipulation — much slower but collision-resistant. Use checksums for error detection in data transmission; use cryptographic hashes for security applications.' },
                { q: 'Why is SHA-1 deprecated?', a: 'Researchers demonstrated the first practical SHA-1 collision in 2017 (the SHAttered attack) — two different PDF files with the same SHA-1 hash. This breaks the fundamental collision-resistance property. Google announced deprecation of SHA-1 in Chrome certificate validation in 2017. Do not use SHA-1 for new projects — use SHA-256 or stronger.' },
                { q: 'What is HMAC and how is it different from a plain hash?', a: 'HMAC (Hash-based Message Authentication Code) combines a hash function with a secret key: HMAC(key, message). Unlike a plain hash, HMAC verifies both integrity (the message has not been changed) and authenticity (the sender knows the secret key). Plain hashes prove only integrity. HMAC-SHA256 is used for API request signing, JWT signature verification, and cookie authentication.' },
                { q: 'Is SHA-512 always stronger than SHA-256?', a: 'SHA-512 has a larger output (512 vs 256 bits) and is theoretically more secure against brute force. However, for practical purposes both are computationally secure against current attacks. SHA-512 is actually faster than SHA-256 on 64-bit processors because it uses 64-bit operations. The difference matters for very high-security applications like long-term document archiving, not for typical web application needs.' },
                { q: 'How do I generate a SHA-256 hash in JavaScript?', a: 'Use the Web Crypto API\'s SubtleCrypto.digest() method, which is the same API this tool uses: const msgBuffer = new TextEncoder().encode(text); const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer); const hashArray = Array.from(new Uint8Array(hashBuffer)); const hash = hashArray.map(b => b.toString(16).padStart(2, "0")).join(""). This runs entirely in the browser and requires no external library.' },
                { q: 'What does "uppercase vs lowercase" toggle change?', a: 'Nothing about the hash value itself — only the representation. A SHA-256 hash is a sequence of bytes, conventionally displayed as lowercase hexadecimal. The uppercase toggle simply converts a through f to A through F. Some systems (particularly older ones and certain APIs) require the uppercase form. Both representations decode to identical bytes.' },
                { q: 'Can two different inputs produce the same SHA-256 hash?', a: 'Theoretically yes — this is called a collision — but no SHA-256 collision has ever been found. With 2^256 possible outputs, the probability of accidental collision is approximately 1 in 10^77. By comparison, there are an estimated 10^80 atoms in the observable universe. For practical purposes, SHA-256 collisions do not exist.' },
              ].map(({ q, a }, i, arr) => (
                <div key={q} style={{ padding: '16px 20px', borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none', background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{q}</div>
                  <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.65, margin: 0 }}>{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
  );
}