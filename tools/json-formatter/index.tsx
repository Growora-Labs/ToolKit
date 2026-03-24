import {FaqItem} from "@/lib/types";


export const faq: FaqItem[] = [
    { q: 'What is JSON?', a: 'JSON (JavaScript Object Notation) is a lightweight data format used to exchange data between servers and web applications. It\'s human-readable and language-independent, making it the standard for REST APIs and configuration files.' },
    { q: 'What does prettify do?', a: 'Prettify (also called "beautify") adds consistent indentation and line breaks to make JSON easy to read. Choose 2-space or 4-space indentation based on your style guide.' },
    { q: 'What does minify do?', a: 'Minify removes all whitespace, indentation, and newlines to produce the most compact JSON string. This reduces file size for network transfer — useful before sending JSON in API responses or storing in databases.' },
    { q: 'Why is my JSON invalid?', a: 'Common issues: trailing commas after the last property (not allowed in JSON), single quotes instead of double quotes, unquoted property keys, or undefined/NaN values (not valid JSON primitives).' },
    { q: 'Is my data safe?', a: 'Yes. All processing happens entirely in your browser using JavaScript\'s built-in JSON.parse() and JSON.stringify(). Nothing is sent to any server.' },
];

export const sidebarInfo = [
    { label: 'Prettify',  desc: 'Readable formatting with consistent indentation'   },
    { label: 'Minify',    desc: 'Remove whitespace — smaller payload for production' },
    { label: 'Validate',  desc: 'Check if JSON syntax is valid before using it'      },
    { label: '2-space',   desc: 'Common in JavaScript and Node.js projects'          },
    { label: '4-space',   desc: 'Common in Python and Java projects'                 },
];