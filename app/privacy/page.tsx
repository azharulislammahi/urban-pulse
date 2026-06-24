import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Urban Pulse Wholesale',
  description: 'Privacy Policy for Urban Pulse Wholesale — how we collect, use, and protect information provided through our website.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/privacy' },
}

const C = { rust: '#C4623A', cream: '#FAFAF5', cream2: '#F5F0EA', beige: '#EDE7DE', dark: '#1C1C1A', sub: '#6B6460', white: '#ffffff' }

export default function PrivacyPage() {
  const wrap = { maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }
  const h2s  = { fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', color: C.dark, marginBottom: '0.75rem', fontWeight: 700, marginTop: '2.5rem' }
  const ps   = { color: C.sub, lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', margin: 0 }

  const sections = [
    { h: 'Overview', p: 'Urban Pulse Wholesale LLC ("we," "us," or "our") respects the privacy of our business contacts and website visitors. This Privacy Policy explains how we collect, use, and protect information provided through our website at www.urbanpulsewholesale.com.' },
    { h: 'Information We Collect', p: 'We collect information you voluntarily provide through our contact and inquiry forms, including: name, company name, business email address, phone number, and message content. We do not collect payment information through this website.' },
    { h: 'How We Use Your Information', p: 'Information submitted through our forms is used solely to respond to your inquiry and facilitate business communication. We do not sell, rent, or share your information with third parties for marketing purposes.' },
    { h: 'Data Storage & Security', p: 'We implement reasonable technical and organizational measures to protect submitted information. Form submissions are processed securely. We retain contact information only as long as necessary to fulfill business communication purposes.' },
    { h: 'Cookies', p: 'This website may use minimal cookies to support basic website functionality. We do not use tracking or advertising cookies. See our Cookie Policy for details.' },
    { h: 'Your Rights', p: 'You may request access to, correction of, or deletion of information you have submitted to us by contacting us at support@urbanpulsewholesale.com. We will respond to such requests within a reasonable time.' },
    { h: 'Changes to This Policy', p: 'We may update this Privacy Policy periodically. Updates will be reflected by a revised date on this page.' },
    { h: 'Contact', p: 'For questions about this Privacy Policy, contact us at support@urbanpulsewholesale.com.' },
  ]

  return (
    <div style={{ background: C.cream }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '4rem', borderBottom: `1px solid ${C.beige}` }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }} />
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.dark, marginBottom: '0.75rem' }}>Privacy Policy</h1>
          <p style={{ color: C.sub, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.875rem' }}>Last updated: June 2025</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0', background: C.white }}>
        <div style={wrap}>
          {sections.map(({ h, p }) => (
            <div key={h}>
              <h2 style={h2s}>{h}</h2>
              <p style={ps}>{p}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
