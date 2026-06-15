'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { COUPLE } from '@/lib/events'

type Phase = 'idle' | 'breaking' | 'rising' | 'fading' | 'done'

type Particle = {
  id: number
  size: number
  left: number
  top: number
  delay: number
  duration: number
  yOffset: number
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        size: Math.random() * 2.5 + 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        duration: Math.random() * 5 + 5,
        yOffset: -(Math.random() * 100 + 40),
      }))
    )
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            background: 'var(--gold)',
          }}
          animate={{ y: [0, p.yOffset], opacity: [0, 0.5, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

function WaxSeal({ breaking }: { breaking: boolean }) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: 72, height: 72 }}
      animate={
        breaking
          ? { scale: 1.4, opacity: 0 }
          : { scale: [1, 1.04, 1] }
      }
      transition={
        breaking
          ? { duration: 0.5, ease: 'easeOut' }
          : { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
      }
    >
      {/* Glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={
          breaking
            ? { opacity: 0 }
            : { opacity: [0.3, 0.7, 0.3] }
        }
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          background: 'radial-gradient(circle, rgba(var(--gold-rgb),0.5) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      {/* Seal disc */}
      <div
        className="relative w-full h-full rounded-full flex items-center justify-center"
        style={{
          background: 'radial-gradient(circle at 35% 35%, var(--gold-light) 0%, var(--gold) 40%, var(--gold-dark) 100%)',
        }}
      >
        <div className="absolute inset-[4px] rounded-full border border-[#1C1812]/20" />
        <div className="absolute inset-[7px] rounded-full border border-[#1C1812]/10" />
        <span
          className="relative z-10 text-[#1C1812] font-playfair text-sm tracking-wider select-none"
          style={{ fontWeight: 600 }}
        >
          {COUPLE.monogram}
        </span>
      </div>
    </motion.div>
  )
}

function EnvelopeBody({ phase }: { phase: Phase }) {
  const isOpen = phase === 'rising' || phase === 'fading'

  return (
    <motion.div
      className="relative"
      style={{ width: 340, height: 230 }}
      animate={
        phase === 'rising'
          ? { opacity: 0.15, y: 20 }
          : phase === 'fading'
          ? { opacity: 0, y: 40 }
          : { opacity: 1, y: 0 }
      }
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <svg
        viewBox="0 0 340 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
      >
        {/* Body */}
        <rect
          x="0.5"
          y="0.5"
          width="339"
          height="229"
          rx="3"
          style={{ fill: 'rgb(var(--panel-rgb))', stroke: 'rgb(var(--gold-rgb))' }}
          strokeWidth="0.5"
          strokeOpacity="0.25"
        />
        {/* Back bottom flap */}
        <path d="M 0 230 L 170 132 L 340 230 Z" style={{ fill: 'rgb(var(--panel2-rgb))' }} />
        {/* Back left flap */}
        <path d="M 0 0 L 0 230 L 170 132 Z" style={{ fill: 'rgb(var(--panel2-rgb))' }} />
        {/* Back right flap */}
        <path d="M 340 0 L 340 230 L 170 132 Z" style={{ fill: 'rgb(var(--panel2-rgb))' }} />
        {/* Subtle fold lines */}
        <line x1="0" y1="0" x2="170" y2="125" style={{ stroke: 'rgb(var(--gold-rgb))' }} strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="340" y1="0" x2="170" y2="125" style={{ stroke: 'rgb(var(--gold-rgb))' }} strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="0" y1="230" x2="170" y2="125" style={{ stroke: 'rgb(var(--gold-rgb))' }} strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="340" y1="230" x2="170" y2="125" style={{ stroke: 'rgb(var(--gold-rgb))' }} strokeWidth="0.4" strokeOpacity="0.1" />
        {/* Inner decorative border */}
        <rect x="10" y="10" width="320" height="210" rx="1" fill="none" style={{ stroke: 'rgb(var(--gold-rgb))' }} strokeWidth="0.3" strokeOpacity="0.12" />
      </svg>

      {/* Top flap — animates open */}
      <motion.div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ height: '50%', transformOrigin: 'top center', perspective: 800 }}
        animate={isOpen ? { rotateX: -160 } : { rotateX: 0 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      >
        <svg
          viewBox="0 0 340 115"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 0 0 L 340 0 L 170 115 Z"
            style={{ fill: 'rgb(var(--panel-rgb))', stroke: 'rgb(var(--gold-rgb))' }}
            strokeWidth="0.4"
            strokeOpacity="0.2"
          />
        </svg>
      </motion.div>

      {/* Wax seal */}
      <div
        className="absolute"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
        }}
      >
        <WaxSeal breaking={phase === 'breaking' || phase === 'rising'} />
      </div>
    </motion.div>
  )
}

