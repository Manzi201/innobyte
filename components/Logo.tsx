export default function Logo({ scrolled = false }: { scrolled?: boolean }) {
  const nameColor  = scrolled ? '#0F172A' : '#ffffff'
  const byteColor  = '#2563EB'
  const tagColor   = scrolled ? '#64748B' : 'rgba(255,255,255,0.55)'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>

      {/* 3-D Digital Cube icon */}
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top face */}
        <path d="M50 8 L88 30 L50 52 L12 30 Z" fill="#2563EB" />
        {/* Left face */}
        <path d="M12 30 L50 52 L50 92 L12 70 Z" fill="#0F172A" />
        {/* Right face */}
        <path d="M50 52 L88 30 L88 70 L50 92 Z" fill="#38BDF8" />
        {/* Inner diamond cut */}
        <path d="M50 27L68 37L50 48L32 37Z" fill="#ffffff" />
        {/* Vertical digital connection */}
        <path d="M50 48 V70" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
        {/* Bottom node */}
        <circle cx="50" cy="70" r="5" fill="#ffffff" />
        {/* Signal line right */}
        <path d="M68 37 H82" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
        {/* Signal dot */}
        <circle cx="82" cy="37" r="3.5" fill="#ffffff" />
      </svg>

      {/* Wordmark + tagline */}
      <div>
        <div style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontSize: '1.5rem',
          fontWeight: 900,
          letterSpacing: '1px',
          color: nameColor,
          lineHeight: 1.1,
        }}>
          INNO<span style={{ color: byteColor }}>BYTE</span>
        </div>
        <div style={{
          marginTop: '3px',
          fontSize: '0.52rem',
          fontWeight: 700,
          letterSpacing: '3px',
          color: tagColor,
          textTransform: 'uppercase',
        }}>
          INNOVATE · BUILD · GROW
        </div>
      </div>
    </div>
  )
}
