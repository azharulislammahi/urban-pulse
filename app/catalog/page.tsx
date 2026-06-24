import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Catalog | Pet Supplies, Fragrance & More — Amazon FBA Wholesale',
  description: 'Browse Urban Pulse Wholesale\'s current product catalog — authorized brands including Midwest Homes, Komodo Reptile, Smokehouse, Goo-EEZ, Multipet, Comfort Zone, and more. All products sold through Amazon FBA with MAP compliance.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/catalog' },
}

// ── Catalog data extracted from Top 50 Products Excel (BCI Supplier) ──
const products = [
  { rank: 1,  brand: 'J.J. FUDS',          product: 'No Bull Display',                      category: 'DOG',          cost: 55.20, sell: 179.40, profit: 90.84, roi: 165, map: false },
  { rank: 2,  brand: 'Midwest Homes',       product: 'Quiet Time Maxx Ultra-Rugged Pet Bed', category: 'DOG',          cost: 50.48, sell: 144.19, profit: 63.73, roi: 126, map: false },
  { rank: 3,  brand: 'Midwest Homes',       product: 'Deluxe Pet Mat',                       category: 'DOG',          cost: 15.06, sell: 42.99,  profit: 17.47, roi: 116, map: false },
  { rank: 4,  brand: 'Midwest Homes',       product: 'Quiet Time Tulip Pet Bed Fur',         category: 'DOG',          cost: 25.00, sell: 71.39,  profit: 29.93, roi: 120, map: false },
  { rank: 5,  brand: 'Midwest Homes',       product: 'Quiet Time Deluxe Hudson Pet Bed',     category: 'DOG',          cost: 52.64, sell: 150.39, profit: 67.75, roi: 129, map: false },
  { rank: 6,  brand: 'Midwest Homes',       product: 'Reversible Pet Bed',                   category: 'DOG',          cost: 34.81, sell: 99.49,  profit: 42.86, roi: 123, map: false },
  { rank: 7,  brand: 'Midwest Homes',       product: 'Quiet Time Sheepskin Bed',             category: 'DOG',          cost: 32.95, sell: 94.09,  profit: 40.13, roi: 122, map: false },
  { rank: 8,  brand: 'Midwest Homes',       product: 'Ombre Swirl Bed',                      category: 'DOG',          cost: 40.32, sell: 115.19, profit: 50.69, roi: 126, map: false },
  { rank: 9,  brand: 'Midwest Homes',       product: "Snap'y Fit Dog Bowl",                  category: 'DOG',          cost: 9.72,  sell: 27.79,  profit: 10.30, roi: 106, map: false },
  { rank: 10, brand: 'Komodo Reptile',      product: 'Corner Hut',                           category: 'REPTILE',      cost: 18.14, sell: 47.39,  profit: 18.85, roi: 104, map: false },
  { rank: 11, brand: 'Komodo Reptile',      product: 'Magnetic Basking Ledge',               category: 'REPTILE',      cost: 18.14, sell: 47.39,  profit: 18.81, roi: 104, map: false },
  { rank: 12, brand: 'Komodo Reptile',      product: 'Magnetic Feeding Ledge',               category: 'REPTILE',      cost: 16.24, sell: 42.49,  profit: 16.58, roi: 102, map: false },
  { rank: 13, brand: 'Komodo Reptile',      product: 'Emerald Vine Standing Plant',          category: 'REPTILE',      cost: 12.23, sell: 31.99,  profit: 11.78, roi: 96,  map: false },
  { rank: 14, brand: 'Komodo Reptile',      product: 'Spotted Begonia Plant',                category: 'REPTILE',      cost: 12.23, sell: 31.99,  profit: 11.78, roi: 96,  map: false },
  { rank: 15, brand: 'Komodo Reptile',      product: 'Monstera Standing Plant',              category: 'REPTILE',      cost: 12.23, sell: 31.99,  profit: 11.78, roi: 96,  map: false },
  { rank: 16, brand: 'Midwest Homes',       product: 'Quiet Time Fashion Pet Bed',           category: 'DOG',          cost: 9.46,  sell: 26.99,  profit: 9.50,  roi: 100, map: false },
  { rank: 17, brand: 'Komodo Reptile',      product: 'Magnetic Rock Ledge',                  category: 'REPTILE',      cost: 19.74, sell: 51.59,  profit: 20.58, roi: 104, map: false },
  { rank: 18, brand: 'Smokehouse',          product: 'USA Chicken Breast Strips',            category: 'DOG',          cost: 12.71, sell: 33.89,  profit: 12.58, roi: 99,  map: false },
  { rank: 19, brand: 'Smokehouse',          product: 'USA Prime Chips Dog Treats',           category: 'DOG',          cost: 12.26, sell: 32.69,  profit: 12.01, roi: 98,  map: false },
  { rank: 20, brand: 'Komodo Reptile',      product: 'Bamboo Climbing Plant',                category: 'REPTILE',      cost: 10.91, sell: 28.49,  profit: 10.13, roi: 93,  map: false },
  { rank: 21, brand: 'Komodo Reptile',      product: 'Zebrina Climbing Plant',               category: 'REPTILE',      cost: 10.91, sell: 28.49,  profit: 10.13, roi: 93,  map: false },
  { rank: 22, brand: 'Goo-EEZ',            product: 'Mock Neck Signature Dog Jacket',       category: 'DOG',          cost: 24.45, sell: 54.99,  profit: 18.93, roi: 77,  map: true  },
  { rank: 23, brand: 'Goo-EEZ',            product: 'Reflective Hooded Raincoat',           category: 'DOG',          cost: 24.45, sell: 54.99,  profit: 18.91, roi: 77,  map: true  },
  { rank: 24, brand: 'Komodo Reptile',      product: 'White Vein Standing Plant',            category: 'REPTILE',      cost: 12.23, sell: 31.99,  profit: 11.78, roi: 96,  map: false },
  { rank: 25, brand: 'Midwest Homes',       product: 'Atlas 20 Open Top Carrier',            category: 'DOG',          cost: 26.74, sell: 76.39,  profit: 29.99, roi: 112, map: false },
  { rank: 26, brand: 'Komodo Reptile',      product: 'Round Plastic Fish Bowl',              category: 'AQUATICS',     cost: 11.30, sell: 29.49,  profit: 10.39, roi: 92,  map: false },
  { rank: 27, brand: 'Midwest Homes',       product: 'Atlas 10 Open Top Carrier',            category: 'DOG',          cost: 22.89, sell: 65.39,  profit: 25.40, roi: 111, map: false },
  { rank: 28, brand: 'Midwest Homes',       product: 'Spree Double Door Travel Carrier',     category: 'DOG',          cost: 25.35, sell: 72.39,  profit: 27.91, roi: 110, map: false },
  { rank: 29, brand: 'Goo-EEZ',            product: 'Kangaroo Fleece Hoodie',               category: 'DOG',          cost: 20.00, sell: 44.99,  profit: 14.87, roi: 74,  map: true  },
  { rank: 30, brand: 'Komodo Reptile',      product: 'Rock Burrow Hide',                     category: 'REPTILE',      cost: 14.57, sell: 38.09,  profit: 14.27, roi: 98,  map: false },
  { rank: 31, brand: 'Goo-EEZ',            product: 'Trendz Snow Camo Dog Boots',           category: 'DOG',          cost: 14.21, sell: 31.99,  profit: 9.66,  roi: 68,  map: true  },
  { rank: 32, brand: 'Multipet',            product: 'Lamb Chop Plush Toy',                  category: 'DOG',          cost: 12.51, sell: 32.69,  profit: 11.22, roi: 90,  map: false },
  { rank: 33, brand: 'Smokehouse',          product: 'USA Pizzle Stix',                      category: 'DOG',          cost: 8.59,  sell: 22.89,  profit: 7.69,  roi: 90,  map: false },
  { rank: 34, brand: 'Multipet',            product: 'Lambchop Dog Bed',                     category: 'DOG',          cost: 23.18, sell: 60.59,  profit: 22.76, roi: 98,  map: false },
  { rank: 35, brand: 'Komodo Reptile',      product: 'Jelly Pots Fruit Display',             category: 'REPTILE',      cost: 17.70, sell: 47.60,  profit: 17.26, roi: 98,  map: false },
  { rank: 36, brand: 'Multipet',            product: 'Lamb Chop Floppy Dog Toy',             category: 'DOG',          cost: 11.48, sell: 29.99,  profit: 10.00, roi: 87,  map: false },
  { rank: 37, brand: 'Capshield Maxx',      product: 'Monthly Flea Supplement Chewable',     category: 'DOG',          cost: 11.34, sell: 27.07,  profit: 7.61,  roi: 67,  map: true  },
  { rank: 38, brand: 'Komodo Reptile',      product: 'Bonsai Tree',                          category: 'REPTILE',      cost: 11.19, sell: 29.29,  profit: 9.74,  roi: 87,  map: false },
  { rank: 39, brand: 'Komodo Reptile',      product: 'Alligator Skull',                      category: 'REPTILE',      cost: 10.91, sell: 28.49,  profit: 9.31,  roi: 85,  map: false },
  { rank: 40, brand: 'Millers Forge',       product: 'Nail Clipper',                         category: 'DOG',          cost: 14.38, sell: 34.29,  profit: 11.49, roi: 80,  map: false },
  { rank: 41, brand: 'Komodo Reptile',      product: 'Two Tone Climbing Plant',              category: 'REPTILE',      cost: 8.44,  sell: 22.09,  profit: 7.16,  roi: 85,  map: false },
  { rank: 42, brand: 'Komodo Reptile',      product: 'Succulent Plant',                      category: 'REPTILE',      cost: 8.78,  sell: 22.99,  profit: 7.44,  roi: 85,  map: false },
  { rank: 43, brand: 'Smokehouse',          product: 'USA Beefy Munchies Dog Treats',        category: 'DOG',          cost: 13.95, sell: 37.19,  profit: 12.32, roi: 88,  map: false },
  { rank: 44, brand: 'Marshall',            product: 'Pop-N-Play Ball Pit',                  category: 'SMALL ANIMAL', cost: 16.65, sell: 36.99,  profit: 11.17, roi: 67,  map: true  },
  { rank: 45, brand: 'Komodo Reptile',      product: 'Cactus / Flower Decor',               category: 'REPTILE',      cost: 9.87,  sell: 25.79,  profit: 8.07,  roi: 82,  map: false },
  { rank: 46, brand: 'Goo-EEZ',            product: 'Brillant Double Wall Bowl',            category: 'DOG',          cost: 11.11, sell: 24.99,  profit: 6.74,  roi: 61,  map: true  },
  { rank: 47, brand: 'Goo-EEZ',            product: 'Silicone Placemat Anti-Spill',         category: 'DOG',          cost: 13.46, sell: 29.99,  profit: 8.07,  roi: 60,  map: true  },
  { rank: 48, brand: "Suzie's CBD Treats",  product: 'CBD Drops for Dogs',                   category: 'DOG',          cost: 45.45, sell: 99.95,  profit: 36.33, roi: 80,  map: false },
  { rank: 49, brand: 'Comfort Zone',        product: 'On-The-Go Calming Collar for Cats',   category: 'CAT',          cost: 14.99, sell: 34.59,  profit: 11.23, roi: 75,  map: false },
  { rank: 50, brand: 'Comfort Zone',        product: 'Calming Diffuser Kit for Cats',        category: 'CAT',          cost: 30.60, sell: 70.59,  profit: 25.83, roi: 84,  map: false },
]

