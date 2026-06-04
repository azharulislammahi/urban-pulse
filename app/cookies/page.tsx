import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Cookie Policy' }
export default function CookiesPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-16"><div className="max-w-content mx-auto px-6"><h1 className="text-display-sm text-white mb-3">Cookie Policy</h1><p className="text-white/60">Last updated: [Date Placeholder]</p></div></section>
      <section className="section bg-white"><div className="max-w-3xl mx-auto px-6">
        <div className="space-y-8 text-charcoal-light leading-relaxed">
          {[
            { h: 'What Are Cookies', p: 'Cookies are small text files stored on your device when you visit a website. They help the website function correctly and can provide information about how visitors use the site.' },
            { h: 'How We Use Cookies', p: 'The Urban Pulse Wholesale LLC website uses only essential functional cookies necessary for basic website operation. We do not use tracking, advertising, or behavioral analytics cookies.' },
            { h: 'Types of Cookies We Use', p: 'Essential cookies only: These are required for core website functionality such as form submission security and session management. These cannot be disabled without affecting website function.' },
            { h: 'Third-Party Cookies', p: 'We do not knowingly allow third-party advertising or tracking cookies. If third-party services are integrated in the future (such as contact form providers), their cookie practices will be disclosed here.' },
            { h: 'Managing Cookies', p: 'You may control or delete cookies through your browser settings. Note that disabling essential cookies may impact website functionality. Instructions for managing cookies vary by browser — please consult your browser\'s help documentation.' },
            { h: 'Updates', p: 'We may update this Cookie Policy as our website evolves. The revised date at the top of this page will reflect any changes.' },
            { h: 'Contact', p: 'For questions about our cookie practices, contact [email@urbanpulsewholesale.com].' },
          ].map(({ h, p }) => (
            <div key={h}>
              <h2 className="text-navy font-serif text-xl mb-3">{h}</h2>
              <p className="text-charcoal-light">{p}</p>
            </div>
          ))}
        </div>
      </div></section>
    </div>
  )
}
