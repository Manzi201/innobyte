'use client'

import { useState } from 'react'

const SERVICES = ['Website Design','Graphic Design','Computer Services','IT Support','Social Media Services','Data Services','Digital Documents','Other']

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div>

      {/* Hero */}
      <section style={{
        background: '#0a0a0a', position: 'relative', overflow: 'hidden',
        padding: 'clamp(7rem, 14vw, 11rem) clamp(1.25rem, 4vw, 2.5rem) clamp(4rem, 8vw, 7rem)',
      }}>
        <div style={{
          position: 'absolute', bottom: '-0.1em', right: '-0.02em',
          fontFamily: 'Syne, sans-serif', fontSize: 'clamp(60px, 18vw, 240px)',
          fontWeight: 800, color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.05em', lineHeight: 1,
          userSelect: 'none', pointerEvents: 'none',
        }}>CONTACT</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            Get In Touch
          </div>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.6rem, 9vw, 6.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.95, maxWidth: '700px' }}>
            Let&apos;s start<br />
            <span style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }}>your project.</span>
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad" style={{ backgroundColor: '#fafaf8' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="contact-grid">

            {/* Left — info */}
            <div data-reveal="left">
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9b9b9b', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <span style={{ width: '28px', height: '1px', background: '#9b9b9b' }} />Contact Details
              </div>
              <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '2.5rem' }}>
                We&apos;re here<br />for you
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'Location',         value: 'Kigali, Rwanda',              href: null },
                  { label: 'Email',            value: 'info@innobyte.rw',            href: 'mailto:info@innobyte.rw' },
                  { label: 'Phone / WhatsApp', value: '+250 780 000 000',            href: 'tel:+250780000000' },
                  { label: 'Working Hours',    value: 'Mon–Sat  8am–6pm · 24/7 WA', href: null },
                ].map(c => (
                  <div key={c.label} style={{ padding: '1.25rem 0', borderBottom: '1px solid #e8e8e8', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b0b0b0' }}>
                      {c.label}
                    </span>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 500, color: '#0a0a0a', textDecoration: 'none', transition: 'color 0.15s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#6b6b6b' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#0a0a0a' }}
                      >{c.value}</a>
                    ) : (
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', fontWeight: 500, color: '#0a0a0a' }}>{c.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <a href="https://wa.me/250780000000?text=Hi INNOBYTE, I need help with..."
                target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem', fontFamily: 'Syne, sans-serif', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid #0a0a0a', paddingBottom: '2px', transition: 'opacity 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.5' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >Chat on WhatsApp →</a>
            </div>

            {/* Right — form */}
            <div data-reveal="right">
              {status === 'sent' ? (
                <div style={{ padding: 'clamp(2rem, 5vw, 4rem) 2rem', textAlign: 'center', border: '1px solid #e8e8e8', background: '#fff' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.04em', marginBottom: '0.75rem' }}>Sent.</div>
                  <p style={{ fontSize: '0.9rem', color: '#6b6b6b', lineHeight: 1.75, marginBottom: '2rem' }}>We&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', phone: '', service: '', message: '' }) }} className="btn-primary">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9b9b9b', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                    <span style={{ width: '28px', height: '1px', background: '#9b9b9b' }} />Request a Free Quote
                  </div>

                  {/* Name + Phone */}
                  <div className="form-two-col">
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b9b9b', marginBottom: '0.5rem' }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-input" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b9b9b', marginBottom: '0.5rem' }}>WhatsApp / Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} placeholder="+250 …" className="form-input" />
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b9b9b', marginBottom: '0.5rem' }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" />
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b9b9b', marginBottom: '0.5rem' }}>Service Needed *</label>
                    <select name="service" value={form.service} onChange={handleChange} required className="form-input" style={{ cursor: 'pointer' }}>
                      <option value="">Select a service…</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div style={{ marginTop: '2rem' }}>
                    <label style={{ display: 'block', fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9b9b9b', marginBottom: '0.5rem' }}>Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Describe your project or question…" className="form-input" style={{ resize: 'vertical', fontFamily: 'inherit' }} />
                  </div>

                  <button type="submit" className="btn-primary" disabled={status === 'sending'}
                    style={{ marginTop: '2.5rem', width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.65 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
