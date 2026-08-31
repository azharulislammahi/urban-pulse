'use client'
import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, Check, Loader2 } from 'lucide-react'

const err: React.CSSProperties = {
  color: '#B4402C',
  fontSize: '0.76rem',
  fontFamily: 'Plus Jakarta Sans, sans-serif',
  marginTop: '0.35rem',
  display: 'block',
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xaqzdwpn')

  if (state.succeeded) {
    return (
      <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: 3, padding: '3.5rem 2.5rem', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid #B8873C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem' }}>
          <Check size={24} color="#B8873C" />
        </div>
        <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.6rem', color: '#14100D', marginBottom: '0.85rem' }}>
          Message received
        </h3>
        <p style={{ color: '#6B5F51', fontSize: '0.9rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 400, margin: '0 auto' }}>
          Thank you for reaching out. We reply within one business day, Monday to Friday, 9:00 AM – 5:00 PM EST.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: 3, padding: '2.75rem' }}>
      <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Send a message</div>
      <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.6rem', color: '#14100D', marginBottom: '0.6rem' }}>
        Tell us what you need
      </h3>
      <p style={{ color: '#9A8B79', fontSize: '0.85rem', marginBottom: '2.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        We reply within one business day.
      </p>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div style={{ background: '#FBF0ED', border: '1px solid #E8C8BE', borderRadius: 2, padding: '0.9rem 1rem', marginBottom: '1.5rem', color: '#B4402C', fontSize: '0.85rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Please correct the fields below and try again.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="contact-name" className="lbl">Full name *</label>
            <input id="contact-name" name="name" type="text" required placeholder="Your name" className="inp" />
            <ValidationError field="name" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="contact-company" className="lbl">Company / brand</label>
            <input id="contact-company" name="company" type="text" placeholder="Company name" className="inp" />
          </div>
        </div>

        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="contact-email" className="lbl">Business email *</label>
            <input id="contact-email" name="email" type="email" required placeholder="you@company.com" className="inp" />
            <ValidationError field="email" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="contact-phone" className="lbl">Phone</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="(000) 000-0000" className="inp" />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="lbl">Subject *</label>
          <select id="contact-subject" name="subject" required className="inp" style={{ cursor: 'pointer' }}>
            <option value="">Select a subject…</option>
            <option>Fragrance wholesale account inquiry</option>
            <option>Beauty &amp; personal care account inquiry</option>
            <option>Documentation request (LLC, EIN, resale certificate)</option>
            <option>Authorized reseller / MAP policy question</option>
            <option>Business verification</option>
            <option>General question</option>
            <option>Other</option>
          </select>
          <ValidationError field="subject" errors={state.errors} style={err} />
        </div>

        <div>
          <label htmlFor="contact-message" className="lbl">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder="Please describe your inquiry…"
            className="inp"
            style={{ resize: 'vertical' }}
          />
          <ValidationError field="message" errors={state.errors} style={err} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
          <input type="checkbox" id="contact-privacy" name="privacy" required style={{ marginTop: 3, accentColor: '#B8873C', width: 15, height: 15, flexShrink: 0 }} />
          <label htmlFor="contact-privacy" style={{ color: '#6B5F51', fontSize: '0.8rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            I agree to the <a href="/privacy" style={{ color: '#14100D' }}>Privacy Policy</a>. My information will only be used to respond to this inquiry.
          </label>
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="btn btn-gold"
          style={{ width: '100%', justifyContent: 'center', opacity: state.submitting ? 0.6 : 1, cursor: state.submitting ? 'not-allowed' : 'pointer' }}
        >
          {state.submitting
            ? <><Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
            : <>Send message <ArrowRight size={14} /></>}
        </button>
      </form>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
