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

// Pages that start with a dark hero — nav can be transparent + white text
const DARK_HERO_PAGES = ['/', '/about', '/contact']

export default function Nav() {
  const pathname  = usePathname()
  const [scrolled, setScrolled]  = useState(false)
  const [menuOpen, setMenuOpen]  = useState(false)
  const [isMobile, setIsMobile]  = useState(false)

  const hasDarkHero = DARK_HERO_PAGES.includes(pathname)
  // Nav is "light mode" when scrolled OR when the page doesn't have a dark hero
  const light = scrolled || !hasDarkHero

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

  const linkColor = (href: string) => {
    if (isActive(href)) return light ? '#0a0a0a' : '#fff'
    return light ? '#3d3d3d' : 'rgba(255,255,255,0.75)'
  }

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '72px',
        backgroundColor: light ? 'rgba(250,250,248,0.97)' : 'transparent',
        backdropFilter: light ? 'blur(16px)' : 'none',
        borderBottom: light ? '1px solid #e8e8e8' : 'none',
        transition: 'background 0.35s, border 0.35s, backdrop-filter 0.35s',
      }}>
        <div style={{
          maxWidth: '1280px', margin: '0 auto', padding: '0 2.5rem',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo scrolled={light} />
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
                    color: linkColor(l.href),
                    textDecoration: 'none',
                    paddingBottom: '2px',
                    borderBottom: isActive(l.href)
                      ? `1px solid ${light ? '#0a0a0a' : 'rgba(255,255,255,0.7)'}`
                      : '1px solid transparent',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                >
                  {l.label}
                </Link>
              ))}

              {/* CTA button */}
              <Link
                href="/contact"
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: light ? '#0a0a0a' : '#fff',
                  textDecoration: 'none',
                  padding: '0.55rem 1.5rem',
                  border: light ? '1.5px solid #0a0a0a' : '1.5px solid rgba(255,255,255,0.5)',
                  transition: 'background 0.2s, color 0.2s, border-color 0.2s',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  if (light) {
                    el.style.background = '#0a0a0a'
                    el.style.color = '#fff'
                  } else {
                    el.style.background = 'rgba(255,255,255,0.1)'
                    el.style.borderColor = 'rgba(255,255,255,0.8)'
                  }
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.background = 'transparent'
                  el.style.color = light ? '#0a0a0a' : '#fff'
                  el.style.borderColor = light ? '#0a0a0a' : 'rgba(255,255,255,0.5)'
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
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block',
                  width: '22px',
                  height: '1.5px',
                  backgroundColor: light ? '#0a0a0a' : '#fff',
                  transform: menuOpen
                    ? (i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                      : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none')
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transition: 'transform 0.22s, opacity 0.22s, background-color 0.35s',
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
                color: isActive(l.href) ? '#0a0a0a' : '#3d3d3d',
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
