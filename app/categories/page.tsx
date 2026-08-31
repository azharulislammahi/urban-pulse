import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fragrance & Beauty We Distribute | Wholesale Categories',
  description:
    'Urban Pulse Wholesale distributes fragrance and beauty: eau de parfum, oud and attar, perfume oils, body mists, home fragrance, plus scented body care, skincare, haircare and cosmetics. Authorized brands only, MAP compliant.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/categories' },
  openGraph: {
    title: 'Fragrance & Beauty We Distribute | Urban Pulse Wholesale',
    description:
      'Fragrance, perfume and beauty wholesale distribution from authorized accounts only. MAP compliant, DG and FDA labeling literate.',
    url: 'https://www.urbanpulsewholesale.com/categories',
  },
}

const categories = [
  {
    id: 'fragrance',
    tag: 'Core category',
    name: 'Fragrance & Perfume',
    img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=600&q=80',
      'https://images.unsplash.com/photo-1624613533305-28d421d70875?w=600&q=80',
    ],
    desc:
      'Fragrance is where authorized distribution matters most. Counterfeit and diverted product is endemic on open marketplaces, and brands are right to be selective about who they sell to. We buy directly from brands and their authorized distributors, keep an invoice trail on every unit, and sell at MAP — which is exactly the profile a fragrance brand should want in a wholesale account.',
    items: [
      'Eau de Parfum & Eau de Toilette',
      'Oud, Attar & Middle Eastern compositions',
      'Perfume oils & roll-ons',
      'Body mists & cologne sprays',
      'Fragrance gift sets & discovery sets',
      'Home fragrance & reed diffusers',
      'Scented candles & wax melts',
      'Incense & aromatherapy',
    ],
    why:
      'We handle alcohol-based fragrance as the regulated freight it is: Dangerous Goods classification, SDS documentation, correct outbound packaging, and lot traceability. Brands do not have to explain the compliance burden to us — we already carry it.',
  },
  {
    id: 'beauty',
    tag: 'Adjacent category',
    name: 'Beauty & Personal Care',
    img: 'https://images.unsplash.com/photo-1624362772755-4d5843e67047?w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1648139346494-2b961c5a2bb7?w=600&q=80',
      'https://images.unsplash.com/photo-1559087316-6b27308e53f6?w=600&q=80',
    ],
    desc:
      'Beauty and personal care sits directly beside fragrance — the same buyers, the same shelf, frequently the same brand houses. We extend the identical authorized-account model into scented body care, skincare, haircare, cosmetics and grooming, so a brand with both a fragrance line and a body line can work with a single distributor.',
    items: [
      'Scented body care — lotions, washes, mists',
      'Bath & shower',
      'Skincare & facial care',
      'Haircare & styling',
      'Colour cosmetics',
      'Men’s grooming',
      'Essential oils & aromatherapy blends',
      'Beauty gift sets',
    ],
    why:
      'Cosmetic products carry their own labeling obligations. We review FDA cosmetic labeling requirements before listing, keep ingredient and batch documentation on file, and apply the same MAP enforcement we use on fragrance.',
  },
]

const standards = [
  { h: 'Authorized sourcing only', p: 'Brands and their authorized distributors. We do not buy from other resellers, liquidators or unverified suppliers.' },
  { h: 'MAP enforced', p: 'We sell at the price you set, and we monitor our own listings for compliance rather than waiting to be told.' },
  { h: 'Full documentation', p: 'Purchase invoices, letters of authorization, W-9, resale certificate and chain-of-custody records available on request.' },
  { h: 'Channel transparency', p: 'You know where your product is being sold before the first order ships, and we stay inside the channels you approve.' },
]

