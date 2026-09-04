'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const TYPED_WORDS = [
  'Websites',
  'Logos & Brands',
  'IT Solutions',
  'Social Media',
  'Digital Products',
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
      position: 'relative',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      overflow: 'hidden',
      background: '#0a0a0a',
    }}>

      {/* Background "IB" */}
      <div style={{
        position: 'absolute', top: '50%', right: '-2rem',
        transform: 'translateY(-50%)',
        fontFamily: 'Syne, sans-serif',
        fontSize: 'clamp(140px, 28vw, 420px)',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.03)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '-0.05em', zIndex: 0,
      }}>IB</div>

      {/* Horizontal rules */}
      {[...Array(8)].map((_, i) => (
        <div key={i} style={{
          position: 'absolute', top: `${(i + 1) * 12}%`,
          left: 0, right: 0, height: '1px',
          background: 'rgba(255,255,255,0.03)', zIndex: 0,
        }} />
      ))}

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1280px', margin: '0 auto',
        width: '100%',
        padding: 'clamp(100px, 14vw, 160px) clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 6vw, 5rem)',
      }}>

        {/* Eyebrow */}
        <div className="animate-fade-up" style={{
          animationDelay: '0.1s',
          fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.4)',
          display: 'flex', alignItems: 'center', gap: '1rem',
          marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}>
          <span style={{ width: '36px', height: '1px', background: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
          Digital Services — Rwanda &amp; Beyond
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up" style={{
          animationDelay: '0.2s',
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.6rem, 9vw, 7rem)',
          fontWeight: 800, color: '#fff',
          lineHeight: 0.95, letterSpacing: '-0.04em',
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
          <p style={{
            fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '380px', lineHeight: 1.75,
          }}>
            INNOBYTE delivers professional IT and digital services — from websites and branding to computer support and data management.
          </p>
          <div className="animate-fade-up" style={{
            animationDelay: '0.45s',
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
          }}>
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
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1,
      }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
      </div>
    </section>
  )
}
