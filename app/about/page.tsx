import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Urban Pulse Wholesale LLC — our mission, approach, and commitment to professional wholesale distribution and supplier relationships.',
}

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="hero-bg pt-36 pb-20">
        <div className="max-w-content mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/70 text-xs tracking-[0.1em] uppercase font-medium">About Urban Pulse Wholesale</span>
          </div>
          <h1 className="text-display text-white mb-5 max-w-2xl">A Company Built on Trust and Professional Standards</h1>
          <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
            We are a wholesale distribution company dedicated to operating with the transparency, reliability, and professionalism that brands and suppliers deserve.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Our Mission</h2>
              <div className="bg-navy rounded-xl p-8 mb-8">
                <p className="text-white text-lg italic leading-relaxed">
                  "Urban Pulse Wholesale LLC is committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."
                </p>
              </div>
              <p className="text-charcoal-light leading-relaxed mb-4">
                This mission statement is not just a declaration — it is a standard we hold ourselves to in every business interaction. When we approach a supplier for a wholesale account, we understand we are asking for trust. We take that seriously.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                We believe that the best wholesale relationships are partnerships — not purely transactional exchanges. When suppliers do well, we do well. That alignment of interests drives us to operate with integrity at every stage of the business relationship.
              </p>
            </div>
            <div className="space-y-5">
              <h3 className="text-navy font-semibold text-lg mb-4">Our Core Values</h3>
              {[
                {
                  title: 'Transparency',
                  desc: 'We communicate openly about our business model, sales channels, and purchasing practices. Suppliers are never left guessing about who they are working with.',
                },
                {
                  title: 'Reliability',
                  desc: 'When we make a purchasing commitment, we follow through. Consistent order cadence and dependable payment are the cornerstones of our supplier relationships.',
                },
                {
                  title: 'Respect',
                  desc: 'We respect supplier policies, brand guidelines, and pricing requirements. We believe these protections exist for good reason and support them fully.',
                },
                {
                  title: 'Professionalism',
                  desc: 'From the first inquiry to ongoing account management, we operate with the organizational standards and communication quality that suppliers deserve.',
                },
                {
                  title: 'Growth Mindset',
                  desc: 'We are invested in growing our business the right way — sustainably, compliantly, and in genuine partnership with the brands and distributors we work with.',
                },
              ].map(v => (
                <div key={v.title} className="flex gap-4 p-5 bg-offwhite rounded-lg">
                  <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-navy font-semibold text-sm mb-1">{v.title}</div>
                    <div className="text-charcoal-light text-sm leading-relaxed">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="accent-line"></span>
            <h2 className="text-display-sm text-navy mb-6">Who We Are</h2>
            <div className="space-y-5 text-charcoal-light leading-relaxed">
              <p className="text-lg">
                Urban Pulse Wholesale LLC is a professionally registered limited liability company engaged in wholesale product sourcing and e-commerce distribution. Our primary sales channel is Amazon FBA (Fulfilled by Amazon), where we operate a dedicated seller account managed to the highest performance standards.
              </p>
              <p>
                We source products from authorized brands, manufacturers, and distributors. Our purchasing process is organized, documented, and conducted with full respect for supplier onboarding requirements and policies.
              </p>
              <p>
                We are not a broker, liquidator, or gray market reseller. We pursue legitimate, authorized wholesale accounts and operate entirely within the terms established by each supplier. Our customers are Amazon shoppers purchasing genuine products at competitive prices.
              </p>
              <p>
                Our team brings experience in e-commerce operations, inventory management, marketplace compliance, and supply chain logistics. We apply that experience to serve our supplier partners well and to represent their products responsibly in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-14">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">Our Approach to Wholesale</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                title: 'Sourcing with Integrity',
                desc: 'We identify products and categories where we can add genuine value through efficient distribution. We pursue only authorized wholesale accounts and do not engage in unauthorized product sourcing.',
              },
              {
                num: '02',
                title: 'Supplier-First Communication',
                desc: 'We initiate supplier relationships with full disclosure of our business model. Account managers and brand representatives always know exactly who they are working with and how we sell.',
              },
              {
                num: '03',
                title: 'Operational Excellence',
                desc: 'Once a supplier relationship is established, we manage it systematically. This means organized purchase orders, on-time payments, proper documentation, and proactive communication.',
              },
              {
                num: '04',
                title: 'Marketplace Compliance',
                desc: 'We maintain our Amazon seller account to the highest standards — ensuring product listings, pricing, and representations comply with both Amazon policies and supplier requirements.',
              },
              {
                num: '05',
                title: 'Inventory Intelligence',
                desc: 'We use sales data and market analysis to make smart purchasing decisions, enabling us to maintain consistent reorder patterns rather than sporadic, unpredictable buying.',
              },
              {
                num: '06',
                title: 'Long-Term Perspective',
                desc: 'We measure success by the depth and duration of our supplier relationships, not just by short-term margins. A trusted, long-running partnership is worth more than any single transaction.',
              },
            ].map(item => (
              <div key={item.num} className="group">
                <div className="text-accent/30 font-serif text-5xl mb-3 leading-none">{item.num}</div>
                <h3 className="text-navy font-semibold text-lg mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Commerce Expertise */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-white mb-5">E-Commerce Expertise</h2>
              <p className="text-white/70 leading-relaxed mb-5">
                Selling on Amazon FBA is not simply listing a product and waiting for orders. It requires continuous management of inventory levels, listing quality, account health metrics, advertising strategy, and fulfillment logistics.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Our team understands this complexity. We apply structured processes to each aspect of Amazon operations, ensuring that the brands and products we carry are represented with the care and competence they deserve.
              </p>
              <Link href="/fba-operations" className="btn-primary inline-flex items-center gap-2">
                Our FBA Operations <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                'Amazon FBA Program',
                'Inventory Forecasting',
                'Listing Optimization',
                'Account Health Management',
                'FBA Prep & Compliance',
                'Performance Monitoring',
                'Returns Management',
                'Supplier Documentation',
              ].map(item => (
                <div key={item} className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                  <span className="text-white/75 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6 text-center">
          <span className="accent-line-center"></span>
          <h2 className="text-display-sm text-navy mb-5 max-w-2xl mx-auto">Our Commitment to Suppliers</h2>
          <p className="text-charcoal-light text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            We understand that granting a wholesale account represents a significant business decision. We take that decision seriously and commit to upholding the standards that make us worthy of supplier trust.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/partnerships" className="btn-primary">View Partnership Details</Link>
            <Link href="/contact" className="btn-outline">Get In Touch</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
