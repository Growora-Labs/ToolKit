export default function WordCounterContent() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
      <div>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            What is a word counter?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            A word counter is a tool that instantly analyzes text and returns detailed statistics — word count, character count, sentence count, paragraph count, estimated reading time, and keyword density. It processes everything locally in your browser with no data sent to any server.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            Writers, students, SEO specialists, and developers use word counters daily to check content length requirements, measure readability, and ensure their copy meets platform-specific limits. Whether you're writing a college essay, a tweet, a blog post, or API documentation — knowing your exact word and character count matters.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            How to use the word counter
          </h2>
          <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: '1', title: 'Paste or type your text', desc: 'Click the text area and start typing, or paste content from anywhere. The counter updates in real time — no button to click.' },
              { n: '2', title: 'Read your statistics', desc: 'Words, characters (with and without spaces), sentences, paragraphs, and reading time all update instantly as you type.' },
              { n: '3', title: 'Check keyword density', desc: 'Scroll down to see which words appear most frequently and what percentage of your total word count they represent. Useful for SEO content optimization.' },
              { n: '4', title: 'Clear and start over', desc: 'Click the X button to clear the text area and reset all counters when you\'re ready to analyze a new piece of content.' },
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
            Word count requirements by platform
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
            Different platforms and content types have specific length requirements. Here are the most common ones:
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Platform / Content type', 'Limit / Recommendation', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Twitter / X post',       '280 characters',       'Use the character count view'],
                  ['Instagram caption',       '2,200 characters',     'First 125 chars visible before "more"'],
                  ['LinkedIn post',           '3,000 characters',     'Long-form performs well'],
                  ['Google meta description', '150–160 characters',   'Truncated beyond 160'],
                  ['Blog post (SEO)',         '1,500–2,500 words',    'Longer posts tend to rank higher'],
                  ['College essay',           '500–650 words',        'Common App standard'],
                  ['Resume',                  '400–800 words',        'One page = ~500 words'],
                  ['Academic abstract',       '150–250 words',        'Most journals require under 250'],
                ].map(([platform, limit, note], i) => (
                  <tr key={platform} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 14px', fontWeight: 500, color: 'var(--ink)' }}>{platform}</td>
                    <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>{limit}</td>
                    <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            Reading time — how it's calculated
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            Reading time is calculated at <strong style={{ color: 'var(--ink)' }}>238 words per minute</strong> — the average silent reading speed for adults according to a <a href="https://www.sciencedirect.com/science/article/abs/pii/S0749596X19300786" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>2019 meta-analysis</a> of 190 studies. Speaking time uses 130 words per minute — appropriate for presentations and audiobooks.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            These are averages. Technical content with complex terminology is typically read 20–30% slower. Use the reading time estimate as a guideline, not an exact figure.
          </p>
        </section>

      </div>
    </div>
  );
}
