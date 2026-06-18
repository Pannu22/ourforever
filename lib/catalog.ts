import 'server-only'
import type { WeddingEvent } from '@/lib/events'

// FULL event catalog — the source of truth for every function. This module is
// server-only: it must never be imported by a client component, or the entire
// list (including functions a guest was not invited to) would ship to the
// browser. Per-guest filtering happens in lib/invites.ts; the server passes
// only the resulting subset down as props.

export const EVENTS: WeddingEvent[] = [
  {
    id: 'shagan',
    name: 'Shagan',
    subtitle: 'Ceremony',
    displayDate: '26 November 2026',
    displayTime: '11:00 AM',
    isoDate: '2026-11-26T11:00:00+05:30',
    venue: 'Gurudwara Shri Guru Singh Sabha, Kharghar',
    mapUrl: 'https://maps.app.goo.gl/fbXuBxNJ5jeQp8gQ9',
    description: 'Begin our journey together with blessings, and boundless joy shared with those we love.',
  },
  {
    id: 'jago',
    name: 'Jago',
    subtitle: 'Night of Joy',
    displayDate: '26 November 2026',
    displayTime: '7:00 PM',
    isoDate: '2026-11-26T17:00:00+05:30',
    venue: 'Emerald Heights, Kalamboli',
    mapUrl: 'https://maps.app.goo.gl/9GYHhx45p8z7nwzL9',
    description: 'An evening of song, laughter, and cherished traditions shared with our dearest ones.',
  },
  {
    id: 'dj-night1',
    name: 'DJ Night',
    subtitle: 'Celebration',
    displayDate: '27 November 2026',
    displayTime: '7:00 PM',
    isoDate: '2026-11-27T19:00:00+05:30',
    venue: 'Emerald Heights, Kalamboli',
    mapUrl: 'https://maps.app.goo.gl/9GYHhx45p8z7nwzL9',
    description: 'Dance the night away as we celebrate love, music, and the beautiful memories ahead.',
  },
  {
    id: 'anand-karaj',
    name: 'Anand Karaj',
    subtitle: 'The Wedding',
    displayDate: '28 November 2026',
    displayTime: '10:00 AM',
    isoDate: '2026-11-28T10:00:00+05:30',
    venue: 'Gurudwara Shri Guru Singh Sabha, Kharghar',
    mapUrl: 'https://maps.app.goo.gl/fbXuBxNJ5jeQp8gQ9',
    description: 'In the holy presence of the Guru Granth Sahib, we shall take our sacred vows.',
  },
  {
    id: 'dj-night2',
    name: 'DJ Night',
    subtitle: 'Celebration',
    displayDate: '28 November 2026',
    displayTime: '7:00 PM',
    isoDate: '2026-11-28T19:00:00+05:30',
    venue: 'Emerald Heights, Kalamboli',
    mapUrl: 'https://maps.app.goo.gl/9GYHhx45p8z7nwzL9',
    description: 'Dance the night away as we celebrate love, music, and the beautiful memories ahead.',
  },
]

// IST (+05:30) offset makes this an absolute instant, so the countdown is
// identical for guests in every timezone. UPDATE the offset if the wedding
// is not in India.
export const WEDDING_DATE_ISO = '2026-11-28T10:00:00+05:30'

// Compact display range for a set of events: a single event shows just its
// date; same month+year compacts to "26 — 28 November 2026"; else "<first> — <last>".
export function dateRangeForEvents(events: WeddingEvent[]): string {
  if (events.length === 0) return ''
  if (events.length === 1) return events[0].displayDate
  const first = events[0].displayDate
  const last = events[events.length - 1].displayDate
  const [firstDay, firstMonth, firstYear] = first.split(' ')
  const [, lastMonth, lastYear] = last.split(' ')
  if (firstMonth === lastMonth && firstYear === lastYear) {
    return `${firstDay} — ${last}`
  }
  return `${first} — ${last}`
}

// The countdown target for a given set of events: the main ceremony if it is in
// the set, otherwise the guest's latest event so the countdown is always
// consistent with what they can actually see.
export function countdownTargetForEvents(events: WeddingEvent[]): {
  iso: string
  displayDate: string
  name: string
} {
  const target =
    events.find((e) => e.isoDate === WEDDING_DATE_ISO) ??
    events[events.length - 1]
  return { iso: target.isoDate, displayDate: target.displayDate, name: target.name }
}

// Global metadata derived from the full catalog — used for site-wide <head>
// metadata and OG share cards (not per-guest, and not function-revealing).
export const WEDDING_DATE_RANGE = dateRangeForEvents(EVENTS)

export const WEDDING_EVENT =
  EVENTS.find((e) => e.isoDate === WEDDING_DATE_ISO) ?? EVENTS[EVENTS.length - 1]