const categoryColors: Record<string, string> = {
  DOG:          '#C4623A',
  REPTILE:      '#6B8C52',
  CAT:          '#8B6952',
  AQUATICS:     '#4A7B9D',
  'SMALL ANIMAL': '#9A6B3A',
}

const categoryLabels: Record<string, string> = {
  DOG:          'Dog Supplies',
  REPTILE:      'Reptile Supplies',
  CAT:          'Cat Supplies',
  AQUATICS:     'Aquatics',
  'SMALL ANIMAL': 'Small Animal',
}

const brands = [...new Set(products.map(p => p.brand))].sort()
const categories = [...new Set(products.map(p => p.category))]

const catalogSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Urban Pulse Wholesale Product Catalog — Pet Supplies',
  description: 'Top 50 authorized wholesale pet supply products distributed by Urban Pulse Wholesale via Amazon FBA.',
  numberOfItems: products.length,
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${p.brand} ${p.product}`,
    description: `${p.brand} ${p.product} — Amazon FBA wholesale. Sell price: $${p.sell.toFixed(2)}. Est. profit: $${p.profit.toFixed(2)}/unit. ROI: ${p.roi}%.`,
  })),
}

export default function CatalogPage() {
  return (
    <div style={{ background: '#FAFAF5' }}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />

      {/* ── HERO ── */}
      <section style={{
        paddingTop: '9rem', paddingBottom: '5rem',
        background: 'linear-gradient(160deg, #F5F0EA 0%, #FAFAF5 60%, #F0EBE3 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 16px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C4623A' }} />
            <span style={{ color: '#C4623A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>50 Products — BCI Authorized — Amazon FBA Verified</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1C1C1A', marginBottom: '1rem' }}>
            Urban Pulse Wholesale <span style={{ color: '#C4623A', fontStyle: 'italic' }}>Product Catalog</span>
          </h1>
          <p style={{ color: '#6B6460', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 620, marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Our current Top 50 wholesale products sourced from BCI — verified profitable, Amazon FBA ready, and authorized for resale. All sold on Amazon with data-backed pricing and MAP compliance where applicable.
          </p>

          {/* Summary stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            {[
              { label: 'Total Products',    val: '50' },
              { label: 'Avg ROI',           val: '93%' },
              { label: 'Avg Profit / Unit', val: '$20' },
              { label: 'Categories',        val: '5' },
              { label: 'Brands',            val: `${brands.length}` },
            ].map(s => (
              <div key={s.label} style={{ background: 'white', border: '1px solid #EDE7DE', borderRadius: 12, padding: '0.875rem 1.25rem', minWidth: 110 }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.5rem', fontWeight: 900, color: '#C4623A', lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
                <div style={{ color: '#9A9086', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATALOG TABLE ── */}
      <section style={{ padding: '4rem 0 6rem', background: '#FAFAF5' }}>
        <div className="container">

          {/* Category filter pills (visual only — no JS needed for SEO) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#C4623A', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '6px 16px', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>All Products</div>
            {categories.map(cat => (
              <div key={cat} style={{ background: 'white', border: `1.5px solid ${categoryColors[cat] ?? '#EDE7DE'}`, color: categoryColors[cat] ?? '#6B6460', fontSize: '0.75rem', fontWeight: 700, padding: '5px 15px', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                {categoryLabels[cat] ?? cat}
              </div>
            ))}
          </div>

          {/* Product cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
            {products.map(p => (
              <article
                key={p.rank}
                itemScope
                itemType="https://schema.org/Product"
                style={{ background: 'white', border: '1px solid #EDE7DE', borderRadius: 16, padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', transition: 'box-shadow 0.2s, transform 0.2s' }}
              >
                {/* Rank + category */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '0.8rem', color: '#C4B8A8' }}>#{p.rank}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {p.map && (
                      <span style={{ background: '#F5F0EA', color: '#C4623A', fontSize: '0.62rem', fontWeight: 700, padding: '2px 8px', borderRadius: 100, letterSpacing: '0.06em', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>MAP</span>
                    )}
                    <span style={{ background: `${categoryColors[p.category] ?? '#EDE7DE'}18`, color: categoryColors[p.category] ?? '#6B6460', fontSize: '0.62rem', fontWeight: 700, padding: '3px 9px', borderRadius: 100, letterSpacing: '0.06em', fontFamily: 'Plus Jakarta Sans, sans-serif', border: `1px solid ${categoryColors[p.category] ?? '#EDE7DE'}40` }}>
                      {categoryLabels[p.category] ?? p.category}
                    </span>
                  </div>
                </div>

                {/* Brand + Product */}
                <div>
                  <div style={{ color: '#C4623A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }} itemProp="brand">
                    {p.brand}
                  </div>
                  <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: '#1C1C1A', lineHeight: 1.35, margin: 0 }} itemProp="name">
                    {p.product}
                  </h2>
                </div>

                {/* Pricing */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid #F5F0EA' }}>
                  <div>
                    <div style={{ color: '#9A9086', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Sell Price</div>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '1rem', color: '#1C1C1A' }} itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="price">${p.sell.toFixed(2)}</span>
                      <meta itemProp="priceCurrency" content="USD" />
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#9A9086', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Est. Profit</div>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '1rem', color: '#2D7D46' }}>+${p.profit.toFixed(2)}</div>
                  </div>
                  <div>
                    <div style={{ color: '#9A9086', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>ROI</div>
                    <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '1rem', color: '#C4623A' }}>{p.roi}%</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom note */}
          <div style={{ marginTop: '3rem', background: '#F5F0EA', border: '1px solid #EDE7DE', borderRadius: 16, padding: '1.75rem 2rem', display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: '1.1rem', color: '#1C1C1A', marginBottom: 6 }}>Want to Supply These Products?</div>
              <p style={{ color: '#6B6460', fontSize: '0.875rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 500, margin: 0 }}>
                This catalog represents our Top 50 current priority products sourced from BCI. If you are a brand or authorized distributor with products in these categories, we would love to open a wholesale account.
              </p>
            </div>
            <Link href="/supplier-info" style={{ background: '#C4623A', color: 'white', fontWeight: 700, padding: '0.9rem 1.75rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              Submit Supplier Inquiry <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
