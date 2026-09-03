'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
]

const DARK_HERO_PAGES = ['/', '/about', '/contact']

export default function Nav() {
  const pathname  = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname)
  const light = scrolled || !hasDarkHero

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onResize = () => setIsMobile(window.innerWidth < 900)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    onScroll(); onResize()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.replace('/#', '/'))

  return (
    <>
      {/* ── Outer wrapper: positions the pill in viewport ── */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1.5rem',
        pointerEvents: 'none',
      }}>
        {/* ── Pill shell ── */}
        <header style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1100px',
          height: '58px',
          borderRadius: '100px',
          backgroundColor: light
            ? 'rgba(250,250,248,0.95)'
            : 'rgba(10,10,10,0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: light
            ? '1px solid rgba(0,0,0,0.1)'
            : '1px solid rgba(255,255,255,0.1)',
          boxShadow: light
            ? '0 4px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset'
            : '0 4px 32px rgba(0,0,0,0.4)',
          transition: 'background 0.35s, border 0.35s, box-shadow 0.35s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 1.5rem',
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <Logo scrolled={light} />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: isActive(l.href)
                      ? (light ? '#0a0a0a' : '#fff')
                      : (light ? '#6b6b6b' : 'rgba(255,255,255,0.65)'),
                    textDecoration: 'none',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '100px',
                    background: isActive(l.href)
                      ? (light ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.12)')
                      : 'transparent',
                    transition: 'color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive(l.href)) {
                      (e.currentTarget as HTMLElement).style.background = light
                        ? 'rgba(0,0,0,0.05)'
                        : 'rgba(255,255,255,0.08)'
                      ;(e.currentTarget as HTMLElement).style.color = light ? '#0a0a0a' : '#fff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(l.href)) {
                      (e.currentTarget as HTMLElement).style.background = 'transparent'
                      ;(e.currentTarget as HTMLElement).style.color = light ? '#6b6b6b' : 'rgba(255,255,255,0.65)'
                    }
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          )}

          {/* CTA + mobile toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            {!isMobile && (
              <Link
                href="/contact"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: light ? '#fff' : '#0a0a0a',
                  textDecoration: 'none',
                  padding: '0.5rem 1.4rem',
                  borderRadius: '100px',
                  background: light ? '#0a0a0a' : '#fff',
                  transition: 'opacity 0.2s, transform 0.15s',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '0.8'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(0.97)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = '1'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                }}
              >
                Get Quote
              </Link>
            )}

            {isMobile && (
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                style={{
                  background: light ? 'rgba(0,0,0,0.07)' : 'rgba(255,255,255,0.12)',
                  border: 'none',
                  cursor: 'pointer',
                  width: '38px',
                  height: '38px',
                  borderRadius: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{
                    display: 'block',
                    width: '16px',
                    height: '1.5px',
                    backgroundColor: light ? '#0a0a0a' : '#fff',
                    transform: menuOpen
                      ? (i === 0 ? 'rotate(45deg) translate(3.5px, 3.5px)'
                        : i === 2 ? 'rotate(-45deg) translate(3.5px, -3.5px)' : 'none')
                      : 'none',
                    opacity: menuOpen && i === 1 ? 0 : 1,
                    transition: 'transform 0.22s, opacity 0.22s',
                  }} />
                ))}
              </button>
            )}
          </div>
        </header>
      </div>

      {/* Mobile dropdown — also pill-shaped */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: '88px',
          left: '1.5rem',
          right: '1.5rem',
          zIndex: 99,
          backgroundColor: light ? 'rgba(250,250,248,0.98)' : 'rgba(18,18,18,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: light ? '1px solid rgba(0,0,0,0.1)' : '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
          padding: '1rem',
          overflow: 'hidden',
        }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'Syne, sans-serif',
                fontSize: '1rem',
                fontWeight: 700,
                color: isActive(l.href)
                  ? (light ? '#0a0a0a' : '#fff')
                  : (light ? '#6b6b6b' : 'rgba(255,255,255,0.6)'),
                textDecoration: 'none',
                padding: '0.85rem 1rem',
                borderRadius: '12px',
                background: isActive(l.href)
                  ? (light ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.08)')
                  : 'transparent',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                transition: 'background 0.15s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ padding: '0.5rem 0.5rem 0.25rem', marginTop: '0.25rem', borderTop: `1px solid ${light ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)'}` }}>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: light ? '#fff' : '#0a0a0a',
                textDecoration: 'none',
                padding: '0.85rem',
                borderRadius: '12px',
                background: light ? '#0a0a0a' : '#fff',
                textAlign: 'center',
              }}
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
