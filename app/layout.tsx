import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const SITE = 'https://www.urbanpulsewholesale.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:  'Urban Pulse Wholesale LLC | Fragrance & Beauty Wholesale Distributor — Michigan',
    template: '%s | Urban Pulse Wholesale',
  },
  description:
    'Urban Pulse Wholesale LLC is a Michigan-registered wholesale distributor specializing in fragrance, perfume and beauty. Authorized accounts only, MAP compliant, Amazon Dangerous Goods and FDA cosmetic labeling literate.',
  keywords: [
    'wholesale fragrance distributor',
    'wholesale perfume distributor',
    'authorized fragrance wholesale account',
    'wholesale beauty distributor',
    'wholesale cosmetics distributor',
    'oud and attar wholesale',
    'niche fragrance wholesale USA',
    'MAP compliant fragrance reseller',
    'authorized reseller perfume',
    'Amazon dangerous goods fragrance compliance',
    'wholesale personal care distributor',
    'B2B fragrance sourcing',
    'wholesale distributor Warren MI',
    'Michigan fragrance wholesaler',
    'Urban Pulse Wholesale',
  ],
  authors: [{ name: 'Urban Pulse Wholesale LLC' }],
  creator: 'Urban Pulse Wholesale LLC',
  publisher: 'Urban Pulse Wholesale LLC',
  category: 'Wholesale Distribution',
  icons: {
    icon: [
      { url: '/favicon.ico',  sizes: 'any' },
      { url: '/icon.svg',     type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type:     'website',
    locale:   'en_US',
    url:      SITE,
    siteName: 'Urban Pulse Wholesale',
    title:    'Urban Pulse Wholesale LLC | Fragrance & Beauty Wholesale Distributor',
    description:
      'Michigan-registered wholesale distributor specializing in fragrance, perfume and beauty. Authorized accounts only. MAP compliant.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Urban Pulse Wholesale — Fragrance & Beauty Wholesale Distribution' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Urban Pulse Wholesale LLC | Fragrance & Beauty Wholesale Distributor',
    description: 'Michigan-registered wholesale distributor for fragrance, perfume and beauty. Authorized accounts only. MAP compliant.',
    images:      ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: SITE },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${SITE}/#organization`,
    name: 'Urban Pulse Wholesale LLC',
    legalName: 'Urban Pulse Wholesale LLC',
    url: SITE,
    logo: `${SITE}/icon-512.png`,
    image: `${SITE}/og-image.jpg`,
    description:
      'Michigan-registered wholesale distribution company specializing in fragrance, perfume and beauty. Sources exclusively from brands and authorized distributors. MAP compliant, authorized accounts only.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warren',
      addressRegion: 'MI',
      postalCode: '48093',
      addressCountry: 'US',
    },
    telephone: '+15862008750',
    email: 'support@urbanpulsewholesale.com',
    areaServed: { '@type': 'Country', name: 'United States' },
    openingHoursSpecification: [{
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    }],
    contactPoint: [{
      '@type': 'ContactPoint',
      contactType: 'Wholesale & supplier inquiries',
      telephone: '+15862008750',
      email: 'support@urbanpulsewholesale.com',
      areaServed: 'US',
      availableLanguage: ['English'],
    }],
    sameAs: ['https://linkedin.com/company/urban-pulse-wholesale'],
    knowsAbout: [
      'Wholesale fragrance distribution',
      'Wholesale perfume distribution',
      'Oud and attar sourcing',
      'Niche and designer fragrance wholesale',
      'Wholesale beauty and personal care distribution',
      'Authorized reseller agreements',
      'MAP compliant pricing',
      'Amazon Dangerous Goods and SDS compliance',
      'FDA cosmetic labeling requirements',
      'B2B product sourcing',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    name: 'Urban Pulse Wholesale LLC',
    url: SITE,
    publisher: { '@id': `${SITE}/#organization` },
    inLanguage: 'en-US',
    description:
      'Michigan-registered wholesale distributor of fragrance, perfume and beauty products. Authorized accounts only. MAP compliant.',
  }

  // ─── GA4 Measurement ID ───────────────────────────────────────────────────
  const GA_ID = 'G-0F9LGHPQD2'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />

        {/* ── Google Analytics 4 ── */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
                send_page_view: true
              });
            `,
          }}
        />

        {/* ── Google Search Console Verification ── */}
        {/* Replace content value with your GSC verification token */}
        {/* <meta name="google-site-verification" content="YOUR_GSC_TOKEN_HERE" /> */}

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
