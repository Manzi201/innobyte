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
    <footer style={{
      backgroundColor: '#0f0f0e',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 2.5rem 2.5rem' }}>

        {/* Main grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}>

          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <Logo scrolled={false} />
            </div>
            <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.35)', maxWidth: '240px' }}>
              Professional IT & digital services for businesses and individuals. Based in Rwanda.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem' }}>
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
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                    padding: '0.4rem 0.7rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'border-color 0.15s, color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'rgba(255,255,255,0.4)'
                    el.style.color = '#fff'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'rgba(255,255,255,0.1)'
                    el.style.color = 'rgba(255,255,255,0.35)'
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'Syne, sans-serif',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link
                    href="/#services"
                    style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)' }}
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
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'About Us',       href: '/about' },
                { label: 'Contact',        href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)' }}
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
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
              opacity: 0.9,
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {[
                { label: 'Kigali, Rwanda',     href: null },
                { label: 'info@innobyte.rw',   href: 'mailto:info@innobyte.rw' },
                { label: '+250 780 000 000',    href: 'tel:+250780000000' },
                { label: 'WhatsApp Available',  href: 'https://wa.me/250780000000' },
              ].map((c) => (
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.35)' }}
                  >
                    {c.label}
                  </a>
                ) : (
                  <span key={c.label} style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
                    {c.label}
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
            © {new Date().getFullYear()} INNOBYTE. All rights reserved.
          </span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', fontFamily: 'Inter, sans-serif' }}>
            Made in Rwanda
          </span>
        </div>
      </div>
    </footer>
  )
}
