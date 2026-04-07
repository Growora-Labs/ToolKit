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

        {/* ── Real-world examples ─────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Real-world case conversion scenarios
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
            These are the most common situations where you need a case converter — each requires a specific transformation:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { scenario: 'API response to JavaScript variables', from: 'user_first_name (snake_case)', to: 'userFirstName (camelCase)', why: 'REST APIs and databases commonly use snake_case. JavaScript code should use camelCase per language convention.' },
              { scenario: 'Database column names from UI labels', from: 'First Name (Title Case)', to: 'first_name (snake_case)', why: 'SQL column names use snake_case. Converting UI copy to database identifiers is a daily task for backend developers.' },
              { scenario: 'React component names from file names', from: 'user-profile-card (kebab-case)', to: 'UserProfileCard (PascalCase)', why: 'React component names must be PascalCase to distinguish them from HTML elements. File names often use kebab-case.' },
              { scenario: 'CSS class names from design tokens', from: 'primaryButtonHover (camelCase)', to: 'primary-button-hover (kebab-case)', why: 'CSS class names use kebab-case. Design tokens in JavaScript use camelCase. You convert when bridging the two.' },
              { scenario: 'Environment variable names', from: 'database_host (snake_case)', to: 'DATABASE_HOST (CONSTANT_CASE)', why: 'Environment variables and constants use UPPER_SNAKE_CASE across virtually all languages and platforms.' },
              { scenario: 'Blog headlines from draft notes', from: 'how to build a rest api', to: 'How to Build a REST API (Title Case)', why: 'Title case for article headlines is standard in English publishing. The converter handles common style rules automatically.' },
            ].map(({ scenario, from, to, why }) => (
              <div key={scenario} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{scenario}</div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
                  <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--page-bg)', padding: '2px 8px', borderRadius: 4, color: 'var(--ink-3)' }}>{from}</code>
                  <span style={{ color: 'var(--ink-4)', fontSize: 12 }}>→</span>
                  <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--green-lt)', padding: '2px 8px', borderRadius: 4, color: 'var(--green)' }}>{to}</code>
                </div>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Title case rules ────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Title case rules — which words to capitalize
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            Title case is more complex than simply capitalizing every word. Different style guides disagree on edge cases, but the most widely followed rules (AP Style, Chicago Manual) agree on the basics:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
            <div style={{ padding: '18px', background: 'var(--green-lt)', border: '1px solid var(--green-mid)', borderRadius: 'var(--r-l)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Always capitalize</div>
              <ul style={{ paddingLeft: 18, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
                <li>The first and last word</li>
                <li>Nouns, verbs, adjectives, adverbs</li>
                <li>Pronouns (I, He, She, They)</li>
                <li>Subordinating conjunctions (Because, Although)</li>
              </ul>
            </div>
            <div style={{ padding: '18px', background: 'var(--blue-lt)', border: '1px solid rgba(37,99,235,.2)', borderRadius: 'var(--r-l)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)', marginBottom: 10 }}>Usually lowercase</div>
              <ul style={{ paddingLeft: 18, fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8, margin: 0 }}>
                <li>Articles: a, an, the</li>
                <li>Short prepositions: in, on, at, to, by</li>
                <li>Coordinating conjunctions: and, but, or, nor</li>
                <li>The "to" in infinitives</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────── */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 24 }}>
            Frequently asked questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', overflow: 'hidden' }}>
            {[
              { q: 'What is the difference between camelCase and PascalCase?', a: 'Both join multiple words without separators, but PascalCase capitalizes the first letter of every word (including the first), while camelCase keeps the first letter lowercase and capitalizes each subsequent word. Example: getUserData (camelCase) vs GetUserData (PascalCase). Use camelCase for variables and functions in JavaScript/TypeScript; use PascalCase for class names and React components.' },
              { q: 'Why does Python use snake_case instead of camelCase?', a: 'PEP 8, the official Python style guide, specifies snake_case for variable and function names. This convention was chosen because Python values readability and snake_case is easier to read for names with multiple words. Class names in Python use PascalCase, and constants use UPPER_SNAKE_CASE — the same distinction found in most languages.' },
              { q: 'What is CONSTANT_CASE and when should I use it?', a: 'CONSTANT_CASE (also written SCREAMING_SNAKE_CASE) uses all uppercase letters with underscores between words. It signals that a value should never be reassigned at runtime. Use it for true constants: configuration values, magic numbers, error codes, environment variable names, and enum members. Examples: MAX_RETRIES, DATABASE_URL, HTTP_STATUS_OK.' },
              { q: 'How does kebab-case differ from snake_case?', a: 'Both separate words with a single character, but snake_case uses underscores (_) and kebab-case uses hyphens (-). Kebab-case is preferred for URLs, CSS class names, HTML data attributes, and file names because hyphens are URL-safe and conventional in web contexts. Snake_case is preferred in Python, Ruby, SQL, and database schemas.' },
              { q: 'Can I convert multi-word text with numbers?', a: 'Yes. This converter handles numbers as word separators in most cases. For example, "user123 profile" converts to user123Profile (camelCase) or user123-profile (kebab-case). The exact behavior with numbers depends on how the original text is tokenized — words are split on spaces, hyphens, underscores, and case transitions.' },
              { q: 'What is alternating case used for?', a: 'aLtErNaTiNg CaSe is primarily used for humor, mocking (the "mocking SpongeBob" internet meme), or emphasis in informal contexts like social media. It has no practical use in programming or professional writing. This converter includes it for completeness — and because occasionally it is exactly what you need.' },
              { q: 'Does the converter handle accented characters and Unicode?', a: 'Yes. The converter works with the full Unicode range including accented Latin characters (é, ñ, ü), Cyrillic, and other scripts for the text-based formats. For code naming conventions (camelCase, snake_case, etc.), non-ASCII characters may cause issues in some programming languages — always verify your language\'s identifier rules.' },
              { q: 'What is Sentence case vs Title Case?', a: 'Sentence case capitalizes only the first word of a sentence and proper nouns, exactly like normal English writing. Title case capitalizes most words following specific rules about articles, prepositions, and conjunctions. Sentence case is preferred in modern UI design (buttons, labels, navigation items) because it feels more natural and conversational. Title case is used for article headlines and formal headings.' },
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
