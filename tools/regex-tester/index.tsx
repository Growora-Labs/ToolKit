import type { FaqItem } from '../../lib/types';

export const faq: FaqItem[] = [
  {
    q: 'What regex flavour does this tester use?',
    a: 'This tester uses JavaScript\'s built-in RegExp engine, which follows the ECMAScript specification. It supports most common regex features including lookaheads, named groups (?<name>...), and Unicode. It does not support lookbehinds in all browsers or PCRE-specific syntax.',
  },
  {
    q: 'What do the flags mean?',
    a: 'g (global) — find all matches instead of stopping at the first. i (insensitive) — ignore case when matching. m (multiline) — make ^ and $ match the start/end of each line, not just the whole string. s (dotall) — make . match newline characters as well.',
  },
  {
    q: 'How do I use named capture groups?',
    a: 'Use the syntax (?<name>pattern). For example, (?<year>\\d{4})-(?<month>\\d{2}) will capture year and month as named groups. The match details panel shows captured group names and values.',
  },
  {
    q: 'How does replacement work?',
    a: 'Enable the Replace toggle and enter a replacement string. Use $1, $2... to reference capture groups by number, or $<name> for named groups. For example, replacing (\\w+) (\\w+) with $2 $1 swaps two words.',
  },
  {
    q: 'Why does my regex cause an infinite loop?',
    a: 'Zero-length matches (like \\b or a* on empty input) can cause infinite loops with the global flag. This tester automatically advances the cursor to prevent hanging. If you get unexpected results, try removing the g flag.',
  },
];

export const cheatSheet = [
  { syntax: '.',        desc: 'Any character except newline'              },
  { syntax: '\\d',      desc: 'Digit [0-9]'                              },
  { syntax: '\\w',      desc: 'Word character [a-zA-Z0-9_]'              },
  { syntax: '\\s',      desc: 'Whitespace (space, tab, newline)'         },
  { syntax: '\\b',      desc: 'Word boundary'                            },
  { syntax: '^',        desc: 'Start of string (or line with m flag)'    },
  { syntax: '$',        desc: 'End of string (or line with m flag)'      },
  { syntax: '*',        desc: 'Zero or more (greedy)'                    },
  { syntax: '+',        desc: 'One or more (greedy)'                     },
  { syntax: '?',        desc: 'Zero or one / makes quantifier lazy'      },
  { syntax: '{n,m}',    desc: 'Between n and m repetitions'              },
  { syntax: '[abc]',    desc: 'Character class — a, b or c'              },
  { syntax: '[^abc]',   desc: 'Negated class — not a, b or c'            },
  { syntax: '(abc)',    desc: 'Capture group'                             },
  { syntax: '(?:abc)',  desc: 'Non-capturing group'                       },
  { syntax: '(?<n>...)',desc: 'Named capture group'                       },
  { syntax: 'a|b',      desc: 'Alternation — a or b'                     },
  { syntax: '(?=...)',  desc: 'Positive lookahead'                        },
  { syntax: '(?!...)',  desc: 'Negative lookahead'                        },
];
