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

export default function SupplierForm() {
  const [state, handleSubmit] = useForm('xaqzdwpn')

  if (state.succeeded) {
    return (
      <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: 3, padding: '3.5rem 2.5rem', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1px solid #B8873C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem' }}>
          <Check size={24} color="#B8873C" />
        </div>
        <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 400, fontSize: '1.6rem', color: '#14100D', marginBottom: '0.85rem' }}>
          Inquiry received
        </h3>
        <p style={{ color: '#6B5F51', fontSize: '0.9rem', lineHeight: 1.85, fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 420, margin: '0 auto' }}>
          Thank you. We review every inquiry personally and reply within one business day, Monday to Friday,
          9:00 AM – 5:00 PM EST — with our documentation package attached where relevant.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: '#fff', border: '1px solid #EDE4D6', borderRadius: 3, padding: '2.75rem' }}>
      {state.errors && Object.keys(state.errors).length > 0 && (
        <div style={{ background: '#FBF0ED', border: '1px solid #E8C8BE', borderRadius: 2, padding: '0.9rem 1rem', marginBottom: '1.5rem', color: '#B4402C', fontSize: '0.85rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Please correct the fields below and try again.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="sup-name" className="lbl">Your name *</label>
            <input id="sup-name" name="name" type="text" required placeholder="First &amp; last name" className="inp" />
            <ValidationError field="name" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="sup-company" className="lbl">Brand / company *</label>
            <input id="sup-company" name="company" type="text" required placeholder="Brand name" className="inp" />
            <ValidationError field="company" errors={state.errors} style={err} />
          </div>
        </div>

        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="sup-email" className="lbl">Business email *</label>
            <input id="sup-email" name="email" type="email" required placeholder="you@company.com" className="inp" />
            <ValidationError field="email" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="sup-phone" className="lbl">Phone</label>
            <input id="sup-phone" name="phone" type="tel" placeholder="(000) 000-0000" className="inp" />
          </div>
        </div>

        <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label htmlFor="sup-title" className="lbl">Your role</label>
            <input id="sup-title" name="title" type="text" placeholder="e.g. Sales Director, Distribution Manager" className="inp" />
          </div>
          <div>
            <label htmlFor="sup-line" className="lbl">Product line</label>
            <select id="sup-line" name="line" className="inp" style={{ cursor: 'pointer' }}>
              <option value="">Select a line…</option>
              <option>Fragrance &amp; perfume</option>
              <option>Home fragrance, candles &amp; diffusers</option>
              <option>Beauty &amp; personal care</option>
              <option>Both fragrance and beauty</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="sup-reason" className="lbl">Reason for inquiry *</label>
          <select id="sup-reason" name="reason" required className="inp" style={{ cursor: 'pointer' }}>
            <option value="">Select a reason…</option>
            <option>Reviewing Urban Pulse Wholesale for an authorized account</option>
            <option>Requesting our documentation (LLC, EIN, resale certificate, references)</option>
            <option>Sending an authorized reseller agreement or MAP policy</option>
            <option>Distributor offering wholesale supply</option>
            <option>General inquiry or question</option>
            <option>Other</option>
          </select>
          <ValidationError field="reason" errors={state.errors} style={err} />
        </div>

        <div>
          <label htmlFor="sup-message" className="lbl">Message</label>
          <textarea
            id="sup-message"
            name="message"
            rows={5}
            placeholder="Which SKUs, which channels, and what documentation you need from us…"
            className="inp"
            style={{ resize: 'vertical' }}
          />
          <ValidationError field="message" errors={state.errors} style={err} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
          <input type="checkbox" id="sup-privacy" name="privacy" required style={{ marginTop: 3, accentColor: '#B8873C', width: 15, height: 15, flexShrink: 0 }} />
          <label htmlFor="sup-privacy" style={{ color: '#6B5F51', fontSize: '0.8rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            I agree to the <a href="/privacy" style={{ color: '#14100D' }}>Privacy Policy</a>. Information is used solely to respond to this inquiry.
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
            : <>Submit inquiry <ArrowRight size={14} /></>}
        </button>
      </form>

      <p style={{ color: '#9A8B79', fontSize: '0.76rem', textAlign: 'center', marginTop: '1.25rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        Every inquiry is answered within one business day (Mon–Fri, 9:00 AM – 5:00 PM EST).
      </p>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
