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
  description: 'Urban Pulse Wholesale LLC is a professional wholesale distributor and Amazon FBA seller, partnering with brands, manufacturers, and distributors to build long-term, mutually beneficial relationships.',
  keywords: ['wholesale distribution', 'Amazon FBA', 'wholesale supplier', 'brand partnerships', 'e-commerce wholesale', 'wholesale buyer'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.urbanpulsewholesale.com',
    siteName: 'Urban Pulse Wholesale LLC',
    title: 'Urban Pulse Wholesale LLC | Professional Wholesale Distribution & Amazon FBA',
    description: 'Building strong wholesale partnerships for long-term growth. Urban Pulse Wholesale LLC partners with brands and distributors through professional, transparent business practices.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Urban Pulse Wholesale LLC',
    description: 'Professional wholesale distribution and Amazon FBA operations.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Urban Pulse Wholesale LLC",
              "description": "Professional wholesale distribution and Amazon FBA operations company.",
              "url": "https://www.urbanpulsewholesale.com",
              "email": "email@urbanpulsewholesale.com",
              "address": { "@type": "PostalAddress", "addressCountry": "US" },
              "sameAs": ["https://www.linkedin.com/company/urban-pulse-wholesale"]
            })
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
