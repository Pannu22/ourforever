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
  description: string
}

export const EVENTS: WeddingEvent[] = [
  {
    id: 'shagan',
    name: 'Shagan',
    subtitle: 'Ceremony',
    displayDate: '26 November 2026',
    displayTime: '11:00 AM',
    isoDate: '2026-11-26T11:00:00+05:30',
    venue: 'Venue, City', // UPDATE
    description: 'Begin our journey together with blessings, gifts, and boundless joy shared with those we love.',
  },
  // {
  //   id: 'dj-night',
  //   name: 'DJ Night',
  //   subtitle: 'Celebration',
  //   displayDate: '4 November 2026',
  //   displayTime: '7:00 PM',
  //   isoDate: '2026-11-04T19:00:00+05:30',
  //   venue: 'Venue, City', // UPDATE
  //   description: 'Dance the night away as we celebrate love, music, and the beautiful memories ahead.',
  // },
  // {
  //   id: 'jago',
  //   name: 'Jago',
  //   subtitle: 'Night of Joy',
  //   displayDate: '5 November 2026',
  //   displayTime: '8:00 PM',
  //   isoDate: '2026-11-05T20:00:00+05:30',
  //   venue: 'Venue, City', // UPDATE
  //   description: 'An evening of song, laughter, and cherished traditions shared with our dearest ones.',
  // },
  {
    id: 'anand-karaj',
    name: 'Anand Karaj',
    subtitle: 'The Wedding',
    displayDate: '28 November 2026',
    displayTime: '10:00 AM',
    isoDate: '2026-11-28T11:00:00+05:30',
    venue: 'Venue, City', // UPDATE
    description: 'In the holy presence of the Guru Granth Sahib, we shall take our sacred vows.',
  },
]

// IST (+05:30) offset makes this an absolute instant, so the countdown is
// identical for guests in every timezone. UPDATE the offset if the wedding
// is not in India.
export const WEDDING_DATE_ISO = '2026-11-28T10:00:00+05:30'

// Displayed date range, derived from the events so the landing/share copy can
// never drift from the event data. Compacts to "26 — 28 November 2026" when the
// first and last events share a month and year, else "<first> — <last>".
function formatDateRange(events: WeddingEvent[]): string {
  const first = events[0].displayDate
  const last = events[events.length - 1].displayDate
  const [firstDay, firstMonth, firstYear] = first.split(' ')
  const [, lastMonth, lastYear] = last.split(' ')
  if (firstMonth === lastMonth && firstYear === lastYear) {
    return `${firstDay} — ${last}`
  }
  return `${first} — ${last}`
}

export const WEDDING_DATE_RANGE = formatDateRange(EVENTS)

// The main ceremony — the event that matches the countdown's target instant.
export const WEDDING_EVENT =
  EVENTS.find((e) => e.isoDate === WEDDING_DATE_ISO) ?? EVENTS[EVENTS.length - 1]

// Absolute site URL — required so share-card (OG) images unfurl on
// WhatsApp/iMessage. Set NEXT_PUBLIC_SITE_URL in Vercel; falls back to
// this placeholder for local dev. UPDATE the placeholder before publishing.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ourforever.vercel.app'
