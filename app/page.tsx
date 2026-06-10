import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Handshake, BarChart3, TrendingUp, Package, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urban Pulse Wholesale LLC | Building Strong Wholesale Partnerships',
  description: 'Professional wholesale distribution and Amazon FBA operations. We partner with brands and distributors to build long-term, mutually beneficial relationships.',
}

const categories = [
  { name: 'Home & Kitchen', emoji: '🏠', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', desc: 'Cookware, appliances & décor' },
  { name: 'Toys & Games', emoji: '🎮', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Educational & family fun' },
  { name: 'Pet Supplies', emoji: '🐾', img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&q=80', desc: 'Food, toys & accessories' },
  { name: 'Grocery & Food', emoji: '🛒', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80', desc: 'Pantry staples & specialty' },
  { name: 'Sports & Outdoors', emoji: '⚽', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80', desc: 'Fitness & outdoor gear' },
]

const pillars = [
  { icon: <Shield size={22}/>, title: 'Brand Protection', desc: 'Strict MAP compliance and authorized reseller agreements. Your brand integrity is always protected in every marketplace.' },
  { icon: <Handshake size={22}/>, title: 'Long-Term Focus', desc: 'We build lasting partnerships, not one-time transactions. Consistent orders, predictable volume, and growing relationships.' },
  { icon: <BarChart3 size={22}/>, title: 'Data-Driven Buying', desc: 'Every purchasing decision is guided by sales velocity data, market research, and demand forecasting — never guesswork.' },
  { icon: <TrendingUp size={22}/>, title: 'Reliable Growth', desc: 'As products perform well, we scale purchasing. Your success drives our continued investment and deeper partnership.' },
  { icon: <Package size={22}/>, title: 'FBA Excellence', desc: 'Products stored in Amazon\'s fulfillment centers and shipped with Prime speed to millions of customers nationwide.' },
  { icon: <Star size={22}/>, title: 'Professional Standards', desc: 'Organized documentation, on-time payments, and transparent communication at every stage of the relationship.' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden' }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 40%, #081628 70%, #040c1c 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '6rem', paddingBottom: '4rem',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '60%', maxWidth: 600, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.09) 0%, transparent 70%)', top: '-15%', right: '-10%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)', bottom: '-10%', left: '-8%', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: 1200, padding: '0 1.25rem', textAlign: 'center' }}>
          {/* Eyebrow */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.75rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d4a843', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#d4a843', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Wholesale Distribution & Amazon FBA</span>
          </div>

          {/* Big wordmark */}
          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.8rem, 12vw, 6.5rem)', color: 'white', letterSpacing: '0.05em', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>
            URBAN PULSE
          </h1>

          {/* Pulse wave underline */}
          <div style={{ maxWidth: 600, margin: '0 auto 0.75rem', padding: '0 1rem' }}>
            <svg width="100%" viewBox="0 0 600 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <defs>
                <linearGradient id="hpulse" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="rgba(212,168,67,0)"/>
                  <stop offset="15%" stopColor="#d4a843"/>
                  <stop offset="50%" stopColor="#0ea5b0"/>
                  <stop offset="85%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="rgba(34,211,238,0)"/>
                </linearGradient>
              </defs>
              <polyline points="0,9 40,9 60,9 75,2 90,16 105,4 120,14 135,9 165,9 195,9 210,2 225,16 240,4 255,14 270,9 300,9 330,9 345,2 360,16 375,4 390,14 405,9 435,9 465,9 480,2 495,16 510,4 525,14 540,9 560,9 600,9"
                stroke="url(#hpulse)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(0.8rem, 3vw, 1rem)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '2rem' }}>
            Wholesale LLC
          </div>

          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', lineHeight: 1.8, maxWidth: 580, margin: '0 auto 2.5rem' }}>
            Building strong partnerships with brands, distributors, and manufacturers through professional Amazon FBA operations and transparent wholesale practices.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/supplier-info" style={{ background: 'linear-gradient(135deg, #d4a843, #f0c96a)', color: '#050d1f', fontWeight: 800, padding: '0.9rem 1.75rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Become a Supplier <ArrowRight size={15}/>
            </Link>
            <Link href="/about" style={{ border: '1.5px solid rgba(212,168,67,0.45)', color: '#d4a843', fontWeight: 700, padding: '0.9rem 1.75rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Learn More
            </Link>
          </div>

          {/* Trust badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {['LLC Registered', 'MAP Compliant', 'Amazon FBA Pro', 'Authorized Only'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={13} color="#0ea5b0"/>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(180deg, rgba(212,168,67,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: '#050d1f', borderTop: '1px solid rgba(212,168,67,0.12)', borderBottom: '1px solid rgba(212,168,67,0.12)', padding: '2.5rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem' }}>
          <div className="r-stat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {[
              { icon: '📦', num: '5', label: 'Product Categories' },
              { icon: '🚀', num: 'FBA', label: 'Primary Channel' },
              { icon: '✅', num: '100%', label: 'MAP Compliant' },
              { icon: '🏢', num: 'LLC', label: 'Registered Business' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.5rem', marginBottom: 4 }}>{s.icon}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.5rem,5vw,2.25rem)', fontWeight: 900, background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="r-section" style={{ padding: '6rem 0', background: '#f8f9fc' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem' }}>
          <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#050d1f', marginBottom: '1.25rem', fontWeight: 700 }}>Who We Are</h2>
              <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Urban Pulse Wholesale LLC is a professionally registered wholesale distribution company operating primarily through the Amazon FBA channel. We source products from authorized brands and distributors, delivering them through Amazon's world-class fulfillment network.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                We are not brokers, liquidators, or gray market sellers. We pursue legitimate, authorized wholesale accounts and operate entirely within each supplier's established terms.
              </p>
              <div style={{ background: '#050d1f', borderRadius: 16, padding: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ color: '#d4a843', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our Mission</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.8, borderLeft: '3px solid #d4a843', paddingLeft: '1rem', fontFamily: 'Playfair Display, serif', margin: 0 }}>
                  "Committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."
                </p>
              </div>
              <Link href="/about" style={{ background: 'linear-gradient(135deg, #d4a843, #f0c96a)', color: '#050d1f', fontWeight: 800, padding: '0.85rem 1.75rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                About Us <ArrowRight size={15}/>
              </Link>
            </div>
            <div className="r-photo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
              {[
                { src: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&q=80', alt: 'Warehouse', mt: '0' },
                { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80', alt: 'Fulfillment', mt: '1.5rem' },
                { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80', alt: 'Products', mt: '0' },
                { src: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=400&q=80', alt: 'Partnership', mt: '-1.5rem' },
              ].map((p, i) => (
                <div key={i} className="r-img-med" style={{ borderRadius: 14, overflow: 'hidden', height: 195, marginTop: p.mt }}>
                  <img src={p.src} alt={p.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="r-section" style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.08) 0%, transparent 70%)', top: '-10%', right: '-5%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1rem', fontWeight: 700 }}>Categories We Distribute</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: 480, margin: '0 auto', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Five core Amazon FBA categories with consistent, data-driven purchasing across each.</p>
          </div>
          <div className="r-cat-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
            {categories.map((cat, i) => (
              <div key={i} style={{ borderRadius: 14, overflow: 'hidden', position: 'relative', height: 280, cursor: 'pointer' }}>
                <img src={cat.img} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,13,31,0.05) 20%, rgba(5,13,31,0.88) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.1rem' }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: 3 }}>{cat.emoji}</div>
                  <div style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '0.95rem', fontWeight: 700, marginBottom: 2 }}>{cat.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{cat.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/categories" style={{ border: '1.5px solid rgba(212,168,67,0.45)', color: '#d4a843', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              View All Categories <ArrowRight size={15}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section className="r-section" style={{ padding: '6rem 0', background: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#050d1f', marginBottom: '1rem', fontWeight: 700 }}>Why Partner With Us?</h2>
          </div>
          <div className="r-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ background: '#f8f9fc', borderRadius: 16, padding: '1.75rem', border: '1px solid #e2e8f0' }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(14,165,176,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d4a843', marginBottom: '1.1rem' }}>{p.icon}</div>
                <h3 style={{ color: '#050d1f', fontSize: '1rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.6rem', fontWeight: 700 }}>{p.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FBA SECTION ── */}
      <section className="r-section" style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)', bottom: '-10%', left: '-5%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', position: 'relative', zIndex: 1 }}>
          <div className="r-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.25rem', fontWeight: 700 }}>Amazon FBA Operations</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Our FBA model means your products reach millions of Prime members through Amazon's trusted network — with professional listing management, inventory planning, and full MAP compliance.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {['Inventory forecasting & demand planning', 'Amazon FBA prep & compliance', 'Account health monitoring', 'MAP & brand policy adherence', 'Professional listing management'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(14,165,176,0.15)', border: '1px solid rgba(14,165,176,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={10} color="#0ea5b0" />
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fba-operations" style={{ background: 'linear-gradient(135deg, #d4a843, #f0c96a)', color: '#050d1f', fontWeight: 800, padding: '0.85rem 1.75rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                View FBA Operations <ArrowRight size={15}/>
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)' }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80" alt="Amazon FBA warehouse" style={{ width: '100%', height: 380, objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="r-float-badge" style={{ position: 'absolute', bottom: -18, left: -18, background: 'rgba(5,13,31,0.96)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Monthly Budget</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$10K–$50K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #c8981f 0%, #d4a843 40%, #0ea5b0 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(5,13,31,0.04) 0, rgba(5,13,31,0.04) 1px, transparent 0, transparent 50%)', backgroundSize: '18px 18px' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.25rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#050d1f', marginBottom: '1rem', fontWeight: 900 }}>Ready to Establish a Wholesale Account?</h2>
          <p style={{ color: 'rgba(5,13,31,0.65)', fontSize: '1rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We welcome new supplier partnerships and are fully prepared to provide all required business documentation during onboarding.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/supplier-info" style={{ background: '#050d1f', color: 'white', fontWeight: 800, padding: '0.9rem 2rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Submit Inquiry <ArrowRight size={15}/>
            </Link>
            <Link href="/contact" style={{ border: '2px solid #050d1f', color: '#050d1f', fontWeight: 700, padding: '0.85rem 1.75rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
