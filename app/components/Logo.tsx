'use client'
import Link from 'next/link'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'dark' | 'light'
}

export default function Logo({ size = 'md', variant = 'dark' }: LogoProps) {
  const s          = size === 'sm' ? 0.68 : size === 'lg' ? 1.3 : 1
  const wordColor  = variant === 'light' ? '#ffffff'             : '#1C1C1A'
  const subColor   = variant === 'light' ? 'rgba(255,255,255,0.45)' : '#9A9086'
  const pulseColor = '#1C1C1A'   // always black
  const dotColor   = '#C4623A'   // always orange/rust

  /* Scale the SVG viewBox: icon is 52×42 */
  const iw = Math.round(52 * s)
  const ih = Math.round(42 * s)

  return (
    <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: `${10 * s}px`, textDecoration: 'none', flexShrink: 0 }}>

      {/* ── Icon mark — same geometry as approved favicon ── */}
      <svg width={iw} height={ih} viewBox="0 0 52 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* U shape — rust/terracotta */}
        <rect x="1"  y="2"  width="8" height="26" rx="4" fill="#C4623A"/>
        <rect x="17" y="2"  width="8" height="26" rx="4" fill="#C4623A"/>
        <rect x="1"  y="22" width="24" height="8" rx="4" fill="#C4623A"/>

        {/* Pulse / heartbeat line — BLACK as requested */}
        <polyline
          points="30,21 34,21 37,9 41,33 44,15 47,21 52,21"
          fill="none"
          stroke={pulseColor}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* ── Wordmark ── */}
      <div style={{ lineHeight: 1, display: 'flex', flexDirection: 'column', gap: `${3 * s}px` }}>
        {/* "Urban.Pulse" — dot is orange */}
        <div style={{
          fontFamily: "'Fraunces', Georgia, serif",
          fontWeight: 900,
          fontSize: `${Math.round(16 * s)}px`,
          letterSpacing: '0.03em',
          lineHeight: 1,
          display: 'flex',
          alignItems: 'baseline',
          gap: 0,
        }}>
          <span style={{ color: wordColor }}>Urban</span>
          <span style={{ color: dotColor, fontSize: `${Math.round(20 * s)}px`, lineHeight: 1, margin: `0 ${Math.round(1 * s)}px` }}>.</span>
          <span style={{ color: wordColor }}>Pulse</span>
        </div>
        <div style={{
          fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
          fontWeight: 600,
          fontSize: `${Math.round(7.5 * s)}px`,
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
