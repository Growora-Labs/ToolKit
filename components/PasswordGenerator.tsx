import { useEffect, CSSProperties } from 'react';
import { usePasswordGenerator } from './usePasswordGenerator';
import type { CheckboxOption } from '../types';

/* ── SVG icons ─────────────────────────────────────────── */

const IcoCheck = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IcoCopy = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>
);

const IcoRefresh = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10"/>
    <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
  </svg>
);

const IcoDone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const IcoShield = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const IcoBolt = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

/* ── Data ───────────────────────────────────────────────── */

const CB_OPTS: CheckboxOption[] = [
  { key: 'uppercase', label: 'Uppercase', example: 'A–Z'  },
  { key: 'lowercase', label: 'Lowercase', example: 'a–z'  },
  { key: 'numbers',   label: 'Numbers',   example: '0–9'  },
  { key: 'symbols',   label: 'Symbols',   example: '!@#$' },
];

/* ── Component ─────────────────────────────────────────── */

export default function PasswordGenerator() {
  const { password, options, strength, copied, generate, copy, toggleOption, setLength } = usePasswordGenerator();

  useEffect(() => { generate(); }, []); // eslint-disable-line

  const fillPct = ((options.length - 8) / (64 - 8)) * 100;

  return (
    <div>

      {/* Output */}
      <div className={`pw-box${password ? ' filled' : ''}`}>
        <span className={`pw-text${password ? '' : ' empty'}`}>
          {password || 'Your password will appear here'}
        </span>
        <div style={{ display: 'flex', gap: 5 }}>
          <button className="btn-icon" onClick={generate} title="Regenerate" aria-label="Regenerate">
            <IcoRefresh />
          </button>
          <button
            className={`btn-icon${copied ? ' copied' : ''}`}
            onClick={copy}
            title={copied ? 'Copied!' : 'Copy'}
            aria-label={copied ? 'Copied' : 'Copy to clipboard'}
          >
            {copied ? <IcoDone /> : <IcoCopy />}
          </button>
        </div>
      </div>

      {/* Strength */}
      <div style={{ marginTop: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
          <span style={{ fontSize: 12, color: 'var(--ink-3)', fontWeight: 500 }}>Password strength</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: strength.color || 'var(--ink-4)' }}>
            {strength.label || '—'}
          </span>
        </div>
        <div className="str-track">
          <div className="str-fill" style={{ width: `${strength.score}%`, background: strength.color || 'var(--border)' }} />
        </div>
      </div>

      <div className="rule" />

      {/* Length */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 11 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>Password length</span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 12, fontWeight: 600,
            color: 'var(--green)',
            background: 'var(--green-lt)',
            padding: '2px 9px', borderRadius: 99,
          }}>
            {options.length}
          </span>
        </div>
        <input
          type="range" min={8} max={64} value={options.length}
          onChange={e => setLength(e.target.value)}
          className="range"
          aria-label="Password length"
          style={{ '--fill': `${fillPct}%` } as CSSProperties}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 5 }}>
          <span style={{ fontSize: 11, color: 'var(--ink-4)' }}>8 chars</span>
          <span style={{ fontSize: 11, color: 'var(--ink-4)' }}>64 chars</span>
        </div>
      </div>

      {/* Character types */}
      <div style={{ marginTop: 16 }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', marginBottom: 9 }}>Include characters</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7 }}>
          {CB_OPTS.map(({ key, label, example }) => {
            const isOn = options[key] as boolean;
            return (
              <label key={key} className={`tog${isOn ? ' on' : ''}`} onClick={() => toggleOption(key)}>
                <div className="tog-box">{isOn && <IcoCheck />}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)', lineHeight: 1 }}>{label}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', fontFamily: 'JetBrains Mono, monospace', marginTop: 3 }}>
                    {example}
                  </div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Generate */}
      <div style={{ marginTop: 18 }}>
        <button className="btn-main" onClick={generate}>
          <IcoBolt />
          Generate password
        </button>
      </div>

      {/* Privacy note */}
      <div style={{ marginTop: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, fontSize: 12, color: 'var(--ink-4)' }}>
        <IcoShield />
        Generated locally · never sent to a server
      </div>

    </div>
  );
}