function MiniCard() {
  return (
    <div className="text-center px-8 py-6">
      <p
        className="text-[10px] tracking-[0.45em] uppercase mb-5 font-sans"
        style={{ color: 'rgba(var(--gold-rgb),0.6)' }}
      >
        You Are Invited
      </p>
      <h2 className="font-playfair text-cream leading-tight" style={{ fontSize: 26, fontWeight: 400 }}>
        <span className="block whitespace-nowrap">{COUPLE.bride}</span>
        <span
          className="block font-cormorant italic my-1"
          style={{ color: 'var(--gold)', fontSize: 18, fontWeight: 300 }}
        >
          &amp;
        </span>
        <span className="block whitespace-nowrap">{COUPLE.groom}</span>
      </h2>
      <div className="mt-4 flex items-center justify-center gap-3">
        <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, rgba(var(--gold-rgb),0.4))' }} />
        <span className="text-xs tracking-[0.25em] font-sans" style={{ color: 'rgba(var(--gold-rgb),0.5)' }}>
          November 2026
        </span>
        <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, rgba(var(--gold-rgb),0.4))' }} />
      </div>
    </div>
  )
}

export default function EnvelopeScene({
  onOpen,
  onTap,
}: {
  onOpen: () => void
  onTap?: () => void
}) {
  const [phase, setPhase] = useState<Phase>('idle')

  const handleClick = () => {
    if (phase !== 'idle') return
    // Unlock audio synchronously within the tap, before the timed reveal.
    onTap?.()
    setPhase('breaking')
    setTimeout(() => setPhase('rising'), 550)
    setTimeout(() => setPhase('fading'), 1900)
    setTimeout(() => {
      setPhase('done')
      onOpen()
    }, 2800)
  }

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="envelope-scene"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 45%, rgb(var(--glow-rgb)) 0%, rgb(var(--bg-rgb)) 100%)',
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Ambient bokeh */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 400,
              height: 400,
              top: '10%',
              left: '5%',
              background: 'radial-gradient(circle, rgba(var(--gold-rgb),0.07) 0%, transparent 70%)',
              filter: 'blur(40px)',
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: 300,
              height: 300,
              bottom: '10%',
              right: '8%',
              background: 'radial-gradient(circle, rgba(var(--gold-rgb),0.05) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 11, repeat: Infinity, delay: 2 }}
          />

          <FloatingParticles />

          {/* Scene fade to black on exit */}
          <motion.div
            className="absolute inset-0 bg-ink pointer-events-none"
            animate={{ opacity: phase === 'fading' ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeIn' }}
          />

          <div className="relative flex items-center justify-center">
            {/* Card rising from envelope */}
            <AnimatePresence>
              {(phase === 'rising' || phase === 'fading') && (
                <motion.div
                  key="mini-card"
                  className="absolute rounded-sm overflow-hidden"
                  style={{
                    width: 300,
                    border: '1px solid rgba(var(--gold-rgb),0.25)',
                    background: 'linear-gradient(135deg, rgb(var(--panel-rgb)) 0%, rgb(var(--panel2-rgb)) 100%)',
                  }}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: -240, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 90, damping: 18 }}
                >
                  <MiniCard />
                </motion.div>
              )}
            </AnimatePresence>

            {/* The envelope — a real <button> so iOS Safari reliably fires
                the tap (plain divs don't), with a padded hit-area. */}
            <button
              type="button"
              onClick={handleClick}
              disabled={phase !== 'idle'}
              aria-label="Open the invitation"
              className={phase === 'idle' ? 'cursor-pointer' : 'cursor-default'}
              style={{
                background: 'none',
                border: 'none',
                padding: 24,
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
              }}
            >
              <motion.div
                animate={
                  phase === 'breaking'
                    ? { scale: 1.04, y: -6 }
                    : { scale: 1, y: 0 }
                }
                whileHover={phase === 'idle' ? { scale: 1.015 } : {}}
                transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              >
                <EnvelopeBody phase={phase} />
              </motion.div>
            </button>
          </div>

          {/* Tap hint */}
          <AnimatePresence>
            {phase === 'idle' && (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="absolute"
                style={{ bottom: '22vh' }}
              >
                <motion.span
                  className="font-sans text-[11px] tracking-[0.4em] uppercase"
                  style={{ color: 'rgba(var(--gold-rgb),0.45)' }}
                  animate={{ opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  Tap to Open
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
