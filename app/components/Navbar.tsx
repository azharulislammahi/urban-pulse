'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/',              label: 'Home' },
  { href: '/about',         label: 'About' },
  { href: '/partnerships',  label: 'Partnerships' },
  { href: '/fba-operations',label: 'Operations' },
  { href: '/categories',    label: 'Categories' },
  { href: '/catalog',       label: 'Catalog' },
  { href: '/supplier-info', label: 'Suppliers' },
  { href: '/contact',       label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        .nav-desktop   { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 1024px) {
          .nav-desktop   { display: flex; }
          .nav-hamburger { display: none;  }
        }
      `}</style>

      <header style={{
        position:  'fixed',
        top: 0, left: 0, right: 0,
        zIndex:    1000,
        transition: 'all 0.35s ease',
        background: scrolled
          ? 'rgba(250,250,245,0.97)'
          : 'rgba(250,250,245,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(196,98,58,0.14)',
        padding: scrolled ? '0.6rem 0' : '0.9rem 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size="sm" variant="dark" />

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ alignItems: 'center', gap: '1.5rem' }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{ fontSize: '0.78rem', fontWeight: 600, color: '#6B6460', letterSpacing: '0.05em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1C1C1A')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B6460')}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-desktop">
            <Link href="/supplier-info" style={{ background: '#C4623A', color: 'white', fontWeight: 700, padding: '0.6rem 1.4rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.76rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block' }}>
              Apply for Wholesale Account
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: '1px solid rgba(196,98,58,0.35)', borderRadius: 8, padding: '0.45rem', cursor: 'pointer', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle menu">
            {open ? <X size={22} color="#C4623A" /> : <Menu size={22} color="#C4623A" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: '#FAFAF5', borderTop: '1px solid #EDE7DE' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.25rem 1.5rem' }}>
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ color: '#3D3D3B', padding: '0.85rem 0', fontSize: '0.95rem', fontWeight: 600, borderBottom: '1px solid #EDE7DE', textDecoration: 'none', letterSpacing: '0.03em', fontFamily: 'Plus Jakarta Sans, sans-serif', display: 'block' }}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/supplier-info" onClick={() => setOpen(false)}
                style={{ marginTop: '1.25rem', background: '#C4623A', color: 'white', fontWeight: 700, padding: '0.9rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                Apply for Wholesale Account
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
