const SERVICES = [
  {
    icon: '🌐',
    title: 'Website Design',
    desc: 'Business, personal, school websites & landing pages. Modern, fast, mobile-friendly.',
    features: ['Responsive design', 'SEO optimized', 'Fast loading', 'CMS ready'],
    color: '#0ea5e9',
  },
  {
    icon: '🎨',
    title: 'Graphic Design',
    desc: 'Logos, posters, business cards, certificates & social media designs.',
    features: ['Logo & branding', 'Print materials', 'Social media kits', 'Certificates'],
    color: '#8b5cf6',
  },
  {
    icon: '💻',
    title: 'Computer Services',
    desc: 'Windows/software installation, formatting, troubleshooting & optimization.',
    features: ['OS installation', 'Software setup', 'Virus removal', 'Speed optimization'],
    color: '#10b981',
  },
  {
    icon: '🛠️',
    title: 'IT Support',
    desc: 'Computer, software & printer setup and full technical support.',
    features: ['Hardware setup', 'Printer config', 'Network setup', 'Remote support'],
    color: '#f59e0b',
  },
  {
    icon: '📱',
    title: 'Social Media Services',
    desc: 'Page setup, content creation, post design & ongoing management.',
    features: ['Page creation', 'Content strategy', 'Post design', 'Growth management'],
    color: '#ec4899',
  },
  {
    icon: '📊',
    title: 'Data Services',
    desc: 'Data entry, Excel work, data cleaning & document conversion.',
    features: ['Data entry', 'Excel reports', 'Data cleaning', 'File conversion'],
    color: '#06b6d4',
  },
  {
    icon: '📄',
    title: 'Digital Documents',
    desc: 'CVs, business profiles, company reports & professional documents.',
    features: ['Professional CVs', 'Company profiles', 'Business reports', 'Formal letters'],
    color: '#6366f1',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: '#f8fafc', padding: '6rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div data-reveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ margin: '0 auto 1rem' }}>
            <span>⚡</span> What We Do
          </div>
          <h2 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Our Services
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
            Everything your business needs in the digital world — under one roof.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className="service-card" data-reveal style={{ transitionDelay: `${i * 0.07}s` }}>
              {/* Icon */}
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: `${s.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: '1rem' }}>
                {s.icon}
              </div>

              <h3 style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.65, marginBottom: '1.2rem' }}>
                {s.desc}
              </p>

              {/* Feature list */}
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {s.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.82rem', color: '#475569', fontWeight: 500 }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Bottom accent */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                <a href="/contact" style={{ fontSize: '0.82rem', fontWeight: 600, color: s.color, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', transition: 'gap 0.15s' }}>
                  Get started →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
