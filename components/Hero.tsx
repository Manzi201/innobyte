'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const TYPED_WORDS = [
  'Websites',
  'Logos & Designs',
  'IT Support',
  'Social Media',
  'Data Services',
]

export default function Hero() {
  const [wordIndex, setWordIndex]     = useState(0)
  const [displayed, setDisplayed]     = useState('')
  const [deleting, setDeleting]       = useState(false)
  const [charIndex, setCharIndex]     = useState(0)

  useEffect(() => {
    const word = TYPED_WORDS[wordIndex]
    let timeout: NodeJS.Timeout

    if (!deleting && charIndex <= word.length) {
      timeout = setTimeout(() => {
        setDisplayed(word.slice(0, charIndex))
        setCharIndex((c) => c + 1)
      }, 70)
    } else if (!deleting && charIndex > word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((c) => c - 1)
        setDisplayed(word.slice(0, charIndex - 1))
      }, 38)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex((w) => (w + 1) % TYPED_WORDS.length)
    }
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 12s ease infinite',
    }}>
      {/* Grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(14,165,233,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14,165,233,0.07) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', top: '15%', right: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, transparent 70%)', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', zIndex: 0 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', paddingTop: '68px', width: '100%' }}>
        <div style={{ maxWidth: '720px' }}>

          {/* Tag */}
          <div className="animate-fade-up" style={{ animationDelay: '0.1s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', color: '#7dd3fc', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 1rem', borderRadius: '100px', marginBottom: '1.5rem' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0ea5e9', animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
            Digital Services · Rwanda & Beyond
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up" style={{ animationDelay: '0.2s', fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(2.4rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            We Build Your<br />
            <span style={{ color: '#0ea5e9' }}>
              {displayed}
              <span style={{ animation: 'blink 0.7s step-end infinite', borderRight: '3px solid #0ea5e9', marginLeft: '2px' }} />
            </span>
          </h1>

          {/* Sub */}
          <p className="animate-fade-up" style={{ animationDelay: '0.3s', fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: '560px', lineHeight: 1.7 }}>
            INNOBYTE provides professional IT and digital services — from stunning websites to graphic design, computer support, social media and more.
          </p>

          {/* Buttons */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: '0.95rem', padding: '0.9rem 2.2rem' }}>
              Get Free Quote →
            </Link>
            <Link href="/#services" className="btn-outline" style={{ fontSize: '0.95rem', padding: '0.9rem 2.2rem', borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
              Our Services
            </Link>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up" style={{ animationDelay: '0.55s', display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            {[
              { icon: '⚡', label: 'Fast Delivery' },
              { icon: '✅', label: 'Quality Work' },
              { icon: '💬', label: '24/7 Support' },
            ].map((b) => (
              <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 500 }}>
                <span style={{ fontSize: '1rem' }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', background: 'linear-gradient(to bottom, transparent, #fff)', zIndex: 1 }} />
    </section>
  )
}
