'use client'

import { useRef, useState } from 'react'
import RSVPForm from '@/components/RSVPForm'
import AudioController, { type AudioHandle } from '@/components/AudioController'
import { SvgLibrary } from '@/components/invite/Scenery'
import Gate from '@/components/invite/Gate'
import Welcome from '@/components/invite/Welcome'
import EventRoom from '@/components/invite/EventRoom'
import Outside from '@/components/invite/Outside'
import { COUPLE, type WeddingEvent } from '@/lib/events'

// Receives the already-resolved per-guest data from the server page. Only the
// events this guest may see ever reach this component, so non-invited functions
// are absent from the page and the client bundle entirely.
export default function Invitation({
  events,
  guestName,
  dateRange,
  countdownIso,
  countdownEvent,
  rsvpEnabled,
}: {
  events: WeddingEvent[]
  guestName?: string
  dateRange: string
  countdownIso: string
  countdownEvent: { displayDate: string; name: string }
  rsvpEnabled: boolean
}) {
  const [opened, setOpened] = useState(false) // gate opening has started
  const [gateGone, setGateGone] = useState(false) // gate animation finished
  const audioRef = useRef<AudioHandle>(null)

  return (
    // While the gate is up the page is held to one screen, so it shows through the door.
    <main className="invite" style={gateGone ? undefined : { height: '100vh', overflow: 'hidden' }}>
      <SvgLibrary />
      {!gateGone && (
        <Gate monogram={COUPLE.monogram} onTap={() => audioRef.current?.unlock()} onOpen={() => setOpened(true)} onGone={() => setGateGone(true)} />
      )}
      <AudioController ref={audioRef} play={opened} />

      <Welcome entered={opened} guestName={guestName} dateRange={dateRange} />
      {events.map((event, i) => (
        <EventRoom key={event.id} event={event} index={i} id={i === 0 ? 'functions' : undefined} />
      ))}
      <Outside targetIso={countdownIso} targetName={countdownEvent.name} />

      {rsvpEnabled && <RSVPForm events={events} />}

      <footer className="py-20 px-6 text-center border-t border-gold/10">
        <p className="font-cormorant text-2xl text-cream/40 font-normal italic">
          <span className="whitespace-nowrap">{COUPLE.groom}</span> &amp;{' '}
          <span className="whitespace-nowrap">{COUPLE.bride}</span>
        </p>
        <p className="text-cream/20 text-xs tracking-[0.35em] uppercase mt-3 font-sans">With Love · November 2026</p>
      </footer>
    </main>
  )
}
