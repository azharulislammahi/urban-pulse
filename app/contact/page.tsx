import type { Metadata } from 'next'
import ContactForm from '../components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Urban Pulse Wholesale | (586) 200-8750',
  description:
    'Contact Urban Pulse Wholesale LLC — support@urbanpulsewholesale.com, (586) 200-8750, Warren MI 48093. Fragrance and beauty wholesale inquiries answered within one business day.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/contact' },
  openGraph: {
    title: 'Contact Urban Pulse Wholesale',
    description: 'Fragrance and beauty wholesale inquiries answered within one business day.',
    url: 'https://www.urbanpulsewholesale.com/contact',
  },
}

const details: { label: string; value: string; href?: string }[] = [
  { label: 'Email', value: 'support@urbanpulsewholesale.com', href: 'mailto:support@urbanpulsewholesale.com' },
  { label: 'Phone', value: '(586) 200-8750', href: 'tel:+15862008750' },
  { label: 'Location', value: 'Warren, Michigan 48093, United States' },
  { label: 'Hours', value: 'Monday – Friday, 9:00 AM – 5:00 PM EST' },
]

export default function ContactPage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 4rem; align-items: start; }
        @media (max-width: 1023px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } }
      `}</style>

      <section className="amber-wash grain" style={{ paddingTop: '11rem', paddingBottom: '6rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 780 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>Get in touch</div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
            One business day, every time.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.9 }}>
            Brand representatives, authorized distributors and partners — a real person reads every message and replies
            within one business day.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div className="contact-grid">
            <div>
              <div className="rule" />
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Contact details</div>
              <h2 className="display display-md" style={{ color: '#14100D', marginBottom: '2rem' }}>Reach us directly</h2>

              <div style={{ marginBottom: '2.5rem' }}>
                {details.map(d => (
                  <div key={d.label} style={{ borderTop: '1px solid #E2D5C2', padding: '1.25rem 0' }}>
                    <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>{d.label}</div>
                    {d.href ? (
                      <a href={d.href} style={{ color: '#14100D', fontSize: '0.98rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textDecoration: 'none', wordBreak: 'break-word' }}>
                        {d.value}
                      </a>
                    ) : (
                      <div style={{ color: '#3B3229', fontSize: '0.98rem', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1.6 }}>
                        {d.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ background: '#14100D', borderRadius: 3, padding: '1.75rem' }}>
                <div className="eyebrow eyebrow-light" style={{ marginBottom: '0.85rem' }}>Response time</div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  All inquiries answered within one business day. Complete documentation packages are sent within two
                  business days at the latest, and usually the same day they are requested.
                </p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
