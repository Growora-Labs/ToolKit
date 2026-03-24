import type { ToolMeta } from './types';

/**
 * TOOLS REGISTRY — single source of truth.
 *
 * To add a new tool:
 *  1. Create folder:  tools/<slug>/
 *  2. Add files:      meta.ts | component.tsx | use-<slug>.ts
 *  3. Add one entry below — everything else is automatic.
 */
export const TOOLS: ToolMeta[] = [
  {
    slug:        'password-generator',
    name:        'Password Generator',
    tagline:     'Strong random passwords with custom settings',
    description: 'Free browser-based password generator. Create strong, cryptographically random passwords — never stored or transmitted.',
    category:    'Security',
    keywords:    ['password generator', 'strong password', 'random password', 'secure password generator'],
    live:        true,
    featured:    true,
  },
  {
    slug:        'word-counter',
    name:        'Word Counter',
    tagline:     'Words, characters, sentences & reading time',
    description: 'Free online word counter. Instantly count words, characters, sentences, paragraphs, reading time and keyword density.',
    category:    'Text & Writing',
    keywords:    ['word counter', 'character counter', 'word count tool', 'reading time calculator'],
    live:        true,
  },
  {
    slug:        'lorem-ipsum',
    name:        'Lorem Ipsum Generator',
    tagline:     'Placeholder text for mockups & design',
    description: 'Generate Lorem Ipsum placeholder text by words, sentences, or paragraphs. Free and instant.',
    category:    'Text & Writing',
    keywords:    ['lorem ipsum generator', 'placeholder text', 'dummy text generator'],
    live:        true,
  },
  {
    slug:        'uuid-generator',
    name:        'UUID Generator',
    tagline:     'Generate v4 UUIDs instantly',
    description: 'Generate cryptographically random UUID v4 identifiers in one click. Free, browser-based.',
    category:    'Developer Tools',
    keywords:    ['uuid generator', 'unique id generator', 'guid generator'],
    live:        true,
  },
  {
    slug:        'base64',
    name:        'Base64 Encoder',
    tagline:     'Encode or decode Base64 strings',
    description: 'Free online Base64 encoder and decoder. Convert text or files to Base64 and back instantly.',
    category:    'Developer Tools',
    keywords:    ['base64 encoder', 'base64 decoder', 'base64 converter'],
    live:        true,
  },
  {
    slug:        'json-formatter',
    name:        'JSON Formatter',
    tagline:     'Prettify, minify & validate JSON',
    description: 'Format, beautify, minify and validate JSON data online. Free and browser-based.',
    category:    'Developer Tools',
    keywords:    ['json formatter', 'json beautifier', 'json validator', 'json prettify'],
    live:        true,
  },
  {
    slug:        'url-encoder',
    name:        'URL Encoder',
    tagline:     'Encode and decode URLs instantly',
    description: 'Free online URL encoder and decoder. Encode special characters for safe use in URLs.',
    category:    'Developer Tools',
    keywords:    ['url encoder', 'url decoder', 'url encode decode'],
    live:        false,
  },
  {
    slug:        'hash-generator',
    name:        'Hash Generator',
    tagline:     'MD5, SHA-1, SHA-256 & more',
    description: 'Generate MD5, SHA-1, SHA-256 and SHA-512 hashes from any text. Free, browser-based.',
    category:    'Security',
    keywords:    ['hash generator', 'md5 generator', 'sha256 generator'],
    live:        false,
  },
  {
    slug:        'case-converter',
    name:        'Case Converter',
    tagline:     'UPPER, lower, Title, camelCase & more',
    description: 'Convert text between uppercase, lowercase, title case, camelCase, snake_case, kebab-case and more. Free, instant, browser-based.',
    category:    'Text & Writing',
    keywords:    ['case converter', 'camelcase converter', 'snake case converter', 'text case converter', 'uppercase lowercase converter'],
    live:        true,
  },
  {
    slug:        'markdown-editor',
    name:        'Markdown Editor',
    tagline:     'Write and preview Markdown live',
    description: 'Free online Markdown editor with live preview. Write Markdown and see the result instantly.',
    category:    'Text & Writing',
    keywords:    ['markdown editor', 'markdown preview', 'online markdown'],
    live:        false,
  },
  {
    slug:        'color-palette',
    name:        'Color Palette Generator',
    tagline:     'Generate beautiful color palettes',
    description: 'Generate harmonious color palettes instantly. Choose from analogous, complementary, triadic and more. Copy HEX, RGB, HSL or CSS variables with one click.',
    category:    'Design',
    keywords:    ['color palette generator', 'color scheme generator', 'color picker', 'color harmony'],
    live:        true,
  },
  {
    slug:        'username-generator',
    name:        'Username Generator',
    tagline:     'Creative handles for social media',
    description: 'Generate creative, unique usernames for social media, gaming, and online accounts.',
    category:    'Design',
    keywords:    ['username generator', 'nickname generator', 'gamertag generator'],
    live:        true,
  },
];

/* ── Helpers ──────────────────────────────────────────── */

export const getLiveTools  = () => TOOLS.filter(t => t.live);
export const getSoonTools  = () => TOOLS.filter(t => !t.live);
export const getFeatured   = () => TOOLS.find(t => t.featured);
export const getBySlug     = (slug: string) => TOOLS.find(t => t.slug === slug);
export const getLiveSlugs  = () => getLiveTools().map(t => t.slug);

export const getByCategory = () => {
  const map = new Map<string, ToolMeta[]>();
  for (const tool of TOOLS) {
    if (!map.has(tool.category)) map.set(tool.category, []);
    map.get(tool.category)!.push(tool);
  }
  return map;
};