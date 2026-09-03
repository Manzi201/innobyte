export default function Logo({ scrolled = false }: { scrolled?: boolean }) {
  const color = scrolled ? '#0a0a0a' : '#ffffff'

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {/* Mark — two overlapping squares */}
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="0" y="0" width="18" height="18" fill={color} />
        <rect x="10" y="10" width="18" height="18" fill={color} opacity="0.35" />
      </svg>

      {/* Wordmark */}
      <div style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: '1.05rem',
        fontWeight: 800,
        letterSpacing: '-0.01em',
        color,
        lineHeight: 1,
        transition: 'color 0.3s',
      }}>
        INNOBYTE
      </div>
    </div>
  )
}
