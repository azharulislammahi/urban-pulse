import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Urban Pulse Wholesale | Michigan Fragrance & Beauty Distributor',
  description:
    'Urban Pulse Wholesale LLC is a Michigan-registered wholesale distributor focused on fragrance, perfume and beauty. Authorized sourcing only, MAP compliant, full documentation available to brands.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/about' },
  openGraph: {
    title: 'About Urban Pulse Wholesale LLC',
    description: 'A Michigan-registered fragrance and beauty wholesale distributor. Authorized accounts only, MAP compliant.',
    url: 'https://www.urbanpulsewholesale.com/about',
  },
}

const facts = [
  { k: 'Legal entity',   v: 'Urban Pulse Wholesale LLC' },
  { k: 'Registered in',  v: 'State of Michigan, United States' },
  { k: 'Tax ID',         v: 'EIN issued and on file' },
  { k: 'Based in',       v: 'Warren, Michigan 48093' },
  { k: 'Focus',          v: 'Fragrance, perfume, beauty & personal care' },
  { k: 'Sourcing model', v: 'Brands and authorized distributors only' },
  { k: 'Pricing',        v: 'MAP compliant across every channel' },
  { k: 'Hours',          v: 'Mon–Fri, 9:00 AM – 5:00 PM EST' },
]

const principles = [
  {
    h: 'We only buy from source.',
    p: 'Brands and their authorized distributors — never other resellers, liquidation lots, or unverified suppliers. If we cannot document where a unit came from, we do not buy it.',
  },
  {
    h: 'We sell at your price.',
    p: 'MAP is not a suggestion we follow when convenient. We price to policy, monitor our own listings, and correct anything out of line without waiting to be asked.',
  },
  {
    h: 'We put the paperwork first.',
    p: 'LLC formation documents, EIN, resale certificate, W-9, references and invoice history are prepared and ready. Onboarding should not stall because a distributor is slow with documents.',
  },
  {
    h: 'We stay in our lane.',
    p: 'Fragrance and the beauty products beside it. Narrow focus is how a small distributor earns real category knowledge instead of a long, shallow catalog.',
  },
]

export default function AboutPage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .fact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .prin-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 4rem; }
        @media (max-width: 767px) {
          .fact-grid { grid-template-columns: 1fr !important; }
          .prin-grid { grid-template-columns: 1fr !important; gap: 2.25rem !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="amber-wash grain" style={{ paddingTop: '11rem', paddingBottom: '6rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 840 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>About the company</div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
            Easy to approve.
            <br />
            Difficult to regret.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.9 }}>
            Urban Pulse Wholesale LLC is a registered Michigan wholesale distribution company working in fragrance,
            perfume and beauty. We are small, deliberately specialised, and built around the standards that fragrance
            brands apply when they decide who is allowed to sell their product.
          </p>
        </div>
      </section>

      {/* ══ STORY ══ */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <div className="two-col">
            <div>
              <div className="rule" />
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Our story</div>
              <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1.75rem' }}>
                Why we narrowed to one category family.
              </h2>
              <p className="body-copy" style={{ marginBottom: '1.25rem' }}>
                We started as a general wholesale distributor working across several consumer categories. What became
                clear quickly was that breadth is not what brands reward. A brand asking who you are does not want a
                catalog — it wants to know that you understand its channel policy, its counterfeit exposure and its
                compliance requirements well enough to be trusted with the product.
              </p>
              <p className="body-copy" style={{ marginBottom: '1.25rem' }}>
                Fragrance is the category where that is most acutely true. It is heavily counterfeited, tightly
                controlled by the houses that own it, restricted on major marketplaces, and regulated as hazardous
                freight once alcohol is involved. It is a category where a careful distributor is genuinely worth
                something, and a careless one does real damage.
              </p>
              <p className="body-copy" style={{ marginBottom: '2rem' }}>
                So we committed to it. Fragrance and perfume as the core, beauty and personal care as the adjacent line,
                and nothing else competing for attention.
              </p>
              <Link href="/categories" className="btn btn-outline">
                What we distribute <ArrowRight size={14} />
              </Link>
            </div>

            <div className="media" style={{ height: 520 }}>
              <img
                src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=900&q=80"
                alt="Fragrance bottles representing Urban Pulse Wholesale's core category"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══ COMPANY FACTS ══ */}
      <section className="section grain" style={{ background: '#14100D' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 620, marginBottom: '3rem' }}>
            <div className="rule" />
            <div className="eyebrow eyebrow-light" style={{ marginBottom: '1rem' }}>Company details</div>
            <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1rem' }}>
              The facts an onboarding team asks for.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Supporting documents — formation certificate, EIN letter, resale certificate, W-9 and references — are
              sent on request, usually the same day.
            </p>
          </div>

          <div className="fact-grid">
            {facts.map((f, i) => (
              <div
                key={f.k}
                style={{
                  padding: '1.5rem 0',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  borderBottom: i >= facts.length - 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'baseline',
                }}
              >
                <div style={{ minWidth: 150, color: 'rgba(255,255,255,0.38)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {f.k}
                </div>
                <div style={{ color: '#FBF8F3', fontSize: '0.95rem', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1.6 }}>
                  {f.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRINCIPLES ══ */}
      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>How we operate</div>
            <h2 className="display display-lg" style={{ color: '#14100D' }}>Four commitments we do not trade away.</h2>
          </div>

          <div className="prin-grid">
            {principles.map(p => (
              <div key={p.h}>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.5rem', color: '#14100D', marginBottom: '0.9rem' }}>
                  {p.h}
                </h3>
                <p className="body-copy" style={{ margin: 0 }}>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section-sm grain" style={{ background: '#1F1913' }}>
        <div className="page-wrap" style={{ textAlign: 'center', maxWidth: 680, position: 'relative', zIndex: 2 }}>
          <h2 className="display display-md" style={{ color: '#FBF8F3', marginBottom: '1.25rem' }}>
            Want our documentation package?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.98rem', lineHeight: 1.85, marginBottom: '2rem' }}>
            Ask and we will send the full set — formation documents, EIN, resale certificate, W-9 and references.
          </p>
          <Link href="/supplier-info" className="btn btn-gold">
            Request documentation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
