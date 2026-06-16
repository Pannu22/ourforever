# Our Forever — Cinematic Wedding Invitation

A digital wedding invitation that opens like a film. Guests land on a sealed
envelope; one tap breaks the wax seal, the card rises, and the invitation
unfolds — names, events, a live countdown, and an RSVP — over ambient music
and drifting marigold petals.

Built with an Apple-product-page aesthetic: deep black, warm gold, generous
space, and spring-physics motion throughout.

---

## ✨ Features

- **Cinematic envelope intro** — wax-sealed envelope, floating gold particles, a flap that opens and a card that rises, then fades to the full invitation.
- **Hero** — couple's names in large serif type with parallax on scroll.
- **Events timeline** — four ceremonies revealed on scroll with a drawing timeline.
- **Live countdown** — animated days/hours/minutes/seconds to the Anand Karaj.
- **RSVP form** — name, email, per-event checkboxes, message; success animation. Stored in Vercel KV (or logged to the console in local dev).
- **Ambient music** — fades in on tap-to-open, with a floating mute toggle.
- **Falling petals** — marigold/gold petals drift over the invitation.
- **Personalized greeting** — share `?to=Name` and the hero greets each guest by name.
- **Per-function invitations** — give each guest group a private link (`?i=code`) and they see *only* the functions they're invited to. The other functions are resolved away on the server, so they never reach the browser — invisible even in DevTools/View-Source.
- **Share card** — a dynamic Open Graph image + monogram favicon so links unfurl beautifully on WhatsApp/iMessage/social.

---

## 🛠 Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | Playfair Display · Cormorant Garamond · Inter (Google Fonts) |
| RSVP storage | Vercel KV (Redis) |
| Share image / favicon | `next/og` (dynamic, no extra deps) |
| Hosting | Vercel |

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
#    http://localhost:3000
```

Tap the envelope to experience the full reveal.

### Other commands

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

---

## 🎨 Personalize It

Content lives in three files:

| File | Holds | Ships to browser? |
|---|---|---|
| [`lib/events.ts`](lib/events.ts) | Couple names, families, monogram, `SITE_URL` | Yes (client-safe) |
| [`lib/catalog.ts`](lib/catalog.ts) | The full `EVENTS` list (all functions) + wedding date | **No — server-only** |
| [`lib/invites.ts`](lib/invites.ts) | Which guest code can see which functions | **No — server-only** |

> The event catalog is deliberately kept out of `lib/events.ts`. Putting event
> or invite data in a client-safe file would ship the whole list to every
> browser and defeat the per-function privacy. Add events in `lib/catalog.ts`
> and invite codes in `lib/invites.ts`.

### Names & families

In [`lib/events.ts`](lib/events.ts):

```ts
export const COUPLE = {
  bride: 'Simran',            // bride's name
  groom: 'Ravinder',          // groom's name
  brideFamily: 'The Kaur Family',
  groomFamily: 'The Singh Family',
  monogram: 'S & R',          // shown on the wax seal
}
```

### Events

Each entry in the `EVENTS` array in [`lib/catalog.ts`](lib/catalog.ts) controls
one ceremony card and its RSVP checkbox. Update the name, date, time, venue, and
description:

```ts
{
  id: 'anand-karaj',
  name: 'Anand Karaj',
  subtitle: 'The Wedding',
  displayDate: '18 November 2026',
  displayTime: '11:00 AM',
  isoDate: '2026-11-18T11:00:00',   // used by the countdown
  venue: 'Venue, City',             // ← UPDATE
  description: '…',
}
```

> The countdown targets `WEDDING_DATE_ISO` in `lib/catalog.ts` (the Anand
> Karaj). Update it if your main ceremony changes. For a guest who isn't
> invited to that ceremony, the countdown automatically falls back to their
> latest invited function.

### Page title & description

Edit the `metadata` block in [`app/layout.tsx`](app/layout.tsx) to match the
real names — this controls the browser tab and share-card text.

### Ambient music

Drop a looping instrumental at **`public/audio/ambient.mp3`**. It fades in on
tap-to-open. No file? The site works fine and the mute toggle simply hides
itself. See [`public/audio/README.md`](public/audio/README.md) for tips.

---

## 💌 Personalized Guest Links

Append `?to=` with a guest's name to greet them personally:

```
https://your-domain.com/?to=Bua+Ji      → "Dear Bua Ji,"
https://your-domain.com/?to=The+Sharmas  → "Dear The Sharmas,"
```

Spaces can be `+` or `%20`. With no `?to=`, the hero shows the standard
"Together with their families" line. (The name is sanitized and length-capped,
so a malformed link can't break the page.)

---

## 🔐 Inviting Guests to Specific Functions

Different guest groups can be invited to different functions, and a guest can
**never** learn which other functions exist or who else was invited. The server
resolves a guest's allowed functions before any HTML is sent, so non-invited
functions never reach the browser (not visible in DevTools or View-Source), and
no guest list is ever rendered.

### Setting it up

In [`lib/invites.ts`](lib/invites.ts), map an opaque code to the function `id`s
that code may see:

```ts
export const INVITE_GROUPS: Record<string, string[]> = {
  k7m2qa: ['shagan', 'anand-karaj'], // close family — both functions
  p4x9zb: ['anand-karaj'],           // wedding only
}
```

- Use **unguessable random codes** (e.g. `k7m2qa`), one per guest group.
- `id`s must match an event `id` in `lib/catalog.ts`. Unknown ids are ignored.
- Shown events always follow the catalog's chronological order, not the list order.

Then send each group their personal link (combine with `?to=` as you like):

```
https://your-domain.com/?i=k7m2qa&to=Bua+Ji   → Shagan + Anand Karaj
https://your-domain.com/?i=p4x9zb              → Anand Karaj only
```

### Default behavior

With **no code, or an unknown code**, the site shows the **Shagan only** (and if
there's no Shagan in the catalog, it falls back to the Anand Karaj). This keeps a
bare or mistyped link from revealing the other functions.

> ⚠️ Codes go in `lib/invites.ts` (server-only) — **never** in `lib/events.ts`.
> `events.ts` ships to the browser, so putting the code→function mapping there
> would expose every code and which functions it unlocks.

---

## 📨 RSVP Storage

The RSVP form posts to `app/api/rsvp/route.ts`.

- **With Vercel KV configured** → each response is pushed to a `rsvps` list in Redis.
- **Without it (local dev)** → responses are logged to the server console, so you can still test the flow.

### Reading responses

In the Vercel dashboard → **Storage → your KV store → Data Browser**, inspect
the `rsvps` list. Each item is a JSON string:

```json
{
  "name": "…",
  "email": "…",
  "attending": ["shagan", "anand-karaj"],
  "message": "…",
  "submittedAt": "2026-06-05T12:00:00.000Z"
}
```

---

## ☁️ Deploying to Vercel

```bash
# one-time
vercel login

