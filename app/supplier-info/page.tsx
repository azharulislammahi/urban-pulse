import type { Metadata } from 'next'
import SupplierForm from '../components/SupplierForm'

export const metadata: Metadata = {
  title: 'Wholesale Inquiry & Supplier Information | Urban Pulse Wholesale',
  description:
    'Open an authorized wholesale account with Urban Pulse Wholesale LLC. Company documentation, onboarding steps and a direct inquiry form for fragrance and beauty brands and distributors.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/supplier-info' },
  openGraph: {
    title: 'Wholesale Inquiry | Urban Pulse Wholesale',
    description: 'Documentation, onboarding steps and a direct inquiry form for fragrance and beauty brands.',
    url: 'https://www.urbanpulsewholesale.com/supplier-info',
  },
}

const docs = [
  { h: 'Certificate of formation', p: 'Michigan LLC registration for Urban Pulse Wholesale LLC.' },
  { h: 'EIN confirmation', p: 'Federal tax identification letter.' },
  { h: 'Resale certificate', p: 'State sales-tax exemption for wholesale purchasing.' },
  { h: 'Completed W-9', p: 'Signed and dated, ready for your accounts team.' },
  { h: 'Trade references', p: 'Existing supplier relationships available on request.' },
  { h: 'Channel plan', p: 'Written confirmation of where your products would be sold.' },
]

const steps = [
  { n: '01', h: 'You send your requirements', p: 'Wholesale terms, minimum order, authorized-reseller agreement and MAP policy.' },
  { n: '02', h: 'We return our package', p: 'Formation documents, EIN, resale certificate, W-9 and references — same day where possible.' },
  { n: '03', h: 'Agreement signed', p: 'We accept your terms as written and confirm the channels we are approved for.' },
  { n: '04', h: 'Opening order', p: 'A sensibly sized first order, prepped and compliant, with sell-through reported back to you.' },
]

export default function SupplierInfoPage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .sup-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 4rem; align-items: start; }
        .doc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem 3rem; }
        .step-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        @media (max-width: 1023px) {
          .sup-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .step-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 767px) {
          .doc-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
          .step-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section className="amber-wash grain" style={{ paddingTop: '11rem', paddingBottom: '6rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 840 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>Wholesale inquiry</div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
            Everything your onboarding team will ask for.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.9 }}>
            Applications stall on missing paperwork. Ours is prepared in advance — tell us which documents you need and
            they will be in your inbox within one business day.
          </p>
        </div>
      </section>

      <section id="onboarding" className="section" style={{ background: '#FBF8F3', scrollMarginTop: '5rem' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>What we provide</div>
            <h2 className="display display-lg" style={{ color: '#14100D' }}>Our documentation package.</h2>
          </div>
          <div className="doc-grid">
            {docs.map(d => (
              <div key={d.h} style={{ borderTop: '1px solid #E2D5C2', paddingTop: '1.35rem' }}>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.2rem', color: '#14100D', marginBottom: '0.5rem' }}>
                  {d.h}
                </h3>
                <p style={{ color: '#6B5F51', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  {d.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section grain" style={{ background: '#14100D' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow eyebrow-light" style={{ marginBottom: '1rem' }}>Onboarding</div>
            <h2 className="display display-lg" style={{ color: '#FBF8F3' }}>Four steps to a first order.</h2>
          </div>
          <div className="step-grid">
            {steps.map(s => (
              <div key={s.n} style={{ borderTop: '1px solid rgba(200,151,74,0.3)', paddingTop: '1.5rem' }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300, fontSize: '2rem', color: '#D4A85C', lineHeight: 1, marginBottom: '0.9rem' }}>
                  {s.n}
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.15rem', color: '#FBF8F3', marginBottom: '0.6rem' }}>
                  {s.h}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div className="sup-grid">
            <div>
              <div className="rule" />
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Send an inquiry</div>
              <h2 className="display display-md" style={{ color: '#14100D', marginBottom: '1.5rem' }}>
                Tell us which SKUs you want represented.
              </h2>
              <p className="body-copy" style={{ marginBottom: '2rem' }}>
                The more specific you are about products and channels, the more useful our reply will be. If you are a
                brand reviewing us for an authorized account, say so and we will send the full documentation package
                with our response.
              </p>
              <div style={{ borderTop: '1px solid #E2D5C2', paddingTop: '1.5rem' }}>
                <div className="eyebrow" style={{ marginBottom: '0.85rem' }}>Prefer email?</div>
                <a href="mailto:support@urbanpulsewholesale.com" style={{ display: 'block', color: '#14100D', fontSize: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textDecoration: 'none', marginBottom: '0.5rem', wordBreak: 'break-word' }}>
                  support@urbanpulsewholesale.com
                </a>
                <a href="tel:+15862008750" style={{ display: 'block', color: '#6B5F51', fontSize: '0.95rem', fontFamily: 'Plus Jakarta Sans, sans-serif', textDecoration: 'none' }}>
                  (586) 200-8750
                </a>
              </div>
            </div>
            <SupplierForm />
          </div>
        </div>
      </section>
    </div>
  )
}
