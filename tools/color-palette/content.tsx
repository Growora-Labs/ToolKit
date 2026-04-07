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

          {/* ── Building a design system palette ─────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Building a design system color palette
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              A well-structured design system palette goes beyond 5 random harmonious colors. It defines a complete color vocabulary that designers and developers can use consistently across an entire product. Most modern design systems use a <strong style={{ color: 'var(--ink)' }}>scale-based approach</strong> where each hue has a range of 10–12 lightness steps (e.g. 50, 100, 200 … 900, 950).
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              Start by generating your primary brand color palette using this tool, then use the HSL values to create a full scale. For a given hue, keep the hue and saturation constant and vary only the lightness: 950 is near-black, 50 is near-white, and 500 is the pure color. Use <a href="/tools/color-converter" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Color Converter</a> to translate your generated HEX values to HSL for easier scale creation.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12 }}>
              {[
                { role: 'Primary', purpose: 'Brand color — buttons, links, active states, primary CTAs', example: 'Blue, Green, Indigo' },
                { role: 'Neutral / Gray', purpose: 'Text, backgrounds, borders, dividers, disabled states', example: 'Slate, Zinc, Stone' },
                { role: 'Semantic: Success', purpose: 'Positive states, confirmations, success messages', example: 'Green hues' },
                { role: 'Semantic: Warning', purpose: 'Caution states, non-blocking alerts, attention indicators', example: 'Amber, Yellow' },
                { role: 'Semantic: Error', purpose: 'Error states, destructive actions, form validation', example: 'Red hues' },
                { role: 'Accent / Secondary', purpose: 'Supporting color for visual interest, highlights, tags', example: 'Complementary to primary' },
              ].map(({ role, purpose, example }) => (
                <div key={role} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>{role}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55, marginBottom: 6 }}>{purpose}</div>
                  <div style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600 }}>e.g. {example}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Color and brand identity ──────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Color psychology in brand and UI design
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              Color perception is culturally shaped and context-dependent, but certain associations are consistent enough across Western markets to be useful starting points for brand color selection:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { color: 'Blue', feel: 'Trust, reliability, calm, professionalism', used: 'Finance, healthcare, tech (LinkedIn, PayPal, Samsung, Ford)' },
                { color: 'Green', feel: 'Growth, health, sustainability, nature', used: 'Finance (wealth), food, wellness, eco brands (Whole Foods, Robinhood)' },
                { color: 'Red', feel: 'Energy, urgency, passion, appetite stimulation', used: 'Food, retail, entertainment (Coca-Cola, Netflix, YouTube)' },
                { color: 'Yellow / Amber', feel: 'Optimism, warmth, attention-grabbing', used: 'Warnings, food, creative brands (IKEA, McDonald\'s, Snapchat)' },
                { color: 'Purple', feel: 'Creativity, luxury, mystery, wisdom', used: 'Premium products, beauty, creative tools (Cadbury, Hallmark, Twitch)' },
                { color: 'Black / Charcoal', feel: 'Sophistication, premium, authority', used: 'Luxury fashion, high-end tech (Apple, Chanel, Nike)' },
              ].map(({ color, feel, used }) => (
                <div key={color} style={{ display: 'flex', gap: 14, padding: '12px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', flexWrap: 'wrap' }}>
                  <div style={{ minWidth: 80, fontSize: 14, fontWeight: 700, color: 'var(--ink)' }}>{color}</div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink-2)', marginBottom: 2 }}>{feel}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-4)' }}>{used}</div>
                  </div>
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
                { q: 'What is the difference between analogous and monochromatic palettes?', a: 'Analogous palettes use neighboring hues on the color wheel (e.g. blue, teal, green) — multiple colors but a unified feel. Monochromatic palettes use a single hue at different lightness and saturation levels (e.g. light blue, medium blue, dark blue). Monochromatic is easier to keep accessible and cohesive; analogous gives more tonal variety while still feeling harmonious.' },
                { q: 'How do I choose the right harmony mode for my project?', a: 'Match the harmony to the emotional tone of the brand. Analogous works for calm, natural, wellness brands. Complementary works for bold, high-contrast retail and sports brands. Triadic works for playful, creative, children\'s brands. Monochromatic works for premium, minimal, corporate brands. Tetradic offers maximum variety but is the hardest to execute — best left to experienced designers.' },
                { q: 'Can I use the generated colors directly in my CSS?', a: 'Yes. Click "Copy CSS" to get a :root {} block with CSS custom properties (--color-1 through --color-5) ready to paste into your stylesheet. You can then use var(--color-1) anywhere in your CSS. For a more complete design token system, use the Color Converter to generate HSL values for each color and create lightness scales.' },
                { q: 'How many colors should a UI color palette have?', a: 'Most UI design systems define 2–3 brand colors (primary, secondary, accent) plus a full neutral gray scale. This gives you 30–60 named color tokens when you include all lightness steps. Five harmonious colors from a generator are a good starting point for exploring combinations — not the final production palette.' },
                { q: 'What does "locking" a color do?', a: 'Locking a color prevents it from changing when you click Generate. This is useful when you have a fixed brand color (e.g. your company\'s logo blue) and need to find harmonious companions for it. Lock your brand color, select a harmony mode, and regenerate the remaining slots until you find a combination that works.' },
                { q: 'How do I ensure my generated colors are accessible?', a: 'After generating your palette, check each color\'s contrast ratio against your text color (usually dark gray or black) and background color (usually white or light gray). WCAG AA requires at least 4.5:1 contrast for normal text. Adjust lightness in the Color Converter until the ratio passes. Monochromatic palettes are the easiest to make accessible because you control lightness directly.' },
                { q: 'What is the difference between a tint, shade, and tone?', a: 'These terms describe how you modify a pure color. A tint adds white (lighter version). A shade adds black (darker version). A tone adds gray (more muted version). Monochromatic palettes use tints and shades of a single hue. Understanding these terms helps when communicating with print designers and when building lightness scales for design systems.' },
                { q: 'Can I generate a palette starting from a specific color?', a: 'Not directly in this tool — the generator creates harmonious palettes from a randomly chosen base color. To start from a specific color, generate a few palettes, lock colors manually, or use the Color Converter to find the HSL values of your target color and manually select harmony colors at the appropriate angular offsets (e.g. +120° and +240° for triadic).' },
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