# deploy
vercel          # preview
vercel --prod   # production
```

### Environment variables

Set these in the Vercel dashboard (**Settings → Environment Variables**) or via
`.env.local` for local dev. See [`.env.example`](.env.example).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your absolute site URL (e.g. `https://your-domain.com`, no trailing slash). **Required for share cards to unfurl** on WhatsApp/social. |
| `KV_REST_API_URL` | Vercel KV — auto-injected when you link a KV store. |
| `KV_REST_API_TOKEN` | Vercel KV — auto-injected when you link a KV store. |

To enable RSVP storage: in the Vercel dashboard, **Storage → Create → KV**, then
link it to the project. The `KV_*` variables are injected automatically.

---

## 📁 Project Structure

```
app/
  layout.tsx           Root layout · fonts · metadata
  page.tsx             Server component: resolves the guest's functions from ?i=
  Invitation.tsx       Client experience (envelope → invitation), rendered from props
  globals.css          Base styles, shimmer animation, scrollbar
  opengraph-image.tsx  Dynamic share card (1200×630)
  icon.tsx             Dynamic monogram favicon
  api/rsvp/route.ts    RSVP POST handler → Vercel KV
components/
  EnvelopeScene.tsx    Scene 1–2: sealed envelope + opening animation
  HeroCard.tsx         Scene 3: names + (optional) guest greeting
  EventsTimeline.tsx   Scene 4: scroll-driven event cards
  Countdown.tsx        Scene 5: live countdown
  RSVPForm.tsx         Scene 6: RSVP form
  AudioController.tsx  Ambient music + mute toggle
  Petals.tsx           Falling petal overlay
lib/
  events.ts            Client-safe: couple names, monogram, SITE_URL
  catalog.ts           Server-only: full EVENTS list + wedding date helpers
  invites.ts           Server-only: invite codes → which functions they unlock
  calendar.ts          .ics calendar-event builder
public/
  audio/ambient.mp3    Your soundtrack (you provide)
```

---

## ✅ Pre-Publish Checklist

- [ ] Update names, families, and monogram in `lib/events.ts`
- [ ] Update each event's date, time, **venue**, and description in `lib/catalog.ts`
- [ ] Add invite codes for each guest group in `lib/invites.ts`
- [ ] Update the title/description in `app/layout.tsx`
- [ ] Add `public/audio/ambient.mp3`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel
- [ ] Link a Vercel KV store for RSVPs
- [ ] Test a personalized link (`/?to=Name`), an invite link (`/?i=code`), and a share preview

---

Made with love for Simran & Ravinder · November 2026
