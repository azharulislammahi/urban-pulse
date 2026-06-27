import Link from 'next/link'
import Logo from './Logo'
import FooterLink from './FooterLink'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ background: '#1C1C1A', color: 'white', borderTop: '1px solid rgba(196,98,58,0.18)' }}>
      <div className="container" style={{ padding: '4rem 1.5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2.5rem', paddingBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          <div>
            <Logo size="sm" variant="light" />
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', lineHeight: 1.75, marginTop: '1rem', marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Professional wholesale distribution across 6 product categories. Building lasting supplier partnerships with transparent, MAP-compliant operations.
            </p>
            <a href="https://linkedin.com/company/urban-pulse-wholesale" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#C4623A', fontSize: '0.78rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
          </div>

          {[
            {
              title: 'Company',
              links: [
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/partnerships', 'Partnerships'],
                ['/fba-operations', 'Operations'],
                ['/categories', 'Product Categories'],
                ['/catalog', 'Product Catalog'],
              ],
            },
            {
              title: 'Suppliers',
              links: [
                ['/supplier-info', 'Supplier Inquiry'],
                ['/supplier-info#onboarding', 'Onboarding'],
                ['/partnerships', 'Why Partner With Us'],
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
          ].map(col => (
            <div key={col.title}>
              <div style={{ color: '#C4623A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{col.title}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map(([href, label]) => (
                  <li key={href}><FooterLink href={href} label={label} /></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div style={{ color: '#C4623A', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Contact</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#C4623A', fontSize: '0.85rem', marginTop: 1 }}>@</span>
                <a href="mailto:support@urbanpulsewholesale.com" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>support@urbanpulsewholesale.com</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#C4623A', fontSize: '0.85rem', marginTop: 1 }}>#</span>
                <a href="tel:5862008750" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, textDecoration: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>(586) 200-8750</a>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#C4623A', fontSize: '0.85rem', marginTop: 1 }}>⊙</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Warren, MI 48093</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: '#C4623A', fontSize: '0.85rem', marginTop: 1 }}>+</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Mon–Fri 9AM–5PM EST</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            © {year} Urban Pulse Wholesale LLC. All rights reserved. Professional wholesale distributor — Warren, MI.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['/privacy','Privacy'],['/terms','Terms'],['/cookies','Cookies']].map(([h,l]) => (
              <Link key={h} href={h} style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.78rem', textDecoration: 'none', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
