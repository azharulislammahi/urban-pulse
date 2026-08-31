import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, FileCheck2, LineChart, PackageCheck, Handshake, ScrollText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fragrance & Beauty Wholesale Distributor | Urban Pulse Wholesale LLC',
  description:
    'Urban Pulse Wholesale LLC is a Michigan-registered wholesale distributor of fragrance, perfume and beauty products. Authorized accounts only, MAP compliant, Amazon Dangerous Goods and FDA cosmetic labeling literate.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com' },
}

const IMG = {
  hero:     'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1400&q=80',
  bottles:  'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=900&q=80',
  amber:    'https://images.unsplash.com/photo-1624613533305-28d421d70875?w=900&q=80',
  beauty:   'https://images.unsplash.com/photo-1624362772755-4d5843e67047?w=900&q=80',
  care:     'https://images.unsplash.com/photo-1648139346494-2b961c5a2bb7?w=900&q=80',
  ops:      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1000&q=80',
}

const proof = [
  { k: 'Michigan LLC', v: 'Registered entity, EIN on file' },
  { k: 'Authorized only', v: 'Brands & authorized distributors' },
  { k: 'MAP compliant', v: 'Enforced on every listing' },
  { k: 'DG & SDS ready', v: 'Flammables handled correctly' },
]

const pillars = [
  {
    icon: <ShieldCheck size={19} />,
    title: 'Brand protection first',
    desc: 'Signed authorized-reseller terms, MAP enforced on every listing, and no diversion into unauthorized channels. Counterfeits are the fragrance category’s biggest problem — we are part of the solution, not the noise.',
  },
  {
    icon: <FileCheck2 size={19} />,
    title: 'Compliance literacy',
    desc: 'Amazon Dangerous Goods classification and SDS submission for alcohol-based fragrance, FDA cosmetic labeling requirements, and lot/batch traceability from invoice to shipment.',
  },
  {
    icon: <ScrollText size={19} />,
    title: 'Documentation you can audit',
    desc: 'Clean purchase invoices, letters of authorization, W-9 and resale certificates, and a documented chain of custody for every unit we sell.',
  },
  {
    icon: <LineChart size={19} />,
    title: 'Data-led purchasing',
    desc: 'Buying decisions come from verified sell-through, offer-count trends and price stability — not guesswork. We forecast before we commit, and we reorder on evidence.',
  },
  {
    icon: <PackageCheck size={19} />,
    title: 'Controlled fulfillment',
    desc: 'Prep, labeling and shipment through professional fulfillment infrastructure, with inventory forecasting so your SKUs stay in stock instead of cycling in and out.',
  },
  {
    icon: <Handshake size={19} />,
    title: 'Built for the long term',
    desc: 'We open accounts we intend to keep. Consistent reorders, predictable volume, and a single point of contact who answers within one business day.',
  },
]

const lines = [
  {
    tag: 'Core focus',
    name: 'Fragrance & Perfume',
    img: IMG.bottles,
    copy: 'Eau de parfum and eau de toilette, oud, attar and Middle Eastern compositions, perfume oils and roll-ons, body mists and cologne sprays, gift sets, and home fragrance including diffusers and candles.',
  },
  {
    tag: 'Adjacent line',
    name: 'Beauty & Personal Care',
    img: IMG.beauty,
    copy: 'Scented body care, bath and shower, skincare and haircare, cosmetics and grooming — the categories fragrance buyers already shop, from the same authorized-account model.',
  },
]

