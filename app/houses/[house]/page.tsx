import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { houses, houseBySlug } from '../../data/houses'
import Notes from '../../components/Notes'

export function generateStaticParams() {
  return houses.map(h => ({ house: h.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ house: string }> }): Promise<Metadata> {
  const { house } = await params
  const h = houseBySlug(house)
  if (!h) return {}
  const url = `https://www.urbanpulsewholesale.com/houses/${h.slug}`
  return {
    title: `${h.name} Wholesale | ${h.line}`,
    description: `${h.standfirst} Urban Pulse Wholesale sources ${h.name} — ${h.origin} — through authorized channels and supplies it under MAP.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${h.name} | Urban Pulse Wholesale`,
      description: h.standfirst,
      url,
      images: h.products[0] ? [{ url: h.products[0].image }] : undefined,
    },
  }
}

export default async function HousePage({ params }: { params: Promise<{ house: string }> }) {
  const { house } = await params
  const h = houseBySlug(house)
  if (!h) notFound()

  const heroes = h.products.filter(p => p.hero)
  const lead = heroes[0] ?? h.products[0]
  const feature = heroes[1]
  const rest = h.products.filter(p => p.slug !== lead?.slug)

  return (
    <div style={{ background: '#FBF8F3' }}>
      <style>{`
        .hs-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 88vh; }
        .hs-story { display: grid; grid-template-columns: 1fr 1.15fr; gap: 5rem; }
        .hs-feature { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center; }
        .hs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem 2rem; }
        @media (max-width: 1023px) {
          .hs-hero { grid-template-columns: 1fr; min-height: 0; }
          .hs-story { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hs-feature { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .hs-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) { .hs-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
      `}</style>

      {/* ── Split hero: type on ink, campaign image beside it ── */}
      <section className="hs-hero">
        <div
          className="amber-wash grain"
          style={{ display: 'flex', alignItems: 'flex-end', padding: '10rem 0 4rem' }}
        >
          <div style={{ padding: '0 clamp(1.5rem, 6vw, 5rem)', position: 'relative', zIndex: 2 }}>
            <Link href="/houses" className="link-rule" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '3rem' }}>
              The houses
            </Link>
            <div className="ar" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: '#D4A85C', margin: '2.5rem 0 0.5rem', textAlign: 'left' }}>
              {h.arabic}
            </div>
            <h1 className="display display-xl" style={{ color: '#FBF8F3', marginBottom: '1.5rem' }}>{h.name}</h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '26rem' }}>
              {h.standfirst}
            </p>
            <div className="eyebrow eyebrow-light" style={{ marginTop: '2.5rem' }}>{h.founded} · {h.origin}</div>
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: '60vh', background: '#1F1913' }}>
          {lead && (
            <img
              src={lead.image}
              alt={`${lead.name} by ${h.name}`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          )}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', left: 0, right: 0, top: 0, height: '18vh',
              background: 'linear-gradient(180deg, rgba(20,16,13,0.75) 0%, rgba(20,16,13,0) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section" style={{ background: '#FBF8F3' }}>
        <div className="page-wrap">
          <div className="hs-story">
            <div>
              <div className="rule" />
              <div className="eyebrow">{h.line}</div>
            </div>
            <div>
              {h.story.map((para, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'lede' : 'body-copy'}
                  style={{ marginBottom: i === h.story.length - 1 ? 0 : '1.5rem' }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── One product given room ── */}
      {feature && (
        <section className="section" style={{ background: '#14100D' }}>
          <div className="page-wrap">
            <div className="hs-feature">
              <div className="arch-sm" style={{ aspectRatio: '4 / 5', overflow: 'hidden' }}>
                <img
                  src={feature.image}
                  alt={`${feature.name} by ${h.name}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  loading="lazy"
                />
              </div>
              <div>
                {feature.arabic && (
                  <div className="ar" style={{ fontSize: '2.6rem', color: '#D4A85C', marginBottom: '0.5rem', textAlign: 'left' }}>
                    {feature.arabic}
                  </div>
                )}
                <h2 className="display display-lg" style={{ color: '#FBF8F3', marginBottom: '1.5rem' }}>{feature.name}</h2>
                {feature.description && (
                  <p style={{ color: 'rgba(255,255,255,0.58)', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: '1rem', lineHeight: 1.9, marginBottom: '2.25rem', maxWidth: '30rem' }}>
                    {feature.description}
                  </p>
                )}
                <Notes top={feature.top} heart={feature.heart} base={feature.base} tone="light" />
                {feature.size && (
                  <div className="eyebrow eyebrow-light" style={{ marginTop: '2rem' }}>{feature.size}</div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── The range ── */}
      <section className="section" style={{ background: '#F5EFE6' }}>
        <div className="page-wrap">
          <div style={{ marginBottom: '3.5rem' }}>
            <div className="rule" />
            <h2 className="display display-lg" style={{ color: '#14100D' }}>A selection from the range</h2>
          </div>

          <div className="hs-grid">
            {rest.map(p => (
              <article key={p.slug}>
                <div className="tile-img" style={{ marginBottom: '1.25rem' }}>
                  <img src={p.image} alt={`${p.name} by ${h.name}`} loading="lazy" />
                </div>
                {p.arabic && (
                  <div className="ar" style={{ fontSize: '1.35rem', color: '#B8873C', textAlign: 'left', marginBottom: '0.15rem' }}>
                    {p.arabic}
                  </div>
                )}
                <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.25rem', color: '#14100D', marginBottom: '0.9rem' }}>
                  {p.name}
                </h3>
                <Notes top={p.top} heart={p.heart} base={p.base} />
                {p.size && <div className="eyebrow" style={{ marginTop: '1rem', color: '#9A8B79' }}>{p.size}</div>}
              </article>
            ))}
          </div>

          <p style={{ color: '#9A8B79', fontSize: '0.85rem', lineHeight: 1.9, fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '38rem', marginTop: '4rem' }}>
            A selection only. The full {h.name} range — including concentrated oils, hair mists, bukhoor and gift sets —
            is available on request, with current availability and pack sizes.
          </p>
        </div>
      </section>

      <section className="section-sm grain" style={{ background: '#1F1913' }}>
        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 className="display display-md" style={{ color: '#FBF8F3', margin: 0, maxWidth: '26rem' }}>
            Enquire about {h.name}
          </h2>
          <Link href="/supplier-info" className="btn btn-gold">Start an enquiry</Link>
        </div>
      </section>
    </div>
  )
}
