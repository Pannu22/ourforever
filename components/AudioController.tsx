'use client'

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Drop your track at: public/audio/ambient.mp3
// If the file is absent, this control hides itself silently.
const AUDIO_SRC = '/audio/ambient.mp3'
const TARGET_VOLUME = 0.45
const FADE_MS = 2000

export type AudioHandle = { unlock: () => void }

const AudioController = forwardRef<AudioHandle, { play: boolean }>(
  function AudioController({ play }, ref) {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const fadeRef = useRef<number | null>(null)
    const [available, setAvailable] = useState(true)
    const [paused, setPaused] = useState(true)

    // Begin silent playback *inside* the user's tap gesture. Mobile browsers
    // (iOS Safari, WhatsApp's in-app browser) only allow play() when it is
    // called synchronously from a user interaction — the later fade-in alone
    // would be rejected as autoplay.
    useImperativeHandle(
      ref,
      () => ({
        unlock() {
          const audio = audioRef.current
          if (!audio || !available) return
          audio.volume = 0
          audio.play().catch(() => {})
        },
      }),
      [available]
    )

    // Fade the volume up once the invitation is revealed.
    useEffect(() => {
      const audio = audioRef.current
      if (!play || !audio || !available) return

      // Fallback: if the tap-unlock was missed (e.g. lenient desktop path),
      // try to start here too — may be blocked on mobile, which is expected.
      if (audio.paused) {
        audio.volume = 0
        audio.play().catch(() => {})
      }

      const stepMs = 50
      const steps = FADE_MS / stepMs
      let i = 0
      fadeRef.current = window.setInterval(() => {
        i += 1
        const a = audioRef.current
        if (!a) return
        a.volume = Math.min(TARGET_VOLUME, (i / steps) * TARGET_VOLUME)
        if (i >= steps && fadeRef.current) {
          clearInterval(fadeRef.current)
          fadeRef.current = null
        }
      }, stepMs)

      return () => {
        if (fadeRef.current) clearInterval(fadeRef.current)
      }
    }, [play, available])

    // Toggle real playback (not just mute) so the button reflects the truth.
    const toggle = () => {
      const audio = audioRef.current
      if (!audio) return
      if (audio.paused) {
        audio.volume = TARGET_VOLUME
        audio.play().catch(() => {})
      } else {
        audio.pause()
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
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onError={() => setAvailable(false)}
        />

        <AnimatePresence>
          {play && (
            <motion.button
              key="audio-toggle"
              type="button"
              onClick={toggle}
              aria-label={paused ? 'Play music' : 'Pause music'}
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
              {/* Animated sound bars — driven by real play/pause state */}
              <div className="flex items-end gap-[3px]" style={{ height: 16 }}>
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] rounded-full"
                    style={{ background: '#C9A96E' }}
                    animate={
                      paused
                        ? { height: 3 }
                        : { height: [4, 14, 6, 12, 4] }
                    }
                    transition={
                      paused
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
)

export default AudioController
