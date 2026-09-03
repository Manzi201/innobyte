export default function CtaBanner() {
  return (
    <section style={{
      background: '#0a0a0a',
      padding: '8rem 2.5rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Large decorative text */}
      <div style={{
        position: 'absolute',
        bottom: '-0.15em',
        left: '50%',
        transform: 'translateX(-50%)',
        fontFamily: 'Syne, sans-serif',
        fontSize: 'clamp(80px, 18vw, 220px)',
        fontWeight: 800,
        color: 'rgba(255,255,255,0.03)',
        letterSpacing: '-0.04em',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
      }}>
        INNOBYTE
      </div>

      <div data-reveal style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
          marginBottom: '2rem',
        }}>
          Let&apos;s Work Together
        </div>
        <h2 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(2.4rem, 7vw, 5.5rem)',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.04em',
          lineHeight: 0.95,
          marginBottom: '3rem',
        }}>
          Ready to build<br />something great?
        </h2>
        <p style={{
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '3rem',
          lineHeight: 1.75,
          maxWidth: '460px',
          margin: '0 auto 3rem',
        }}>
          Get in touch today for a free consultation. We&apos;re fast, affordable, and professional.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="btn-gold" style={{ fontSize: '0.82rem' }}>
            Get Free Quote
          </a>
          <a
            href="https://wa.me/250780000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ fontSize: '0.82rem' }}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
