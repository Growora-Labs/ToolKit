import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
    { q: 'What is Lorem Ipsum?', a: 'Lorem Ipsum is scrambled Latin text from Cicero\'s "De Finibus Bonorum et Malorum" (45 BC). It has been used as placeholder text in publishing and web design since the 1960s because it looks like natural language without being readable or distracting.' },
    { q: 'Why use Lorem Ipsum instead of real text?', a: 'Placeholder text lets designers and developers focus on layout, typography, and spacing without the distraction of meaningful content. It also prevents clients from fixating on copy before the design is finalized.' },
    { q: 'Is Lorem Ipsum copyrighted?', a: 'No. The original Latin source is over 2,000 years old and in the public domain. The Lorem Ipsum variant used in design has been freely used for decades with no copyright restrictions.' },
    { q: 'How many paragraphs should I generate?', a: 'For a single content block or card, 1 paragraph is usually enough. For a full page layout, 3–5 paragraphs gives a realistic sense of content density. Use sentences or words for smaller UI elements like buttons, labels, or headings.' },
];

export const useCases = [
    { label: 'Web mockups',       desc: 'Fill page layouts before real copy is ready'   },
    { label: 'Typography testing', desc: 'See how fonts render at different densities'  },
    { label: 'UI prototypes',     desc: 'Populate cards, feeds, and list components'    },
    { label: 'Print design',      desc: 'Standard in brochures, magazines, and posters' },
];