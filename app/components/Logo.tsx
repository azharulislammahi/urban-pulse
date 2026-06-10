import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
}

export default function Logo({ size = 'md', variant = 'dark' }: LogoProps) {
  const s = size === 'sm' ? 0.65 : size === 'lg' ? 1.3 : 1
  const wordColor = variant === 'light' ? '#ffffff' : '#050d1f'
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.5)' : '#64748b'

  return (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: `${12 * s}px`, textDecoration: 'none', flexShrink: 0 }}>
      <svg width={Math.round(72 * s)} height={Math.round(48 * s)} viewBox="0 0 72 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4a843"/>
            <stop offset="100%" stopColor="#f0c96a"/>
          </linearGradient>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5b0"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
          <linearGradient id="pulseGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#d4a843"/>
            <stop offset="60%" stopColor="#0ea5b0"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
        </defs>

        {/* UP monogram */}
        <text x="2" y="36" fontFamily="Georgia, serif" fontWeight="900" fontSize="34" fill="url(#goldGrad)">U</text>
        <text x="22" y="36" fontFamily="Georgia, serif" fontWeight="900" fontSize="34" fill="url(#tealGrad)">P</text>

        {/* Vertical divider line — pulse wave */}
        <polyline
          points="54,4 54,10 56,14 52,20 56,26 52,32 54,36 54,44"
          stroke="url(#pulseGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <div style={{ lineHeight: 1, display: 'flex', flexDirection: 'column', gap: `${3 * s}px` }}>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          fontSize: `${Math.round(15 * s)}px`,
          color: wordColor,
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}>
          Urban Pulse
        </div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
          fontWeight: 600,
          fontSize: `${Math.round(8 * s)}px`,
          color: subColor,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
        }}>
          Wholesale LLC
        </div>
      </div>
    </Link>
  )
}
