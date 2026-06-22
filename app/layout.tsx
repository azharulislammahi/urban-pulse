import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.urbanpulsewholesale.com'),
  title: {
    default: 'Urban Pulse Wholesale LLC | Authorized Amazon FBA Wholesale Distributor — Warren, Michigan',
    template: '%s | Urban Pulse Wholesale LLC',
  },
  description: 'Urban Pulse Wholesale LLC is a Michigan-based authorized wholesale distributor operating on Amazon FBA. We source from licensed brands in fragrance, home & kitchen, pet supplies, health & wellness, and more. MAP compliant. LLC registered.',
  keywords: ['wholesale distributor Michigan', 'Amazon FBA wholesale', 'authorized brand wholesaler', 'fragrance wholesale distributor', 'wholesale account Amazon', 'Urban Pulse Wholesale', 'Warren Michigan wholesale', 'Amazon FBA distributor', 'brand wholesale partner'],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.urbanpulsewholesale.com',
    siteName: 'Urban Pulse Wholesale LLC',
    description: 'Michigan-based authorized wholesale distributor specializing in fragrance, home & kitchen, pet supplies, and more. Amazon FBA. MAP compliant.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Urban Pulse Wholesale LLC",
          "url": "https://www.urbanpulsewholesale.com",
          "description": "Michigan-based authorized wholesale distributor operating on Amazon FBA. Specializing in fragrance, home & kitchen, pet supplies, health & wellness, and more.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Warren",
            "addressRegion": "MI",
            "postalCode": "48093",
            "addressCountry": "US"
          },
          "telephone": "+15862008750",
          "email": "support@urbanpulsewholesale.com",
          "areaServed": "US",
          "sameAs": ["https://linkedin.com/company/urban-pulse-wholesale"]
        })}} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
