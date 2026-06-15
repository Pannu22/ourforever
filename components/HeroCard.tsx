'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { COUPLE, WEDDING_DATE_RANGE } from '@/lib/events'

export default function HeroCard({ guestName }: { guestName?: string }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      style={{
        background:
          'radial-gradient(ellipse 100% 80% at 50% 30%, rgb(var(--glow-rgb)) 0%, rgb(var(--bg-rgb)) 65%)',
      }}
    >
      {/* Large ambient glow behind names */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '60vw',
          height: '60vw',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -55%)',
          background:
            'radial-gradient(circle, rgba(var(--gold-rgb),0.08) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />

      <motion.div
        className="relative z-10 text-center w-full max-w-4xl mx-auto"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Personalized greeting (only when ?to= is present) */}
        {guestName && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="font-cormorant italic mb-5"
            style={{
              fontSize: 'clamp(20px, 3vw, 30px)',
              color: 'rgba(var(--gold-rgb), 0.95)',
              fontWeight: 300,
            }}
          >
            Dear {guestName},
          </motion.p>
        )}

        {/* Pre-heading */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-[11px] tracking-[0.5em] uppercase mb-10"
          style={{ color: 'rgba(var(--gold-rgb),0.55)' }}
        >
          Together with their families
        </motion.p>

        {/* Names */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="font-playfair text-cream leading-none select-none"
            style={{ fontWeight: 400 }}
          >
            <span
              className="block"
              style={{ fontSize: 'clamp(56px, 11vw, 120px)' }}
            >
              {COUPLE.bride}
            </span>
            <span
              className="block font-cormorant italic my-3"
              style={{
                fontSize: 'clamp(28px, 5vw, 52px)',
                color: 'rgba(var(--gold-rgb),0.75)',
                fontWeight: 300,
              }}
            >
              &amp;
            </span>
            <span
              className="block"
              style={{ fontSize: 'clamp(56px, 11vw, 120px)' }}
            >
              {COUPLE.groom}
            </span>
          </h1>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-5 my-10"
        >
          <div
            className="h-px w-28"
            style={{
              background:
                'linear-gradient(to right, transparent, rgba(var(--gold-rgb),0.45))',
            }}
          />
          <div
            className="rounded-full"
            style={{
              width: 5,
              height: 5,
              background: 'rgba(var(--gold-rgb),0.6)',
            }}
          />
          <div
            className="h-px w-28"
            style={{
              background:
                'linear-gradient(to left, transparent, rgba(var(--gold-rgb),0.45))',
            }}
          />
        </motion.div>

        {/* Invitation line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="font-cormorant text-cream/50 tracking-wide"
          style={{ fontSize: 'clamp(17px, 2.5vw, 24px)', fontWeight: 300 }}
        >
          joyfully invite you to celebrate their wedding
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.6 }}
          className="font-cormorant italic mt-3"
          style={{
            fontSize: 'clamp(15px, 2vw, 20px)',
            color: 'rgba(var(--gold-rgb),0.7)',
            fontWeight: 300,
          }}
        >
          {WEDDING_DATE_RANGE}
        </motion.p>

        {/* Family names */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          style={{ color: 'rgba(var(--text-rgb),0.3)' }}
        >
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase">
            {COUPLE.brideFamily}
          </span>
          <span
            className="hidden sm:block text-xs"
            style={{ color: 'rgba(var(--gold-rgb),0.25)' }}
          >
            ·
          </span>
          <span className="font-sans text-[11px] tracking-[0.3em] uppercase">
            {COUPLE.groomFamily}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        style={{ opacity: scrollIndicatorOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        <motion.span
          className="font-sans text-[10px] tracking-[0.35em] uppercase"
          style={{ color: 'rgba(var(--gold-rgb),0.3)' }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Scroll
        </motion.span>
        <motion.div
          className="w-px h-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(var(--gold-rgb),0.4), transparent)',
          }}
          animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
