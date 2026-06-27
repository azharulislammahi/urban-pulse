import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Urban Pulse Wholesale LLC — Michigan Wholesale Distributor',
  description: 'Learn about Urban Pulse Wholesale LLC — a professionally registered wholesale distribution company based in Warren, MI. Authorized accounts, MAP compliant, nationwide fulfillment across 6 product categories.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/about' },
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://www.urbanpulsewholesale.com/about',
    siteName:    'Urban Pulse Wholesale',
    title:       'About Urban Pulse Wholesale LLC — Michigan Wholesale Distributor',
    description: 'Professionally registered wholesale distribution company in Warren, MI. Authorized accounts, MAP compliant, 6 active product categories. Learn who we are and how we operate.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'About Urban Pulse Wholesale — Michigan Wholesale Distributor' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'About Urban Pulse Wholesale LLC — Michigan Wholesale Distributor',
    description: 'Warren, MI wholesale distribution company. Authorized accounts, MAP compliant, 6 product categories nationwide.',
    images:      ['/og-image.jpg'],
  },
}

const C = {
  rust:    '#C4623A',
  rustLt:  '#D97048',
  cream:   '#FAFAF5',
  cream2:  '#F5F0EA',
  beige:   '#EDE7DE',
  dark:    '#1C1C1A',
  mid:     '#3D3D3B',
  sub:     '#6B6460',
  muted:   '#9A9086',
  white:   '#ffffff',
}

