'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Drop your track at: public/audio/ambient.mp3
// If the file is absent, this control hides itself silently.
const AUDIO_SRC = '/audio/ambient.mp3'
const TARGET_VOLUME = 0.45
const FADE_MS = 2000

export default function AudioController({ play }: { play: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const fadeRef = useRef<number | null>(null)
  const [available, setAvailable] = useState(true)
  const [muted, setMuted] = useState(false)
  const [started, setStarted] = useState(false)

  // Begin playback (with volume fade-in) once the invitation opens.
  useEffect(() => {
    const audio = audioRef.current
    if (!play || !audio || started || !available) return

    audio.volume = 0
    audio
      .play()
      .then(() => {
        setStarted(true)
        const stepMs = 50
        const steps = FADE_MS / stepMs
        let i = 0
        fadeRef.current = window.setInterval(() => {
          i += 1
          if (!audioRef.current) return
          audioRef.current.volume = Math.min(TARGET_VOLUME, (i / steps) * TARGET_VOLUME)
          if (i >= steps && fadeRef.current) {
            clearInterval(fadeRef.current)
            fadeRef.current = null
          }
        }, stepMs)
      })
      .catch(() => {
        // Autoplay blocked or file missing — let the toggle drive it.
      })

    return () => {
      if (fadeRef.current) clearInterval(fadeRef.current)
    }
  }, [play, started, available])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (muted) {
      audio.muted = false
      if (audio.paused) {
        audio.volume = TARGET_VOLUME
        audio.play().catch(() => {})
      }
      setMuted(false)
    } else {
      audio.muted = true
      setMuted(true)
    }
  }

  if (!available) return null

  return (
    <>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        loop
        preload="auto"
        onError={() => setAvailable(false)}
      />

      <AnimatePresence>
        {play && (
          <motion.button
            key="audio-toggle"
            type="button"
            onClick={toggle}
            aria-label={muted ? 'Unmute music' : 'Mute music'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full backdrop-blur-md"
            style={{
              width: 48,
              height: 48,
              border: '1px solid rgba(201,169,110,0.3)',
              background: 'rgba(10,10,10,0.5)',
            }}
          >
            {/* Animated sound bars */}
            <div className="flex items-end gap-[3px]" style={{ height: 16 }}>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-[2px] rounded-full"
                  style={{ background: '#C9A96E' }}
                  animate={
                    muted
                      ? { height: 3 }
                      : { height: [4, 14, 6, 12, 4] }
                  }
                  transition={
                    muted
                      ? { duration: 0.2 }
                      : {
                          duration: 1.1,
                          repeat: Infinity,
                          delay: i * 0.18,
                          ease: 'easeInOut',
                        }
                  }
                />
              ))}
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
