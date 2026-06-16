'use client'

import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import EnvelopeScene from '@/components/EnvelopeScene'
import HeroCard from '@/components/HeroCard'
import EventsTimeline from '@/components/EventsTimeline'
import Countdown from '@/components/Countdown'
import RSVPForm from '@/components/RSVPForm'
import AudioController, { type AudioHandle } from '@/components/AudioController'
import Petals from '@/components/Petals'
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
  const [opened, setOpened] = useState(false)
  const audioRef = useRef<AudioHandle>(null)

  return (
    <main>
      <AnimatePresence>
        {!opened && (
          <EnvelopeScene
            key="envelope"
            onOpen={() => setOpened(true)}
            onTap={() => audioRef.current?.unlock()}
          />
        )}
      </AnimatePresence>

      {/* Ambient layers — active only after the envelope opens */}
      <AudioController ref={audioRef} play={opened} />
      {opened && <Petals />}

      <AnimatePresence>
        {opened && (
          <motion.div
            key="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <HeroCard guestName={guestName} dateRange={dateRange} />

            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <EventsTimeline events={events} />

            <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <Countdown targetIso={countdownIso} targetEvent={countdownEvent} />

            {rsvpEnabled && (
              <>
                <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <RSVPForm events={events} />
              </>
            )}

            <footer className="py-20 px-6 text-center border-t border-gold/10">
              <p className="font-playfair text-2xl text-cream/40 font-normal italic">
                <span className="whitespace-nowrap">{COUPLE.bride}</span> &amp;{' '}
                <span className="whitespace-nowrap">{COUPLE.groom}</span>
              </p>
              <p className="text-cream/20 text-xs tracking-[0.35em] uppercase mt-3 font-sans">
                With Love · November 2026
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
