'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { COUPLE, type WeddingEvent } from '@/lib/events'
import { buildEventIcs } from '@/lib/calendar'

const EVENT_ICONS: Record<string, string> = {
  shagan: '✦',
  'dj-night': '♪',
  jago: '◈',
  'anand-karaj': '❋',
}

// Heading copy that adapts to how many days the guest is actually invited to,
// so a single-function invite never implies the other functions exist.
const DAY_WORDS = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven']

function celebrationHeading(events: WeddingEvent[]): { count: string; days: string } {
  const distinctDays = new Set(events.map((e) => e.displayDate)).size
  return {
    count: DAY_WORDS[distinctDays] ?? String(distinctDays),
    days: distinctDays === 1 ? 'Beautiful Day' : 'Beautiful Days',
  }
}

function downloadEventIcs(event: WeddingEvent) {
  const ics = buildEventIcs(event, `${event.name} — ${COUPLE.monogram}`)
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${event.id}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

function EventCard({
  event,
  index,
  total,
}: {
  event: WeddingEvent
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'start 0.35'],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const x = useTransform(scrollYProgress, [0, 1], [-50, 0])
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, x }}
      className="relative flex gap-8 md:gap-14 items-start"
    >
      {/* Timeline column */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0 w-16 pt-1">
        {/* Dot */}
        <motion.div
          className="w-3 h-3 rounded-full border-2 flex-shrink-0"
          style={{ borderColor: 'var(--gold)', background: 'rgb(var(--bg-rgb))' }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', delay: 0.1 }}
        />
        {/* Connecting line (except last item) */}
        {index < total - 1 && (
          <motion.div
            className="w-px mt-2 flex-1 min-h-[120px]"
            style={{
              background: 'linear-gradient(to bottom, rgba(var(--gold-rgb),0.3), rgba(var(--gold-rgb),0.05))',
              scaleY: lineScale,
              transformOrigin: 'top',
            }}
          />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 pb-16 md:pb-20">
        <div
          className="border rounded-sm p-7 md:p-10 relative overflow-hidden group transition-all duration-500"
          style={{
            borderColor: 'rgba(var(--gold-rgb),0.12)',
            background: 'linear-gradient(135deg, rgba(var(--panel-rgb),0.8) 0%, rgba(var(--bg-rgb),0.8) 100%)',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLDivElement).style.borderColor =
              'rgba(var(--gold-rgb),0.3)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLDivElement).style.borderColor =
              'rgba(var(--gold-rgb),0.12)'
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(var(--gold-rgb),0.05) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            {/* Event icon + header */}
            <div className="flex items-start justify-between gap-4 mb-5">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-lg"
                    style={{ color: 'rgba(var(--gold-rgb),0.6)' }}
                  >
                    {EVENT_ICONS[event.id]}
                  </span>
                  <span
                    className="font-sans text-[10px] tracking-[0.4em] uppercase"
                    style={{ color: 'rgba(var(--gold-rgb),0.55)' }}
                  >
                    {event.subtitle}
                  </span>
                </div>
                <h3
                  className="font-playfair text-cream"
                  style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 400 }}
                >
                  {event.name}
                </h3>
              </div>

              <div className="text-right flex-shrink-0">
                <p
                  className="font-cormorant text-cream/60"
                  style={{ fontSize: 14, fontWeight: 300 }}
                >
                  {event.displayDate}
                </p>
                <p
                  className="font-playfair mt-1"
                  style={{ fontSize: 20, color: 'var(--gold)', fontWeight: 400 }}
                >
                  {event.displayTime}
                </p>
              </div>
            </div>

            <p
              className="font-cormorant text-cream/50 leading-relaxed mb-5"
              style={{ fontSize: 17, fontWeight: 300 }}
            >
              {event.description}
            </p>

            {(() => {
              const Pin = (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M6 1C4.067 1 2.5 2.567 2.5 4.5C2.5 7.25 6 11 6 11C6 11 9.5 7.25 9.5 4.5C9.5 2.567 7.933 1 6 1ZM6 6C5.172 6 4.5 5.328 4.5 4.5C4.5 3.672 5.172 3 6 3C6.828 3 7.5 3.672 7.5 4.5C7.5 5.328 6.828 6 6 6Z"
                    fill="currentColor"
                  />
                </svg>
              )
              return event.mapUrl ? (
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-[var(--gold)]"
                  style={{ color: 'rgba(var(--text-rgb),0.25)' }}
                >
                  {Pin}
                  <span className="font-sans text-xs tracking-wide underline underline-offset-4 decoration-[rgba(var(--text-rgb),0.2)]">
                    {event.venue} · Directions
                  </span>
                </a>
              ) : (
                <div className="flex items-center gap-2" style={{ color: 'rgba(var(--text-rgb),0.25)' }}>
                  {Pin}
                  <span className="font-sans text-xs tracking-wide">{event.venue}</span>
                </div>
              )
            })()}

            <button
              type="button"
              onClick={() => downloadEventIcs(event)}
              className="mt-5 inline-flex items-center gap-2 rounded-sm border px-4 py-2 font-sans text-xs tracking-wide transition-colors hover:text-[var(--gold)]"
              style={{
                borderColor: 'rgba(var(--gold-rgb),0.25)',
                color: 'rgba(var(--text-rgb),0.55)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                  'rgba(var(--gold-rgb),0.5)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLButtonElement).style.borderColor =
                  'rgba(var(--gold-rgb),0.25)'
              }}
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                className="flex-shrink-0"
              >
                <rect
                  x="1.5"
                  y="2.5"
                  width="11"
                  height="10"
                  rx="1.5"
                  stroke="currentColor"
                />
                <path d="M1.5 5.5H12.5M4.5 1V3.5M9.5 1V3.5" stroke="currentColor" />
              </svg>
              Add to Calendar
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function EventsTimeline({ events }: { events: WeddingEvent[] }) {
  const heading = celebrationHeading(events)
  return (
    <section className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-20 md:mb-28"
        >
          <p
            className="font-sans text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ color: 'rgba(var(--gold-rgb),0.55)' }}
          >
            Our Celebrations
          </p>
          <h2
            className="font-playfair text-cream leading-tight"
            style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 400 }}
          >
            {heading.count} {heading.days}
            <br />
            <span className="text-shimmer">of Celebration</span>
          </h2>
        </motion.div>

        {/* Events */}
        <div>
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} total={events.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
