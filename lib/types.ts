/* ── Tool registry types ────────────────────────────── */

export interface ToolMeta {
  slug:        string;   // URL slug: "word-counter"
  name:        string;   // Display name: "Word Counter"
  tagline:     string;   // Short desc for cards: "Words, chars & reading time"
  description: string;   // Longer SEO description
  category:    ToolCategory;
  keywords:    string[];
  live:        boolean;
  featured?:   boolean;  // show on homepage hero
}

export type ToolCategory =
  | 'Security'
  | 'Text & Writing'
  | 'Developer Tools'
  | 'Design';

/* ── FAQ ────────────────────────────────────────────── */

export interface FaqItem {
  q: string;
  a: string;
}

/* ── Password Generator ─────────────────────────────── */

export interface PasswordOptions {
  length:    number;
  uppercase: boolean;
  lowercase: boolean;
  numbers:   boolean;
  symbols:   boolean;
}

export interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export interface UsePasswordGeneratorReturn {
  password:     string;
  options:      PasswordOptions;
  strength:     PasswordStrength;
  copied:       boolean;
  generate:     () => void;
  copy:         () => void;
  toggleOption: (key: keyof Omit<PasswordOptions, 'length'>) => void;
  setLength:    (val: number | string) => void;
}

export interface CheckboxOption {
  key:     keyof Omit<PasswordOptions, 'length'>;
  label:   string;
  example: string;
}

/* ── Word Counter ───────────────────────────────────── */

export interface WordStats {
  words:         number;
  chars:         number;
  charsNoSpaces: number;
  sentences:     number;
  paragraphs:    number;
  readingTime:   string;
  speakingTime:  string;
  uniqueWords:   number;
  avgWordLength: string;
}

export interface KeywordDensityItem {
  word:    string;
  count:   number;
  percent: string;
}
