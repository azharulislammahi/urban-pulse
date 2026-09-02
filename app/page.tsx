import type { Metadata } from 'next'
import Link from 'next/link'
import { houses } from './data/houses'
import Notes from './components/Notes'

export const metadata: Metadata = {
  title: 'Arabian Perfume Wholesale | Urban Pulse Wholesale LLC',
  description:
    'Urban Pulse Wholesale LLC is a Michigan-registered wholesale distributor of Arabian perfumery — oud, saffron, amber and attar from Gulf houses including Lattafa, Ard Al Zaafaran and RiiFFS. Sourced through authorized channels, supplied under MAP.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com' },
}

export default function HomePage() {
  const lattafa = houses.find(h => h.slug === 'lattafa')
  const signature =
    lattafa?.products.find(p => p.slug === 'oud-mood') ??
    lattafa?.products.find(p => p.hero) ??
    houses[0].products[0]
  const riiffs = houses.find(h => h.slug === 'riiffs')
  const heroImage =
    riiffs?.products.find(p => p.slug === 'royal-tobacco-oud')?.image ??
    lattafa?.products.find(p => p.slug === 'oud-mood')?.image ??
    houses[0].products[0].image

  return (
    <div style={{ background: '#FBF8F3' }}>
      <style>{`
        .hero-shell { position: relative; min-height: 100svh; display: flex; align-items: flex-end; overflow: hidden; }
        .houses-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; align-items: end; }
        .houses-row > *:nth-child(2) { transform: translateY(-3rem); }
        .sig { display: grid; grid-template-columns: 1fr 1fr; }
        .creed { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 5rem; }
        @media (max-width: 1023px) {
          .houses-row { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .houses-row > *:nth-child(2) { transform: none; }
          .sig { grid-template-columns: 1fr !important; }
          .creed { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>

      {/* ══ HERO ══ */}
      <section className="hero-shell">
        <img
          src={heroImage}
          alt="Arabian perfumery held in wholesale distribution by Urban Pulse Wholesale"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '62% center' }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            background:
              'linear-gradient(180deg, rgba(20,16,13,0.68) 0%, rgba(20,16,13,0.18) 40%, rgba(20,16,13,0.88) 100%), linear-gradient(90deg, rgba(20,16,13,0.84) 0%, rgba(20,16,13,0.34) 52%, rgba(20,16,13,0) 100%)',
          }}
        />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, paddingBottom: 'clamp(3rem, 8vw, 6rem)', paddingTop: '10rem' }}>
          <div className="eyebrow eyebrow-light" style={{ marginBottom: '2rem' }}>
            Arabian perfumery · Wholesale · Warren, Michigan
          </div>
          <h1 className="display display-xl" style={{ color: '#FBF8F3', maxWidth: '18ch', marginBottom: '2rem' }}>
            Oud, saffron and amber — <em style={{ fontStyle: 'italic', color: '#D4A85C' }}>sourced properly</em>.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.66)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(1rem, 2vw, 1.15rem)', lineHeight: 1.9, maxWidth: '34rem', marginBottom: '3rem' }}>
            Urban Pulse Wholesale supplies Arabian fragrance to the United States market — bought through authorized
            channels, documented unit by unit, and sold at the price the house sets.
          </p>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            <Link href="/houses" className="link-rule" style={{ color: '#D4A85C' }}>The houses</Link>
            <Link href="/supplier-info" className="link-rule" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Open a wholesale account
            </Link>
          </div>
        </div>
      </section>

      {/* ══ STATEMENT ══ */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <p className="display display-lg" style={{ color: '#14100D', maxWidth: '24ch' }}>
            The Gulf has been making perfume for a thousand years.
          </p>
          <p className="lede measure" style={{ marginTop: '2.5rem', marginLeft: 'auto' }}>
            What changed recently is that the houses making it — in Sharjah, in Dubai, in Ajman — began building
            for a global audience without softening the work. Oud stayed oud. That is the category we sell, and
            the only one we sell.
          </p>
        </div>
      </section>

      {/* ══ HOUSES ══ */}
      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
            <h2 className="display display-lg" style={{ color: '#14100D', margin: 0 }}>The houses</h2>
            <Link href="/houses" className="link-rule" style={{ color: '#B8873C' }}>All four</Link>
          </div>

          <div className="houses-row">
            {houses.map(h => {
              const cover = h.products.find(p => p.hero) ?? h.products[0]
              return (
                <Link key={h.slug} href={`/houses/${h.slug}`} className="tile">
                  <div className="arch" style={{ aspectRatio: '3 / 4', marginBottom: '1.5rem' }}>
                    <img
                      src={cover.image}
                      alt={`${h.name} — Arabian perfume house`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                  <div className="ar" style={{ fontSize: '1.5rem', color: '#B8873C', textAlign: 'left', marginBottom: '0.2rem' }}>
                    {h.arabic}
                  </div>
                  <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.6rem', color: '#14100D', marginBottom: '0.5rem' }}>
                    {h.name}
                  </h3>
                  <p style={{ color: '#6B5F51', fontSize: '0.875rem', lineHeight: 1.8, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
                    {h.line}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ ONE FRAGRANCE, GIVEN ROOM ══ */}
      {signature && (
        <section className="sig">
          <div style={{ position: 'relative', minHeight: '60vh', background: '#14100D' }}>
            <img
              src={signature.image}
              alt={`${signature.name} — Arabian eau de parfum`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
          <div className="grain" style={{ background: '#14100D', display: 'flex', alignItems: 'center', padding: 'clamp(3rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem)' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div className="eyebrow eyebrow-light" style={{ marginBottom: '2rem' }}>A fragrance we sell</div>
              {signature.arabic && (
                <div className="ar" style={{ fontSize: '3rem', color: '#D4A85C', textAlign: 'left', marginBottom: '0.4rem' }}>
                  {signature.arabic}
                </div>
              )}
              <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '2rem' }}>{signature.name}</h2>
              <Notes top={signature.top} heart={signature.heart} base={signature.base} tone="light" />
              <div style={{ marginTop: '3rem' }}>
                <Link href="/houses/lattafa" className="link-rule" style={{ color: '#D4A85C' }}>Lattafa</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ HOW WE BUY ══ */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <div className="creed">
            <div>
              <div className="rule" />
              <div className="eyebrow">How we buy</div>
            </div>
            <div>
              <p className="lede" style={{ marginBottom: '1.75rem' }}>
                Every unit we sell comes from the house itself or from a distributor it has authorized. Nothing is
                bought from other resellers, nothing from liquidation, nothing from the gray market.
              </p>
              <p className="body-copy" style={{ marginBottom: '1.5rem' }}>
                That is a narrower way to operate than most distributors accept, and it is deliberate. Fragrance is the
                most counterfeited category in consumer goods, and Arabian fragrance especially so — a house that loses
                control of its distribution loses the thing it spent decades building. We would rather carry fewer
                brands and be the account they never have to worry about.
              </p>
              <p className="body-copy" style={{ marginBottom: '2.5rem' }}>
                In practice it means an invoice trail on every unit, lot and batch records where the house provides
                them, Dangerous Goods handling for alcohol-based fragrance, and MAP enforced on our own listings before
                anyone has to ask.
              </p>
              <Link href="/fba-operations" className="link-rule" style={{ color: '#B8873C' }}>
                How we operate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="lattice" style={{ background: '#1F1913', padding: 'clamp(4rem, 10vw, 8rem) 0' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1.75rem', maxWidth: '20ch', marginLeft: 'auto', marginRight: 'auto' }}>
            For houses looking at the US market.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.05rem', lineHeight: 1.9, maxWidth: '38rem', margin: '0 auto 3rem' }}>
            Send us the range you want represented. We return our formation documents, EIN, resale certificate and a
            written channel plan — same day where we can, within one business day otherwise.
          </p>
          <Link href="/supplier-info" className="btn btn-gold">Open a wholesale account</Link>
        </div>
      </section>
    </div>
  )
}
