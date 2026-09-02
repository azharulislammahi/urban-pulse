'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const links = [
  { href: '/',               label: 'Home' },
  { href: '/about',          label: 'About' },
  { href: '/houses',         label: 'The Houses' },
  { href: '/partnerships',   label: 'Partnerships' },
  { href: '/fba-operations', label: 'Operations' },
  { href: '/supplier-info',  label: 'Suppliers' },
  { href: '/contact',        label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const solid = scrolled || open
  const linkColor = solid ? '#6B5F51' : 'rgba(255,255,255,0.72)'
  const linkHover = solid ? '#14100D' : '#FFFFFF'

  return (
    <>
      <style>{`
        .nav-desktop   { display: none; }
        .nav-hamburger { display: flex; }
        @media (min-width: 1100px) {
          .nav-desktop   { display: flex; }
          .nav-hamburger { display: none; }
        }
      `}</style>

      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          transition: 'background 0.4s ease, padding 0.4s ease, border-color 0.4s ease',
          background: solid
            ? 'rgba(251,248,243,0.94)'
            : 'linear-gradient(180deg, rgba(20,16,13,0.72) 0%, rgba(20,16,13,0.38) 55%, rgba(20,16,13,0) 100%)',
          backdropFilter: solid ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: solid ? 'blur(18px)' : 'none',
          borderBottom: `1px solid ${solid ? 'rgba(184,135,60,0.20)' : 'transparent'}`,
          padding: solid ? '0.7rem 0' : '1.35rem 0',
        }}
      >
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
          <Logo size="sm" variant={solid ? 'dark' : 'light'} />

          <nav className="nav-desktop" style={{ alignItems: 'center', gap: '1.9rem' }}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  color: linkColor,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = linkHover)}
                onMouseLeave={e => (e.currentTarget.style.color = linkColor)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="nav-desktop">
            <Link
              href="/supplier-info"
              style={{
                background: '#B8873C',
                color: '#fff',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontWeight: 700,
                fontSize: '0.68rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                padding: '0.85rem 1.55rem',
                borderRadius: 2,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Brand Inquiry
            </Link>
          </div>

          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            style={{
              background: 'none',
              border: `1px solid ${solid ? 'rgba(184,135,60,0.4)' : 'rgba(255,255,255,0.35)'}`,
              borderRadius: 2,
              padding: '0.5rem',
              cursor: 'pointer',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {open
              ? <X size={20} color={solid ? '#B8873C' : '#fff'} />
              : <Menu size={20} color={solid ? '#B8873C' : '#fff'} />}
          </button>
        </div>

        {open && (
          <div style={{ background: '#FBF8F3', borderTop: '1px solid #EDE4D6', maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1.5rem 2rem' }}>
              {links.map(l => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    color: '#3B3229',
                    padding: '1rem 0',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    borderBottom: '1px solid #EDE4D6',
                    textDecoration: 'none',
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    display: 'block',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/supplier-info"
                onClick={() => setOpen(false)}
                style={{
                  marginTop: '1.5rem',
                  background: '#B8873C',
                  color: '#fff',
                  fontWeight: 700,
                  padding: '1rem',
                  borderRadius: 2,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                Brand Inquiry
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
