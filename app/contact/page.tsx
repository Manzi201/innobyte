'use client'

import { useState } from 'react'

const SERVICES = [
  'Website Design', 'Graphic Design', 'Computer Services',
  'IT Support', 'Social Media Services', 'Data Services', 'Digital Documents', 'Other',
]

export default function ContactPage() {
  const [form, setForm]     = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate send (replace with real API / EmailJS / Supabase later)
    await new Promise((r) => setTimeout(r, 1200))
    setStatus('sent')
  }

  return (
    <div style={{ paddingTop: '68px' }}>

      {/* Header */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem', background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', color: '#7dd3fc' }}>
            Contact Us
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            GET IN TOUCH
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Tell us about your project and we&apos;ll get back to you with a free quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Info */}
          <div data-reveal="left">
            <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem' }}>
              We&apos;re Here For You
            </h2>
            {[
              { icon: '📍', title: 'Location', lines: ['Kigali, Rwanda'] },
              { icon: '📧', title: 'Email', lines: ['info@innobyte.rw'] },
              { icon: '📞', title: 'Phone / WhatsApp', lines: ['+250 780 000 000'] },
              { icon: '🕐', title: 'Working Hours', lines: ['Mon – Sat: 8am – 6pm', 'WhatsApp: 24/7'] },
            ].map((c) => (
              <div key={c.title} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', padding: '1rem', background: '#fff', borderRadius: '10px', border: '1.5px solid #e2e8f0' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, color: '#0f172a', fontSize: '0.88rem', marginBottom: '0.2rem' }}>{c.title}</div>
                  {c.lines.map((l) => <div key={l} style={{ fontSize: '0.88rem', color: '#64748b' }}>{l}</div>)}
                </div>
              </div>
            ))}

            {/* WhatsApp shortcut */}
            <a href="https://wa.me/250780000000?text=Hi INNOBYTE, I need help with..." target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: '#25d366', color: '#fff', padding: '0.9rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.88' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
            >
              <span style={{ fontSize: '1.2rem' }}>💬</span>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div data-reveal="right" style={{ background: '#fff', borderRadius: '16px', padding: '2.5rem', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
            {status === 'sent' ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#0f172a', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#64748b' }}>We&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setStatus('idle'); setForm({ name:'',email:'',phone:'',service:'',message:'' }) }}
                  style={{ marginTop: '1.5rem', background: 'none', border: '1.5px solid #0ea5e9', color: '#0ea5e9', padding: '0.6rem 1.5rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#0f172a', fontSize: '1.15rem', marginBottom: '0.25rem' }}>Request a Free Quote</h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-input" />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>Phone / WhatsApp</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+250 ..." className="form-input" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>Service Needed *</label>
                  <select name="service" value={form.service} onChange={handleChange} required className="form-input" style={{ cursor: 'pointer' }}>
                    <option value="">Select a service…</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#374151', marginBottom: '0.35rem' }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Describe your project or question…" className="form-input" style={{ resize: 'vertical', fontFamily: 'inherit' }} />
                </div>

                <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', justifyContent: 'center', padding: '0.9rem', fontSize: '0.95rem', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'wait' : 'pointer' }}>
                  {status === 'sending' ? 'Sending…' : 'Send Message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
