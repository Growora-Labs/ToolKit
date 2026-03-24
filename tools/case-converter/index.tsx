import type { FaqItem } from '../../lib/types';

export const faq: FaqItem[] = [
  {
    q: 'What is the difference between Title Case and Capitalized Words?',
    a: 'Title Case follows style guides — small words like "a", "the", "and", "in" stay lowercase unless they\'re the first word. Capitalized Words simply uppercases the first letter of every word, no exceptions.',
  },
  {
    q: 'What is camelCase used for?',
    a: 'camelCase is the standard naming convention in JavaScript, TypeScript, Java, and Swift for variables and functions. The first word is lowercase, every subsequent word starts with uppercase — e.g. "getUserData".',
  },
  {
    q: 'When should I use snake_case vs kebab-case?',
    a: 'snake_case is preferred in Python, Ruby, and database column names. kebab-case is standard for URLs, CSS class names, HTML attributes, and file names. Both are common in APIs.',
  },
  {
    q: 'What is CONSTANT_CASE?',
    a: 'CONSTANT_CASE (also called SCREAMING_SNAKE_CASE) is used for constants and environment variables in most languages — e.g. MAX_RETRY_COUNT or DATABASE_URL.',
  },
  {
    q: 'Does this tool work with multi-line text?',
    a: 'Yes. All conversions handle multi-line input correctly. Each line is converted independently for Sentence case and Capitalized modes.',
  },
];

export const useCases = [
  { label: 'Sentence case', desc: 'Blog posts, UI text, error messages'           },
  { label: 'Title Case',    desc: 'Article headlines, book titles, email subjects' },
  { label: 'UPPERCASE',     desc: 'Acronyms, CTAs, emphasis in UI'                },
  { label: 'camelCase',     desc: 'JavaScript/TypeScript variables and functions'  },
  { label: 'PascalCase',    desc: 'React components, class names, types'          },
  { label: 'snake_case',    desc: 'Python, Ruby, SQL column names'                },
  { label: 'kebab-case',    desc: 'URLs, CSS classes, HTML attributes'            },
  { label: 'CONSTANT_CASE', desc: 'Environment variables, config constants'       },
];
