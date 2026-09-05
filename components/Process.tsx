'use client'

const STEPS = [
  { num: '01', title: 'Tell us what you need', desc: 'Reach out via WhatsApp, email or our contact form. Describe your project — we listen carefully.', cmd: '$ contact --init' },
  { num: '02', title: 'We plan & quote',        desc: 'We review your brief and send a clear, honest quote with timeline. No hidden costs, no ambiguity.',  cmd: '$ plan --scope' },
  { num: '03', title: 'We build it',            desc: 'Our team gets to work. You receive updates at every stage and can request revisions freely.',         cmd: '$ build --deploy' },
  { num: '04', title: 'Delivery & support',     desc: 'Your finished project is handed over. We stay available for any questions, fixes or follow-ups.',    cmd: '$ ship --live ✓' },
]

export default function Process() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#fafaf8', position: 'relative', overflow: 'hidden' }}>

      {/* ── Tech: diagonal grid ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035, pointerEvents: 'none', zIndex: 0 }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 500" fill="none">
        {/* Diagonal lines */}
        {[-200,-100,0,100,200,300,400,500,600,700,800,900].map((x, i) => (
          <line key={i} x1={x} y1="0" x2={x + 500} y2="500" stroke="#0a0a0a" strokeWidth="1"/>
        ))}
        {/* Cross-diagonal */}
        {[-200,-100,0,100,200,300,400,500,600,700,800,900].map((x, i) => (
          <line key={i} x1={x + 500} y1="0" x2={x} y2="500" stroke="#0a0a0a" strokeWidth="0.5"/>
        ))}
      </svg>

      {/* ── Tech: terminal window mockup top-right ── */}
      <div style={{
        position: 'absolute', top: '2.5rem', right: '2.5rem',
        width: '160px', background: 'rgba(0,0,0,0.04)',
        borderRadius: '8px', border: '1px solid rgba(0,0,0,0.07)',
        padding: '0.6rem 0.75rem', pointerEvents: 'none', zIndex: 0,
      }} className="hide-mobile">
        <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
          {['#ff5f57','#febc2e','#28c840'].map((c, i) => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: c, opacity: 0.4 }} />
          ))}
        </div>
        {['> init project', '> planning...', '> building...', '> deployed ✓'].map((line, i) => (
          <div key={i} style={{ fontFamily: '"Courier New", monospace', fontSize: '8px', color: '#6b6b6b', lineHeight: 1.8, opacity: i === 3 ? 1 : 0.6 }}>
            {line}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div data-reveal className="process-header" style={{ marginBottom: '4rem', borderBottom: '1px solid #e8e8e8', paddingBottom: '3rem' }}>
          <div>
            <div className="eyebrow">How It Works</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.04em', lineHeight: 1 }}>
              Four Simple Steps
            </h2>
          </div>
          <a href="/contact" className="btn-primary">Get Started</a>
        </div>

        {/* Steps */}
        <div className="process-grid">
          {STEPS.map((step, i) => (
            <div key={step.num} className="process-cell" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Terminal command */}
              <div style={{ fontFamily: '"Courier New", monospace', fontSize: '0.68rem', color: '#22c55e', marginBottom: '1rem', letterSpacing: '0.03em' }}>
                {step.cmd}
              </div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9b9b9b', marginBottom: '1rem' }}>
                {step.num}
              </div>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.05rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.2 }}>
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
