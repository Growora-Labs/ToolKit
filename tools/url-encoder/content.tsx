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

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              URL structure anatomy
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              A URL (Uniform Resource Locator) has a well-defined structure defined by RFC 3986. Understanding each component clarifies which characters must be encoded and where:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Component', 'Example', 'When to encode'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['Scheme',    'https://',                            'Never — use as-is'],
                  ['Host',      'example.com',                         'Punycode for non-ASCII domains (e.g. münchen.de → xn--mnchen-3ya.de)'],
                  ['Port',      ':8080',                               'Never — numeric only'],
                  ['Path',      '/search/results',                     'Encode reserved characters within segments; / separators must remain unencoded'],
                  ['Query key', '?q=',                                 'Encode with encodeURIComponent() — keys can contain any character'],
                  ['Query value','?q=hello+world',                     'Encode with encodeURIComponent() — most important part to encode'],
                  ['Fragment',  '#section-1',                          'Encode if it contains non-ASCII or reserved characters'],
                ].map(([comp, example, note], i) => (
                    <tr key={comp} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)' }}>{comp}</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)' }}>{example}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{note}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              encodeURI vs encodeURIComponent — which to use
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              JavaScript provides two built-in encoding functions, and choosing the wrong one is one of the most common URL-related bugs in web development.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                {
                  fn: 'encodeURIComponent()',
                  use: 'Encoding a query parameter value, a path segment, or any user-supplied string that will be embedded inside a URL.',
                  safe: 'A–Z a–z 0–9 - _ . ! ~ * \' ( )',
                  encodes: 'Everything else, including / : ? & = # @ (all URL structure characters)',
                  tip: 'Use this by default. It is the safer of the two because it encodes all URL structure characters that could be misinterpreted.',
                },
                {
                  fn: 'encodeURI()',
                  use: 'Encoding a complete URL that you want to preserve as a URL (keep the slashes and question marks intact).',
                  safe: 'A–Z a–z 0–9 - _ . ! ~ * \' ( ) ; / ? : @ & = + $ , #',
                  encodes: 'Only characters not allowed anywhere in a URL (e.g. spaces → %20, curly braces, pipe, backslash)',
                  tip: 'Use only when encoding a full URL, not a value within a URL.',
                },
              ].map(({ fn, use, safe, encodes, tip }) => (
                <div key={fn} style={{ padding: '16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 8, fontFamily: 'JetBrains Mono, monospace' }}>{fn}</div>
                  <p style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.65, marginBottom: 6 }}><strong>Use for:</strong> {use}</p>
                  <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55, marginBottom: 6 }}><strong>Does NOT encode:</strong> <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--border)', padding: '1px 4px', borderRadius: 3 }}>{safe}</code></p>
                  <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55, marginBottom: 6 }}><strong>Encodes:</strong> {encodes}</p>
                  <p style={{ fontSize: 13, color: 'var(--green)', lineHeight: 1.55, margin: 0 }}><strong>Tip:</strong> {tip}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Common developer use cases
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
              {[
                { title: 'Building API query strings', desc: 'Encode user search input before appending to an API URL: fetch(`/api?q=${encodeURIComponent(userInput)}`).' },
                { title: 'Redirect URLs in OAuth', desc: 'OAuth redirect_uri parameters must be URL-encoded before being passed as a query parameter: ?redirect_uri=https%3A%2F%2F...' },
                { title: 'Sharing URLs in emails', desc: 'URLs pasted into email bodies often get mangled. Encoding special characters ensures the link survives email client handling.' },
                { title: 'Embedding URLs in HTML attributes', desc: 'Encoding prevents HTML attribute injection. Encode values that appear inside href, src, and action attributes when they come from user input.' },
                { title: 'Decoding API responses', desc: 'Some APIs return percent-encoded strings (especially in Location headers and link previews). Decode them to get the human-readable URL.' },
                { title: 'URL parameters in single-page apps', desc: 'React Router and other SPA frameworks use encoded URLs to store state. Decoding route params before use prevents rendering bugs with special characters in IDs.' },
              ].map(({ title, desc }) => (
                <div key={title} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 24 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', overflow: 'hidden' }}>
              {[
                { q: 'What is the difference between %20 and + for spaces in URLs?', a: 'Both represent a space, but they are used in different contexts. %20 is the RFC 3986 percent-encoding for a space and is valid everywhere in a URL. The + sign for spaces is only valid in the query string when using the application/x-www-form-urlencoded format (the format used by HTML forms). When in doubt, use %20 — it is unambiguous. Many servers decode both, but strictly speaking + as a space only applies to form-encoded data, not arbitrary URL parameters.' },
                { q: 'Should I encode the entire URL or just parts of it?', a: 'Encode only the dynamic parts — values that come from user input or external data. Never encode the structural parts of a URL (the scheme, slashes, question mark, ampersands between parameters, equals signs between keys and values). Use encodeURIComponent() on each individual key and value, then join them yourself: key1=encodeURIComponent(val1)&key2=encodeURIComponent(val2). Encoding the whole URL at once with encodeURI() preserves structure but may miss values that contain reserved characters.' },
                { q: 'Does URL encoding affect the path or only the query string?', a: 'URL encoding is relevant in all parts of the URL where arbitrary data appears. Path segments containing special characters — like a user-uploaded filename with spaces or slashes — must be encoded: /files/my%20photo.jpg. Query parameter values are the most common place to encode, but path segments, fragment identifiers, and even subdomains (via Punycode for non-ASCII) require encoding in their respective forms.' },
                { q: 'Why does decoding %2F not produce a slash in some servers?', a: 'By default, most web servers — Apache, Nginx, and IIS — block or reject paths containing encoded slashes (%2F) because they can be used to bypass path traversal protections. The server interprets the path before decoding, sees a literal %2F, and either rejects the request or treats it as a non-separator character. If you legitimately need to pass a slash in a path segment (for example, a base64url-encoded value), use %2F in the query string instead, or configure your server to allow encoded slashes explicitly.' },
                { q: 'How does URL encoding handle Unicode characters like emoji or Chinese text?', a: 'Unicode characters are first encoded to UTF-8 bytes, then each byte is percent-encoded. The emoji 🚀 is U+1F680, which encodes to the UTF-8 bytes F0 9F 9A 80, which percent-encodes to %F0%9F%9A%80. JavaScript\'s encodeURIComponent() handles this automatically and correctly. When decoding, decodeURIComponent() reverses the process. This is why URLs containing emoji or non-Latin characters look like long sequences of percent-signs in the address bar.' },
                { q: 'What characters are always safe in URLs and never need encoding?', a: 'RFC 3986 defines "unreserved characters" that are always safe and never need encoding: uppercase and lowercase letters (A–Z, a–z), digits (0–9), and four symbols: hyphen (-), underscore (_), period (.), and tilde (~). These 66 characters can appear anywhere in a URL without ambiguity. All other characters — including common symbols like @, !, $, (, ) — are either reserved (have structural meaning in URLs) or must be encoded.' },
                { q: 'Does URL encoding affect SEO?', a: 'URL encoding itself does not directly affect search engine rankings, but URL readability does influence click-through rates. Search engines display URLs in results pages, and a URL like /search?q=coffee+shops+near+me is more clickable than /search?q=coffee%20shops%20near%20me, even though both are equivalent. Best practice: use human-readable slugs in paths (/products/blue-running-shoes) and encode only query parameter values that cannot be made human-readable.' },
                { q: 'Can URL encoding be used for security?', a: 'URL encoding is not a security mechanism — it is a data transport convention. It does not prevent cross-site scripting (XSS), SQL injection, or command injection. Attackers can easily decode percent-encoded input before an injection attack takes effect. True security requires context-aware output encoding (HTML escaping for HTML, parameterised queries for SQL) and input validation. URL encoding query parameters serves correctness (preventing request parsing errors), not security.' },
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