import productsJson from './products.json'

export type Product = {
  slug: string
  name: string
  arabic: string | null
  top: string[]
  heart: string[]
  base: string[]
  size: string | null
  gender: string | null
  description: string | null
  hero: boolean
  image: string
  w: number
  h: number
}

export type House = {
  slug: string
  name: string
  arabic: string
  origin: string
  founded: string
  line: string
  standfirst: string
  story: string[]
  products: Product[]
}

const products = productsJson as unknown as Record<string, Product[]>

const meta: Omit<House, 'products'>[] = [
  {
    slug: 'lattafa',
    name: 'Lattafa',
    arabic: 'لطافة',
    origin: 'United Arab Emirates',
    founded: 'Founded 1995, Sharjah',
    line: 'Modern Arabian perfumery at scale',
    standfirst:
      'The house that made Arabian perfumery legible to the rest of the world.',
    story: [
      'Lattafa takes its name from the Arabic latif — gentle, pleasant. It was founded in the mid-1990s by Shaikh Shahid Ahmed, at a moment when the Gulf market was turning toward European houses, on the contrarian bet that Arabic perfumery could be made for a modern audience without being diluted for one.',
      'Three decades later it is one of the most widely worn perfume houses in the world, manufactured in the Emirates and distributed across more than sixty markets. Its signatures — Asad, Yara, Khamrah, Bade’e Al Oud — are the fragrances that introduced oud, amber and saffron to a generation who had never encountered them.',
      'For a distributor the appeal is unusual: campaign photography and packaging built to a level normally reserved for luxury houses, sitting on a price architecture that moves genuine volume.',
    ],
  },
  {
    slug: 'ard-al-zaafaran',
    name: 'Ard Al Zaafaran',
    arabic: 'أرض الزعفران',
    origin: 'United Arab Emirates',
    founded: 'Founded 2000, Dubai',
    line: 'Saffron traders turned perfumers',
    standfirst:
      'A house that began in the spice trade and never stopped thinking like it.',
    story: [
      'The name means “land of saffron.” The company began in the 1990s trading saffron itself — the most expensive spice in the world, bought and sold by weight, where provenance is everything and adulteration is the constant risk. Perfume came second, in 2000, out of the same instinct for rare material.',
      'That inheritance is still visible in the work. Ard Al Zaafaran builds around identifiable raw material rather than abstraction, and prints the full note pyramid on every product it sells — a small thing, but not a common one.',
      'The range now reaches over seventy markets, spanning eau de parfum, concentrated perfume oil, bukhoor, hair mist and body care built on the same accords.',
    ],
  },
  {
    slug: 'riiffs',
    name: 'RiiFFS',
    arabic: 'ريفس',
    origin: 'United Arab Emirates',
    founded: 'Contemporary Arabian house',
    line: 'Narrative perfumery, told in full',
    standfirst:
      'The house that writes the story on the page before it writes the note list.',
    story: [
      'RiiFFS is the youngest of the three and the most explicitly literary. Every fragrance in its catalogue arrives with a written scene attached — a rising sun, a room entered, a desert horizon — before a single note is declared.',
      'Compositionally it sits where a lot of contemporary Arabian perfumery is heading: oud and saffron held against gourmand and fresh accords, built for wear rather than for ceremony.',
      'Its presentation is the most consistent of any catalogue we work with — one product, one photograph, one story, no clutter.',
    ],
  },
]

export const houses: House[] = meta.map(m => ({
  ...m,
  products: products[m.slug] ?? [],
}))

export const houseBySlug = (slug: string) => houses.find(h => h.slug === slug)

export const heroes = (h: House) => h.products.filter(p => p.hero)

/** Houses named in copy but not represented with product imagery. */
export const alsoSourced = [
  { name: 'Paris Corner', arabic: 'باريس كورنر', note: 'Deira, Dubai — Emir, Ministry of Oud, Pendora Scents' },
]
