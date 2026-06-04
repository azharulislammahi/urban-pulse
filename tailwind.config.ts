import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f2044',
          mid: '#1a3260',
          light: '#243d73',
          50: '#e8edf5',
        },
        charcoal: {
          DEFAULT: '#2c3e50',
          light: '#4a5568',
        },
        accent: {
          DEFAULT: '#c8a84b',
          light: '#e2c97a',
          dark: '#a8882f',
        },
        offwhite: '#f7f8fa',
      },
      fontFamily: {
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.1' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15,32,68,0.08)',
        'card-hover': '0 12px 40px rgba(15,32,68,0.14)',
      },
    },
  },
  plugins: [],
}
export default config
