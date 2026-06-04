import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Privacy Policy' }
export default function PrivacyPage() {
  return (
    <div className="page-enter">
      <section className="hero-bg pt-36 pb-16"><div className="max-w-content mx-auto px-6"><h1 className="text-display-sm text-white mb-3">Privacy Policy</h1><p className="text-white/60">Last updated: [Date Placeholder]</p></div></section>
      <section className="section bg-white"><div className="max-w-3xl mx-auto px-6 prose prose-slate max-w-none">
        <div className="space-y-8 text-charcoal-light leading-relaxed">
          {[
            { h: 'Overview', p: 'Urban Pulse Wholesale LLC ("we," "us," or "our") respects the privacy of our business contacts and website visitors. This Privacy Policy explains how we collect, use, and protect information provided through our website at www.urbanpulsewholesale.com.' },
            { h: 'Information We Collect', p: 'We collect information you voluntarily provide through our contact and inquiry forms, including: name, company name, business email address, phone number, and message content. We do not collect payment information through this website.' },
            { h: 'How We Use Your Information', p: 'Information submitted through our forms is used solely to respond to your inquiry and facilitate business communication. We do not sell, rent, or share your information with third parties for marketing purposes.' },
            { h: 'Data Storage & Security', p: 'We implement reasonable technical and organizational measures to protect submitted information. Form submissions are processed securely. We retain contact information only as long as necessary to fulfill business communication purposes.' },
            { h: 'Cookies', p: 'This website may use minimal cookies to support basic website functionality. We do not use tracking or advertising cookies. See our Cookie Policy for details.' },
            { h: 'Your Rights', p: 'You may request access to, correction of, or deletion of information you have submitted to us by contacting us at [email@urbanpulsewholesale.com]. We will respond to such requests within a reasonable time.' },
            { h: 'Changes to This Policy', p: 'We may update this Privacy Policy periodically. Updates will be reflected by a revised date on this page.' },
            { h: 'Contact', p: 'For questions about this Privacy Policy, contact us at [email@urbanpulsewholesale.com].' },
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
