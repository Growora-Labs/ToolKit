import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState, useRef, useEffect, FormEvent } from 'react';
import { Layout } from '@/components/ui/Layout';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://www.webtoolkit.tech';
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY';

type Status = 'idle' | 'sending' | 'success' | 'error';

const SUBJECTS = [
    'Bug report',
    'Tool suggestion',
    'Partnership',
    'Other',
];

const IcoChevron = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9"/>
    </svg>
);

const IcoCheck = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
    </svg>
);

/* ── Custom dropdown ──────────────────────────── */
function Dropdown({ value, onChange }: { value: string; onChange: (v: string) => void }) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, []);

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen(o => !o)}
                style={{
                    width: '100%', padding: '11px 14px',
                    border: `1.5px solid ${open ? 'var(--green)' : 'var(--border)'}`,
                    borderRadius: 'var(--r-m)',
                    background: 'var(--white)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    fontSize: 15, color: value ? 'var(--ink)' : 'var(--ink-4)',
                    boxSizing: 'border-box',
                    boxShadow: open ? '0 0 0 3px rgba(5,150,105,.1)' : 'none',
                    transition: 'border-color .14s, box-shadow .14s',
                }}
            >
                <span>{value || 'Choose a topic'}</span>
                <span style={{ color: 'var(--ink-4)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .18s', flexShrink: 0 }}>
          <IcoChevron />
        </span>
            </button>

            {/* Dropdown panel */}
            {open && (
                <div style={{
                    position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0, zIndex: 20,
                    background: 'var(--white)',
                    border: '1.5px solid var(--border)',
                    borderRadius: 'var(--r-m)',
                    boxShadow: 'var(--sh-m)',
                    overflow: 'hidden',
                }}>
                    {SUBJECTS.map(s => {
                        const active = s === value;
                        return (
                            <button
                                key={s}
                                type="button"
                                onClick={() => { onChange(s); setOpen(false); }}
                                style={{
                                    width: '100%', padding: '11px 14px',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    background: active ? 'var(--green-lt)' : 'var(--white)',
                                    border: 'none', borderBottom: '1px solid var(--border)',
                                    fontSize: 14, fontWeight: active ? 600 : 400,
                                    color: active ? 'var(--green)' : 'var(--ink)',
                                    cursor: 'pointer', textAlign: 'left',
                                    transition: 'background .1s',
                                }}
                                onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'var(--page-bg)'; }}
                                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'var(--white)'; }}
                            >
                                {s}
                                {active && <span style={{ color: 'var(--green)' }}><IcoCheck /></span>}
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

/* ── Page ─────────────────────────────────────── */
const ContactPage: NextPage = () => {
    const [name,    setName]    = useState('');
    const [email,   setEmail]   = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status,  setStatus]  = useState<Status>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!subject) return;
        setStatus('sending');
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name, email, subject, message,
                    from_name: 'ToolKit Contact Form',
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setName(''); setEmail(''); setSubject(''); setMessage('');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputStyle: React.CSSProperties = {
        width: '100%', padding: '11px 14px',
        border: '1.5px solid var(--border)', borderRadius: 'var(--r-m)',
        fontSize: 15, color: 'var(--ink)', background: 'var(--white)',
        outline: 'none', boxSizing: 'border-box',
        fontFamily: 'inherit', transition: 'border-color .14s',
    };

    const labelStyle: React.CSSProperties = {
        display: 'block', fontSize: 13, fontWeight: 600,
        color: 'var(--ink-2)', marginBottom: 6,
    };

    return (
        <>
            <Head>
                <title>Contact — ToolKit</title>
                <meta name="description" content="Get in touch with the ToolKit team. Report bugs, suggest tools, or just say hello." />
                <link rel="canonical" href={`${BASE_URL}/contact`} />
                <meta name="robots" content="noindex" />
            </Head>

            <Layout>
                <div style={{ maxWidth: 560, margin: '0 auto', padding: 'clamp(40px, 6vw, 72px) 16px 80px' }}>

                    {/* Breadcrumb */}
                    <nav style={{ marginBottom: 32 }}>
                        <ol style={{ display: 'flex', gap: 6, alignItems: 'center', listStyle: 'none', fontSize: 13, color: 'var(--ink-3)' }}>
                            <li><Link href="/" style={{ color: 'var(--ink-3)', textDecoration: 'none' }}>Home</Link></li>
                            <li aria-hidden>›</li>
                            <li style={{ color: 'var(--ink)', fontWeight: 600 }}>Contact</li>
                        </ol>
                    </nav>

                    {/* Header */}
                    <div style={{ marginBottom: 40 }}>
                        <p className="ov" style={{ marginBottom: 10 }}>Get in touch</p>
                        <h1 className="disp" style={{ fontSize: 'clamp(28px, 5vw, 40px)', marginBottom: 14 }}>
                            Contact us
                        </h1>
                        <p style={{ fontSize: 15, color: 'var(--ink-3)', lineHeight: 1.7 }}>
                            Found a bug? Have a tool idea? Want to say hello?<br />
                            We read every message and reply within 1–2 business days.
                        </p>
                    </div>

                    {/* Success */}
                    {status === 'success' ? (
                        <div style={{ padding: '32px 28px', background: 'var(--green-lt)', border: '1.5px solid var(--green-mid)', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto 16px' }}>
                                <circle cx="12" cy="12" r="10"/><polyline points="9 12 11 14 15 10"/>
                            </svg>
                            <h2 style={{ fontSize: 20, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>Message sent</h2>
                            <p style={{ fontSize: 14, color: 'var(--ink-3)', marginBottom: 24 }}>
                                Thanks for reaching out. We'll get back to you within 1–2 business days.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                style={{ padding: '10px 24px', background: 'var(--green)', color: '#fff', border: 'none', borderRadius: 'var(--r-m)', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

                                {/* Name + Email */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: 14 }}>
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input type="text" value={name} onChange={e => setName(e.target.value)}
                                               placeholder="Your name" required style={inputStyle} />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                                               placeholder="you@example.com" required style={inputStyle} />
                                    </div>
                                </div>

                                {/* Subject — custom dropdown */}
                                <div>
                                    <label style={labelStyle}>Subject</label>
                                    <Dropdown value={subject} onChange={setSubject} />
                                </div>

                                {/* Message */}
                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea value={message} onChange={e => setMessage(e.target.value)}
                                              placeholder="Describe your bug, idea, or question in detail…"
                                              required rows={6}
                                              style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                                </div>

                                {/* Error */}
                                {status === 'error' && (
                                    <div style={{ padding: '12px 16px', background: 'var(--red-lt)', border: '1px solid #fca5a5', borderRadius: 'var(--r-m)', fontSize: 13, color: 'var(--red)' }}>
                                        Something went wrong. Email us directly at{' '}
                                        <a href="mailto:groworalabs@outlook.com" style={{ color: 'var(--red)', fontWeight: 600 }}>
                                            groworalabs@outlook.com
                                        </a>
                                    </div>
                                )}

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    style={{
                                        padding: '13px 24px',
                                        background: status === 'sending' ? 'var(--ink-3)' : 'var(--ink)',
                                        color: '#fff', border: 'none', borderRadius: 'var(--r-m)',
                                        fontSize: 15, fontWeight: 600,
                                        cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                                        transition: 'background .15s',
                                    }}
                                >
                                    {status === 'sending' ? (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}>
                                                <path d="M21 12a9 9 0 11-6.219-8.56"/>
                                            </svg>
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                            </svg>
                                            Send message
                                        </>
                                    )}
                                </button>

                            </div>
                        </form>
                    )}

                    <p style={{ marginTop: 32, fontSize: 13, color: 'var(--ink-4)', textAlign: 'center' }}>
                        Or email us directly:{' '}
                        <a href="mailto:groworalabs@outlook.com" style={{ color: 'var(--ink-3)', fontWeight: 500 }}>
                            groworalabs@outlook.com
                        </a>
                    </p>

                </div>
            </Layout>

            <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input:focus, textarea:focus { border-color: var(--green) !important; box-shadow: 0 0 0 3px rgba(5,150,105,.1); }
      `}</style>
        </>
    );
};

export default ContactPage;