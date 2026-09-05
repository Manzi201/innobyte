export default function CtaBanner() {
  return (
    <section className="section-pad" style={{ background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>

      {/* ── Tech: animated grid lines ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
      }} />

      {/* ── Tech: circuit lines top corners ── */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: 'clamp(120px,20vw,260px)', opacity: 0.1, pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 260 180" fill="none">
        <path d="M0 0 L100 0 L140 40 L200 40 L240 80 L260 80" stroke="white" strokeWidth="1.5"/>
        <path d="M0 60 L60 60 L100 100 L180 100" stroke="white" strokeWidth="1"/>
        <circle cx="100" cy="0"  r="3" fill="white"/>
        <circle cx="140" cy="40" r="3" fill="white"/>
        <circle cx="100" cy="100" r="3" fill="white"/>
        <rect x="188" y="92" width="12" height="12" rx="2" fill="white" opacity="0.6"/>
      </svg>

      <svg style={{ position: 'absolute', top: 0, right: 0, width: 'clamp(120px,20vw,260px)', opacity: 0.1, pointerEvents: 'none', zIndex: 0, transform: 'scaleX(-1)' }} viewBox="0 0 260 180" fill="none">
        <path d="M0 0 L100 0 L140 40 L200 40 L240 80 L260 80" stroke="white" strokeWidth="1.5"/>
        <path d="M0 60 L60 60 L100 100 L180 100" stroke="white" strokeWidth="1"/>
        <circle cx="100" cy="0"  r="3" fill="white"/>
        <circle cx="140" cy="40" r="3" fill="white"/>
        <circle cx="100" cy="100" r="3" fill="white"/>
        <rect x="188" y="92" width="12" height="12" rx="2" fill="white" opacity="0.6"/>
      </svg>

      {/* ── Tech: binary rain bottom ── */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around',
        paddingBottom: '1rem', pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      }}>
        {['0110','1001','0011','1100','0101','1010','0110','1001','0011','1100','0101','1010','0110','1001'].map((b, i) => (
          <span key={i} style={{ fontFamily: '"Courier New", monospace', fontSize: '9px', color: 'rgba(255,255,255,0.06)', letterSpacing: '0.1em' }}>{b}</span>
        ))}
      </div>

      {/* ── Tech: glowing center orb ── */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,169,110,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Tech: scan line ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.008) 3px, rgba(255,255,255,0.008) 4px)',
      }} />

      {/* INNOBYTE watermark */}
      <div style={{
        position: 'absolute', bottom: '-0.15em', left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'Syne, sans-serif', fontSize: 'clamp(60px, 18vw, 220px)',
        fontWeight: 800, color: 'rgba(255,255,255,0.025)',
        letterSpacing: '-0.04em', lineHeight: 1,
        whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none', zIndex: 0,
      }}>
        INNOBYTE
      </div>

      {/* Content */}
      <div data-reveal style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        {/* Tech status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          fontFamily: '"Courier New", monospace', fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.35)', marginBottom: '1.5rem',
          border: '1px solid rgba(255,255,255,0.1)', padding: '0.3rem 0.75rem', borderRadius: '100px',
        }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 1.5s ease-in-out infinite', display: 'inline-block' }} />
          status: accepting new projects
        </div>

        <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1.5rem' }}>
          Let&apos;s Work Together
        </div>
        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 7vw, 5.5rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: '2rem' }}>
          Ready to build<br />something great?
        </h2>
        <p style={{ fontSize: 'clamp(0.88rem, 1.5vw, 1rem)', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: '460px', margin: '0 auto 2.5rem' }}>
          Get in touch today for a free consultation. We&apos;re fast, affordable, and professional.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="btn-gold" style={{ fontSize: '0.82rem' }}>Get Free Quote</a>
          <a href="https://wa.me/250780000000" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.82rem' }}>
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
