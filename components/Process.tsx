'use client'

const STEPS = [
  {
    num: '01',
    title: 'Tell us what you need',
    desc: 'Reach out via WhatsApp, email or our contact form. Describe your project — we listen carefully.',
  },
  {
    num: '02',
    title: 'We plan & quote',
    desc: 'We review your brief and send a clear, honest quote with timeline. No hidden costs, no ambiguity.',
  },
  {
    num: '03',
    title: 'We build it',
    desc: 'Our team gets to work. You receive updates at every stage and can request revisions freely.',
  },
  {
    num: '04',
    title: 'Delivery & support',
    desc: 'Your finished project is handed over. We stay available for any questions, fixes or follow-ups.',
  },
]

export default function Process() {
  return (
    <section style={{ backgroundColor: '#fafaf8', padding: '8rem 2.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div data-reveal style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '5rem', borderBottom: '1px solid #e8e8e8', paddingBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div className="eyebrow">How It Works</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.04em', lineHeight: 1 }}>
              Four Simple Steps
            </h2>
          </div>
          <a href="/contact" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0', borderTop: '1px solid #e8e8e8' }}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              data-reveal
              style={{
                transitionDelay: `${i * 0.1}s`,
                padding: '3rem 2.5rem 3rem 0',
                borderRight: i < STEPS.length - 1 ? '1px solid #e8e8e8' : 'none',
                paddingLeft: i > 0 ? '2.5rem' : '0',
              }}
            >
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#9b9b9b',
                marginBottom: '2rem',
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: '#0a0a0a',
                letterSpacing: '-0.02em',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#6b6b6b', lineHeight: 1.75 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
