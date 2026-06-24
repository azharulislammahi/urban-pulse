import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | Urban Pulse Wholesale',
  description: 'Cookie Policy for Urban Pulse Wholesale — how we use cookies on our website.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/cookies' },
}

const C = { rust: '#C4623A', cream: '#FAFAF5', cream2: '#F5F0EA', beige: '#EDE7DE', dark: '#1C1C1A', sub: '#6B6460', white: '#ffffff' }

export default function CookiesPage() {
  const wrap = { maxWidth: 800, margin: '0 auto', padding: '0 1.5rem' }
  const h2s  = { fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.25rem', color: C.dark, marginBottom: '0.75rem', fontWeight: 700, marginTop: '2.5rem' }
  const ps   = { color: C.sub, lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', margin: 0 }

  const sections = [
    { h: 'What Are Cookies', p: 'Cookies are small text files stored on your device when you visit a website. They help the website function correctly and can provide information about how visitors use the site.' },
    { h: 'How We Use Cookies', p: 'The Urban Pulse Wholesale LLC website uses only essential functional cookies necessary for basic website operation. We do not use tracking, advertising, or behavioral analytics cookies.' },
    { h: 'Types of Cookies We Use', p: 'Essential cookies only: These are required for core website functionality such as form submission security and session management. These cannot be disabled without affecting website function.' },
    { h: 'Third-Party Cookies', p: 'We do not knowingly allow third-party advertising or tracking cookies. If third-party services are integrated in the future (such as contact form providers), their cookie practices will be disclosed here.' },
    { h: 'Managing Cookies', p: "You may control or delete cookies through your browser settings. Note that disabling essential cookies may impact website functionality. Instructions for managing cookies vary by browser — please consult your browser's help documentation." },
    { h: 'Updates', p: 'We may update this Cookie Policy as our website evolves. The revised date at the top of this page will reflect any changes.' },
    { h: 'Contact', p: 'For questions about our cookie practices, contact support@urbanpulsewholesale.com.' },
  ]

  return (
    <div style={{ background: C.cream }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '4rem', borderBottom: `1px solid ${C.beige}` }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }} />
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.dark, marginBottom: '0.75rem' }}>Cookie Policy</h1>
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
