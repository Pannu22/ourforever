'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

// A section that waits behind red curtains in a carved doorway, then opens
// (curtains part, you pass through the doorway) once it scrolls into view.
export default function Room({
  children,
  className = 'room',
  style,
  id,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
  id?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setOpen(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`${className} gated ${open ? 'is-open' : ''}`} style={style}>
      {children}
      <div className="portal" aria-hidden="true">
        <div className="pc pc-l"><div className="velvet" /></div>
        <div className="pc pc-r"><div className="velvet" /></div>
        <svg className="scene pw" viewBox="150 0 700 1000" preserveAspectRatio="xMidYMid meet">
          <use href="#doorway" />
        </svg>
      </div>
    </section>
  )
}
