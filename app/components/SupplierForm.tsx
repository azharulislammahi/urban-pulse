'use client'
import { useForm, ValidationError } from '@formspree/react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

export default function SupplierForm() {
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
      <div style={{ background: 'white', borderRadius: 24, padding: '3rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(212,168,67,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
          <CheckCircle2 size={36} color="#d4a843" />
        </div>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#050d1f', marginBottom: '0.75rem', fontWeight: 700 }}>Inquiry Received!</h3>
        <p style={{ color: '#64748b', lineHeight: 1.7, fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: '0.95rem', maxWidth: 420, margin: '0 auto' }}>
          Thank you for your inquiry. We will review your message and respond within one business day (Mon–Fri, 9AM–5PM).
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: 'white', borderRadius: 24, padding: '2.5rem', border: '1px solid #e2e8f0', boxShadow: '0 8px 60px rgba(5,13,31,0.07)' }}>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8, padding: '0.875rem 1rem', marginBottom: '1.5rem', color: '#dc2626', fontSize: '0.875rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
          Please fix the errors below and try again.
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
          <div>
            <label htmlFor="sup-name" style={lbl}>Your Name *</label>
            <input id="sup-name" name="name" type="text" required placeholder="First & Last Name" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
            <ValidationError field="name" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="sup-company" style={lbl}>Company / Brand *</label>
            <input id="sup-company" name="company" type="text" required placeholder="Company Name" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
            <ValidationError field="company" errors={state.errors} style={err} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-grid">
          <div>
            <label htmlFor="sup-email" style={lbl}>Business Email *</label>
            <input id="sup-email" name="email" type="email" required placeholder="you@company.com" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
            <ValidationError field="email" errors={state.errors} style={err} />
          </div>
          <div>
            <label htmlFor="sup-phone" style={lbl}>Phone</label>
            <input id="sup-phone" name="phone" type="tel" placeholder="(000) 000-0000" style={inp}
              onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
          </div>
        </div>

        <div>
          <label htmlFor="sup-title" style={lbl}>Your Role / Title</label>
          <input id="sup-title" name="title" type="text" placeholder="e.g. Account Manager, Sales Director" style={inp}
            onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
        </div>

        <div>
          <label htmlFor="sup-categories" style={lbl}>Product Categories</label>
          <input id="sup-categories" name="categories" type="text" placeholder="e.g. Home & Kitchen, Pet Supplies" style={inp}
            onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
        </div>

        <div>
          <label htmlFor="sup-reason" style={lbl}>Reason for Inquiry *</label>
          <select id="sup-reason" name="reason" required style={{ ...inp, cursor: 'pointer' }}
            onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'}>
            <option value="">Select a reason...</option>
            <option>Reviewing Urban Pulse Wholesale for a wholesale account</option>
            <option>Requesting documentation or business information</option>
            <option>New supplier offering wholesale to buyers</option>
            <option>General inquiry or question</option>
            <option>Other</option>
          </select>
          <ValidationError field="reason" errors={state.errors} style={err} />
        </div>

        <div>
          <label htmlFor="sup-message" style={lbl}>Message / Notes</label>
          <textarea id="sup-message" name="message" rows={5}
            placeholder="Describe your inquiry, documentation needs, or any questions..."
            style={{ ...inp, resize: 'vertical' }}
            onFocus={e => e.target.style.borderColor='#d4a843'} onBlur={e => e.target.style.borderColor='#e2e8f0'} />
          <ValidationError field="message" errors={state.errors} style={err} />
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <input type="checkbox" id="sup-privacy" required
            style={{ marginTop: 3, accentColor: '#d4a843', width: 16, height: 16, flexShrink: 0 }} />
          <label htmlFor="sup-privacy" style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.6, fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            I agree to the <a href="/privacy" style={{ color: '#050d1f', textDecoration: 'underline' }}>Privacy Policy</a>. Information used solely to respond to this inquiry.
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
            : <>Submit Inquiry <ArrowRight size={15} /></>}
        </button>

      </form>
      <p style={{ color: '#94a3b8', fontSize: '0.78rem', textAlign: 'center', marginTop: '1rem', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        We respond to all inquiries within 1 business day (Mon–Fri, 9AM–5PM)
      </p>
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media(max-width: 600px) { .form-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
