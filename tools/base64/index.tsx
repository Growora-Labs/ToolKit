import type { FaqItem } from '../../lib/types';

export const faq: FaqItem[] = [
    { q: 'What is Base64?', a: 'Base64 is an encoding scheme that converts binary data into ASCII text using 64 printable characters (A–Z, a–z, 0–9, +, /). It\'s not encryption — it\'s a way to safely transmit binary data over text-only channels.' },
    { q: 'Why is Base64 used?', a: 'Base64 is used to embed binary data in text formats — for example, images in HTML/CSS data URIs, file attachments in email (MIME), tokens in JWTs, and API payloads that must remain text-safe.' },
    { q: 'Does Base64 make data secure?', a: 'No. Base64 is not encryption. Anyone can decode it instantly. Do not use Base64 to hide sensitive data — use proper encryption (AES, RSA) for that purpose.' },
    { q: 'Why does Base64 output end with "=="?', a: 'Base64 works in 3-byte chunks. If the input length isn\'t divisible by 3, padding characters (=) are added to complete the last chunk. One = means 1 padding byte, == means 2.' },
    { q: 'What is the size overhead of Base64?', a: 'Base64 encoded output is approximately 33% larger than the original input, because 3 bytes of binary become 4 ASCII characters.' },
];

export const sidebarInfo = [
    { label: 'Character set', value: 'A–Z, a–z, 0–9, +, /' },
    { label: 'Padding',       value: '= or =='              },
    { label: 'Size overhead', value: '~33% larger'          },
    { label: 'RFC',           value: 'RFC 4648'             },
    { label: 'Use cases',     value: 'JWT, data URIs, MIME' },
];