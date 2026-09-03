const STEPS = [
  { num: '01', title: 'Tell Us What You Need', desc: 'Reach out via WhatsApp, email or our contact form. Describe your project — we listen carefully.' },
  { num: '02', title: 'We Plan & Quote', desc: 'We review your needs and send a clear, affordable quote with timeline. No hidden costs.' },
  { num: '03', title: 'We Build It', desc: 'Our team gets to work. You get updates along the way and can request changes freely.' },
  { num: '04', title: 'Delivery & Support', desc: 'We deliver your finished project and stay available for any questions, fixes or follow-ups.' },
]

export default function Process() {
  return (
    <section style={{ backgroundColor: '#f8fafc', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div data-reveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            <span>🔄</span> How It Works
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>
            Simple 4-Step Process
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', position: 'relative' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} data-reveal style={{ transitionDelay: `${i * 0.1}s`, position: 'relative' }}>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div style={{ position: 'absolute', top: '28px', left: 'calc(50% + 28px)', right: '-50%', height: '2px', background: 'linear-gradient(90deg, #0ea5e9, transparent)', zIndex: 0 }} className="hide-mobile" />
              )}

              <div style={{ background: '#fff', borderRadius: '16px', padding: '2rem 1.5rem', border: '1.5px solid #e2e8f0', position: 'relative', zIndex: 1, textAlign: 'center', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 12px 40px rgba(14,165,233,0.12)'; el.style.transform = 'translateY(-4px)' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = 'none'; el.style.transform = 'none' }}
              >
                {/* Number */}
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.2rem', fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.6rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.7 }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
