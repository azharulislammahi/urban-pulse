import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Shield, TrendingUp, Clock, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wholesale Partnerships | Fragrance & Brand Wholesale Accounts',
  description: 'Urban Pulse Wholesale actively seeks authorized wholesale accounts — with a priority focus on Fragrance & Perfume brands. Fully documented, MAP-compliant, Amazon FBA operator.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/partnerships' },
}

const C = {
  rust:   '#C4623A',
  cream:  '#FAFAF5',
  cream2: '#F5F0EA',
  beige:  '#EDE7DE',
  dark:   '#1C1C1A',
  mid:    '#3D3D3B',
  sub:    '#6B6460',
  muted:  '#9A9086',
  white:  '#ffffff',
}

export default function PartnershipsPage() {
  const wrap = { maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', position: 'relative' as const, zIndex: 1 }
  const bar  = { width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }
  const barC = { width: 36, height: 3, background: C.rust, borderRadius: 2, margin: '0 auto 1.25rem' }
  const h2   = { fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: C.dark, marginBottom: '1.25rem' }
  const p    = { color: C.sub, lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', margin: 0 }
  const pLg  = { color: C.mid, lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1.05rem' }
  const btn  = { background: C.rust, color: C.white, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase' as const, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }
  const card = { background: C.white, borderRadius: 16, padding: '1.75rem', border: `1px solid ${C.beige}` }

  return (
    <div style={{ background: C.cream }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', background: `linear-gradient(160deg, ${C.cream2} 0%, ${C.cream} 60%, #F0EBE3 100%)`, paddingTop: '9rem', paddingBottom: '5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(196,98,58,0.07) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.08) 0%, transparent 70%)', top: -200, right: -100, pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
            <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Wholesale Partnerships</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: C.dark, marginBottom: '1.25rem', lineHeight: 1.05, maxWidth: 700 }}>Professional Wholesale Relationships Built to Last</h1>
          <p style={{ color: C.sub, fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 600, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We approach every supplier relationship as a long-term partnership, not a one-time transaction. We are currently prioritizing authorized wholesale accounts in Fragrance &amp; Perfume, Home &amp; Kitchen, and Pet Supplies.</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {['Fragrance Priority', 'MAP Compliant', 'LLC Registered', 'Amazon FBA Seller'].map(tag => (
              <span key={tag} style={{ background: 'rgba(196,98,58,0.09)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '5px 14px', color: C.rust, fontSize: '0.78rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="section" style={{ background: C.white }}>
        <div style={wrap}>
          <div className="mob-1col tab-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={bar} />
              <h2 style={h2}>Our Partnership Philosophy</h2>
              <p style={{ ...pLg, marginBottom: '1.25rem' }}>Urban Pulse Wholesale believes that the strongest business relationships are built on mutual benefit, clear communication, and consistent follow-through. We don't approach suppliers looking for a quick deal — we seek lasting partnerships that grow over time.</p>
              <p style={{ ...p, marginBottom: '1.25rem' }}>When we apply for a wholesale account, we have already done our research. We understand the brand's market position, pricing strategy, and distribution goals.</p>
              <p style={p}>We recognize that every brand has worked hard to build their reputation. We are stewards of that reputation in the marketplace, and we take that responsibility seriously.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { icon: <Shield size={18} color={C.rust} />, title: 'Brand Protection First',    desc: 'We strictly observe MAP policies, authorized reseller agreements, and any brand-specific marketplace requirements.' },
                { icon: <TrendingUp size={18} color={C.rust} />, title: 'Consistent Volume',    desc: 'We maintain predictable reorder cycles based on sales data, providing suppliers with reliable purchasing patterns.' },
                { icon: <Clock size={18} color={C.rust} />, title: 'Timely Communication',       desc: 'Our team responds to supplier inquiries promptly and proactively communicates about orders and inventory.' },
                { icon: <FileText size={18} color={C.rust} />, title: 'Organized Documentation', desc: 'All purchase orders, invoices, and account documentation are maintained systematically for easy reference.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: C.cream, borderRadius: 12, padding: '1.1rem 1.25rem', border: `1px solid ${C.beige}` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(196,98,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ color: C.dark, fontWeight: 700, fontSize: '0.9rem', marginBottom: 4, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.title}</div>
                    <div style={{ color: C.sub, fontSize: '0.84rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAGRANCE PITCH ── */}
      <section className="section" style={{ background: C.dark, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.12) 0%, transparent 70%)', top: -100, right: -80, pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div className="mob-1col tab-1col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.15)', border: '1px solid rgba(196,98,58,0.3)', borderRadius: 100, padding: '6px 16px', marginBottom: '1.5rem' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
                <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Fragrance &amp; Perfume — Priority Category</span>
              </div>
              <h2 style={{ ...h2, color: C.white, fontSize: 'clamp(1.75rem, 3vw, 2.4rem)' }}>Why Fragrance Brands Should Work With Us</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem' }}>Fragrance is the most brand-sensitive category on Amazon — and the one most damaged by gray-market and unauthorized resellers. Urban Pulse Wholesale is exactly the kind of buyer fragrance brands need: authorized, documented, MAP-compliant, and Amazon DG-ready.</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.9rem' }}>We are not a liquidator, discount reseller, or gray-market source. We are a registered Michigan LLC applying for your authorized wholesale program through your preferred channel, with complete documentation ready on day one.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { title: 'Amazon Dangerous Goods Compliance', desc: "We are fully versed in Amazon's Dangerous Goods (hazmat) process for fragrance products — FHSA classification, SDS documentation, and FBA hazmat program enrollment. Your products are handled correctly from day one." },
                { title: 'Full SDS Documentation', desc: 'We request and maintain Safety Data Sheets for all applicable fragrance SKUs. We understand flammability classifications, UN numbers, and the full documentation chain Amazon requires.' },
                { title: 'Brand-Protective Listing Management', desc: "We never create unauthorized listings or modify brand content. All fragrance listings are managed within Amazon's brand registry guidelines to protect your intellectual property." },
                { title: 'MAP Enforcement — Zero Exceptions', desc: 'Fragrance pricing is some of the most sensitive in retail. We observe MAP policies without exception — no discounting, no workarounds, no promotional pricing without explicit supplier approval.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(196,98,58,0.2)', borderRadius: 14, padding: '1.25rem 1.4rem' }}>
                  <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', marginBottom: 6 }}>
                    <CheckCircle2 size={15} color={C.rust} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div style={{ color: C.rust, fontWeight: 700, fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.title}</div>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0, paddingLeft: '1.5rem' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT SUPPLIERS CAN EXPECT ── */}
      <section className="section" style={{ background: C.cream2 }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={barC} />
            <h2 style={{ ...h2, textAlign: 'center' }}>What Suppliers Can Expect</h2>
            <p style={{ color: C.muted, maxWidth: 540, margin: '0 auto', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem' }}>When you establish a wholesale relationship with Urban Pulse Wholesale, here is what you can count on.</p>
          </div>
          <div className="mob-1col tab-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { title: 'Timely Communication',     desc: 'Responses within one business day. You will always have a clear point of contact and will never be left wondering about order status or account activity.',  items: ['Prompt inquiry responses', 'Proactive order updates', 'Clear escalation paths'] },
              { title: 'Professional Account Mgmt', desc: 'We maintain organized records of all transactions, communications, and account documentation. Our supplier relationships are managed systematically, not ad hoc.', items: ['Organized purchase orders', 'Clear invoice management', 'Documentation on request'] },
              { title: 'Organized Purchasing',     desc: 'Our purchasing processes are structured and predictable. We do not place chaotic or last-minute orders — everything is planned and communicated in advance.',  items: ['Structured order workflow', 'Forecast-driven buying', 'Payment per agreed terms'] },
              { title: 'Long-Term Mindset',        desc: 'We are building a business that will be around for years. Every decision is made with long-term sustainability in mind, not short-term opportunism.',         items: ['Sustainable growth focus', 'Relationship investment', 'Compliant operations'] },
              { title: 'Mutual Growth Focus',      desc: 'We share in the success of the brands we carry. When a product performs well, we increase our purchasing. Supplier success and our success are fully aligned.',  items: ['Volume growth over time', 'Market feedback sharing', 'Collaborative approach'] },
              { title: 'Policy Compliance',        desc: 'Every supplier has policies that protect their brand and distribution network. We read, understand, and follow all policies as a non-negotiable condition of doing business.', items: ['MAP policy adherence', 'Authorized reseller terms', 'Return policy compliance'] },
            ].map(item => (
              <div key={item.title} style={card}>
                <h3 style={{ color: C.dark, fontSize: '1rem', fontFamily: 'Fraunces, Georgia, serif', marginBottom: '0.75rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ ...p, marginBottom: '1rem', fontSize: '0.875rem' }}>{item.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {item.items.map(i => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CheckCircle2 size={13} color={C.rust} />
                      <span style={{ color: C.sub, fontSize: '0.8rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESPONSIBLE SELLING ── */}
      <section className="section" style={{ background: C.rust, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', top: -100, right: -100, pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 3.5rem' }}>
            <div style={{ width: 36, height: 3, background: 'rgba(255,255,255,0.4)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: C.white, textAlign: 'center', marginBottom: '1rem' }}>Responsible Marketplace Selling</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We have zero tolerance for practices that harm brands — price erosion, unauthorized listings, or poor customer experiences.</p>
          </div>
          <div className="mob-2col tab-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {[
              { title: 'MAP Compliance',   desc: 'We never advertise or sell below your established Minimum Advertised Price, period.' },
              { title: 'Authorized Only',  desc: 'We only sell products we have purchased directly from authorized wholesale sources.' },
              { title: 'Accurate Listings', desc: 'Product listings accurately represent items — no misleading titles, images, or descriptions.' },
              { title: 'Policy Adherence', desc: 'We read and comply with all supplier terms including any channel or geography restrictions.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 16, padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <CheckCircle2 size={20} color={C.white} />
                </div>
                <h3 style={{ color: C.white, fontSize: '0.95rem', fontFamily: 'Fraunces, Georgia, serif', marginBottom: '0.6rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.82rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATIONSHIP LIFECYCLE ── */}
      <section className="section" style={{ background: C.white }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={barC} />
            <h2 style={{ ...h2, textAlign: 'center' }}>How the Relationship Works</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {[
              { phase: 'Initial Inquiry',   desc: 'We reach out with a professional wholesale account application, providing full business documentation — LLC registration, EIN, resale certificate, and any required forms. We are transparent about our business model upfront.' },
              { phase: 'Onboarding',        desc: 'We complete your supplier onboarding process exactly as required — no shortcuts. We provide all documentation promptly and follow your process from start to finish.' },
              { phase: 'First Orders',      desc: 'Initial orders are sized appropriately for our market research. We do not over-order and maintain payment according to agreed terms.' },
              { phase: 'Ongoing Partnership', desc: 'As the relationship matures and we develop sales data, our ordering becomes more predictable and potentially larger. We check in regularly and share marketplace feedback.' },
              { phase: 'Long-Term Growth',  desc: 'Over time, we aim to become a significant, reliable wholesale customer — one that account managers are glad to have in their portfolio.' },
            ].map((item, i) => (
              <div key={item.phase} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', paddingBottom: '2rem', position: 'relative' }}>
                {i < 4 && <div style={{ position: 'absolute', left: 20, top: 44, bottom: 0, width: 2, background: `linear-gradient(180deg, rgba(196,98,58,0.4), rgba(196,98,58,0.05))` }} />}
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: C.rust, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                  <span style={{ color: C.white, fontWeight: 800, fontSize: '0.85rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{i + 1}</span>
                </div>
                <div style={{ paddingTop: 8 }}>
                  <h3 style={{ color: C.dark, fontWeight: 700, fontSize: '1rem', marginBottom: 6, fontFamily: 'Fraunces, Georgia, serif' }}>{item.phase}</h3>
                  <p style={p}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: C.dark, textAlign: 'center' }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: C.rust, borderRadius: 2, margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: C.white, marginBottom: '1rem', textAlign: 'center' }}>Ready to Start a Partnership?</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We welcome inquiries from brands, distributors, and manufacturers interested in working with a professional wholesale buyer.</p>
          <Link href="/supplier-info" style={btn}>Submit Supplier Inquiry <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
