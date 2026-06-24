import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Urban Pulse Wholesale — (586) 200-8750',
  description: 'Contact Urban Pulse Wholesale. Email: support@urbanpulsewholesale.com | Phone: (586) 200-8750. We respond to all supplier and partnership inquiries within 1 business day.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/contact' },
}

const C = {
  rust:   '#C4623A',
  cream:  '#FAFAF5',
  cream2: '#F5F0EA',
  beige:  '#EDE7DE',
  dark:   '#1C1C1A',
  mid:    '#3D3D3B',
  sub:    '#6B6460',
  muted:  '#9A9086',
  white:  '#ffffff',
}

export default function ContactPage() {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', position: 'relative' as const, zIndex: 1 }

  return (
    <div style={{ background: C.cream, overflowX: 'hidden' }}>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 4rem; align-items: start; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ minHeight: '45vh', display: 'flex', alignItems: 'center', background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.07) 0%, transparent 70%)', top: '-20%', right: '-5%', pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
            <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Get In Touch</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: C.dark, marginBottom: '1.25rem', lineHeight: 1.05 }}>Contact Urban Pulse Wholesale</h1>
          <p style={{ color: C.sub, fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 560, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We respond to all inquiries within one business day. Whether you're a supplier, brand rep, or partner — we'd love to hear from you.</p>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section style={{ padding: '6rem 0', background: C.cream2 }}>
        <div style={wrap}>
          <div className="contact-grid">
            {/* Info panel */}
            <div>
              <div style={{ width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.75rem', color: C.dark, marginBottom: '1.5rem', fontWeight: 900 }}>Contact Information</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '2rem' }}>
                {[
                  { symbol: '@', label: 'Email', val: 'support@urbanpulsewholesale.com', href: 'mailto:support@urbanpulsewholesale.com' },
                  { symbol: '#', label: 'Phone', val: '(586) 200-8750', href: 'tel:5862008750' },
                  { symbol: '+', label: 'Hours', val: 'Monday – Friday, 9:00 AM – 5:00 PM EST', href: undefined },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: C.white, borderRadius: 12, padding: '1.1rem 1.25rem', border: `1px solid ${C.beige}` }}>
                    <span style={{ fontSize: '1rem', color: C.rust, lineHeight: 1, flexShrink: 0, marginTop: 2, fontWeight: 700 }}>{item.symbol}</span>
                    <div>
                      <div style={{ color: C.dark, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.label}</div>
                      {item.href
                        ? <a href={item.href} style={{ color: C.sub, fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textDecoration: 'none' }}>{item.val}</a>
                        : <div style={{ color: C.sub, fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: C.dark, borderRadius: 16, padding: '1.5rem' }}>
                <div style={{ color: C.rust, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Response Time</div>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.875rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  All inquiries answered within <strong style={{ color: C.rust }}>1 business day</strong>. For documentation requests, allow up to 2 business days for complete packages.
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
