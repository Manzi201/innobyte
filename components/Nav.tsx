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

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    const onResize = () => setIsMobile(window.innerWidth < 768)
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
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '72px',
        backgroundColor: scrolled ? 'rgba(250,250,248,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #e8e8e8' : 'none',
        transition: 'background 0.4s, border 0.4s',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo scrolled={scrolled} />
          </Link>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontFamily: 'Syne, sans-serif',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: isActive(l.href)
                      ? '#0a0a0a'
                      : scrolled ? '#0a0a0a' : 'rgba(255,255,255,0.85)',
                    textDecoration: 'none',
                    position: 'relative',
                    paddingBottom: '2px',
                    borderBottom: isActive(l.href)
                      ? scrolled ? '1px solid #0a0a0a' : '1px solid rgba(255,255,255,0.7)'
                      : '1px solid transparent',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: scrolled ? '#0a0a0a' : '#fff',
                  textDecoration: 'none',
                  padding: '0.6rem 1.6rem',
                  border: scrolled ? '1.5px solid #0a0a0a' : '1.5px solid rgba(255,255,255,0.5)',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = scrolled ? '#0a0a0a' : 'rgba(255,255,255,0.12)'
                  if (scrolled) el.style.color = '#fff'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'transparent'
                  el.style.color = scrolled ? '#0a0a0a' : '#fff'
                }}
              >
                Get Quote
              </Link>
            </nav>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: '22px', height: '1.5px',
                  backgroundColor: scrolled ? '#0a0a0a' : '#fff',
                  transform: menuOpen
                    ? (i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                      : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none')
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transition: 'transform 0.22s, opacity 0.22s',
                }} />
              ))}
            </button>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 99,
          backgroundColor: '#fafaf8',
          borderBottom: '1px solid #e8e8e8',
          padding: '2rem 2.5rem 2.5rem',
        }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#0a0a0a',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid #e8e8e8',
                letterSpacing: '-0.01em',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }}
          >
            Get Free Quote
          </Link>
        </div>
      )}
    </>
  )
}
