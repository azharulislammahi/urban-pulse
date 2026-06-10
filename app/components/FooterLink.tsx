'use client'
import Link from 'next/link'

export default function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}
      style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = 'white')}
      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
      {label}
    </Link>
  )
}
