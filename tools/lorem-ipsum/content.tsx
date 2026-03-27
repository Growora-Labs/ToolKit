export default function LoremIpsumContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is Lorem Ipsum?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              Lorem Ipsum is scrambled Latin text derived from <em>De Finibus Bonorum et Malorum</em>, written by the Roman philosopher Cicero in 45 BC. It has been the industry standard placeholder text in publishing and graphic design since the 1960s, when Letraset popularized it on dry-transfer sheets used for typesetting and layout design.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              The key advantage of Lorem Ipsum over real text is that it has a natural-looking distribution of letters without meaningful content — which prevents reviewers from focusing on the copy instead of the layout. It looks like real language at a glance, making it ideal for mocking up typographic and spacing decisions.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to generate Lorem Ipsum text
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Choose a unit', desc: 'Select Paragraphs for full blocks of text (ideal for body copy mockups), Sentences for shorter content, or Words for labels, headings, and button text.' },
                { n: '2', title: 'Set the amount', desc: 'Use the number input or quick-select buttons (1, 3, 5, 10) to choose how much text to generate. For a single card or section, 1–2 paragraphs is usually enough.' },
                { n: '3', title: 'Toggle "Start with Lorem ipsum…"', desc: 'Enable this to begin with the classic opening sentence. Disable it for fully randomized text that doesn\'t start with the recognizable Lorem ipsum pattern.' },
                { n: '4', title: 'Generate and copy', desc: 'Click Generate then Copy to grab the text. Paste directly into Figma, your code editor, CMS, or any design tool.' },
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
              How much Lorem Ipsum do you need?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
              {[
                { context: 'Single card / widget',   amount: '1 paragraph',   words: '~60 words' },
                { context: 'Landing page section',   amount: '2–3 paragraphs', words: '~150 words' },
                { context: 'Blog post mockup',        amount: '5–8 paragraphs', words: '~500 words' },
                { context: 'Heading / button text',  amount: '3–7 words',     words: '' },
                { context: 'Card subtitle',           amount: '1–2 sentences', words: '~15 words' },
                { context: 'Full page layout',        amount: '10+ paragraphs',words: '~700 words' },
              ].map(({ context, amount, words }) => (
                  <div key={context} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{context}</div>
                    <div style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>{amount}</div>
                    {words && <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 2 }}>{words}</div>}
                  </div>
              ))}
            </div>
          </section>

        </div>
      </div>
  );
}