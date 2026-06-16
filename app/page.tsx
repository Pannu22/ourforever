import Invitation from './Invitation'
import { resolveGuestEvents } from '@/lib/invites'
import { dateRangeForEvents, countdownTargetForEvents } from '@/lib/catalog'

// Sanitize the ?to= greeting: strip control/odd chars, collapse spaces, cap length.
function sanitizeGuestName(raw?: string | string[]): string | undefined {
  const value = Array.isArray(raw) ? raw[0] : raw
  if (!value) return undefined
  const cleaned = value
    .replace(/[^\p{L}\p{M}\s.&'-]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 40)
  return cleaned || undefined
}

// Server component: resolves which functions this guest may see from the invite
// code BEFORE anything is sent to the browser, so non-invited functions never
// leave the server.
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ i?: string; to?: string }>
}) {
  const params = await searchParams
  const events = resolveGuestEvents(params.i)
  const countdown = countdownTargetForEvents(events)

  return (
    <Invitation
      events={events}
      guestName={sanitizeGuestName(params.to)}
      dateRange={dateRangeForEvents(events)}
      countdownIso={countdown.iso}
      countdownEvent={{ displayDate: countdown.displayDate, name: countdown.name }}
      rsvpEnabled={process.env.NEXT_PUBLIC_RSVP_ENABLED === 'true'}
    />
  )
}
