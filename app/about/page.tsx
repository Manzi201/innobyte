import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About INNOBYTE — IT Services Company',
  description: 'Learn about INNOBYTE — who we are, our mission, and why we are the right digital partner for your business.',
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '68px' }}>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)', padding: '5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem', background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)', color: '#7dd3fc' }}>
            About Us
          </div>
          <h1 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Who We Are
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>
            INNOBYTE is a professional IT services company based in Kigali, Rwanda. We help businesses and individuals thrive in the digital world through quality, affordable services.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
            <div data-reveal="left">
              <div className="section-tag">🎯 Our Mission</div>
              <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '1.7rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 1rem', lineHeight: 1.3 }}>
                Empowering You Digitally
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>
                Our mission is to make professional digital services accessible to everyone — businesses large and small, individuals, schools and organizations.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8 }}>
                We believe that quality IT services should not be expensive or complicated. That&apos;s why we make it simple.
              </p>
            </div>
            <div data-reveal="right">
              <div className="section-tag">👁️ Our Vision</div>
              <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '1.7rem', fontWeight: 700, color: '#0f172a', margin: '0.75rem 0 1rem', lineHeight: 1.3 }}>
                A Digital Africa
              </h2>
              <p style={{ color: '#64748b', lineHeight: 1.8, marginBottom: '1rem' }}>
                We envision a Rwanda and Africa where every business and individual has access to modern digital tools and professional support to grow and succeed.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.8 }}>
                INNOBYTE is committed to being part of that digital transformation — one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ margin: '0 auto 1rem' }}>Our Values</div>
            <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '2rem', fontWeight: 700, color: '#0f172a' }}>What Drives Us</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '✅', title: 'Quality', desc: 'We never compromise on the quality of our work.' },
              { icon: '🤝', title: 'Integrity', desc: 'Honest pricing, honest communication, always.' },
              { icon: '⚡', title: 'Speed', desc: 'We deliver fast without cutting corners.' },
              { icon: '🌱', title: 'Growth', desc: 'We help our clients grow and grow with them.' },
            ].map((v, i) => (
              <div key={v.title} data-reveal style={{ transitionDelay: `${i * 0.1}s`, background: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1.5px solid #e2e8f0', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, color: '#0f172a', marginBottom: '0.4rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
