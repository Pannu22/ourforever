import type { WeddingEvent } from '@/lib/events'

// Events store only a start instant (isoDate); no end times exist, so calendar
// entries default to this duration.
export const DEFAULT_DURATION_HOURS = 3

// Converts an ISO instant (e.g. the +05:30 isoDate) to the UTC basic format
// iCalendar requires: "YYYYMMDDTHHMMSSZ".
export function toIcsUtc(iso: string): string {
  return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

// Escapes text per RFC 5545 (commas, semicolons, backslashes, newlines).
function escapeIcsText(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')
}

// Builds a single-event VCALENDAR string the OS can import into any calendar.
export function buildEventIcs(event: WeddingEvent, title: string): string {
  const start = new Date(event.isoDate)
  const end = new Date(start.getTime() + DEFAULT_DURATION_HOURS * 60 * 60 * 1000)
  const stamp = toIcsUtc(new Date().toISOString())

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//ourforever//wedding//EN',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:${event.id}-${start.getTime()}@ourforever`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${toIcsUtc(event.isoDate)}`,
    `DTEND:${toIcsUtc(end.toISOString())}`,
    `SUMMARY:${escapeIcsText(title)}`,
    `LOCATION:${escapeIcsText(event.venue)}`,
    `DESCRIPTION:${escapeIcsText(event.description)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  return lines.join('\r\n')
}

// Browser-only: saves the event as a .ics file the OS hands to its calendar app.
export function downloadEventIcs(event: WeddingEvent, title: string) {
  const blob = new Blob([buildEventIcs(event, title)], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${event.id}.ics`
  link.click()
  URL.revokeObjectURL(url)
}
