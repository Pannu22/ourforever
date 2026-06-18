import 'server-only'
import type { WeddingEvent } from '@/lib/events'
import { EVENTS } from '@/lib/catalog'

// Maps an opaque invite code (the ?i=<code> in a guest's personal link) to the
// set of function ids that guest may see. This runs only on the server, so the
// mapping itself — and any function not in a guest's list — never reaches the
// browser. Use unguessable random codes (e.g. "k7m2qa"), one per guest group.
//
// UPDATE: add a line per guest group. Unknown ids are ignored; order of the
// shown events always follows the catalog (chronological), not this list.
//
//   export const INVITE_GROUPS: Record<string, string[]> = {
//     k7m2qa: ['shagan', 'anand-karaj'], // close family — both functions
//     p4x9zb: ['anand-karaj'],           // wedding only
//   }
export const INVITE_GROUPS: Record<string, string[]> = {
  all: ['shagan', 'jago', 'dj-night1', 'anand-karaj', 'dj-night2'], // all functions
  as12as: ['shagan', 'dj-night1'], // all functions
  dj3541: ['dj-night1'],
  p4x9zb: ['anand-karaj'],           // wedding only
  sa1345: ['shagan', 'anand-karaj'],
}

// Default events shown when there is no code, or the code is unknown: Shagan
// only; if Shagan is not in the catalog, fall back to Anand Karaj, then to the
// last event. Returns a single-event list to avoid revealing other functions.
function defaultEvents(): WeddingEvent[] {
  const fallback =
    EVENTS.find((e) => e.id === 'shagan') ??
    EVENTS.find((e) => e.id === 'anand-karaj') ??
    EVENTS[EVENTS.length - 1]
  return fallback ? [fallback] : []
}

// Resolves the events a guest is allowed to see, in chronological (catalog)
// order. No/unknown/empty code → the default set above.
export function resolveGuestEvents(code?: string | null): WeddingEvent[] {
  const ids = code ? INVITE_GROUPS[code] : undefined
  if (ids && ids.length > 0) {
    const allowed = new Set(ids)
    return EVENTS.filter((e) => allowed.has(e.id))
  }
  return defaultEvents()
}
