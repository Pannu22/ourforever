import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter, Jost, Noto_Serif_Gurmukhi } from 'next/font/google'
import { COUPLE, SITE_URL } from '@/lib/events'
import { WEDDING_DATE_RANGE } from '@/lib/catalog'
import { DEFAULT_THEME } from '@/lib/themes'
import './globals.css'
import './invite.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-inter',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jost',
  display: 'swap',
})

// For the ੴ (Ik Onkar) glyph
const gurmukhi = Noto_Serif_Gurmukhi({
  subsets: ['gurmukhi'],
  weight: ['500'],
  variable: '--font-gurmukhi',
  display: 'swap',
})

const title = `${COUPLE.bride} & ${COUPLE.groom} — Our Forever`
const description = `Join us to celebrate our wedding — ${WEDDING_DATE_RANGE}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme={DEFAULT_THEME}
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${jost.variable} ${gurmukhi.variable}`}
    >
      <body className="bg-ink text-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
