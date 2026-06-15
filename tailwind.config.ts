import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware: driven by CSS variables set in globals.css, so these
        // classes follow NEXT_PUBLIC_THEME. The vars are comma-separated RGB
        // triplets, so use legacy rgba(...) — `rgb(var() / <alpha-value>)` would
        // emit invalid `rgb(10, 10, 10 / 1)`. <alpha-value> keeps `/opacity`.
        ink: 'rgba(var(--bg-rgb), <alpha-value>)',
        surface: 'rgba(var(--panel2-rgb), <alpha-value>)',
        gold: {
          DEFAULT: 'rgba(var(--gold-rgb), <alpha-value>)',
          light: '#E8D5A3',
          dark: '#A07840',
        },
        cream: 'rgba(var(--text-rgb), <alpha-value>)',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
