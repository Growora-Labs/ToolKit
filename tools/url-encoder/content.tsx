export default function UrlEncoderContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is URL encoding?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              URL encoding (also called <strong style={{ color: 'var(--ink)' }}>percent-encoding</strong>) converts characters that are not allowed or have special meaning in URLs into a safe format. Each unsafe character is replaced with a <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>%</code> sign followed by two hexadecimal digits representing the character's UTF-8 byte value. The specification is defined in <a href="https://www.rfc-editor.org/rfc/rfc3986" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>RFC 3986</a>.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              In JavaScript, <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>encodeURIComponent()</code> encodes a value for use as a query string parameter or path segment, escaping everything except letters, digits, and <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--border)', padding: '1px 4px', borderRadius: 3 }}>- _ . ! ~ * ' ( )</code>. Use <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>encodeURI()</code> only for full URLs where you want to preserve the structure (slashes, colons, question marks).
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              For example, a space becomes <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>%20</code>, a question mark becomes <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>%3F</code>, and an ampersand becomes <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>%26</code>. Letters, digits, and <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>- _ . ~</code> are always safe and never encoded.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to encode and decode URLs
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Choose Encode or Decode', desc: 'Select Encode to make text URL-safe. Select Decode to convert percent-encoded strings back to readable text.' },
                { n: '2', title: 'Paste your input', desc: 'Enter the URL, query string, or text you want to convert. The tool handles the full UTF-8 range including Unicode characters and emoji.' },
                { n: '3', title: 'Use Swap for roundtrip testing', desc: 'Click Swap to switch modes and move the output to the input. Useful for verifying that encode → decode returns the original string.' },
                { n: '4', title: 'Copy and use', desc: 'Copy the encoded or decoded result directly into your code, API request, or browser address bar.' },
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
              Common percent-encoded characters
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Character', 'Encoded', 'Notes'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['Space',         '%20',  'Use %20 in paths. In form data (application/x-www-form-urlencoded), spaces may be encoded as + instead.'],
                  ['#  (hash)',     '%23',  'Indicates a fragment identifier in URLs — must be encoded in query values.'],
                  ['&  (ampersand)','%26',  'Separates query parameters — must be encoded within parameter values.'],
                  ['=  (equals)',   '%3D',  'Separates key from value in query strings — must be encoded in values.'],
                  ['?  (question)', '%3F',  'Starts the query string — must be encoded in path segments.'],
                  ['+  (plus)',     '%2B',  'Can be interpreted as a space in form data — encode explicitly to avoid ambiguity.'],
                  ['@  (at)',       '%40',  'Commonly used in email addresses within URLs.'],
                  ['/ (slash)',     '%2F',  'Path separator — encode when it appears within a segment, not as a separator.'],
                ].map(([char, enc, note], i) => (
                    <tr key={enc} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{char}</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>{enc}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{note}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
  );
}