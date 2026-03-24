import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
    { q: 'What is a UUID?', a: 'UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify objects in computer systems. The standard format is 32 hex digits split by hyphens: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.' },
    { q: 'What is UUID v4?', a: 'Version 4 UUIDs are randomly generated. They use cryptographically secure randomness, making collisions astronomically unlikely — roughly 1 in 5.3 × 10³⁶ chance for any two v4 UUIDs to match.' },
    { q: 'Are these UUIDs unique?', a: 'Yes. This tool uses window.crypto.randomUUID() — the same Web Crypto API your browser uses for secure operations. All generation is local; nothing is stored or transmitted.' },
    { q: 'When should I use UUIDs?', a: 'UUIDs are ideal for database primary keys, session tokens, file names, API resource IDs, and anywhere you need a globally unique identifier without a central authority.' },
    { q: 'What is the difference between uppercase and lowercase UUIDs?', a: 'They are functionally identical — UUID is case-insensitive by specification. Lowercase is the most common convention in modern systems, but some legacy systems expect uppercase.' },
];

export const sidebarInfo = [
    { label: 'Format',      value: '32 hex chars + 4 hyphens'      },
    { label: 'Total length',value: '36 characters'                  },
    { label: 'Version',     value: 'v4 (random)'                   },
    { label: 'Entropy',     value: '122 bits of randomness'         },
    { label: 'Collisions',  value: '~1 in 5.3 × 10³⁶'              },
    { label: 'RFC',         value: 'RFC 4122'                       },
];