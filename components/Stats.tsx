'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 50,  suffix: '+', label: 'Projects Delivered', sub: 'since launch',    code: 'projects.length' },
  { value: 30,  suffix: '+', label: 'Happy Clients',      sub: 'across Rwanda',   code: 'clients.satisfied' },
  { value: 7,   suffix: '',  label: 'Services Offered',   sub: 'under one roof',  code: 'services.count' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate',  sub: 'our commitment',  code: 'rating === MAX' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60
        const inc = value / steps
        let cur = 0
        const interval = setInterval(() => {
          cur += inc
          if (cur >= value) { setCount(value); clearInterval(interval) }
          else setCount(Math.floor(cur))
        }, 1600 / steps)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{
      fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2.2rem, 5vw, 5rem)',
      fontWeight: 800, color: '#0a0a0a', lineHeight: 1, letterSpacing: '-0.04em',
    }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section className="section-pad" style={{ backgroundColor: '#f5f4f0', position: 'relative', overflow: 'hidden' }}>

      {/* ── Tech: dot matrix background ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.5,
      }} />

      {/* ── Tech: binary stream right side ── */}
      <div style={{
        position: 'absolute', right: '2rem', top: 0, bottom: 0,
        display: 'flex', flexDirection: 'column', justifyContent: 'space-around',
        pointerEvents: 'none', zIndex: 0, opacity: 0.06,
      }}>
        {['10110100','01001011','11010010','00101101','10010110','01101001'].map((b, i) => (
          <span key={i} style={{ fontFamily: '"Courier New", monospace', fontSize: '10px', color: '#0a0a0a', letterSpacing: '0.15em' }}>{b}</span>
        ))}
      </div>

      {/* ── Tech: horizontal scan line accent ── */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '50%',
        height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '4rem' }}>
          <span style={{ width: '28px', height: '1px', background: '#6b6b6b' }} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b6b6b' }}>
            By the Numbers
          </span>
          {/* Tech: status indicator */}
          <span style={{ marginLeft: 'auto', fontFamily: '"Courier New", monospace', fontSize: '0.65rem', color: '#9b9b9b', letterSpacing: '0.05em' }}>
            sys.status = <span style={{ color: '#22c55e' }}>ONLINE</span>
          </span>
        </div>

        <div className="stats-grid">
          {STATS.map((s, i) => (
            <div key={s.label} className="stats-cell" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
              {/* Tech: code label */}
              <div style={{ fontFamily: '"Courier New", monospace', fontSize: '0.65rem', color: '#9b9b9b', marginBottom: '1rem', letterSpacing: '0.03em' }}>
                // {s.code}
              </div>
              <Counter value={s.value} suffix={s.suffix} />
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.01em' }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9b9b9b', marginTop: '0.2rem' }}>
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
