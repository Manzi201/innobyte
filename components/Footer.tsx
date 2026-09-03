import Link from 'next/link'
import Logo from './Logo'

const SERVICES = [
  'Website Design', 'Graphic Design', 'Computer Services',
  'IT Support', 'Social Media Services', 'Data Services', 'Digital Documents',
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1rem' }}><Logo scrolled={false} /></div>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Professional IT & digital services for businesses and individuals. Based in Rwanda, serving globally.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {[
                { label: 'WhatsApp', icon: '💬', href: 'https://wa.me/250780000000' },
                { label: 'Facebook', icon: '📘', href: '#' },
                { label: 'Instagram', icon: '📷', href: '#' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', textDecoration: 'none', transition: 'border-color 0.15s, background 0.15s' }}
                  onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#0ea5e9'; el.style.background = 'rgba(14,165,233,0.12)' }}
                  onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(255,255,255,0.12)'; el.style.background = 'transparent' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {SERVICES.map((s) => (
                <li key={s}>
                  <Link href="/#services" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0ea5e9' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[{ label: 'About Us', href: '/about' }, { label: 'Contact', href: '/contact' }, { label: 'Privacy Policy', href: '/privacy' }].map((l) => (
                <li key={l.label}>
                  <Link href={l.href} style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#0ea5e9' }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.55)' }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: '📍', text: 'Kigali, Rwanda' },
                { icon: '📧', text: 'info@innobyte.rw' },
                { icon: '📞', text: '+250 780 000 000' },
                { icon: '💬', text: 'WhatsApp Available' },
              ].map((c) => (
                <div key={c.text} style={{ display: 'flex', gap: '0.6rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}>
                  <span>{c.icon}</span>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.82rem' }}>
            © {new Date().getFullYear()} INNOBYTE. All rights reserved.
          </span>
          <span style={{ fontSize: '0.82rem' }}>
            Built with ❤️ in Rwanda
          </span>
        </div>
      </div>
    </footer>
  )
}
