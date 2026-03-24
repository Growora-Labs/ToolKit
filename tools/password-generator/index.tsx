import type { FaqItem } from '../../lib/types';

export const faq: FaqItem[] = [
  {
    q: 'Is this password generator safe to use?',
    a: 'Yes — completely. Everything runs in your browser via the Web Crypto API (the same standard that powers HTTPS). No password ever leaves your device.',
  },
  {
    q: 'How long should my password be?',
    a: 'At least 16 characters for everyday accounts. For banking or email, use 20+ characters with symbols enabled.',
  },
  {
    q: 'Can I reuse passwords across sites?',
    a: 'Never. One breach exposes every account that shares it. Generate a unique password per site and store them in a password manager.',
  },
  {
    q: 'Where should I store generated passwords?',
    a: 'A dedicated password manager — Bitwarden (free & open-source), 1Password, or similar. Avoid plain-text files or browser autofill for sensitive accounts.',
  },
  {
    q: 'What actually makes a password strong?',
    a: 'Length matters most. A 24-character lowercase-only password is statistically stronger than an 8-character one with every character type. Prioritise length, then add variety.',
  },
];

export const sidebarFeatures = [
  { label: 'Cryptographically secure', desc: 'Uses Web Crypto API — same randomness source as your OS.', color: 'var(--green)', bg: 'var(--green-lt)'  },
  { label: 'Zero data collection',     desc: 'Generated in your browser. Nothing is ever sent to a server.', color: 'var(--blue)',  bg: 'var(--blue-lt)'   },
  { label: 'Fully customisable',       desc: 'Length 8–64 chars. Toggle uppercase, numbers, symbols.', color: 'var(--amber)', bg: 'var(--amber-lt)' },
  { label: 'Instant & free',           desc: 'No account, no rate limits, no ads. Always free.', color: 'var(--ink-2)', bg: 'var(--border)'    },
];
