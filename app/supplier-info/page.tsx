import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Supplier Information & Inquiry',
  description: 'Information for brands and distributors interested in working with Urban Pulse Wholesale LLC as an authorized wholesale buyer.',
}

export default function SupplierInfoPage() {
  return (
    <div>
      <section style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }} className="mesh-dark noise">
        <div className="orb" style={{ width: 500, height: 500, background: 'rgba(212,168,67,0.1)', top: '-150px', right: '-50px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(14,165,176,0.12)', border: '1px solid rgba(14,165,176,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
              <span style={{ color: '#0ea5b0', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>For Suppliers & Brands</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', fontWeight: 900, marginBottom: '1.25rem' }}>Supplier Information & Wholesale Inquiry</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.75 }}>
              We welcome opportunities to establish new supplier relationships and are committed to maintaining professional standards throughout the onboarding process.
            </p>
          </div>
        </div>
      </section>

      {/* What we provide */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div>
              <div className="accent-bar" />
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--navy)', marginBottom: '1.25rem' }}>What We Provide During Onboarding</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
                We understand that approving a wholesale account requires trust. We provide complete documentation and are fully transparent about our operations from day one.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { doc: 'LLC Business Registration', desc: 'State registration documents confirming Urban Pulse Wholesale LLC as a registered business entity.' },
                  { doc: 'EIN / Federal Tax ID', desc: 'Federal Employer Identification Number for W-9 and all tax documentation requirements.' },
                  { doc: 'State Resale Certificate', desc: 'Valid resale certificate confirming tax-exempt resale purchases.' },
                  { doc: 'Amazon Seller Verification', desc: 'Evidence of our active, in-good-standing Amazon professional seller account.' },
                  { doc: 'Signed Supplier Agreements', desc: 'We sign all MAP policies, reseller agreements, and terms as required.' },
                  { doc: 'Business References', desc: 'Available upon request from existing business relationships.' },
                ].map(item => (
                  <div key={item.doc} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1.25rem', background: 'var(--off)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                    <div style={{ width: 36, height: 36, borderRadius: '8px', background: 'linear-gradient(135deg, rgba(212,168,67,0.15), rgba(14,165,176,0.15))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ fontSize: '1rem' }}>📄</span>
                    </div>
                    <div>
                      <div style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '3px' }}>{item.doc}</div>
                      <div style={{ color: 'var(--gray)', fontSize: '0.8rem', lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Onboarding steps */}
            <div id="onboarding">
              <div className="accent-bar" />
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--navy)', marginBottom: '1.25rem' }}>Our Onboarding Process</h2>
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: '2rem' }}>We follow your process exactly — no shortcuts, no special requests.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { n: '1', t: 'Initial Inquiry', d: 'We submit a professional wholesale account application with full business information through your preferred channel.' },
                  { n: '2', t: 'Documentation', d: 'We promptly provide all requested documents — EIN, resale certificate, LLC registration, or any supplier-specific forms.' },
                  { n: '3', t: 'Agreement Review', d: 'We review and sign all required agreements including MAP policies, reseller terms, and any supplier-specific requirements.' },
                  { n: '4', t: 'First Purchase', d: 'Upon approval, we place an initial order sized appropriately for our market research and inventory plan.' },
                  { n: '5', t: 'Ongoing Partnership', d: 'Consistent, growing orders based on sales data. Proactive communication and full account management.' },
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', paddingBottom: '1.5rem', position: 'relative' }}>
                    {i < 4 && <div style={{ position: 'absolute', left: '18px', top: '40px', bottom: 0, width: '2px', background: 'linear-gradient(180deg, #d4a843, rgba(212,168,67,0.1))' }} />}
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #d4a843, #0ea5b0)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, zIndex: 1 }}>
                      <span style={{ color: 'white', fontWeight: 800, fontSize: '0.8rem' }}>{step.n}</span>
                    </div>
                    <div style={{ paddingTop: '6px' }}>
                      <div style={{ color: 'var(--navy)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '4px' }}>{step.t}</div>
                      <div style={{ color: 'var(--gray)', fontSize: '0.875rem', lineHeight: 1.6 }}>{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supplier Inquiry Form */}
      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="accent-bar-center" />
              <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: 'var(--navy)', marginBottom: '1rem' }}>Wholesale Inquiry Form</h2>
              <p style={{ color: 'var(--gray)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Supplier or brand representative? Submit your inquiry and we'll follow up within one business day.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '24px', padding: '3rem', border: '1px solid var(--border)', boxShadow: '0 8px 60px rgba(5,13,31,0.08)' }}>
              <form action="https://formspree.io/f/[YOUR-FORM-ID]" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <input type="hidden" name="_subject" value="New Supplier Inquiry - Urban Pulse Wholesale" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label className="lbl">Your Name *</label>
                    <input name="name" type="text" className="inp" placeholder="First & Last Name" required />
                  </div>
                  <div>
                    <label className="lbl">Company / Brand *</label>
                    <input name="company" type="text" className="inp" placeholder="Company Name" required />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label className="lbl">Business Email *</label>
                    <input name="email" type="email" className="inp" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="lbl">Phone</label>
                    <input name="phone" type="tel" className="inp" placeholder="(000) 000-0000" />
                  </div>
                </div>
                <div>
                  <label className="lbl">Your Role / Title</label>
                  <input name="title" type="text" className="inp" placeholder="e.g. Account Manager, Sales Director" />
                </div>
                <div>
                  <label className="lbl">Product Categories</label>
                  <input name="categories" type="text" className="inp" placeholder="e.g. Home & Kitchen, Pet Supplies, Grocery" />
                </div>
                <div>
                  <label className="lbl">Reason for Inquiry *</label>
                  <select name="reason" className="inp" required>
                    <option value="">Select a reason...</option>
                    <option>Reviewing Urban Pulse Wholesale for a wholesale account</option>
                    <option>Requesting documentation or business information</option>
                    <option>New supplier offering wholesale to buyers</option>
                    <option>General inquiry or question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="lbl">Message / Notes</label>
                  <textarea name="message" className="inp" rows={5} placeholder="Describe your inquiry, documentation needs, or any questions..." style={{ resize: 'vertical' }}></textarea>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <input type="checkbox" id="s-privacy" style={{ marginTop: '3px', accentColor: '#d4a843' }} required />
                  <label htmlFor="s-privacy" style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                    I agree to the <Link href="/privacy" style={{ color: 'var(--navy)', textDecoration: 'underline' }}>Privacy Policy</Link>. Information used solely to respond to this inquiry.
                  </label>
                </div>
                <button type="submit" className="btn-gold" style={{ justifyContent: 'center' }}>
                  <span>Submit Inquiry</span> <ArrowRight size={16} />
                </button>
                <p style={{ color: 'var(--gray)', fontSize: '0.8rem', textAlign: 'center' }}>
                  We respond to all inquiries within 1 business day (Mon–Fri, 9AM–5PM)
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
