'use client'

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

// A section whose copy settles in once it scrolls into view.
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
    </section>
  )
}
