'use client'

const SERVICES = [
  {
    num: '01',
    title: 'Website Design',
    desc: 'Business sites, personal portfolios, school websites and landing pages. Responsive, fast, and built to convert.',
  },
  {
    num: '02',
    title: 'Graphic Design',
    desc: 'Logos, posters, business cards, certificates and social media visuals that define your identity.',
  },
  {
    num: '03',
    title: 'Computer Services',
    desc: 'OS installation, software setup, virus removal and system optimization — done right, done fast.',
  },
  {
    num: '04',
    title: 'IT Support',
    desc: 'Hardware configuration, printer setup, network installation and on-demand remote assistance.',
  },
  {
    num: '05',
    title: 'Social Media',
    desc: 'Page creation, content strategy, post design and ongoing management to grow your audience.',
  },
  {
    num: '06',
    title: 'Data Services',
    desc: 'Data entry, Excel reporting, data cleaning and file conversion handled with precision.',
  },
  {
    num: '07',
    title: 'Digital Documents',
    desc: 'Professional CVs, company profiles, business reports and formal correspondence.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#fafaf8', padding: '8rem 2.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Header */}
        <div data-reveal style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
          borderBottom: '1px solid #e8e8e8',
          paddingBottom: '3rem',
        }}>
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight: 800,
              color: '#0a0a0a',
              letterSpacing: '-0.04em',
              lineHeight: 1,
            }}>
              Our Services
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#6b6b6b', maxWidth: '340px', lineHeight: 1.75 }}>
            Everything your business needs in the digital world — under one roof, delivered with precision.
          </p>
        </div>

        {/* Service list */}
        <div>
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.title} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  return (
    <a
      href="/contact"
      data-reveal
      style={{
        transitionDelay: `${i * 0.05}s`,
        display: 'grid',
        gridTemplateColumns: '60px 1fr 32px',
        alignItems: 'center',
        gap: '2rem',
        padding: '1.75rem 1.25rem',
        borderBottom: '1px solid #e8e8e8',
        textDecoration: 'none',
        borderRadius: '6px',
        transition: 'background 0.2s',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = '#eeecea'
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = 'transparent'
      }}
    >
      {/* Number */}
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        color: '#b0b0b0',
      }}>
        {s.num}
      </span>

      {/* Info */}
      <div>
        <h3 style={{
          fontFamily: 'Syne, sans-serif',
          fontSize: 'clamp(1rem, 2.2vw, 1.4rem)',
          fontWeight: 700,
          color: '#0a0a0a',
          letterSpacing: '-0.02em',
          marginBottom: '0.3rem',
        }}>
          {s.title}
        </h3>
        <p style={{ fontSize: '0.83rem', color: '#6b6b6b', lineHeight: 1.65 }}>
          {s.desc}
        </p>
      </div>

      {/* Arrow */}
      <span style={{
        fontSize: '1rem',
        color: '#b0b0b0',
        fontFamily: 'sans-serif',
      }}>
        →
      </span>
    </a>
  )
}
