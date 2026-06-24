import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.urbanpulsewholesale.com'
  const now  = new Date()

  return [
    { url: base,                      lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/about`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/catalog`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/categories`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fba-operations`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/partnerships`,    lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/supplier-info`,   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${base}/privacy`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/terms`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${base}/cookies`,         lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
