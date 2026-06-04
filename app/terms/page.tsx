import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Terms of Service' }
export default function TermsPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-16"><div className="max-w-content mx-auto px-6"><h1 className="text-display-sm text-white mb-3">Terms of Service</h1><p className="text-white/60">Last updated: [Date Placeholder]</p></div></section>
      <section className="section bg-white"><div className="max-w-3xl mx-auto px-6">
        <div className="space-y-8 text-charcoal-light leading-relaxed">
          {[
            { h: 'Acceptance of Terms', p: 'By accessing or using the Urban Pulse Wholesale LLC website, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.' },
            { h: 'Website Purpose', p: 'This website is intended to provide information about Urban Pulse Wholesale LLC\'s business operations and to facilitate inquiries from potential and existing wholesale supplier partners. It is not a consumer-facing retail website.' },
            { h: 'Accuracy of Information', p: 'We strive to provide accurate and current information on this website. Business details, contact information, and operational descriptions reflect our current practices to the best of our knowledge. Placeholders marked as such indicate information to be updated.' },
            { h: 'Intellectual Property', p: 'All content on this website, including text, design, and graphics, is the property of Urban Pulse Wholesale LLC unless otherwise noted. Unauthorized reproduction or distribution is prohibited.' },
            { h: 'No Guarantees', p: 'Nothing on this website constitutes a guarantee of business outcomes, order volumes, or partnership terms. All business relationships are subject to negotiation and written agreement.' },
            { h: 'Links', p: 'This website may contain links to third-party sites. We are not responsible for the content or practices of those sites.' },
            { h: 'Limitation of Liability', p: 'Urban Pulse Wholesale LLC shall not be liable for any damages arising from use of or inability to use this website or its content.' },
            { h: 'Governing Law', p: 'These Terms are governed by the laws of the state of [State Placeholder], without regard to conflict of law provisions.' },
            { h: 'Contact', p: 'Questions about these Terms may be directed to [email@urbanpulsewholesale.com].' },
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
