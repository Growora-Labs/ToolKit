import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
    { q: 'What is URL encoding?', a: 'URL encoding (percent-encoding) converts characters that are not allowed in URLs into a safe format. Special characters are replaced with a % followed by two hex digits. For example, a space becomes %20.' },
    { q: 'Which characters need encoding?', a: 'Reserved characters like ?, &, =, #, /, +, and non-ASCII characters (like accented letters or emoji) must be encoded. Letters, digits, and - _ . ~ are safe without encoding.' },
    { q: 'What is the difference between encodeURI and encodeURIComponent?', a: 'encodeURI encodes a full URL, leaving structural characters like /, ?, # intact. encodeURIComponent encodes everything including those characters — use it for individual query parameter values.' },
    { q: 'Why does my URL have %20 instead of +?', a: '%20 is the correct percent-encoding for a space in any URL context. The + sign is a legacy encoding for spaces in HTML form submissions (application/x-www-form-urlencoded) only.' },
];

export const sidebarInfo = [
    { label: 'Space',         value: '%20'  },
    { label: 'Slash /',       value: '%2F'  },
    { label: 'Question mark', value: '%3F'  },
    { label: 'Ampersand &',   value: '%26'  },
    { label: 'Equals =',      value: '%3D'  },
    { label: 'Hash #',        value: '%23'  },
    { label: 'At sign @',     value: '%40'  },
    { label: 'Plus +',        value: '%2B'  },
];