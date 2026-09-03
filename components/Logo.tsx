export default function Logo({ scrolled = false }: { scrolled?: boolean }) {
  const textColor = scrolled ? '#0f172a' : '#ffffff'
  const byteColor = '#0ea5e9'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      {/* Icon mark — stylized circuit/byte */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {/* Outer square */}
        <rect x="2" y="2" width="28" height="28" rx="6" fill="#0ea5e9" />
        {/* IB letterform inside */}
        {/* I */}
        <rect x="8" y="9" width="3" height="14" rx="1.5" fill="#fff" />
        {/* B body */}
        <rect x="13" y="9" width="3" height="14" rx="1.5" fill="#fff" />
        {/* B top curve */}
        <path d="M16 9 Q22 9 22 13 Q22 16 16 16" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* B bottom curve */}
        <path d="M16 16 Q23 16 23 20.5 Q23 23 16 23" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>

      {/* Wordmark */}
      <span style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em', color: textColor }}>
        INNO<span style={{ color: byteColor }}>BYTE</span>
      </span>
    </div>
  )
}
