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
  const pathname  = usePathname()
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [isMobile, setIsMobile]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    onScroll(); onResize()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #e2e8f0' : 'none',
        transition: 'background 0.3s, border 0.3s',
        height: '68px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Logo scrolled={scrolled} />
          </Link>

          {/* Desktop links */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              {links.map((l) => (
                <Link key={l.href} href={l.href}
                  style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', fontWeight: 500,
                    letterSpacing: '0.07em', textTransform: 'uppercase',
                    color: isActive(l.href) ? '#0ea5e9' : (scrolled ? '#0f172a' : '#fff'),
                    textDecoration: 'none', padding: '0.35rem 0.75rem',
                    borderBottom: isActive(l.href) ? '2px solid #0ea5e9' : '2px solid transparent',
                    transition: 'color 0.15s',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/contact" className="btn-primary" style={{ marginLeft: '0.75rem', padding: '0.55rem 1.5rem', fontSize: '0.82rem' }}>
                Get Quote
              </Link>
            </nav>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
            >
              {[0,1,2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: '22px', height: '2px', borderRadius: '1px',
                  backgroundColor: scrolled ? '#0f172a' : '#fff',
                  transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(5px,5px)' : i===2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none') : 'none',
                  opacity: menuOpen && i===1 ? 0 : 1,
                  transition: 'transform 0.22s, opacity 0.22s',
                }} />
              ))}
            </button>
          )}
        </div>
      </header>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{ position: 'fixed', top: '68px', left: 0, right: 0, zIndex: 99, backgroundColor: '#fff', borderBottom: '2px solid #e2e8f0', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', padding: '1rem 1.5rem 1.5rem' }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: isActive(l.href) ? 700 : 500, textTransform: 'uppercase', letterSpacing: '0.06em', color: isActive(l.href) ? '#0ea5e9' : '#0f172a', textDecoration: 'none', padding: '0.75rem 0', borderBottom: '1px solid #f1f5f9' }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
            Get Free Quote
          </Link>
        </div>
      )}
    </>
  )
}
