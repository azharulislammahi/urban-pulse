import Link from 'next/link'
import Logo from './Logo'
import FooterLink from './FooterLink'

const GOLD = '#B8873C'

const columns: { title: string; links: [string, string][] }[] = [
  {
    title: 'Company',
    links: [
      ['/', 'Home'],
      ['/about', 'About Us'],
      ['/categories', 'Fragrance & Beauty'],
      ['/partnerships', 'Partnerships'],
      ['/fba-operations', 'Operations'],
    ],
  },
  {
    title: 'For Brands',
    links: [
      ['/supplier-info', 'Wholesale Inquiry'],
      ['/supplier-info#onboarding', 'Onboarding & Documentation'],
      ['/partnerships', 'Why Partner With Us'],
      ['/fba-operations#compliance', 'Compliance'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['/contact', 'Contact Us'],
      ['/privacy', 'Privacy Policy'],
      ['/terms', 'Terms of Service'],
      ['/cookies', 'Cookie Policy'],
    ],
  },
]

const contact: { symbol: string; value: string; href?: string }[] = [
  { symbol: '@', value: 'support@urbanpulsewholesale.com', href: 'mailto:support@urbanpulsewholesale.com' },
  { symbol: '#', value: '(586) 200-8750', href: 'tel:+15862008750' },
  { symbol: '⊙', value: 'Warren, MI 48093' },
  { symbol: '+', value: 'Mon–Fri, 9:00 AM – 5:00 PM EST' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#14100D', color: 'rgba(255,255,255,0.92)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '5rem 1.5rem 2rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            paddingBottom: '3.5rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <Logo size="sm" variant="light" />
            <p
              style={{
                color: 'rgba(255,255,255,0.45)',
                fontSize: '0.875rem',
                lineHeight: 1.85,
                marginTop: '1.25rem',
                marginBottom: '1.5rem',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                maxWidth: 300,
              }}
            >
              A Michigan-registered wholesale distributor focused on fragrance, perfume and beauty — sourced
              exclusively from brands and authorized distributors, sold under MAP.
            </p>
            <a
              href="https://linkedin.com/company/urban-pulse-wholesale"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: GOLD,
                fontSize: '0.7rem',
                fontWeight: 700,
                textDecoration: 'none',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {columns.map(col => (
            <div key={col.title}>
              <div
                style={{
                  color: GOLD,
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: '1.25rem',
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {col.links.map(([href, label]) => (
                  <li key={href}>
                    <FooterLink href={href} label={label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div
              style={{
                color: GOLD,
                fontSize: '0.66rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              Contact
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {contact.map(c => (
                <li key={c.value} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: GOLD, fontSize: '0.8rem', lineHeight: 1.6, flexShrink: 0 }} aria-hidden="true">
                    {c.symbol}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        textDecoration: 'none',
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                        wordBreak: 'break-word',
                      }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.45)',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        fontFamily: 'Plus Jakarta Sans, sans-serif',
                      }}
                    >
                      {c.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          style={{
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.24)', fontSize: '0.76rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            © {year} Urban Pulse Wholesale LLC. All rights reserved. Fragrance &amp; beauty wholesale distribution — Warren, MI.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['/privacy', 'Privacy'], ['/terms', 'Terms'], ['/cookies', 'Cookies']].map(([h, l]) => (
              <Link
                key={h}
                href={h}
                style={{ color: 'rgba(255,255,255,0.24)', fontSize: '0.76rem', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
