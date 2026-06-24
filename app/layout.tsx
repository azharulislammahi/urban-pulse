import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.urbanpulsewholesale.com'),
  title: {
    default:  'Urban Pulse Wholesale | Authorized Amazon FBA Wholesale Distributor',
    template: '%s | Urban Pulse Wholesale',
  },
  description: 'Urban Pulse Wholesale is an authorized wholesale distributor operating on Amazon FBA. We source from licensed brands in pet supplies, fragrance, home & kitchen, health & wellness, grocery, and sports. MAP compliant. Authorized channels only.',
  keywords: [
    'wholesale distributor Amazon FBA',
    'authorized wholesale distributor',
    'Amazon FBA wholesale',
    'buy wholesale products Amazon',
    'wholesale pet supplies Amazon',
    'wholesale fragrance distributor',
    'wholesale home kitchen Amazon',
    'wholesale health wellness Amazon',
    'Urban Pulse Wholesale',
    'authorized brand wholesaler',
    'MAP compliant wholesale',
    'FBA wholesale distributor',
    'brand authorized wholesale buyer',
    'Amazon wholesale account',
    'wholesale supplier inquiry',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico',    sizes: 'any' },
      { url: '/icon.svg',       type: 'image/svg+xml' },
      { url: '/icon-192.png',   sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png',   sizes: '512x512', type: 'image/png' },
    ],
    apple:    [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://www.urbanpulsewholesale.com',
    siteName:    'Urban Pulse Wholesale',
    title:       'Urban Pulse Wholesale | Authorized Amazon FBA Wholesale Distributor',
    description: 'Authorized wholesale distributor specializing in pet supplies, fragrance, home & kitchen, health & wellness, grocery, and sports. Amazon FBA. MAP compliant.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Urban Pulse Wholesale — Authorized Amazon FBA Distributor' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Urban Pulse Wholesale | Authorized Amazon FBA Wholesale Distributor',
    description: 'Authorized wholesale distributor operating on Amazon FBA. Pet supplies, fragrance, home & kitchen, health & wellness, and more.',
    images:      ['/og-image.jpg'],
  },
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:           true,
      follow:          true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':   -1,
    },
  },
  alternates: { canonical: 'https://www.urbanpulsewholesale.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type':    'Organization',
    name:       'Urban Pulse Wholesale',
    legalName:  'Urban Pulse Wholesale LLC',
    url:        'https://www.urbanpulsewholesale.com',
    logo:       'https://www.urbanpulsewholesale.com/icon-512.png',
    description: 'Authorized wholesale distributor operating on Amazon FBA. Specializing in pet supplies, fragrance, home & kitchen, health & wellness, grocery, and sports.',
    address: {
      '@type':           'PostalAddress',
      addressLocality:   'Warren',
      addressRegion:     'MI',
      postalCode:        '48093',
      addressCountry:    'US',
    },
    telephone:   '+15862008750',
    email:       'support@urbanpulsewholesale.com',
    areaServed:  'US',
    sameAs:      ['https://linkedin.com/company/urban-pulse-wholesale'],
    knowsAbout:  [
      'Amazon FBA wholesale distribution',
      'Authorized brand wholesale',
      'MAP compliant pricing',
      'Pet supplies wholesale',
      'Fragrance wholesale distribution',
    ],
  }

  const websiteSchema = {
    '@context':        'https://schema.org',
    '@type':           'WebSite',
    name:              'Urban Pulse Wholesale',
    url:               'https://www.urbanpulsewholesale.com',
    description:       'Authorized Amazon FBA wholesale distributor — pet supplies, fragrance, home & kitchen, health & wellness, grocery, sports.',
    potentialAction: {
      '@type':         'SearchAction',
      target:          'https://www.urbanpulsewholesale.com/catalog?q={search_term_string}',
      'query-input':   'required name=search_term_string',
    },
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema)     }} />
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
