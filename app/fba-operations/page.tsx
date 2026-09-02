import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Operations & Compliance | Fragrance Wholesale Distribution',
  description:
    'How Urban Pulse Wholesale handles fragrance distribution: Dangerous Goods classification and SDS documentation, FDA cosmetic labeling review, lot traceability, MAP monitoring, inventory forecasting and controlled fulfillment.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/fba-operations' },
  openGraph: {
    title: 'Operations & Compliance | Urban Pulse Wholesale',
    description: 'Dangerous Goods, SDS, FDA cosmetic labeling, lot traceability and MAP monitoring for fragrance and beauty distribution.',
    url: 'https://www.urbanpulsewholesale.com/fba-operations',
  },
}

const compliance = [
  {
    h: 'Dangerous Goods & SDS',
    p: 'Alcohol-based fragrance is a flammable liquid and is treated as regulated freight. We classify products correctly, hold Safety Data Sheets on file, submit them where a marketplace or carrier requires it, and pack to the applicable limited-quantity rules.',
  },
  {
    h: 'Cosmetic labeling review',
    p: 'Before a product is listed we check labeling against FDA cosmetic requirements — ingredient declarations, net contents, responsible-party identification and any required warnings. Non-compliant labeling is resolved with the brand, not ignored.',
  },
  {
    h: 'Lot & batch traceability',
    p: 'Every inbound shipment is recorded against its supplier invoice, with lot or batch identifiers captured where the brand provides them. If a brand needs to trace a unit, the record exists.',
  },
  {
    h: 'Restricted category readiness',
    p: 'Fragrance and beauty are gated on major marketplaces. We maintain the invoice, authorization and compliance documentation those approvals require rather than assembling it under deadline.',
  },
]

const workflow = [
  { n: '01', h: 'Sourcing', p: 'Purchase orders placed directly with the brand or its authorized distributor, against agreed wholesale terms.' },
  { n: '02', h: 'Receiving', p: 'Inbound units checked against invoice, condition inspected, lot data captured, documentation filed.' },
  { n: '03', h: 'Prep & labeling', p: 'Products prepped to marketplace and carrier standards, with hazard labeling applied where required.' },
  { n: '04', h: 'Listing control', p: 'Listings built from brand-supplied content and priced to MAP. No altered titles, no invented claims.' },
  { n: '05', h: 'Fulfillment', p: 'Shipment through professional fulfillment infrastructure, with tracking retained against each order.' },
  { n: '06', h: 'Replenishment', p: 'Sell-through monitored and reorders forecast so approved SKUs do not fall out of stock.' },
]

export default function OperationsPage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .comp-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 4rem; }
        .flow-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        @media (max-width: 1023px) { .flow-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 767px) {
          .comp-grid { grid-template-columns: 1fr !important; gap: 2.25rem !important; }
          .flow-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      <section className="amber-wash grain" style={{ paddingTop: '11rem', paddingBottom: '6rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 840 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>Operations &amp; compliance</div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
            The unglamorous part, done properly.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.9 }}>
            Fragrance is regulated freight in a gated category. Most of the risk a brand carries when it appoints a
            distributor sits in handling, documentation and pricing discipline — so that is where we put our attention.
          </p>
        </div>
      </section>

      <section id="compliance" className="section" style={{ background: '#FBF8F3', scrollMarginTop: '5rem' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Compliance</div>
            <h2 className="display display-lg" style={{ color: '#14100D' }}>Four requirements we treat as non-negotiable.</h2>
          </div>
          <div className="comp-grid">
            {compliance.map(c => (
              <div key={c.h} style={{ borderTop: '1px solid #E2D5C2', paddingTop: '1.75rem' }}>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.45rem', color: '#14100D', marginBottom: '0.9rem' }}>
                  {c.h}
                </h3>
                <p className="body-copy" style={{ margin: 0 }}>{c.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div className="media fba-img" style={{ height: 420 }}>
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80"
              alt="Wholesale fulfillment operations for fragrance and beauty products"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>Workflow</div>
            <h2 className="display display-lg" style={{ color: '#14100D' }}>From purchase order to reorder.</h2>
          </div>
          <div className="flow-grid">
            {workflow.map(w => (
              <div key={w.n} style={{ borderTop: '1px solid #E2D5C2', paddingTop: '1.5rem' }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300, fontSize: '2rem', color: '#B8873C', lineHeight: 1, marginBottom: '0.9rem' }}>
                  {w.n}
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.2rem', color: '#14100D', marginBottom: '0.6rem' }}>
                  {w.h}
                </h3>
                <p style={{ color: '#6B5F51', fontSize: '0.875rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  {w.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section grain" style={{ background: '#14100D' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 760 }}>
          <div className="rule" />
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1rem' }}>Pricing discipline</div>
          <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1.5rem' }}>
            MAP is enforced on our side of the relationship.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.58)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem', lineHeight: 1.9, marginBottom: '1.5rem' }}>
            We price to the policy you publish, review our own listings against it, and correct anything that drifts —
            including automated repricing, which we keep bounded by your floor rather than by market pressure.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            If we see other sellers breaking your MAP, we will tell you. A brand that loses control of its pricing is a
            brand we eventually lose too, so our interests here are the same as yours.
          </p>
          <Link href="/supplier-info" className="btn btn-gold">
            Request our compliance documentation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
