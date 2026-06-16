'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WEDDING_DATE_ISO, WEDDING_EVENT } from '@/lib/events'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeLeft(): TimeLeft {
  const diff = new Date(WEDDING_DATE_ISO).getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  }
}

function CountUnit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Ring + number */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: 'clamp(60px, 19vw, 100px)', height: 'clamp(60px, 19vw, 100px)' }}
      >
        <svg
          className="absolute"
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="rgba(var(--gold-rgb),0.1)"
            strokeWidth="1"
          />
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="rgba(var(--gold-rgb),0.25)"
            strokeWidth="0.5"
            strokeDasharray="289"
            strokeDashoffset="100"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            className="font-playfair text-cream relative z-10"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', fontWeight: 400 }}
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span
        className="font-sans text-[10px] tracking-[0.35em] uppercase"
        style={{ color: 'rgba(var(--gold-rgb),0.45)' }}
      >
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(getTimeLeft())
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="py-28 px-6"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(var(--glow-rgb),0.8) 0%, transparent 100%)',
      }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
        >
          <p
            className="font-sans text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ color: 'rgba(var(--gold-rgb),0.55)' }}
          >
            Counting Down
          </p>
          <h2
            className="font-playfair text-cream mb-16"
            style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 400 }}
          >
            Until We Say{' '}
            <em className="font-cormorant italic" style={{ color: 'var(--gold)', fontWeight: 300 }}>
              I Do
            </em>
          </h2>

          {timeLeft && (
            <div className="grid grid-cols-4 gap-4 sm:gap-8 justify-items-center">
              <CountUnit value={timeLeft.days} label="Days" />
              <CountUnit value={timeLeft.hours} label="Hours" />
              <CountUnit value={timeLeft.minutes} label="Min" />
              <CountUnit value={timeLeft.seconds} label="Sec" />
            </div>
          )}

          <motion.p
            className="mt-14 font-cormorant italic text-cream/30"
            style={{ fontSize: 16, fontWeight: 300 }}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {WEDDING_EVENT.displayDate} · {WEDDING_EVENT.name}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
