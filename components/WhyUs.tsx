'use client'

const REASONS = [
  { title: 'Results-Focused', desc: 'Every project is built around your goals. We measure success by the impact we create for your business.' },
  { title: 'Fast Turnaround', desc: 'We respect your time. Projects are delivered on schedule with consistent updates throughout.' },
  { title: 'Fair Pricing',    desc: 'Professional quality at transparent prices. No hidden fees, no vague quotes.' },
  { title: 'Ongoing Support', desc: 'We stay with you after delivery — for updates, questions, or new ideas.' },
  { title: 'Confidential',    desc: 'Your data and projects are handled with complete professionalism and confidentiality.' },
  { title: 'Local Expertise', desc: 'Based in Rwanda, we understand the local market while delivering globally competitive work.' },
]

export default function WhyUs() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Top row */}
        <div className="whyus-top">
          <div data-reveal="left">
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
              Why Choose Us
            </div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
              The INNOBYTE<br />Difference
            </h2>
          </div>
          <div data-reveal="right">
            <p style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, marginBottom: '2rem' }}>
              We combine technical precision with creative thinking to build digital solutions that make your business stand out — and keep growing.
            </p>
            <a href="/contact" className="btn-gold">Start a Project</a>
          </div>
        </div>

        {/* Reasons */}
        <div className="whyus-grid">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className="whyus-cell"
              data-reveal
              style={{ transitionDelay: `${i * 0.07}s` }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.25rem' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <h4 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                {r.title}
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
