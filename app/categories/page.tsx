import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Product Categories',
  description: 'Urban Pulse Wholesale LLC distributes products across Home & Kitchen, Toys & Games, Pet Supplies, Grocery & Food, and Sports & Outdoors on Amazon FBA.',
}

const categories = [
  {
    name: 'Home & Kitchen',
    emoji: '🏠',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    desc: 'We source and distribute a wide range of Home & Kitchen products including cookware, small appliances, kitchen gadgets, storage solutions, and home décor items.',
    items: ['Cookware & Bakeware', 'Small Kitchen Appliances', 'Kitchen Storage & Organization', 'Cleaning Supplies & Tools', 'Home Décor & Accents', 'Bedding & Bath Essentials'],
    why: 'Home & Kitchen is one of Amazon\'s largest and most consistent categories, with strong year-round demand and loyal repeat buyers.',
  },
  {
    name: 'Toys & Games',
    emoji: '🎮',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    desc: 'We carry educational toys, board games, outdoor play equipment, STEM products, and family entertainment items from established brands.',
    items: ['Educational & STEM Toys', 'Board Games & Puzzles', 'Outdoor Play Equipment', 'Building & Construction Sets', 'Action Figures & Collectibles', 'Arts & Crafts Kits'],
    why: 'Toys & Games offers strong seasonal opportunities with consistent baseline demand, especially for educational and family-focused brands.',
  },
  {
    name: 'Pet Supplies',
    emoji: '🐾',
    img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
    desc: 'Pet ownership is at an all-time high. We distribute pet food, treats, grooming products, toys, accessories, and health products for dogs, cats, and small animals.',
    items: ['Dog & Cat Food and Treats', 'Grooming Tools & Products', 'Beds, Crates & Carriers', 'Toys & Enrichment Products', 'Health & Wellness Supplements', 'Leashes, Collars & Apparel'],
    why: 'Pet Supplies is a recession-resistant category with extremely loyal, repeat customers — one of the best performing categories on Amazon.',
  },
  {
    name: 'Grocery & Food',
    emoji: '🛒',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80',
    desc: 'We work with specialty food brands, pantry staple manufacturers, and natural/organic food distributors to bring quality food products to Amazon shoppers.',
    items: ['Pantry Staples & Condiments', 'Snacks & Specialty Foods', 'Natural & Organic Products', 'Coffee, Tea & Beverages', 'Health Foods & Supplements', 'International & Specialty Items'],
    why: 'Grocery & Food on Amazon is a rapidly growing channel as consumers increasingly shop for pantry items online with subscription and replenishment habits.',
  },
  {
    name: 'Sports & Outdoors',
    emoji: '⚽',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    desc: 'From fitness equipment to camping gear, we distribute sports and outdoor products that support active lifestyles for Amazon\'s health-conscious consumer base.',
    items: ['Fitness Equipment & Accessories', 'Camping & Hiking Gear', 'Team & Recreational Sports', 'Water Sports & Swimming', 'Cycling Accessories', 'Yoga & Wellness Products'],
    why: 'Sports & Outdoors sees strong seasonal peaks and growing baseline demand as health and fitness awareness continues to rise among Amazon shoppers.',
  },
]

export default function CategoriesPage() {
  return (
    <div>
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '8rem', paddingBottom: '5rem' }} className="mesh-dark noise">
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(14,165,176,0.12)', top: '-100px', right: '-100px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
              <span style={{ color: '#d4a843', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>5 Active Product Categories</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.25rem', fontWeight: 900 }}>
              Product Categories <span className="gradient-text">We Distribute</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', lineHeight: 1.75 }}>
              We operate across five core Amazon FBA categories — sourcing from authorized brands, distributors, and manufacturers with consistent purchasing in each.
            </p>
          </div>
        </div>
      </section>

      {/* Category detail sections */}
      {categories.map((cat, i) => (
        <section key={i} className="section" style={{ background: i % 2 === 0 ? 'white' : 'var(--off)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
              <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,168,67,0.1)', borderRadius: '100px', padding: '5px 14px', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '1.1rem' }}>{cat.emoji}</span>
                  <span style={{ color: '#a87c1f', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Category</span>
                </div>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--navy)', marginBottom: '1rem' }}>{cat.name}</h2>
                <p style={{ color: 'var(--gray)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>{cat.desc}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', marginBottom: '1.5rem' }}>
                  {cat.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#d4a843', flexShrink: 0 }} />
                      <span style={{ color: 'var(--text)', fontSize: '0.875rem' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ background: 'linear-gradient(135deg, rgba(212,168,67,0.08), rgba(14,165,176,0.08))', border: '1px solid rgba(212,168,67,0.2)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ color: '#a87c1f', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Why This Category</div>
                  <p style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.7 }}>{cat.why}</p>
                </div>
              </div>

              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                <div style={{ borderRadius: '24px', overflow: 'hidden', border: '2px solid', borderImage: 'linear-gradient(135deg, #d4a843, #0ea5b0) 1', position: 'relative' }} className="card-3d">
                  <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(5,13,31,0.85))' }}>
                    <div style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700 }}>{cat.emoji} {cat.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Inventory CTA */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="accent-bar-center" />
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1rem' }}>Interested in Supplying These Categories?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            We are actively seeking wholesale accounts across all five categories. Submit an inquiry and we'll be in touch within one business day.
          </p>
          <Link href="/supplier-info" className="btn-gold"><span>Submit Supplier Inquiry</span> <ArrowRight size={16} /></Link>
        </div>
      </section>
    </div>
  )
}
