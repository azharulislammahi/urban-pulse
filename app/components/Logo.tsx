import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
}

export default function Logo({ size = 'md', variant = 'dark' }: LogoProps) {
  const scales = { sm: 0.7, md: 1, lg: 1.4 }
  const s = scales[size]
  const wordColor = variant === 'dark' ? '#050d1f' : '#ffffff'
  const subColor = variant === 'dark' ? '#64748b' : 'rgba(255,255,255,0.6)'

  return (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: `${10 * s}px`, textDecoration: 'none' }}>
      {/* Icon mark */}
      <svg width={Math.round(52 * s)} height={Math.round(44 * s)} viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d4a843"/>
            <stop offset="100%" stopColor="#f0c96a"/>
          </linearGradient>
          <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5b0"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
          <linearGradient id="pulseGrad" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#d4a843"/>
            <stop offset="50%" stopColor="#0ea5b0"/>
            <stop offset="100%" stopColor="#22d3ee"/>
          </linearGradient>
        </defs>

        {/* Pulse wave background ring */}
        <ellipse cx="26" cy="22" rx="24" ry="20" stroke="url(#pulseGrad)" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4"/>

        {/* Pulse wave line */}
        <polyline
          points="2,22 8,22 11,12 14,32 17,18 20,26 23,22 29,22 32,10 35,34 38,18 41,22 50,22"
          stroke="url(#pulseGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* UP text — U */}
        <text x="11" y="36" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="9" fill="url(#goldGrad)" opacity="0.9">U</text>
        {/* UP text — P */}
        <text x="19" y="36" fontFamily="Playfair Display, serif" fontWeight="700" fontSize="9" fill="url(#tealGrad)" opacity="0.9">P</text>
      </svg>

      {/* Wordmark */}
      <div style={{ lineHeight: 1 }}>
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: `${Math.round(15 * s)}px`,
          color: wordColor,
          letterSpacing: '0.03em',
          lineHeight: 1.2,
        }}>
          Urban Pulse
        </div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 600,
          fontSize: `${Math.round(8.5 * s)}px`,
          color: subColor,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          marginTop: '2px',
        }}>
          Wholesale LLC
        </div>
      </div>
    </Link>
  )
}
