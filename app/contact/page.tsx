import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Urban Pulse Wholesale LLC for supplier inquiries, partnership questions, and business documentation requests.',
}

export default function ContactPage() {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', position: 'relative' as const, zIndex: 1 }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden' }}>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>

      {/* HERO */}
      <section style={{ minHeight: '45vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 50%, #081628 100%)', paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.1) 0%, transparent 70%)', top: '-20%', right: '-5%', pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <span style={{ color: '#d4a843', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 }}>Contact Urban Pulse Wholesale</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 560, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We respond to all inquiries within one business day. Whether you're a supplier, brand rep, or partner — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ padding: '6rem 0', background: '#f8f9fc' }}>
        <div style={wrap}>
          <div className="contact-grid">
            {/* Info panel */}
            <div>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', color: '#050d1f', marginBottom: '1.5rem', fontWeight: 700 }}>Contact Information</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {[
                  { icon: '✉', label: 'Email', val: '[email@urbanpulsewholesale.com]' },
                  { icon: '✆', label: 'Phone', val: '[Phone Number Placeholder]' },
                  { icon: '⊙', label: 'Address', val: '[Business Address Placeholder]' },
                  { icon: '◷', label: 'Hours', val: 'Monday – Friday, 9AM – 5PM' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', borderRadius: 12, padding: '1.1rem 1.25rem', border: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '1.1rem', color: '#d4a843', lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <div style={{ color: '#050d1f', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.label}</div>
                      <div style={{ color: '#64748b', fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: '#050d1f', borderRadius: 16, padding: '1.5rem' }}>
                <div style={{ color: '#d4a843', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Response Time</div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  All inquiries answered within <strong style={{ color: '#d4a843' }}>1 business day</strong>. For documentation requests, allow up to 2 business days for complete packages.
                </p>
              </div>
            </div>

            {/* Live form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
