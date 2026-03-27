export default function JsonFormatterContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is JSON?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              JSON (JavaScript Object Notation) is a lightweight text format for storing and transmitting structured data. It is the standard data format for <strong style={{ color: 'var(--ink)' }}>REST APIs</strong>, configuration files, and web application data exchange. JSON is language-independent — every major programming language can parse and serialize it.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              <strong style={{ color: 'var(--ink)' }}>Serialization</strong> is the process of converting a data structure into JSON text (e.g. <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>JSON.stringify(obj)</code>). Deserialization is the reverse — parsing JSON text back into a usable object (e.g. <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>JSON.parse(str)</code>). Both operations use the same JSON format defined in <a href="https://www.rfc-editor.org/rfc/rfc8259" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>RFC 8259</a>.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              JSON uses two structures: <strong style={{ color: 'var(--ink)' }}>objects</strong> (key-value pairs in curly braces) and <strong style={{ color: 'var(--ink)' }}>arrays</strong> (ordered lists in square brackets). Values can be strings, numbers, booleans, null, objects, or arrays — fully nestable.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to use the JSON formatter
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Paste your JSON', desc: 'Paste any JSON string into the input field — minified, prettified, or broken. The formatter handles all formats.' },
                { n: '2', title: 'Choose a mode', desc: 'Prettify adds indentation and line breaks for human readability. Minify removes all whitespace for production use. Validate checks syntax and highlights errors without transforming.' },
                { n: '3', title: 'Set indentation', desc: 'Choose 2-space or 4-space indentation. JavaScript and Node.js projects typically use 2 spaces. Python and Java projects often use 4.' },
                { n: '4', title: 'Copy the result', desc: 'Click Copy to grab the formatted output. The entire process runs locally in your browser — your API keys and data never leave your device.' },
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
              Common JSON syntax errors
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              JSON has strict syntax rules. These are the errors developers encounter most often:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { error: 'Trailing comma',       example: '{"key": "value",}',          fix: 'Remove the comma after the last property. JSON does not allow trailing commas, unlike JavaScript.' },
                { error: 'Single quotes',         example: "{\"key\": 'value'}",         fix: 'Use double quotes for all strings and property names. Single quotes are not valid JSON.' },
                { error: 'Unquoted keys',         example: '{key: "value"}',             fix: 'All object keys must be quoted: {"key": "value"}.' },
                { error: 'undefined / NaN',       example: '{"value": undefined}',       fix: 'JSON has no undefined or NaN types. Use null for missing values.' },
                { error: 'Comments',              example: '{"key": "value" // note}',   fix: 'JSON does not support comments. Remove them or use a format like JSONC for config files.' },
              ].map(({ error, example, fix }) => (
                  <div key={error} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--red)', background: 'var(--red-lt)', padding: '2px 8px', borderRadius: 99 }}>{error}</span>
                      <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--ink-3)', background: 'var(--page-bg)', padding: '2px 8px', borderRadius: 4 }}>{example}</code>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{fix}</p>
                  </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Prettify vs Minify — when to use each
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
              <div style={{ padding: '20px', background: 'var(--green-lt)', border: '1px solid var(--green-mid)', borderRadius: 'var(--r-l)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Use Prettify when…</div>
                <ul style={{ paddingLeft: 18, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
                  <li>Debugging API responses</li>
                  <li>Reading config files</li>
                  <li>Code reviews and documentation</li>
                  <li>Exploring unfamiliar data structures</li>
                </ul>
              </div>
              <div style={{ padding: '20px', background: 'var(--blue-lt)', border: '1px solid rgba(37,99,235,.2)', borderRadius: 'var(--r-l)' }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Use Minify when…</div>
                <ul style={{ paddingLeft: 18, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
                  <li>Sending data in API requests</li>
                  <li>Storing in databases</li>
                  <li>Reducing payload size for production</li>
                  <li>Embedding JSON in HTML attributes</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
  );
}