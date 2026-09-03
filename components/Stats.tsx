'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 50,  suffix: '+', label: 'Projects Delivered' },
  { value: 30,  suffix: '+', label: 'Happy Clients' },
  { value: 7,   suffix: '',  label: 'Services Offered' },
  { value: 24,  suffix: '/7', label: 'Support Available' },
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
        const duration = 1400
        const steps = 60
        const inc = value / steps
        let cur = 0
        const interval = setInterval(() => {
          cur += inc
          if (cur >= value) { setCount(value); clearInterval(interval) }
          else setCount(Math.floor(cur))
        }, duration / steps)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <div ref={ref} style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', lineHeight: 1 }}>
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)', padding: '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.5rem' }}>
          {STATS.map((s, i) => (
            <div key={s.label} data-reveal style={{ transitionDelay: `${i * 0.1}s`, textAlign: 'center', padding: '2rem 1rem', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
              <Counter value={s.value} suffix={s.suffix} />
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
