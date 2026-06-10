'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/fba-operations', label: 'FBA Ops' },
  { href: '/categories', label: 'Categories' },
  { href: '/supplier-info', label: 'Suppliers' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all 0.4s ease',
      background: scrolled ? 'rgba(5,13,31,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(212,168,67,0.15)' : '1px solid transparent',
      padding: scrolled ? '0.75rem 0' : '1.25rem 0',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo size="sm" variant="light" />

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }} className="hidden lg:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/supplier-info" className="btn-gold">
            <span>Partner With Us</span>
          </Link>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: 'rgba(5,13,31,0.98)', borderTop: '1px solid rgba(212,168,67,0.2)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.5rem', gap: '0.25rem' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                style={{ color: 'rgba(255,255,255,0.8)', padding: '0.75rem 0', fontSize: '0.9rem', fontWeight: 600,
                  borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                {l.label}
              </Link>
            ))}
            <Link href="/supplier-info" onClick={() => setOpen(false)} className="btn-gold" style={{ marginTop: '1rem', justifyContent: 'center' }}>
              <span>Partner With Us</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
