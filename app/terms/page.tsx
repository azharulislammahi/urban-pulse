import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Urban Pulse Wholesale',
  description: 'Terms of Service for Urban Pulse Wholesale — governing use of our website and services.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/terms' },
}

const C = { rust: '#C4623A', cream: '#FAFAF5', cream2: '#F5F0EA', beige: '#EDE7DE', dark: '#1C1C1A', sub: '#6B6460', white: '#ffffff' }

export default function TermsPage() {
  const wrap = { maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }
  const h2s  = { fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', color: C.dark, marginBottom: '0.75rem', fontWeight: 700, marginTop: '2.5rem' }
  const ps   = { color: C.sub, lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', margin: 0 }

  const sections = [
    { h: 'Acceptance of Terms', p: 'By accessing or using the Urban Pulse Wholesale LLC website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.' },
    { h: 'Website Purpose', p: "This website is intended to provide information about Urban Pulse Wholesale LLC's business operations and to facilitate inquiries from potential and existing wholesale supplier partners. It is not a consumer-facing retail website." },
    { h: 'Accuracy of Information', p: "We strive to provide accurate and current information on this website. Business details, contact information, and operational descriptions reflect our current practices to the best of our knowledge." },
    { h: 'Intellectual Property', p: 'All content on this website, including text, design, and graphics, is the property of Urban Pulse Wholesale LLC unless otherwise noted. Unauthorized reproduction or distribution is prohibited.' },
    { h: 'No Guarantees', p: 'Nothing on this website constitutes a guarantee of business outcomes, order volumes, or partnership terms. All business relationships are subject to negotiation and written agreement.' },
    { h: 'Links', p: 'This website may contain links to third-party sites. We are not responsible for the content or practices of those sites.' },
    { h: 'Limitation of Liability', p: 'Urban Pulse Wholesale LLC shall not be liable for any damages arising from use of or inability to use this website or its content.' },
    { h: 'Governing Law', p: 'These Terms are governed by the laws of the state of Michigan, without regard to conflict of law provisions.' },
    { h: 'Contact', p: 'Questions about these Terms may be directed to support@urbanpulsewholesale.com.' },
  ]

  return (
    <div style={{ background: C.cream }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '4rem', borderBottom: `1px solid ${C.beige}` }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }} />
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.dark, marginBottom: '0.75rem' }}>Terms of Service</h1>
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
