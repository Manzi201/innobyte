'use client'

const SERVICES = [
  { num: '01', title: 'Website Design',    desc: 'Business sites, personal portfolios, school websites and landing pages. Responsive, fast, and built to convert.',  icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { num: '02', title: 'Graphic Design',    desc: 'Logos, posters, business cards, certificates and social media visuals that define your identity.',                  icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { num: '03', title: 'Computer Services', desc: 'OS installation, software setup, virus removal and system optimization — done right, done fast.',                   icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { num: '04', title: 'IT Support',        desc: 'Hardware configuration, printer setup, network installation and on-demand remote assistance.',                      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  { num: '05', title: 'Social Media',      desc: 'Page creation, content strategy, post design and ongoing management to grow your audience.',                        icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' },
  { num: '06', title: 'Data Services',     desc: 'Data entry, Excel reporting, data cleaning and file conversion handled with precision.',                           icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
  { num: '07', title: 'Digital Documents', desc: 'Professional CVs, company profiles, business reports and formal correspondence.',                                   icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
]

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ backgroundColor: '#fafaf8', position: 'relative', overflow: 'hidden' }}>

      {/* ── Tech: background grid pattern ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
      }} />

      {/* ── Tech: corner bracket top-right ── */}
      <svg style={{ position: 'absolute', top: '3rem', right: '2rem', opacity: 0.08, pointerEvents: 'none' }} width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M80 0 L80 80 M0 0 L80 0" stroke="#0a0a0a" strokeWidth="2"/>
        <circle cx="80" cy="0" r="4" fill="#0a0a0a"/>
      </svg>

      {/* ── Tech: corner bracket bottom-left ── */}
      <svg style={{ position: 'absolute', bottom: '3rem', left: '2rem', opacity: 0.08, pointerEvents: 'none' }} width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M0 80 L0 0 M0 80 L80 80" stroke="#0a0a0a" strokeWidth="2"/>
        <circle cx="0" cy="80" r="4" fill="#0a0a0a"/>
      </svg>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div data-reveal className="services-header" style={{ marginBottom: '4rem', borderBottom: '1px solid #e8e8e8', paddingBottom: '3rem' }}>
          <div>
            <div className="eyebrow">What We Do</div>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.04em', lineHeight: 1 }}>
              Our Services
            </h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#6b6b6b', maxWidth: '340px', lineHeight: 1.75 }}>
            Everything your business needs in the digital world — under one roof, delivered with precision.
          </p>
        </div>

        {/* List */}
        <div>
          {SERVICES.map((s, i) => <ServiceRow key={s.title} s={s} i={i} />)}
        </div>
      </div>
    </section>
  )
}

function ServiceRow({ s, i }: { s: (typeof SERVICES)[0]; i: number }) {
  return (
    <a
      href="/contact"
      data-reveal
      style={{
        transitionDelay: `${i * 0.05}s`,
        display: 'grid',
        gridTemplateColumns: '44px 40px 1fr 24px',
        alignItems: 'center',
        gap: 'clamp(0.75rem, 2vw, 1.5rem)',
        padding: 'clamp(1.25rem, 2vw, 1.75rem) 1rem',
        borderBottom: '1px solid #e8e8e8',
        textDecoration: 'none',
        borderRadius: '6px',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#eeecea' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
    >
      {/* Number */}
      <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', color: '#b0b0b0' }}>
        {s.num}
      </span>

      {/* Tech icon */}
      <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3d3d3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d={s.icon} />
        </svg>
      </div>

      {/* Info */}
      <div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(0.95rem, 2.2vw, 1.4rem)', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
          {s.title}
        </h3>
        <p style={{ fontSize: 'clamp(0.78rem, 1.2vw, 0.83rem)', color: '#6b6b6b', lineHeight: 1.65 }}>
          {s.desc}
        </p>
      </div>

      {/* Arrow */}
      <span style={{ fontSize: '0.95rem', color: '#b0b0b0' }}>→</span>
    </a>
  )
}
