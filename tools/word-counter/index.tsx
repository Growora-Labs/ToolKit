import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
  {
    q: 'How does the word counter work?',
    a: 'It counts words by matching sequences of characters separated by spaces or punctuation. Everything runs in your browser — no text is ever sent to a server.',
  },
  {
    q: 'What is reading time based on?',
    a: 'Reading time uses the average adult silent reading speed of 200 words per minute. Speaking time uses 130 wpm, which is a typical conversational pace.',
  },
  {
    q: 'Why are some words excluded from keyword density?',
    a: 'Common "stop words" like "the", "a", "and", "is" are excluded because they appear in every text and carry no meaning for keyword analysis.',
  },
  {
    q: 'What counts as a sentence?',
    a: 'A sentence is counted each time the text contains a period, exclamation mark, or question mark. Single-line texts without punctuation count as one sentence.',
  },
  {
    q: 'Does it work with non-English text?',
    a: 'Word and character counts work for any language. Keyword density and reading time estimates are calibrated for English text.',
  },
];

export const whatsMeasured = [
  { label: 'Words',          desc: 'Total word count, live as you type'     },
  { label: 'Characters',     desc: 'With and without spaces'                },
  { label: 'Sentences',      desc: 'Detected by punctuation'                },
  { label: 'Paragraphs',     desc: 'Separated by blank lines'               },
  { label: 'Reading time',   desc: 'Based on 200 words per minute'          },
  { label: 'Speaking time',  desc: 'Based on 130 words per minute'          },
  { label: 'Unique words',   desc: 'Vocabulary richness indicator'          },
  { label: 'Keyword density',desc: 'Top 8 words, stop words excluded'       },
];

export const commonLimits = [
  { platform: 'Tweet (X)',              limit: '280 chars'         },
  { platform: 'Meta description (SEO)', limit: '160 chars'         },
  { platform: 'LinkedIn post',          limit: '3,000 chars'       },
  { platform: 'Blog post (ideal SEO)',  limit: '1,500–2,500 words' },
  { platform: 'College essay',          limit: '500–650 words'     },
  { platform: 'Short story',            limit: '1,000–7,500 words' },
];
