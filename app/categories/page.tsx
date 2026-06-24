import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Categories | Fragrance, Home, Pet, Health & More',
  description: 'Urban Pulse Wholesale distributes products across 6 high-velocity Amazon FBA categories: Fragrance & Perfume, Home & Kitchen, Pet Supplies, Health & Wellness, Grocery & Food, and Sports & Outdoors. Authorized brands only. MAP compliant.',
}

const categories = [
  {
    name: 'Fragrance & Perfume',
    img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&q=80',
      'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?w=500&q=80',
      'https://images.unsplash.com/photo-1624613533305-28d421d70875?w=500&q=80',
    ],
    desc: 'Fragrance & Perfume is one of the fastest-growing categories on Amazon — and one where authorized distribution matters most. Urban Pulse Wholesale sources and distributes authentic fragrances including niche Middle Eastern oud and attar labels, domestic specialty candle and home fragrance brands, and personal fragrance lines with strong Amazon demand.',
    items: ['Eau de Parfum & Eau de Toilette', 'Oud, Attar & Middle Eastern Fragrances', 'Body Mists & Cologne Sprays', 'Perfume Oils & Roll-Ons', 'Home Fragrance & Reed Diffusers', 'Scented Candles & Wax Melts', 'Incense & Aromatherapy Products', 'Fragrance Gift Sets'],
    why: 'Fragrance is the #1 Amazon category where brand protection matters most — counterfeit product is rampant. As an authorized, MAP-compliant wholesale buyer, Urban Pulse Wholesale offers fragrance brands exactly the kind of Amazon distribution they should want: documented, compliant, and brand-protective. We are fully versed in Amazon Dangerous Goods compliance including SDS documentation.',
  },
  {
    name: 'Home & Kitchen',
    img: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556910602-38f53e68e15d?w=500&q=80',
      'https://images.unsplash.com/photo-1518291344630-4857135fb581?w=500&q=80',
      'https://images.unsplash.com/photo-1584990347193-6bebebfeaeee?w=500&q=80',
    ],
    desc: 'We source and distribute a wide range of Home & Kitchen products including cookware, small appliances, kitchen gadgets, storage solutions, and home décor items from authorized brands and distributors.',
    items: ['Cookware & Bakeware', 'Small Kitchen Appliances', 'Kitchen Storage & Organization', 'Cleaning Supplies & Tools', 'Home Décor & Accents', 'Bedding & Bath Essentials'],
    why: 'Home & Kitchen is one of Amazon\'s largest and most consistent categories, with strong year-round demand and loyal repeat buyers. Our data-driven sourcing focuses on brands with strong BSR rankings and proven review profiles.',
  },
  {
    name: 'Pet Supplies',
    img: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1581888227599-779811939961?w=500&q=80',
      'https://images.unsplash.com/photo-1714068691210-073dc52c6c1d?w=500&q=80',
      'https://images.unsplash.com/photo-1632236568025-1256513514b7?w=500&q=80',
    ],
    desc: 'Pet ownership is at an all-time high. We distribute pet food, treats, grooming products, toys, accessories, and health products for dogs, cats, birds, fish, and small animals from authorized brands.',
    items: ['Dog & Cat Food and Treats', 'Grooming Tools & Products', 'Beds, Crates & Carriers', 'Toys & Enrichment Products', 'Health & Wellness Supplements', 'Aquarium & Small Animal Supplies'],
    why: 'Pet Supplies is a recession-resistant category with extremely loyal, repeat customers and strong subscription buying patterns — one of the best performing categories on Amazon for FBA wholesale distributors.',
  },
  {
    name: 'Health & Wellness',
    img: 'https://images.unsplash.com/photo-1664956618021-73c47736845e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1624362772755-4d5843e67047?w=500&q=80',
      'https://images.unsplash.com/photo-1648139346494-2b961c5a2bb7?w=500&q=80',
      'https://images.unsplash.com/photo-1559087316-6b27308e53f6?w=500&q=80',
    ],
    desc: 'We source vitamins, supplements, personal care products, first aid supplies, and wellness essentials from authorized brands and domestic distributors with strong Amazon velocity.',
    items: ['Vitamins & Dietary Supplements', 'Natural & Organic Wellness', 'Personal Care & Hygiene', 'First Aid & Medical Supplies', 'Sports Nutrition & Protein', 'Essential Oils & Aromatherapy'],
    why: 'Health & Wellness is one of the highest-repeat-purchase categories on Amazon, driven by subscription habits and brand loyalty. Authorized sourcing and MAP compliance are especially important here.',
  },
  {
    name: 'Grocery & Food',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80',
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80',
    ],
    desc: 'We work with specialty food brands, pantry staple manufacturers, and natural/organic food distributors to bring quality food products to Amazon shoppers across the United States.',
    items: ['Pantry Staples & Condiments', 'Snacks & Specialty Foods', 'Natural & Organic Products', 'Coffee, Tea & Beverages', 'Protein Bars & Health Foods', 'International & Specialty Items'],
    why: 'Grocery & Food on Amazon is a rapidly growing channel as consumers increasingly shop for pantry items online with subscription and auto-replenishment purchasing habits.',
  },
  {
    name: 'Sports & Outdoors',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80',
      'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&q=80',
      'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&q=80',
    ],
    desc: 'From fitness equipment to camping gear, we distribute sports and outdoor products that support active lifestyles for Amazon\'s health-conscious consumer base from authorized brands.',
    items: ['Fitness Equipment & Accessories', 'Camping & Hiking Gear', 'Team & Recreational Sports', 'Water Sports & Swimming', 'Cycling Accessories', 'Yoga & Wellness Products'],
    why: 'Sports & Outdoors sees strong seasonal peaks and growing baseline demand as health and fitness awareness continues to rise among Amazon shoppers.',
  },
]

