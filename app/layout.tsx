import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import { SITE_URL } from '@/lib/events'
import './globals.css'

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Simran & Ravinder — Our Forever',
  description: 'Join us to celebrate our wedding — 16–18 November 2026',
  openGraph: {
    title: 'Simran & Ravinder — Our Forever',
    description: 'Join us to celebrate our wedding — 16–18 November 2026',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Simran & Ravinder — Our Forever',
    description: 'Join us to celebrate our wedding — 16–18 November 2026',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body className="bg-ink text-cream antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
