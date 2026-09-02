import type { Metadata } from 'next'
import Link from 'next/link'
import { houses, alsoSourced } from '../data/houses'

export const metadata: Metadata = {
  title: 'The Houses | Arabian Perfume Wholesale',
  description:
    'The Arabian perfume houses Urban Pulse Wholesale sources — Lattafa, Ard Al Zaafaran, RiiFFS and Paris Corner. Oud, saffron, amber and attar, supplied through authorized channels under MAP.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/houses' },
  openGraph: {
    title: 'The Houses | Urban Pulse Wholesale',
    description: 'Arabian perfume houses sourced through authorized channels, supplied under MAP.',
    url: 'https://www.urbanpulsewholesale.com/houses',
  },
}

export default function HousesPage() {
  return (
    <div style={{ background: '#FBF8F3' }}>
      <style>{`
        .house-row { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 5rem; align-items: center; }
        .house-row.flip > .house-media { order: 2; }
        @media (max-width: 900px) {
          .house-row { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .house-row.flip > .house-media { order: 0; }
        }
      `}</style>

      <section className="amber-wash grain" style={{ paddingTop: '12rem', paddingBottom: '7rem' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '2rem' }}>The houses</div>
          <h1 className="display display-xl measure-wide" style={{ color: '#FBF8F3' }}>
            Perfumery from the Gulf, taken seriously.
          </h1>
        </div>
      </section>

      {houses.map((h, i) => {
        const cover = h.products.find(p => p.hero) ?? h.products[0]
        return (
          <section
            key={h.slug}
            className="section"
            style={{ background: i % 2 === 0 ? '#FBF8F3' : '#F5EFE6' }}
          >
            <div className="page-wrap">
              <div className={`house-row${i % 2 === 1 ? ' flip' : ''}`}>
                <div className="house-media arch" style={{ aspectRatio: '3 / 4' }}>
                  {cover && (
                    <img
                      src={cover.image}
                      alt={`${h.name} — Arabian perfume house`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  )}
                </div>

                <div>
                  <div className="ar" style={{ fontSize: '2.4rem', color: '#B8873C', marginBottom: '0.5rem', textAlign: 'left' }}>
                    {h.arabic}
                  </div>
                  <h2 className="display display-lg" style={{ color: '#14100D', marginBottom: '1rem' }}>{h.name}</h2>
                  <div className="eyebrow" style={{ marginBottom: '2rem' }}>{h.founded}</div>
                  <p className="lede measure" style={{ marginBottom: '1.75rem' }}>{h.standfirst}</p>
                  <p className="body-copy measure" style={{ marginBottom: '2.5rem' }}>{h.story[0]}</p>
                  <Link href={`/houses/${h.slug}`} className="link-rule" style={{ color: '#B8873C' }}>
                    {h.name} — {h.products.length} shown
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      <section className="section grain" style={{ background: '#14100D' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.5rem' }}>Also sourced</div>
          {alsoSourced.map(a => (
            <div key={a.name} style={{ borderTop: '1px solid rgba(200,151,74,0.3)', paddingTop: '1.75rem', marginBottom: '1.75rem' }}>
              <h3 className="display display-md" style={{ color: '#FBF8F3', marginBottom: '0.75rem' }}>{a.name}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.92rem', fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                {a.note}
              </p>
            </div>
          ))}
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', lineHeight: 1.9, fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '38rem', marginTop: '2.5rem' }}>
            Ranges shown here are a selection, not the full catalogue. Complete range and format lists — eau de parfum,
            concentrated oil, hair mist, bukhoor, gift sets — are available on request.
          </p>
        </div>
      </section>

      <section className="section-sm" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap" style={{ textAlign: 'center' }}>
          <Link href="/supplier-info" className="btn btn-gold">Enquire about a range</Link>
        </div>
      </section>
    </div>
  )
}
