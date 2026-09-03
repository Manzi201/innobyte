'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 50,  suffix: '+', label: 'Projects Delivered',  sub: 'since launch' },
  { value: 30,  suffix: '+', label: 'Happy Clients',       sub: 'across Rwanda' },
  { value: 7,   suffix: '',  label: 'Services Offered',    sub: 'under one roof' },
  { value: 100, suffix: '%', label: 'Satisfaction Rate',   sub: 'our commitment' },
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
        const duration = 1600
        const steps = 60
        const inc = value / steps
        let cur = 0
        const interval = setInterval(() => {
          cur += inc
          if (cur >= value) { setCount(value); clearInterval(interval) }
          else setCount(Math.floor(cur))
        }, duration / steps)
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{
      fontFamily: 'Syne, sans-serif',
      fontSize: 'clamp(3rem, 6vw, 5rem)',
      fontWeight: 800,
      color: '#0a0a0a',
      lineHeight: 1,
      letterSpacing: '-0.04em',
    }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ backgroundColor: '#f5f4f0', padding: '7rem 2.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '5rem' }}>
          <span style={{ width: '28px', height: '1px', background: '#6b6b6b' }} />
          <span style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6b6b6b' }}>
            By the Numbers
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          borderTop: '1px solid #d0d0d0',
        }}>
          {STATS.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{
                transitionDelay: `${i * 0.1}s`,
                padding: '3rem 0',
                borderRight: i < STATS.length - 1 ? '1px solid #d0d0d0' : 'none',
                paddingRight: '2.5rem',
                paddingLeft: i > 0 ? '2.5rem' : '0',
              }}
            >
              <Counter value={s.value} suffix={s.suffix} />
              <div style={{ marginTop: '0.75rem' }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '0.85rem', fontWeight: 700, color: '#0a0a0a', letterSpacing: '-0.01em' }}>
                  {s.label}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#9b9b9b', marginTop: '0.2rem', letterSpacing: '0.02em' }}>
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
