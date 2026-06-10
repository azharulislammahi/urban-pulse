import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Urban Pulse Wholesale LLC — our mission, values, and commitment to professional wholesale distribution.',
}

const S = {
  hero: {
    minHeight: '60vh', display: 'flex', alignItems: 'center',
    background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 50%, #081628 100%)',
    paddingTop: '8rem', paddingBottom: '5rem', position: 'relative' as const, overflow: 'hidden',
  },
  orb1: { position: 'absolute' as const, width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.1) 0%, transparent 70%)', top: -200, right: -150, pointerEvents: 'none' as const },
  wrap: { maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative' as const, zIndex: 1 },
  tag: { display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.25)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' },
  tagText: { color: '#d4a843', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' as const, fontFamily: 'Plus Jakarta Sans, sans-serif' },
  h1: { fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: 'white', marginBottom: '1.25rem', lineHeight: 1.1 },
  sub: { color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 620, fontFamily: 'Plus Jakarta Sans, sans-serif' },
  bar: { width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, marginBottom: '1.25rem' },
  barC: { width: 48, height: 3, background: 'linear-gradient(90deg, #d4a843, #0ea5b0)', borderRadius: 2, margin: '0 auto 1.25rem' },
  h2: { fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#050d1f', marginBottom: '1.25rem' },
  h2w: { fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'white', marginBottom: '1.25rem' },
  p: { color: '#64748b', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' },
  pLg: { color: '#475569', fontSize: '1.05rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif' },
  section: (bg: string) => ({ padding: '6rem 0', background: bg }),
  grid2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' },
  grid3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' },
  card: { background: '#f8f9fc', borderRadius: 16, padding: '1.75rem', border: '1px solid #e2e8f0' },
  darkCard: { background: '#050d1f', borderRadius: 16, padding: '1.75rem', marginBottom: '2rem' },
  missionText: { color: 'rgba(255,255,255,0.85)', fontStyle: 'italic' as const, fontSize: '1rem', lineHeight: 1.8, borderLeft: '3px solid #d4a843', paddingLeft: '1rem', fontFamily: 'Playfair Display, serif', margin: 0 },
  btn: { background: 'linear-gradient(135deg, #d4a843, #f0c96a)', color: '#050d1f', fontWeight: 800, padding: '0.85rem 2rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
  btnOut: { border: '1.5px solid rgba(212,168,67,0.5)', color: '#d4a843', fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 6, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' as const, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
}

export default function AboutPage() {
  return (
    <div style={{ background: '#ffffff' }}>

      {/* HERO */}
      <section style={S.hero}>
        <div style={S.orb1} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,168,67,0.07) 0%, transparent 70%)', bottom: -100, left: -100, pointerEvents: 'none' }} />
        <div style={S.wrap}>
          <div style={S.tag}><span style={S.tagText}>About Urban Pulse Wholesale</span></div>
          <h1 style={S.h1}>A Company Built on<br/>Trust & Professional Standards</h1>
          <p style={S.sub}>We are a wholesale distribution company dedicated to operating with the transparency, reliability, and professionalism that brands and suppliers deserve.</p>
        </div>
      </section>

      {/* MISSION */}
      <section style={S.section('#ffffff')}>
        <div style={S.wrap}>
          <div style={S.grid2}>
            <div>
              <div style={S.bar} />
              <h2 style={S.h2}>Our Mission</h2>
              <div style={S.darkCard}>
                <div style={{ color: '#d4a843', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Mission Statement</div>
                <p style={S.missionText}>"Urban Pulse Wholesale LLC is committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."</p>
              </div>
              <p style={{ ...S.pLg, marginBottom: '1.25rem' }}>This mission statement is not just a declaration — it is a standard we hold ourselves to in every business interaction. When we approach a supplier for a wholesale account, we understand we are asking for trust. We take that seriously.</p>
              <p style={S.p}>We believe that the best wholesale relationships are partnerships — not purely transactional exchanges. When suppliers do well, we do well. That alignment of interests drives us to operate with integrity at every stage of the business relationship.</p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#050d1f', marginBottom: '1.5rem', fontWeight: 700 }}>Our Core Values</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Transparency', desc: 'We communicate openly about our business model, sales channels, and purchasing practices. Suppliers are never left guessing about who they are working with.' },
                  { title: 'Reliability', desc: 'When we make a purchasing commitment, we follow through. Consistent order cadence and dependable payment are the cornerstones of our supplier relationships.' },
                  { title: 'Respect', desc: 'We respect supplier policies, brand guidelines, and pricing requirements. We believe these protections exist for good reason and support them fully.' },
                  { title: 'Professionalism', desc: 'From the first inquiry to ongoing account management, we operate with the organizational standards and communication quality that suppliers deserve.' },
                  { title: 'Growth Mindset', desc: 'We are invested in growing our business the right way — sustainably, compliantly, and in genuine partnership with the brands and distributors we work with.' },
                ].map(v => (
                  <div key={v.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: '#f8f9fc', borderRadius: 12, padding: '1.1rem 1.25rem', border: '1px solid #e2e8f0' }}>
                    <CheckCircle2 size={18} color="#d4a843" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ color: '#050d1f', fontWeight: 700, fontSize: '0.9rem', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{v.title}</div>
                      <div style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={S.section('#f8f9fc')}>
        <div style={S.wrap}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={S.bar} />
            <h2 style={S.h2}>Who We Are</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Urban Pulse Wholesale LLC is a professionally registered limited liability company engaged in wholesale product sourcing and e-commerce distribution. Our primary sales channel is Amazon FBA (Fulfilled by Amazon), where we operate a dedicated seller account managed to the highest performance standards.',
                'We source products from authorized brands, manufacturers, and distributors. Our purchasing process is organized, documented, and conducted with full respect for supplier onboarding requirements and policies.',
                'We are not a broker, liquidator, or gray market reseller. We pursue legitimate, authorized wholesale accounts and operate entirely within the terms established by each supplier. Our customers are Amazon shoppers purchasing genuine products at competitive prices.',
                'Our team brings experience in e-commerce operations, inventory management, marketplace compliance, and supply chain logistics. We apply that experience to serve our supplier partners well and to represent their products responsibly in the marketplace.',
              ].map((text, i) => (
                <p key={i} style={i === 0 ? S.pLg : S.p}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section style={S.section('#ffffff')}>
        <div style={S.wrap}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={S.barC} />
            <h2 style={{ ...S.h2, marginBottom: '1rem' }}>Our Approach to Wholesale</h2>
            <p style={{ ...S.p, maxWidth: 520, margin: '0 auto' }}>How we operate at every stage — from sourcing to long-term partnership management.</p>
          </div>
          <div style={S.grid3}>
            {[
              { num: '01', title: 'Sourcing with Integrity', desc: 'We identify products where we can add genuine value. We pursue only authorized wholesale accounts and do not engage in unauthorized product sourcing.' },
              { num: '02', title: 'Supplier-First Communication', desc: 'We initiate supplier relationships with full disclosure of our business model. Account managers always know exactly who they are working with.' },
              { num: '03', title: 'Operational Excellence', desc: 'Organized purchase orders, on-time payments, proper documentation, and proactive communication at every stage.' },
              { num: '04', title: 'Marketplace Compliance', desc: 'We maintain our Amazon seller account to the highest standards — ensuring listings, pricing, and representations comply with all policies.' },
              { num: '05', title: 'Inventory Intelligence', desc: 'We use sales data and market analysis to make smart purchasing decisions, maintaining consistent reorder patterns.' },
              { num: '06', title: 'Long-Term Perspective', desc: 'We measure success by the depth and duration of supplier relationships. A trusted partnership is worth more than any single transaction.' },
            ].map(item => (
              <div key={item.num} style={S.card}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem', fontWeight: 900, background: 'linear-gradient(135deg, rgba(212,168,67,0.3), rgba(14,165,176,0.3))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.75rem', lineHeight: 1 }}>{item.num}</div>
                <h3 style={{ color: '#050d1f', fontSize: '1rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.75rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ ...S.p, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-COMMERCE EXPERTISE */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(160deg, #030b1a 0%, #050d1f 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,176,0.1) 0%, transparent 70%)', top: -100, right: -100, pointerEvents: 'none' }} />
        <div style={{ ...S.wrap, position: 'relative', zIndex: 1 }}>
          <div style={S.grid2}>
            <div>
              <div style={S.bar} />
              <h2 style={S.h2w}>E-Commerce Expertise</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>
                Selling on Amazon FBA requires continuous management of inventory levels, listing quality, account health metrics, and fulfillment logistics. We apply structured processes to each aspect, ensuring the brands we carry are represented with care and competence.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {['Amazon FBA Operations', 'Inventory Forecasting', 'Listing Optimization', 'Account Health Mgmt', 'FBA Prep & Compliance', 'Performance Monitoring', 'Returns Management', 'Supplier Documentation'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '0.6rem 0.85rem' }}>
                    <CheckCircle2 size={13} color="#0ea5b0" style={{ flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fba-operations" style={S.btn}>View FBA Operations <ArrowRight size={15} /></Link>
            </div>
            <div style={{ borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(212,168,67,0.2)' }}>
              <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80" alt="Warehouse operations" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: '#f8f9fc', textAlign: 'center' }}>
        <div style={S.wrap}>
          <div style={S.barC} />
          <h2 style={{ ...S.h2, textAlign: 'center', maxWidth: 600, margin: '0 auto 1rem' }}>Our Commitment to Suppliers</h2>
          <p style={{ ...S.p, maxWidth: 540, margin: '0 auto 2.5rem', fontSize: '1rem' }}>We understand that granting a wholesale account represents a significant business decision. We take that decision seriously.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/partnerships" style={S.btn}>View Partnership Details <ArrowRight size={15} /></Link>
            <Link href="/contact" style={S.btnOut}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
