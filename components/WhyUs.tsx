const REASONS = [
  { icon: '🎯', title: 'Results-Focused', desc: 'Every project is built with your business goals in mind. We deliver work that actually works.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'No long waits. We respect your time and deliver projects on schedule, every time.' },
  { icon: '💰', title: 'Affordable Pricing', desc: 'Professional quality at fair, transparent prices. No hidden fees, no surprises.' },
  { icon: '🤝', title: 'Dedicated Support', desc: 'We stay with you after delivery. Questions? Need updates? We\'re always here.' },
  { icon: '🔒', title: 'Reliable & Secure', desc: 'Your data and projects are handled with full confidentiality and professionalism.' },
  { icon: '🌍', title: 'Local & Global', desc: 'Based in Rwanda, serving clients locally and internationally with modern digital solutions.' },
]

export default function WhyUs() {
  return (
    <section style={{ backgroundColor: '#fff', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '4rem', alignItems: 'center' }}>

          {/* Left — text */}
          <div data-reveal="left">
            <div className="section-tag" style={{ marginBottom: '1rem' }}>
              <span>💡</span> Why Choose Us
            </div>
            <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1.2rem', lineHeight: 1.2 }}>
              The INNOBYTE<br />
              <span className="gradient-text">Difference</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.8, marginBottom: '2rem', maxWidth: '440px' }}>
              We combine technical expertise with creative thinking to deliver digital solutions that make your business stand out — and grow.
            </p>
            <a href="/contact" className="btn-primary">
              Start a Project →
            </a>
          </div>

          {/* Right — reasons grid */}
          <div data-reveal="right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {REASONS.map((r, i) => (
              <div key={r.title} data-reveal style={{ transitionDelay: `${i * 0.08}s`, background: '#f8fafc', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid #e2e8f0', transition: 'box-shadow 0.2s, border-color 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(14,165,233,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = '#0ea5e9' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0' }}
              >
                <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{r.icon}</div>
                <h4 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.3rem' }}>{r.title}</h4>
                <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
