export default function QrCodeGeneratorContent() {
  return (
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
        <div>

          {/* ── What is ─────────────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What is a QR code?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              A QR code (Quick Response code) is a two-dimensional barcode that stores data as a pattern of black and white squares arranged in a grid. Invented by Denso Wave in 1994 for tracking automotive parts, QR codes became ubiquitous after smartphone cameras gained the ability to read them natively — no app required. Today they are the standard way to bridge physical and digital content.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              Unlike a traditional barcode which stores data only horizontally, a QR code stores data in both dimensions — which is why it can hold significantly more information. A standard QR code can store up to <strong style={{ color: 'var(--ink)' }}>7,089 numeric characters</strong>, <strong style={{ color: 'var(--ink)' }}>4,296 alphanumeric characters</strong>, or <strong style={{ color: 'var(--ink)' }}>2,953 bytes</strong> of binary data (enough for a URL plus metadata).
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              This generator creates <strong style={{ color: 'var(--ink)' }}>static QR codes</strong> — the data is encoded directly into the pattern. No server, no redirect, no account required. The code is generated locally in your browser using the <a href="https://www.npmjs.com/package/qrcode" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>qrcode</a> library and the HTML Canvas API.
            </p>
          </section>


          {/* ── What to encode ──────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              What can you encode in a QR code?
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              Any text can be encoded — but using the correct format ensures smartphones handle it correctly:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Content type', 'Format example', 'What it does'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['Website URL',    'https://example.com',                         'Opens in browser'],
                  ['Email',          'mailto:hello@example.com',                    'Opens email app with address pre-filled'],
                  ['Email + subject','mailto:hello@example.com?subject=Hello',       'Pre-fills address and subject line'],
                  ['Phone call',     'tel:+12345678900',                            'Prompts a phone call'],
                  ['SMS',            'sms:+12345678900?body=Hello',                 'Opens SMS app with number and message'],
                  ['WiFi (WPA)',     'WIFI:T:WPA;S:NetworkName;P:Password;;',        'Connects to WiFi automatically on iOS/Android'],
                  ['WiFi (open)',    'WIFI:T:nopass;S:NetworkName;;',               'Connects to open WiFi network'],
                  ['Plain text',     'Any plain text here',                         'Displays text after scanning'],
                  ['vCard contact',  'BEGIN:VCARD\\nVERSION:3.0\\nFN:Name\\nEND:VCARD', 'Adds contact to phone book'],
                  ['Location',       'geo:48.8566,2.3522',                          'Opens maps app at coordinates'],
                ].map(([type, fmt, action], i) => (
                    <tr key={type} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)' }}>{type}</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)' }}>{fmt}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{action}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Error correction ────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Error correction levels explained
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              QR codes use <strong style={{ color: 'var(--ink)' }}>Reed-Solomon error correction</strong> — the same algorithm used in CDs and DVDs. This allows the code to be read even when partially damaged, dirty, or covered. Higher correction means more redundant data, which makes the QR code larger but more resilient.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 10 }}>
              {[
                { level: 'L — 7%',  use: 'Clean digital displays, screens, low-risk environments', color: 'var(--green)',  bg: 'var(--green-lt)' },
                { level: 'M — 15%', use: 'General purpose — the recommended default for most uses', color: 'var(--blue)',   bg: 'var(--blue-lt)' },
                { level: 'Q — 25%', use: 'When adding a logo overlay on top of the QR code',       color: 'var(--amber)',  bg: 'var(--amber-lt)' },
                { level: 'H — 30%', use: 'Outdoor, industrial, or high-damage risk environments',   color: 'var(--red)',    bg: '#fef2f2' },
              ].map(({ level, use, color, bg }) => (
                  <div key={level} style={{ padding: '14px 16px', background: bg, border: `1px solid ${color}33`, borderRadius: 'var(--r-l)' }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color, marginBottom: 6 }}>{level}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55 }}>{use}</div>
                  </div>
              ))}
            </div>
          </section>

          {/* ── QR code size guide ──────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              QR code size guide for print and digital
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              The right size depends on where and how the QR code will be scanned. The general rule: <strong style={{ color: 'var(--ink)' }}>scanning distance ÷ 10 = minimum QR code size</strong>. At 50cm scanning distance, the minimum size is 5cm.
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Use case', 'Min print size', 'Recommended download', 'Notes'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {[
                  ['Website / email display', '—',           '256px PNG',  'Screen pixels — size in px is what matters'],
                  ['Business card',           '2.5 × 2.5cm', '512px SVG',  'Use SVG for crisp print at any DPI'],
                  ['Flyer / brochure',        '3 × 3cm',     '512px SVG',  'Scanning from ~30cm distance'],
                  ['Product label',           '2 × 2cm',     '384px SVG',  'Minimum readable size for product packaging'],
                  ['Billboard / large print', '10 × 10cm+',  'SVG',        'SVG scales infinitely — no pixel limit'],
                ].map(([use, size, dl, note], i) => (
                    <tr key={use} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ padding: '10px 14px', fontWeight: 500, color: 'var(--ink)' }}>{use}</td>
                      <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>{size}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-2)' }}>{dl}</td>
                      <td style={{ padding: '10px 14px', color: 'var(--ink-3)', fontSize: 13 }}>{note}</td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── Related tools ───────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 12 }}>
              Related tools
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              Need to encode data for API requests? Try the <a href="/tools/base64" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Base64 Encoder</a> or <a href="/tools/url-encoder" style={{ color: 'var(--green)', textDecoration: 'underline' }}>URL Encoder</a>. For secure sharing of credentials via a link, consider a self-destructing note service. To generate a password to encode in your QR code, use the <a href="/tools/password-generator" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Password Generator</a>.
            </p>
          </section>

          {/* ── FAQ ─────────────────────────────────────── */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 24 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', overflow: 'hidden' }}>
              {[
                { q: 'What is the maximum amount of data a QR code can store?', a: 'A QR code can store up to 7,089 numeric characters, 4,296 alphanumeric characters (A–Z, 0–9, and a handful of symbols), 2,953 bytes of binary data, or 1,817 kanji characters. In practice, QR codes are most reliably scanned when they contain 100–200 characters or fewer. Longer data creates a denser pattern that is harder to scan in poor lighting or at an angle, and produces a larger physical code. For URLs, a short URL (via a redirect service) scans faster and more reliably than a long one encoded directly.' },
                { q: 'What is the difference between static and dynamic QR codes?', a: 'A static QR code, like the one this tool generates, embeds the destination URL or data directly in the pattern. It cannot be changed after printing — if the URL changes, you must reprint the code. A dynamic QR code encodes a short URL that redirects to a configurable destination. The redirect target can be changed without reprinting the QR code, and dynamic codes support tracking analytics (scan count, location, device). Dynamic QR codes require a third-party service and typically cost money. Static codes are free, private, and work offline.' },
                { q: 'Can a QR code contain malware?', a: 'A QR code itself cannot execute code — it is just data. However, the URL it contains can point to a malicious website. "QRishing" (QR phishing) is a real attack vector where criminals replace legitimate QR codes on signs, restaurant menus, or parking meters with codes pointing to phishing pages or malware downloads. Best practices: before scanning an unknown QR code, use a scanner that previews the URL before opening it, verify the domain looks legitimate, and be cautious on unofficial QR codes in public places.' },
                { q: 'What image format should I download — PNG or SVG?', a: 'Use SVG for anything that will be printed or displayed at variable sizes — business cards, banners, signs, and any situation where you do not know the final display size. SVG is a vector format that scales to any resolution without losing quality. Use PNG for digital-only contexts like email signatures, presentations, website embeds, and social media, where a fixed pixel size is acceptable. For print, download the highest resolution PNG available (512px or higher) and ensure the physical size will be at least 2.5×2.5 cm.' },
                { q: 'Why is my QR code not scanning correctly?', a: 'The most common causes of scan failures: (1) Quiet zone — the QR code requires a white border (quiet zone) of at least 4 module widths around all sides. Placing a QR code flush against an edge or on a coloured background without a white margin breaks scanning. (2) Low contrast — dark code on dark background or light code on light background. Use black on white for maximum reliability. (3) Too small for the scanning distance — use the size guide above. (4) Logo overlay is too large — logos covering more than 15–20% of the code exceed the H-level error correction capacity.' },
                { q: 'How do I add a logo to the centre of a QR code?', a: 'QR codes include error correction redundancy that allows part of the pattern to be obscured. At Error Correction Level Q (25%) or H (30%), you can safely cover up to 15–20% of the code area with a logo and the code will still scan. Generate your QR code at the highest resolution, open it in an image editor (Figma, Photoshop, Canva), place the logo in the centre covering no more than 15% of the total area, and test the result with at least three different QR scanner apps before publishing.' },
                { q: 'Do QR codes expire?', a: 'Static QR codes generated by this tool never expire — the data is baked into the pattern permanently. The code will work as long as the destination URL or resource it points to is available. If you encode a URL that later becomes a 404 or redirects somewhere else, the QR code will still scan but the destination will be broken. Dynamic QR codes from paid services may have expiration policies tied to the subscription.' },
                { q: 'Can I scan a QR code from a computer screen?', a: 'Yes. Most modern smartphone cameras scan QR codes from screens just as well as from paper. Display the QR code full-screen on a monitor and hold your phone camera at least 15–20 cm away to get the entire code in frame. Avoid glare from overhead lights on glossy screens, which can obscure part of the pattern. Alternatively, most QR code scanner apps also have a "scan from gallery" mode that can decode a QR code image file directly from your phone\'s camera roll.' },
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