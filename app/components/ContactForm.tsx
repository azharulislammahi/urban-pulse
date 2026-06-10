'use client'
import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xaqzdwpn')

  const inp: React.CSSProperties = {
    width: '100%', padding: '0.8rem 1rem',
    border: '1.5px solid #e2e8f0', borderRadius: 8,
    fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.9rem',
    color: '#1e293b', background: 'white', outline: 'none',
    transition: 'border-color 0.2s', boxSizing: 'border-box',
  }
  const lbl: React.CSSProperties = {
    display: 'block', fontSize: '0.75rem', fontWeight: 700,
    color: '#1e293b', marginBottom: '0.35rem',
    letterSpacing: '0.08em', textTransform: 'uppercase',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
  }
  const err: React.CSSProperties = {
    color: '#dc2626', fontSize: '0.78rem',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    marginTop: '0.25rem', display: 'block',
  }

  if (state.succeeded) {
    return (
      <div style={{ background: 'white', borderRadius: 20, padding: '3rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(14,165,176,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle2 size={36} color="#0ea5b0" />
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#050d1f', marginBottom: '0.75rem', fontWeight: 700 }}>Message Sent!</h3>
        <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: 380, margin: '0 auto' }}>
          Thank you for reaching out. We will respond within one business day (Mon–Fri, 9AM–5PM).
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', borderRadius: 20, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 8px 60px rgba(5,13,31,0.07)' }}>
      <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#050d1f', marginBottom: '0.4rem', fontWeight: 700 }}>Send Us a Message</h3>
      <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '2rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>We respond within 1 business day.</p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
          <div>
            <label htmlFor="contact-name" style={lbl}>Full Name *</label>
            <input id="contact-name" name="name" type="text" required placeholder="Your Name" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
            <ValidationError field="name" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="contact-company" style={lbl}>Company</label>
            <input id="contact-company" name="company" type="text" placeholder="Your Company" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
          <div>
            <label htmlFor="contact-email" style={lbl}>Email *</label>
            <input id="contact-email" name="email" type="email" required placeholder="you@company.com" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
            <ValidationError field="email" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="contact-phone" style={lbl}>Phone</label>
            <input id="contact-phone" name="phone" type="tel" placeholder="(000) 000-0000" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" style={lbl}>Subject *</label>
          <select id="contact-subject" name="subject" required style={{ ...inp, cursor: 'pointer' }}
            onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'}>
            <option value="">Select a subject...</option>
            <option>Supplier / Wholesale Account Inquiry</option>
            <option>Documentation Request</option>
            <option>Partnership Question</option>
            <option>Business Verification</option>
            <option>General Question</option>
            <option>Other</option>
          </select>
          <ValidationError field="subject" errors={state.errors} style={err} />
        </div>

        <div>
          <label htmlFor="contact-message" style={lbl}>Message *</label>
          <textarea id="contact-message" name="message" required rows={5}
            placeholder="Please describe your inquiry in detail..."
            style={{ ...inp, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
          <ValidationError field="message" errors={state.errors} style={err} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <input type="checkbox" id="contact-privacy" name="privacy" required
            style={{ marginTop: 3, accentColor: '#d4a843', width: 16, height: 16, flexShrink: 0 }} />
          <label htmlFor="contact-privacy" style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            I agree to the <a href="/privacy" style={{ color: '#050d1f', textDecoration: 'underline' }}>Privacy Policy</a>. My information will only be used to respond to this inquiry.
          </label>
        </div>

        <button type="submit" disabled={state.submitting} style={{
          background: state.submitting ? '#94a3b8' : 'linear-gradient(135deg, #d4a843, #f0c96a)',
          color: '#050d1f', fontWeight: 800, padding: '0.95rem',
          borderRadius: 8, fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase',
          border: 'none', cursor: state.submitting ? 'not-allowed' : 'pointer',
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          transition: 'all 0.2s',
        }}>
          {state.submitting
            ? <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</>
            : <>Send Message <ArrowRight size={15} /></>}
        </button>

      </form>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media(max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
