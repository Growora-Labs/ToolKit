export default function CaseConverterContent() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
      <div>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            What is a case converter?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            A case converter transforms text between different capitalization formats instantly. It handles everything from simple uppercase/lowercase conversion to developer-specific naming conventions like camelCase, snake_case, and kebab-case — in one click, with no manual editing.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            Developers use case converters to reformat variable names when switching languages, normalize database column names, or convert copy from content teams into code-safe identifiers. Writers use them to fix accidental caps lock, apply consistent headline capitalization, and prepare text for different publishing platforms.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            How to use the case converter
          </h2>
          <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: '1', title: 'Type or paste your text', desc: 'Enter any text in the left input field. The converter handles multi-line input, mixed cases, and text with numbers or symbols.' },
              { n: '2', title: 'Select a conversion format', desc: 'Click any format button — Text group (Sentence, lower, UPPER, Title, Capitalized), Code group (camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE), or Fun group (aLtErNaTiNg, iNVERSE).' },
              { n: '3', title: 'View the result', desc: 'The converted text appears instantly in the right panel. Code formats (camelCase, snake_case, etc.) use a monospace font for better readability.' },
              { n: '4', title: 'Copy the output', desc: 'Click Copy to grab the converted text. Switch between formats without re-entering your text.' },
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
            Naming convention guide for developers
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
            Different programming languages and contexts have established naming conventions. Following them makes code more readable and consistent with the ecosystem:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Format', 'Example', 'Use case'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['camelCase',      'getUserData',           'JavaScript, TypeScript, Java, Swift — variables & functions'],
                  ['PascalCase',     'UserDataService',       'React components, class names, TypeScript types & interfaces'],
                  ['snake_case',     'get_user_data',         'Python (PEP 8), Ruby, SQL column names'],
                  ['kebab-case',     'get-user-data',         'URLs, CSS class names, HTML attributes, file names'],
                  ['CONSTANT_CASE',  'MAX_RETRY_COUNT',       'Constants and environment variables in most languages'],
                  ['Title Case',     'Get User Data',         'Article headlines, UI headings, email subjects'],
                  ['Sentence case',  'Get user data',         'Body text, UI labels, most modern web interfaces'],
                ].map(([fmt, example, use], i) => (
                  <tr key={fmt} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 14px' }}>
                      <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600, color: 'var(--green)' }}>{fmt}</code>
                    </td>
                    <td style={{ padding: '10px 14px' }}>
                      <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--ink)' }}>{example}</code>
                    </td>
                    <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{use}</td>
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