export default function CategoriesPage() {
  return (
    <div style={{ background: '#FAFAF5' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '55vh',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '9rem', paddingBottom: '5rem',
        background: 'linear-gradient(160deg, #F5F0EA 0%, #FAFAF5 60%, #F0EBE3 100%)',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.06) 0%, transparent 70%)', top: -100, right: -60, pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
              <span style={{ color: '#C4623A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>6 Active Product Categories — Amazon FBA Wholesale</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#1C1C1A', marginBottom: '1.25rem', fontWeight: 900, fontFamily: 'Fraunces, Georgia, serif' }}>
              Product Categories <span style={{ color: '#C4623A', fontStyle: 'italic' }}>We Distribute</span>
            </h1>
            <p style={{ color: '#6B6460', fontSize: '1.05rem', lineHeight: 1.8, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Urban Pulse Wholesale operates across six high-velocity Amazon FBA categories — authorized brands only, MAP compliant, data-driven purchasing. Fragrance &amp; Perfume is our newest and fastest-growing vertical.
            </p>
          </div>
        </div>
      </section>

      {/* ── CATEGORY SECTIONS ── */}
      {categories.map((cat, i) => (
        <section key={i} className="section" style={{ background: i % 2 === 0 ? '#FAFAF5' : '#F5F0EA' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(196,98,58,0.08)', border: '1px solid rgba(196,98,58,0.18)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.25rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C4623A' }} />
                  <span style={{ color: '#C4623A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Category</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#1C1C1A', marginBottom: '1rem', fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900 }}>{cat.name}</h2>
                <p style={{ color: '#6B6460', fontSize: '1rem', lineHeight: 1.85, marginBottom: '1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{cat.desc}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {cat.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C4623A', flexShrink: 0 }} />
                      <span style={{ color: '#3D3D3B', fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: '#F5F0EA', border: '1px solid #EDE7DE', borderLeft: '3px solid #C4623A', borderRadius: '0 12px 12px 0', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#C4623A', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Why This Category</div>
                  <p style={{ color: '#6B6460', fontSize: '0.875rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>{cat.why}</p>
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }} className="card-3d">
                  {/* Main hero image */}
                  <div style={{ borderRadius: '18px', overflow: 'hidden', position: 'relative', height: '260px', border: '1px solid #EDE7DE', boxShadow: '0 8px 32px rgba(28,28,26,0.07)' }}>
                    <img src={cat.img} alt={`${cat.name} wholesale products Amazon FBA`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem 1.5rem', background: 'linear-gradient(transparent, rgba(28,28,26,0.82))' }}>
                      <div style={{ color: 'white', fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.2rem', fontWeight: 700 }}>{cat.name}</div>
                    </div>
                  </div>
                  {/* Thumbnail row — PRESERVED from original */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.65rem' }}>
                    {cat.gallery.map((gImg, gi) => (
                      <div key={gi} style={{ borderRadius: '12px', overflow: 'hidden', height: '120px', border: '1px solid #EDE7DE' }}>
                        <img src={gImg} alt={`${cat.name} product ${gi + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section style={{ background: '#C4623A', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ width: 36, height: 3, background: 'rgba(255,255,255,0.5)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem', fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900 }}>Interested in Supplying These Categories?</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Urban Pulse Wholesale is actively seeking wholesale accounts — especially Pet Supplies, Fragrance &amp; Perfume, and Home &amp; Kitchen. Submit an inquiry and we&apos;ll be in touch within one business day.
          </p>
          <Link href="/supplier-info" style={{ background: '#1C1C1A', color: 'white', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            Submit Supplier Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
