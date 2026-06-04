# Urban Pulse Wholesale LLC — Website

A complete, production-ready Next.js 14 website for Urban Pulse Wholesale LLC.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom CSS variables
- **Fonts:** DM Serif Display + DM Sans (Google Fonts)

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/partnerships` | Wholesale Partnerships |
| `/fba-operations` | Amazon FBA Operations |
| `/supplier-info` | Supplier Information & Inquiry Form |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |

## Project Structure
```
app/
├── layout.tsx          # Root layout (Navbar, Footer, SEO)
├── globals.css         # Design system, CSS variables, utilities
├── page.tsx            # Home page
├── about/page.tsx
├── partnerships/page.tsx
├── fba-operations/page.tsx
├── supplier-info/page.tsx
├── contact/page.tsx
├── privacy/page.tsx
├── terms/page.tsx
├── cookies/page.tsx
└── components/
    ├── Navbar.tsx      # Sticky responsive nav
    └── Footer.tsx      # Full sitemap footer
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Production build
npm start         # Start production server
```

## Deployment

### Vercel (Recommended — Free tier available)
1. Push to GitHub
2. Connect repo at vercel.com
3. Deploy (zero config needed — Next.js auto-detected)

### Netlify
1. `npm run build`
2. Deploy the `.next` folder with Next.js adapter

### Self-Hosted
1. `npm run build`
2. `npm start` (runs on port 3000)
3. Use nginx/Caddy as reverse proxy

## Before Launch — Fill In Placeholders
Search for `[placeholder]` and `[Placeholder]` throughout the codebase:

- `[email@urbanpulsewholesale.com]` — real business email
- `[Phone Number Placeholder]` — business phone
- `[Business Address Placeholder]` — business mailing address
- `[State Placeholder]` in Terms of Service — state of registration
- `[Date Placeholder]` in legal pages — effective dates
- LinkedIn URL in Navbar and Footer

## Design System
Colors defined in CSS variables (`globals.css`):
- `--navy: #0f2044` — primary brand navy
- `--accent: #c8a84b` — gold accent
- `--charcoal: #2c3e50` — body text
- `--offwhite: #f7f8fa` — section backgrounds

## Important Notes
- No fake reviews, testimonials, or certifications included (per requirements)
- All placeholder text is clearly marked with brackets
- Forms are UI-only; connect to your preferred backend (Formspree, Resend, AWS SES, etc.)
- SEO metadata included on all pages
- Schema.org Organization markup in layout
- Mobile-first responsive design
- Accessible color contrast throughout
