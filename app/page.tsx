'use client'

import { Suspense, useRef, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import EnvelopeScene from '@/components/EnvelopeScene'
import HeroCard from '@/components/HeroCard'
import EventsTimeline from '@/components/EventsTimeline'
import Countdown from '@/components/Countdown'
import RSVPForm from '@/components/RSVPForm'
import AudioController, { type AudioHandle } from '@/components/AudioController'
import Petals from '@/components/Petals'
import { COUPLE } from '@/lib/events'

function useGuestName(): string | undefined {
  const params = useSearchParams()
  const raw = params.get('to')
  if (!raw) return undefined
  // Sanitize: strip control/odd chars, collapse spaces, cap length.
  const cleaned = raw
    .replace(/[^\p{L}\p{M}\s.&'-]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 40)
  return cleaned || undefined
}

function Invitation() {
  const [opened, setOpened] = useState(false)
  const guestName = useGuestName()
  const audioRef = useRef<AudioHandle>(null)
  const rsvpEnabled = process.env.NEXT_PUBLIC_RSVP_ENABLED === 'true'

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
            <HeroCard guestName={guestName} />

            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <EventsTimeline />

            <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

            <Countdown />

            {rsvpEnabled && (
              <>
                <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

                <RSVPForm />
              </>
            )}

            <footer className="py-20 px-6 text-center border-t border-gold/10">
              <p className="font-playfair text-2xl text-cream/40 font-normal italic">
                {COUPLE.bride} &amp; {COUPLE.groom}
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

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Invitation />
    </Suspense>
  )
}
