# CV / Personal Page Redesign — Dark-First, Sidebar + Timeline

**Date:** 2026-07-02
**Status:** Approved (pending spec review)

## Goal

Reimagine the CV/resume personal page ([banahaker.github.io](https://banahaker.github.io/)) as a
modern personal site. Dark mode by default with a user toggle to light mode. Redesign the block
layout from a single column of identical gray cards into a sticky-sidebar + timeline layout. Keep
the calm, quiet, professional feel appropriate for a CV.

## Non-Goals

- No CMS / data-driven content. Content stays hardcoded in components (as today).
- No new heavy dependencies. Stays a static React + Vite + Tailwind v4 app deployable to GitHub Pages.
- No content rewrite. Same resume content; only layout, theme, and structure change.
- No routing / multi-page. Single page.

## Constraints

- Tech stack fixed: React 19 + Vite + TypeScript + Tailwind CSS v4 (`@import "tailwindcss"`).
- Must keep IBM Plex Sans + **Noto Sans TC** (Traditional Chinese content in Competition/Project
  sections) + IBM Plex Mono.
- Deployed via GitHub Pages (`.github/workflows/main.yml`), so build output must remain static.
- Existing `Resume.pdf` at repo root — surface it as a download/view link.

## Layout

Two-column on desktop (`≥ md`, 768px), single column below.

```
Desktop (>= md)                        Mobile (< md)
┌────────────┬───────────────────────┐  ┌──────────────────────┐
│ SIDEBAR    │ CONTENT (timeline)    │  │ HEADER (profile)     │
│ (sticky)   │                       │  │  avatar, name, links │
│  avatar    │  Intro                │  │  [theme toggle]      │
│  Lazp Yeh  │  ── WORK ──           │  ├──────────────────────┤
│  tagline   │  ● Lazco Studio       │  │ Intro                │
│  email     │  ● Shopback           │  │ WORK (timeline)      │
│  discord   │  ● NCHC               │  │ EDUCATION            │
│  resume ↧  │  ● Picktrip           │  │ PROJECTS             │
│  [theme]   │  ── EDUCATION ──      │  │ COMPETITION          │
│            │  ● NTUST              │  │ SKILLS               │
│  SKILLS    │  ── PROJECTS ──       │  └──────────────────────┘
│  languages │  ● MDSIG 2.0          │
│  langs/PL  │  ● MDTC               │
│  frameworks│  ── COMPETITION ──    │
│            │  ● 金盾獎 / HiPAC ...  │
└────────────┴───────────────────────┘
```

- **Whole page** centered, `max-width ≈ 1080px`, generous padding.
- **Sidebar** `~300–320px`, `position: sticky; top: 2rem`. Holds Profile (avatar, name, tagline,
  contact links, resume link), the theme toggle, and the **Skills** panel (moved from the old
  "Others" section: Languages, Programming Languages, Tech/Frameworks). If the sidebar content is
  taller than the viewport it scrolls naturally (sticky simply doesn't over-clip); no inner scrollbar.
- **Content column** = vertical **timeline**: a thin vertical rule with a node dot per entry.
  Each section is introduced by a small uppercase mono label (`WORK`, `EDUCATION`, …) acting as a
  quiet divider. Entry = date (mono, muted) + title (semibold) + bullet list.
- **Section order in content:** Intro → Work → Education → Projects → Competition.
- **Mobile:** sidebar becomes a normal (non-sticky) header block at the top; theme toggle pinned
  to a corner of the header. Skills render as the last stacked block.

## Theme System

- Dark is the **default**. A toggle switches to light. Choice persisted to `localStorage("theme")`
  with values `"dark" | "light"`.
- Theme applied by toggling a `dark` class on `<html>` (`document.documentElement`).
- **Tailwind v4 dark variant:** declare `@custom-variant dark (&:where(.dark, .dark *));` in
  `App.css`/`index.css` so `dark:` utilities key off the `.dark` class rather than the OS media query.
- **Design tokens as CSS variables** for both themes (defined on `:root` for light and `.dark` for
  dark, or via `@theme`), so components reference semantic tokens (`--color-bg`, `--color-surface`,
  `--color-border`, `--color-text`, `--color-muted`, `--color-accent`) and stay theme-agnostic.
- **No-flash init:** a tiny inline script in `index.html` `<head>` runs before React, reads
  `localStorage("theme")`, and adds `dark` to `<html>` when appropriate (default dark if unset).
  This prevents a light flash on load.
- A `useTheme` hook (small, in `src/hooks/useTheme.ts`) reads/sets the class + localStorage and
  exposes `{ theme, toggle }`. `ThemeToggle.tsx` renders a sun/moon button using it.

## Visual Language

**Palette (final values tuned during implementation; starting point):**

| Token            | Dark        | Light       |
|------------------|-------------|-------------|
| bg               | `#0f1115`   | `#f7f8fa`   |
| surface (raised) | `#171a21`   | `#ffffff`   |
| border           | `#242833`   | `#e4e7ec`   |
| text             | `#e5e7eb`   | `#1a1d24`   |
| muted            | `#9aa3b2`   | `#5b6472`   |
| accent           | `#4db6ac` (muted teal) | `#0f766e` (darkened for contrast) |

- Cards become **flatter**: subtle 1px border + very soft shadow instead of solid gray fills — calmer
  than the current uniform `bg-gray-100` blocks.
- **Fonts unchanged:** IBM Plex Sans + Noto Sans TC (body), IBM Plex Mono (contact, dates, section labels).
- **Links:** retire the blue→pink gradient. Links use the accent color with a gentle hover
  (underline / brightness), consistent across themes.
- **Motion:** smooth `scroll-behavior`; subtle fade/slide-in on sections via IntersectionObserver or
  CSS; **respect `prefers-reduced-motion`** (disable transitions/animation).
- Timeline node dots use the accent; the vertical rule uses the border token.

## Code Structure

Keep all existing components; refactor for theming + shared primitives.

```
src/
  App.tsx                 # two-column shell: <Sidebar/> + <main> timeline
  index.css               # fonts, base tokens, dark variant, reduced-motion
  App.css                 # tailwind import + @theme / @custom-variant
  hooks/
    useTheme.ts           # theme state + localStorage + <html> class
  components/
    Sidebar.tsx           # wraps Profile + contact + ThemeToggle + SkillsPanel
    ProfileBlock.tsx      # avatar, name, tagline, contact links, resume link
    ThemeToggle.tsx       # sun/moon button (new)
    SkillsPanel.tsx       # from old OtherBlock content (new)
    IntroBlock.tsx        # intro paragraph (top of content column)
    Section.tsx           # shared: uppercase label + slot (new primitive)
    TimelineItem.tsx      # shared: node dot + date + title + bullets (new primitive)
    WorkExpBlock.tsx      # uses Section + TimelineItem
    EducationExpBlock.tsx # uses Section + TimelineItem
    ProjectExpBlock.tsx   # uses Section + TimelineItem
    CompetitionExpBlock.tsx # uses Section + TimelineItem
```

- `Section` + `TimelineItem` cut the repeated card/list markup currently duplicated across the four
  experience blocks.
- `OtherBlock.tsx` content migrates into `SkillsPanel.tsx`; old file removed.
- No new npm dependencies.

## Accessibility & Quality

- Theme toggle is a real `<button>` with `aria-label` reflecting the action ("Switch to light mode").
- Color pairs meet WCAG AA contrast in both themes (accent tuned for light mode).
- Keyboard-focusable links/toggle with visible focus ring using the accent token.
- `prefers-reduced-motion` honored.
- Semantic HTML: `<aside>` sidebar, `<main>` content, `<section>` per group, `<h1>` name / `<h2>` sections.

## Success Criteria

1. Page loads **dark by default** with no light flash.
2. Toggle switches dark ↔ light and the choice **persists across reloads**.
3. Desktop shows sticky sidebar + timeline content; mobile stacks cleanly with a header + toggle.
4. All existing resume content (incl. Traditional Chinese) renders correctly in both themes.
5. Calm, professional feel — flat surfaces, generous spacing, single muted accent.
6. Builds and deploys as a static site (existing GitHub Pages workflow unchanged).
7. No new runtime dependencies added.
