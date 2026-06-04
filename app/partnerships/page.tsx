import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Clock, FileText, TrendingUp, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Wholesale Partnerships',
  description: 'Learn how Urban Pulse Wholesale LLC works with brands, distributors, and manufacturers to build professional, long-term wholesale partnerships.',
}

export default function PartnershipsPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-20">
        <div className="max-w-content mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/70 text-xs tracking-[0.1em] uppercase font-medium">Wholesale Partnerships</span>
          </div>
          <h1 className="text-display text-white mb-5 max-w-2xl">Professional Wholesale Relationships Built to Last</h1>
          <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
            We approach every supplier relationship as a long-term partnership, not a one-time transaction. Our goal is to become a reliable, valued customer in your wholesale program.
          </p>
        </div>
      </section>

      {/* Partnership philosophy */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Our Partnership Philosophy</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-5">
                Urban Pulse Wholesale LLC believes that the strongest business relationships are built on mutual benefit, clear communication, and consistent follow-through. We don't approach suppliers looking for a quick deal — we seek lasting partnerships that grow over time.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-5">
                When we apply for a wholesale account, we have already done our research. We understand the brand's market position, pricing strategy, and distribution goals. We pursue accounts where we believe we can genuinely serve as a value-adding distribution partner.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                We recognize that every brand has worked hard to build their reputation. We are stewards of that reputation in the marketplace, and we take that responsibility seriously.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Shield size={20} className="text-accent" />, title: 'Brand Protection First', desc: 'We strictly observe MAP policies, authorized reseller agreements, and any brand-specific marketplace requirements.' },
                { icon: <TrendingUp size={20} className="text-accent" />, title: 'Consistent Volume', desc: 'We maintain predictable reorder cycles based on sales data, providing suppliers with reliable purchasing patterns.' },
                { icon: <Clock size={20} className="text-accent" />, title: 'Timely Communication', desc: 'Our team responds to supplier inquiries promptly and proactively communicates about orders, inventory, or any issues.' },
                { icon: <FileText size={20} className="text-accent" />, title: 'Organized Documentation', desc: 'All purchase orders, invoices, and account documentation are maintained systematically for easy reference.' },
              ].map(item => (
                <div key={item.title} className="flex gap-4 bg-offwhite rounded-lg p-5">
                  <div className="mt-0.5 flex-shrink-0">{item.icon}</div>
                  <div>
                    <div className="text-navy font-semibold text-sm mb-1">{item.title}</div>
                    <div className="text-charcoal-light text-sm leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Suppliers Can Expect */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">What Suppliers Can Expect</h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              When you establish a wholesale relationship with Urban Pulse Wholesale LLC, here is what you can count on.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Timely Communication',
                desc: 'We respond to emails and messages within one business day. You will always have a clear point of contact and will never be left wondering about order status or account activity.',
                items: ['Prompt responses to inquiries', 'Proactive updates on orders', 'Clear escalation paths'],
              },
              {
                title: 'Professional Account Management',
                desc: 'We maintain organized records of all transactions, communications, and account documentation. Our supplier relationships are managed systematically, not ad hoc.',
                items: ['Organized purchase orders', 'Clear invoice management', 'Documentation on request'],
              },
              {
                title: 'Organized Purchasing Processes',
                desc: 'From initial inquiry through ongoing ordering, our purchasing processes are structured and predictable. We do not place chaotic or last-minute orders.',
                items: ['Structured order workflow', 'Forecasting-driven purchasing', 'Payment according to terms'],
              },
              {
                title: 'Long-Term Business Mindset',
                desc: 'We are building a business that will be around for years. Every decision we make is made with long-term sustainability in mind, not short-term opportunism.',
                items: ['Sustainable growth focus', 'Relationship investment', 'Compliant operations'],
              },
              {
                title: 'Commitment to Mutual Growth',
                desc: 'We share in the success of the brands we carry. When a product performs well on Amazon, we increase our purchasing. Supplier success and our success are aligned.',
                items: ['Volume growth over time', 'Market feedback sharing', 'Collaborative approach'],
              },
              {
                title: 'Respectful of Supplier Policies',
                desc: 'Every supplier has policies that protect their brand and distribution network. We read, understand, and follow all policies as a condition of doing business.',
                items: ['MAP policy compliance', 'Authorized reseller terms', 'Return policy adherence'],
              },
            ].map(item => (
              <div key={item.title} className="bg-white rounded-xl p-7 shadow-card card-hover">
                <h3 className="text-navy font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.items.map(i => (
                    <li key={i} className="flex items-center gap-2 text-xs text-charcoal">
                      <CheckCircle2 size={13} className="text-accent flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible selling */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-white mb-5">Responsible Marketplace Selling</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We understand that irresponsible marketplace behavior by resellers can harm brands — through price erosion, unauthorized listings, counterfeit competition, and poor customer experiences. We have zero tolerance for these practices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'MAP Compliance', desc: 'We never advertise or sell below your established Minimum Advertised Price.' },
              { title: 'Authorized Only', desc: 'We only sell products we have purchased directly from authorized sources.' },
              { title: 'Accurate Listings', desc: 'Product listings accurately represent items — no misleading titles, images, or descriptions.' },
              { title: 'Policy Adherence', desc: 'We read and comply with all supplier terms, including restrictions on sales channels or geographies.' },
            ].map(item => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={18} className="text-accent" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                <p className="text-white/55 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the relationship works */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">How the Relationship Works</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { phase: 'Initial Inquiry', desc: 'We reach out with a professional wholesale account application, providing full business documentation including LLC registration, EIN, resale certificate, and any required forms. We are transparent about our business model and sales channels upfront.' },
                { phase: 'Onboarding', desc: 'We complete your supplier onboarding process exactly as required — no shortcuts, no requests for exceptions. We provide all requested documentation promptly and follow your process from start to finish.' },
                { phase: 'First Orders', desc: 'Initial orders are placed in sizes appropriate for our market research and inventory planning. We do not over-order relative to our sell-through projections and maintain payment according to agreed terms.' },
                { phase: 'Ongoing Partnership', desc: 'As the relationship matures and we develop sales data, our ordering becomes more predictable and potentially larger. We check in with our account representative regularly and provide feedback on marketplace conditions.' },
                { phase: 'Long-Term Growth', desc: 'Over time, we aim to become a significant, reliable wholesale customer — one that account managers are glad to have in their portfolio. We measure success in years, not transactions.' },
              ].map((item, i) => (
                <div key={item.phase} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-navy font-bold text-xs">
                    {i + 1}
                  </div>
                  <div className="flex-1 pb-6 border-b border-border last:border-0">
                    <h3 className="text-navy font-semibold mb-2">{item.phase}</h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #0f2044 0, #0f2044 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-content mx-auto px-6 text-center relative z-10">
          <h2 className="text-display-sm text-navy mb-4">Ready to Start a Partnership?</h2>
          <p className="text-navy/70 text-lg mb-8 max-w-xl mx-auto">
            We welcome inquiries from brands, distributors, and manufacturers interested in working with a professional wholesale buyer.
          </p>
          <Link href="/supplier-info" className="bg-navy text-white font-semibold py-3 px-8 rounded hover:bg-navy-mid transition-colors inline-flex items-center gap-2">
            Submit Supplier Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
