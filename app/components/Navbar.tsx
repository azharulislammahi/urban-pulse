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
    <>
      <style>{`
        .nav-desktop { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 1024px) {
          .nav-desktop { display: flex; }
          .nav-hamburger { display: none; }
        }
      `}</style>

      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        transition: 'all 0.4s ease',
        background: scrolled ? 'rgba(5,13,31,0.97)' : 'rgba(5,13,31,0.6)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(212,168,67,0.12)',
        padding: scrolled ? '0.6rem 0' : '1rem 0',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size="sm" variant="light" />

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ alignItems: 'center', gap: '1.75rem' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'white')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-desktop">
            <Link href="/supplier-info" style={{ background: 'linear-gradient(135deg, #d4a843, #f0c96a)', color: '#050d1f', fontWeight: 800, padding: '0.65rem 1.5rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Partner With Us
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 8, padding: '0.5rem', cursor: 'pointer', color: 'white', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Toggle menu">
            {open ? <X size={22} color="#d4a843" /> : <Menu size={22} color="#d4a843" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{ background: 'rgba(3,11,26,0.98)', borderTop: '1px solid rgba(212,168,67,0.15)' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '1rem 1.25rem 1.5rem' }}>
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ color: 'rgba(255,255,255,0.8)', padding: '0.85rem 0', fontSize: '0.95rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.06)', textDecoration: 'none', letterSpacing: '0.04em', fontFamily: 'Plus Jakarta Sans, sans-serif', display: 'block' }}>
                  {l.label}
                </Link>
              ))}
              <Link href="/supplier-info" onClick={() => setOpen(false)}
                style={{ marginTop: '1.25rem', background: 'linear-gradient(135deg, #d4a843, #f0c96a)', color: '#050d1f', fontWeight: 800, padding: '0.9rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'block', textAlign: 'center' }}>
                Partner With Us
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
