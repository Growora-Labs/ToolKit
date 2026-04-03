import type { ToolVariant } from '@/lib/types';

export const variants: ToolVariant[] = [

    // ════════════════════════════════════════════════════════
    // BATCH 1 — Full content (5 variants)
    // ════════════════════════════════════════════════════════

    {
        slug:           'for-wifi',
        seoTitle:       'WiFi Password Generator — Strong Passwords for Your Router | ToolKit',
        seoH1:          'WiFi Password Generator',
        seoDescription: 'Generate a strong, random WiFi password instantly. WPA2/WPA3 supports up to 63 characters — use all types for maximum security. Free, browser-based, no signup.',
        intro:          'A WiFi password is one of the most important passwords in your home or office — it controls access to your entire network and every device on it. WPA2 and WPA3, the current wireless security standards, support passwords up to 63 characters. Unlike account passwords that need to be typed daily, a WiFi password is entered once per device, which means you can make it as long and random as possible without any usability penalty. This generator defaults to 20 characters with all character types enabled — the recommended setting for a residential or small business router. Avoid common mistakes like using your address, phone number, or a simple word. A strong WiFi password prevents unauthorized access, protects your bandwidth, and stops attackers from using your network as a vector for other attacks.',
        faq: [
            { q: 'How long should a WiFi password be?', a: 'WPA2 and WPA3 support 8–63 characters. Use at least 16 characters for a home network and 20+ for a business network. Longer is always better — you only need to type it once per device.' },
            { q: 'What characters are allowed in a WiFi password?', a: 'WPA2/WPA3 passwords can include uppercase letters, lowercase letters, digits, and most special characters. Avoid characters that may cause issues on some devices: single quotes, double quotes, and backslashes.' },
            { q: 'Do I need to change my WiFi password regularly?', a: 'Only if you suspect a breach — for example, after a guest has used it and you want to revoke access, or after a device has been compromised. Unlike account passwords, WiFi passwords do not need routine rotation.' },
            { q: 'What is the difference between WPA2 and WPA3?', a: 'WPA3 is the newer standard with stronger encryption (SAE instead of PSK) and protection against brute-force attacks. If your router supports WPA3, enable it. If not, WPA2-AES is still considered secure with a strong password.' },
            { q: 'Can my neighbors crack my WiFi password?', a: 'A 16+ character random password with mixed character types would take billions of years to crack with current hardware. The real risk is password reuse or easy-to-guess passwords — not brute force against a strong random one.' },
            { q: 'Should I use the same WiFi password for 2.4GHz and 5GHz bands?', a: 'You can, but using separate passwords adds a layer of control. If you share the 2.4GHz password with guests, your 5GHz network remains isolated. Alternatively, set up a dedicated guest network on most modern routers.' },
            { q: 'Is hiding my SSID a good security measure?', a: 'Hiding your network name (SSID) provides negligible security — any WiFi scanning tool can detect hidden networks. A strong random password is far more effective than a hidden SSID. Focus your effort on password strength and WPA3 if your router supports it.' },
            { q: 'What is the best WiFi password for a small business?', a: 'Use at least 20 characters with all character types. Set up a separate guest network for customers and visitors. For employees, consider WPA3-Enterprise with individual credentials per person rather than a shared password.' },
        ],
        defaults: { length: 20, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'WPA2 and WPA3 password requirements',
                body: 'The Wi-Fi Protected Access protocols — WPA2 and WPA3 — define the rules for wireless network passwords. Both standards accept passwords between 8 and 63 characters using any printable ASCII character. WPA2 uses the PSK (Pre-Shared Key) method where the password is combined with the network name (SSID) to derive the actual encryption key through PBKDF2 with 4,096 iterations of SHA-1. WPA3 replaces this with SAE (Simultaneous Authentication of Equals), which provides stronger protection against offline dictionary attacks even if the password is relatively short. Regardless of which protocol your router uses, a longer and more random password directly increases the computational cost of any brute-force attempt. The 63-character upper limit exists because the standard encodes the password as a sequence of ASCII bytes, and 63 bytes is the maximum the protocol frame can carry.',
            },
            {
                heading: 'How to change your WiFi password safely',
                body: 'Changing your WiFi password is straightforward but requires a few precautions to avoid locking yourself out. First, connect to your router via Ethernet cable or note the current WiFi password before changing it. Access your router admin panel — usually at 192.168.0.1 or 192.168.1.1 — and navigate to the wireless security section. Generate a new password using this tool, paste it into the router settings, and save. Then reconnect each device using the new password. Start with the device you are currently using to confirm the new password works before updating phones, tablets, smart home devices, and guest devices. For smart home devices (thermostats, cameras, speakers), you may need to run their setup process again. Keep the new password in your password manager — not on a sticky note attached to the router.',
            },
            {
                heading: 'Common WiFi password mistakes to avoid',
                body: 'The most common WiFi password mistake is using personally identifiable information: your street address, apartment number, phone number, or family name followed by a year. Wardrivers — people who scan for WiFi networks from their car — specifically target networks with SSIDs like "SmithFamily" and try predictable passwords first. The second mistake is using the default password printed on the router. While these look random, manufacturers often generate them from limited character sets or patterns that have been reverse-engineered. The third mistake is sharing your main WiFi password with guests instead of setting up a guest network. Most modern routers support a separate guest network with its own password and isolated access — guests get internet but cannot reach your local devices, printers, or file shares.',
            },
            {
                heading: 'WiFi password security by the numbers',
                body: 'The strength of a WiFi password depends entirely on its length and randomness. An 8-character password using only lowercase letters has roughly 26^8 (about 209 billion) possible combinations — a modern GPU can test these in under an hour against a captured WPA2 handshake. Increase to 12 characters with mixed types and the combinations jump to 95^12 (about 5.4 × 10^23), requiring thousands of years to exhaust. At 20 characters with all types, you reach approximately 131 bits of entropy — a number so large that brute force is not a viable attack vector with any known or foreseeable technology. The key takeaway: for WiFi passwords, length matters more than complexity. A 20-character password using only letters and numbers is stronger than a 10-character password using every symbol on the keyboard.',
            },
            {
                heading: 'Setting up a guest WiFi network',
                body: 'A guest network is a separate WiFi access point that shares your internet connection but isolates guests from your primary network. Visitors can browse the web and check email without accessing your computers, printers, NAS drives, or smart home devices. Most routers manufactured after 2015 support guest networks — check your router admin panel under "Guest Network" or "Guest Access." Set a different password for the guest network and change it periodically, especially after hosting events. Some routers allow you to set bandwidth limits on the guest network to prevent guests from consuming all your bandwidth. For businesses, a guest network is essential — it satisfies the common requirement of providing customer WiFi while keeping business systems on an isolated network segment.',
            },
        ],
    },
    {
        slug:           'for-testing',
        seoTitle:       'Password Generator for Testing — Realistic Test Passwords | ToolKit',
        seoH1:          'Password Generator for Testing & Development',
        seoDescription: 'Generate realistic test passwords for development and QA. Configurable length and character sets. Browser-based, no data stored. Free, no signup.',
        intro:          'When building or testing authentication systems, the passwords you use in your test data matter more than most developers realize. Using "password", "test123", or "admin" in test accounts creates two problems: it trains muscle memory for weak passwords, and it risks those credentials leaking into production via database seeds or exported fixtures. A realistic test password — 12-16 characters with mixed types — also validates that your input fields, password strength meters, and hashing functions handle real-world values correctly. Truncation bugs, encoding issues with special characters, and bcrypt length limits (72 bytes) are all easier to catch with realistic passwords. This generator lets you configure exactly the character set and length you need for your test scenarios, from simple alphanumeric passwords to full-complexity strings that stress-test your validation logic.',
        faq: [
            { q: 'What password length should I use for test data?', a: 'Match what real users will create — 12-20 characters covers the realistic range. Also test edge cases: the minimum allowed length (usually 8), the maximum (often 64 or 128), and lengths that would exceed bcrypt\'s 72-byte limit.' },
            { q: 'Should test passwords include special characters?', a: 'Yes — special characters expose encoding bugs, escaping issues in SQL/HTML, and validation logic errors. Test with characters like !@#$%^&* and also with edge cases like quotes and backslashes.' },
            { q: 'Can I use the same test password across environments?', a: 'Use different passwords for development, staging, and production test accounts. Never seed a production database with the same credentials used in development.' },
            { q: 'What is bcrypt\'s 72-byte password limit?', a: 'bcrypt truncates input at 72 bytes. This means passwords longer than ~72 ASCII characters are silently treated as identical after that point. If your app uses bcrypt, test this boundary explicitly.' },
            { q: 'How do I generate bulk test passwords?', a: 'Click the generator multiple times, or use the copy button for each. For programmatic bulk generation, use crypto.randomUUID() for simple tokens or the Web Crypto API\'s getRandomValues() for full password generation in Node.js or the browser.' },
            { q: 'What characters break authentication systems most often?', a: 'Single quotes (\'), double quotes ("), backslashes (\\), angle brackets (<>), null bytes (\\0), and the ampersand (&). These characters commonly trigger SQL injection filters, HTML escaping, and command injection detection. Test with all of them.' },
            { q: 'Should I use the same password format for all test users?', a: 'No. Use varied lengths, character sets, and complexity levels to simulate real user behavior. Include edge cases like minimum length, maximum length, unicode characters, and passwords with leading/trailing spaces.' },
            { q: 'How do I test password strength meters?', a: 'Generate passwords at known entropy levels: 8 chars lowercase (~37 bits, should show "weak"), 12 chars mixed (~79 bits, "fair" to "strong"), 20 chars all types (~131 bits, "very strong"). Verify the meter responds correctly to each.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'Why "test123" is dangerous in your codebase',
                body: 'Using weak passwords like "test123", "password", or "admin" in development creates a chain of risks that extends far beyond the test environment. Database seed files containing these credentials are routinely committed to version control, where they persist in git history even after deletion. When developers copy production databases to staging for debugging, those weak test passwords may end up protecting real user data. CI/CD pipelines that deploy database seeds to staging environments create additional exposure points. The most insidious risk is muscle memory — developers who type "test123" hundreds of times during development unconsciously reach for similar patterns when creating their own accounts. Using realistic, randomly generated test passwords costs nothing extra and eliminates all of these risks.',
            },
            {
                heading: 'Testing password hashing edge cases',
                body: 'Different hashing algorithms handle passwords differently, and your test data should expose these differences. bcrypt truncates all input at 72 bytes — a 100-character password is identical to its first 72 characters after hashing. If your application uses bcrypt and does not pre-hash long inputs, two users with passwords that share the same first 72 bytes would authenticate as each other. Argon2 has a maximum input length of 4,294,967,295 bytes but its memory-hard computation becomes significant with very long inputs. scrypt has similar considerations. PBKDF2 has no practical input length limit. Your test suite should include passwords at the boundary lengths for your chosen algorithm, passwords with multibyte UTF-8 characters (which consume more than 1 byte per visible character), and identical passwords differing only after the truncation point.',
            },
            {
                heading: 'Special characters that break authentication flows',
                body: 'Authentication systems are particularly vulnerable to passwords containing characters that have special meaning in other contexts. A password containing a single quote (\') can trigger SQL injection if the application uses string concatenation instead of parameterized queries. Passwords with angle brackets (<>) may be stripped or escaped by HTML sanitization, causing the stored hash to differ from the login hash. The null byte (\\0) can truncate strings in C-based systems. The ampersand (&) and equals sign (=) can corrupt form-encoded POST data if not properly escaped. Backslashes (\\) interact unpredictably with escape sequences across languages. Unicode characters like zero-width joiners, combining diacriticals, and right-to-left marks create normalization issues — the same visible password may produce different byte sequences. Test all of these systematically.',
            },
            {
                heading: 'Password testing in CI/CD pipelines',
                body: 'Automated testing pipelines should include password-related test cases that run on every build. At minimum, test that your registration endpoint accepts and correctly stores passwords with all printable ASCII characters, that your login endpoint correctly verifies those same passwords after hashing, and that password change flows invalidate old sessions. Include timing-based tests to ensure your comparison function is constant-time (preventing timing attacks). Test that password reset tokens expire correctly and cannot be reused. Verify that your password strength requirements are enforced server-side, not just in the UI. Store test passwords in environment variables or test fixtures, never hardcoded in test files that might be logged by the CI system. Use a fresh database state for each test run to prevent password tests from interfering with each other.',
            },
            {
                heading: 'Generating realistic test data at scale',
                body: 'When you need hundreds or thousands of test accounts with realistic passwords, manual generation is impractical. The approach depends on your environment. For JavaScript/Node.js, use the Web Crypto API: `Array.from(crypto.getRandomValues(new Uint8Array(24))).map(b => String.fromCharCode(33 + (b % 94))).join(\'\')` generates a 24-character password from the full printable ASCII range. For Python, `secrets.token_urlsafe(24)` generates URL-safe random strings. For database seeds, generate passwords once, hash them with your production algorithm, and store both the plain text (in a secure test-only location) and the hash (in the seed file). Never log plain-text passwords in CI output — mask them in your test framework. Consider using a factory pattern (like Factory Bot or Faker) that generates a unique random password for each test user automatically.',
            },
        ],
    },
    {
        slug:           'strong-20-characters',
        seoTitle:       'Strong 20 Character Password Generator — High-Security Passwords | ToolKit',
        seoH1:          '20 Character Password Generator',
        seoDescription: 'Generate strong 20-character passwords instantly. 20 characters with mixed types gives ~131 bits of entropy — effectively uncrackable. Free, browser-based, no signup.',
        intro:          'A 20-character random password with uppercase letters, lowercase letters, numbers, and symbols provides approximately 131 bits of entropy. To put that in perspective: even if every computer on Earth attempted a trillion guesses per second, cracking it would take longer than the current age of the universe. The NIST Digital Identity Guidelines recommend at least 15 characters for general accounts — 20 characters gives you a significant safety margin above that threshold. Twenty characters is also the sweet spot between security and usability: long enough to be essentially uncrackable, short enough to copy-paste or type without excessive effort. This generator defaults to exactly 20 characters with all four character sets enabled, producing the highest-entropy output this length allows.',
        faq: [
            { q: 'How secure is a 20-character password?', a: 'A 20-character password using all character types has approximately 131 bits of entropy. At 10 billion guesses per second (a high-end GPU attack), cracking it would take around 10²⁰ years — effectively impossible with any foreseeable technology.' },
            { q: 'Is 20 characters enough for all accounts?', a: 'Yes — 20 characters exceeds the NIST recommendation of 15 characters and is sufficient for any current use case including banking, email, and cloud storage. For extremely sensitive accounts, you can go up to 32 or 64 characters.' },
            { q: 'Do all websites accept 20-character passwords?', a: 'Most modern websites accept passwords up to 64 characters (NIST recommendation for maximum length). Some older systems have lower limits — typically 32 or 20 characters. If a site rejects your password, try reducing to 16 characters first.' },
            { q: 'What is the entropy of a 20-character password?', a: 'With 95 printable ASCII characters available (uppercase, lowercase, digits, symbols), each character contributes log₂(95) ≈ 6.57 bits of entropy. 20 characters × 6.57 = ~131 bits total.' },
            { q: 'Should I use 20 characters or a passphrase?', a: 'A 20-character random password is stronger per character but impossible to memorize. Use it for any password stored in a manager. Use a passphrase only for the few passwords you must type manually — like your password manager master password.' },
            { q: 'Is a 20-character password safe from quantum computers?', a: 'Yes. Grover\'s algorithm — the best known quantum attack against symmetric key search — halves the effective bit strength. A 131-bit password would still have ~65 bits of effective quantum security, which remains computationally infeasible to brute-force.' },
            { q: 'How does 20 characters compare to AES-128 encryption?', a: 'AES-128 uses a 128-bit key. A 20-character password with all types provides ~131 bits of entropy — slightly stronger than AES-128. Both are considered secure for the foreseeable future by the global cryptography community.' },
            { q: 'Can I use a 20-character password for my password manager master password?', a: 'You can, but since you need to type it from memory, a 5-6 word passphrase may be more practical. If you can reliably memorize a 20-character random string, it provides excellent security for a master password.' },
        ],
        defaults: { length: 20, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'Understanding 131 bits of entropy',
                body: 'When we say a 20-character password with all character types has approximately 131 bits of entropy, we mean there are 2^131 possible passwords — roughly 2.7 × 10^39 combinations. To appreciate this scale, consider that the estimated number of atoms in the observable universe is about 10^80. If every atom in the solar system were a supercomputer performing a trillion password guesses per second, testing all combinations would still take longer than the current age of the universe. This is not a theoretical exercise — it means that brute-force attacks against a properly generated 20-character random password are not merely difficult but physically impossible with any computing technology that obeys the laws of thermodynamics.',
            },
            {
                heading: 'Why 20 characters hits the sweet spot',
                body: 'Password length involves a trade-off between security and usability. Eight characters is demonstrably too short — modern GPUs crack 8-character passwords in hours. Twelve characters is adequate but provides no margin for future advances in computing. Sixteen characters is strong but sometimes truncated by older systems without warning. Twenty characters provides 131 bits of entropy — well above the 128-bit threshold that the cryptography community considers secure for the foreseeable future, including against quantum computing attacks using Grover algorithm (which would halve the effective entropy to approximately 65 bits, still requiring centuries to brute-force). At the same time, 20 characters is short enough to copy-paste without difficulty and fits comfortably in any password field.',
            },
            {
                heading: 'NIST guidelines and password length recommendations',
                body: 'The National Institute of Standards and Technology (NIST) publishes the most widely referenced password guidelines through Special Publication 800-63B. The current revision recommends that systems accept passwords of at least 64 characters and require a minimum of 8 characters. However, NIST explicitly notes that longer passwords are exponentially more secure and that users should be encouraged to use passwords well above the minimum. The European Union Agency for Cybersecurity (ENISA) recommends at least 14 characters for personal accounts. Microsoft recommends at least 12 characters for consumer accounts and 14 or more for organizational accounts. A 20-character random password exceeds every major guideline by a significant margin, future-proofing your security against evolving recommendations.',
            },
            {
                heading: 'When to use more than 20 characters',
                body: 'Twenty characters is sufficient for virtually every personal and business account, but there are specific use cases where longer passwords provide meaningful additional value. Encryption key passphrases (full-disk encryption, file encryption) benefit from 32 or more characters because they protect data at rest that may be attacked offline for years. API keys and service account passwords should use 32-64 characters because they are never typed manually and the additional length costs nothing in usability. Database connection passwords should be at least 32 characters because a database breach exposes every record in the system. Root and administrator accounts for infrastructure should use the maximum length the system accepts. For everything else — email, social media, banking, shopping, streaming — 20 characters with all types is more than sufficient.',
            },
            {
                heading: 'Password length vs complexity: what matters more',
                body: 'A common misconception is that adding symbols makes a short password strong. In reality, length contributes far more to password security than character set complexity. A 20-character password using only lowercase letters (a-z) has approximately 94 bits of entropy — stronger than a 12-character password using every character type (~79 bits). Each additional character multiplies the total combinations by the size of the character set, while adding a new character type only increases the per-character entropy by a fraction. The ideal approach is to maximize both: use all character types AND maximize length. But if forced to choose, a longer alphanumeric password beats a shorter complex one every time. This is why NIST now emphasizes password length over complexity requirements in their latest guidelines.',
            },
        ],
    },
    {
        slug:           'no-symbols',
        seoTitle:       'Password Generator Without Symbols — Letters & Numbers Only | ToolKit',
        seoH1:          'Password Generator Without Special Characters',
        seoDescription: 'Generate strong passwords without symbols — letters and numbers only. Ideal for systems that reject special characters. Free, browser-based, no signup.',
        intro:          'Some systems still restrict passwords to letters and numbers only — older enterprise software, legacy banking portals, certain IoT device interfaces, and some government systems reject special characters entirely. While symbol-free passwords have lower entropy per character, you can compensate by increasing length. A 20-character alphanumeric password using uppercase and lowercase letters plus digits has approximately 119 bits of entropy — still effectively uncrackable. This generator defaults to 20 characters with uppercase, lowercase, and numbers enabled, and symbols disabled. If the system requires only letters (no numbers either), increase the length further to at least 24 characters to maintain adequate entropy.',
        faq: [
            { q: 'Why do some sites not allow special characters in passwords?', a: 'Usually legacy technical reasons: old databases with character encoding issues, systems that insert passwords into SQL queries without proper parameterization, or input validation written before modern security standards. NIST explicitly recommends that sites accept all printable ASCII characters.' },
            { q: 'How long should a password be without symbols?', a: 'Without symbols, use at least 18-20 characters to maintain strong entropy. With only letters and numbers (62 possible characters), each character contributes about 5.95 bits of entropy. 20 characters gives ~119 bits — still very strong.' },
            { q: 'Is a password without symbols still secure?', a: 'Yes, if it is long enough and truly random. The key word is random — "HelloWorld123" has no symbols but is extremely weak because it follows a predictable pattern. A randomly generated 20-character alphanumeric string is very strong.' },
            { q: 'Can I use only lowercase letters for a password?', a: 'Only if forced to and only with extreme length (30+ characters). Lowercase-only passwords have just 26 possible characters per position (~4.7 bits each), requiring 17+ characters to reach 80 bits of entropy.' },
            { q: 'What if the site also rejects certain letters?', a: 'Some systems reject letters that look like numbers (O, 0, I, l) to avoid confusion. If needed, generate a password and manually replace any ambiguous characters — or increase length to compensate for the reduced character set.' },
            { q: 'Which systems commonly reject special characters?', a: 'Older airline booking systems, some government portals, legacy banking platforms, mainframe-based enterprise software, certain IoT device interfaces, and WiFi captive portals. Most modern systems accept all printable ASCII characters as recommended by NIST.' },
            { q: 'How do I know if a system silently strips symbols?', a: 'After setting a password with symbols, immediately log out and log back in. If login fails, the system may be stripping or encoding symbols. Try again with an alphanumeric password. Always test your password works before closing the session.' },
            { q: 'Is an alphanumeric password safe for banking?', a: 'Yes, if long enough. A 20-character alphanumeric password (~119 bits) is stronger than a 16-character password with symbols (~105 bits). Length compensates fully for the absence of symbols. Combine with 2FA for maximum security.' },
        ],
        defaults: { length: 20, uppercase: true, lowercase: true, numbers: true, symbols: false },
        contentSections: [
            {
                heading: 'Why some systems reject special characters',
                body: 'The rejection of special characters in passwords is almost always a legacy technical issue, not a deliberate security choice. The most common causes are: databases that store passwords in columns with restricted character sets (early MySQL installations defaulted to latin1 encoding which handles some symbols unpredictably); applications that concatenate passwords into SQL queries without parameterization, making characters like single quotes a SQL injection vector; web forms that pass passwords through URL encoding where &, =, and + have special meaning; XML-based systems where <, >, and & break parsing; mainframe systems (IBM AS/400, z/OS) that only support EBCDIC character encoding which maps differently than ASCII. NIST SP 800-63B explicitly states that systems should accept all printable ASCII characters plus spaces in passwords, but many legacy systems predate this guideline by decades.',
            },
            {
                heading: 'Compensating for reduced character sets',
                body: 'When you cannot use the full 95-character printable ASCII set, you lose entropy per character. The full set provides ~6.57 bits per character. Removing symbols leaves 62 characters (uppercase + lowercase + digits) at ~5.95 bits each — a reduction of about 0.62 bits per character. Over a 16-character password, that is roughly 10 bits of entropy lost. The solution is simple: add 2 characters to your password length. A 16-character password with all types (~105 bits) is closely matched by an 18-character alphanumeric password (~107 bits). For maximum security without symbols, use 20+ characters. This table summarizes: 12 chars without symbols ≈ 11 chars with symbols; 16 chars without symbols ≈ 14 chars with symbols; 20 chars without symbols ≈ 18 chars with symbols. The difference is always 1-2 characters — a trivial cost when using a password manager.',
            },
            {
                heading: 'Symbol-free passwords in configuration files',
                body: 'One of the most practical reasons to use symbol-free passwords is for credentials stored in configuration files, connection strings, and environment variables. Special characters cause parsing issues across many configuration formats. In .env files, the dollar sign ($) triggers variable expansion; the hash (#) starts a comment. In YAML, the colon (:) separates keys from values. In JSON, quotes and backslashes require escaping. In shell scripts, nearly every symbol has special meaning. In JDBC connection URLs, the at sign (@), colon (:), and forward slash (/) are delimiter characters. Using alphanumeric passwords with sufficient length eliminates all of these issues without any security compromise. For infrastructure credentials (databases, APIs, services), a 32-character alphanumeric password (~190 bits of entropy) is more than sufficient and works reliably in every configuration format.',
            },
            {
                heading: 'When to use symbols despite compatibility concerns',
                body: 'For accounts where you control the input method and the password goes directly into a login form (not a config file), symbols are worth including if the system accepts them. Email accounts, social media, banking (when supported), and cloud services all benefit from the additional entropy per character. The rule of thumb: if you type or paste the password into a web form or app login screen, use all character types. If the password will be stored in a config file, environment variable, connection string, or script, use alphanumeric only. For passwords that must be communicated verbally (temporary access codes, helpdesk resets), avoid symbols entirely — they are error-prone over the phone. In all cases, length matters more than character set. A 20-character alphanumeric password is stronger than a 14-character password with every symbol on the keyboard.',
            },
            {
                heading: 'Testing if a system handles symbols correctly',
                body: 'Before committing to a complex password on a new system, test its symbol handling. Create the account with a password containing common problematic characters: single quote (\'), double quote ("), backslash (\\), ampersand (&), less-than (<), percent (%), and space. Immediately log out and log back in. If login fails, the system is mishandling at least one of these characters — either stripping them during registration, encoding them differently during login, or truncating the password at a special character. Some systems exhibit partial failures: they accept the password but break during password reset or when the password is used in a different flow (like API authentication vs web login). For critical accounts, always verify that your chosen password works across all authentication methods the system supports before considering it set.',
            },
        ],
    },

    // ════════════════════════════════════════════════════════
    // By length / strength
    // ════════════════════════════════════════════════════════

    {
        slug:           '8-characters',
        seoTitle:       '8 Character Password Generator — Minimum Length Passwords | ToolKit',
        seoH1:          '8 Character Password Generator',
        seoDescription: 'Generate random 8-character passwords instantly. Meet minimum length requirements for most websites. All character types enabled. Free, browser-based, no signup.',
        intro:          'Eight characters is the minimum password length accepted by most websites and services today. While security experts recommend longer passwords, there are situations where 8 characters is all a system allows — older enterprise portals, legacy banking systems, and some embedded device interfaces enforce this exact limit. An 8-character password using all four character types (uppercase, lowercase, digits, symbols) provides approximately 52 bits of entropy. That is not ideal for high-security accounts, but it is far stronger than common 8-character passwords like "Password1!" which follow predictable patterns. If you are forced to use 8 characters, make every character count by enabling all character types and generating it randomly rather than choosing it yourself. For any system that allows longer passwords, use at least 16 characters instead.',
        faq: [
            { q: 'Is an 8-character password secure enough?', a: 'For high-value accounts like banking or email, 8 characters is the bare minimum and not recommended. For low-risk accounts where the system enforces a maximum of 8 characters, a random 8-character password with all character types is acceptable. Always use longer passwords when possible.' },
            { q: 'How long would it take to crack an 8-character password?', a: 'A random 8-character password with all character types (~52 bits of entropy) could be cracked in hours to days by a determined attacker with GPU hardware. An 8-character password using only lowercase letters could be cracked in seconds.' },
            { q: 'Why do some sites limit passwords to 8 characters?', a: 'Legacy systems built decades ago sometimes store passwords in fixed-width database fields or use older hashing algorithms with length restrictions. NIST now recommends supporting at least 64 characters, but many older systems have not been updated.' },
            { q: 'How can I make an 8-character password as strong as possible?', a: 'Use all four character types (uppercase, lowercase, numbers, symbols) and generate it randomly. Never use dictionary words, names, dates, or predictable patterns like "Abcdef1!".' },
            { q: 'What accounts are acceptable with an 8-character password?', a: 'Only accounts on systems that enforce a maximum of 8 characters. Low-risk accounts like a local library card or a one-time use forum account. Never use 8 characters for email, banking, social media, or any account with payment information.' },
            { q: 'Can I improve security with an 8-character limit?', a: 'Beyond using all character types and randomness, enable two-factor authentication (2FA) wherever available. 2FA compensates for shorter passwords by requiring a second verification step that attackers cannot brute-force.' },
            { q: 'Why does my company still require exactly 8 characters?', a: 'Some legacy enterprise systems (particularly mainframe-based ones) store passwords in fixed-width fields. Active Directory historically had issues with passwords beyond certain lengths in older versions. Advocate for upgrading — modern systems should support at least 64 characters per NIST guidelines.' },
        ],
        defaults: { length: 8, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'The real-world risk of 8-character passwords',
                body: 'An 8-character password with all character types has approximately 52 bits of entropy, which translates to about 4.5 quadrillion possible combinations. That sounds large, but modern password cracking hardware changes the equation dramatically. A single high-end GPU (like the NVIDIA RTX 4090) can compute roughly 150 billion NTLM hashes per second, or about 50 billion MD5 hashes per second. Against faster hash algorithms, an 8-character password can be cracked in hours. Even against slower algorithms like bcrypt (with cost factor 12), a determined attacker with a GPU cluster could exhaust the 8-character space in weeks to months. This is why 8 characters should be treated as a temporary measure, not a permanent security solution. If the system allows it, always use longer passwords.',
            },
            {
                heading: 'Maximizing entropy in 8 characters',
                body: 'When you are locked into exactly 8 characters, every character matters. Enabling all four character types (uppercase, lowercase, digits, symbols) gives you ~6.57 bits per character for a total of ~52 bits. Dropping symbols reduces this to ~5.95 bits per character (~47 bits total). Dropping to lowercase only gives ~4.7 bits per character (~37 bits). The difference between 52 and 37 bits is enormous in practice — it represents a factor of 30,000 in cracking difficulty. This is why you should always enable every character type when length is constrained. Randomness is equally critical: "P@ssw0rd" uses all four character types but has near-zero effective entropy because it follows a predictable substitution pattern found in every password dictionary. A truly random 8-character password like "kW#9mR!2" is millions of times harder to crack than "P@ssw0rd".',
            },
            {
                heading: 'Historical context: why 8 characters became the standard',
                body: 'The 8-character minimum traces back to the original Unix crypt() function from the 1970s, which used DES (Data Encryption Standard) to hash passwords. DES processes exactly 56 bits of input — and since each ASCII character provides 7 bits, 8 characters × 7 bits = 56 bits was the maximum useful input. Longer passwords were silently truncated. This technical limitation became a de facto standard that persisted for decades. Early Windows NTLM hashing had similar constraints. When these systems were designed, 8 characters represented a reasonable security margin given the computing power available. Today, with GPU-accelerated cracking and decades of Moore\'s Law, 8 characters provides only marginal security. Yet the legacy of these early systems lives on in countless enterprise environments that never updated their password field lengths.',
            },
            {
                heading: 'Alternatives when stuck with 8-character limits',
                body: 'If you cannot change the system\'s 8-character limit, layer additional security measures. Enable two-factor authentication (2FA) — this is the single most impactful step, transforming a brute-forceable password into a multi-factor challenge. Use a unique 8-character random password per account rather than reusing one across services. Monitor the account for unauthorized access (most services offer login notifications via email). Change the password immediately if the service reports a breach. Consider whether the account needs to exist at all — if it protects low-value data and the system enforces 8 characters with no 2FA, the security posture may be inherently weak regardless of your password. For enterprise systems, escalate the limitation to your IT security team — modern standards require support for at least 64-character passwords.',
            },
            {
                heading: 'How GPU cracking changed the 8-character landscape',
                body: 'The economics of password cracking shifted dramatically with the advent of GPU-accelerated hash computation. In 2010, a single high-end GPU could test about 1 billion MD5 hashes per second. By 2025, a single consumer GPU handles 150+ billion per second, and a modest cloud rental of 8 GPUs can test over a trillion per second. This means the entire 8-character keyspace with all character types (~6.7 × 10^15 combinations) can be exhausted in roughly 1-2 hours against MD5, or 1-2 days against SHA-256. Slower algorithms like bcrypt and Argon2 increase this time dramatically — bcrypt with cost factor 12 reduces the rate to about 50,000 hashes per second per GPU, extending the time to months or years. This is why the choice of hashing algorithm matters as much as password length, and why services using fast hash algorithms must require longer passwords.',
            },
        ],
    },
    {
        slug:           '12-characters',
        seoTitle:       '12 Character Password Generator — Balanced Security Passwords | ToolKit',
        seoH1:          '12 Character Password Generator',
        seoDescription: 'Generate strong 12-character passwords instantly. 12 characters with mixed types gives ~79 bits of entropy — solid security for everyday accounts. Free, browser-based.',
        intro:          'Twelve characters is widely considered the practical minimum for a strong password in 2025. At this length with all four character types enabled, you get approximately 79 bits of entropy — enough to resist brute-force attacks from even high-end GPU clusters for decades. Many security guidelines, including those from Microsoft and Google, recommend 12 characters as the starting point for personal accounts. It strikes the right balance: short enough to type on a phone keyboard when needed, long enough to provide meaningful security. This generator defaults to 12 characters with uppercase, lowercase, numbers, and symbols all enabled. For accounts that store sensitive data — banking, primary email, cloud storage — consider stepping up to 16 or 20 characters for additional margin.',
        faq: [
            { q: 'Is 12 characters enough for a strong password?', a: 'Yes, for most personal accounts. A random 12-character password with all character types has ~79 bits of entropy. This would take centuries to crack with current GPU technology. For high-security accounts, 16-20 characters is better.' },
            { q: 'How does 12 characters compare to 8 characters?', a: 'Dramatically stronger. Each additional character multiplies the number of possible combinations by ~95 (the number of printable ASCII characters). 12 characters is roughly 81 million times harder to crack than 8 characters.' },
            { q: 'Should I use 12 or 16 characters?', a: 'If the password will be stored in a password manager (copy-paste), use 16 or 20. If you need to type it manually sometimes, 12 characters with all types is a solid choice that balances security and usability.' },
            { q: 'What accounts should use at least 12 characters?', a: 'All accounts should use at least 12 characters. Prioritize maximum length for email, banking, cloud storage, and any account that could be used to reset other passwords.' },
            { q: 'Is 12 characters safe for banking?', a: 'Yes, combined with 2FA. A random 12-character password with all types (~79 bits) would take centuries to crack with current technology. Banks also implement rate limiting and lockout after failed attempts, which further protects against brute force.' },
            { q: 'How does 12 characters hold up against quantum computing?', a: 'Grover\'s algorithm halves the effective entropy, reducing 79 bits to ~40 bits. While this is below the ideal threshold, quantum computers capable of this attack are still years away. By the time they exist, you should have already upgraded to 16-20 characters.' },
            { q: 'Why do Google and Microsoft recommend 12 characters?', a: 'Both companies analyzed billions of authentication attempts and found that 12 characters with mixed types provides a practical balance between security and user compliance. Shorter passwords lead to higher breach rates; longer ones lead to more password resets and support tickets.' },
        ],
        defaults: { length: 12, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'Why 12 characters is the modern minimum',
                body: 'The shift from 8 to 12 characters as the recommended minimum reflects advances in computing power over the past two decades. In 2005, an 8-character password was considered adequate — cracking it required weeks of dedicated computation. By 2025, the same password falls in hours. Twelve characters extends the time horizon by a factor of roughly 81 million (95^4), pushing brute-force attacks from hours to centuries with current hardware. This margin matters because passwords set today may protect accounts for years before being changed. The security community converged on 12 as the minimum through empirical analysis: it is long enough to resist GPU-accelerated attacks for the foreseeable future, short enough that most users can type it without excessive frustration, and compatible with virtually every system in use today.',
            },
            {
                heading: 'Cracking time estimates for 12-character passwords',
                body: 'The time to crack a 12-character password depends heavily on the hashing algorithm protecting it. Against MD5 (a fast, obsolete hash), a single high-end GPU testing 150 billion hashes per second would need approximately 1.2 million years to exhaust the full 12-character keyspace with all types. Against SHA-256, the same GPU manages about 10 billion per second — roughly 18 million years. Against bcrypt with cost factor 12, the rate drops to about 50,000 per second, requiring over 3.6 × 10^12 years — well beyond the age of the universe. Even with a massive GPU cluster of 1,000 cards, bcrypt-protected 12-character passwords remain infeasible to crack by brute force. These estimates assume truly random generation — dictionary words and common patterns are found much faster because attackers test those first.',
            },
            {
                heading: 'The 12-character sweet spot for mobile users',
                body: 'Mobile devices present a unique challenge for password length. Typing on a phone keyboard is slower and more error-prone than typing on a full keyboard, especially with mixed character types. Symbols require switching keyboard layouts; uppercase requires pressing shift for each character. Studies show that typing errors on mobile increase significantly beyond 12-14 characters. At 12 characters, most users can enter the password in under 10 seconds on a phone with acceptable accuracy. Beyond 16 characters, the error rate and frustration increase substantially. This is why 12 characters represents the practical sweet spot for passwords that must occasionally be typed on mobile devices — secure enough to withstand any realistic attack, short enough to enter reliably on a touchscreen keyboard.',
            },
            {
                heading: 'Upgrading from 8 to 12 characters across your accounts',
                body: 'If you currently use 8-character passwords, upgrading to 12 characters is one of the highest-impact security improvements you can make — each additional character multiplies the cracking difficulty by approximately 95. Start with your highest-value accounts: email (the master key to all other accounts), banking, cloud storage, and your password manager itself. Use a password manager to generate and store new 12+ character passwords for each account. Update one account per day rather than all at once — this prevents confusion and ensures you can identify any login issues. After changing each password, log out and verify that the new password works before moving on. Keep a temporary record (in your password manager) of both old and new passwords during the transition period. Once all critical accounts are updated, work through remaining accounts at your own pace.',
            },
            {
                heading: 'When 12 characters is not enough',
                body: 'While 12 characters is adequate for most personal accounts, there are scenarios where more is warranted. High-value targets — accounts of public figures, executives, journalists, activists — face more sophisticated and persistent attacks that justify 16-20 characters. Infrastructure credentials (database passwords, API keys, SSH passphrases) should use 20-32 characters because they are never typed manually and protect critical systems. Passwords that must resist offline attacks without rate limiting (like encrypted file passphrases) need at least 16 characters because an attacker with the encrypted file can guess indefinitely at hardware speed. Master passwords for password managers should be 16+ characters or a 5-6 word passphrase because they protect every other credential you own. In all these cases, the extra characters cost nothing in usability (especially with a password manager) and provide meaningful additional security.',
            },
        ],
    },
    {
        slug:           '32-characters',
        seoTitle:       '32 Character Password Generator — Maximum Security Passwords | ToolKit',
        seoH1:          '32 Character Password Generator',
        seoDescription: 'Generate ultra-strong 32-character passwords with ~210 bits of entropy. Ideal for API keys, master passwords, and encryption keys. Free, browser-based, no signup.',
        intro:          'A 32-character random password with all character types provides approximately 210 bits of entropy — far beyond what any brute-force attack could crack, even with theoretical future quantum computers using Grover\'s algorithm (which would halve the effective entropy to ~105 bits, still uncrackable). This length is ideal for API keys, service account passwords, database connection strings, encryption key passphrases, and any credential that will never be typed manually. At 32 characters, the password is always stored in a password manager or configuration file, so usability is not a concern. Many security-conscious organizations mandate 32-character passwords for infrastructure credentials. This generator defaults to 32 characters with all types enabled, producing maximum-entropy output suitable for the most sensitive applications.',
        faq: [
            { q: 'When should I use a 32-character password?', a: 'Use 32 characters for API keys, database passwords, service accounts, encryption passphrases, and any credential stored in a password manager or config file. There is no usability penalty since you never type it manually.' },
            { q: 'Is 32 characters overkill for a regular account?', a: 'Not really — if you use a password manager, there is no downside to 32 characters. However, 16-20 characters is already effectively uncrackable for regular accounts. The extra length matters more for infrastructure and encryption credentials.' },
            { q: 'Do all systems accept 32-character passwords?', a: 'Most modern systems accept up to 64-128 characters. Some legacy systems may truncate at 16 or 20 characters without warning. Test by verifying you can log in with the full password after setting it.' },
            { q: 'How does 32 characters compare to a 256-bit key?', a: 'A 32-character password with all ASCII types has ~210 bits of entropy, which is comparable to a 210-bit cryptographic key. A true 256-bit key would require ~39 random characters from the full printable ASCII set.' },
            { q: 'Is 32 characters necessary for personal accounts?', a: 'Not strictly necessary — 16-20 characters is already uncrackable for personal accounts. But if you use a password manager, there is zero usability cost to 32 characters. Some users prefer it for peace of mind and future-proofing against advances in computing.' },
            { q: 'What infrastructure credentials need 32 characters?', a: 'Database root passwords, AWS/GCP/Azure service account keys, Kubernetes secrets, HashiCorp Vault tokens, SSL certificate passphrases, CI/CD pipeline secrets, and any credential stored in environment variables or configuration management systems.' },
            { q: 'Can 32-character passwords cause issues?', a: 'Rarely. Most modern systems handle 32+ characters correctly. The main risk is legacy systems that silently truncate — always verify by logging in with the full password immediately after setting it. MySQL native auth limits passwords to 32 characters; use mysql_native_password plugin for longer.' },
        ],
        defaults: { length: 32, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: '32 characters in the context of encryption standards',
                body: 'The security industry measures cryptographic strength in bits. The most widely used encryption standard, AES, comes in three key sizes: 128 bits, 192 bits, and 256 bits. A 32-character random password with the full printable ASCII set (95 characters) provides approximately 210 bits of entropy — comfortably between AES-192 and AES-256 in strength. This means a 32-character password, when used as an encryption passphrase, provides security that exceeds most commercial encryption requirements. For context, AES-128 (128 bits) is approved for classified information up to SECRET level by the US government. AES-256 (256 bits) is approved for TOP SECRET. At ~210 bits, a 32-character password sits well above SECRET level — more than adequate for any commercial or personal use case.',
            },
            {
                heading: 'Use cases for 32-character passwords',
                body: 'The primary use case for 32-character passwords is infrastructure credentials — passwords that are stored in configuration files and never typed by humans. Database connection strings (PostgreSQL, MySQL, MongoDB) benefit from maximum length because a database breach exposes every record in the system. API keys and secrets for third-party services (Stripe, AWS, SendGrid) should use 32+ characters because they are high-value targets and are stored in environment variables. CI/CD pipeline secrets (GitHub Actions, GitLab CI, Jenkins) protect the entire deployment chain. SSL/TLS certificate passphrases protect server identity. Container registry credentials protect your entire application stack. In all these cases, the password is copy-pasted once during setup and never typed again, making extreme length a free security upgrade.',
            },
            {
                heading: 'Quantum computing and long-term password security',
                body: 'Quantum computing introduces a new threat model for password security through Grover\'s algorithm, which can search unsorted databases quadratically faster than classical computers. In practical terms, Grover\'s algorithm halves the effective bit strength of a password: a 128-bit password provides only 64 bits of quantum security, which is considered borderline. This is why the security community is moving toward 256-bit equivalents for long-term protection. A 32-character password at ~210 bits would have ~105 bits of quantum security — well above any foreseeable quantum attack capability. For passwords protecting data that must remain secure for decades (encrypted archives, legal documents, medical records), 32 characters provides a meaningful quantum safety margin that shorter passwords do not.',
            },
            {
                heading: 'Managing 32-character passwords in DevOps',
                body: 'In a DevOps environment, 32-character passwords are the norm for service accounts and infrastructure credentials. The key challenge is not generating them — it is managing them securely across the deployment lifecycle. Use a secrets manager (HashiCorp Vault, AWS Secrets Manager, GCP Secret Manager, or Azure Key Vault) as the single source of truth. Never store credentials in git repositories — even private ones — because git history preserves every committed value permanently. Reference secrets by key name in configuration files and inject them at runtime through environment variables. Rotate infrastructure passwords on a regular schedule (quarterly for most, monthly for high-risk) using automated rotation scripts that update both the secrets manager and the target system. Monitor for credential exposure using tools like git-secrets, truffleHog, or GitHub secret scanning. Document which services use which credentials in a separate access management system.',
            },
            {
                heading: 'Password length limits across common platforms',
                body: 'Not all systems handle 32-character passwords equally. Most modern platforms accept them without issue: AWS IAM supports up to 128 characters, GitHub up to 72, Google accounts up to 100, Microsoft accounts up to 256, PostgreSQL has no practical limit, and MongoDB accepts up to 4096 bytes. However, some systems impose shorter limits: MySQL native authentication caps at 32 characters (use caching_sha2_password plugin for longer), some older LDAP implementations limit to 128 bytes, and Oracle Database traditionally limited to 30 characters (increased in recent versions). WiFi WPA2 caps at 63 characters. Always verify by logging in with the full password immediately after setting it — silent truncation is the most dangerous failure mode because it creates a false sense of security while the effective password is actually shorter than intended.',
            },
        ],
    },
    {
        slug:           '64-characters',
        seoTitle:       '64 Character Password Generator — Ultra-Secure Long Passwords | ToolKit',
        seoH1:          '64 Character Password Generator',
        seoDescription: 'Generate ultra-secure 64-character passwords with ~420 bits of entropy. Maximum length for encryption keys and infrastructure credentials. Free, browser-based.',
        intro:          'Sixty-four characters is the maximum password length recommended by NIST SP 800-63B, and it represents the upper practical limit for most authentication systems. A 64-character random password with all character types delivers approximately 420 bits of entropy — a number so large that expressing the time to crack it requires scientific notation with triple-digit exponents. This length is used for the most sensitive infrastructure: root database passwords, HSM (Hardware Security Module) passphrases, master encryption keys, and air-gapped system credentials. At this length, even theoretical attacks using quantum computing with Grover\'s algorithm would still face ~210 bits of effective entropy. This generator produces 64-character strings using the full printable ASCII character set. Always store these in a secure vault — they are never meant to be memorized or typed.',
        faq: [
            { q: 'Why would I need a 64-character password?', a: 'For maximum-security credentials: root database passwords, encryption key passphrases, HSM access codes, and infrastructure credentials that must withstand any foreseeable attack, including quantum computing.' },
            { q: 'Can any system handle a 64-character password?', a: 'NIST recommends systems accept at least 64 characters. Most modern platforms do. Some older systems may silently truncate — always verify by logging in with the full password immediately after setting it.' },
            { q: 'Is 64 characters quantum-resistant?', a: 'Yes. Grover\'s algorithm halves the effective bit strength, reducing ~420 bits to ~210 bits. Even 210 bits is far beyond any foreseeable computational capability.' },
            { q: 'Should I use 64 characters for my email password?', a: 'You can, but 20-32 characters is more than sufficient for personal accounts. 64 characters is primarily for infrastructure and encryption use cases where the password is always copy-pasted from a vault.' },
        ],
        defaults: { length: 64, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },

    // ════════════════════════════════════════════════════════
    // By character type
    // ════════════════════════════════════════════════════════

    {
        slug:           'numbers-only',
        seoTitle:       'Number-Only Password Generator — Numeric PINs & Passcodes | ToolKit',
        seoH1:          'Number-Only Password Generator',
        seoDescription: 'Generate random numeric passwords and PINs. Digits only (0-9). Ideal for phone PINs, lock screens, and systems requiring numeric-only codes. Free, browser-based.',
        intro:          'Some systems require numeric-only passwords: phone lock screens, SIM PINs, safe combinations, building access codes, and legacy banking systems that only accept digits. A purely numeric password has significantly lower entropy per character than a mixed-type password — each digit provides only ~3.32 bits (log₂(10)) compared to ~6.57 bits for the full printable ASCII set. To compensate, increase the length: a 10-digit random PIN has about 33 bits of entropy (sufficient for a phone lock screen with rate limiting), while a 20-digit numeric password reaches ~66 bits (adequate for most systems). This generator outputs random digits with configurable length. For any system that accepts mixed characters, always prefer a shorter mixed-type password over a longer numeric-only one.',
        faq: [
            { q: 'How long should a numeric-only password be?', a: 'It depends on the use case. Phone PINs: 6-8 digits (with rate limiting). Banking PINs: 4-6 digits (card required as second factor). Numeric passwords for websites: at least 16-20 digits to compensate for the small character set.' },
            { q: 'Is a numeric password secure?', a: 'Only with sufficient length and rate limiting. A 4-digit PIN has only 10,000 combinations — it relies on the system locking after failed attempts. A 20-digit random number has ~66 bits of entropy, which is decent but weaker than a 12-character mixed-type password.' },
            { q: 'Why do some systems only accept numbers?', a: 'Physical keypads (ATMs, door locks, safes) often have only digit buttons. Phone lock screens prioritize fast input with a numeric keypad. Some legacy systems were designed before modern password standards.' },
            { q: 'What is the difference between a PIN and a numeric password?', a: 'A PIN (Personal Identification Number) is typically 4-8 digits and used with a physical token (card, phone). A numeric password can be any length and is used alone for authentication. PINs rely on rate limiting for security; numeric passwords rely on length.' },
            { q: 'Should I avoid sequential digits like 123456?', a: 'Absolutely. Sequential patterns, repeated digits (111111), and common combinations (000000, 654321) are the first entries in any brute-force dictionary. Always use a randomly generated numeric string to ensure unpredictability.' },
            { q: 'Can I use a numeric password for online accounts?', a: 'Only if the system requires it. A 20-digit random number (~66 bits) is acceptable but weaker than a 12-character mixed password (~79 bits). If the system accepts letters and symbols, always use a mixed-character password instead.' },
            { q: 'How do I generate a truly random number?', a: 'This tool uses the Web Crypto API (window.crypto.getRandomValues), which provides cryptographically secure random numbers. Do not use Math.random() in JavaScript — it is not cryptographically secure and produces predictable sequences.' },
        ],
        defaults: { length: 16, uppercase: false, lowercase: false, numbers: true, symbols: false },
        contentSections: [
            {
                heading: 'Entropy comparison: numeric vs mixed passwords',
                body: 'The security of a password is measured in bits of entropy, which depends on the size of the character set and the password length. A single digit (0-9) provides log₂(10) ≈ 3.32 bits of entropy. A single character from the full printable ASCII set (95 characters including letters, digits, and symbols) provides log₂(95) ≈ 6.57 bits. This means a numeric password needs to be roughly twice as long as a mixed-character password to achieve the same security level. For example, a 12-character mixed password has about 79 bits of entropy, while reaching the same level with digits alone requires approximately 24 digits. A 16-digit numeric password provides about 53 bits of entropy — equivalent to a mixed password of roughly 8 characters. When you are forced to use numeric-only input, always compensate by increasing the length significantly.',
            },
            {
                heading: 'Where numeric-only passwords are required',
                body: 'Several common systems restrict input to digits only. ATM and debit card PINs are the most universal example — physical keypads with only 0-9 buttons make mixed characters impossible. Phone lock screens default to numeric PINs because the digit keypad allows faster unlocking than a full keyboard. Safe and vault combinations use mechanical dials or electronic keypads with numeric input. Building access systems and garage door openers typically accept 4-8 digit codes. SIM card PINs (used when the phone restarts) are limited to 4-8 digits. Some older voicemail systems require numeric passwords entered via telephone keypad. Parental control PINs on streaming services, gaming consoles, and smart TVs also use numeric-only input. In all these cases, the physical input mechanism — not a security policy — dictates the numeric constraint.',
            },
            {
                heading: 'Rate limiting: why short PINs can still be secure',
                body: 'A 4-digit PIN has only 10,000 possible combinations — a computer could test all of them in a fraction of a second. Yet ATM PINs have protected bank accounts for over 50 years. The reason is rate limiting: the ATM locks the card after 3 failed attempts, the bank flags the account after suspicious activity, and physical access to the card is required. This reduces the effective attack from 10,000 attempts to just 3, making even a 4-digit PIN adequate. The same principle applies to phone lock screens — iOS introduces increasing delays after failed attempts and can wipe the device after 10 failures. However, rate limiting only works when the system enforces it. If an attacker obtains a hashed numeric password from a database breach, they can test all combinations offline without rate limiting. This is why numeric passwords for online accounts should be at least 16-20 digits — offline attacks face no attempt limits.',
            },
            {
                heading: 'Avoiding predictable number patterns',
                body: 'Research analyzing millions of leaked PINs consistently reveals the same patterns. The most common 4-digit PINs are 1234, 1111, 0000, 1212, 7777, 1004, 2000, 4444, 2222, and 6969 — together these account for over 20% of all PINs in use. Birth years (1985, 1990, 1992) and dates in MMDD format (0315 for March 15) are also extremely common. Sequential patterns (1234, 5678, 2468), repeated digits (3333, 8888), and phone keypad patterns (2580 — a straight line down the middle) are among the first combinations attackers try. The only reliable defense against pattern-based attacks is true randomness. A randomly generated PIN from this tool has an equal probability of being any combination, including "unlikely" looking ones like 7301 or 0849 that humans would rarely choose on their own.',
            },
            {
                heading: 'Numeric passwords in enterprise and IoT systems',
                body: 'Beyond personal devices, numeric passwords are common in enterprise and IoT environments. Industrial control systems (SCADA, PLCs) often use numeric access codes due to simplified operator interfaces. Medical devices in hospitals frequently require numeric PINs for quick access during emergencies. Hotel room safes universally use 4-6 digit codes. Vending machines and point-of-sale terminals use numeric service codes for maintenance access. Smart home devices — door locks, security cameras, thermostats — often default to numeric PINs during initial setup. In all these contexts, the numeric password is typically just one layer of security combined with physical access control, network segmentation, or other measures. When deploying IoT devices, always change the default numeric code to a randomly generated one and document it in a secure location.',
            },
        ],
    },
    {
        slug:           'letters-only',
        seoTitle:       'Letters-Only Password Generator — Alphabetic Passwords | ToolKit',
        seoH1:          'Letters-Only Password Generator',
        seoDescription: 'Generate random passwords using only letters (A-Z, a-z). No digits, no symbols. For systems requiring alphabetic-only input. Free, browser-based, no signup.',
        intro:          'Certain systems restrict passwords to letters only — no digits, no symbols. This is common in older mainframe environments, some educational platforms, and systems where the password must be spoken aloud (phone support verification codes, for example). With 52 possible characters (26 uppercase + 26 lowercase), each character contributes ~5.7 bits of entropy. A 16-character letters-only password provides ~91 bits of entropy — strong enough for most purposes. For maximum security within this constraint, always use both uppercase and lowercase letters and generate randomly rather than choosing words. This generator defaults to 16 characters with both cases enabled and all other character types disabled.',
        faq: [
            { q: 'How long should a letters-only password be?', a: 'At least 16 characters to reach ~91 bits of entropy. If only one case is allowed (e.g., uppercase only), increase to 20+ characters to compensate for the reduced character set (26 vs 52 characters).' },
            { q: 'Is a letters-only password weaker than a mixed one?', a: 'Per character, yes — 5.7 bits vs 6.57 bits. But a 16-character letters-only password (~91 bits) is still stronger than a 12-character mixed password (~79 bits). Length compensates for character set limitations.' },
            { q: 'Why would a system restrict to letters only?', a: 'Phone verification codes meant to be spoken aloud, legacy mainframe systems, some educational platforms, and systems where special characters cause encoding issues in the underlying database.' },
            { q: 'Should I use uppercase and lowercase?', a: 'Always, if the system allows it. Using both cases doubles the character set from 26 to 52, adding ~1 bit of entropy per character. That is a significant improvement over the same length with one case.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: false, symbols: false },
    },
    {
        slug:           'alphanumeric',
        seoTitle:       'Alphanumeric Password Generator — Letters & Numbers Only | ToolKit',
        seoH1:          'Alphanumeric Password Generator',
        seoDescription: 'Generate random alphanumeric passwords (A-Z, a-z, 0-9). No special characters. Compatible with all systems. Free, browser-based, no signup.',
        intro:          'Alphanumeric passwords — letters and numbers only, no symbols — are the most universally compatible password format. Every system, device, and platform accepts them without issues. With 62 possible characters (26 uppercase + 26 lowercase + 10 digits), each character contributes ~5.95 bits of entropy. A 16-character alphanumeric password provides ~95 bits — strong enough for virtually any use case. This format avoids the common frustrations of symbol-containing passwords: copying issues in terminals, escaping problems in shell scripts, encoding errors in URLs, and rejection by systems with restrictive character policies. If you use a password manager and never type passwords manually, symbols add marginal value. Many security professionals use alphanumeric passwords with increased length as their default choice.',
        faq: [
            { q: 'Is alphanumeric as secure as passwords with symbols?', a: 'Nearly. Each alphanumeric character gives ~5.95 bits vs ~6.57 bits with symbols. A 16-character alphanumeric password (~95 bits) is comparable to a 14-character mixed password (~92 bits). Add 2-3 characters to match the entropy of a shorter symbol-containing password.' },
            { q: 'Why choose alphanumeric over full complexity?', a: 'Universal compatibility — no system rejects alphanumeric passwords. No escaping issues in scripts, config files, or URLs. Easy to type on any keyboard layout. The minor entropy loss per character is easily offset by adding 1-2 extra characters.' },
            { q: 'What systems have trouble with special characters?', a: 'Shell scripts (characters like $ and ! have special meaning), older databases, URL parameters (& and = conflict), XML/HTML (< and > cause parsing issues), and some IoT devices with limited keyboard input.' },
            { q: 'How long should an alphanumeric password be?', a: 'At least 16 characters for personal accounts, 20+ for sensitive accounts, 32+ for infrastructure credentials. The goal is to match or exceed 80 bits of entropy for personal use and 128+ bits for infrastructure.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'hex',
        seoTitle:       'Hex Password Generator — Hexadecimal Keys & Tokens | ToolKit',
        seoH1:          'Hex Password Generator',
        seoDescription: 'Generate random hexadecimal strings (0-9, a-f). Ideal for encryption keys, tokens, and API secrets. Configurable length. Free, browser-based, no signup.',
        intro:          'Hexadecimal strings — characters 0-9 and a-f — are the standard format for encryption keys, authentication tokens, MAC addresses, and many API secrets. Each hex character represents exactly 4 bits, making it easy to calculate key strength: a 32-character hex string is a 128-bit key, 64 characters is 256 bits. This generator produces random hex strings using a cryptographically secure random number generator (Web Crypto API). Common use cases include WEP/WPA keys, AES encryption keys, HMAC secrets, session tokens, and color codes. Note that hex passwords have lower entropy per character (~4 bits) than full alphanumeric passwords (~5.95 bits), so they need to be longer to achieve the same strength. A 32-hex-character password (128 bits) is equivalent in strength to about a 22-character alphanumeric password.',
        faq: [
            { q: 'What is a hexadecimal password used for?', a: 'Encryption keys (AES-128, AES-256), authentication tokens, HMAC secrets, WEP/WPA network keys, API secrets, session identifiers, and any system that requires input in hex format.' },
            { q: 'How long should a hex password be?', a: 'It depends on the required bit strength: 32 hex characters = 128 bits (standard encryption), 48 hex characters = 192 bits, 64 hex characters = 256 bits (maximum standard encryption strength).' },
            { q: 'Is hex the same as Base16?', a: 'Yes. Hexadecimal (hex) is Base16 encoding, using digits 0-9 and letters a-f (or A-F). Each character represents 4 bits of data, making it a convenient way to represent binary data in text form.' },
            { q: 'Should I use uppercase or lowercase hex?', a: 'Both are valid and represent the same values. Lowercase (a-f) is more common in modern programming (JavaScript, Python, CSS color codes). Uppercase (A-F) is traditional in networking and hardware contexts.' },
        ],
        defaults: { length: 32, uppercase: false, lowercase: true, numbers: true, symbols: false },
    },

    // ════════════════════════════════════════════════════════
    // By platform / service
    // ════════════════════════════════════════════════════════

    {
        slug:           'for-bank',
        seoTitle:       'Bank Password Generator — Secure Banking Passwords | ToolKit',
        seoH1:          'Bank Account Password Generator',
        seoDescription: 'Generate strong passwords specifically for banking and financial accounts. Meets common bank requirements. Free, browser-based, nothing stored.',
        intro:          'Banking passwords protect your financial life — they deserve maximum attention. Most banks require 8-20 characters with at least one uppercase letter, one lowercase letter, one number, and one symbol, though many older banking platforms restrict allowed characters more than modern services. The biggest risk to bank accounts is not brute-force attacks (banks have rate limiting and account lockouts) but credential stuffing — attackers using email/password combinations leaked from other sites. This means your bank password must be unique and never reused anywhere else. This generator defaults to 16 characters with all types enabled, meeting the requirements of virtually every bank while providing far more security than the typical minimum. Always enable two-factor authentication on banking accounts as an additional layer — a strong password alone is necessary but not sufficient for financial security.',
        faq: [
            { q: 'How long should my bank password be?', a: 'At least 16 characters. Most banks accept 8-20+ characters. Use the maximum length the bank allows. A 16-character random password with all types provides ~105 bits of entropy — far beyond what any attacker could crack.' },
            { q: 'Why do banks restrict special characters?', a: 'Legacy banking software often runs on older systems (COBOL mainframes, AS/400) with limited character set support. Some banks also restrict characters that could cause SQL injection if their input handling is improperly coded.' },
            { q: 'Should I change my bank password regularly?', a: 'NIST no longer recommends routine password rotation. Change your bank password only if you suspect it has been compromised, if the bank reports a data breach, or if you have shared it with someone who no longer needs access.' },
            { q: 'Is my bank password the most important one?', a: 'Your email password is arguably more important — an attacker who controls your email can reset any password, including your bank. Prioritize both your email and bank passwords, and use unique passwords for each.' },
            { q: 'What should I do if my bank has a short password limit?', a: 'If your bank caps passwords at 12 or even 8 characters, use the maximum allowed length with all character types. Enable 2FA to compensate for the shorter password. Consider voicing your concern to the bank — customer pressure drives security upgrades.' },
            { q: 'Is mobile banking safe with a strong password?', a: 'Yes, if you also protect your phone with a strong lock screen, keep your banking app updated, and only install apps from official stores. Avoid banking on public WiFi — use your cellular connection or a trusted VPN instead.' },
            { q: 'Can a bank see my password?', a: 'No. Properly designed banking systems store only a hashed version of your password, not the password itself. The bank cannot retrieve your actual password — if you forget it, they must issue a reset, not look it up.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'Why banking passwords face unique threats',
                body: 'Banking passwords are targeted differently than other passwords. While a compromised Netflix account might cost you a monthly subscription, a compromised bank account can drain your savings in minutes. The primary attack vector is not brute force — banks implement lockout policies after 3-5 failed attempts. Instead, attackers use credential stuffing: automated tools that test email and password combinations leaked from other breaches against banking login portals. In 2024 alone, over 26 billion records were exposed in data breaches worldwide. If your bank password matches a password used on any breached service, your account is at risk regardless of how complex that password appears. This is why the most important property of a bank password is not its complexity but its uniqueness — it must exist nowhere else in the digital world.',
            },
            {
                heading: 'Two-factor authentication for financial accounts',
                body: 'A strong password is necessary but not sufficient for banking security. Two-factor authentication (2FA) adds a second verification step — something you have in addition to something you know. The strongest option is a hardware security key (YubiKey, Titan) which is immune to phishing. Next is an authenticator app (Google Authenticator, Authy, Microsoft Authenticator) which generates time-based codes on your phone. SMS-based 2FA is better than no 2FA but is vulnerable to SIM swapping attacks where an attacker convinces your phone carrier to transfer your number to their SIM card. Many banks now support push notification verification through their mobile app, which is more secure than SMS. If your bank offers any form of 2FA, enable it immediately — it transforms a single point of failure into a system that requires two independent compromises.',
            },
            {
                heading: 'Legacy banking system limitations',
                body: 'Many banks run their core systems on decades-old mainframe software — COBOL applications on IBM zSeries hardware that have been continuously maintained since the 1970s and 1980s. These systems often impose password restrictions that modern security standards would not recommend: maximum lengths of 12-16 characters, no special characters allowed, case-insensitive comparison, or limited character sets. When you encounter these restrictions, maximize what you can control. If the bank limits you to 12 alphanumeric characters, use all 12 with mixed case and numbers. If only 8 characters are allowed, enable every character type available and ensure the password is completely random rather than based on dictionary words. Even within tight constraints, a random password generated by this tool is orders of magnitude stronger than a human-chosen password of the same length.',
            },
            {
                heading: 'What to do if your bank account is compromised',
                body: 'If you suspect unauthorized access to your bank account, act within minutes — speed matters. First, log in immediately and change your password to a new randomly generated one. If you cannot log in, call your bank fraud department directly using the number on the back of your debit card, not a number found through a web search (phishing sites mimic bank support pages). Request a temporary freeze on all transactions. Review recent transactions for any you did not authorize — banks typically have a 60-day window for disputing unauthorized transactions under Regulation E in the US. After securing the account, change the password on your email account as well since the attacker may have accessed it first. Enable 2FA if not already active. Finally, check haveibeenpwned.com to determine which breach exposed your credentials and change passwords on any other accounts that shared the compromised password.',
            },
            {
                heading: 'Choosing between bank app and browser banking',
                body: 'Both your bank\'s mobile app and its website can be secure, but they carry different risk profiles. Mobile banking apps communicate through certificate-pinned connections that are harder to intercept than browser traffic. Apps also cannot be affected by browser-based attacks like phishing extensions or compromised bookmarks. However, a lost or stolen phone with a weak lock screen exposes your banking app. Browser banking works on any device but is vulnerable to phishing URLs, malicious browser extensions, and session hijacking on public WiFi. The safest approach is to use your bank\'s official mobile app on a phone protected by a strong PIN or biometric lock, keep the app updated, and never jailbreak or root your device. For browser banking, always type the bank URL directly rather than clicking links, and verify the padlock icon showing a valid HTTPS certificate.',
            },
        ],
    },
    {
        slug:           'for-email',
        seoTitle:       'Email Password Generator — Secure Your Gmail & Outlook | ToolKit',
        seoH1:          'Email Account Password Generator',
        seoDescription: 'Generate strong passwords for email accounts — Gmail, Outlook, Yahoo and more. Your email is the master key to all other accounts. Free, browser-based.',
        intro:          'Your email password is arguably the most important password you have. Email is the recovery method for nearly every other account — banking, social media, cloud storage, work tools. An attacker who gains access to your email can reset passwords across your entire digital life within minutes. Gmail, Outlook, Yahoo, and other major providers all support long passwords with full character sets. This generator defaults to 20 characters with all types enabled, providing approximately 131 bits of entropy. Since you typically log into email infrequently on new devices (most stay logged in), there is no reason to compromise on length. Always pair your email password with two-factor authentication (preferably a hardware key or authenticator app, not SMS). Never reuse your email password on any other service.',
        faq: [
            { q: 'Why is my email password the most important?', a: 'Because email is the password reset mechanism for almost every other account. An attacker with access to your email can reset your bank, social media, and cloud storage passwords. Securing email secures everything downstream.' },
            { q: 'How long should my email password be?', a: 'At least 16-20 characters. Gmail and Outlook both support very long passwords. Since you rarely type it (autofill or stay logged in), there is no reason to use fewer than 20 characters.' },
            { q: 'Should I use the same password for all email accounts?', a: 'Never. Each email account should have a unique password. If one is compromised, the others remain secure. Use a password manager to handle multiple unique passwords.' },
            { q: 'Is two-factor authentication enough without a strong password?', a: 'No. Two-factor authentication adds a layer but is not foolproof — SIM swapping can bypass SMS codes, and phishing can capture authenticator codes in real time. A strong unique password is the essential foundation.' },
        ],
        defaults: { length: 20, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },
    {
        slug:           'for-gaming',
        seoTitle:       'Gaming Password Generator — Secure Steam, Xbox & PSN Accounts | ToolKit',
        seoH1:          'Gaming Account Password Generator',
        seoDescription: 'Generate strong passwords for Steam, Xbox, PlayStation, Epic Games, and Discord. Protect your game library and in-game purchases. Free, browser-based.',
        intro:          'Gaming accounts represent real financial value — Steam libraries worth hundreds or thousands of dollars, in-game purchases, rare items, and linked payment methods make them high-value targets for attackers. Account theft is rampant in gaming: phishing through fake trade offers, credential stuffing from other breaches, and social engineering through Discord are the most common attack vectors. Steam, Xbox Live, PlayStation Network, Epic Games Store, and Battle.net all support strong passwords with mixed character types. This generator defaults to 16 characters with all types enabled. Beyond password strength, enable Steam Guard, Xbox two-step verification, or PlayStation two-step verification on every gaming platform. Never enter your password on sites reached through links in chat messages — always navigate to the platform directly.',
        faq: [
            { q: 'Why are gaming accounts targeted?', a: 'Steam libraries can be worth thousands of dollars. CS2 and TF2 items have real monetary value. Stolen accounts are sold on black markets or used to launder money through in-game transactions.' },
            { q: 'What password length should I use for Steam?', a: 'Steam accepts passwords up to 64 characters. Use at least 16 characters with all character types. Since you rarely type it (Steam remembers your login), there is no reason to use a short password.' },
            { q: 'Is Discord a gaming platform for password purposes?', a: 'Yes — Discord accounts are frequently targeted because they are linked to game servers, communities, and sometimes Nitro subscriptions. Use a unique, strong password for Discord and enable two-factor authentication.' },
            { q: 'How do gaming account breaches happen?', a: 'The most common methods are: phishing (fake login pages linked from chat), credential stuffing (reused passwords from other breaches), malware (keyloggers from pirated game downloads), and social engineering (fake Steam support messages).' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },
    {
        slug:           'for-social-media',
        seoTitle:       'Social Media Password Generator — Secure Instagram, TikTok & More | ToolKit',
        seoH1:          'Social Media Password Generator',
        seoDescription: 'Generate strong passwords for Instagram, TikTok, Facebook, Twitter/X and more. Protect your accounts from hacking. Free, browser-based, no signup.',
        intro:          'Social media accounts are among the most commonly hacked accounts on the internet. Instagram, TikTok, Facebook, Twitter/X, and LinkedIn accounts are targeted for identity theft, spam distribution, cryptocurrency scams, and impersonation. The damage goes beyond the account itself — a compromised social media profile can be used to scam your followers, damage your reputation, or access other services connected via social login ("Sign in with Google/Facebook"). Most social platforms support passwords up to 128 characters with full character sets. This generator defaults to 16 characters with all types enabled. Use a unique password for each platform — if your Instagram password leaks, your TikTok should remain secure. Enable two-factor authentication on every social media account, preferably using an authenticator app rather than SMS.',
        faq: [
            { q: 'Why are social media accounts frequently hacked?', a: 'Weak and reused passwords are the primary cause. Many users use the same simple password across Instagram, TikTok, and email. When any one service is breached, attackers try those credentials everywhere. Additionally, phishing DMs and fake login pages are extremely common on social platforms.' },
            { q: 'What password length do social media platforms support?', a: 'Most support long passwords: Instagram up to 128 characters, Facebook up to 128, Twitter/X up to 128, TikTok up to 20, LinkedIn up to 400. Use at least 16 characters on every platform.' },
            { q: 'Should I use different passwords for each social media account?', a: 'Absolutely. A unique password for each account ensures that a breach on one platform does not compromise your other accounts. Use a password manager to track them all.' },
            { q: 'Can someone hack my account even with a strong password?', a: 'Yes — through phishing, SIM swapping (for SMS-based 2FA), or session hijacking. A strong password prevents brute-force and credential stuffing attacks, but you also need two-factor authentication and awareness of phishing attempts.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },
    {
        slug:           'for-school',
        seoTitle:       'School Password Generator — Student & Campus Account Passwords | ToolKit',
        seoH1:          'School & Student Password Generator',
        seoDescription: 'Generate secure passwords for school and university accounts. Meets typical campus IT requirements. Easy to type. Free, browser-based, no signup.',
        intro:          'School and university accounts often have specific password policies: minimum 8-12 characters, at least one uppercase letter, one number, and sometimes one symbol. Many students reuse their school password across personal accounts — this is dangerous because educational institutions are frequent targets for cyberattacks, and a breach of your university credentials could expose every account sharing that password. Campus accounts also typically connect to email, cloud storage (OneDrive, Google Drive), library systems, and sometimes financial aid portals. This generator defaults to 14 characters with all types enabled — long enough to be secure, meeting all common campus IT requirements, and practical enough to type on a shared lab computer. Always use a unique password for your school account and store it in a password manager.',
        faq: [
            { q: 'Why do school IT departments have specific password rules?', a: 'Educational institutions must comply with data protection regulations (FERPA in the US, GDPR in Europe) and protect systems shared by thousands of users. Specific rules ensure a baseline security level across all student and staff accounts.' },
            { q: 'Is my school account a high-value target?', a: 'Yes — school accounts access email, cloud storage, academic records, and sometimes financial aid. Universities are heavily targeted by phishing campaigns because students are less security-aware than corporate employees and the accounts connect to valuable data.' },
            { q: 'Can I use the same password for school and personal accounts?', a: 'Never. School systems are shared environments with higher breach risk. If your school credentials are compromised, every account sharing that password is also compromised. Use unique passwords everywhere.' },
            { q: 'What if I need to type the password on a shared computer?', a: 'Use 14-16 characters — long enough to be secure but practical to type. Avoid extreme lengths like 32+ characters for accounts you type manually on lab or library computers. Always log out completely when finished.' },
        ],
        defaults: { length: 14, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },

    // ════════════════════════════════════════════════════════
    // By purpose
    // ════════════════════════════════════════════════════════

    {
        slug:           'bulk',
        seoTitle:       'Bulk Password Generator — Generate Multiple Passwords at Once | ToolKit',
        seoH1:          'Bulk Password Generator',
        seoDescription: 'Generate multiple random passwords at once. Create 10, 50, or 100 secure passwords in one click. Ideal for teams and provisioning. Free, browser-based.',
        intro:          'When provisioning user accounts, setting up test environments, or rotating credentials across multiple services, you need many unique passwords at once. Generating them one at a time is tedious and error-prone — copying the wrong password to the wrong account is a common operational mistake. This bulk generator creates multiple cryptographically random passwords simultaneously, each with the same security properties as a single generated password. Common use cases include IT teams onboarding new employees, DevOps engineers rotating database credentials, QA teams creating test accounts, and anyone migrating to a password manager who needs to replace reused passwords across many services. Each password is generated independently using the Web Crypto API, ensuring no correlation between outputs.',
        faq: [
            { q: 'How many passwords can I generate at once?', a: 'You can generate as many as you need by clicking the generate button repeatedly. Each click produces a fresh, cryptographically random password that is completely independent of the previous ones.' },
            { q: 'Are bulk-generated passwords as secure as single ones?', a: 'Yes. Each password is generated independently using the same cryptographically secure random number generator (Web Crypto API). Generating multiple passwords does not reduce the randomness or security of any individual password.' },
            { q: 'What is the best way to distribute bulk passwords?', a: 'Never send passwords in plain text via email. Use a password manager with sharing features (1Password, Bitwarden), a secure messaging platform with disappearing messages, or an in-person handoff for the most sensitive credentials.' },
            { q: 'Should all bulk passwords have the same settings?', a: 'For uniform environments (all users on the same system), yes — use consistent length and character requirements. For different systems with different requirements, generate separate batches with appropriate settings for each system.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },
    {
        slug:           'memorable',
        seoTitle:       'Memorable Password Generator — Easy to Remember, Hard to Crack | ToolKit',
        seoH1:          'Memorable Password Generator',
        seoDescription: 'Generate passwords that are easy to remember but hard to crack. Uses pronounceable patterns with mixed characters. Free, browser-based, no signup.',
        intro:          'There are a few passwords you need to actually memorize: your password manager master password, your computer login, and perhaps your phone PIN. For these, a purely random string like "xK#9mQ$2pL" is impractical — you will forget it, write it on a sticky note, or reset it constantly. A memorable password takes a different approach: it uses patterns that human memory can latch onto while maintaining enough randomness to resist attacks. The best strategy is a passphrase — four to six random words combined with numbers and symbols, like "correct-horse-battery-staple" but with added complexity. This generator creates passwords that balance memorability with security. For any password that goes into a password manager (not memorized), always prefer a fully random password instead.',
        faq: [
            { q: 'When should I use a memorable password vs a random one?', a: 'Memorable passwords are only for the few passwords you must type from memory: password manager master password, computer login, phone unlock. Every other password should be fully random and stored in a password manager.' },
            { q: 'How secure is a memorable password?', a: 'It depends on the method. A 4-word passphrase from a 7,776-word list provides ~51 bits of entropy. A 6-word passphrase provides ~77 bits. Adding numbers and symbols between words increases entropy further. This is weaker per character than a random string but strong enough for passwords protected by rate limiting.' },
            { q: 'What makes a password memorable?', a: 'Patterns, rhythm, and visual imagery. "Purple-Tiger-Runs-42!" is far more memorable than "pTr42!" because your brain can form a mental image. Length from natural words compensates for the lower entropy per character.' },
            { q: 'Is "correct horse battery staple" still a good password?', a: 'The concept is sound but that specific phrase is now in every dictionary attack list. Always generate your own random word combinations. Add numbers and symbols between words for additional entropy.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'passphrase',
        seoTitle:       'Passphrase Generator — Random Word Passwords for Master Keys | ToolKit',
        seoH1:          'Passphrase Generator',
        seoDescription: 'Generate secure passphrases from random words. Ideal for master passwords and encryption keys you need to memorize. Free, browser-based, no signup.',
        intro:          'A passphrase is a password made of multiple random words — like "marble-sunset-notebook-river" — instead of a string of random characters. The concept was popularized by the XKCD comic "correct horse battery staple" and formalized by the Diceware method. Passphrases solve a specific problem: they provide high entropy while remaining memorable enough to type without a password manager. A four-word passphrase from a large word list provides roughly 50-60 bits of entropy; six words provides 75-90 bits. The trade-off is length — passphrases are typically 20-40 characters long but far easier to remember than a 16-character random string. Use passphrases for your password manager master password, full-disk encryption passphrase, or any credential you must memorize. For everything else, use a shorter fully random password stored in your manager.',
        faq: [
            { q: 'How many words should my passphrase have?', a: 'At least four words for moderate security (~50-60 bits). Six words for high security (~75-90 bits). For a password manager master password, six words is the recommended minimum.' },
            { q: 'Should I add numbers and symbols to a passphrase?', a: 'Adding a number and symbol (e.g., "marble-sunset7-notebook!river") increases entropy by roughly 10-15 bits and makes the passphrase resistant to pure dictionary attacks. It is a worthwhile addition for minimal memorability cost.' },
            { q: 'Is a passphrase stronger than a regular password?', a: 'Per character, no — passphrases have lower entropy density. But a 6-word passphrase (~77 bits) that you can actually remember and type correctly is far more practical than a 12-character random string (~79 bits) that you will write on a sticky note.' },
            { q: 'What word list should passphrases use?', a: 'The EFF Diceware list (7,776 words) is the standard. Each word contributes ~12.9 bits of entropy. Avoid using common phrases, song lyrics, quotes, or personally meaningful words — the words must be randomly selected.' },
        ],
        defaults: { length: 20, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'pronounceable',
        seoTitle:       'Pronounceable Password Generator — Easy to Say Passwords | ToolKit',
        seoH1:          'Pronounceable Password Generator',
        seoDescription: 'Generate random passwords that are easy to pronounce and communicate verbally. Ideal for phone support and shared access. Free, browser-based, no signup.',
        intro:          'Sometimes a password needs to be communicated verbally — reading it to someone over the phone, dictating it to a colleague during setup, or sharing a temporary access code in a meeting. Random strings like "xK#9mQ$2" are nearly impossible to communicate accurately without the NATO phonetic alphabet. Pronounceable passwords solve this by using alternating consonant-vowel patterns that form syllable-like structures — "kobami", "luseta", "wopind" — while remaining random and unpredictable. Each syllable is selected randomly, not from a dictionary, so the passwords do not contain real words that could be guessed. This generator creates passwords with pronounceable patterns using mixed character types for the best balance of verbal communication and security.',
        faq: [
            { q: 'When should I use a pronounceable password?', a: 'When the password must be communicated verbally: phone support access codes, temporary passwords given in person, shared WiFi passwords told to guests, or any situation where someone needs to type what you say aloud.' },
            { q: 'Is a pronounceable password less secure?', a: 'Somewhat — pronounceable patterns reduce the character space compared to fully random strings. A 16-character pronounceable password has less entropy than a 16-character random one. Compensate by using longer passwords (20+ characters) when pronounceability is required.' },
            { q: 'Can pronounceable passwords contain numbers and symbols?', a: 'Yes. Adding a digit or symbol between pronounceable syllables (e.g., "koba4mi-luse") maintains verbal communication ability while increasing entropy. This generator mixes character types within pronounceable structures.' },
            { q: 'How is this different from a passphrase?', a: 'A passphrase uses real dictionary words ("marble-sunset-river"). A pronounceable password uses syllable-like patterns that are not real words ("kobami-luseta"). Pronounceable passwords are shorter but less memorable than passphrases.' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'for-kids',
        seoTitle:       'Password Generator for Kids — Safe & Simple Passwords | ToolKit',
        seoH1:          'Password Generator for Kids',
        seoDescription: 'Generate safe, simple passwords for children\'s accounts. Easy to type, meets school requirements. Free, browser-based, no data stored.',
        intro:          'Children need passwords for school platforms, educational games, and supervised email accounts — but they cannot manage the same complexity adults use. A child\'s password needs to be simple enough to type independently (especially for younger kids who are still learning the keyboard), easy to remember without writing it down in an insecure place, and strong enough to meet the school or platform\'s requirements. This generator defaults to 10 characters with uppercase, lowercase, and numbers — no symbols, since young children often struggle to locate symbol keys. For older children (12+), consider enabling symbols and increasing length to 12-14 characters. Parents should store children\'s passwords in their own password manager and supervise account access appropriate to the child\'s age.',
        faq: [
            { q: 'How long should a child\'s password be?', a: 'For ages 6-9, 8-10 characters without symbols is practical. For ages 10-12, 10-12 characters. For teenagers, the same as adults — 14-16 characters with full complexity. Adjust based on typing ability and the sensitivity of the account.' },
            { q: 'Should children\'s passwords include symbols?', a: 'For young children (under 10), no — symbols are hard to find on the keyboard and lead to frustration and login failures. For older children and teenagers, gradually introduce symbols as their typing skills improve.' },
            { q: 'Should I manage my child\'s passwords?', a: 'Yes, at least until they are mature enough to use a password manager independently (typically age 13+). Store their passwords in your own manager, and teach them about password security as they grow older.' },
            { q: 'Is it okay for children to reuse passwords?', a: 'Ideally no, but practically, young children may need a single password for multiple school platforms to avoid confusion. As they mature, transition to unique passwords per account with a password manager.' },
        ],
        defaults: { length: 10, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'for-work',
        seoTitle:       'Work Password Generator — Corporate & Enterprise Passwords | ToolKit',
        seoH1:          'Work & Corporate Password Generator',
        seoDescription: 'Generate passwords meeting corporate security policies. At least one uppercase, one number, one symbol. Compliant with enterprise requirements. Free, browser-based.',
        intro:          'Corporate environments typically enforce strict password policies: minimum 12-16 characters, at least one uppercase letter, one lowercase letter, one digit, and one symbol, with expiration every 60-90 days (though NIST now advises against forced rotation). These requirements exist because a single compromised employee account can give attackers access to internal networks, customer data, and intellectual property. Many enterprises use Active Directory, Okta, or similar identity providers that enforce these policies at the system level — your password will be rejected if it does not meet every requirement. This generator defaults to 16 characters with all types enabled, meeting or exceeding the policies of most enterprise environments. If your company uses single sign-on (SSO), you may only need this for your primary domain password, with SSO handling everything else.',
        faq: [
            { q: 'Why do corporate password policies seem so strict?', a: 'Businesses face regulatory requirements (SOC 2, HIPAA, PCI DSS, GDPR) that mandate strong access controls. A single compromised account can lead to data breaches costing millions. The policies exist to establish a security baseline across all employees.' },
            { q: 'Should I still follow the 90-day rotation policy?', a: 'Follow your company\'s policy even if NIST advises against forced rotation. IT security teams set policies based on the organization\'s specific risk profile and compliance requirements. If you want to advocate for change, share the NIST SP 800-63B guidelines with your IT team.' },
            { q: 'Can I use a password manager at work?', a: 'Many companies provide enterprise password managers (1Password Business, LastPass Enterprise, Dashlane Business). If your company offers one, use it. If not, ask your IT department — using an unauthorized tool may violate security policy.' },
            { q: 'What about single sign-on (SSO)?', a: 'SSO reduces the number of passwords you need — you log in once to your identity provider and access all connected applications. Your SSO password becomes critical: make it the strongest password in your work life (20+ characters).' },
        ],
        defaults: { length: 16, uppercase: true, lowercase: true, numbers: true, symbols: true },
    },
    {
        slug:           'for-temporary',
        seoTitle:       'Temporary Password Generator — Short-Lived Access Codes | ToolKit',
        seoH1:          'Temporary Password Generator',
        seoDescription: 'Generate temporary passwords for short-term access. Ideal for guest accounts, one-time logins, and initial setup. Free, browser-based, no signup.',
        intro:          'Temporary passwords serve a specific purpose: granting short-lived access that will be changed or revoked soon. Common scenarios include initial account setup (where the user must change the password on first login), guest access to a WiFi network or shared system, vendor or contractor access for a limited engagement, and one-time passwords for identity verification. Temporary passwords can be shorter than permanent ones because their exposure window is limited — an 8-10 character password that exists for only 24 hours has a much smaller attack surface than one used for months. This generator defaults to 10 characters with letters and numbers (no symbols for easy verbal communication). Always set an expiration on temporary credentials and revoke them as soon as the access period ends.',
        faq: [
            { q: 'How long should a temporary password be?', a: '8-12 characters is usually sufficient for passwords that expire within 24-48 hours. The limited time window reduces the attack surface. For temporary access lasting weeks, use 14-16 characters.' },
            { q: 'Should temporary passwords include symbols?', a: 'Often no — temporary passwords are frequently communicated verbally or typed manually from a printout. Symbols make this harder and cause more support calls. Letters and numbers are easier to communicate accurately.' },
            { q: 'Should I force a password change after first login?', a: 'Yes, for initial setup passwords. This ensures only the account owner knows the permanent password. For guest access, it is not necessary — just revoke the credential when access is no longer needed.' },
            { q: 'How should I send a temporary password?', a: 'Ideally through a separate channel from the username — send the username by email and the password by SMS, or use a secure messaging app. Never send both in the same email.' },
        ],
        defaults: { length: 10, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'pin-code',
        seoTitle:       'PIN Code Generator — Random 4-8 Digit PINs | ToolKit',
        seoH1:          'PIN Code Generator',
        seoDescription: 'Generate random PIN codes (4-8 digits). For bank cards, phone locks, safes, and access systems. Cryptographically random. Free, browser-based.',
        intro:          'PINs — Personal Identification Numbers — are everywhere: bank cards, phone lock screens, safe combinations, building access panels, SIM cards, and parental controls. A PIN is designed to be short and fast to enter, relying on rate limiting (account lockout after failed attempts) rather than length for security. The most common PIN length is 4 digits (10,000 combinations), but 6-digit PINs (1,000,000 combinations) are increasingly standard for phones and financial services. The critical rule for PINs is randomness: studies show that the most common 4-digit PIN is "1234" (used by over 10% of people), followed by "1111", "0000", and birth years. A randomly generated PIN avoids these predictable patterns entirely. This generator creates random numeric PINs using the Web Crypto API — the same cryptographic randomness used for full passwords.',
        faq: [
            { q: 'Should I use a 4-digit or 6-digit PIN?', a: 'Use 6 digits whenever the system allows it. A 6-digit PIN has 1,000,000 combinations versus 10,000 for a 4-digit PIN — that is 100 times harder to guess. Most modern phones and banking apps support 6-digit PINs.' },
            { q: 'What PINs should I avoid?', a: 'Never use: 1234, 1111, 0000, 1212, your birth year (1990, 1985, etc.), your birthday (0315 for March 15), repeated digits (7777), or sequential patterns (4567). These are the first combinations attackers try.' },
            { q: 'Is a PIN secure enough for my phone?', a: 'With rate limiting (increasing delays after wrong attempts and wipe after 10 failures), a random 6-digit PIN is secure for a phone. For maximum security, use a full alphanumeric password instead of a PIN.' },
            { q: 'Can I use the same PIN for my bank card and phone?', a: 'No — if someone observes you entering your phone PIN (shoulder surfing), they should not also have your bank PIN. Use different PINs for different purposes, and store them in a password manager if needed.' },
            { q: 'What happens if I enter the wrong PIN too many times?', a: 'Most systems lock after 3-10 failed attempts. ATMs retain your card after 3 wrong PINs. iPhones disable for increasing intervals and can wipe after 10 failures. SIM cards lock permanently after 3 wrong PUK entries. These lockout mechanisms are what make short PINs viable.' },
            { q: 'Is a longer PIN always better?', a: 'Up to a point. A 6-digit PIN is 100x stronger than 4 digits, and an 8-digit PIN is 10,000x stronger. Beyond 8 digits, the PIN becomes hard to memorize and slow to enter, reducing the usability advantage that PINs have over full passwords.' },
            { q: 'How do I remember a random PIN?', a: 'Practice entering it manually 5-10 times when you first set it — muscle memory develops quickly for short number sequences. Avoid writing it on your phone or wallet. Store a backup in your password manager in case you forget.' },
        ],
        defaults: { length: 6, uppercase: false, lowercase: false, numbers: true, symbols: false },
        contentSections: [
            {
                heading: 'The mathematics behind PIN security',
                body: 'A PIN code is a simplified password with a severely limited character set — just 10 digits (0-9). The security mathematics are straightforward: a 4-digit PIN has 10^4 = 10,000 possible combinations, a 6-digit PIN has 10^6 = 1,000,000 combinations, and an 8-digit PIN has 10^8 = 100,000,000 combinations. Each additional digit multiplies the search space by exactly 10. In terms of entropy, a 4-digit PIN provides approximately 13.3 bits, a 6-digit PIN provides 19.9 bits, and an 8-digit PIN provides 26.6 bits. These are low numbers compared to full passwords, which is why PINs always rely on additional security measures: physical possession of a card or device, rate limiting on failed attempts, and in many cases biometric verification as an alternative. The PIN is not meant to be uncrackable in isolation — it is one factor in a multi-factor system.',
            },
            {
                heading: '4-digit vs 6-digit vs 8-digit PINs',
                body: 'The jump from 4 to 6 digits increases the number of possible combinations by a factor of 100 — from 10,000 to 1,000,000. This matters significantly for phone lock screens where an attacker might have physical access and time to attempt guesses (even with rate limiting delays). Apple switched to 6-digit PINs as the default in iOS 9, and Google followed for Android devices. For banking, most ATMs still use 4-digit PINs because the card itself serves as a second factor and ATMs lock after 3 failed attempts. Eight-digit PINs are less common but appear in some enterprise systems, high-security door access panels, and certain safe models. The extra digits provide 100 million combinations but are harder to memorize, so they are typically used only where the PIN is entered infrequently. For phone lock screens, 6 digits is the current best practice — a good balance between security and the dozens of daily unlocks.',
            },
            {
                heading: 'PIN codes in multi-factor authentication',
                body: 'PINs rarely function as standalone security. They are almost always combined with another authentication factor to create a system stronger than either factor alone. ATM transactions require both the physical card (something you have) and the PIN (something you know). Phone lock screens combine the PIN with the device itself — and often add biometric authentication (fingerprint, face recognition) as a convenience layer. Chip-and-PIN credit cards verify both the embedded chip and the PIN at the point of sale terminal. Windows Hello for Business combines a PIN with the specific device hardware through the TPM (Trusted Platform Module) chip, meaning the PIN only works on that specific computer. This multi-factor approach is why a 4-6 digit PIN provides acceptable security despite its mathematical simplicity — compromising the system requires defeating multiple independent security layers simultaneously.',
            },
            {
                heading: 'Best practices for managing multiple PINs',
                body: 'Most people need several PINs: bank card, credit card, phone lock screen, SIM card, alarm system, building access, and possibly a safe or parental controls. Using the same PIN across all these systems creates a single point of failure — someone who observes your phone PIN at a coffee shop (shoulder surfing) would also have your bank PIN. The solution is unique PINs for each critical system, stored in a password manager for reference. Prioritize memorizing only the PINs you enter frequently: phone lock screen and primary bank card. For PINs you rarely use (SIM PIN, safe combination), store them in your password manager and look them up when needed. When choosing which PINs to memorize, use spaced repetition — enter the PIN manually several times over the first few days rather than relying on biometric bypass, which would let you forget the PIN entirely.',
            },
            {
                heading: 'PIN security on mobile devices',
                body: 'Your phone PIN protects far more than just the device itself — it guards access to your email, banking apps, authenticator codes, photos, messages, and social media accounts. Modern smartphones implement hardware-backed security that makes PIN cracking extremely difficult even for sophisticated attackers. Apple\'s Secure Enclave and Android\'s Titan chip enforce rate limiting at the hardware level, meaning even if the operating system is compromised, the PIN attempt counter cannot be reset. After 10 failed attempts, many devices wipe all data automatically. Forensic tools used by law enforcement (like Cellebrite and GrayKey) can sometimes bypass these protections, but they require physical access, specialized equipment costing tens of thousands of dollars, and are limited to specific device models and OS versions. For the average user, a random 6-digit PIN combined with automatic wipe after failed attempts provides robust protection against theft and unauthorized access.',
            },
        ],
    },
    {
        slug:           'for-database',
        seoTitle:       'Database Password Generator — MySQL, PostgreSQL & MongoDB | ToolKit',
        seoH1:          'Database Password Generator',
        seoDescription: 'Generate strong passwords for MySQL, PostgreSQL, MongoDB and other databases. Avoids problematic characters. Free, browser-based, no data stored.',
        intro:          'Database passwords protect your most valuable asset — your data. A compromised database password gives an attacker direct access to every record, bypassing all application-level security. Database passwords have unique requirements: they are often stored in configuration files, environment variables, or connection strings, where certain characters can cause parsing issues. Single quotes, double quotes, backslashes, semicolons, and the percent sign can break connection strings in many frameworks. This generator defaults to 32 characters with alphanumeric characters — long enough for maximum security while avoiding the special characters that commonly cause configuration headaches. For databases, the password is always copy-pasted from a vault or configuration management system, never typed manually, so extreme length has zero usability cost.',
        faq: [
            { q: 'Why are database passwords different from regular passwords?', a: 'Database passwords are stored in config files, environment variables, and connection strings where special characters like quotes, backslashes, and semicolons can cause parsing errors. They are also never typed manually, so they can be much longer without usability concerns.' },
            { q: 'How long should a database password be?', a: 'At least 32 characters. Since database passwords are always copy-pasted or stored in config, there is no reason to use anything shorter. MySQL supports up to 32 characters for native auth, PostgreSQL has no practical limit.' },
            { q: 'Which characters should I avoid in database passwords?', a: 'Avoid single quotes (\'), double quotes ("), backslashes (\\), semicolons (;), percent signs (%), and at signs (@) — these can break connection strings, SQL queries, or URL-format connection URIs. Alphanumeric with underscores and hyphens is safest.' },
            { q: 'How should I store database passwords?', a: 'Use environment variables, a secrets manager (AWS Secrets Manager, HashiCorp Vault, GCP Secret Manager), or encrypted configuration. Never hardcode database passwords in source code or commit them to version control.' },
        ],
        defaults: { length: 32, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'for-ssh',
        seoTitle:       'SSH Passphrase Generator — Secure Your SSH Keys | ToolKit',
        seoH1:          'SSH Key Passphrase Generator',
        seoDescription: 'Generate strong passphrases for SSH private keys. Protect your server access with a secure passphrase. Free, browser-based, no data stored.',
        intro:          'An SSH key passphrase encrypts your private key file — if someone steals the file (from a backup, a compromised laptop, or a stolen drive), they cannot use it without the passphrase. Without a passphrase, anyone with your private key file has instant access to every server it is authorized for. The passphrase should be long enough to resist offline brute-force attacks against the key file encryption (typically AES-128 or AES-256). Since you type this passphrase whenever you load the key (unless using an SSH agent), it needs to be both strong and typeable. This generator defaults to 20 characters with letters and numbers — a practical balance between security and the frequent typing required. If you use an SSH agent that caches the unlocked key, you can use a longer, more complex passphrase since you only type it once per session.',
        faq: [
            { q: 'Do I really need a passphrase on my SSH key?', a: 'Yes. An unprotected private key is equivalent to writing your password in a plain text file. Anyone who obtains the file — through a backup breach, stolen laptop, or malware — has full access to your servers.' },
            { q: 'How long should an SSH passphrase be?', a: 'At least 16-20 characters. The passphrase protects against offline attacks on the key file, so it needs to be strong enough to resist GPU-accelerated cracking. 20 characters with mixed types provides ~119-131 bits of entropy.' },
            { q: 'Can I use an SSH agent to avoid typing it repeatedly?', a: 'Yes. ssh-agent caches the decrypted key in memory for the duration of your session. You type the passphrase once when loading the key, then connect to servers without re-entering it. On macOS, the Keychain can store it permanently.' },
            { q: 'What if I forget my SSH passphrase?', a: 'There is no recovery mechanism — the passphrase is the encryption key for the private key file. You would need to generate a new SSH key pair and add the new public key to your servers. Store the passphrase in a password manager as backup.' },
        ],
        defaults: { length: 20, uppercase: true, lowercase: true, numbers: true, symbols: false },
    },
    {
        slug:           'for-crypto',
        seoTitle:       'Crypto Wallet Password Generator — Secure Passwords for Bitcoin & Exchanges | ToolKit',
        seoH1:          'Crypto Wallet Password Generator',
        seoDescription: 'Generate strong passwords for cryptocurrency wallets and exchange accounts. Maximum security for Bitcoin, Ethereum, and all crypto holdings. Free, browser-based, no signup.',
        intro:          'Cryptocurrency accounts have no fraud department, no chargeback, and no account recovery if you lose access. When a crypto exchange account or software wallet is compromised, the funds are gone — permanently and irreversibly. This makes strong, unique passwords for every crypto account more critical than almost any other type of credential. Exchange accounts (Coinbase, Kraken, Binance) are high-value targets for credential stuffing attacks because attackers know the accounts hold liquid, instantly transferable assets. Software wallets (MetaMask, Exodus, Electrum) encrypt your private keys with a password — if that password is weak, an attacker with access to your wallet file can brute-force it offline at their own pace. This generator defaults to 24 characters with all character types enabled, producing approximately 157 bits of entropy — strong enough to make offline attacks against any current encryption scheme infeasible.',
        faq: [
            { q: 'Why do crypto passwords need to be extra strong?', a: 'Crypto transactions are irreversible. A compromised bank account can be reversed in days; a compromised crypto account is permanently drained within seconds. There is no fraud protection, no customer service reversal, and no insurance — the password is your only defense.' },
            { q: 'What password should I use for my crypto exchange account?', a: 'At least 20 characters with all character types, unique to that exchange, and stored in a password manager. Never reuse a password from any other account. Enable 2FA (hardware key or TOTP app, not SMS) as a second layer.' },
            { q: 'How is a wallet password different from a seed phrase?', a: 'Your seed phrase (12 or 24 words) is the master key to your wallet — it can restore all funds on any device. Your wallet password only encrypts the local wallet file. Lose the password but keep the seed phrase and you can recover everything. Lose the seed phrase and the password provides no recovery path.' },
            { q: 'Should I use the same password for multiple exchanges?', a: 'Never. Exchanges have been breached repeatedly — when one leaks credentials, attackers immediately try them on every other major exchange. Use a unique 20+ character random password for each exchange, stored in a password manager.' },
            { q: 'Is a hardware wallet password the same as a PIN?', a: 'Hardware wallets (Ledger, Trezor) use a PIN to unlock the device, not a traditional password. The PIN is typically 4-8 digits but is hardware-rate-limited, making brute force impractical. The PIN protects the device; your seed phrase protects the funds.' },
            { q: 'What 2FA method should I use for crypto accounts?', a: 'Use a hardware security key (YubiKey) as the primary 2FA method. If unavailable, use a TOTP authenticator app (Google Authenticator, Authy) — never SMS/phone 2FA, which is vulnerable to SIM-swap attacks, a common crypto theft vector.' },
            { q: 'How should I store crypto passwords and seed phrases?', a: 'Passwords go in a password manager. Seed phrases go on paper (or metal) stored in a physically secure location — never digitally, never in a photo, never in cloud storage. Treat your seed phrase like physical cash: if someone sees it, assume it is compromised.' },
            { q: 'Can attackers brute-force my wallet encryption?', a: 'Software wallets like MetaMask use PBKDF2 or similar key derivation with limited iterations. Given enough time and GPU power, weak passwords can be cracked offline. A 24-character random password with all types would take longer than the heat death of the universe to crack, even with dedicated hardware.' },
        ],
        defaults: { length: 24, uppercase: true, lowercase: true, numbers: true, symbols: true },
        contentSections: [
            {
                heading: 'Why crypto account security is uniquely high-stakes',
                body: 'Every other financial system has a recovery mechanism. Banks reverse unauthorized transactions. Credit card companies refund fraud. PayPal has dispute resolution. Cryptocurrency has none of these — transactions are final within minutes, anonymous, and borderless. Attackers who compromise a crypto exchange account can drain it and move funds through several wallets and exchanges within an hour, making recovery impossible by design. This is why cryptocurrency accounts are disproportionately targeted relative to their market share. The 2023 LastPass breach led directly to $35 million in crypto theft as attackers decrypted stolen vaults and used extracted seed phrases. The 2021 Coinbase phishing campaign compromised 6,000 accounts by combining stolen passwords with SMS 2FA interception. A strong, unique password is the foundation — but it is only part of a complete security posture.',
            },
            {
                heading: 'Exchange accounts vs. self-custody wallets',
                body: 'The password security considerations differ depending on where you hold crypto. Exchange accounts (custodial) are protected by the exchange\'s security infrastructure, which means the password secures your login but the exchange itself holds your private keys. A strong password and hardware 2FA are the primary defenses. Self-custody wallets (non-custodial) store your private keys locally, encrypted with your wallet password. Here, the password directly protects the keys — if an attacker obtains your wallet file (from a backup, a compromised cloud sync, or a stolen device), they can attack it offline at maximum speed with no rate limiting. This is why offline wallet passwords need to be especially strong: at least 20 characters with all types, distinct from every other password you use. Hardware wallets add a physical layer by keeping private keys inside tamper-resistant hardware — even if your computer is compromised, the keys cannot be extracted.',
            },
            {
                heading: 'SIM-swap attacks and why SMS 2FA fails for crypto',
                body: 'SIM-swap attacks — where a criminal convinces your mobile carrier to transfer your phone number to their SIM card — are one of the most common crypto theft vectors. Once they control your number, they receive every SMS 2FA code sent to it, bypassing password protection entirely. Dozens of documented attacks have drained six and seven-figure crypto portfolios this way. The defense is straightforward: never use SMS-based 2FA for any crypto account. Use a hardware security key (YubiKey, Google Titan Key) as the primary authentication factor wherever supported. Where hardware keys are not supported, use a TOTP authenticator app (Google Authenticator, Authy) — these generate codes locally on your device, not via SMS, and are not vulnerable to SIM-swap. For exchanges that only offer SMS 2FA, contact support to escalate to email-based or TOTP-based 2FA, or consider using a different exchange.',
            },
            {
                heading: 'Protecting your seed phrase',
                body: 'Your seed phrase (also called a recovery phrase or mnemonic) is the master key to your self-custody wallet. It consists of 12 or 24 words that can restore your entire wallet — including all accounts and funds — on any device. No password, PIN, or 2FA is needed; the seed phrase alone is sufficient to move all your funds. This makes it the highest-value target an attacker can get from you — more valuable than your wallet password, your exchange password, or your hardware wallet PIN. Never store your seed phrase digitally: not in a text file, not in a photo, not in cloud storage, not in a notes app. Write it on paper and store it in a physically secure location. For long-term storage, consider engraving it on stainless steel (available from Cryptosteel, Bilodal, and similar providers) to protect against fire and water. Make one or more copies and store them in separate secure locations to protect against single-point-of-failure loss.',
            },
            {
                heading: 'Password manager practices for crypto accounts',
                body: 'A password manager is essential for maintaining unique, strong passwords across all your crypto accounts. For crypto specifically, be aware of a few additional practices. Use a strong, unique master password (30+ characters) for the password manager itself, plus hardware 2FA — if the manager is compromised, every account inside it is compromised. Store only exchange passwords in the manager, never seed phrases. Consider using a separate password manager specifically for crypto credentials, isolated from your general passwords. Enable emergency access settings carefully — the account recovery mechanism for your password manager should not be weaker than the accounts it protects. Regularly audit the passwords stored for crypto accounts to ensure they are all unique, meet your length requirements, and have not been reused from other services. Enable breach alerts in your password manager and rotate any flagged passwords immediately.',
            },
        ],
    },
];