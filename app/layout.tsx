import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.urbanpulsewholesale.com'),
  title: {
    default: 'Urban Pulse Wholesale LLC | Professional Wholesale Distribution & Amazon FBA',
    template: '%s | Urban Pulse Wholesale LLC',
  },
  description: 'Urban Pulse Wholesale LLC — professional wholesale distribution and Amazon FBA operations. We partner with brands, manufacturers, and distributors to build long-term wholesale relationships.',
  keywords: ['wholesale distribution', 'Amazon FBA', 'wholesale supplier', 'brand partnerships', 'e-commerce wholesale'],
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
          "description": "Professional wholesale distribution and Amazon FBA operations.",
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
