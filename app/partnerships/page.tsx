import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wholesale Partnerships for Fragrance & Beauty Brands',
  description:
    'What Urban Pulse Wholesale offers fragrance and beauty brands: authorized sourcing, MAP enforcement, full documentation, channel transparency and consistent reorders. Michigan LLC, authorized accounts only.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/partnerships' },
  openGraph: {
    title: 'Wholesale Partnerships | Urban Pulse Wholesale',
    description: 'Authorized wholesale partnerships for fragrance and beauty brands. MAP compliant, fully documented.',
    url: 'https://www.urbanpulsewholesale.com/partnerships',
  },
}

const objections = [
  {
    q: '“We do not sell to marketplace resellers.”',
    a: 'Reasonable — most are unaccountable. We sign your authorized-reseller agreement, sell only in the channels you approve, keep an invoice trail on every unit, and give you a named contact who answers. If you later want us out of a channel, we exit it.',
  },
  {
    q: '“Our MAP gets destroyed on Amazon.”',
    a: 'MAP violations usually come from diverted product, not authorized accounts. We price to your policy, monitor our own listings, and will flag other sellers we see breaking it. We have no interest in racing anyone to the bottom on a brand we want to keep.',
  },
  {
    q: '“We have had counterfeit problems.”',
    a: 'Which is why we buy only from you or your authorized distributors. Every unit we sell traces back to a purchase invoice and, where applicable, a lot or batch number. We can produce that record on request at any time.',
  },
  {
    q: '“Fragrance is complicated to ship.”',
    a: 'It is. Alcohol-based fragrance is a Dangerous Goods classification with SDS requirements and packaging rules, and a restricted category on major marketplaces. We handle that as a matter of course rather than discovering it after the first order.',
  },
]

const offer = [
  { h: 'A signed agreement', p: 'We accept your authorized-reseller terms and MAP policy as written, and we hold to them.' },
  { h: 'Complete documentation', p: 'LLC formation, EIN, resale certificate, W-9, references and invoice history — sent the day you ask.' },
  { h: 'Channel transparency', p: 'You know where your product will be sold before the first purchase order is placed.' },
  { h: 'Predictable reorders', p: 'Forecast-driven purchasing means steady volume rather than one opportunistic buy and silence.' },
  { h: 'Sell-through reporting', p: 'Velocity and stock position shared back to you, so your team can plan against real numbers.' },
  { h: 'One accountable contact', p: 'No ticket queue. A named person who replies within one business day.' },
]

export default function PartnershipsPage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .obj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 4rem; }
        @media (max-width: 900px) { .obj-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; } }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="amber-wash grain" style={{ paddingTop: '11rem', paddingBottom: '6rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 840 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>Partnerships</div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
            What a careful wholesale account looks like.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.9 }}>
            Fragrance brands are right to be selective. This page sets out exactly what we commit to, and answers the
            objections we hear most often — before you have to raise them.
          </p>
        </div>
      </section>

      {/* ══ WHAT WE OFFER ══ */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>What you get</div>
            <h2 className="display display-lg" style={{ color: '#14100D' }}>Six commitments, in writing.</h2>
          </div>

          <div className="three-col">
            {offer.map(o => (
              <div key={o.h} className="card">
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.3rem', color: '#14100D', marginBottom: '0.8rem' }}>
                  {o.h}
                </h3>
                <p className="body-copy" style={{ margin: 0, fontSize: '0.9rem' }}>{o.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OBJECTIONS ══ */}
      <section className="section grain" style={{ background: '#14100D' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 640, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow eyebrow-light" style={{ marginBottom: '1rem' }}>Straight answers</div>
            <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1rem' }}>
              The four reasons brands say no.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.85 }}>
              We would rather address these here than have them go unspoken during an application review.
            </p>
          </div>

          <div className="obj-grid">
            {objections.map(o => (
              <div key={o.q} style={{ borderTop: '1px solid rgba(200,151,74,0.3)', paddingTop: '1.75rem' }}>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.35rem', color: '#D4A85C', marginBottom: '1rem', lineHeight: 1.45 }}>
                  {o.q}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.9, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  {o.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHAT WE ASK ══ */}
      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div className="two-col">
            <div className="media" style={{ height: 440 }}>
              <img
                src="https://images.unsplash.com/photo-1624613533305-28d421d70875?w=900&q=80"
                alt="Fragrance products under an authorized wholesale agreement"
                loading="lazy"
              />
            </div>
            <div>
              <div className="rule" />
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>What we ask for</div>
              <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1.5rem' }}>
                A short list, and nothing unusual.
              </h2>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.1rem', marginBottom: '2.25rem' }}>
                {[
                  'Wholesale pricing and minimum order requirements',
                  'Your authorized-reseller agreement and MAP policy',
                  'Confirmation of the channels we are approved to sell in',
                  'Product data — images, ingredient lists, SDS where applicable',
                  'A named contact for reorders and account questions',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#B8873C', marginTop: 10, flexShrink: 0 }} />
                    <span style={{ color: '#3B3229', fontSize: '0.92rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/supplier-info" className="btn btn-gold">
                Begin an inquiry <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
