export default function UsernameGeneratorContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is a username generator?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              A username generator creates unique, memorable handles for social media profiles, gaming accounts, developer platforms, and online communities. It combines curated word lists — adjectives, nouns, and verbs — into creative combinations that are easy to remember and type.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              This generator offers four distinct style presets: a casual fun style for social media, a professional style for LinkedIn and portfolios, a <strong style={{ color: 'var(--ink)' }}>gamer style</strong> for Discord, Twitch, and Xbox — where compact gamertags without separators are preferred — and a minimal style for platforms with strict character limits.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              How to generate a username
            </h2>
            <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { n: '1', title: 'Select a style', desc: 'Fun uses underscores and numbers (wild_apex_392). Professional uses PascalCase without separators (BoldNova). Gamer removes all separators for gaming platforms (swiftnova847). Minimal keeps it short and clean (calmweb).' },
                { n: '2', title: 'Browse the suggestions', desc: '8 username suggestions are generated at once. Click any username to copy it immediately.' },
                { n: '3', title: 'Regenerate until you find the right one', desc: 'Click Generate new for a completely fresh set. The word pool is large enough that you\'ll rarely see repeats.' },
                { n: '4', title: 'Check availability before registering', desc: 'This tool generates the username — it doesn\'t check platform availability. Always verify your chosen handle is available on the target platform before committing.' },
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
              Tips for choosing a good username
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
              {[
                { tip: 'Keep it short',           desc: 'Under 15 characters is ideal. Short usernames are easier to remember, type, and tag.' },
                { tip: 'Make it pronounceable',   desc: 'Names that can be said out loud are easier to recommend and share verbally.' },
                { tip: 'Avoid numbers at the end',desc: 'Username123 looks like a taken name with a workaround. If you must add numbers, put them in the middle.' },
                { tip: 'Be consistent',           desc: 'Use the same username across platforms when possible. It builds a recognizable personal brand.' },
                { tip: 'Skip special characters', desc: 'Underscores are fine; dashes and dots cause issues on some platforms and are easy to confuse.' },
                { tip: 'Check all platforms first',desc: 'Before settling on a username, check availability on the platforms that matter to you.' },
              ].map(({ tip, desc }) => (
                  <div key={tip} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{tip}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                  </div>
              ))}
            </div>
          </section>

        </div>
      </div>
  );
}