export default function ColorPaletteContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is a color palette generator?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              A color palette generator creates sets of harmonious colors based on color theory principles. Instead of guessing which colors look good together, you use mathematical relationships between hues on the color wheel to generate combinations that are visually pleasing by design.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              Colors are generated in <strong style={{ color: 'var(--ink)' }}>HSL format</strong> (Hue, Saturation, Lightness) internally and exported as HEX, RGB, or CSS custom properties. You can lock any color to keep it while regenerating the rest — useful when you have a fixed brand color and need harmonious companions.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              When choosing colors for the web, always verify contrast ratios against the <a href="https://www.w3.org/WAI/WCAG22/quickref/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>WCAG accessibility guidelines</a>. WCAG 2.2 requires a minimum contrast ratio of 4.5:1 between text and its background for normal text, and 3:1 for large text. Good color choices are both beautiful and accessible.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to generate a color palette
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Choose a harmony mode', desc: 'Select from 7 harmony types: Random, Analogous, Complementary, Triadic, Split Complementary, Tetradic, or Monochromatic. Each produces a different visual feel.' },
                { n: '2', title: 'Lock colors you want to keep', desc: 'Click the lock icon on any swatch to keep that color fixed. Regenerate as many times as needed — locked colors stay in place.' },
                { n: '3', title: 'Click Generate palette', desc: 'A new palette is generated using the selected harmony mode. Click any swatch to copy its HEX value instantly.' },
                { n: '4', title: 'Copy as CSS variables', desc: 'Click Copy CSS to get a ready-to-use :root { } block with --color-1 through --color-5 variables. Paste directly into your stylesheet.' },
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
              Color harmony modes explained
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { mode: 'Analogous',           feel: 'Calm, cohesive',     desc: 'Uses colors adjacent on the color wheel (±20–40°). Looks natural and harmonious. Common in nature-inspired and wellness brands.' },
                { mode: 'Complementary',        feel: 'Bold, high contrast', desc: 'Uses colors directly opposite on the wheel (180°). Creates strong visual tension and energy. Common in sports and retail.' },
                { mode: 'Triadic',              feel: 'Vibrant, balanced',   desc: 'Three colors equally spaced (120° apart). Rich and dynamic while maintaining balance. Common in playful, creative brands.' },
                { mode: 'Split Complementary', feel: 'Softer contrast',     desc: 'A base color plus two colors adjacent to its complement. More variety than analogous, less tension than complementary.' },
                { mode: 'Tetradic',             feel: 'Rich, complex',       desc: 'Four colors forming a rectangle on the wheel. Maximum variety — harder to balance. Works best with one dominant color.' },
                { mode: 'Monochromatic',        feel: 'Elegant, cohesive',   desc: 'One hue at different lightness values. Easy to get right, always looks polished. Common in premium and minimal brands.' },
              ].map(({ mode, feel, desc }) => (
                  <div key={mode} style={{ display: 'flex', gap: 14, padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', alignItems: 'flex-start' }}>
                    <div style={{ minWidth: 160 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{mode}</div>
                      <div style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600, marginTop: 2 }}>{feel}</div>
                    </div>
                    <p style={{ fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <div style={{ padding: '20px 24px', background: 'var(--green-lt)', border: '1px solid var(--green-mid)', borderRadius: 'var(--r-l)' }}>
              <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>
                💡 The 60-30-10 rule
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
                A simple rule for using your palette: use your dominant color for 60% of the design (backgrounds, large areas), a secondary color for 30% (cards, sections), and an accent color for 10% (buttons, highlights, links). This creates visual hierarchy without overwhelming the viewer.
              </p>
            </div>
          </section>

        </div>
      </div>
  );
}