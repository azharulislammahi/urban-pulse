import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Handshake, BarChart3, TrendingUp, Package, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urban Pulse Wholesale LLC | Authorized Amazon FBA Wholesale Distributor — Warren, Michigan',
  description: 'Urban Pulse Wholesale LLC is a Michigan-based authorized wholesale distributor operating on Amazon FBA. Specializing in fragrance, home & kitchen, pet supplies, health & wellness, and more. MAP compliant. LLC registered.',
}

const categories = [
  { name: 'Fragrance & Perfume', emoji: '🌸', img: 'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80', desc: 'Oud, attar, parfum & home scent' },
  { name: 'Home & Kitchen', emoji: '🏠', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', desc: 'Cookware, appliances & décor' },
  { name: 'Pet Supplies', emoji: '🐾', img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80', desc: 'Food, toys & accessories' },
  { name: 'Health & Wellness', emoji: '💊', img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', desc: 'Supplements & personal care' },
  { name: 'Grocery & Food', emoji: '🛒', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80', desc: 'Pantry staples & specialty' },
  { name: 'Sports & Outdoors', emoji: '⚽', img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', desc: 'Fitness & outdoor gear' },
]

const pillars = [
  { icon: <Shield size={22}/>, title: 'Brand Protection', desc: 'Strict MAP compliance and authorized reseller agreements. Your brand integrity is always protected.' },
  { icon: <Handshake size={22}/>, title: 'Long-Term Focus', desc: 'We build lasting partnerships, not one-time transactions. Consistent orders and predictable volume.' },
  { icon: <BarChart3 size={22}/>, title: 'Data-Driven Buying', desc: 'Every purchasing decision guided by sales velocity data and demand forecasting — never guesswork.' },
  { icon: <TrendingUp size={22}/>, title: 'Reliable Growth', desc: 'As products perform well we scale purchasing. Your success drives our continued investment.' },
  { icon: <Package size={22}/>, title: 'FBA Excellence', desc: 'Products stored in Amazon fulfillment centers, shipped with Prime speed to millions of customers.' },
  { icon: <Star size={22}/>, title: 'Professional Standards', desc: 'Organized documentation, on-time payments, and transparent communication at every stage.' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#ffffff', overflowX: 'hidden', maxWidth: '100vw' }}>

      <style>{`
        .hero-section {
          min-height: 100vh;
          background: linear-gradient(160deg, #030b1a 0%, #050d1f 40%, #081628 70%, #040c1c 100%);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding-top: 6rem; padding-bottom: 4rem;
        }
        .page-wrap { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .four-col { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .five-col { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1rem; }
        .six-col { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
        .photo-grid-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 0.875rem; }
        .photo-item { border-radius: 14px; overflow: hidden; height: 200px; }
        .photo-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .cat-item { border-radius: 14px; overflow: hidden; position: relative; height: 280px; cursor: pointer; }
        .cat-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .section-pad { padding: 6rem 0; }
        .grad-bar { width: 48px; height: 3px; background: linear-gradient(90deg, #d4a843, #0ea5b0); border-radius: 2px; margin-bottom: 1.25rem; }
        .grad-bar-c { width: 48px; height: 3px; background: linear-gradient(90deg, #d4a843, #0ea5b0); border-radius: 2px; margin: 0 auto 1.25rem; }
        .gold-btn { background: linear-gradient(135deg, #d4a843, #f0c96a); color: #050d1f; font-weight: 800; padding: 0.9rem 1.75rem; border-radius: 6px; font-family: Plus Jakarta Sans, sans-serif; font-size: 0.82rem; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }
        .outline-btn { border: 1.5px solid rgba(212,168,67,0.45); color: #d4a843; font-weight: 700; padding: 0.9rem 1.75rem; border-radius: 6px; font-family: Plus Jakarta Sans, sans-serif; font-size: 0.82rem; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; }

        @media (max-width: 767px) {
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .three-col { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .four-col { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
          .five-col { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
          .six-col { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
          .photo-grid-wrap { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .photo-item { height: 220px !important; margin-top: 0 !important; }
          .cat-item { height: 180px !important; }
          .section-pad { padding: 3.5rem 0 !important; }
          .hide-mob { display: none !important; }
          .fba-img { height: 220px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .two-col { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .five-col { grid-template-columns: repeat(3, 1fr) !important; }
          .six-col { grid-template-columns: repeat(3, 1fr) !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="hero-section">
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(212,168,67,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,67,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '60%', maxWidth: 600, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.09) 0%, transparent 70%)', top: '-15%', right: '-10%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)', bottom: '-10%', left: '-8%', pointerEvents: 'none' }} />

        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.75rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#d4a843', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#d4a843', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Wholesale Distribution & Amazon FBA</span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.8rem, 12vw, 6.5rem)', color: 'white', letterSpacing: '0.05em', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>
            URBAN PULSE
          </h1>

          <div style={{ maxWidth: 600, margin: '0 auto 0.75rem', padding: '0 1rem' }}>
            <svg width="100%" viewBox="0 0 600 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <defs>
                <linearGradient id="hp" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="rgba(212,168,67,0)"/>
                  <stop offset="15%" stopColor="#d4a843"/>
                  <stop offset="50%" stopColor="#0ea5b0"/>
                  <stop offset="85%" stopColor="#22d3ee"/>
                  <stop offset="100%" stopColor="rgba(34,211,238,0)"/>
                </linearGradient>
              </defs>
              <polyline points="0,9 40,9 60,9 75,2 90,16 105,4 120,14 135,9 165,9 195,9 210,2 225,16 240,4 255,14 270,9 300,9 330,9 345,2 360,16 375,4 390,14 405,9 435,9 465,9 480,2 495,16 510,4 525,14 540,9 560,9 600,9" stroke="url(#hp)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(0.8rem, 3vw, 1rem)', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '2rem' }}>Wholesale LLC</div>

          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(0.95rem, 3vw, 1.15rem)', lineHeight: 1.8, maxWidth: 560, margin: '0 auto 1rem' }}>
            Authorized wholesale distribution in Fragrance, Home &amp; Kitchen, Pet Supplies, Health &amp; Wellness, and more — sourced from licensed brands, sold on Amazon FBA.
          </p>
          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'rgba(255,255,255,0.4)', fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto 2.5rem' }}>
            Warren, Michigan · LLC Registered · MAP Compliant · Amazon Professional Seller
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/supplier-info" className="gold-btn">Become a Supplier <ArrowRight size={15}/></Link>
            <Link href="/about" className="outline-btn">Learn More</Link>
          </div>

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
        <div className="page-wrap">
          <div className="four-col">
            {[
              { num: '6', label: 'Product Categories' },
              { num: 'FBA', label: 'Primary Channel' },
              { num: '100%', label: 'MAP Compliant' },
              { num: 'LLC', label: 'Warren, Michigan' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.6rem, 5vw, 2.5rem)', fontWeight: 900, background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1, marginBottom: 6 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.6rem, 2vw, 0.72rem)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section-pad" style={{ background: '#f8f9fc' }}>
        <div className="page-wrap">
          <div className="two-col">
            <div>
              <div className="grad-bar" />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#050d1f', marginBottom: '1.25rem', fontWeight: 700 }}>Who We Are</h2>
              <p style={{ color: '#475569', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Urban Pulse Wholesale LLC is a professionally registered wholesale distribution company based in Warren, Michigan. We source products exclusively from authorized brands and distributors and sell through Amazon FBA — reaching millions of Prime customers across the United States.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                We specialize in Fragrance &amp; Perfume, Home &amp; Kitchen, Pet Supplies, Health &amp; Wellness, Grocery &amp; Food, and Sports &amp; Outdoors. Our buying decisions are driven by sales velocity data and brand relationship quality — never guesswork.
              </p>
              <p style={{ color: '#64748b', lineHeight: 1.85, marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                We are not brokers, liquidators, or gray market sellers. Every product we carry comes from a legitimate, authorized wholesale account — signed agreements, documented purchasing, and full MAP compliance.
              </p>
              <div style={{ background: '#050d1f', borderRadius: 16, padding: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ color: '#d4a843', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our Mission</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.8, borderLeft: '3px solid #d4a843', paddingLeft: '1rem', fontFamily: 'Playfair Display, serif', margin: 0 }}>
                  "Committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."
                </p>
              </div>
              <Link href="/about" className="gold-btn">About Us <ArrowRight size={15}/></Link>
            </div>

            {/* PHOTO GRID — full width on mobile */}
            <div className="photo-grid-wrap">
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" alt="Warehouse" />
              </div>
              <div className="photo-item" style={{ marginTop: '1.5rem' }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" alt="Fulfillment" />
              </div>
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="Products" />
              </div>
              <div className="photo-item" style={{ marginTop: '-1.5rem' }}>
                <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80" alt="Partnership" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.08) 0%, transparent 70%)', top: '-10%', right: '-5%', pointerEvents: 'none' }} />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="grad-bar-c" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1rem', fontWeight: 700 }}>Categories We Distribute</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Six high-velocity Amazon FBA categories — authorized brands only, MAP compliant, data-driven purchasing across each.</p>
          </div>
          <div className="six-col">
            {categories.map((cat, i) => (
              <div key={i} className="cat-item">
                <img src={cat.img} alt={cat.name} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,13,31,0.05) 20%, rgba(5,13,31,0.9) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem' }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: 3 }}>{cat.emoji}</div>
                  <div style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', fontWeight: 700, marginBottom: 2 }}>{cat.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.72rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{cat.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/categories" className="outline-btn">View All Categories <ArrowRight size={15}/></Link>
          </div>
        </div>
      </section>

      {/* ── WHY PARTNER ── */}
      <section className="section-pad" style={{ background: 'white' }}>
        <div className="page-wrap">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="grad-bar-c" />
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#050d1f', marginBottom: '1rem', fontWeight: 700 }}>Why Partner With Us?</h2>
          </div>
          <div className="three-col">
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

      {/* ── FBA ── */}
      <section className="section-pad" style={{ background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '50%', maxWidth: 500, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)', bottom: '-10%', left: '-5%', pointerEvents: 'none' }} />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col">
            <div>
              <div className="grad-bar" />
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1.25rem', fontWeight: 700 }}>Amazon FBA Operations</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Your products reach millions of Prime members through Amazon's trusted network — with professional listing management, inventory planning, and full MAP compliance.
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
              <Link href="/fba-operations" className="gold-btn">View FBA Operations <ArrowRight size={15}/></Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)' }}>
                <img className="fba-img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Amazon FBA warehouse" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="hide-mob" style={{ position: 'absolute', bottom: -18, left: -18, background: 'rgba(5,13,31,0.96)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 12, padding: '1rem 1.25rem' }}>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Fragrance</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 900, background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Featured Category</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #c8981f 0%, #d4a843 40%, #0ea5b0 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(5,13,31,0.04) 0, rgba(5,13,31,0.04) 1px, transparent 0, transparent 50%)', backgroundSize: '18px 18px' }} />
        <div className="page-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#050d1f', marginBottom: '1rem', fontWeight: 900 }}>Ready to Establish a Wholesale Account?</h2>
          <p style={{ color: 'rgba(5,13,31,0.65)', fontSize: '1rem', maxWidth: 560, margin: '0 auto 0.75rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We are actively building wholesale account relationships across all six categories — with particular interest in Fragrance &amp; Perfume, Home &amp; Kitchen, and Pet Supplies.
          </p>
          <p style={{ color: 'rgba(5,13,31,0.55)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We provide complete onboarding documentation and respond to all supplier inquiries within one business day.
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
