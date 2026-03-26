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

      </div>
    </div>
  );
}