export default function AboutPage() {
  const wrap  = { maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative' as const, zIndex: 1 }
  const bar   = { width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }
  const barC  = { width: 36, height: 3, background: C.rust, borderRadius: 2, margin: '0 auto 1.25rem' }
  const h2    = { fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: C.dark, marginBottom: '1.25rem' }
  const p     = { color: C.sub,  lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', margin: 0 }
  const pLg   = { color: C.mid,  lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem' }
  const card  = { background: C.white, borderRadius: 16, padding: '1.75rem', border: `1px solid ${C.beige}` }
  const btn   = { background: C.rust, color: C.white, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' as const }
  const btnO  = { border: `1.5px solid ${C.rust}`, color: C.rust, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, textTransform: 'uppercase' as const }

  return (
    <div style={{ background: C.cream }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: `radial-gradient(circle, rgba(196,98,58,0.07) 0%, transparent 70%)`, top: -150, right: -100, pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
            <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>About Urban Pulse Wholesale</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: C.dark, marginBottom: '1.25rem', lineHeight: 1.05 }}>A Company Built on<br/>Trust &amp; Professional Standards</h1>
          <p style={{ color: C.sub, fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 620, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We are a wholesale distribution company dedicated to operating with the transparency, reliability, and professionalism that brands and suppliers deserve.</p>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="section" style={{ background: C.white }}>
        <div style={wrap}>
          <div className="mob-1col tab-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={bar} />
              <h2 style={h2}>Our Mission</h2>
              <div style={{ background: C.cream2, borderLeft: `3px solid ${C.rust}`, borderRadius: '0 12px 12px 0', padding: '1.5rem', marginBottom: '1.75rem' }}>
                <div style={{ color: C.rust, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '0.75rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Mission Statement</div>
                <p style={{ color: C.mid, fontStyle: 'italic', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Fraunces, Georgia, serif', margin: 0 }}>"Urban Pulse Wholesale is committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."</p>
              </div>
              <p style={{ ...pLg, marginBottom: '1.25rem' }}>This mission statement is not just a declaration — it is a standard we hold ourselves to in every business interaction. When we approach a supplier for a wholesale account, we understand we are asking for trust. We take that seriously.</p>
              <p style={p}>We believe that the best wholesale relationships are partnerships — not purely transactional exchanges. When suppliers do well, we do well. That alignment of interests drives us to operate with integrity at every stage.</p>
            </div>

            <div>
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '1.4rem', color: C.dark, marginBottom: '1.5rem', fontWeight: 900 }}>Our Core Values</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { title: 'Transparency',    desc: 'We communicate openly about our business model, sales channels, and purchasing practices. Suppliers always know exactly who they are working with.' },
                  { title: 'Reliability',     desc: 'When we make a purchasing commitment, we follow through. Consistent order cadence and dependable payment are our cornerstones.' },
                  { title: 'Respect',         desc: 'We respect supplier policies, brand guidelines, and pricing requirements. MAP policies exist for good reason and we support them fully.' },
                  { title: 'Professionalism', desc: 'From first inquiry to ongoing account management — organized standards and communication quality that suppliers deserve.' },
                  { title: 'Growth Mindset',  desc: 'We grow sustainably, compliantly, and in genuine partnership with the brands and distributors we work with.' },
                ].map(v => (
                  <div key={v.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: C.cream, borderRadius: 12, padding: '1rem 1.25rem', border: `1px solid ${C.beige}` }}>
                    <CheckCircle2 size={17} color={C.rust} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ color: C.dark, fontWeight: 700, fontSize: '0.875rem', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{v.title}</div>
                      <div style={{ color: C.sub, fontSize: '0.84rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section" style={{ background: C.cream2 }}>
        <div style={wrap}>
          <div style={{ maxWidth: 780, margin: '0 auto' }}>
            <div style={bar} />
            <h2 style={h2}>Who We Are</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'Urban Pulse Wholesale LLC is a professionally registered limited liability company engaged in wholesale product sourcing and multi-channel distribution. We purchase from authorized brands and licensed distributors and distribute nationwide through professional fulfillment infrastructure — reaching customers across the United States.',
                'We specialize in six high-velocity categories: Fragrance & Perfume, Home & Kitchen, Pet Supplies, Health & Wellness, Grocery & Food, and Sports & Outdoors. Our buying decisions are driven by verified sales velocity data and brand relationship quality — never guesswork.',
                'We are not a broker, liquidator, or gray market reseller. Every product we carry comes from a legitimate, authorized wholesale account — signed agreements, documented purchasing, and full respect for each brand\'s MAP policies and reseller terms.',
                'We have a particular focus on the Fragrance & Perfume category. We are fully versed in Dangerous Goods compliance for fragrance products — FHSA classification, SDS documentation, and full hazmat program enrollment — providing complete documentation for all applicable SKUs.',
              ].map((text, i) => (
                <p key={i} style={i === 0 ? pLg : p}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS CREDENTIALS ── */}
      <section className="section" style={{ background: C.white }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={barC} />
            <h2 style={{ ...h2, textAlign: 'center', marginBottom: '0.75rem' }}>Business Credentials & Legal Standing</h2>
            <p style={{ color: C.muted, maxWidth: 540, margin: '0 auto', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>Verified documentation available to all supplier and wholesale partners upon request.</p>
          </div>
          <div className="mob-1col tab-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {[
              {
                label:   'LLC Registration',
                value:   'Urban Pulse Wholesale LLC',
                detail:  'Professionally registered limited liability company in the State of Michigan.',
                icon:    '🏢',
              },
              {
                label:   'Federal Tax ID (EIN)',
                value:   'EIN on File',
                detail:  'Federal Employer Identification Number available for all supplier W-9 and tax documentation.',
                icon:    '📋',
              },
              {
                label:   'State Resale Certificate',
                value:   'Michigan — Active',
                detail:  'Valid Michigan resale certificate confirming tax-exempt status for wholesale resale purchases.',
                icon:    '✅',
              },
              {
                label:   'Business Address',
                value:   'Warren, MI 48093',
                detail:  'Physical business address in Warren, Michigan — available to all wholesale account applications.',
                icon:    '📍',
              },
              {
                label:   'Seller Account Status',
                value:   'Professional — In Good Standing',
                detail:  'Active marketplace professional seller account maintained in good standing with documented performance metrics.',
                icon:    '⭐',
              },
              {
                label:   'MAP Policy Compliance',
                value:   '100% Compliant',
                detail:  'All pricing maintained strictly at or above Minimum Advertised Price for every brand we carry.',
                icon:    '🔒',
              },
            ].map(cred => (
              <div key={cred.label} style={{ ...card, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                <div style={{ fontSize: '1.75rem', lineHeight: 1 }}>{cred.icon}</div>
                <div style={{ color: C.muted, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{cred.label}</div>
                <div style={{ color: C.dark, fontWeight: 800, fontSize: '0.95rem', fontFamily: 'Fraunces, Georgia, serif' }}>{cred.value}</div>
                <div style={{ color: C.sub, fontSize: '0.8rem', lineHeight: 1.65, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{cred.detail}</div>
              </div>
            ))}
          </div>
          <div style={{ background: C.cream2, border: `1px solid ${C.beige}`, borderLeft: `3px solid ${C.rust}`, borderRadius: '0 12px 12px 0', padding: '1.5rem 2rem', maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <p style={{ color: C.mid, fontSize: '0.9rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>
              <strong style={{ color: C.dark }}>For Supplier Onboarding:</strong> We provide LLC registration, EIN/W-9, Michigan resale certificate, signed MAP agreement, and seller account verification documentation — all ready within 24 hours of account approval.
            </p>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="section" style={{ background: C.cream2 }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={barC} />
            <h2 style={{ ...h2, textAlign: 'center', marginBottom: '1rem' }}>Our Approach to Wholesale</h2>
            <p style={{ color: C.muted, maxWidth: 520, margin: '0 auto', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>How we operate at every stage — from sourcing to long-term partnership management.</p>
          </div>
          <div className="mob-1col tab-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { num: '01', title: 'Sourcing with Integrity',     desc: 'We identify products where we can add genuine value — pursuing only authorized wholesale accounts and avoiding unauthorized sourcing.' },
              { num: '02', title: 'Supplier-First Communication', desc: 'We initiate supplier relationships with full disclosure of our business model. Account managers always know exactly who they are working with.' },
              { num: '03', title: 'Operational Excellence',      desc: 'Organized purchase orders, on-time payments, proper documentation, and proactive communication at every stage.' },
              { num: '04', title: 'Compliance Standards',         desc: 'We maintain our distribution and marketplace accounts to the highest standards — ensuring listings, pricing, and representations comply with all policies.' },
              { num: '05', title: 'Inventory Intelligence',      desc: 'We use sales data and market analysis to make smart purchasing decisions, maintaining consistent reorder patterns.' },
              { num: '06', title: 'Long-Term Perspective',       desc: 'We measure success by the depth and duration of supplier relationships. A trusted partnership is worth more than any single transaction.' },
            ].map(item => (
              <div key={item.num} style={card}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2.5rem', fontWeight: 900, color: C.beige, marginBottom: '0.75rem', lineHeight: 1 }}>{item.num}</div>
                <h3 style={{ color: C.dark, fontSize: '1rem', fontFamily: 'Fraunces, Georgia, serif', marginBottom: '0.6rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ ...p, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── E-COMMERCE EXPERTISE ── */}
      <section className="section" style={{ background: C.white, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, rgba(196,98,58,0.06) 0%, transparent 70%)`, top: -100, right: -80, pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div className="mob-1col tab-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={bar} />
              <h2 style={h2}>Distribution & Fulfillment Expertise</h2>
              <p style={{ ...pLg, marginBottom: '1.25rem' }}>Professional wholesale distribution requires continuous management of inventory levels, listing quality, fulfillment logistics, and compliance standards. We apply structured processes to each aspect.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginBottom: '2rem' }}>
                {['Distribution Operations', 'Inventory Forecasting', 'Listing Management', 'Account Health Mgmt', 'Fulfillment Prep & Compliance', 'Performance Monitoring', 'Returns Management', 'Supplier Documentation'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, background: C.white, border: `1px solid ${C.beige}`, borderRadius: 8, padding: '0.6rem 0.85rem' }}>
                    <CheckCircle2 size={12} color={C.rust} style={{ flexShrink: 0 }} />
                    <span style={{ color: C.sub, fontSize: '0.78rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/fba-operations" style={btn}>View Distribution Operations <ArrowRight size={15} /></Link>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', border: `1px solid ${C.beige}`, boxShadow: '0 16px 48px rgba(28,28,26,0.08)' }}>
              <img className="mob-img-sm" src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=85" alt="Wholesale warehouse and professional fulfillment operations" style={{ width: '100%', height: 420, objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: C.rust, textAlign: 'center' }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: 'rgba(255,255,255,0.4)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: C.white, maxWidth: 600, margin: '0 auto 1rem', textAlign: 'center' }}>Our Commitment to Suppliers</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 540, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We understand that granting a wholesale account represents a significant business decision. We take that decision seriously.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/partnerships" style={{ background: C.dark, color: C.white, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>View Partnership Details <ArrowRight size={15} /></Link>
            <Link href="/contact" style={{ border: '2px solid rgba(255,255,255,0.5)', color: C.white, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
