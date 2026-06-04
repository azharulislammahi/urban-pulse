import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Package, TrendingUp, ShieldCheck, Handshake, BarChart3, Truck, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Urban Pulse Wholesale LLC | Building Strong Wholesale Partnerships',
  description: 'Urban Pulse Wholesale LLC partners with brands, distributors, and manufacturers to bring quality products to customers through efficient e-commerce and Amazon FBA operations.',
}

const whyUs = [
  {
    icon: <ShieldCheck size={28} className="text-accent" />,
    title: 'Professional Standards',
    desc: 'We operate with full transparency, maintaining organized purchasing records and clear communication at every stage of the business relationship.',
  },
  {
    icon: <Handshake size={28} className="text-accent" />,
    title: 'Long-Term Partnerships',
    desc: 'We are not transactional buyers. Our goal is to build lasting supplier relationships that provide consistent, predictable order volume over time.',
  },
  {
    icon: <BarChart3 size={28} className="text-accent" />,
    title: 'Amazon FBA Expertise',
    desc: 'With deep experience in Amazon FBA operations, we understand marketplace dynamics, customer expectations, and efficient fulfillment processes.',
  },
  {
    icon: <Package size={28} className="text-accent" />,
    title: 'Inventory Management',
    desc: 'Systematic inventory planning allows us to forecast purchasing needs and maintain consistent order cadence with our supplier partners.',
  },
  {
    icon: <TrendingUp size={28} className="text-accent" />,
    title: 'Reliable Purchasing',
    desc: 'We make purchasing commitments with care and follow through. Suppliers can rely on us to meet agreed terms and maintain professional account management.',
  },
  {
    icon: <Truck size={28} className="text-accent" />,
    title: 'Compliance-Focused',
    desc: 'We respect and strictly adhere to supplier policies, minimum advertised pricing, and marketplace requirements to protect brand integrity.',
  },
]

