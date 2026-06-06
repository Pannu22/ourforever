'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type Petal = {
  id: number
  left: number
  size: number
  delay: number
  duration: number
  drift: number
  rotate: number
  hue: string
}

// Warm marigold / gold tones for a Sikh-wedding feel.
const HUES = ['#E8A33D', '#C9A96E', '#E8D5A3', '#D98B2B', '#F2C14E']

function PetalShape({ size, hue }: { size: number; hue: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={{ display: 'block' }}
    >
      {/* Soft petal — teardrop curve */}
      <path
        d="M12 1 C 17 6, 19 13, 12 23 C 5 13, 7 6, 12 1 Z"
        fill={hue}
        fillOpacity="0.85"
      />
      <path
        d="M12 3 C 14 8, 14 15, 12 21"
        stroke="rgba(0,0,0,0.08)"
        strokeWidth="0.6"
        fill="none"
      />
    </svg>
  )
}

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    setPetals(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 12 + 10,
        delay: Math.random() * 12,
        duration: Math.random() * 8 + 11,
        drift: (Math.random() - 0.5) * 160,
        rotate: Math.random() * 360,
        hue: HUES[i % HUES.length],
      }))
    )
  }, [])

  return (
    <div className="fixed inset-0 z-30 overflow-hidden pointer-events-none">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: -40 }}
          initial={{ y: -40, x: 0, opacity: 0, rotate: p.rotate }}
          animate={{
            y: '105vh',
            x: [0, p.drift * 0.5, p.drift],
            opacity: [0, 0.7, 0.7, 0],
            rotate: p.rotate + 220,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <PetalShape size={p.size} hue={p.hue} />
        </motion.div>
      ))}
    </div>
  )
}
