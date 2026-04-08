export default function RegexTesterContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is a regex tester?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              A regex tester is a tool that lets you write and test <strong style={{ color: 'var(--ink)' }}>regular expressions</strong> (regex) against real text, with live match highlighting. Instead of adding console.log statements to your code, you can iterate on your pattern in real time, see every match highlighted in color, and debug capture groups before copying the final expression into your project.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              This tester uses JavaScript's built-in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>ECMAScript RegExp</a> engine — the same engine your browser and Node.js use. Patterns work exactly as they would in your JavaScript or TypeScript code. Advanced features like <strong style={{ color: 'var(--ink)' }}>lookahead</strong> (<code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--border)', padding: '1px 4px', borderRadius: 3 }}>(?=...)</code>), <strong style={{ color: 'var(--ink)' }}>lookbehind</strong> (<code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, background: 'var(--border)', padding: '1px 4px', borderRadius: 3 }}>(?&lt;=...)</code>), named capture groups, and unicode are all supported. Use the regex cheat sheet below as a quick reference.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to use the regex tester
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Enter your pattern', desc: 'Type your regular expression in the pattern field between the / delimiters. Or click a Quick Pattern button (Email, URL, IPv4, Digits...) to start with a proven template.' },
                { n: '2', title: 'Set flags', desc: 'Toggle flags using the g, i, m, s buttons. Hover over each flag to see what it does. The g (global) flag is enabled by default to find all matches.' },
                { n: '3', title: 'Paste your test string', desc: 'Enter the text you want to match against. Matches are highlighted in real time with color-coded marks — each match gets a distinct color up to 1000 matches.' },
                { n: '4', title: 'Review match details', desc: 'The match details panel shows every match with its position [start–end] and any named capture group values.' },
                { n: '5', title: 'Test replacements', desc: 'Enable the Replace toggle to test substitutions. Use $1, $2 for numbered groups or $<name> for named groups.' },
                { n: '6', title: 'Export to CSV', desc: 'Click Export CSV to download all matches with position data and group values as a spreadsheet.' },
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
              Regex flags explained
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              Flags modify the behaviour of a regex pattern without changing the pattern itself. In JavaScript, flags are appended after the closing slash: <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>/pattern/flags</code>. The most important flags to understand:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Flag', 'Name', 'Effect'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['g', 'Global',      'Find all matches in the string. Without g, only the first match is returned.'],
                  ['i', 'Ignore case', 'Case-insensitive matching. /hello/i matches "Hello", "HELLO", "hElLo".'],
                  ['m', 'Multiline',   'Makes ^ and $ match start/end of each line, not the whole string. Useful for line-by-line processing.'],
                  ['s', 'Dotall',      'Makes . match newline characters too. Without s, . matches any character except \\n.'],
                  ['u', 'Unicode',     'Enables full Unicode matching. Required for matching emoji and characters outside the BMP (> U+FFFF).'],
                  ['y', 'Sticky',      'Matches only from lastIndex — does not search forward. Useful for tokenizers that process a string sequentially.'],
                  ['d', 'Indices',     'Adds start/end character indices to each match result. Useful when you need precise cursor positions.'],
                ].map(([flag, name, effect], i) => (
                    <tr key={flag} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 15, fontWeight: 700, color: 'var(--green)' }}>{flag}</td>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)' }}>{name}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{effect}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Regex metacharacters cheat sheet
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              These are the building blocks of every regular expression. Memorising them lets you read and write most patterns without needing a reference:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Token', 'Matches', 'Example'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['.', 'Any character except newline (unless s flag)', '/c.t/ matches "cat", "cut", "c3t"'],
                  ['\\d', 'Any digit 0–9', '/\\d+/ matches "42", "100"'],
                  ['\\w', 'Word character [a-zA-Z0-9_]', '/\\w+/ matches "hello_world"'],
                  ['\\s', 'Whitespace (space, tab, newline)', '/a\\sb/ matches "a b"'],
                  ['\\D \\W \\S', 'Uppercase = inverse of lowercase version', '/\\D/ matches any non-digit'],
                  ['^', 'Start of string (or line with m flag)', '/^hello/ matches only at line start'],
                  ['$', 'End of string (or line with m flag)', '/end$/ matches only at line end'],
                  ['*', 'Zero or more of previous token', '/a*/ matches "", "a", "aaa"'],
                  ['+', 'One or more of previous token', '/a+/ matches "a", "aaa" (not "")'],
                  ['?', 'Zero or one (makes previous optional)', '/colou?r/ matches "color" and "colour"'],
                  ['{n,m}', 'Between n and m repetitions', '/\\d{2,4}/ matches 2 to 4 digits'],
                  ['[abc]', 'Character class — any of a, b, c', '/[aeiou]/ matches any vowel'],
                  ['[^abc]', 'Negated class — any except a, b, c', '/[^0-9]/ matches any non-digit'],
                  ['(…)', 'Capture group', '/(\\w+)@/ captures username in email'],
                  ['(?:…)', 'Non-capturing group', '/(?:https?):\\/\\// groups without capturing'],
                  ['(?=…)', 'Lookahead — match if followed by', '/\\w+(?=\\()/ matches function names'],
                  ['(?<=…)', 'Lookbehind — match if preceded by', '/(?<=\\$)\\d+/ matches amount after $'],
                  ['a|b', 'Alternation — a or b', '/cat|dog/ matches "cat" or "dog"'],
                ].map(([token, desc, example], i) => (
                    <tr key={token} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)', fontWeight: 600 }}>{token}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-2)' }}>{desc}</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--ink-3)' }}>{example}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Most useful regex patterns
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { name: 'Email address',      pattern: '[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}',  note: 'Covers 99% of valid email formats' },
                { name: 'URL (http/https)',    pattern: 'https?:\\/\\/[\\w\\-]+(\\.[\\w\\-]+)+[\\S]*',           note: 'Matches most web URLs' },
                { name: 'IPv4 address',        pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b',                     note: 'Does not validate 0–255 range' },
                { name: 'ISO date (YYYY-MM-DD)',pattern: '\\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\\d|3[01])',  note: 'Validates month and day ranges' },
                { name: 'HEX color code',      pattern: '#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\\b',                  note: 'Matches both 3 and 6 character formats' },
                { name: 'Digits only',          pattern: '^\\d+$',                                               note: 'Full string must be numeric' },
                { name: 'Whitespace (trim)',    pattern: '^\\s+|\\s+$',                                          note: 'With g flag — remove leading/trailing spaces' },
              ].map(({ name, pattern, note }) => (
                  <div key={name} style={{ padding: '12px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{name}</span>
                      <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)', background: 'var(--green-lt)', padding: '1px 8px', borderRadius: 4 }}>{pattern}</code>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--ink-4)', margin: 0 }}>{note}</p>
                  </div>
              ))}
            </div>
          </section>

        </div>
      </div>
  );
}