const process = [
  { step: '01', title: 'Source & Vet', desc: 'We identify brands and products that align with our operational model and marketplace expertise.' },
  { step: '02', title: 'Build Relationship', desc: 'We engage suppliers through professional inquiry, onboarding, and documentation processes.' },
  { step: '03', title: 'Purchase & Receive', desc: 'We place organized purchase orders, receive inventory, and prepare for Amazon FBA preparation.' },
  { step: '04', title: 'FBA Fulfillment', desc: 'Products are processed, labeled, and shipped to Amazon fulfillment centers for efficient customer delivery.' },
  { step: '05', title: 'Reorder & Grow', desc: 'Strong sell-through data informs consistent reorders, deepening the supplier partnership over time.' },
]

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* HERO */}
      <section className="hero-bg min-h-screen flex items-center relative grid-pattern">
        <div className="max-w-content mx-auto px-6 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent inline-block"></span>
              <span className="text-white/80 text-xs tracking-[0.1em] uppercase font-medium">Wholesale Distribution & Amazon FBA</span>
            </div>
            <h1 className="text-display text-white mb-6 leading-[1.05]">
              Building Strong Wholesale Partnerships for Long-Term Growth
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-2xl">
              Urban Pulse Wholesale LLC partners with brands, distributors, and manufacturers to bring quality products to customers through efficient e-commerce and Amazon FBA operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/supplier-info" className="btn-primary">
                Become a Supplier Partner
              </Link>
              <Link href="/about" className="btn-outline">
                Learn About Us
              </Link>
            </div>

            {/* Credibility row */}
            <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
              {[
                { label: 'E-Commerce Focus', desc: 'Amazon FBA Primary Channel' },
                { label: 'Supplier First', desc: 'Policy-Compliant Operations' },
                { label: 'LLC Registered', desc: 'Professional Business Entity' },
              ].map(item => (
                <div key={item.label}>
                  <div className="text-accent text-xs font-semibold tracking-[0.08em] uppercase mb-1">{item.label}</div>
                  <div className="text-white/50 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative right panel */}
        <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[38%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0f2044]/80 z-10"></div>
          <div className="absolute inset-0 flex flex-col justify-center p-12 z-20 gap-4">
            {[
              'Transparent business practices',
              'Consistent purchasing commitments',
              'Respectful of supplier policies',
              'Professional account management',
              'Long-term partnership mindset',
              'Compliance with MAP policies',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3">
                <CheckCircle2 size={16} className="text-accent flex-shrink-0" />
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Who We Are</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-5">
                Urban Pulse Wholesale LLC is a professional wholesale distribution company operating primarily through the Amazon FBA (Fulfilled by Amazon) channel. We source products directly from authorized brands, distributors, and manufacturers, then deliver them to end consumers through Amazon's world-class fulfillment network.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                Our company was established with a clear mission: to operate as a reliable, professional wholesale buyer that suppliers can trust. We understand that brand integrity, pricing compliance, and consistent communication are not optional—they are the foundation of every good business relationship.
              </p>
              <div className="space-y-3">
                {[
                  'Registered LLC business entity',
                  'Dedicated Amazon FBA seller account',
                  'Organized purchasing and documentation processes',
                  'Full compliance with supplier terms and MAP policies',
                  'Commitment to professional, timely communication',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-charcoal text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-navy p-8 rounded-lg text-white">
                <div className="text-accent text-xs tracking-[0.12em] uppercase font-semibold mb-3">Our Mission</div>
                <blockquote className="text-white/90 text-lg leading-relaxed italic border-l-0 p-0">
                  "Urban Pulse Wholesale LLC is committed to building lasting relationships with brands and distributors through professional purchasing practices, transparent communication, and responsible marketplace representation."
                </blockquote>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: 'Amazon FBA', l: 'Primary Sales Channel' },
                  { n: 'LLC', l: 'Business Structure' },
                  { n: 'B2B', l: 'Partnership Focus' },
                  { n: '100%', l: 'Policy Compliance' },
                ].map(item => (
                  <div key={item.l} className="bg-white border border-border rounded-lg p-5 text-center card-hover">
                    <div className="stat-number text-2xl mb-1">{item.n}</div>
                    <div className="text-charcoal-light text-xs font-medium tracking-wide uppercase">{item.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">Why Partner With Urban Pulse Wholesale?</h2>
            <p className="text-charcoal-light text-lg">
              We operate with the professionalism and transparency that suppliers deserve when evaluating wholesale account applicants.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="bg-offwhite rounded-lg p-7 card-hover border border-transparent hover:border-accent/20">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-navy font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50"></div>
        <div className="max-w-content mx-auto px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-white mb-4">How We Operate</h2>
            <p className="text-white/60 text-lg">
              From supplier onboarding to Amazon FBA fulfillment — a streamlined, professional process at every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-white/10"></div>
            {process.map((step, i) => (
              <div key={i} className="relative text-center px-4 mb-8 lg:mb-0">
                <div className="w-24 h-24 rounded-full border-2 border-accent/40 bg-navy-mid flex flex-col items-center justify-center mx-auto mb-5 relative z-10">
                  <div className="text-accent text-xs font-bold tracking-widest">{step.step}</div>
                  <div className="text-white font-semibold text-xs mt-0.5 px-2 leading-tight">{step.title}</div>
                </div>
                <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FBA HIGHLIGHT */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-offwhite rounded-xl p-8 space-y-4">
                <div className="text-navy font-semibold text-sm tracking-wide uppercase mb-5">Amazon FBA Capabilities</div>
                {[
                  ['Inventory Forecasting', 'Data-driven purchasing decisions based on sales velocity and market trends.'],
                  ['Prep & Compliance', 'All products are prepared according to Amazon FBA requirements before shipment.'],
                  ['Account Management', 'Dedicated management of seller account health, performance metrics, and listing quality.'],
                  ['Customer Service', 'Leveraging Amazon\'s world-class customer service infrastructure for end buyers.'],
                  ['Returns Management', 'Professional handling of returned merchandise in line with supplier agreements.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-4 py-3 border-b border-border last:border-0">
                    <Star size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-navy font-semibold text-sm mb-0.5">{title}</div>
                      <div className="text-charcoal-light text-xs leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Amazon FBA Operations</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-5">
                Amazon's Fulfilled by Amazon program is our primary sales channel. This means purchased inventory is shipped to Amazon's fulfillment centers, where Amazon handles storage, packing, shipping, and customer service on our behalf.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                This model provides suppliers with confidence that their products will be handled professionally, stored in climate-controlled facilities, and delivered to customers through Amazon's trusted logistics network.
              </p>
              <Link href="/fba-operations" className="btn-primary inline-flex items-center gap-2">
                View FBA Operations <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-20 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, #0f2044 0, #0f2044 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px'}}></div>
        <div className="max-w-content mx-auto px-6 text-center relative z-10">
          <h2 className="text-display-sm text-navy mb-4">Ready to Establish a Wholesale Account?</h2>
          <p className="text-navy/70 text-lg mb-8 max-w-xl mx-auto">
            We welcome opportunities to work with new suppliers and are prepared to provide all required business documentation during the onboarding process.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/supplier-info" className="bg-navy text-white font-semibold py-3 px-8 rounded hover:bg-navy-mid transition-colors">
              Submit Supplier Inquiry
            </Link>
            <Link href="/contact" className="border-2 border-navy text-navy font-semibold py-3 px-8 rounded hover:bg-navy/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ TEASER */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'Is Urban Pulse Wholesale LLC a registered business?',
                a: 'Yes, Urban Pulse Wholesale LLC is a registered limited liability company. We can provide business documentation including our EIN, state registration, and resale certificates upon request during the supplier onboarding process.',
              },
              {
                q: 'Which marketplaces do you sell on?',
                a: 'Our primary channel is Amazon FBA (Fulfilled by Amazon). We focus on maintaining a professional, compliant Amazon seller account with strong performance metrics.',
              },
              {
                q: 'How do you handle MAP (Minimum Advertised Price) policies?',
                a: 'We take MAP compliance seriously. Respecting brand pricing policies is fundamental to how we operate, and we will not list products below any supplier-established MAP.',
              },
              {
                q: 'What documentation can you provide for onboarding?',
                a: 'We can provide an EIN/Tax ID, state resale certificate, business registration documents, and any other standard supplier onboarding documentation required.',
              },
              {
                q: 'How do you handle returns or defective products?',
                a: 'We manage returns professionally and in accordance with each supplier\'s return policy. We communicate proactively if issues arise with a product lot.',
              },
              {
                q: 'What order volumes can we expect?',
                a: 'Order volumes vary by product and market conditions. We commit to transparent communication about our purchasing intentions and work to establish consistent reorder cadence.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-6 shadow-card">
                <h3 className="text-navy font-semibold text-sm mb-2 leading-snug">{q}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
