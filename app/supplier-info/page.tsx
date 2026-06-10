import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import SupplierForm from '../components/SupplierForm'

export const metadata: Metadata = {
  title: 'Supplier Information & Inquiry',
  description: 'Information for brands and distributors interested in working with Urban Pulse Wholesale LLC as an authorized wholesale buyer.',
}

export default function SupplierInfoPage() {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', position: 'relative' as const, zIndex: 1 }

  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden' }}>
      <style>{`
        .sup-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        @media (max-width: 900px) { .sup-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>

      {/* HERO */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 50%, #081628 100%)', paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)', top: '-20%', right: '-5%', pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(14,165,176,0.1)', border: '1px solid rgba(14,165,176,0.25)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <span style={{ color: '#0ea5b0', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>For Suppliers & Brands</span>
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.1, maxWidth: 700 }}>Supplier Information & Wholesale Inquiry</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 600, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We welcome opportunities to establish new supplier relationships and are committed to maintaining professional standards throughout the onboarding process.
          </p>
        </div>
      </section>

      {/* WHAT WE PROVIDE + ONBOARDING */}
      <section style={{ padding: '6rem 0', background: 'white' }}>
        <div style={wrap}>
          <div className="sup-grid">
            <div>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#050d1f', marginBottom: '1.25rem', fontWeight: 700 }}>What We Provide During Onboarding</h2>
              <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '1.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                We provide complete documentation and are fully transparent about our operations from day one.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { doc: 'LLC Business Registration', desc: 'State registration confirming Urban Pulse Wholesale LLC as a registered business entity.' },
                  { doc: 'EIN / Federal Tax ID', desc: 'Federal Employer Identification Number for W-9 and all tax documentation.' },
                  { doc: 'State Resale Certificate', desc: 'Valid resale certificate confirming tax-exempt resale purchases.' },
                  { doc: 'Amazon Seller Verification', desc: 'Evidence of our active, in-good-standing Amazon professional seller account.' },
                  { doc: 'Signed Supplier Agreements', desc: 'We sign all MAP policies, reseller agreements, and terms as required.' },
                  { doc: 'Business References', desc: 'Available upon request from existing business relationships.' },
                ].map(item => (
                  <div key={item.doc} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', padding: '1rem 1.1rem', background: '#f8f9fc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
                    <CheckCircle2 size={16} color="#d4a843" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ color: '#050d1f', fontWeight: 700, fontSize: '0.875rem', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.doc}</div>
                      <div style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="onboarding">
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#050d1f', marginBottom: '1rem', fontWeight: 700 }}>Our Onboarding Process</h2>
              <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '1.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>We follow your process exactly — no shortcuts, no special requests.</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { n: '1', t: 'Initial Inquiry', d: 'Professional wholesale account application with full business information through your preferred channel.' },
                  { n: '2', t: 'Documentation', d: 'All requested documents provided promptly — EIN, resale certificate, LLC registration, any supplier-specific forms.' },
                  { n: '3', t: 'Agreement Review', d: 'We review and sign all required agreements including MAP policies, reseller terms, and any other requirements.' },
                  { n: '4', t: 'First Purchase', d: 'Initial order sized appropriately for our market research and inventory plan. Payment per agreed terms.' },
                  { n: '5', t: 'Ongoing Partnership', d: 'Consistent, growing orders based on sales data. Proactive communication and full account management.' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', position: 'relative' }}>
                    {i < 4 && <div style={{ position: 'absolute', left: 18, top: 38, bottom: 0, width: 2, background: 'linear-gradient(180deg, rgba(212,168,67,0.4), rgba(212,168,67,0.05))' }} />}
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.n}</span>
                    </div>
                    <div style={{ paddingTop: 6 }}>
                      <div style={{ color: '#050d1f', fontWeight: 700, fontSize: '0.95rem', marginBottom: 4, fontFamily: 'Playfair Display, serif' }}>{step.t}</div>
                      <div style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPLIER FORM */}
      <section style={{ padding: '6rem 0', background: '#f8f9fc' }}>
        <div style={wrap}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#050d1f', marginBottom: '1rem', fontWeight: 700 }}>Wholesale Inquiry Form</h2>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Supplier or brand representative? Submit your inquiry and we'll follow up within one business day.
              </p>
            </div>
            <SupplierForm />
          </div>
        </div>
      </section>
    </div>
  )
}
