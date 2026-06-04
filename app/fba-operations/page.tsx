import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Package, BarChart3, Truck, RefreshCw, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Amazon FBA Operations',
  description: 'Learn about Urban Pulse Wholesale LLC\'s Amazon FBA operations — inventory management, fulfillment process, product forecasting, and marketplace expertise.',
}

export default function FBAPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-20">
        <div className="max-w-content mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/70 text-xs tracking-[0.1em] uppercase font-medium">Amazon FBA Operations</span>
          </div>
          <h1 className="text-display text-white mb-5 max-w-2xl">Professional Amazon FBA Operations & Fulfillment</h1>
          <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
            We operate an organized, compliant Amazon FBA business with systematic processes for inventory management, product prep, and marketplace compliance.
          </p>
        </div>
      </section>

      {/* What is FBA */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">What is Amazon FBA?</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-5">
                Fulfilled by Amazon (FBA) is Amazon's fulfillment program that allows sellers to store products in Amazon's fulfillment centers. Amazon then picks, packs, ships, and provides customer service for those products.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-5">
                For brands and suppliers, this means that products purchased by Urban Pulse Wholesale LLC will be handled by Amazon's world-class logistics infrastructure — stored in secure, climate-controlled facilities and delivered to customers with Amazon's trusted shipping and service standards.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                We leverage FBA as our primary fulfillment model because it provides the best possible customer experience and enables us to scale our operations efficiently while maintaining the quality standards our supplier partners expect.
              </p>
            </div>
            <div className="bg-navy rounded-xl p-8">
              <div className="text-accent text-xs tracking-[0.12em] uppercase font-semibold mb-6">FBA Program Benefits for Supplier Partners</div>
              <div className="space-y-4">
                {[
                  ['Products stored in Amazon\'s secure, climate-controlled fulfillment centers', 'Storage Security'],
                  ['Amazon handles all customer service, returns, and refunds', 'Customer Service'],
                  ['2-day Prime shipping available to Amazon Prime members', 'Prime Eligible'],
                  ['Amazon\'s trusted logistics network ensures reliable delivery', 'Reliable Delivery'],
                  ['Transparent order and inventory data through Amazon Seller Central', 'Data Visibility'],
                  ['Amazon\'s fraud protection and buyer verification systems', 'Fraud Protection'],
                ].map(([desc, label]) => (
                  <div key={label} className="flex gap-3 pb-4 border-b border-white/10 last:border-0">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-accent text-xs font-semibold mb-0.5">{label}</div>
                      <div className="text-white/65 text-sm">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">Our FBA Workflow</h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              From purchase order to customer delivery — a structured, professional process.
            </p>
          </div>

          {/* Visual workflow */}
          <div className="relative">
            {/* Desktop flow */}
            <div className="hidden lg:grid grid-cols-6 gap-2 items-start">
              {[
                { icon: <BarChart3 size={22} />, step: '1', title: 'Market Research', desc: 'Analyze demand, competition, and margin data to identify products and purchasing quantities.' },
                { icon: <FileTextIcon />, step: '2', title: 'Purchase Order', desc: 'Issue formal PO to supplier per their requirements. Confirm lead times and shipping details.' },
                { icon: <Truck size={22} />, step: '3', title: 'Receive Inventory', desc: 'Inspect incoming inventory for accuracy and condition against the purchase order.' },
                { icon: <Package size={22} />, step: '4', title: 'FBA Prep', desc: 'Label, prep, and package products according to Amazon\'s specific FBA requirements.' },
                { icon: <ArrowRightIcon />, step: '5', title: 'Ship to Amazon', desc: 'Create FBA shipments and deliver inventory to Amazon\'s designated fulfillment centers.' },
                { icon: <RefreshCw size={22} />, step: '6', title: 'Monitor & Reorder', desc: 'Track inventory levels, sales velocity, and performance to plan timely reorders.' },
              ].map((item, i) => (
                <div key={i} className="relative text-center">
                  {i < 5 && (
                    <div className="hidden lg:block absolute top-8 left-[55%] right-[-45%] h-0.5 bg-accent/30 z-0"></div>
                  )}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-navy flex items-center justify-center mx-auto mb-4 text-accent">
                    {item.icon}
                  </div>
                  <div className="text-accent text-xs font-bold mb-1">Step {item.step}</div>
                  <h3 className="text-navy font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-charcoal-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile flow */}
            <div className="lg:hidden space-y-4">
              {[
                { step: '1', title: 'Market Research', desc: 'Analyze demand, competition, and margin data to identify products and purchasing quantities.' },
                { step: '2', title: 'Purchase Order', desc: 'Issue formal purchase order to supplier per their requirements. Confirm lead times.' },
                { step: '3', title: 'Receive Inventory', desc: 'Inspect incoming inventory for accuracy and condition against the purchase order.' },
                { step: '4', title: 'FBA Prep', desc: 'Label, prep, and package products according to Amazon\'s specific FBA requirements.' },
                { step: '5', title: 'Ship to Amazon', desc: 'Create FBA shipments and deliver to Amazon\'s designated fulfillment centers.' },
                { step: '6', title: 'Monitor & Reorder', desc: 'Track inventory levels and sales velocity to plan timely reorders.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 bg-white rounded-lg p-5 shadow-card">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">{item.step}</div>
                  <div>
                    <h3 className="text-navy font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-charcoal-light text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Inventory Management</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Effective inventory management is the backbone of our FBA operations. We use data-driven processes to ensure we maintain appropriate stock levels — neither over-investing in slow-moving products nor running out of high-demand items.
              </p>
              <div className="space-y-4">
                {[
                  { title: 'Sales Velocity Tracking', desc: 'We monitor daily, weekly, and monthly sales rates to understand product performance and forecast future demand.' },
                  { title: 'Reorder Point Calculation', desc: 'Automated systems alert us when inventory reaches reorder thresholds, accounting for supplier lead times and Amazon processing windows.' },
                  { title: 'Seasonal Adjustment', desc: 'We anticipate seasonal demand shifts and adjust purchasing accordingly, ensuring stock availability during peak periods.' },
                  { title: 'Storage Optimization', desc: 'We balance inventory levels to optimize Amazon storage costs while maintaining strong in-stock rates.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-navy font-semibold text-sm mb-0.5">{item.title}</div>
                      <div className="text-charcoal-light text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Marketplace Standards</h2>
              <p className="text-charcoal-light leading-relaxed mb-6">
                Our Amazon seller account is managed to maintain excellent performance metrics — a direct reflection of our commitment to quality operations.
              </p>
              <div className="space-y-3">
                {[
                  { metric: 'Order Defect Rate', target: 'Maintained well below Amazon\'s 1% threshold', good: true },
                  { metric: 'Late Shipment Rate', target: 'FBA eliminates late shipments; we monitor proactively', good: true },
                  { metric: 'Listing Accuracy', target: 'All product listings match actual products exactly', good: true },
                  { metric: 'Policy Compliance', target: 'Zero tolerance for policy violations', good: true },
                  { metric: 'Customer Feedback', target: 'Consistently positive buyer experience ratings', good: true },
                  { metric: 'Account Health', target: 'Active monitoring of all account health signals', good: true },
                ].map(item => (
                  <div key={item.metric} className="flex items-start justify-between gap-4 py-3 border-b border-border last:border-0">
                    <div className="text-navy font-medium text-sm">{item.metric}</div>
                    <div className="text-charcoal-light text-xs text-right max-w-[60%]">{item.target}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Service */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-white mb-4">Customer Service Excellence</h2>
            <p className="text-white/65 text-lg">
              Amazon FBA includes Amazon's world-class customer service — but we maintain our own internal standards that go above and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Amazon-Backed Service', desc: 'Amazon handles all customer inquiries, returns, and issue resolution for FBA orders.' },
              { title: 'Authentic Products', desc: 'Every product sold is genuine merchandise sourced directly from authorized channels.' },
              { title: 'Accurate Descriptions', desc: 'Listings accurately represent products — no misleading claims or false advertising.' },
              { title: 'Returns Processing', desc: 'Returns are managed professionally per Amazon\'s policies and supplier return terms.' },
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forecasting */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Product Forecasting & Planning</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-5">
                We don't make purchasing decisions arbitrarily. Our buying process is grounded in data — sales trends, market research, competitive analysis, and supplier input.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-5">
                This data-driven approach allows us to provide suppliers with consistent, predictable purchasing cadence rather than erratic spikes and gaps. We purchase in volumes that match our realistic sell-through projections, protecting both our capital and our supplier relationships.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                We are happy to share our forecasting rationale with suppliers upon request — transparency about our purchasing intentions helps build trust and enables better planning on both sides of the relationship.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Historical Sales Data', desc: 'We analyze past sales performance to project future demand with accuracy.' },
                { title: 'Market Trend Analysis', desc: 'We monitor category trends and competitive dynamics to adjust purchasing.' },
                { title: 'Seasonal Planning', desc: 'Advance inventory positioning for seasonal peaks and promotional periods.' },
                { title: 'Lead Time Awareness', desc: 'Purchasing timelines account for supplier lead times and FBA processing.' },
                { title: 'Cash Flow Management', desc: 'Purchasing volume is calibrated to our financial capacity for responsible scaling.' },
                { title: 'Supplier Communication', desc: 'We communicate purchasing intentions transparently with our supplier partners.' },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-lg p-5 shadow-card">
                  <h3 className="text-navy font-semibold text-xs mb-2">{item.title}</h3>
                  <p className="text-charcoal-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-content mx-auto px-6 text-center">
          <h2 className="text-display-sm text-navy mb-4 max-w-2xl mx-auto">Interested in Supplying Urban Pulse Wholesale?</h2>
          <p className="text-charcoal-light text-lg mb-8 max-w-xl mx-auto">
            We are actively seeking new supplier partnerships in a range of product categories. Reach out to begin the conversation.
          </p>
          <Link href="/supplier-info" className="btn-primary inline-flex items-center gap-2">
            Supplier Information & Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}

function FileTextIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>
  )
}
function ArrowRightIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  )
}
