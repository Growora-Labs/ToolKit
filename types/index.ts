// ─── Tool types ──────────────────────────────────────────────────────────────

export interface Tool {
  name: string;
  href: string;
  icon: string;
  desc?: string;
  badge?: string;
  active?: boolean;
}

export interface ToolCategory {
  category: string;
  tools: Tool[];
}

// ─── Password Generator types ─────────────────────────────────────────────────

export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
}

export interface PasswordStrength {
  score: number;      // 0–100 for progress bar width
  label: string;      // "Weak" | "Fair" | "Strong" | "Very Strong"
  color: string;      // CSS color value
}

export interface UsePasswordGeneratorReturn {
  password: string;
  options: PasswordOptions;
  strength: PasswordStrength;
  copied: boolean;
  generate: () => void;
  copy: () => void;
  toggleOption: (key: keyof Omit<PasswordOptions, 'length'>) => void;
  setLength: (val: number | string) => void;
}

// ─── Checkbox option descriptor ───────────────────────────────────────────────

export interface CheckboxOption {
  key: keyof Omit<PasswordOptions, 'length'>;
  label: string;
  example: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  q: string;
  a: string;
}
