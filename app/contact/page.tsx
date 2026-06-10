import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Urban Pulse Wholesale LLC for supplier inquiries, partnership questions, and business documentation requests.',
}

export default function ContactPage() {
  return (
    <div>
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'center', paddingTop: '8rem', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }} className="mesh-dark noise">
        <div className="orb" style={{ width: 400, height: 400, background: 'rgba(14,165,176,0.12)', top: '-100px', right: '0' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '100px', padding: '6px 16px', marginBottom: '1.5rem' }}>
              <span style={{ color: '#d4a843', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Get In Touch</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'white', marginBottom: '1.25rem', fontWeight: 900 }}>Contact Urban Pulse Wholesale</h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.75 }}>
              We respond to all inquiries within one business day. Whether you're a supplier, brand rep, or partner — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--off)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }}>
            {/* Info panel */}
            <div>
              <div className="accent-bar" />
              <h2 style={{ fontSize: '1.75rem', color: 'var(--navy)', marginBottom: '1.5rem', fontFamily: 'Playfair Display, serif' }}>Contact Information</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: '✉', label: 'Email', val: '[email@urbanpulsewholesale.com]' },
                  { icon: '✆', label: 'Phone', val: '[Phone Number Placeholder]' },
                  { icon: '⊙', label: 'Address', val: '[Business Address Placeholder]' },
                  { icon: '◷', label: 'Hours', val: 'Monday – Friday, 9AM – 5PM' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '1.25rem', color: '#d4a843', lineHeight: 1 }}>{item.icon}</span>
                    <div>
                      <div style={{ color: 'var(--navy)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '3px' }}>{item.label}</div>
                      <div style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>{item.val}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'var(--navy)', borderRadius: '16px', padding: '1.75rem' }}>
                <div style={{ color: '#d4a843', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>Response Time</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  All inquiries answered within <strong style={{ color: '#d4a843' }}>1 business day</strong>. For documentation requests, allow up to 2 business days.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div style={{ background: 'white', borderRadius: '20px', padding: '2.5rem', border: '1px solid var(--border)', boxShadow: '0 4px 40px rgba(5,13,31,0.08)' }}>
              <h3 style={{ color: 'var(--navy)', fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', marginBottom: '0.5rem' }}>Send Us a Message</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.875rem', marginBottom: '2rem' }}>Fill out the form below and we'll get back to you promptly.</p>

              <form action="https://formspree.io/f/[YOUR-FORM-ID]" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <input type="hidden" name="_subject" value="New Contact Form Submission - Urban Pulse Wholesale" />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label className="lbl">Full Name *</label>
                    <input name="name" type="text" className="inp" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label className="lbl">Company</label>
                    <input name="company" type="text" className="inp" placeholder="Your Company" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  <div>
                    <label className="lbl">Email *</label>
                    <input name="email" type="email" className="inp" placeholder="you@company.com" required />
                  </div>
                  <div>
                    <label className="lbl">Phone</label>
                    <input name="phone" type="tel" className="inp" placeholder="(000) 000-0000" />
                  </div>
                </div>

                <div>
                  <label className="lbl">Subject *</label>
                  <select name="subject" className="inp" required>
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
                  <label className="lbl">Message *</label>
                  <textarea name="message" className="inp" rows={6} placeholder="Please describe your inquiry..." required style={{ resize: 'vertical' }}></textarea>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <input type="checkbox" id="privacy" name="privacy" style={{ marginTop: '3px', accentColor: '#d4a843' }} required />
                  <label htmlFor="privacy" style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                    I agree to the <Link href="/privacy" style={{ color: 'var(--navy)', textDecoration: 'underline' }}>Privacy Policy</Link>. My information will only be used to respond to this inquiry.
                  </label>
                </div>

                <button type="submit" className="btn-gold" style={{ justifyContent: 'center', width: '100%' }}>
                  <span>Send Message</span>
                </button>

                <p style={{ color: 'var(--gray)', fontSize: '0.8rem', textAlign: 'center' }}>
                  📬 We respond within 1 business day (Mon–Fri, 9AM–5PM)
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
