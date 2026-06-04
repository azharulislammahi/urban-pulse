import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Urban Pulse Wholesale LLC — reach out with supplier inquiries, partnership questions, or general business matters.',
}

export default function ContactPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-20">
        <div className="max-w-content mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-white/70 text-xs tracking-[0.1em] uppercase font-medium">Contact</span>
          </div>
          <h1 className="text-display text-white mb-5 max-w-2xl">Get In Touch</h1>
          <p className="text-white/65 text-xl max-w-xl leading-relaxed">
            We welcome inquiries from suppliers, brands, and business partners. We respond to all messages within one business day.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="max-w-content mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <span className="accent-line"></span>
                <h2 className="text-display-sm text-navy mb-4">Contact Information</h2>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  Reach out with any questions about our wholesale operations, supplier partnerships, or business documentation.
                </p>
              </div>

              {[
                { label: 'Email', icon: '✉', value: '[email@urbanpulsewholesale.com]', note: 'For supplier inquiries and general business' },
                { label: 'Phone', icon: '✆', value: '[Phone Number Placeholder]', note: 'Mon–Fri, 9 AM – 5 PM' },
                { label: 'Address', icon: '⊙', value: '[Business Address Placeholder]', note: 'Business mailing address' },
                { label: 'Business Hours', icon: '◷', value: 'Monday – Friday', note: '9:00 AM – 5:00 PM' },
              ].map(item => (
                <div key={item.label} className="flex gap-4 p-5 bg-offwhite rounded-lg">
                  <span className="text-accent text-xl">{item.icon}</span>
                  <div>
                    <div className="text-navy font-semibold text-xs tracking-wide uppercase mb-0.5">{item.label}</div>
                    <div className="text-charcoal text-sm font-medium">{item.value}</div>
                    <div className="text-charcoal-light text-xs">{item.note}</div>
                  </div>
                </div>
              ))}

              <div className="bg-navy rounded-xl p-6">
                <div className="text-white font-semibold text-sm mb-2">Response Time</div>
                <p className="text-white/65 text-sm leading-relaxed">
                  We respond to all inquiries within <strong className="text-accent">one business day</strong>. For supplier inquiries requiring documentation, allow up to two business days for complete documentation packages.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-offwhite rounded-xl p-8">
                <h3 className="text-navy font-semibold text-lg mb-6">Send Us a Message</h3>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input type="text" className="form-input" placeholder="Your Name" required />
                    </div>
                    <div>
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-input" placeholder="Your Company" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="form-label">Email Address *</label>
                      <input type="email" className="form-input" placeholder="you@company.com" required />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input type="tel" className="form-input" placeholder="(000) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Subject *</label>
                    <select className="form-input" required>
                      <option value="">Select a subject...</option>
                      <option>Supplier / Wholesale Account Inquiry</option>
                      <option>Documentation Request</option>
                      <option>Partnership Question</option>
                      <option>Business Verification</option>
                      <option>General Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Message *</label>
                    <textarea className="form-input" rows={6} placeholder="Please describe your inquiry in detail..." required></textarea>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="contact-privacy" className="mt-1" />
                    <label htmlFor="contact-privacy" className="text-charcoal-light text-sm">
                      I agree to the <a href="/privacy" className="text-navy underline">Privacy Policy</a>. I understand my information will be used to respond to this inquiry only.
                    </label>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn */}
      <section className="py-14 bg-offwhite border-t border-border">
        <div className="max-w-content mx-auto px-6 text-center">
          <div className="text-charcoal-light text-sm mb-3">Connect professionally</div>
          <a href="https://www.linkedin.com/company/[placeholder]" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0077B5] text-white font-semibold py-3 px-6 rounded hover:bg-[#005f91] transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            Urban Pulse Wholesale on LinkedIn [Placeholder]
          </a>
        </div>
      </section>
    </div>
  )
}
