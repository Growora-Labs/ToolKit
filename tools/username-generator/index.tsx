import type { FaqItem } from '../../lib/types';

export const faq: FaqItem[] = [
    { q: 'How are usernames generated?', a: 'Usernames are built by combining random adjectives, nouns, and verbs from curated word lists. The style setting controls the format — fun uses underscores and numbers, professional uses PascalCase, gamer removes separators, minimal keeps it short.' },
    { q: 'Are these usernames unique?', a: 'With thousands of possible word combinations, duplicates are rare. However, availability on specific platforms is not checked — always verify the name is available before registering.' },
    { q: 'Can I use these for any platform?', a: 'Yes. The generated names are designed to be appropriate for social media, gaming, professional networks, and general online accounts. Some platforms have character or format restrictions — the minimal style works best for strict requirements.' },
    { q: 'How do I pick the best username?', a: 'Choose something easy to remember, spell, and type. Shorter is generally better. Avoid numbers that look like letters (0 vs O, 1 vs l). If the name will represent a brand, prefer the professional style.' },
];

export const styleGuide = [
    { style: 'Fun',          example: 'wild_apex_392', desc: 'Great for social media and casual platforms'     },
    { style: 'Professional', example: 'BoldNova',      desc: 'LinkedIn, portfolio sites, business accounts'   },
    { style: 'Gamer',        example: 'swiftnova847',  desc: 'Gaming platforms, Twitch, Discord'              },
    { style: 'Minimal',      example: 'calmweb',       desc: 'Short handles, usernames with character limits'  },
];