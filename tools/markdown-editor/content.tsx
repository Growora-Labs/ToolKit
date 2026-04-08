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
              Today, Markdown is the standard writing format for <strong style={{ color: 'var(--ink)' }}>GitHub README files</strong> (using <a href="https://github.github.com/gfm/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>GitHub Flavored Markdown</a>), documentation platforms (Notion, Confluence, GitBook), static site generators (Jekyll, Hugo, Next.js MDX), and note-taking apps (Obsidian, Bear). The base specification is <a href="https://commonmark.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>CommonMark</a> — a standardized, well-specified version of Markdown that most modern tools follow. Understanding Markdown syntax is a fundamental skill for any developer or technical writer.
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
              Markdown syntax cheat sheet
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

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Advanced Markdown features (GitHub Flavored Markdown)
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              CommonMark covers the basics, but most platforms implement extensions. GitHub Flavored Markdown (GFM) is the most widely adopted superset and adds several features that are essential for technical writing:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                {
                  feature: 'Tables',
                  syntax: '| Col 1 | Col 2 |\\n|-------|-------|\\n| A     | B     |',
                  note: 'Pipe-separated columns with a header separator row. Colons in the separator control alignment: :--- left, :---: center, ---: right.',
                },
                {
                  feature: 'Task lists',
                  syntax: '- [x] Done\\n- [ ] Todo',
                  note: 'Checkboxes rendered as interactive elements on GitHub. Useful for tracking progress in issues and PRs.',
                },
                {
                  feature: 'Strikethrough',
                  syntax: '~~deleted text~~',
                  note: 'Two tildes on each side. Renders as <del> in HTML. CommonMark does not include this — GFM extension only.',
                },
                {
                  feature: 'Fenced code with language',
                  syntax: '```javascript\\nconst x = 1;\\n```',
                  note: 'The language identifier after the opening fence enables syntax highlighting in supported renderers.',
                },
                {
                  feature: 'Footnotes',
                  syntax: 'Text[^1]\\n\\n[^1]: Footnote content',
                  note: 'Supported in GitHub, Pandoc, and most static site generators. Not part of core CommonMark.',
                },
                {
                  feature: 'Auto-links',
                  syntax: 'https://example.com',
                  note: 'GFM automatically converts bare URLs into clickable links without needing [text](url) syntax.',
                },
              ].map(({ feature, syntax, note }) => (
                <div key={feature} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 6, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)' }}>{feature}</span>
                    <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: 'var(--green)', background: 'var(--green-lt)', padding: '1px 8px', borderRadius: 4, whiteSpace: 'pre' }}>{syntax}</code>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--ink-4)', margin: 0 }}>{note}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Markdown flavors compared
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
              Markdown has no single official specification — each platform implements its own dialect. Knowing which flavor your target environment uses prevents the frustration of syntax that works in one place and breaks in another.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
              {[
                { name: 'CommonMark', desc: 'The closest thing to a standard. Defines unambiguous rules for all core syntax elements. Used by Discourse, Reddit, Stack Overflow, and as the base for most other flavors.' },
                { name: 'GitHub Flavored Markdown (GFM)', desc: 'CommonMark plus tables, task lists, strikethrough, auto-links, and syntax highlighting. The most common flavor for developers — used in GitHub READMEs, issues, and wikis.' },
                { name: 'MDX', desc: 'Markdown + JSX. Lets you import and use React components directly inside Markdown files. The standard format for Next.js, Docusaurus, and Astro documentation.' },
                { name: 'Obsidian Markdown', desc: 'Adds wiki-style [[wikilinks]], callouts, canvas embeds, and dataview queries. Optimised for personal knowledge management rather than publishing.' },
                { name: 'Pandoc Markdown', desc: 'The most feature-rich dialect. Adds footnotes, definition lists, citations, LaTeX math, and multi-format export to PDF, DOCX, HTML, and more. Used heavily in academic writing.' },
                { name: 'MultiMarkdown', desc: 'Early extension adding tables, footnotes, and cross-references. Largely superseded by GFM and Pandoc but still used in some macOS-native apps like iA Writer.' },
              ].map(({ name, desc }) => (
                <div key={name} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{name}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Where Markdown is used
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              Markdown has quietly become the dominant writing format for developer-facing content. Understanding where it appears helps you recognise when to write Markdown versus when a richer format is more appropriate.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              <strong style={{ color: 'var(--ink)' }}>Version control and code collaboration:</strong> GitHub, GitLab, and Bitbucket render Markdown in READMEs, pull request descriptions, issue comments, wikis, and release notes. The <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>README.md</code> at the root of a repository is the first thing visitors see — it is the homepage of your project. Writing it well in Markdown is one of the highest-leverage things a developer can do for their open-source project.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
              <strong style={{ color: 'var(--ink)' }}>Documentation platforms:</strong> Notion, Confluence, GitBook, Docusaurus, VitePress, MkDocs, and Mintlify all use Markdown or a close derivative as their primary authoring format. Many accept raw <code style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, background: 'var(--border)', padding: '1px 5px', borderRadius: 3 }}>.md</code> files checked into a repository, making documentation-as-code workflows possible.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
              <strong style={{ color: 'var(--ink)' }}>Blogging and publishing:</strong> Ghost, Hashnode, dev.to, Medium (partial), Substack (partial), and Jekyll/Hugo/Eleventy static site generators use Markdown for post content. The author writes in Markdown; the platform or build tool converts it to HTML. This separation of content from presentation is the core advantage — the same Markdown file can render in multiple themes and formats without modification.
            </p>
          </section>

          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 24 }}>
              Frequently asked questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', overflow: 'hidden' }}>
              {[
                { q: 'What is the difference between Markdown and HTML?', a: 'HTML is a markup language that browsers natively understand — every formatting instruction is an explicit tag like <strong> or <p>. Markdown is a lightweight shorthand that gets converted to HTML by a parser. You write **bold** and the Markdown parser outputs <strong>bold</strong>. Markdown trades HTML\'s precision for readability: raw Markdown is easy for humans to read in a text editor, while raw HTML is not. The conversion is one-way — Markdown produces HTML, but not every HTML document can be losslessly converted back to Markdown.' },
                { q: 'Does Markdown support HTML directly?', a: 'Yes. All CommonMark-compliant parsers allow raw HTML to be embedded directly in a Markdown document. Any valid HTML tag — <div>, <span>, <table>, <details> — will pass through the parser unchanged and appear in the rendered output. This is useful for features that Markdown does not natively support, such as centered text, colored text, or collapsible sections using <details> and <summary>. However, some platforms (notably GitHub) sanitise certain HTML tags for security reasons.' },
                { q: 'Why do some spaces and line breaks not appear in the rendered output?', a: 'Markdown treats single newlines as spaces, not as paragraph breaks. To create a paragraph break, you need a blank line between two blocks of text. To force a line break within a paragraph (a <br> in HTML), end the line with two or more spaces before pressing Enter — a convention that confuses many beginners because trailing spaces are invisible. Some parsers also support a backslash at the end of a line as a line-break escape.' },
                { q: 'How do I escape special Markdown characters like asterisks and backticks?', a: 'Prefix the character with a backslash to treat it literally: \\* produces a literal asterisk instead of beginning an italic or bold span. The characters that need escaping are: \\ ` * _ { } [ ] ( ) # + - . !. For backticks specifically, you can wrap the inline code in double backticks if the content itself contains a backtick: ``code with `backtick` inside``.' },
                { q: 'What is the difference between CommonMark and GitHub Flavored Markdown?', a: 'CommonMark is a standardised specification for the core Markdown syntax, defining unambiguous rules for edge cases that the original Gruber spec left vague. GitHub Flavored Markdown (GFM) is a superset of CommonMark that adds tables, task list items, strikethrough (~~text~~), auto-linking of URLs, and disallowing certain raw HTML tags for security. Most modern Markdown tools are built on CommonMark and optionally enable GFM extensions.' },
                { q: 'Can I use Markdown to write academic papers or documents with citations?', a: 'Standard Markdown and GFM do not have built-in citation or bibliography support. For academic writing, Pandoc Markdown is the right choice — it adds footnotes, cross-references, and a citation syntax that works with BibTeX and CSL bibliography files. Pandoc can export to PDF (via LaTeX), DOCX, HTML, and many other formats, making it a complete academic writing workflow. For simpler citation needs, footnotes (supported in Pandoc, GitHub, and most static site generators) are often sufficient.' },
                { q: 'How do I add syntax highlighting to code blocks?', a: 'Place the language identifier immediately after the opening triple backtick: ```javascript, ```python, ```bash, etc. The Markdown parser passes the language hint to a syntax highlighting library (typically Prism.js, Highlight.js, or Shiki in web contexts). The specific language identifiers supported depend on the highlighting library your renderer uses. If no language is specified, the code block renders without highlighting.' },
                { q: 'Is Markdown safe to render in a web application?', a: 'Raw HTML embedded in Markdown can contain <script> tags, event handlers, and other XSS vectors, so you should never render user-supplied Markdown directly to innerHTML without sanitisation. The standard approach is to parse the Markdown to HTML with a library like marked.js or remark, then sanitise the HTML output with DOMPurify before inserting it into the DOM. This removes dangerous tags and attributes while preserving safe formatting.' },
                { q: 'What is MDX and when should I use it?', a: 'MDX is Markdown extended with JSX — it lets you import and render React components directly inside a Markdown file. It is the standard format for Next.js (App Router with MDX support), Docusaurus, Astro, and Remix documentation. Use MDX when your documentation or blog needs interactive elements — live code playgrounds, data-driven charts, interactive demos — that pure Markdown cannot express. The trade-off is that MDX files are only meaningful in a React/JSX build pipeline, while plain Markdown is portable across every tool.' },
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