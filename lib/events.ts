// UPDATE: Replace bride, groom, family names, venues before publishing
export const COUPLE = {
  bride: 'Simran',
  groom: 'Ravinder',
  brideFamily: 'The Kaur Family',
  groomFamily: 'The Singh Family',
  monogram: 'S & R',
}

export type WeddingEvent = {
  id: string
  name: string
  subtitle: string
  displayDate: string
  displayTime: string
  isoDate: string
  venue: string
  description: string
}

export const EVENTS: WeddingEvent[] = [
  {
    id: 'shagan',
    name: 'Shagan',
    subtitle: 'Ceremony',
    displayDate: '16 November 2026',
    displayTime: '11:00 AM',
    isoDate: '2026-11-16T11:00:00',
    venue: 'Venue, City', // UPDATE
    description: 'Begin our journey together with blessings, gifts, and boundless joy shared with those we love.',
  },
  {
    id: 'dj-night',
    name: 'DJ Night',
    subtitle: 'Celebration',
    displayDate: '16 November 2026',
    displayTime: '7:00 PM',
    isoDate: '2026-11-16T19:00:00',
    venue: 'Venue, City', // UPDATE
    description: 'Dance the night away as we celebrate love, music, and the beautiful memories ahead.',
  },
  {
    id: 'jago',
    name: 'Jago',
    subtitle: 'Night of Joy',
    displayDate: '17 November 2026',
    displayTime: '8:00 PM',
    isoDate: '2026-11-17T20:00:00',
    venue: 'Venue, City', // UPDATE
    description: 'An evening of song, laughter, and cherished traditions shared with our dearest ones.',
  },
  {
    id: 'anand-karaj',
    name: 'Anand Karaj',
    subtitle: 'The Wedding',
    displayDate: '18 November 2026',
    displayTime: '11:00 AM',
    isoDate: '2026-11-18T11:00:00',
    venue: 'Venue, City', // UPDATE
    description: 'In the holy presence of the Guru Granth Sahib, we shall take our sacred vows.',
  },
]

export const WEDDING_DATE_ISO = '2026-11-18T11:00:00'

// Absolute site URL — required so share-card (OG) images unfurl on
// WhatsApp/iMessage. Set NEXT_PUBLIC_SITE_URL in Vercel; falls back to
// this placeholder for local dev. UPDATE the placeholder before publishing.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ourforever.vercel.app'
