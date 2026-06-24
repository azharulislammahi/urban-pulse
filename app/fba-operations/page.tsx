import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Amazon FBA Operations | Urban Pulse Wholesale',
  description: 'Urban Pulse Wholesale runs a fully compliant Amazon FBA operation — fragrance DG handling, systematic inventory management, and professional marketplace standards.',
  alternates: { canonical: 'https://www.urbanpulsewholesale.com/fba-operations' },
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

export default function FBAPage() {
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
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.07) 0%, transparent 70%)', top: -150, right: -100, pointerEvents: 'none' }} />
        <div style={wrap}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.1)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 18px', marginBottom: '1.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
            <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Amazon FBA Operations</span>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', color: C.dark, marginBottom: '1.25rem', lineHeight: 1.05, maxWidth: 700 }}>Professional Amazon FBA Operations &amp; Fulfillment</h1>
          <p style={{ color: C.sub, fontSize: '1.1rem', lineHeight: 1.8, maxWidth: 600, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We operate an organized, compliant Amazon FBA business with systematic processes for inventory management, product prep, and marketplace compliance — including full Amazon Dangerous Goods handling for Fragrance &amp; Perfume SKUs.</p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
            {['FBA Prep Compliant', 'DG / Hazmat Ready', 'MAP Enforced', 'Account Health Monitored'].map(tag => (
              <span key={tag} style={{ background: 'rgba(196,98,58,0.09)', border: `1px solid rgba(196,98,58,0.22)`, borderRadius: 100, padding: '5px 14px', color: C.rust, fontSize: '0.78rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600 }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS FBA ── */}
      <section style={{ padding: '6rem 0', background: C.white }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div style={bar} />
              <h2 style={h2}>What is Amazon FBA?</h2>
              <p style={{ ...pLg, marginBottom: '1.25rem' }}>Fulfilled by Amazon (FBA) is Amazon's fulfillment program that allows sellers to store products in Amazon's fulfillment centers. Amazon then picks, packs, ships, and provides customer service for those products.</p>
              <p style={{ ...p, marginBottom: '1.25rem' }}>For brands and suppliers, this means that products purchased by Urban Pulse Wholesale will be handled by Amazon's world-class logistics infrastructure — stored in secure, climate-controlled facilities and delivered to customers with Amazon's trusted service standards.</p>
              <p style={p}>We leverage FBA as our primary fulfillment model because it provides the best possible customer experience and enables us to scale efficiently while maintaining the quality standards our supplier partners expect.</p>
            </div>
            <div style={{ background: C.cream2, borderRadius: 20, padding: '2rem', border: `1px solid ${C.beige}` }}>
              <div style={{ color: C.rust, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.5rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>FBA Benefits for Supplier Partners</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { label: 'Storage Security',  desc: "Products stored in Amazon's secure, climate-controlled fulfillment centers." },
                  { label: 'Customer Service',  desc: 'Amazon handles all customer service, returns, and refunds on FBA orders.' },
                  { label: 'Prime Eligible',    desc: "2-day Prime shipping available to Amazon's 200M+ Prime members." },
                  { label: 'Reliable Delivery', desc: "Amazon's trusted logistics network ensures fast, reliable delivery." },
                  { label: 'Data Visibility',   desc: 'Transparent order and inventory data through Amazon Seller Central.' },
                  { label: 'Fraud Protection',  desc: "Amazon's fraud protection and buyer verification systems." },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '0.75rem', paddingBottom: '0.875rem', borderBottom: `1px solid ${C.beige}` }}>
                    <CheckCircle2 size={15} color={C.rust} style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ color: C.dark, fontSize: '0.75rem', fontWeight: 700, marginBottom: 2, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.label}</div>
                      <div style={{ color: C.sub, fontSize: '0.82rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section style={{ padding: '6rem 0', background: C.cream2 }}>
        <div style={wrap}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={barC} />
            <h2 style={{ ...h2, textAlign: 'center' }}>Our FBA Workflow</h2>
            <p style={{ color: C.muted, maxWidth: 500, margin: '0 auto', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem' }}>From purchase order to customer delivery — a structured, professional process at every step.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {[
              { n: '01', title: 'Market Research',  desc: 'Analyze demand, competition, and margin data to identify products and determine purchasing quantities before committing.' },
              { n: '02', title: 'Purchase Order',   desc: 'Issue a formal PO to the supplier per their requirements. Confirm lead times, shipping details, and delivery instructions.' },
              { n: '03', title: 'Receive & Inspect', desc: 'Inspect incoming inventory for accuracy and condition. Verify every item against the purchase order before FBA prep begins.' },
              { n: '04', title: 'FBA Preparation',  desc: "Label, bundle, and package products exactly according to Amazon's FBA requirements — barcodes, packaging, and shipment plans." },
              { n: '05', title: 'Ship to Amazon',   desc: "Create FBA shipments in Seller Central and deliver inventory to Amazon's designated fulfillment centers on schedule." },
              { n: '06', title: 'Monitor & Reorder', desc: 'Track inventory levels, sales velocity, and account health metrics to plan timely reorders and maintain in-stock rates.' },
            ].map(step => (
              <div key={step.n} style={card}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '2.5rem', fontWeight: 900, color: C.beige, marginBottom: '0.75rem', lineHeight: 1 }}>{step.n}</div>
                <h3 style={{ color: C.dark, fontSize: '1rem', fontFamily: 'Fraunces, Georgia, serif', marginBottom: '0.6rem', fontWeight: 700 }}>{step.title}</h3>
                <p style={{ ...p, fontSize: '0.875rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVENTORY + MARKETPLACE ── */}
      <section style={{ padding: '6rem 0', background: C.white }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
            <div>
              <div style={bar} />
              <h2 style={h2}>Inventory Management</h2>
              <p style={{ ...p, marginBottom: '1.75rem' }}>Effective inventory management is the backbone of our FBA operations. We use data-driven processes to maintain appropriate stock levels — neither over-investing in slow-moving products nor running out of high-demand items.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: 'Sales Velocity Tracking', desc: 'We monitor daily, weekly, and monthly sales rates to understand product performance and forecast future demand.' },
                  { title: 'Reorder Point Calculation', desc: 'Systems alert us when inventory reaches reorder thresholds, accounting for supplier lead times and Amazon processing windows.' },
                  { title: 'Seasonal Adjustment', desc: 'We anticipate seasonal demand shifts and adjust purchasing accordingly, ensuring stock availability during peak periods.' },
                  { title: 'Storage Optimization', desc: 'We balance inventory levels to optimize Amazon storage costs while maintaining strong in-stock rates for customers.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '0.75rem' }}>
                    <CheckCircle2 size={15} color={C.rust} style={{ flexShrink: 0, marginTop: 4 }} />
                    <div>
                      <div style={{ color: C.dark, fontWeight: 700, fontSize: '0.875rem', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.title}</div>
                      <div style={{ color: C.sub, fontSize: '0.84rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={bar} />
              <h2 style={h2}>Marketplace Standards</h2>
              <p style={{ ...p, marginBottom: '1.75rem' }}>Our Amazon seller account is managed to maintain excellent performance metrics — a direct reflection of our commitment to quality operations and supplier trust.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { metric: 'Order Defect Rate',  detail: "Maintained well below Amazon's 1% threshold" },
                  { metric: 'Listing Accuracy',   detail: 'All product listings match actual products exactly' },
                  { metric: 'MAP Compliance',     detail: 'Zero tolerance for below-MAP pricing, ever' },
                  { metric: 'Policy Compliance',  detail: 'Zero tolerance for policy violations' },
                  { metric: 'Customer Feedback',  detail: 'Consistently positive buyer experience ratings' },
                  { metric: 'Account Health',     detail: 'Active monitoring of all health signals daily' },
                ].map(item => (
                  <div key={item.metric} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 0', borderBottom: `1px solid ${C.beige}`, gap: '1rem' }}>
                    <div style={{ color: C.dark, fontWeight: 600, fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.metric}</div>
                    <div style={{ color: C.sub, fontSize: '0.82rem', textAlign: 'right', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FRAGRANCE DG ── */}
      <section style={{ padding: '6rem 0', background: C.cream2 }}>
        <div style={wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(196,98,58,0.09)', border: '1px solid rgba(196,98,58,0.22)', borderRadius: 100, padding: '6px 16px', marginBottom: '1.25rem' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.rust }} />
                <span style={{ color: C.rust, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Fragrance Category</span>
              </div>
              <div style={bar} />
              <h2 style={h2}>Amazon Dangerous Goods Compliance for Fragrance</h2>
              <p style={{ ...pLg, marginBottom: '1.25rem' }}>Fragrance and perfume products are classified as Dangerous Goods (hazmat) on Amazon due to their flammable liquid content. We are fully prepared to handle the complete DG compliance process — from product classification through FBA hazmat program enrollment.</p>
              <p style={{ ...p, marginBottom: '1.25rem' }}>This is one of the most common barriers preventing new sellers from entering the fragrance category. We have invested in understanding the regulatory requirements so that fragrance brands can trust their products will arrive at FBA — and reach customers — without compliance delays or account risk.</p>
              <p style={p}>Every fragrance SKU we carry is documented, classified, and enrolled in Amazon's hazmat review process before the first unit ships.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: C.white, borderRadius: 20, padding: '1.75rem', border: `1px solid ${C.beige}`, marginBottom: '0.5rem' }}>
                <div style={{ color: C.rust, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>Our DG Compliance Process</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {[
                    { step: '1', title: 'FHSA Classification Review', desc: 'Each fragrance product reviewed for flammable liquid classification under the Federal Hazardous Substances Act.' },
                    { step: '2', title: 'SDS Collection', desc: 'Safety Data Sheet requested and obtained from supplier for every applicable SKU prior to inbound shipment.' },
                    { step: '3', title: 'Amazon DG Submission', desc: "Product submitted through Amazon's Dangerous Goods review program with SDS and product documentation." },
                    { step: '4', title: 'Hazmat FBA Enrollment', desc: "Products enrolled in Amazon's FBA hazmat storage program once review is complete." },
                    { step: '5', title: 'Ongoing Monitoring', desc: 'DG status and SDS validity monitored continuously to prevent compliance gaps.' },
                  ].map(item => (
                    <div key={item.step} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', paddingBottom: '0.875rem', borderBottom: `1px solid ${C.beige}` }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: C.rust, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ color: C.white, fontWeight: 800, fontSize: '0.72rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.step}</span>
                      </div>
                      <div>
                        <div style={{ color: C.dark, fontWeight: 700, fontSize: '0.82rem', marginBottom: 3, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.title}</div>
                        <div style={{ color: C.sub, fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'rgba(196,98,58,0.07)', border: '1px solid rgba(196,98,58,0.2)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
                <div style={{ color: C.rust, fontWeight: 700, fontSize: '0.82rem', marginBottom: 4, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>What This Means for Fragrance Suppliers</div>
                <p style={{ color: C.sub, fontSize: '0.84rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif', margin: 0 }}>When you grant Urban Pulse Wholesale an authorized account, your fragrance products will be handled by a buyer who knows exactly how to get them into FBA compliantly — protecting your brand and your Amazon presence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORECASTING ── */}
      <section style={{ padding: '6rem 0', background: C.dark, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,98,58,0.1) 0%, transparent 70%)', bottom: -150, left: -100, pointerEvents: 'none' }} />
        <div style={{ ...wrap, position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ width: 36, height: 3, background: C.rust, borderRadius: 2, marginBottom: '1.25rem' }} />
              <h2 style={{ ...h2, color: C.white }}>Product Forecasting &amp; Planning</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.85, marginBottom: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '1rem' }}>We don't make purchasing decisions arbitrarily. Our buying process is grounded in data — sales trends, market research, competitive analysis, and supplier input — so suppliers receive consistent, predictable ordering rather than erratic spikes.</p>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.85, marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem' }}>We are happy to share our forecasting rationale with suppliers upon request. Transparency about our purchasing intentions helps build trust and enables better planning on both sides of the relationship.</p>
              <Link href="/supplier-info" style={btn}>Submit Supplier Inquiry <ArrowRight size={15} /></Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { title: 'Historical Sales Data', desc: 'Past performance analyzed to project future demand with accuracy.' },
                { title: 'Market Trend Analysis', desc: 'Category trends and competitive dynamics monitored continuously.' },
                { title: 'Seasonal Planning', desc: 'Advance positioning for seasonal peaks and promotional periods.' },
                { title: 'Lead Time Awareness', desc: 'Buying timelines account for supplier lead times and FBA processing.' },
                { title: 'Cash Flow Management', desc: 'Purchasing volume calibrated to our financial capacity for responsible scaling.' },
                { title: 'Supplier Communication', desc: 'Purchasing intentions communicated transparently with partners.' },
              ].map(item => (
                <div key={item.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '1.1rem' }}>
                  <div style={{ color: C.rust, fontWeight: 700, fontSize: '0.82rem', marginBottom: 4, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: '5rem 0', background: C.rust, textAlign: 'center' }}>
        <div style={wrap}>
          <div style={{ width: 36, height: 3, background: 'rgba(255,255,255,0.4)', borderRadius: 2, margin: '0 auto 1.25rem' }} />
          <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: C.white, maxWidth: 600, margin: '0 auto 1rem', textAlign: 'center' }}>Interested in Supplying Urban Pulse Wholesale?</h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 2.5rem', fontSize: '1rem', lineHeight: 1.75, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We are actively seeking new supplier partnerships across all six product categories — with a priority focus on Fragrance &amp; Perfume. Reach out to begin the conversation.</p>
          <Link href="/supplier-info" style={{ background: C.dark, color: C.white, fontWeight: 700, padding: '0.85rem 2rem', borderRadius: 100, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.85rem', letterSpacing: '0.04em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>Supplier Information &amp; Inquiry <ArrowRight size={15} /></Link>
        </div>
      </section>
    </div>
  )
}
