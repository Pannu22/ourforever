// Single source of truth for available themes. Each theme needs a matching
// `[data-theme='<id>']` block in app/globals.css. To add a future theme, add an
// entry here, add the CSS block, then set NEXT_PUBLIC_THEME to its id.

export const THEMES = [
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
] as const

export type ThemeId = (typeof THEMES)[number]['id']

export function isThemeId(value: unknown): value is ThemeId {
  return THEMES.some((t) => t.id === value)
}

// Theme is selected at build via NEXT_PUBLIC_THEME; any registered id is accepted,
// otherwise it falls back to the first theme in the list.
export const DEFAULT_THEME: ThemeId = isThemeId(process.env.NEXT_PUBLIC_THEME)
  ? process.env.NEXT_PUBLIC_THEME
  : THEMES[0].id
