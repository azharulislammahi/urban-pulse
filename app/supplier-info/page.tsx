import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supplier Information & Inquiry',
  description: 'Information for brands, manufacturers, and distributors interested in establishing a wholesale account with Urban Pulse Wholesale LLC.',
}

export default function SupplierInfoPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-20">
        <div className="max-w-content mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/70 text-xs tracking-[0.1em] uppercase font-medium">For Suppliers & Brands</span>
          </div>
          <h1 className="text-display text-white mb-5 max-w-2xl">Supplier Information & Wholesale Inquiry</h1>
          <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
            We welcome opportunities to establish new supplier relationships and are committed to maintaining professional standards throughout the onboarding process.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="accent-line"></span>
              <h2 className="text-display-sm text-navy mb-6">Working With New Suppliers</h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-5">
                Urban Pulse Wholesale LLC is actively seeking wholesale accounts with brands, manufacturers, and distributors across a range of product categories. We approach every new supplier relationship with professionalism, transparency, and a commitment to long-term partnership.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-5">
                We understand that approving a wholesale account requires trust. To earn that trust, we provide complete business documentation and are fully transparent about how we operate, where we sell, and how we represent your brand in the marketplace.
              </p>
              <p className="text-charcoal-light leading-relaxed">
                If you are a supplier account manager or brand representative reviewing our inquiry, please use this page to learn about our business and submit an inquiry or request for documentation.
              </p>
            </div>
            <div className="bg-offwhite rounded-xl p-8">
              <div className="text-navy font-semibold text-sm tracking-wide uppercase mb-6">What We Provide During Onboarding</div>
              <div className="space-y-4">
                {[
                  { doc: 'Business Registration', desc: 'LLC formation documents confirming Urban Pulse Wholesale LLC as a registered business entity.' },
                  { doc: 'EIN / Tax ID', desc: 'Federal Employer Identification Number for all tax documentation requirements.' },
                  { doc: 'State Resale Certificate', desc: 'Valid resale certificate for our state of registration, confirming tax-exempt resale purchases.' },
                  { doc: 'Business References', desc: 'Available upon request from existing business relationships.' },
                  { doc: 'Amazon Seller Account Info', desc: 'Evidence of our active, in-good-standing Amazon professional seller account.' },
                  { doc: 'Signed Supplier Agreements', desc: 'We will sign and return all required supplier agreements, reseller agreements, and MAP policies.' },
                ].map(item => (
                  <div key={item.doc} className="flex gap-3 pb-3 border-b border-border last:border-0">
                    <span className="text-accent mt-0.5">📄</span>
                    <div>
                      <div className="text-navy font-semibold text-sm mb-0.5">{item.doc}</div>
                      <div className="text-charcoal-light text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding process */}
      <section id="onboarding" className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-12">
            <span className="accent-line-center"></span>
            <h2 className="text-display-sm text-navy mb-4">Our Onboarding Process</h2>
            <p className="text-charcoal-light text-lg max-w-2xl mx-auto">
              We follow your onboarding process exactly. No special requests, no shortcuts.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Initial Inquiry', desc: 'We submit a wholesale account inquiry with full business information through your preferred channel (online form, email, or sales rep contact).' },
              { step: '2', title: 'Documentation', desc: 'We promptly provide all requested documentation — EIN, resale certificate, business registration, or any supplier-specific forms.' },
              { step: '3', title: 'Agreement Review', desc: 'We review and sign all required supplier agreements, including MAP policies, reseller agreements, and terms and conditions.' },
              { step: '4', title: 'First Purchase', desc: 'Upon approval, we place an initial order sized appropriately for our market research and inventory plan.' },
            ].map(item => (
              <div key={item.step} className="bg-white rounded-xl p-6 shadow-card text-center">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-accent font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-navy font-semibold mb-3">{item.title}</h3>
                <p className="text-charcoal-light text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation section */}
      <section id="documentation" className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="accent-line"></span>
            <h2 className="text-display-sm text-navy mb-5">Documentation & Compliance</h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-8">
              We maintain current, organized business documentation and are prepared to provide the following to any supplier during the account application or onboarding process:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {[
                { title: 'Resale Certificate', status: 'Available on request', desc: 'State resale certificate confirming our status as a legitimate reseller for tax-exempt purchasing.' },
                { title: 'EIN / Tax ID Documentation', status: 'Available on request', desc: 'Federal tax identification for IRS Form W-9 and related tax documentation.' },
                { title: 'LLC Registration', status: 'Available on request', desc: 'State business registration documents for Urban Pulse Wholesale LLC.' },
                { title: 'Signed MAP Agreement', status: 'Will sign on receipt', desc: 'We will review and sign any supplier MAP policy presented during onboarding.' },
                { title: 'Reseller Agreement', status: 'Will sign on receipt', desc: 'Authorized reseller agreements reviewed and signed per supplier requirements.' },
                { title: 'Amazon Seller Verification', status: 'Available on request', desc: 'Documentation confirming our active, professional Amazon seller account status.' },
              ].map(item => (
                <div key={item.title} className="bg-offwhite rounded-lg p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="text-navy font-semibold text-sm">{item.title}</div>
                    <span className="text-xs bg-accent/20 text-accent-dark px-2 py-0.5 rounded font-medium whitespace-nowrap">{item.status}</span>
                  </div>
                  <p className="text-charcoal-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-navy/5 border border-navy/15 rounded-xl p-6">
              <p className="text-charcoal text-sm leading-relaxed">
                <strong className="text-navy">Note to Suppliers & Account Managers:</strong> If you are reviewing Urban Pulse Wholesale LLC for a wholesale account and need specific documentation or have questions about our business operations, please use the inquiry form below or contact us directly. We will respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section bg-offwhite">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="accent-line-center"></span>
              <h2 className="text-display-sm text-navy mb-4">Wholesale Inquiry Form</h2>
              <p className="text-charcoal-light text-lg">
                Are you a supplier, brand representative, or distributor? Submit an inquiry below and we will follow up within one business day.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-card p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Your Name *</label>
                    <input type="text" className="form-input" placeholder="First & Last Name" required />
                  </div>
                  <div>
                    <label className="form-label">Company / Brand Name *</label>
                    <input type="text" className="form-input" placeholder="Company Name" required />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Business Email *</label>
                    <input type="email" className="form-input" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="form-label">Phone Number</label>
                    <input type="tel" className="form-input" placeholder="(000) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Your Role / Title</label>
                  <input type="text" className="form-input" placeholder="e.g. Account Manager, Sales Director" />
                </div>
                <div>
                  <label className="form-label">Product Categories</label>
                  <input type="text" className="form-input" placeholder="e.g. Health & Beauty, Electronics, Home Goods" />
                </div>
                <div>
                  <label className="form-label">Reason for Inquiry</label>
                  <select className="form-input">
                    <option value="">Select a reason...</option>
                    <option>Reviewing Urban Pulse Wholesale for a wholesale account</option>
                    <option>Requesting documentation or business information</option>
                    <option>New supplier offering wholesale to buyers</option>
                    <option>General inquiry or question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Message / Notes</label>
                  <textarea className="form-input" rows={5} placeholder="Please share any details about your inquiry, specific documentation needs, or questions about our business..."></textarea>
                </div>
                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-charcoal-light text-sm">
                    I agree to Urban Pulse Wholesale LLC's <a href="/privacy" className="text-navy underline">Privacy Policy</a>. I understand my information will be used to respond to this inquiry.
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full text-center">
                  Submit Inquiry
                </button>
              </form>
              <p className="text-charcoal-light text-xs text-center mt-5">
                We respond to all inquiries within one business day (Monday – Friday, 9 AM – 5 PM).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Supplier Onboarding Request */}
      <section className="section bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40"></div>
        <div className="max-w-content mx-auto px-6 relative z-10 text-center">
          <span className="accent-line-center"></span>
          <h2 className="text-display-sm text-white mb-5">Requesting a New Supplier Account?</h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
            If you are a brand or distributor and Urban Pulse Wholesale LLC has expressed interest in becoming a wholesale customer, we welcome you to review our business information above and contact us for any additional documentation you require.
          </p>
          <p className="text-white/50 text-sm max-w-xl mx-auto">
            We are prepared to complete your standard onboarding process and provide all required business documentation, signed agreements, and any additional information your company requires to approve a wholesale account.
          </p>
        </div>
      </section>
    </div>
  )
}
