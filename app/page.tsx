import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Star, TrendingUp, Shield, Handshake, Package, BarChart3 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urban Pulse Wholesale LLC | Building Strong Wholesale Partnerships',
  description: 'Professional wholesale distribution and Amazon FBA operations. We partner with brands and distributors to build long-term, mutually beneficial relationships.',
}

const categories = [
  { name: 'Home & Kitchen', emoji: '🏠', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', desc: 'Cookware, appliances, décor & more' },
  { name: 'Toys & Games', emoji: '🎮', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Educational, outdoor & family fun' },
  { name: 'Pet Supplies', emoji: '🐾', img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80', desc: 'Food, toys, grooming & accessories' },
  { name: 'Grocery & Food', emoji: '🛒', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80', desc: 'Pantry staples, snacks & specialty foods' },
  { name: 'Sports & Outdoors', emoji: '⚽', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80', desc: 'Fitness, camping & outdoor gear' },
]

const stats = [
  { num: '5', label: 'Product Categories', icon: '📦' },
  { num: 'FBA', label: 'Primary Channel', icon: '🚀' },
  { num: '100%', label: 'MAP Compliant', icon: '✅' },
  { num: 'LLC', label: 'Registered Business', icon: '🏢' },
]

const pillars = [
  { icon: <Shield size={24} />, title: 'Brand Protection', desc: 'Strict MAP compliance and authorized reseller agreements. Your brand integrity is always protected.' },
  { icon: <Handshake size={24} />, title: 'Long-Term Focus', desc: 'We build lasting partnerships, not transactional relationships. Consistent orders, predictable volume.' },
  { icon: <BarChart3 size={24} />, title: 'Data-Driven Buying', desc: 'Our purchasing is guided by sales velocity data, market research, and demand forecasting.' },
  { icon: <TrendingUp size={24} />, title: 'Reliable Growth', desc: 'As products perform, we scale purchasing. Your success drives our continued investment.' },
  { icon: <Package size={24} />, title: 'FBA Excellence', desc: 'Products stored in Amazon\'s fulfillment centers, shipped with Prime speed to millions of customers.' },
  { icon: <Star size={24} />, title: 'Professional Standards', desc: 'Organized documentation, on-time payments, and transparent communication at every step.' },
]

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }} className="mesh-dark noise">
        {/* Orbs */}
        <div className="orb" style={{ width: 600, height: 600, background: 'rgba(14,165,176,0.12)', top: '-200px', right: '-100px' }} />
        <div className="orb" style={{ width: 400, height: 400, background: 'rgba(212,168,67,0.1)', bottom: '-100px', left: '-100px' }} />

        {/* Animated grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,168,67,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.04) 1px, transparent 1px)', backgroundSize: '60px 60px', zIndex: 0 }} />

        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '8rem', paddingBottom: '6rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="lg:grid-cols-2">
            {/* Left content */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d4a843', display: 'inline-block' }} />
                <span style={{ color: '#d4a843', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Wholesale Distribution & Amazon FBA</span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.5rem', fontWeight: 900 }}>
                Building Strong{' '}
                <span className="shimmer-text">Wholesale</span>{' '}
                Partnerships for Growth
              </h1>

              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.15rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '520px' }}>
                Urban Pulse Wholesale LLC partners with brands, distributors, and manufacturers to bring quality products to customers through professional Amazon FBA operations.
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <Link href="/supplier-info" className="btn-gold"><span>Become a Supplier</span> <ArrowRight size={16} /></Link>
                <Link href="/about" className="btn-outline-gold">Learn More</Link>
              </div>

              {/* Trust badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {['LLC Registered', 'MAP Compliant', 'Amazon FBA Pro', 'Policy Transparent'].map(b => (
                  <div key={b} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <CheckCircle2 size={14} color="#0ea5b0" />
                    <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', fontWeight: 500 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — 3D floating card stack */}
            <div style={{ position: 'relative', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hidden lg:flex">
              {/* Back card */}
              <div style={{ position: 'absolute', width: '300px', top: '20px', right: '0px', background: 'rgba(14,165,176,0.08)', border: '1px solid rgba(14,165,176,0.2)', borderRadius: '20px', padding: '1.5rem', transform: 'rotate(6deg)' }}>
                <div style={{ color: '#0ea5b0', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Amazon FBA Channel</div>
                <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: 900, fontFamily: 'Playfair Display, serif', marginBottom: '0.25rem' }}>Prime Ready</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem' }}>Millions of Amazon customers reached daily</div>
              </div>

              {/* Middle card */}
              <div className="float2" style={{ position: 'absolute', width: '320px', top: '60px', left: '20px', background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: '20px', padding: '1.5rem', transform: 'rotate(-4deg)' }}>
                <div style={{ color: '#d4a843', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>5 Product Categories</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['🏠 Home', '🎮 Toys', '🐾 Pets', '🛒 Grocery', '⚽ Sports'].map(c => (
                    <span key={c} style={{ background: 'rgba(212,168,67,0.15)', color: '#d4a843', fontSize: '0.75rem', fontWeight: 600, padding: '4px 10px', borderRadius: '100px' }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Main front card */}
              <div className="float" style={{ position: 'absolute', bottom: '20px', left: '40px', right: '40px', background: 'linear-gradient(135deg, rgba(5,13,31,0.9) 0%, rgba(22,45,90,0.9) 100%)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '24px', padding: '2rem', backdropFilter: 'blur(20px)' }} >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600 }}>Monthly Inventory Budget</div>
                  <div style={{ background: 'rgba(14,165,176,0.2)', color: '#0ea5b0', fontSize: '0.7rem', fontWeight: 700, padding: '3px 10px', borderRadius: '100px' }}>ACTIVE</div>
                </div>
                <div style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Playfair Display, serif', marginBottom: '0.25rem' }} className="gradient-text">$10K–$50K</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>Consistent purchasing commitment</div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {[85, 92, 78, 95, 88].map((v, i) => (
                    <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,0.06)', borderRadius: '4px', height: '32px', display: 'flex', alignItems: 'flex-end', padding: '3px' }}>
                      <div style={{ width: '100%', height: `${v}%`, background: 'linear-gradient(180deg, #d4a843, #0ea5b0)', borderRadius: '2px', opacity: 0.8 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 2 }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(180deg, rgba(212,168,67,0.6), transparent)' }} />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: 'linear-gradient(90deg, #050d1f 0%, #0a1930 50%, #050d1f 100%)', borderTop: '1px solid rgba(212,168,67,0.15)', borderBottom: '1px solid rgba(212,168,67,0.15)', padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{s.icon}</div>
                <div className="stat-num gradient-text">{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section" style={{ background: '#f8f9fc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="lg:grid-cols-2">
            <div>
              <div className="accent-bar" />
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy)', marginBottom: '1.25rem' }}>Who We Are</h2>
              <p style={{ color: 'var(--gray)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Urban Pulse Wholesale LLC is a professionally registered wholesale distribution company operating primarily through the Amazon FBA channel. We source products from authorized brands and distributors, delivering them to consumers through Amazon's world-class fulfillment network.
              </p>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
                We are not brokers, liquidators, or gray market sellers. We pursue legitimate, authorized wholesale accounts and operate entirely within each supplier's established terms and policies.
              </p>
              <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '1.75rem', marginBottom: '1.5rem' }}>
                <div style={{ color: '#d4a843', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Mission</div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.75, borderLeft: '3px solid #d4a843', paddingLeft: '1rem' }}>
                  "Urban Pulse Wholesale LLC is committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."
                </p>
              </div>
              <Link href="/about" className="btn-gold"><span>Learn More About Us</span> <ArrowRight size={16} /></Link>
            </div>

            {/* Right image grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80" alt="Warehouse operations" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', marginTop: '2rem' }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" alt="Amazon FBA fulfillment" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px' }}>
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80" alt="Product inventory" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '220px', marginTop: '-2rem' }}>
                <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80" alt="Business partnership" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="section mesh-dark noise" style={{ position: 'relative' }}>
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(14,165,176,0.08)', top: '-100px', right: '-100px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="accent-bar-center" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1rem' }}>Product Categories We Sell</h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              We source and distribute across five core categories on Amazon FBA, with consistent purchasing in each.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.25rem' }} className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat, i) => (
              <div key={i} className="cat-card card-3d" style={{ height: '280px' }}>
                <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(5,13,31,0.92) 100%)' }} />
                <div className="cat-overlay">
                  <div style={{ textAlign: 'center', color: 'white' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{cat.emoji}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>View Details</div>
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem', zIndex: 2 }}>
                  <div style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cat.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>{cat.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/categories" className="btn-outline-gold">View All Categories</Link>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="accent-bar-center" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy)', marginBottom: '1rem' }}>Why Partner With Us?</h2>
            <p style={{ color: 'var(--gray)', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              We operate with the professionalism and transparency that suppliers deserve.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={i} className="card-3d" style={{ background: 'var(--off)', borderRadius: '16px', padding: '2rem', border: '1px solid var(--border)', cursor: 'default' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(14,165,176,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843', marginBottom: '1.25rem' }}>
                  {p.icon}
                </div>
                <h3 style={{ color: 'var(--navy)', fontSize: '1.1rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.75rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="accent-bar-center" />
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy)', marginBottom: '1rem' }}>How We Operate</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '28px', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', opacity: 0.3 }} className="hidden lg:block" />
            {[
              { n: '01', t: 'Source & Research', d: 'Identify brands aligned with our FBA model and market data.' },
              { n: '02', t: 'Build Partnership', d: 'Professional onboarding with full business documentation.' },
              { n: '03', t: 'Purchase Inventory', d: 'Data-driven purchase orders at agreed wholesale terms.' },
              { n: '04', t: 'FBA Fulfillment', d: 'Products prepped and shipped to Amazon fulfillment centers.' },
              { n: '05', t: 'Grow Together', d: 'Sales data drives consistent, growing reorder cycles.' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 0.5rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', position: 'relative', zIndex: 1 }}>
                  <span style={{ color: 'white', fontWeight: 800, fontSize: '0.8rem' }}>{step.n}</span>
                </div>
                <h3 style={{ color: 'var(--navy)', fontSize: '0.9rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem' }}>{step.t}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.8rem', lineHeight: 1.6 }}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVENTORY HIGHLIGHT ── */}
      <section className="section mesh-dark noise" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="orb" style={{ width: 600, height: 600, background: 'rgba(212,168,67,0.08)', bottom: '-200px', left: '-100px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div className="accent-bar" />
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.25rem' }}>Amazon FBA Operations</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our Amazon FBA model means your products reach millions of Prime members through Amazon's trusted fulfillment network — with professional listing management, inventory planning, and full MAP compliance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Inventory forecasting & demand planning', 'Amazon FBA prep & compliance', 'Account health monitoring', 'MAP & brand policy adherence', 'Professional listing management'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(14,165,176,0.2)', border: '1px solid #0ea5b0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={12} color="#0ea5b0" />
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fba-operations" className="btn-gold"><span>View FBA Operations</span> <ArrowRight size={16} /></Link>
            </div>

            {/* FBA visual */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)' }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80" alt="Amazon FBA warehouse fulfillment" style={{ width: '100%', height: '380px', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,13,31,0.4) 0%, transparent 60%)' }} />
              </div>
              {/* Floating stat badge */}
              <div className="glass float" style={{ position: 'absolute', bottom: '-20px', left: '-20px', borderRadius: '16px', padding: '1.25rem 1.5rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Monthly Budget</div>
                <div style={{ color: 'white', fontSize: '1.75rem', fontWeight: 900, fontFamily: 'Playfair Display, serif' }} className="gradient-text">$10K–$50K</div>
              </div>
              <div className="glass float2" style={{ position: 'absolute', top: '-16px', right: '-16px', borderRadius: '12px', padding: '1rem 1.25rem' }}>
                <div style={{ color: '#0ea5b0', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Primary Channel</div>
                <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 800 }}>Amazon FBA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #d4a843 0%, #f0c96a 50%, #0ea5b0 100%)', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(5,13,31,0.05) 0, rgba(5,13,31,0.05) 1px, transparent 0, transparent 50%)', backgroundSize: '16px 16px' }} />
        <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--navy)', marginBottom: '1rem' }}>Ready to Establish a Wholesale Account?</h2>
          <p style={{ color: 'rgba(5,13,31,0.7)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            We welcome new supplier partnerships and are fully prepared to provide all required business documentation during onboarding.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/supplier-info" className="btn-white"><span>Submit Supplier Inquiry</span></Link>
            <Link href="/contact" style={{ border: '2px solid var(--navy)', color: 'var(--navy)', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: '6px', fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase', transition: 'all 0.3s', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