const process = [
  { n: '01', h: 'Introduction', p: 'You receive a short, specific inquiry — who we are, which of your SKUs we want, and where they will be sold.' },
  { n: '02', h: 'Account review', p: 'We supply the LLC documents, EIN, resale certificate and references your onboarding team needs. No chasing.' },
  { n: '03', h: 'Terms & MAP', p: 'We sign your authorized-reseller agreement and MAP policy as written, and confirm the channels we are approved for.' },
  { n: '04', h: 'First order', p: 'A sized opening order, prepped and compliant, followed by sell-through reporting and a scheduled reorder.' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 4.5rem; align-items: center; }
        .line-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
        .step-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        @media (max-width: 1023px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .step-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
        }
        @media (max-width: 767px) {
          .line-grid { grid-template-columns: 1fr !important; }
          .proof-grid { grid-template-columns: 1fr 1fr !important; }
          .step-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section
        className="amber-wash grain"
        style={{ position: 'relative', overflow: 'hidden', paddingTop: '11rem', paddingBottom: '7rem' }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(90deg, rgba(20,16,13,0.96) 0%, rgba(20,16,13,0.86) 45%, rgba(20,16,13,0.42) 100%), url(${IMG.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            pointerEvents: 'none',
          }}
        />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(200,151,74,0.4)', borderRadius: 2, padding: '7px 16px', marginBottom: '2.25rem' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#D4A85C', flexShrink: 0 }} />
                <span className="eyebrow eyebrow-light">Fragrance &amp; Beauty Wholesale — Warren, Michigan</span>
              </div>

              <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
                Authorized wholesale
                <br />
                distribution for
                <br />
                <em style={{ fontStyle: 'italic', color: '#D4A85C' }}>fragrance</em> brands.
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.66)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1rem, 2.2vw, 1.12rem)', lineHeight: 1.9, maxWidth: 560, marginBottom: '2.5rem' }}>
                Urban Pulse Wholesale LLC buys fragrance, perfume and beauty products directly from brands and their
                authorized distributors, and sells them under MAP through controlled, documented channels. No gray
                market. No diversion. No surprises on your brand page.
              </p>

              <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Link href="/supplier-info" className="btn btn-gold">
                  Open a wholesale account <ArrowRight size={14} />
                </Link>
                <Link href="/partnerships" className="btn btn-outline-light">
                  Why brands work with us
                </Link>
              </div>
            </div>

            <div />
          </div>
        </div>
      </section>

      {/* ══ PROOF STRIP ══ */}
      <section style={{ background: '#1F1913', borderTop: '1px solid rgba(200,151,74,0.18)' }}>
        <div className="page-wrap">
          <div className="proof-grid">
            {proof.map((p, i) => (
              <div
                key={p.k}
                style={{
                  padding: '2rem 1.5rem',
                  borderRight: i < proof.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.2rem', color: '#D4A85C', marginBottom: '0.4rem' }}>
                  {p.k}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  {p.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHO WE ARE ══ */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <div className="two-col">
            <div>
              <div className="rule" />
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Who we are</div>
              <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1.75rem' }}>
                A small, specialised distributor — not a marketplace reseller.
              </h2>
              <p className="body-copy" style={{ marginBottom: '1.25rem' }}>
                Urban Pulse Wholesale LLC is a registered Michigan wholesale distribution company. We have narrowed our
                focus to a single category family — fragrance and the beauty products that sit beside it — because that
                is where authorized distribution matters most, and where a distributor who understands the compliance
                burden is worth more than one who carries everything.
              </p>
              <p className="body-copy" style={{ marginBottom: '1.25rem' }}>
                We source exclusively from brands and their authorized distributors. Every unit we sell has an invoice
                behind it, a signed agreement above it, and a MAP price attached to it.
              </p>
              <p className="body-copy" style={{ marginBottom: '2.25rem' }}>
                We are not brokers, liquidators, or gray-market sellers, and we do not buy from other resellers.
              </p>

              <blockquote
                style={{
                  borderLeft: '1px solid #B8873C',
                  paddingLeft: '1.75rem',
                  marginBottom: '2.5rem',
                }}
              >
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', fontStyle: 'italic', fontWeight: 300, fontSize: '1.2rem', lineHeight: 1.7, color: '#3B3229', margin: 0 }}>
                  “The brands worth carrying are the ones that are careful about who carries them. We built this company
                  to be easy to approve and difficult to regret.”
                </p>
              </blockquote>

              <Link href="/about" className="btn btn-outline">
                About the company <ArrowRight size={14} />
              </Link>
            </div>

            <div className="photo-grid-wrap">
              <div className="photo-item media" style={{ height: 230 }}>
                <img src={IMG.amber} alt="Amber fragrance bottles held in wholesale inventory" loading="lazy" />
              </div>
              <div className="photo-item media" style={{ height: 230, marginTop: '2rem' }}>
                <img src={IMG.care} alt="Beauty and personal care products in wholesale distribution" loading="lazy" />
              </div>
              <div className="photo-item media" style={{ height: 230 }}>
                <img src={IMG.bottles} alt="Perfume bottles prepared for authorized wholesale distribution" loading="lazy" />
              </div>
              <div className="photo-item media" style={{ height: 230, marginTop: '-2rem' }}>
                <img src={IMG.ops} alt="Fulfillment operations for wholesale fragrance orders" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE DISTRIBUTE ══ */}
      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>What we distribute</div>
            <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1.25rem' }}>
              Two lines. One standard.
            </h2>
            <p className="body-copy">
              Fragrance is the core of the business. Beauty and personal care is the adjacent line — same authorized
              accounts, same MAP discipline, same documentation.
            </p>
          </div>

          <div className="line-grid">
            {lines.map(l => (
              <article key={l.name} style={{ background: '#FFFFFF', border: '1px solid #EDE4D6', borderRadius: 3, overflow: 'hidden' }}>
                <div className="media" style={{ height: 260, borderRadius: 0 }}>
                  <img src={l.img} alt={`${l.name} wholesale distribution — Urban Pulse Wholesale`} loading="lazy" />
                </div>
                <div style={{ padding: '2.25rem' }}>
                  <div className="eyebrow" style={{ marginBottom: '0.85rem' }}>{l.tag}</div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.65rem', color: '#14100D', marginBottom: '1rem' }}>
                    {l.name}
                  </h3>
                  <p className="body-copy" style={{ marginBottom: '1.5rem' }}>{l.copy}</p>
                  <Link href="/categories" className="nav-link" style={{ color: '#B8873C' }}>
                    See the full range
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY BRANDS CHOOSE US ══ */}
      <section className="section grain" style={{ background: '#14100D', position: 'relative' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 640, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow eyebrow-light" style={{ marginBottom: '1rem' }}>Why brands approve us</div>
            <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1.25rem' }}>
              The things a fragrance brand actually checks.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', lineHeight: 1.85 }}>
              Wholesale applications get declined for predictable reasons. We built the company around removing each one.
            </p>
          </div>

          <div className="three-col">
            {pillars.map(p => (
              <div key={p.title} className="card-ink">
                <div style={{ width: 40, height: 40, borderRadius: 2, border: '1px solid rgba(200,151,74,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4A85C', marginBottom: '1.4rem' }}>
                  {p.icon}
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.25rem', color: '#FBF8F3', marginBottom: '0.85rem' }}>
                  {p.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW ONBOARDING WORKS ══ */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow" style={{ marginBottom: '1rem' }}>How it works</div>
            <h2 className="display display-lg" style={{ color: '#14100D' }}>
              Four steps, no chasing.
            </h2>
          </div>

          <div className="step-grid">
            {process.map(s => (
              <div key={s.n} style={{ borderTop: '1px solid #E2D5C2', paddingTop: '1.5rem' }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300, fontSize: '2.25rem', color: '#B8873C', lineHeight: 1, marginBottom: '1rem' }}>
                  {s.n}
                </div>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.2rem', color: '#14100D', marginBottom: '0.6rem' }}>
                  {s.h}
                </h3>
                <p style={{ color: '#6B5F51', fontSize: '0.875rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                  {s.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OPERATIONS ══ */}
      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div className="two-col">
            <div className="media" style={{ height: 460 }}>
              <img src={IMG.ops} alt="Wholesale fragrance fulfillment and prep operations" loading="lazy" />
            </div>
            <div>
              <div className="rule" />
              <div className="eyebrow" style={{ marginBottom: '1rem' }}>Operations</div>
              <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1.5rem' }}>
                Fragrance is a harder category to ship. We treat it that way.
              </h2>
              <p className="body-copy" style={{ marginBottom: '2rem' }}>
                Alcohol-based fragrance is regulated freight and a restricted marketplace category. Handling it properly
                is not an afterthought — it is the operational core of the business.
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
                {[
                  'Dangerous Goods classification and SDS documentation for flammable liquids',
                  'FDA cosmetic labeling review before a single unit ships',
                  'Lot and batch traceability from supplier invoice to outbound shipment',
                  'MAP monitoring and enforcement across every channel we sell in',
                  'Inventory forecasting so approved SKUs stay in stock',
                ].map(item => (
                  <li key={item} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#B8873C', marginTop: 10, flexShrink: 0 }} />
                    <span style={{ color: '#3B3229', fontSize: '0.9rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/fba-operations" className="btn btn-outline">
                How we operate <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="grain" style={{ background: '#1F1913', padding: '7rem 0', position: 'relative' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 760, textAlign: 'center' }}>
          <div className="rule-c" />
          <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1.5rem' }}>
            Considering a new authorized account?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.58)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.9, marginBottom: '2.5rem' }}>
            Send us the SKUs you want represented properly. We will return our LLC documentation, EIN, resale
            certificate and channel plan — usually the same day, and always within one business day.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/supplier-info" className="btn btn-gold">
              Start a wholesale inquiry <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="btn btn-outline-light">
              Contact us directly
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
