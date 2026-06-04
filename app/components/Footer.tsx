import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#080f1e] text-white">
      <div className="max-w-content mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-accent rounded flex items-center justify-center font-serif text-navy font-bold text-lg" style={{fontFamily:'DM Serif Display,serif'}}>UP</div>
              <div>
                <div className="text-white font-semibold text-sm tracking-wide">Urban Pulse Wholesale LLC</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Professional wholesale distribution and Amazon FBA operations. Building lasting supplier partnerships through transparency and reliability.
            </p>
            <a href="https://www.linkedin.com/company/[placeholder]" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent text-sm hover:text-accent-light transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn [Placeholder]
            </a>
          </div>

          {/* Pages */}
          <div>
            <div className="text-white font-semibold text-xs tracking-[0.12em] uppercase mb-4">Company</div>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/about', 'About Us'], ['/partnerships', 'Wholesale Partnerships'], ['/fba-operations', 'FBA Operations'], ['/supplier-info', 'Supplier Information'], ['/contact', 'Contact']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-white/55 hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Suppliers */}
          <div>
            <div className="text-white font-semibold text-xs tracking-[0.12em] uppercase mb-4">For Suppliers</div>
            <ul className="space-y-2.5">
              {[['/supplier-info', 'New Supplier Inquiry'], ['/supplier-info#onboarding', 'Onboarding Process'], ['/supplier-info#documentation', 'Documentation'], ['/partnerships', 'Partnership Philosophy'], ['/fba-operations', 'How We Operate']].map(([href, label]) => (
                <li key={href}><Link href={href} className="text-white/55 hover:text-white text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold text-xs tracking-[0.12em] uppercase mb-4">Contact</div>
            <ul className="space-y-3 text-sm text-white/55">
              <li className="flex gap-2.5 items-start">
                <span className="text-accent mt-0.5">✉</span>
                <span>[email@urbanpulsewholesale.com]</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-accent mt-0.5">✆</span>
                <span>[Phone Number Placeholder]</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-accent mt-0.5">⊙</span>
                <span>[Business Address Placeholder]</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="text-accent mt-0.5">◷</span>
                <span>Mon–Fri: 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © {year} Urban Pulse Wholesale LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[['/privacy', 'Privacy Policy'], ['/terms', 'Terms of Service'], ['/cookies', 'Cookie Policy']].map(([href, label]) => (
              <Link key={href} href={href} className="text-white/35 hover:text-white/70 text-xs transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
