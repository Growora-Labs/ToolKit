export default function PasswordGeneratorContent() {
    return (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '64px 16px 0' }}>
            <div>

                {/* ── What is ─────────────────────────────────── */}
                <section style={{ marginBottom: 48 }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                        What is a password generator?
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                        A password generator is a tool that creates random, unpredictable passwords using a cryptographically secure algorithm. Unlike passwords you create yourself — which tend to follow patterns, use dictionary words, or reuse elements you can remember — a generated password has no structure that an attacker can exploit.
                    </p>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                        This tool uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>Web Crypto API</a> — the same source of randomness that your operating system and browser use for cryptographic operations. Every password is generated locally in your browser. Nothing is transmitted to any server, stored in logs, or accessible to anyone other than you.
                    </p>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)' }}>
                        The <a href="https://www.nist.gov/publications/digital-identity-guidelines" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', textDecoration: 'underline' }}>NIST Digital Identity Guidelines</a> recommend passwords of at least 15 characters for general use. Our generator supports lengths up to 64 characters with full control over character sets — uppercase letters, lowercase letters, numbers, and symbols.
                    </p>
                </section>

                {/* ── How to use ──────────────────────────────── */}
                <section style={{ marginBottom: 48 }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                        How to use the password generator
                    </h2>
                    <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
                        {[
                            { n: '1', title: 'Set your password length', desc: 'Use the length slider to choose between 8 and 64 characters. For most accounts, 16–20 characters provides an excellent balance of security and usability. For critical accounts like email or banking, use 24 or more.' },
                            { n: '2', title: 'Choose your character types', desc: 'Enable uppercase letters (A–Z), lowercase letters (a–z), numbers (0–9), and symbols (!@#$...). Using all four character types maximises entropy — the measure of randomness in your password.' },
                            { n: '3', title: 'Generate and copy', desc: 'Click Generate or press the refresh button. Your new password appears instantly. Click the copy icon to copy it to your clipboard — it stays there for 30 seconds before being cleared for security.' },
                            { n: '4', title: 'Save it in a password manager', desc: 'Paste the password directly into your password manager (Bitwarden, 1Password, Dashlane) before using it anywhere else. Never store passwords in plain text files or browser notes.' },
                        ].map(({ n, title, desc }) => (
                            <li key={n} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                                <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--ink)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{n}</span>
                                <div>
                                    <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ink)', marginBottom: 4 }}>{title}</div>
                                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-3)', margin: 0 }}>{desc}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* ── What makes strong ───────────────────────── */}
                <section style={{ marginBottom: 48 }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                        What makes a password strong?
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 14 }}>
                        Password strength is measured in <strong style={{ color: 'var(--ink)' }}>entropy</strong> — the number of bits of randomness. A password with 80+ bits of entropy is considered strong by modern standards. Every additional character and character type exponentially increases entropy.
                    </p>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
                        Contrary to popular belief, <strong style={{ color: 'var(--ink)' }}>length matters more than complexity</strong>. A 20-character lowercase password is significantly harder to crack than an 8-character password with symbols. That said, combining length with character variety gives you the best protection against brute-force attacks and dictionary attacks.
                    </p>

                    {/* Strength comparison table */}
                    <div style={{ overflowX: 'auto', marginBottom: 14 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                            <thead>
                            <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                                {['Password', 'Length', 'Entropy', 'Time to crack'].map(h => (
                                    <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>{h}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {[
                                { pwd: 'password123',         len: '11', entropy: '~37 bits', time: 'Instant',           bg: '#fef2f2' },
                                { pwd: 'P@ssw0rd!',           len: '9',  entropy: '~45 bits', time: 'Minutes',           bg: '#fef2f2' },
                                { pwd: 'xK9#mP2qL',           len: '9',  entropy: '~59 bits', time: 'Days',              bg: '#fffbeb' },
                                { pwd: 'xK9#mP2qLvR4!nW8s',  len: '18', entropy: '~118 bits',time: 'Billions of years',  bg: '#f0fdf4' },
                            ].map(({ pwd, len, entropy, time, bg }) => (
                                <tr key={pwd} style={{ background: bg, borderBottom: '1px solid var(--border)' }}>
                                    <td style={{ padding: '10px 14px', fontFamily: 'JetBrains Mono, monospace', fontSize: 13 }}>{pwd}</td>
                                    <td style={{ padding: '10px 14px', color: 'var(--ink-2)' }}>{len}</td>
                                    <td style={{ padding: '10px 14px', color: 'var(--ink-2)' }}>{entropy}</td>
                                    <td style={{ padding: '10px 14px', fontWeight: 600, color: 'var(--ink)' }}>{time}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--ink-4)', fontStyle: 'italic' }}>
                        Estimates based on 10 billion attempts per second (modern GPU brute-force).
                    </p>
                </section>

                {/* ── When to use ─────────────────────────────── */}
                <section style={{ marginBottom: 48 }}>
                    <h2 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 'clamp(18px, 2.5vw, 24px)', color: 'var(--ink)', letterSpacing: '-0.02em', marginBottom: 16 }}>
                        When to use a password generator
                    </h2>
                    <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 16 }}>
                        You should use a password generator for every new account you create. Here are the most important use cases:
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
                        {[
                            { title: 'New account registration',  desc: 'Never invent a password manually. Generate one and save it immediately.' },
                            { title: 'Password reset',             desc: 'When forced to update a password, use a fresh generated one — never increment (password1 → password2).' },
                            { title: 'WiFi passwords',             desc: 'Router passwords should be 20+ characters. Use all character types.' },
                            { title: 'API keys & secrets',         desc: 'For development, generate long random strings as secrets and tokens.' },
                            { title: 'Database passwords',         desc: 'Service accounts and database users need the strongest passwords.' },
                            { title: 'Testing & staging',          desc: 'Populate test accounts with realistic strong passwords, not "test123".' },
                        ].map(({ title, desc }) => (
                            <div key={title} style={{ padding: '14px 16px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 'var(--r-l)', boxShadow: 'var(--sh-xs)' }}>
                                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>{title}</div>
                                <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>{desc}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Password managers tip ───────────────────── */}
                <section style={{ marginBottom: 48 }}>
                    <div style={{ padding: '20px 24px', background: 'var(--green-lt)', border: '1px solid var(--green-mid)', borderRadius: 'var(--r-l)' }}>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', marginBottom: 8 }}>
                            🔒 Always pair with a password manager
                        </h3>
                        <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--ink-2)', margin: 0 }}>
                            A strong password you can't remember is useless without a secure place to store it. Use a dedicated password manager: <strong>Bitwarden</strong> (free, open-source), <strong>1Password</strong>, or <strong>Dashlane</strong>. They encrypt your vault locally, sync across devices, and auto-fill logins — so you only need to remember one master password.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    );
}