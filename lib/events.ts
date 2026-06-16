// Client-safe constants and types ONLY. The full event catalog lives in
// lib/catalog.ts (server-only) so non-invited functions can never leak into the
// browser bundle. Keep this module free of the EVENTS array.

// UPDATE: Replace bride, groom, family names, venues before publishing
export const COUPLE = {
  bride: 'Harpreet Kaur',
  groom: 'Narpinder Singh',
  brideFamily: 'The Dhillon Family',
  groomFamily: 'The Pannu Family',
  monogram: 'H & N',
}

export type WeddingEvent = {
  id: string
  name: string
  subtitle: string
  displayDate: string
  displayTime: string
  isoDate: string
  venue: string
  mapUrl?: string
  description: string
}

// Absolute site URL — required so share-card (OG) images unfurl on
// WhatsApp/iMessage. Set NEXT_PUBLIC_SITE_URL in Vercel; falls back to
// this placeholder for local dev. UPDATE the placeholder before publishing.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ourforever.vercel.app'