export default function CategoriesPage() {
  return (
    <div style={{ background: '#FBF8F3', overflowX: 'hidden' }}>
      <style>{`
        .cat-split { display: grid; grid-template-columns: 1fr 1fr; gap: 4.5rem; align-items: center; }
        .cat-split.flip > .cat-media { order: 2; }
        .item-cols { columns: 2; column-gap: 2rem; }
        .std-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; }
        @media (max-width: 1023px) {
          .cat-split { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .cat-split.flip > .cat-media { order: 0; }
          .std-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .item-cols { columns: 1; }
          .std-grid { grid-template-columns: 1fr !important; gap: 1.75rem !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="amber-wash grain" style={{ position: 'relative', paddingTop: '11rem', paddingBottom: '6rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>What we distribute</div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.75rem' }}>
            Fragrance, and the beauty that sits beside it.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.9 }}>
            We deliberately carry two lines rather than six. Depth in one category family means we understand its
            compliance rules, its counterfeit problem and its buying patterns properly — which is worth more to a brand
            than a distributor who lists everything.
          </p>
        </div>
      </section>

      {/* ══ CATEGORIES ══ */}
      {categories.map((cat, i) => (
        <section
          key={cat.id}
          id={cat.id}
          className="section"
          style={{ background: i % 2 === 0 ? '#FBF8F3' : '#F5EFE6', scrollMarginTop: '5rem' }}
        >
          <div className="page-wrap">
            <div className={`cat-split${i % 2 === 1 ? ' flip' : ''}`}>
              <div className="cat-media">
                <div className="media cat-hero-img" style={{ height: 420, marginBottom: '1rem' }}>
                  <img src={cat.img} alt={`${cat.name} wholesale distribution`} loading="lazy" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {cat.gallery.map((g, gi) => (
                    <div key={g} className="media" style={{ height: 150 }}>
                      <img src={g} alt={`${cat.name} product range ${gi + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="rule" />
                <div className="eyebrow" style={{ marginBottom: '1rem' }}>{cat.tag}</div>
                <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1.5rem' }}>{cat.name}</h2>
                <p className="body-copy" style={{ marginBottom: '2rem' }}>{cat.desc}</p>

                <div className="eyebrow" style={{ marginBottom: '1rem' }}>Product types</div>
                <ul className="item-cols" style={{ listStyle: 'none', marginBottom: '2rem' }}>
                  {cat.items.map(it => (
                    <li
                      key={it}
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'flex-start',
                        breakInside: 'avoid',
                        marginBottom: '0.7rem',
                      }}
                    >
                      <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#B8873C', marginTop: 10, flexShrink: 0 }} />
                      <span style={{ color: '#3B3229', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{it}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ borderLeft: '1px solid #B8873C', paddingLeft: '1.5rem' }}>
                  <div className="eyebrow" style={{ marginBottom: '0.6rem' }}>Why it matters</div>
                  <p style={{ color: '#3B3229', fontSize: '0.9rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                    {cat.why}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ══ STANDARDS ══ */}
      <section className="section grain" style={{ background: '#14100D' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: 620, marginBottom: '3.5rem' }}>
            <div className="rule" />
            <div className="eyebrow eyebrow-light" style={{ marginBottom: '1rem' }}>Applied to both lines</div>
            <h2 className="display display-lg" style={{ color: '#FBF8F3' }}>The standards do not change by category.</h2>
          </div>
          <div className="std-grid">
            {standards.map(s => (
              <div key={s.h} style={{ borderTop: '1px solid rgba(200,151,74,0.3)', paddingTop: '1.5rem' }}>
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.15rem', color: '#D4A85C', marginBottom: '0.75rem' }}>{s.h}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section-sm" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap" style={{ textAlign: 'center', maxWidth: 680 }}>
          <h2 className="display display-md" style={{ color: '#14100D', marginBottom: '1.25rem' }}>
            Do your products belong on this list?
          </h2>
          <p className="body-copy" style={{ marginBottom: '2rem' }}>
            Tell us which SKUs you want represented and we will send our documentation package the same day.
          </p>
          <Link href="/supplier-info" className="btn btn-gold">
            Start a wholesale inquiry <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  )
}
