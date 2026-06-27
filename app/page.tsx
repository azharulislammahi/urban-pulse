import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Shield, Handshake, BarChart3, TrendingUp, Package, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urban Pulse Wholesale LLC | Professional Wholesale Distributor — Michigan',
  description: 'Urban Pulse Wholesale LLC is a Michigan-based wholesale distribution company sourcing authorized products in Fragrance, Home & Kitchen, Pet Supplies, Health & Wellness, and more. MAP compliant. Authorized accounts only.',
}

const categories = [
  { name: 'Fragrance & Perfume', img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80', desc: 'Oud, attar, parfum & home scent' },
  { name: 'Home & Kitchen',      img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80', desc: 'Cookware, appliances & décor' },
  { name: 'Pet Supplies',        img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80', desc: 'Food, toys & accessories' },
  { name: 'Health & Wellness',   img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', desc: 'Supplements & personal care' },
  { name: 'Grocery & Food',      img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80', desc: 'Pantry staples & specialty' },
  { name: 'Sports & Outdoors',   img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80', desc: 'Fitness & outdoor gear' },
]

const pillars = [
  { icon: <Shield size={20}/>,    title: 'Brand Protection',    desc: 'Strict MAP compliance and authorized reseller agreements at every step. Your brand integrity is always protected.' },
  { icon: <Handshake size={20}/>, title: 'Long-Term Focus',     desc: 'We build lasting partnerships, not one-time transactions — delivering consistent orders and predictable volume.' },
  { icon: <BarChart3 size={20}/>, title: 'Data-Driven Buying',  desc: 'Every purchasing decision guided by verified sales velocity data and market analysis — never guesswork.' },
  { icon: <TrendingUp size={20}/>,title: 'Reliable Growth',     desc: 'As products perform well we scale purchasing. Your success drives our continued investment.' },
  { icon: <Package size={20}/>,   title: 'Nationwide Fulfillment', desc: 'Products reach customers nationwide through professional fulfillment infrastructure — fast, reliable, and fully tracked.' },
  { icon: <Star size={20}/>,      title: 'Professional Standards', desc: 'Organized documentation, on-time payments, and transparent communication at every stage.' },
]

export default function HomePage() {
  return (
    <div style={{ background: '#FAFAF5', overflowX: 'hidden', maxWidth: '100vw' }}>

      <style>{`
        .page-wrap   { max-width: 1200px; margin: 0 auto; padding: 0 1.25rem; }
        .two-col     { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .three-col   { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
        .four-col    { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .six-col     { display: grid; grid-template-columns: repeat(6, 1fr); gap: 1rem; }
        .photo-grid-wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 0.875rem; }
        .photo-item  { border-radius: 14px; overflow: hidden; height: 200px; }
        .photo-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .cat-item    { border-radius: 14px; overflow: hidden; position: relative; height: 260px; cursor: pointer; transition: transform 0.3s ease; }
        .cat-item:hover { transform: scale(1.02); }
        .cat-item img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .section-pad { padding: 6rem 0; }
        .rust-bar    { width: 36px; height: 3px; background: #C4623A; border-radius: 2px; margin-bottom: 1.25rem; }
        .rust-bar-c  { width: 36px; height: 3px; background: #C4623A; border-radius: 2px; margin: 0 auto 1.25rem; }
        .rust-btn    { background: #C4623A; color: white; font-weight: 700; padding: 0.9rem 1.75rem; border-radius: 100px; font-family: Plus Jakarta Sans, sans-serif; font-size: 0.82rem; letter-spacing: 0.04em; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .rust-btn:hover { background: #D97048; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(196,98,58,0.25); }
        .outline-btn { border: 1.5px solid #C4623A; color: #C4623A; font-weight: 700; padding: 0.85rem 1.75rem; border-radius: 100px; font-family: Plus Jakarta Sans, sans-serif; font-size: 0.82rem; letter-spacing: 0.04em; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .outline-btn:hover { background: #C4623A; color: white; transform: translateY(-2px); }
        .gold-btn    { background: #C4623A; color: white; font-weight: 700; padding: 0.9rem 1.75rem; border-radius: 100px; font-family: Plus Jakarta Sans, sans-serif; font-size: 0.82rem; letter-spacing: 0.04em; text-decoration: none; display: inline-flex; align-items: center; gap: 8px; transition: all 0.2s; }
        .gold-btn:hover { background: #D97048; transform: translateY(-2px); }

        @media (max-width: 767px) {
          .two-col   { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .three-col { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .four-col  { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
          .six-col   { grid-template-columns: 1fr 1fr !important; gap: 0.75rem !important; }
          .photo-grid-wrap { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
          .photo-item { height: 220px !important; margin-top: 0 !important; }
          .cat-item  { height: 180px !important; }
          .section-pad { padding: 3.5rem 0 !important; }
          .hide-mob  { display: none !important; }
          .fba-img   { height: 220px !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .two-col   { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .six-col   { grid-template-columns: repeat(3, 1fr) !important; }
          .three-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HERO — all light, cream background ── */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(160deg, #F5F0EA 0%, #FAFAF5 50%, #F0EBE3 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '7rem', paddingBottom: '4rem',
      }}>
        {/* Subtle dot grid */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />
        {/* Warm orbs */}
        <div style={{ position: 'absolute', width: '55%', maxWidth: 540, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.07) 0%, transparent 70%)', top: '-15%', right: '-8%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: '45%', maxWidth: 420, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.05) 0%, transparent 70%)', bottom: '-8%', left: '-6%', pointerEvents: 'none' }} />

        <div className="page-wrap" style={{ position: 'relative', zIndex: 2, width: '100%', textAlign: 'center' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.75rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#C4623A', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ color: '#C4623A', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Professional Wholesale Distributor — Warren, MI</span>
          </div>

          {/* Big heading */}
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(3rem, 12vw, 7rem)', color: '#1C1C1A', letterSpacing: '0.04em', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>
            URBAN PULSE
          </h1>

          {/* Pulse line SVG — now in rust/warm tones */}
          <div style={{ maxWidth: 600, margin: '0 auto 0.75rem', padding: '0 1rem' }}>
            <svg width="100%" viewBox="0 0 600 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
              <defs>
                <linearGradient id="hp" x1="0%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%"   stopColor="rgba(196,98,58,0)"/>
                  <stop offset="15%"  stopColor="#C4623A"/>
                  <stop offset="50%"  stopColor="#D97048"/>
                  <stop offset="85%"  stopColor="#C4623A"/>
                  <stop offset="100%" stopColor="rgba(196,98,58,0)"/>
                </linearGradient>
              </defs>
              <polyline points="0,9 40,9 60,9 75,2 90,16 105,4 120,14 135,9 165,9 195,9 210,2 225,16 240,4 255,14 270,9 300,9 330,9 345,2 360,16 375,4 390,14 405,9 435,9 465,9 480,2 495,16 510,4 525,14 540,9 560,9 600,9" stroke="url(#hp)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>

          <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 300, fontSize: 'clamp(0.8rem, 3vw, 1rem)', color: '#9A9086', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '2rem' }}>Wholesale LLC</div>

          <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#6B6460', fontSize: 'clamp(0.95rem, 3vw, 1.1rem)', lineHeight: 1.85, maxWidth: 540, margin: '0 auto 1rem' }}>
            Authorized wholesale distribution in Fragrance, Home &amp; Kitchen, Pet Supplies, Health &amp; Wellness, and more — sourced from licensed brands, distributed nationwide through professional fulfillment infrastructure.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <Link href="/supplier-info" className="rust-btn">Wholesale Inquiry <ArrowRight size={15}/></Link>
            <Link href="/about" className="outline-btn">Learn More</Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', justifyContent: 'center' }}>
            {['MAP Compliant Pricing', 'Michigan LLC Registered', 'Authorized Brands Only', 'Nationwide Fulfillment'].map(b => (
              <div key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <CheckCircle2 size={13} color="#C4623A"/>
                <span style={{ color: '#9A9086', fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
          <span style={{ color: '#C4B8A8', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: 'linear-gradient(180deg, rgba(196,98,58,0.5), transparent)' }} />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section style={{ background: '#C4623A', padding: '1.75rem 0' }}>
        <div className="page-wrap">
          <div className="four-col">
            {[
              { num: '500+', label: 'Wholesale SKUs'        },
              { num: '6',    label: 'Product Categories'    },
              { num: '48hr', label: 'Fulfillment Speed'     },
              { num: 'MAP',  label: 'Price Protection'      },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0.5rem', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.2)' : 'none' }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.5rem, 5vw, 2.2rem)', fontWeight: 900, color: 'white', lineHeight: 1, marginBottom: 5 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.6rem, 2vw, 0.7rem)', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section-pad" style={{ background: '#FAFAF5' }}>
        <div className="page-wrap">
          <div className="two-col">
            <div>
              <div className="rust-bar" />
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#1C1C1A', marginBottom: '1.25rem', fontWeight: 900 }}>Who We Are</h2>
              <p style={{ color: '#6B6460', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Urban Pulse Wholesale LLC is a professionally registered wholesale distribution company. We source products exclusively from authorized brands and distributors and distribute nationwide through professional fulfillment infrastructure — reaching customers across the United States.
              </p>
              <p style={{ color: '#9A9086', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                We specialize in Fragrance &amp; Perfume, Home &amp; Kitchen, Pet Supplies, Health &amp; Wellness, Grocery &amp; Food, and Sports &amp; Outdoors. Our buying decisions are driven by sales velocity data and brand relationship quality — never guesswork.
              </p>
              <p style={{ color: '#9A9086', lineHeight: 1.85, marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                We are not brokers, liquidators, or gray market sellers. Every product we carry comes from a legitimate, authorized wholesale account — signed agreements, documented purchasing, and full MAP compliance.
              </p>
              {/* Mission quote */}
              <div style={{ background: '#F5F0EA', borderLeft: '3px solid #C4623A', borderRadius: '0 10px 10px 0', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
                <div style={{ color: '#C4623A', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our Mission</div>
                <p style={{ color: '#3D3D3B', fontStyle: 'italic', fontSize: '0.9rem', lineHeight: 1.8, fontFamily: 'Fraunces, Georgia, serif', margin: 0 }}>
                  "Committed to building lasting relationships with brands through professional purchasing, transparent communication, and responsible marketplace representation."
                </p>
              </div>
              <Link href="/about" className="rust-btn">About Us <ArrowRight size={15}/></Link>
            </div>

            {/* Photo grid */}
            <div className="photo-grid-wrap">
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" alt="Wholesale warehouse operations" />
              </div>
              <div className="photo-item" style={{ marginTop: '1.5rem' }}>
                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" alt="Professional wholesale fulfillment center" />
              </div>
              <div className="photo-item">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" alt="Retail products shelf" />
              </div>
              <div className="photo-item" style={{ marginTop: '-1.5rem' }}>
                <img src="https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80" alt="Business partnership meeting" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="section-pad" style={{ background: '#F5F0EA', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '40%', maxWidth: 400, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.06) 0%, transparent 70%)', top: '-10%', right: '-5%', pointerEvents: 'none' }} />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="rust-bar-c" />
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#1C1C1A', marginBottom: '1rem', fontWeight: 900 }}>Categories We Distribute</h2>
            <p style={{ color: '#9A9086', fontSize: '0.95rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Six high-velocity product categories — authorized brands only, MAP compliant, data-driven purchasing across each.</p>
          </div>
          <div className="six-col">
            {categories.map((cat, i) => (
              <div key={i} className="cat-item">
                <img src={cat.img} alt={`${cat.name} wholesale products — Urban Pulse Wholesale`} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(28,28,26,0.0) 20%, rgba(28,28,26,0.82) 100%)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1rem 0.875rem' }}>
                  <div style={{ color: 'white', fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(0.78rem, 2vw, 0.9rem)', fontWeight: 700, marginBottom: 3, lineHeight: 1.2 }}>{cat.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.68rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{cat.desc}</div>
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
      <section className="section-pad" style={{ background: '#FAFAF5' }}>
        <div className="page-wrap">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="rust-bar-c" />
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#1C1C1A', marginBottom: '1rem', fontWeight: 900 }}>Why Brands Choose Urban Pulse</h2>
          </div>
          <div className="three-col">
            {pillars.map((p, i) => (
              <div key={i} style={{ background: '#F5F0EA', borderRadius: 16, padding: '1.75rem', border: '1px solid #EDE7DE' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(196,98,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4623A', marginBottom: '1.1rem' }}>{p.icon}</div>
                <h3 style={{ color: '#1C1C1A', fontSize: '1rem', fontFamily: 'Fraunces, Georgia, serif', marginBottom: '0.6rem', fontWeight: 700 }}>{p.title}</h3>
                <p style={{ color: '#9A9086', fontSize: '0.875rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FBA OPERATIONS ── */}
      <section className="section-pad" style={{ background: '#F5F0EA', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '40%', maxWidth: 400, aspectRatio: '1', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.05) 0%, transparent 70%)', bottom: '-10%', left: '-5%', pointerEvents: 'none' }} />
        <div className="page-wrap" style={{ position: 'relative', zIndex: 1 }}>
          <div className="two-col">
            <div>
              <div className="rust-bar" />
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: '#1C1C1A', marginBottom: '1.25rem', fontWeight: 900 }}>Distribution & Fulfillment Operations</h2>
              <p style={{ color: '#6B6460', fontSize: '0.95rem', lineHeight: 1.85, marginBottom: '1.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Your products move through a professional fulfillment infrastructure — with systematic inventory management, listing quality control, and full MAP compliance at every stage.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {['Inventory forecasting & demand planning', 'Fulfillment prep & compliance', 'Account health monitoring', 'MAP & brand policy adherence', 'Professional distribution management'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: 'rgba(196,98,58,0.12)', border: '1px solid rgba(196,98,58,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle2 size={10} color="#C4623A" />
                    </div>
                    <span style={{ color: '#6B6460', fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fba-operations" className="rust-btn">View Operations <ArrowRight size={15}/></Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid #EDE7DE', boxShadow: '0 20px 60px rgba(28,28,26,0.08)' }}>
                <img className="fba-img" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Professional wholesale fulfillment center operations" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="hide-mob" style={{ position: 'absolute', bottom: -18, left: -18, background: 'white', border: '1px solid #EDE7DE', borderRadius: 12, padding: '1rem 1.25rem', boxShadow: '0 8px 24px rgba(28,28,26,0.08)' }}>
                <div style={{ color: '#9A9086', fontSize: '0.62rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Pet Supplies</div>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.1rem', fontWeight: 900, color: '#C4623A' }}>Featured Category</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: '#C4623A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div className="page-wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', color: 'white', marginBottom: '1rem', fontWeight: 900 }}>Ready to Establish a Wholesale Account?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', maxWidth: 560, margin: '0 auto 0.75rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We are actively building wholesale account relationships across all six categories — with particular interest in Pet Supplies, Fragrance &amp; Perfume, and Home &amp; Kitchen.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            We provide complete onboarding documentation and respond to all supplier inquiries within one business day.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/supplier-info" style={{ background: '#1C1C1A', color: 'white', fontWeight: 700, padding: '0.9rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Submit Inquiry <ArrowRight size={15}/>
            </Link>
            <Link href="/contact" style={{ border: '2px solid rgba(255,255,255,0.5)', color: 'white', fontWeight: 700, padding: '0.85rem 1.75rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.82rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
