'use client'

import Link from 'next/link'
import Logo from './Logo'

const SERVICES = [
  'Website Design',
  'Graphic Design',
  'Computer Services',
  'IT Support',
  'Social Media',
  'Data Services',
  'Digital Documents',
]

export default function Footer() {
  return (
    <footer style={{ position: 'relative', backgroundColor: '#0f0f0e', fontFamily: 'Inter, sans-serif' }}>

      {/* ── Curved bend at the top ── */}
      <div style={{ position: 'relative', lineHeight: 0, overflow: 'hidden', background: '#0f0f0e' }}>
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          {/*
            Convex arch: the background of the previous section fills the arch shape on top.
            Since CtaBanner is also dark (#0a0a0a), we draw a raised bump from the footer
            color to create the bend illusion using a contrasting inner curve.
          */}
          {/* Dark footer bg fills bottom */}
          <rect width="1440" height="80" fill="#0f0f0e" />
          {/* Raised arch bump — lighter tint so the curve is visible */}
          <path
            d="M0,80 C360,-20 1080,-20 1440,80 Z"
            fill="rgba(255,255,255,0.04)"
          />
          {/* Thin highlight rim on the arch edge */}
          <path
            d="M0,80 C360,-20 1080,-20 1440,80"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* ── Footer body ── */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 2.5rem 2.5rem' }}>

        {/* Top: logo + tagline wide */}
        <div style={{
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          paddingBottom: '3rem',
          marginBottom: '3rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <Logo scrolled={false} />
            <p style={{
              marginTop: '1rem',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.35)',
              lineHeight: 1.8,
              maxWidth: '280px',
            }}>
              Professional IT & digital services for businesses and individuals. Based in Rwanda, serving globally.
            </p>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: '0.6rem' }}>
            {[
              { label: 'WA',  href: 'https://wa.me/250780000000' },
              { label: 'FB',  href: '#' },
              { label: 'IG',  href: '#' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: 'rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  padding: '0.5rem 0.85rem',
                  borderRadius: '100px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transition: 'border-color 0.15s, color 0.15s, background 0.15s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.4)'
                  el.style.color = '#fff'
                  el.style.background = 'rgba(255,255,255,0.06)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.borderColor = 'rgba(255,255,255,0.1)'
                  el.style.color = 'rgba(255,255,255,0.4)'
                  el.style.background = 'transparent'
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Links grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3.5rem',
        }}>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {[
                { label: 'About Us',       href: '/about' },
                { label: 'Contact',        href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { text: 'Kigali, Rwanda',    href: null },
                { text: 'info@innobyte.rw',  href: 'mailto:info@innobyte.rw' },
                { text: '+250 780 000 000',   href: 'tel:+250780000000' },
                { text: 'WhatsApp Available', href: 'https://wa.me/250780000000' },
              ].map((c) => (
                c.href ? (
                  <a
                    key={c.text}
                    href={c.href}
                    style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >
                    {c.text}
                  </a>
                ) : (
                  <span key={c.text} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                    {c.text}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.68rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Start a Project
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Get a free quote within 24 hours. No commitment required.
            </p>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#0f0f0e',
                textDecoration: 'none',
                padding: '0.65rem 1.4rem',
                borderRadius: '100px',
                background: '#fff',
                transition: 'opacity 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.85'
                ;(e.currentTarget as HTMLElement).style.transform = 'scale(0.97)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1'
                ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
              }}
            >
              Get Quote →
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} INNOBYTE. All rights reserved.
          </span>
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
            Made in Rwanda
          </span>
        </div>
      </div>
    </footer>
  )
}
