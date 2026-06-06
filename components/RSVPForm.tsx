'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { EVENTS } from '@/lib/events'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
  placeholder?: string
}) {
  return (
    <div className="group">
      <label
        className="font-sans text-[10px] tracking-[0.3em] uppercase block mb-2"
        style={{ color: 'rgba(250,247,242,0.4)' }}
      >
        {label}
        {required && <span style={{ color: 'rgba(201,169,110,0.6)' }}> *</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent pb-2 text-cream/80 text-sm font-sans focus:outline-none placeholder:text-cream/15 transition-colors duration-300"
        style={{ borderBottom: '1px solid rgba(201,169,110,0.2)' }}
        onFocus={(e) =>
          ((e.target as HTMLInputElement).style.borderBottomColor =
            'rgba(201,169,110,0.6)')
        }
        onBlur={(e) =>
          ((e.target as HTMLInputElement).style.borderBottomColor =
            'rgba(201,169,110,0.2)')
        }
      />
    </div>
  )
}

export default function RSVPForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    attending: [] as string[],
    message: '',
  })

  const toggleEvent = (id: string) => {
    setForm((prev) => ({
      ...prev,
      attending: prev.attending.includes(id)
        ? prev.attending.filter((e) => e !== id)
        : [...prev.attending, id],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name.trim()) return
    setStatus('submitting')
    try {
      const res = await fetch('/api/rsvp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-28 px-6">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <p
            className="font-sans text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ color: 'rgba(201,169,110,0.55)' }}
          >
            Kindly Respond
          </p>
          <h2
            className="font-playfair text-cream"
            style={{ fontSize: 'clamp(36px, 6vw, 52px)', fontWeight: 400 }}
          >
            RSVP
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <motion.div
                className="w-16 h-16 rounded-full border flex items-center justify-center mx-auto mb-6"
                style={{ borderColor: 'rgba(201,169,110,0.35)' }}
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(201,169,110,0)',
                    '0 0 30px 8px rgba(201,169,110,0.15)',
                    '0 0 0 0 rgba(201,169,110,0)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: 2 }}
              >
                <span style={{ color: '#C9A96E', fontSize: 22 }}>✓</span>
              </motion.div>
              <p
                className="font-playfair text-cream mb-2"
                style={{ fontSize: 22, fontWeight: 400 }}
              >
                We&apos;ll see you there
              </p>
              <p
                className="font-cormorant text-cream/40"
                style={{ fontSize: 16, fontWeight: 300 }}
              >
                Thank you for your response.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Field
                label="Your Name"
                value={form.name}
                onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                required
                placeholder="Full name"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                placeholder="your@email.com"
              />

              {/* Events */}
              <div>
                <p
                  className="font-sans text-[10px] tracking-[0.3em] uppercase mb-4"
                  style={{ color: 'rgba(250,247,242,0.4)' }}
                >
                  Events Attending
                </p>
                <div className="space-y-3">
                  {EVENTS.map((event) => {
                    const checked = form.attending.includes(event.id)
                    return (
                      <label
                        key={event.id}
                        className="flex items-center gap-4 cursor-pointer select-none"
                        onClick={() => toggleEvent(event.id)}
                      >
                        <div
                          className="flex-shrink-0 w-4 h-4 rounded-sm border flex items-center justify-center transition-all duration-200"
                          style={{
                            borderColor: checked
                              ? '#C9A96E'
                              : 'rgba(201,169,110,0.25)',
                            background: checked
                              ? '#C9A96E'
                              : 'transparent',
                          }}
                        >
                          {checked && (
                            <span
                              style={{
                                color: '#0A0A0A',
                                fontSize: 9,
                                fontWeight: 700,
                                lineHeight: 1,
                              }}
                            >
                              ✓
                            </span>
                          )}
                        </div>
                        <span
                          className="font-sans text-sm transition-colors duration-200"
                          style={{
                            color: checked
                              ? 'rgba(250,247,242,0.8)'
                              : 'rgba(250,247,242,0.45)',
                          }}
                        >
                          {event.name}
                          <span
                            className="ml-2"
                            style={{ color: 'rgba(201,169,110,0.4)', fontSize: 12 }}
                          >
                            {event.displayDate} · {event.displayTime}
                          </span>
                        </span>
                      </label>
                    )
                  })}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="font-sans text-[10px] tracking-[0.3em] uppercase block mb-2"
                  style={{ color: 'rgba(250,247,242,0.4)' }}
                >
                  Message (optional)
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  rows={3}
                  placeholder="Leave a message for the couple…"
                  className="w-full bg-transparent border text-cream/70 text-sm font-sans px-4 py-3 rounded-sm focus:outline-none resize-none placeholder:text-cream/15 transition-colors duration-300"
                  style={{ borderColor: 'rgba(201,169,110,0.15)' }}
                  onFocus={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      'rgba(201,169,110,0.4)')
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLTextAreaElement).style.borderColor =
                      'rgba(201,169,110,0.15)')
                  }
                />
              </div>

              <motion.button
                type="submit"
                disabled={!form.name.trim() || status === 'submitting'}
                className="w-full py-4 border font-sans text-[12px] tracking-[0.4em] uppercase transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  borderColor: 'rgba(201,169,110,0.35)',
                  color: '#C9A96E',
                }}
                whileHover={{ backgroundColor: 'rgba(201,169,110,0.07)' }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'submitting' ? 'Sending…' : 'Send RSVP'}
              </motion.button>

              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center font-sans text-xs"
                  style={{ color: 'rgba(220,100,100,0.7)' }}
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
