import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
    { q: 'What Markdown syntax is supported?', a: 'Headings (# to ######), bold (**text**), italic (*text*), inline code (`code`), code blocks (```), links, images, unordered lists (- item), ordered lists (1. item), blockquotes (> text), and horizontal rules (---).' },
    { q: 'Can I export the HTML?', a: 'Yes. Click "Copy HTML" to copy the rendered HTML to your clipboard, ready to paste into any website, CMS, or email template.' },
    { q: 'Is my content saved?', a: 'Content is not persisted between sessions. If you need to save your work, copy it before closing the browser tab.' },
    { q: 'What is Markdown used for?', a: 'Markdown is the standard writing format for README files, GitHub, documentation, blog posts (Ghost, Jekyll, Hugo), note-taking apps (Notion, Obsidian), and comment systems. It converts to clean HTML.' },
];

export const cheatSheet = [
    { syntax: '# Heading',        output: 'H1–H6 headings'     },
    { syntax: '**bold**',         output: 'Bold text'           },
    { syntax: '*italic*',         output: 'Italic text'         },
    { syntax: '`code`',           output: 'Inline code'         },
    { syntax: '```\\nblock\\n```', output: 'Code block'          },
    { syntax: '- item',           output: 'Unordered list'      },
    { syntax: '1. item',          output: 'Ordered list'        },
    { syntax: '> quote',          output: 'Blockquote'          },
    { syntax: '[text](url)',       output: 'Link'                },
    { syntax: '![alt](url)',       output: 'Image'               },
    { syntax: '---',               output: 'Horizontal rule'    },
];