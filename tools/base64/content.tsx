export default function Base64Content() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
      <div>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            What is Base64 encoding?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            Base64 is an encoding scheme that converts binary data into a string of 64 printable ASCII characters: A–Z, a–z, 0–9, <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>+</code> and <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>/</code>. It is defined in <a href="https://www.rfc-editor.org/rfc/rfc4648" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>RFC 4648</a>.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            Base64 is <strong style={{ color: 'var(--ink)' }}>not encryption</strong> — it is a reversible encoding. Anyone can decode a Base64 string instantly. Its purpose is to safely transmit binary data through text-only channels that can't handle raw bytes — like email (MIME), HTML attributes, or JSON payloads.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            The encoded output is approximately <strong style={{ color: 'var(--ink)' }}>33% larger</strong> than the original input, because every 3 bytes of binary become 4 Base64 characters.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            How to encode and decode Base64
          </h2>
          <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: '1', title: 'Select Encode or Decode', desc: 'Choose Encode to convert plain text into a Base64 string. Choose Decode to convert a Base64 string back to plain text.' },
              { n: '2', title: 'Enter your input', desc: 'Paste or type your text in the input field. The tool supports UTF-8 text including accented characters, emoji, and non-Latin scripts.' },
              { n: '3', title: 'Use Swap to chain operations', desc: 'Click Swap to instantly flip the mode and move the output to the input. Useful when you want to encode, check the result, then decode it back.' },
              { n: '4', title: 'Copy the output', desc: 'Click Copy to grab the result. Everything runs locally — your text never leaves the browser.' },
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
            Common uses of Base64
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {[
              { title: 'Data URIs in CSS/HTML',    desc: 'Embed images directly in stylesheets or HTML without a separate file: background: url("data:image/png;base64,...")' },
              { title: 'JWT tokens',                desc: 'JSON Web Tokens use Base64url encoding for the header and payload sections.' },
              { title: 'Email attachments (MIME)',  desc: 'SMTP transfers binary attachments as Base64-encoded text to avoid issues with non-ASCII characters.' },
              { title: 'API authentication',        desc: 'HTTP Basic Auth sends credentials as Base64-encoded "username:password" in the Authorization header.' },
              { title: 'Storing binary in JSON',    desc: 'JSON is text-only. Base64 lets you embed binary data like images or files in a JSON field.' },
              { title: 'Environment variables',     desc: 'Encoding certificates or keys in Base64 allows storing multi-line secrets as single-line env vars.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <div style={{ padding: '20px 24px', background: 'var(--amber-lt)', border: '1px solid rgba(217,119,6,.25)', borderRadius: 'var(--r-l)' }}>
            <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>
              ⚠️ Base64 is not encryption
            </h3>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
              Never use Base64 to "hide" sensitive data. It provides zero security — anyone can decode it in seconds. For sensitive values, use proper encryption: AES-256 for symmetric encryption, or RSA/ECDSA for asymmetric. Base64 is purely a data transport encoding.
            </p>
          </div>
        </section>

        {/* ── How Base64 works ────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            How Base64 encoding works
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            Base64 works by taking 3 bytes of binary input (24 bits) and splitting them into four 6-bit groups. Each 6-bit group maps to one of 64 characters in the Base64 alphabet. Because 3 input bytes produce 4 output characters, the encoded output is always exactly 33% larger than the original.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            When the input length is not a multiple of 3, padding characters (<code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>=</code>) are appended to make the output length a multiple of 4. One byte of remainder adds two characters plus <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>==</code>; two bytes of remainder add three characters plus <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>=</code>.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            This tool handles <strong style={{ color: 'var(--ink)' }}>UTF-8 text</strong> correctly — multi-byte characters like accented letters, Chinese characters, or emoji are first encoded to their UTF-8 byte sequence, then Base64-encoded. This is the correct behavior for web applications and matches how <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>btoa(unescape(encodeURIComponent(str)))</code> works in JavaScript.
          </p>
        </section>

        {/* ── Base64 variants ─────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Base64 variants — Standard, URL-safe, and MIME
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
            Not all Base64 is identical. Different contexts require different alphabets and line-break rules:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { name: 'Standard Base64 (RFC 4648 §4)', chars: 'A–Z a–z 0–9 + /', padding: 'Yes (=)', note: 'Default encoding. Used in MIME email, data URIs, and most general contexts.' },
              { name: 'URL-safe Base64 (RFC 4648 §5)', chars: 'A–Z a–z 0–9 - _', padding: 'No or optional', note: 'Replaces + with - and / with _ so the result is safe in URLs and filenames without percent-encoding. Used in JWT tokens and OAuth 2.0.' },
              { name: 'MIME Base64', chars: 'Same as standard', padding: 'Yes (=)', note: 'Identical alphabet to standard, but inserts a CRLF line break every 76 characters. Required by email protocols (RFC 2045).' },
            ].map(({ name, chars, padding, note }) => (
              <div key={name} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{name}</div>
                <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 6 }}>
                  <span style={{ fontSize: 12, color: 'var(--ink-3)' }}><strong>Alphabet:</strong> <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--border)', padding: '1px 4px', borderRadius: 3 }}>{chars}</code></span>
                  <span style={{ fontSize: 12, color: 'var(--ink-3)' }}><strong>Padding:</strong> {padding}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Base64 in web development ───────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Base64 in web development — practical examples
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 16 }}>
            These are the most common patterns you will encounter as a web developer:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                label: 'HTTP Basic Authentication header',
                code: `// Encode "username:password" in Base64\nconst credentials = btoa('user:password');\nfetch(url, { headers: { Authorization: \`Basic \${credentials}\` } });`,
                note: 'The Authorization header value is Base64-encoded — never encrypted. Use HTTPS to protect it in transit.',
              },
              {
                label: 'Embed a small image as a data URI in CSS',
                code: `/* In your stylesheet */\n.icon { background-image: url("data:image/png;base64,iVBORw0KGgo..."); }`,
                note: 'Good for icons under 5 KB. Above that, a separate file with HTTP caching is more efficient.',
              },
              {
                label: 'Decode a JWT payload',
                code: `// JWT header.payload.signature — split on '.' and decode the middle part\nconst payload = JSON.parse(atob(token.split('.')[1]));\nconsole.log(payload.sub, payload.exp);`,
                note: 'JWT uses URL-safe Base64 without padding. atob() handles standard Base64; add padding if needed.',
              },
            ].map(({ label, code, note }) => (
              <div key={label} style={{ padding: '16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>{label}</div>
                <pre style={{ margin: '0 0 10px', padding: '12px 14px', background: 'var(--page-bg)', borderRadius: 'var(--r-m)', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)', overflowX: 'auto', lineHeight: 1.7 }}>{code}</pre>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{note}</p>
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
              { q: 'What is the difference between Base64 and Base64url?', a: 'Standard Base64 uses + and / characters, which have special meaning in URLs and cannot appear unescaped in query strings or paths. Base64url replaces + with - and / with _ to make the output URL-safe without percent-encoding. JWT tokens use Base64url. This encoder uses standard Base64 — if you need Base64url, replace + with - and / with _ in the output.' },
              { q: 'Does Base64 encoding compress data?', a: 'No — Base64 increases size by approximately 33%. Three bytes of input become four characters of output. It is a transport encoding, not a compression algorithm. If you need to reduce payload size, compress first (gzip, Brotli) and then Base64-encode the compressed bytes.' },
              { q: 'Why does my Base64 string end with == or =?', a: 'Padding characters (=) are appended to make the output length a multiple of 4. If the input byte count is divisible by 3, no padding is needed. One leftover byte produces ==; two leftover bytes produce =. The padding is part of the standard and must be preserved when decoding.' },
              { q: 'Can Base64 encode binary files like images or PDFs?', a: 'Yes. Any binary data can be Base64-encoded. This encoder works with UTF-8 text input — to encode a binary file, you would need to read the raw bytes first. In a browser, the FileReader API\'s readAsDataURL() method produces a Base64 data URI from a binary file automatically.' },
              { q: 'Is it safe to Base64-encode passwords or API keys?', a: 'Base64 provides no security — anyone can decode it instantly. Never use it to "protect" secrets. For passwords, use bcrypt or Argon2. For transmitting API keys, always use HTTPS. Base64 is useful for encoding secrets as single-line strings in config files (environment variables), but it must be transmitted over encrypted channels.' },
              { q: 'Why does atob() in JavaScript throw an error on my string?', a: 'The built-in atob() only handles ASCII input. If your original string contains non-ASCII characters (accented letters, emoji, CJK characters), you must decode the UTF-8 bytes correctly: use decodeURIComponent(escape(atob(str))) or a proper TextDecoder. This encoder handles UTF-8 correctly on both encode and decode.' },
              { q: 'What is the maximum input size this tool can handle?', a: 'There is no hard limit enforced by this tool — it runs entirely in your browser. Practical limits depend on your device memory. For very large inputs (megabytes of text), performance may slow down, and you would be better served by a command-line tool like the built-in base64 command on macOS/Linux.' },
              { q: 'How is Base64 used in JSON Web Tokens (JWT)?', a: 'A JWT consists of three parts separated by dots: header.payload.signature. Both the header and payload are JSON objects encoded with URL-safe Base64 (no padding). This means any user can decode and read the payload without a secret key. The signature is what proves authenticity — it is a cryptographic hash of the header and payload, signed with a secret. Never store sensitive data in JWT payloads without separate encryption.' },
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
