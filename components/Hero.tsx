'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const TYPED_WORDS = ['Websites', 'Logos & Brands', 'IT Solutions', 'Social Media', 'Digital Products']

/* ── Floating code tokens that drift upward ── */
const CODE_TOKENS = [
  { text: '<html>',        x: 8,  y: 20, size: 11, delay: 0 },
  { text: 'function()',    x: 82, y: 35, size: 10, delay: 1.2 },
  { text: '01001011',     x: 15, y: 65, size: 9,  delay: 0.6 },
  { text: 'npm install',  x: 72, y: 72, size: 10, delay: 1.8 },
  { text: '{}',           x: 45, y: 15, size: 14, delay: 0.4 },
  { text: '</div>',       x: 90, y: 55, size: 10, delay: 2.1 },
  { text: '10110100',     x: 60, y: 82, size: 9,  delay: 0.9 },
  { text: 'const x =',    x: 3,  y: 82, size: 9,  delay: 1.5 },
  { text: '0xFF',         x: 30, y: 88, size: 10, delay: 0.3 },
  { text: '→ 200 OK',     x: 55, y: 42, size: 9,  delay: 1.1 },
]

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting]   = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex]
    let timeout: ReturnType<typeof setTimeout>
    if (!deleting && charIndex <= word.length) {
      timeout = setTimeout(() => { setDisplayed(word.slice(0, charIndex)); setCharIndex(c => c + 1) }, 75)
    } else if (!deleting && charIndex > word.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setCharIndex(c => c - 1); setDisplayed(word.slice(0, charIndex - 1)) }, 40)
    } else {
      setDeleting(false)
      setWordIndex(w => (w + 1) % TYPED_WORDS.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex])

  return (
    <section style={{
      position: 'relative', minHeight: '100svh',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      overflow: 'hidden', background: '#0a0a0a',
    }}>

      {/* ── Tech: dot grid ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
      }} />

      {/* ── Tech: circuit SVG top-right ── */}
      <svg style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(200px,35vw,480px)', opacity: 0.07, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 480 320" fill="none">
        <path d="M480 0 L320 0 L280 40 L280 80 L240 80 L200 120 L200 160 L160 160 L120 200 L80 200 L40 240 L0 240" stroke="white" strokeWidth="1.5"/>
        <circle cx="280" cy="80"  r="4" fill="white"/>
        <circle cx="200" cy="160" r="4" fill="white"/>
        <circle cx="120" cy="200" r="4" fill="white"/>
        <path d="M280 80 L340 80 L380 40 L480 40"   stroke="white" strokeWidth="1"/>
        <path d="M200 160 L200 240 L280 240"         stroke="white" strokeWidth="1"/>
        <path d="M120 200 L120 280 L240 280 L280 240" stroke="white" strokeWidth="1"/>
        <rect x="340" y="60"  width="16" height="16" rx="2" fill="white" opacity="0.5"/>
        <rect x="240" y="220" width="16" height="16" rx="2" fill="white" opacity="0.5"/>
        <circle cx="440" cy="40" r="6" stroke="white" strokeWidth="1.5"/>
        <circle cx="160" cy="280" r="6" stroke="white" strokeWidth="1.5"/>
      </svg>

      {/* ── Tech: circuit SVG bottom-left ── */}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, width: 'clamp(160px,25vw,320px)', opacity: 0.06, zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 320 220" fill="none">
        <path d="M0 220 L80 220 L120 180 L120 140 L160 100 L200 100 L240 60 L320 60" stroke="white" strokeWidth="1.5"/>
        <circle cx="120" cy="140" r="4" fill="white"/>
        <circle cx="200" cy="100" r="4" fill="white"/>
        <path d="M120 140 L60 140 L20 180" stroke="white" strokeWidth="1"/>
        <rect x="100" y="120" width="14" height="14" rx="2" fill="white" opacity="0.4"/>
        <rect x="186" y="86"  width="14" height="14" rx="2" fill="white" opacity="0.4"/>
      </svg>

      {/* ── Tech: floating code tokens ── */}
      {CODE_TOKENS.map((t, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${t.x}%`, top: `${t.y}%`,
          fontFamily: '"Courier New", monospace',
          fontSize: `${t.size}px`,
          color: 'rgba(255,255,255,0.12)',
          fontWeight: 400,
          pointerEvents: 'none',
          zIndex: 0,
          animation: `floatUp 8s ease-in-out ${t.delay}s infinite`,
          letterSpacing: '0.05em',
        }}>
          {t.text}
        </div>
      ))}

      {/* ── Tech: scan line ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1280px', margin: '0 auto', width: '100%',
        padding: 'clamp(100px, 14vw, 160px) clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 6vw, 5rem)',
      }}>

        {/* Eyebrow */}
        <div className="animate-fade-up" style={{
          animationDelay: '0.1s',
          fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}>
          <span style={{ width: '36px', height: '1px', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
          Digital Services — Rwanda &amp; Beyond
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up" style={{
          animationDelay: '0.2s',
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.6rem, 9vw, 7rem)',
          fontWeight: 800, color: '#fff', lineHeight: 0.95, letterSpacing: '-0.04em',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}>
          We Build<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.5)' }}>
            {displayed || '\u00A0'}
          </span>
          <span style={{ animation: 'blink 0.75s step-end infinite', borderRight: '2px solid rgba(255,255,255,0.6)', marginLeft: '2px' }} />
        </h1>

        {/* Bottom row */}
        <div className="hero-bottom animate-fade-up" style={{ animationDelay: '0.35s' }}>
          <p style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)', color: 'rgba(255,255,255,0.5)', maxWidth: '380px', lineHeight: 1.75 }}>
            INNOBYTE delivers professional IT and digital services — from websites and branding to computer support and data management.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-gold">Start a Project</Link>
            <Link href="/#services" className="btn-outline">View Services</Link>
          </div>
        </div>

        {/* Mini stats */}
        <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.55s' }}>
          {[{ n: '50+', l: 'Projects' }, { n: '30+', l: 'Clients' }, { n: '7', l: 'Services' }].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>{s.n}</div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginTop: '0.1rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll line */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
      </div>
    </section>
  )
}
