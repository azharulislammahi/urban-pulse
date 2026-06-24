import type { Metadata } from 'next'
import { CheckCircle2 } from 'lucide-react'
import SupplierForm from '../components/SupplierForm'

export const metadata: Metadata = {
  title: 'Supplier Information & Wholesale Inquiry | Urban Pulse Wholesale',
  description: 'Brands and distributors: apply to work with Urban Pulse Wholesale as an authorized wholesale buyer. We provide LLC documentation, EIN, resale certificate, Amazon verification, and signed MAP agreements. Fast response.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/supplier-info' },
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

export default function SupplierInfoPage() {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', position: 'relative' as const, zIndex: 1 }
  const bar  = { width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }
  const barC = { width: 36, height: 3, background: C.rust, borderRadius: 2, margin: '0 auto 1.25rem' }
  const h2   = { fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: C.dark, marginBottom: '1.25rem', fontWeight: 900 }
  const p    = { color: C.sub, lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }

  return (
    <div style={{ background: C.cream, overflowX: 'hidden' }}>
      <style>{`
        .sup-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        @media (max-width: 900px) { .sup-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.07) 0%, transparent 70%)', top: '-20%', right: '-5%', pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
            <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>For Suppliers &amp; Brands</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: C.dark, marginBottom: '1.25rem', lineHeight: 1.05, maxWidth: 700 }}>Supplier Information &amp; Wholesale Inquiry</h1>
          <p style={{ color: C.sub, fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 620, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Urban Pulse Wholesale is actively seeking authorized wholesale accounts — with particular interest in Fragrance &amp; Perfume, Home &amp; Kitchen, and Pet Supplies. We are a Michigan-registered LLC with complete onboarding documentation ready, a clean Amazon Professional Seller account, and a track record of MAP-compliant purchasing. We respond to all supplier inquiries within one business day.</p>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE + ONBOARDING ── */}
      <section style={{ padding: '6rem 0', background: C.white }}>
        <div style={wrap}>
          <div className="sup-grid">
            <div>
              <div style={bar} />
              <h2 style={h2}>What We Provide During Onboarding</h2>
              <p style={{ ...p, marginBottom: '1.75rem' }}>We provide complete documentation and are fully transparent about our operations from day one.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { doc: 'LLC Business Registration', desc: 'State registration confirming Urban Pulse Wholesale LLC as a registered business entity.' },
                  { doc: 'EIN / Federal Tax ID', desc: 'Federal Employer Identification Number for W-9 and all tax documentation.' },
                  { doc: 'State Resale Certificate', desc: 'Valid resale certificate confirming tax-exempt resale purchases.' },
                  { doc: 'Amazon Seller Verification', desc: 'Evidence of our active, in-good-standing Amazon professional seller account.' },
                  { doc: 'Signed Supplier Agreements', desc: 'We sign all MAP policies, reseller agreements, and terms as required.' },
                  { doc: 'Business References', desc: 'Available upon request from existing business relationships.' },
                ].map(item => (
                  <div key={item.doc} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', padding: '1rem 1.1rem', background: C.cream, borderRadius: 10, border: `1px solid ${C.beige}` }}>
                    <CheckCircle2 size={16} color={C.rust} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ color: C.dark, fontWeight: 700, fontSize: '0.875rem', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.doc}</div>
                      <div style={{ color: C.sub, fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="onboarding">
              <div style={bar} />
              <h2 style={h2}>Our Onboarding Process</h2>
              <p style={{ ...p, marginBottom: '1.75rem' }}>We follow your process exactly — no shortcuts, no special requests.</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { n: '1', t: 'Initial Inquiry',    d: 'Professional wholesale account application with full business information through your preferred channel.' },
                  { n: '2', t: 'Documentation',      d: 'All requested documents provided promptly — EIN, resale certificate, LLC registration, any supplier-specific forms.' },
                  { n: '3', t: 'Agreement Review',   d: 'We review and sign all required agreements including MAP policies, reseller terms, and any other requirements.' },
                  { n: '4', t: 'First Purchase',     d: 'Initial order sized appropriately for our market research and inventory plan. Payment per agreed terms.' },
                  { n: '5', t: 'Ongoing Partnership', d: 'Consistent, growing orders based on sales data. Proactive communication and full account management.' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', position: 'relative' }}>
                    {i < 4 && <div style={{ position: 'absolute', left: 18, top: 38, bottom: 0, width: 2, background: `linear-gradient(180deg, rgba(196,98,58,0.4), rgba(196,98,58,0.05))` }} />}
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: C.rust, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                      <span style={{ color: C.white, fontWeight: 800, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.n}</span>
                    </div>
                    <div style={{ paddingTop: 6 }}>
                      <div style={{ color: C.dark, fontWeight: 700, fontSize: '0.95rem', marginBottom: 4, fontFamily: 'Fraunces, Georgia, serif' }}>{step.t}</div>
                      <div style={{ color: C.sub, fontSize: '0.875rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPLIER FORM ── */}
      <section style={{ padding: '6rem 0', background: C.cream2 }}>
        <div style={wrap}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div style={barC} />
              <h2 style={{ ...h2, textAlign: 'center' }}>Wholesale Inquiry Form</h2>
              <p style={{ color: C.muted, fontSize: '1rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Supplier or brand representative? Submit your inquiry and we'll follow up within one business day.</p>
            </div>
            <SupplierForm />
          </div>
        </div>
      </section>
    </div>
  )
}
