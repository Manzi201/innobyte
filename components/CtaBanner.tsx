export default function CtaBanner() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '5rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)', zIndex: 0 }} />

      <div data-reveal style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(1.7rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.25 }}>
          Ready to Build Something Great?
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
          Contact INNOBYTE today and get a free consultation. We&apos;re fast, affordable and professional.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Get Free Quote →
          </a>
          <a href="https://wa.me/250780000000" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25d366', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: '1rem', fontWeight: 600, padding: '0.9rem 2.5rem', borderRadius: '6px', textDecoration: 'none', transition: 'opacity 0.18s' }}
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}
