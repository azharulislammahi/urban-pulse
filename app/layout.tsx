import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.urbanpulsewholesale.com'),
  title: {
    default:  'Urban Pulse Wholesale LLC | Professional Wholesale Distributor — Michigan',
    template: '%s | Urban Pulse Wholesale',
  },
  description: 'Urban Pulse Wholesale LLC is a Michigan-based wholesale distribution company sourcing authorized products across Fragrance, Home & Kitchen, Pet Supplies, Health & Wellness, and more. MAP compliant. Authorized accounts only.',
  keywords: [
    'wholesale distributor Michigan',
    'authorized wholesale buyer',
    'wholesale distribution company',
    'B2B wholesale supplier',
    'MAP compliant wholesale',
    'wholesale fragrance distributor',
    'wholesale home kitchen distributor',
    'wholesale pet supplies distributor',
    'wholesale health wellness',
    'Urban Pulse Wholesale',
    'authorized brand wholesaler',
    'multi-channel wholesale distributor',
    'wholesale distribution Warren MI',
    'authorized wholesale accounts',
    'B2B product sourcing',
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
    title:       'Urban Pulse Wholesale LLC | Professional Wholesale Distributor — Michigan',
    description: 'Michigan-based wholesale distribution company specializing in Fragrance, Home & Kitchen, Pet Supplies, Health & Wellness, Grocery, and Sports. MAP compliant. Authorized accounts only.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Urban Pulse Wholesale — Professional Wholesale Distributor' }],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Urban Pulse Wholesale LLC | Professional Wholesale Distributor — Michigan',
    description: 'Michigan-based wholesale distribution company. Fragrance, Home & Kitchen, Pet Supplies, Health & Wellness, and more. MAP compliant. Authorized accounts only.',
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
    '@type':    ['Organization', 'LocalBusiness'],
    name:       'Urban Pulse Wholesale LLC',
    legalName:  'Urban Pulse Wholesale LLC',
    url:        'https://www.urbanpulsewholesale.com',
    logo:       'https://www.urbanpulsewholesale.com/icon-512.png',
    description: 'Michigan-based wholesale distribution company sourcing authorized products across Fragrance, Home & Kitchen, Pet Supplies, Health & Wellness, Grocery, and Sports. MAP compliant.',
    address: {
      '@type':           'PostalAddress',
      streetAddress:     'Warren, MI',
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
      'Wholesale distribution',
      'Authorized brand wholesale accounts',
      'MAP compliant pricing',
      'B2B product sourcing',
      'Fragrance wholesale distribution',
      'Pet supplies wholesale',
      'Home and kitchen wholesale',
    ],
  }

  const websiteSchema = {
    '@context':        'https://schema.org',
    '@type':           'WebSite',
    name:              'Urban Pulse Wholesale LLC',
    url:               'https://www.urbanpulsewholesale.com',
    description:       'Michigan-based professional wholesale distributor — Fragrance, Home & Kitchen, Pet Supplies, Health & Wellness, Grocery, and Sports.',
    potentialAction: {
      '@type':         'SearchAction',
      target:          'https://www.urbanpulsewholesale.com/catalog?q={search_term_string}',
      'query-input':   'required name=search_term_string',
    },
  }

  // ─── GA4 Measurement ID ───────────────────────────────────────────────────
  // Replace G-XXXXXXXXXX with your real GA4 Measurement ID from analytics.google.com
  const GA_ID = 'G-0F9LGHPQD2'

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
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
