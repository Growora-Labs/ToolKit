export default function MarkdownEditorContent() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
      <div>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            What is Markdown?
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
            Markdown is a lightweight markup language created by John Gruber in 2004. It allows you to write formatted text using plain-text syntax — asterisks for bold, hashes for headings, dashes for lists — which is then converted to clean HTML. The goal was to make writing for the web as readable as possible in its raw form.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
            Today, Markdown is the standard writing format for <strong style={{ color: 'var(--ink)' }}>GitHub README files</strong>, documentation platforms (Notion, Confluence, GitBook), static site generators (Jekyll, Hugo, Next.js MDX), note-taking apps (Obsidian, Bear), and most developer-facing content tools. Understanding Markdown is a fundamental skill for any developer or technical writer.
          </p>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
            How to use the Markdown editor
          </h2>
          <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { n: '1', title: 'Write or paste Markdown', desc: 'Click the source panel and start writing. The editor comes pre-loaded with an example covering the most common syntax elements.' },
              { n: '2', title: 'Switch between views', desc: 'Split shows the source and preview side by side. Source shows the raw Markdown only. Preview shows the rendered HTML only — useful on smaller screens.' },
              { n: '3', title: 'Preview the rendered output', desc: 'The right panel renders your Markdown to HTML in real time as you type. Headings, bold, italic, code blocks, lists, and links are all supported.' },
              { n: '4', title: 'Export as HTML', desc: 'Click Copy HTML to copy the full rendered HTML to your clipboard. Paste it directly into a CMS, email template, or web page.' },
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
            Markdown syntax quick reference
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  {['Syntax', 'Result', 'Notes'].map(h => (
                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['# Heading 1',          'H1 heading',              'Use only one H1 per document'],
                  ['## Heading 2',         'H2 heading',              'Main sections'],
                  ['**bold**',             'Bold text',               'Two asterisks on each side'],
                  ['*italic*',             'Italic text',             'One asterisk or underscore'],
                  ['`inline code`',        'Inline code',             'Backtick on each side'],
                  ['```\\ncode block\\n```','Code block',              'Three backticks, optionally with language name'],
                  ['- item',               'Unordered list item',     'Also works with * or +'],
                  ['1. item',              'Ordered list item',       'Numbers don\'t need to be sequential'],
                  ['> quote',              'Blockquote',              'Nestable with multiple >'],
                  ['[text](url)',          'Link',                    'Title optional: [text](url "title")'],
                  ['![alt](url)',          'Image',                   'Alt text required for accessibility'],
                  ['---',                  'Horizontal rule',         'Also works with *** or ___'],
                ].map(([syntax, result, note], i) => (
                  <tr key={syntax} style={{ background: i % 2 === 0 ? 'var(--white)' : 'var(--page-bg)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: 'var(--green)' }}>{syntax}</td>
                    <td style={{ padding: '10px 14px', fontWeight: 500, color: 'var(--ink)' }}>{result}</td>
                    <td style={{ padding: '10px 14px', color: 'var(--ink-3)' }}>{note}</td>
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
