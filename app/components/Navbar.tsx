'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/fba-operations', label: 'FBA Operations' },
  { href: '/supplier-info', label: 'Supplier Info' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0f2044] shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-content mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-accent rounded flex items-center justify-center font-serif text-navy font-bold text-lg leading-none" style={{fontFamily:'DM Serif Display,serif'}}>
            UP
          </div>
          <div className="leading-tight">
            <div className="text-white font-semibold text-[0.95rem] tracking-wide" style={{fontFamily:'DM Sans,sans-serif'}}>Urban Pulse</div>
            <div className="text-accent text-[0.7rem] tracking-[0.12em] uppercase">Wholesale LLC</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-[0.875rem] text-white/80 hover:text-white font-medium tracking-wide transition-colors"
              style={{fontFamily:'DM Sans,sans-serif'}}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/supplier-info" className="btn-primary text-sm py-2.5 px-5">
            Partner With Us
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-mid border-t border-white/10">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white py-2.5 text-sm font-medium border-b border-white/5 last:border-0"
                style={{fontFamily:'DM Sans,sans-serif'}}>
                {l.label}
              </Link>
            ))}
            <Link href="/supplier-info" onClick={() => setOpen(false)}
              className="btn-primary text-center text-sm mt-3">
              Partner With Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
