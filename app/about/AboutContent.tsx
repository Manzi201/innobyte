'use client'

export default function AboutContent() {
  return (
    <div>

      {/* Hero */}
      <section style={{
        background: '#0a0a0a',
        padding: '10rem 2.5rem 7rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          bottom: '-0.1em',
          right: '-0.05em',
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(100px, 20vw, 280px)',
          fontWeight: 800,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-0.05em',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}>
          ABOUT
        </div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}>
            <span style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
            Who We Are
          </div>
          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            color: '#fff',
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            maxWidth: '700px',
          }}>
            Built to serve.<br />
            <span style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.4)',
            }}>
              Made in Rwanda.
            </span>
          </h1>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ backgroundColor: '#fafaf8', padding: '7rem 2.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '5rem',
            alignItems: 'start',
          }}>
            <div data-reveal="left">
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#9b9b9b',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{ width: '28px', height: '1px', background: '#9b9b9b' }} />
                Our Mission
              </div>
              <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#0a0a0a',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}>
                Empowering you digitally
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: 1.85, marginBottom: '1rem' }}>
                Our mission is to make professional digital services accessible to everyone — businesses large and small, individuals, schools and organizations.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: 1.85 }}>
                We believe quality IT services should not be expensive or complicated. That&apos;s why we keep things simple, honest and effective.
              </p>
            </div>

            <div data-reveal="right">
              <div style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#9b9b9b',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}>
                <span style={{ width: '28px', height: '1px', background: '#9b9b9b' }} />
                Our Vision
              </div>
              <h2 style={{
                fontFamily: 'Syne, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: '#0a0a0a',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
              }}>
                A digital Africa
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: 1.85, marginBottom: '1rem' }}>
                We envision a Rwanda and Africa where every business and individual has access to modern digital tools and professional support to grow and succeed.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: 1.85 }}>
                INNOBYTE is committed to being part of that digital transformation — one project at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '7rem 2.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div data-reveal style={{
            marginBottom: '5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            paddingBottom: '3rem',
          }}>
            <div style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}>
              <span style={{ width: '28px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
              What Drives Us
            </div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
              Our Values
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}>
            {[
              { num: '01', title: 'Quality',   desc: 'We never compromise on the quality of our work. Every detail matters.' },
              { num: '02', title: 'Integrity', desc: 'Honest pricing, honest communication — always. No surprises.' },
              { num: '03', title: 'Speed',     desc: 'We deliver fast without cutting corners. Your time is valuable.' },
              { num: '04', title: 'Growth',    desc: 'We help our clients grow and we grow alongside them.' },
            ].map((v, i) => (
              <div
                key={v.title}
                data-reveal
                style={{
                  transitionDelay: `${i * 0.08}s`,
                  padding: '2.5rem',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
              >
                <div style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.25)',
                  marginBottom: '1.25rem',
                }}>
                  {v.num}
                </div>
                <h3 style={{
                  fontFamily: 'Syne, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  marginBottom: '0.75rem',
                }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: '#f5f4f0', padding: '6rem 2.5rem', textAlign: 'center' }}>
        <div data-reveal style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#9b9b9b',
            marginBottom: '1.5rem',
          }}>
            Work With Us
          </div>
          <h2 style={{
            fontFamily: 'Syne, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            color: '#0a0a0a',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '1.5rem',
          }}>
            Let&apos;s build something together
          </h2>
          <p style={{ fontSize: '0.95rem', color: '#6b6b6b', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Ready to start your project? Get in touch and we&apos;ll respond within 24 hours.
          </p>
          <a href="/contact" className="btn-primary">
            Get Free Quote
          </a>
        </div>
      </section>

    </div>
  )
}
