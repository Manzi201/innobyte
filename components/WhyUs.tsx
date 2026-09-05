'use client'

const REASONS = [
  { title: 'Results-Focused', desc: 'Every project is built around your goals. We measure success by the impact we create for your business.',  tag: '<goal />' },
  { title: 'Fast Turnaround', desc: 'We respect your time. Projects are delivered on schedule with consistent updates throughout.',               tag: 'O(n log n)' },
  { title: 'Fair Pricing',    desc: 'Professional quality at transparent prices. No hidden fees, no vague quotes.',                              tag: 'price: fair' },
  { title: 'Ongoing Support', desc: 'We stay with you after delivery — for updates, questions, or new ideas.',                                   tag: '24 / 7' },
  { title: 'Confidential',    desc: 'Your data and projects are handled with complete professionalism and confidentiality.',                     tag: 'encrypted' },
  { title: 'Local Expertise', desc: 'Based in Rwanda, we understand the local market while delivering globally competitive work.',               tag: 'rw → 🌍' },
]

export default function WhyUs() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>

      {/* ── Tech: circuit board SVG background ── */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04, pointerEvents: 'none', zIndex: 0 }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 600" fill="none">
        {/* Horizontal traces */}
        <line x1="0" y1="100" x2="1200" y2="100" stroke="white" strokeWidth="1"/>
        <line x1="0" y1="300" x2="1200" y2="300" stroke="white" strokeWidth="1"/>
        <line x1="0" y1="500" x2="1200" y2="500" stroke="white" strokeWidth="1"/>
        {/* Vertical traces */}
        <line x1="200"  y1="0" x2="200"  y2="600" stroke="white" strokeWidth="1"/>
        <line x1="500"  y1="0" x2="500"  y2="600" stroke="white" strokeWidth="1"/>
        <line x1="800"  y1="0" x2="800"  y2="600" stroke="white" strokeWidth="1"/>
        <line x1="1100" y1="0" x2="1100" y2="600" stroke="white" strokeWidth="1"/>
        {/* Junction nodes */}
        {[[200,100],[500,100],[800,100],[1100,100],[200,300],[500,300],[800,300],[1100,300],[200,500],[500,500],[800,500],[1100,500]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="4" fill="white"/>
        ))}
        {/* Chip outlines */}
        <rect x="80"  y="240" width="80" height="40" rx="4" stroke="white" strokeWidth="1.5"/>
        <rect x="380" y="440" width="80" height="40" rx="4" stroke="white" strokeWidth="1.5"/>
        <rect x="680" y="140" width="80" height="40" rx="4" stroke="white" strokeWidth="1.5"/>
        <rect x="980" y="340" width="80" height="40" rx="4" stroke="white" strokeWidth="1.5"/>
      </svg>

      {/* ── Tech: glowing orb top-right ── */}
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,169,110,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

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
              {/* Tech tag */}
              <div style={{ fontFamily: '"Courier New", monospace', fontSize: '0.65rem', color: 'rgba(200,169,110,0.6)', marginBottom: '1rem', letterSpacing: '0.04em' }}>
                {r.tag}
              </div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '0.75rem' }}>
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
