import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
    { q: 'What is a hash function?', a: 'A hash function takes any input and produces a fixed-length string called a digest. The same input always produces the same output, but you cannot reverse the process to recover the original text from the hash.' },
    { q: 'What is the difference between SHA-1, SHA-256, and SHA-512?', a: 'They differ in output length and security. SHA-1 (160-bit) is deprecated for security use. SHA-256 (256-bit) is the current standard for most applications. SHA-512 (512-bit) offers higher security and is faster on 64-bit systems.' },
    { q: 'Can I use this to hash passwords?', a: 'No. SHA functions are fast by design, making them unsuitable for password storage. For passwords, use bcrypt, Argon2, or scrypt — slow hashing algorithms designed to resist brute-force attacks.' },
    { q: 'What are hashes used for?', a: 'File integrity verification (checksums), digital signatures, data deduplication, API request signing (HMAC), storing non-sensitive identifiers, and verifying downloaded files.' },
    { q: 'Is my data safe?', a: 'Yes. All hashing is done locally in your browser using the Web Crypto API. Nothing is transmitted to any server.' },
];

export const sidebarInfo = [
    { label: 'SHA-1',   value: '160-bit',  desc: 'Deprecated — do not use for security'   },
    { label: 'SHA-256', value: '256-bit',  desc: 'Current standard — use for most needs'  },
    { label: 'SHA-384', value: '384-bit',  desc: 'Intermediate option for TLS'            },
    { label: 'SHA-512', value: '512-bit',  desc: 'Highest strength, fast on 64-bit CPUs'  },
];