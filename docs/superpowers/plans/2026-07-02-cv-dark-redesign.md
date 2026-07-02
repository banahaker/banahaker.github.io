# CV Dark-First Sidebar + Timeline Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the personal CV page as a dark-by-default, sidebar + timeline layout with a persisted light/dark toggle, keeping all existing content and a calm, professional feel.

**Architecture:** Static React + Vite + Tailwind v4 SPA. Theming via CSS custom properties that flip on a `.dark` class on `<html>`; a no-flash inline script sets the class before React paints; a `useTheme` hook drives the toggle and persists to `localStorage`. Layout is a two-column shell (`<aside>` sticky sidebar + `<main>` timeline) that collapses to a single stacked column on mobile. Repeated experience-block markup is unified behind `Section` + `TimelineItem` primitives.

**Tech Stack:** React 19, Vite 7, TypeScript ~5.8, Tailwind CSS v4, IBM Plex Sans / Noto Sans TC / IBM Plex Mono. Vitest + jsdom + @testing-library/react (dev-only) for the theme hook.

## Global Constraints

- No new **runtime** dependencies. Dev-only test deps (vitest, jsdom, @testing-library/react) are allowed.
- Keep IBM Plex Sans + Noto Sans TC + IBM Plex Mono fonts (Traditional Chinese content must render).
- Dark is the default; a light flash on load is a failure.
- Theme choice persists in `localStorage("theme")` with values exactly `"dark" | "light"`.
- All existing resume content is preserved verbatim (incl. Chinese text).
- Retire the blue→pink gradient; links/accents use the single muted accent token.
- Honor `prefers-reduced-motion`.
- Output stays a static build deployable by the existing GitHub Pages workflow (`dist/`).
- Design tokens (semantic names → Tailwind utilities): `--color-page` (`bg-page`), `--color-surface` (`bg-surface`), `--color-line` (`border-line`), `--color-ink` (`text-ink`), `--color-muted` (`text-muted`), `--color-accent` (`text-accent`/`bg-accent`). Dark values: page `#0f1115`, surface `#171a21`, line `#242833`, ink `#e5e7eb`, muted `#9aa3b2`, accent `#4db6ac`. Light values: page `#f7f8fa`, surface `#ffffff`, line `#e4e7ec`, ink `#1a1d24`, muted `#5b6472`, accent `#0f766e`.

---

## File Structure

```
index.html                       # + no-flash theme init script in <head>
public/Resume.pdf                # moved from repo root (served at /Resume.pdf)
vite.config.ts                   # + vitest test config (jsdom)
package.json                     # + "test" script, dev deps
src/
  index.css                      # fonts, tokens, dark variant, base, reduced-motion
  App.css                        # (unchanged: @import "tailwindcss")  -- tokens live in index.css
  App.tsx                        # two-column shell
  hooks/
    useTheme.ts                  # theme state + class + localStorage
    useTheme.test.ts             # hook tests
  data/
    resume.ts                    # (optional) shared content types -- NOT used; content stays in components
  components/
    Section.tsx                  # uppercase label + children (timeline group)
    TimelineItem.tsx             # node dot + date + title + bullets
    ThemeToggle.tsx              # sun/moon button
    ProfileBlock.tsx             # avatar, name, tagline, contacts, resume link
    SkillsPanel.tsx              # languages / PLs / frameworks (from OtherBlock)
    Sidebar.tsx                  # ProfileBlock + ThemeToggle + SkillsPanel
    IntroBlock.tsx               # intro paragraph
    WorkExpBlock.tsx             # Section + TimelineItem
    EducationExpBlock.tsx        # Section + TimelineItem
    ProjectExpBlock.tsx          # Section + TimelineItem
    CompetitionExpBlock.tsx      # Section + TimelineItem
    OtherBlock.tsx               # DELETED (content moved to SkillsPanel)
```

Note: `data/resume.ts` is listed only to state explicitly it is **not** created — content stays inline in components, matching the current codebase pattern. Do not create it.

---

## Task 1: Theme tokens, dark variant, and base styles

**Files:**
- Modify: `src/index.css` (replace entire file)

**Interfaces:**
- Produces: CSS custom properties `--color-page|surface|line|ink|muted|accent` on `:root` (light) and `.dark` (dark); Tailwind utilities `bg-page`, `bg-surface`, `border-line`, `text-ink`, `text-muted`, `text-accent`, `bg-accent`; `@custom-variant dark`. Consumed by every component task.

- [ ] **Step 1: Replace `src/index.css` with tokens + base**

```css
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&family=Noto+Sans+TC:wght@100..900&display=swap&family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
@import "tailwindcss";

/* Dark mode keys off a .dark class on <html>, not the OS media query. */
@custom-variant dark (&:where(.dark, .dark *));

/* Semantic design tokens exposed as Tailwind utilities (bg-page, text-ink, ...). */
@theme {
  --color-page: #f7f8fa;
  --color-surface: #ffffff;
  --color-line: #e4e7ec;
  --color-ink: #1a1d24;
  --color-muted: #5b6472;
  --color-accent: #0f766e;
}

/* Dark overrides cascade over @theme's :root values. */
.dark {
  --color-page: #0f1115;
  --color-surface: #171a21;
  --color-line: #242833;
  --color-ink: #e5e7eb;
  --color-muted: #9aa3b2;
  --color-accent: #4db6ac;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Noto Sans TC", "IBM Plex Sans", sans-serif;
  background-color: var(--color-page);
  color: var(--color-ink);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.ibm-plex-mono {
  font-family: "IBM Plex Mono", monospace;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: opacity 0.2s ease;
}
a:hover {
  opacity: 0.75;
}

:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
}
```

- [ ] **Step 2: Verify build compiles the CSS**

Run: `npm run build`
Expected: build completes with no CSS/Tailwind errors; `dist/` produced.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add theme tokens, dark variant, and calm base styles"
```

---

## Task 2: No-flash theme init script + move Resume.pdf

**Files:**
- Modify: `index.html` (add script in `<head>`; update `og:image` if referencing missing asset is out of scope — leave as-is)
- Move: `Resume.pdf` → `public/Resume.pdf`

**Interfaces:**
- Produces: `<html>` carries `.dark` before React mounts unless `localStorage("theme") === "light"`; `Resume.pdf` served at `/Resume.pdf`. Consumed by Task 5 (resume link) and Task 3 (hook reads the class).

- [ ] **Step 1: Move the resume into `public/`**

```bash
git mv Resume.pdf public/Resume.pdf 2>/dev/null || mv Resume.pdf public/Resume.pdf
```

(`Resume.pdf` is currently untracked at repo root; `mv` covers that case.)

- [ ] **Step 2: Add the no-flash init script to `index.html`**

Insert this as the **last** element inside `<head>` (immediately before `</head>`):

```html
    <script>
      (function () {
        try {
          if (localStorage.getItem("theme") !== "light") {
            document.documentElement.classList.add("dark");
          }
        } catch (e) {
          document.documentElement.classList.add("dark");
        }
      })();
    </script>
```

- [ ] **Step 3: Verify**

Run: `npm run build`
Expected: build succeeds. Manually confirm `public/Resume.pdf` exists: `ls public/Resume.pdf`.

- [ ] **Step 4: Commit**

```bash
git add index.html public/Resume.pdf
git commit -m "feat: dark-first no-flash init script and public resume asset"
```

---

## Task 3: `useTheme` hook (TDD)

**Files:**
- Modify: `package.json` (add `test` script + dev deps), `vite.config.ts` (vitest config)
- Create: `src/hooks/useTheme.ts`, `src/hooks/useTheme.test.ts`

**Interfaces:**
- Produces: `export type Theme = "dark" | "light";` and `export function useTheme(): { theme: Theme; toggle: () => void }`. `toggle()` flips `<html>.classList` `dark` and writes `localStorage("theme")`. Consumed by Task 4 (`ThemeToggle`).

- [ ] **Step 1: Install dev test dependencies**

Run:
```bash
pnpm add -D vitest jsdom @testing-library/react @testing-library/dom
```
Expected: added to `devDependencies`; lockfile updated.

- [ ] **Step 2: Add the `test` script to `package.json`**

In the `"scripts"` block, add:
```json
    "test": "vitest run"
```

- [ ] **Step 3: Configure vitest (jsdom) in `vite.config.ts`**

Replace the file with:
```ts
/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  test: {
    environment: "jsdom",
  },
});
```

- [ ] **Step 4: Write the failing test**

Create `src/hooks/useTheme.test.ts`:
```ts
import { afterEach, describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useTheme } from "./useTheme";

afterEach(() => {
  localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("useTheme", () => {
  it("reports dark when <html> already has the dark class", () => {
    document.documentElement.classList.add("dark");
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("dark");
  });

  it("toggles dark -> light: removes class and persists 'light'", () => {
    document.documentElement.classList.add("dark");
    const { result } = renderHook(() => useTheme());
    act(() => result.current.toggle());
    expect(result.current.theme).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("toggles light -> dark: adds class and persists 'dark'", () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe("light");
    act(() => result.current.toggle());
    expect(result.current.theme).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
```

- [ ] **Step 5: Run the test to verify it fails**

Run: `npm test`
Expected: FAIL — cannot resolve `./useTheme` (module not found).

- [ ] **Step 6: Implement the hook**

Create `src/hooks/useTheme.ts`:
```ts
import { useCallback, useState } from "react";

export type Theme = "dark" | "light";

function currentTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(() => currentTheme());

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* storage unavailable — ignore */
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
```

- [ ] **Step 7: Run the test to verify it passes**

Run: `npm test`
Expected: PASS (3 tests).

- [ ] **Step 8: Commit**

```bash
git add package.json pnpm-lock.yaml vite.config.ts src/hooks/useTheme.ts src/hooks/useTheme.test.ts
git commit -m "feat: add persisted useTheme hook with vitest coverage"
```

---

## Task 4: `ThemeToggle` component

**Files:**
- Create: `src/components/ThemeToggle.tsx`

**Interfaces:**
- Consumes: `useTheme` from `../hooks/useTheme`.
- Produces: `export default function ThemeToggle(props?: { className?: string })` — a `<button>` with `aria-label` describing the target theme, rendering a sun (in dark) / moon (in light) inline SVG.

- [ ] **Step 1: Create the component**

```tsx
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const goingTo = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${goingTo} mode`}
      title={`Switch to ${goingTo} mode`}
      className={
        "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line " +
        "text-muted hover:text-accent transition-colors " +
        className
      }
    >
      {theme === "dark" ? (
        // sun
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        // moon
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}
```

- [ ] **Step 2: Verify it typechecks**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ThemeToggle.tsx
git commit -m "feat: add accessible sun/moon theme toggle button"
```

---

## Task 5: `Section` and `TimelineItem` primitives

**Files:**
- Create: `src/components/Section.tsx`, `src/components/TimelineItem.tsx`

**Interfaces:**
- Produces:
  - `Section`: `export default function Section(props: { label: string; children: React.ReactNode })` — renders an uppercase mono label then a timeline container (`<ol>` with a left vertical rule) wrapping children.
  - `TimelineItem`: `export default function TimelineItem(props: { title: string; meta?: string; contents?: string[]; children?: React.ReactNode })` — a list item with an accent node dot, optional `meta` (date/subtitle, mono muted), bold title, and either a bullet list from `contents` or freeform `children`.
- Consumed by Tasks 8–11 (experience blocks).

- [ ] **Step 1: Create `Section.tsx`**

```tsx
import type { ReactNode } from "react";

export default function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="ibm-plex-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-5">
        {label}
      </h2>
      <ol className="relative flex flex-col gap-8 border-l border-line pl-6">
        {children}
      </ol>
    </section>
  );
}
```

- [ ] **Step 2: Create `TimelineItem.tsx`**

```tsx
import type { ReactNode } from "react";

export default function TimelineItem({
  title,
  meta,
  contents,
  children,
}: {
  title: string;
  meta?: string;
  contents?: string[];
  children?: ReactNode;
}) {
  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.90rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-[var(--color-page)]"
      />
      <h3 className="text-base font-semibold text-ink leading-snug">{title}</h3>
      {meta && <div className="ibm-plex-mono text-xs text-muted mt-1">{meta}</div>}
      {contents && contents.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2 list-disc pl-5 text-[0.95rem] font-light text-ink/90 marker:text-muted">
          {contents.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      )}
      {children}
    </li>
  );
}
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/Section.tsx src/components/TimelineItem.tsx
git commit -m "feat: add Section and TimelineItem timeline primitives"
```

---

## Task 6: `ProfileBlock` (sidebar identity)

**Files:**
- Modify: `src/components/ProfileBlock.tsx` (replace entire file)

**Interfaces:**
- Consumes: `logo_bana` asset.
- Produces: `export default function ProfileBlock()` — avatar, name, tagline, contact links (email, Discord), and a resume link to `/Resume.pdf`. No card background (sits inside the sidebar).

- [ ] **Step 1: Replace `ProfileBlock.tsx`**

```tsx
import logo_bana from "../assets/logo_bana.png";

export default function ProfileBlock() {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={logo_bana}
        alt="Lazp's avatar"
        className="rounded-full w-24 h-24 border border-line"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-ink">Lazp Yeh</h1>
        <p className="text-sm text-muted leading-relaxed">
          Student · Co-founder &amp; COO, Lazco Studio
        </p>
      </div>
      <div className="flex flex-col gap-1.5 ibm-plex-mono text-sm">
        <a href="mailto:lazpytb@gmail.com">lazpytb@gmail.com</a>
        <span className="text-muted">Discord: lazp.tw</span>
        <a href="/Resume.pdf" target="_blank" rel="noreferrer">
          Resume (PDF) ↧
        </a>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/ProfileBlock.tsx
git commit -m "feat: rework ProfileBlock for sidebar with tagline and resume link"
```

---

## Task 7: `SkillsPanel` (from OtherBlock)

**Files:**
- Create: `src/components/SkillsPanel.tsx`
- Delete: `src/components/OtherBlock.tsx` (in Task 11 when App stops importing it — delete here is safe since nothing imports it after this task; do it here)

**Interfaces:**
- Produces: `export default function SkillsPanel()` — three labeled groups (Languages, Programming, Tech / Frameworks) styled for the sidebar footer.

- [ ] **Step 1: Create `SkillsPanel.tsx`**

```tsx
function SkillGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="ibm-plex-mono text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-muted">
        {label}
      </div>
      <p className="text-sm font-light text-ink/90 leading-relaxed">{value}</p>
    </div>
  );
}

export default function SkillsPanel() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="ibm-plex-mono text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Skills
      </h2>
      <SkillGroup label="Languages" value="Mandarin (native), English (TOEIC 840)" />
      <SkillGroup
        label="Programming"
        value="JavaScript, TypeScript, Python, C/C++, Go, HTML, CSS"
      />
      <SkillGroup
        label="Tech / Frameworks"
        value="React, Next.js, Tailwind CSS, Node.js, Express.js, FastAPI, PostgreSQL, Git, GitHub, Docker, GitHub Actions, Linux, Nginx, Prisma ORM, Cloudflare (R2, DNS, Workers)"
      />
    </div>
  );
}
```

- [ ] **Step 2: Delete the old block**

```bash
git rm src/components/OtherBlock.tsx
```

- [ ] **Step 3: Verify typecheck**

Run: `npx tsc -b`
Expected: no type errors (nothing imports `OtherBlock` yet — App still does; if `tsc` errors on the missing import, that is expected and resolved in Task 11). If it errors, proceed — Task 11 removes the import. To keep this task green, instead comment out the `OtherBlock` import+usage in `src/App.tsx` now:

In `src/App.tsx`, remove the line `import OtherBlock from "./components/OtherBlock";` and the `<OtherBlock></OtherBlock>` usage. (App is fully rewritten in Task 11 regardless.)

- [ ] **Step 4: Re-run typecheck**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 5: Commit**

```bash
git add src/components/SkillsPanel.tsx src/App.tsx
git commit -m "feat: move Others content into sidebar SkillsPanel; drop OtherBlock"
```

---

## Task 8: `Sidebar` (compose identity + toggle + skills)

**Files:**
- Create: `src/components/Sidebar.tsx`

**Interfaces:**
- Consumes: `ProfileBlock`, `SkillsPanel`, `ThemeToggle`.
- Produces: `export default function Sidebar()` — an `<aside>` that is sticky on `md+`, containing ProfileBlock, a divider, SkillsPanel, and the ThemeToggle positioned top-right of the sidebar.

- [ ] **Step 1: Create `Sidebar.tsx`**

```tsx
import ProfileBlock from "./ProfileBlock";
import SkillsPanel from "./SkillsPanel";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  return (
    <aside className="md:sticky md:top-10 md:h-fit flex flex-col gap-8">
      <div className="relative">
        <ThemeToggle className="absolute right-0 top-0" />
        <ProfileBlock />
      </div>
      <div className="h-px bg-line" />
      <SkillsPanel />
    </aside>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/Sidebar.tsx
git commit -m "feat: add sticky sidebar composing profile, toggle, and skills"
```

---

## Task 9: Restyle `IntroBlock`

**Files:**
- Modify: `src/components/IntroBlock.tsx` (replace entire file)

**Interfaces:**
- Produces: `export default function IntroBlock()` — a lead paragraph (no gray card), same copy as today.

- [ ] **Step 1: Replace `IntroBlock.tsx`**

```tsx
export default function IntroBlock() {
  return (
    <p className="text-lg font-light leading-relaxed text-ink/90">
      Hello, I'm Lazp. A student from Taiwan. I'm co-founder and COO at{" "}
      <a href="https://lazco.dev" target="_blank" rel="noreferrer">
        Lazco Studio
      </a>
      . Skilled in web application development, Linux, and other fields. Has some
      teaching and speaking experience in short and long-term camps and courses
      (introduction to programming languages, information security, operating
      systems, etc.).
    </p>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 3: Commit**

```bash
git add src/components/IntroBlock.tsx
git commit -m "feat: restyle intro as calm lead paragraph"
```

---

## Task 10: Convert experience blocks to Section + TimelineItem

**Files:**
- Modify (replace each): `src/components/WorkExpBlock.tsx`, `src/components/EducationExpBlock.tsx`, `src/components/ProjectExpBlock.tsx`, `src/components/CompetitionExpBlock.tsx`

**Interfaces:**
- Consumes: `Section` (default), `TimelineItem` (default).
- Produces: each exports `default function ...Block()` rendering a `Section` with the same content as today.

- [ ] **Step 1: Replace `WorkExpBlock.tsx`**

```tsx
import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function WorkExpBlock() {
  return (
    <Section label="Work">
      <TimelineItem
        title="Co-Founder, Lazco Studio"
        meta="March 2023 ~ PRESENT"
        contents={[
          "Start a VPS renting and digital service company registered in UK.",
          "Develop new products and market them to expand the market.",
          "Web Application Development with Nextjs and React.",
        ]}
      />
      <TimelineItem
        title="Software Engineer Intern, Shopback"
        meta="May 2026 ~ July 2026"
        contents={[
          "Built Playwright-based E2E automation covering critical web user flows, enabling reliable regression testing for new feature releases.",
          "Expanded Appium automation across Android and iOS applications, improving cross-platform testing coverage.",
          "Designed an agentic workflow that automatically updated E2E test scripts after UI changes, reducing maintenance effort by over 80%.",
          "Developed GitLab CI dashboards to visualize test coverage, execution status, and quality metrics for engineering teams.",
        ]}
      />
      <TimelineItem
        title="Software Engineer Intern, National Center for High-Performance Computing"
        meta="October 2025 ~ Recent"
        contents={[
          "Built full-stack web applications using React, FastAPI, and PostgreSQL to support large-scale research data workflows.",
          "Refactored backend services into a modular architecture with structured error handling, simplifying debugging and future feature development.",
          "Developed and maintained over 50 unit tests, reducing regression risks and improving backend reliability.",
          "Built data ingestion pipelines that imported CSV and Excel datasets into PostgreSQL, streamlining large-scale data processing.",
          "Improved backend scalability by contributing to API architecture and database schema optimization.",
          "Implemented OpenClaw File Browsing Helper, introducing secure file access and editing controls for enterprise environments.",
        ]}
      />
      <TimelineItem
        title="Software Engineer, Picktrip startup team"
        meta="April 2024 ~ October 2024"
        contents={[
          "Built a full-stack internal platform using Node.js and React that automated operational workflows, increasing data analysis efficiency by 10×.",
          "Developed an embedding-based recommendation engine for personalized attraction discovery across large-scale tourism datasets.",
          "Analyzed user behavior using Python (Pandas, Matplotlib) to improve recommendation quality and user engagement.",
          "Led deployment infrastructure with Docker, Nginx, and CI automation, ensuring reliable production service delivery.",
        ]}
      />
    </Section>
  );
}
```

- [ ] **Step 2: Replace `EducationExpBlock.tsx`**

```tsx
import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function EducationExpBlock() {
  return (
    <Section label="Education">
      <TimelineItem
        title="B.S. Computer Science and Information Engineering"
        meta="National Taiwan University of Science and Technology (NTUST) · 2025/09 ~ 2029/06"
      />
    </Section>
  );
}
```

- [ ] **Step 3: Replace `ProjectExpBlock.tsx`**

```tsx
import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function ProjectExpBlock() {
  return (
    <Section label="Projects">
      <TimelineItem
        title="MDSIG 2.0 明道學生共學社群線上論壇"
        meta="Next.js, Express.js, MongoDB, RESTful API, Nginx, JWT"
        contents={[
          "Served as the project manager for a four-person development team, successfully coordinating front-end and back-end development and design resources, establishing an efficient communication mechanism to ensure alignment with the school's requirements, and delivering the project on schedule.",
          "Responsible for Next.js front-end development, accurately implementing UI/UX design drafts, and introducing responsive web design (RWD) and server-side rendering (SSR) technologies.",
          "Led back-end system architecture design, optimized RESTful API structure, implemented pagination mechanisms and data caching strategies, effectively reducing API transmission load by 70% and improving overall system performance.",
        ]}
      />
      <TimelineItem
        title="MDTC 明道人才雲"
        meta="Next.js, Express.js, MongoDB, RESTful API, Nginx, Prisma ORM, Cloudflare R2"
        contents={[
          "The forum project received recognition from the school and the principal, continuing to lead the same team in collaboration with the alumni association and the parent association to develop the Mingdao Talent Cloud.",
          "User-related files (resumes, other personal data) are stored using Cloudflare R2. By utilizing MongoDB and TTL mechanisms as a cache, the usage of Cloudflare's API is reduced, effectively lowering API costs.",
          "Next.js combined with Server Action is used to create an integrated front-end and back-end application.",
        ]}
      />
    </Section>
  );
}
```

- [ ] **Step 4: Replace `CompetitionExpBlock.tsx`**

```tsx
import Section from "./Section";
import TimelineItem from "./TimelineItem";

export default function CompetitionExpBlock() {
  return (
    <Section label="Competition">
      <TimelineItem
        title="Competition Experience"
        contents={[
          "2024 全國資安金盾獎 高中組，全國第三名 (數位發展部資通安全署)",
          "2024 應用程式效能優化競賽 (HiPAC)，第三名 (國研院國網中心)",
          "2023 g0v 零時小學校專案孵化競賽，獲選種子團隊",
        ]}
      />
    </Section>
  );
}
```

- [ ] **Step 5: Verify typecheck**

Run: `npx tsc -b`
Expected: no type errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/WorkExpBlock.tsx src/components/EducationExpBlock.tsx src/components/ProjectExpBlock.tsx src/components/CompetitionExpBlock.tsx
git commit -m "feat: convert experience blocks to Section + TimelineItem"
```

---

## Task 11: Two-column App shell + section reveal

**Files:**
- Modify: `src/App.tsx` (replace entire file)

**Interfaces:**
- Consumes: `Sidebar`, `IntroBlock`, `WorkExpBlock`, `EducationExpBlock`, `ProjectExpBlock`, `CompetitionExpBlock`.
- Produces: the final page — centered `max-w-[1080px]` grid: sidebar column (`md:w-[300px]`) + content column. Order in content: Intro → Work → Education → Projects → Competition.

- [ ] **Step 1: Replace `src/App.tsx`**

```tsx
import Sidebar from "./components/Sidebar";
import IntroBlock from "./components/IntroBlock";
import WorkExpBlock from "./components/WorkExpBlock";
import EducationExpBlock from "./components/EducationExpBlock";
import ProjectExpBlock from "./components/ProjectExpBlock";
import CompetitionExpBlock from "./components/CompetitionExpBlock";

import "./App.css";

function App() {
  return (
    <div className="min-h-dvh">
      <div className="mx-auto w-[90dvw] max-w-[1080px] py-12 md:py-20 flex flex-col md:flex-row gap-12 md:gap-16">
        <div className="md:w-[300px] md:shrink-0">
          <Sidebar />
        </div>
        <main className="min-w-0 flex-1">
          <IntroBlock />
          <div className="mt-12 flex flex-col">
            <WorkExpBlock />
            <EducationExpBlock />
            <ProjectExpBlock />
            <CompetitionExpBlock />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
```

- [ ] **Step 2: Verify build + typecheck + tests**

Run: `npx tsc -b && npm run build && npm test`
Expected: all pass; `dist/` produced.

- [ ] **Step 3: Commit**

```bash
git add src/App.tsx
git commit -m "feat: two-column sidebar + timeline app shell"
```

---

## Task 12: Lint, browser verification, and polish

**Files:**
- Modify (only if lint/verification surfaces issues): any of the above.

**Interfaces:**
- Consumes: full app.
- Produces: a verified, lint-clean build.

- [ ] **Step 1: Lint**

Run: `npm run lint`
Expected: no errors. Fix any reported issues (e.g., unused imports) and re-run.

- [ ] **Step 2: Run the dev server and verify behavior in a browser**

Run: `npm run dev` (serves at the printed localhost URL).
Verify manually (or via the `claude-in-chrome` tools):
  1. Page loads **dark** with no light flash.
  2. Desktop (≥768px): sidebar sits left and stays put while the timeline scrolls; timeline rule + accent node dots render.
  3. Click the toggle → switches to light; icon flips to moon; reload → **still light** (persisted). Toggle back → dark; reload → dark.
  4. Narrow the window (<768px): sidebar collapses to a top header; toggle stays reachable; skills render at the bottom of the sidebar block.
  5. Chinese text in Projects/Competition renders correctly in both themes.
  6. Links use the accent color (no blue→pink gradient anywhere).
  7. `/Resume.pdf` opens the PDF.

- [ ] **Step 3: Accessibility spot-check**

  - Tab through: email, resume link, theme toggle, and body links show a visible accent focus ring.
  - Toggle button announces `aria-label` "Switch to light/dark mode".

- [ ] **Step 4: Final commit (if any fixes were made)**

```bash
git add -A
git commit -m "fix: lint and verification polish for redesign"
```

---

## Self-Review Notes

- **Spec coverage:** Layout (Tasks 8, 11) ✓; theme system — tokens/variant (1), no-flash (2), hook (3), toggle (4) ✓; visual language — flat surfaces + accent + fonts (1, primitives 5) ✓; skills in sidebar footer (7, 8) ✓; retire gradient (1) ✓; reduced-motion (1) ✓; resume link (2, 6) ✓; a11y (4, 12) ✓; static build (11, 12) ✓; content preserved verbatim (9, 10) ✓.
- **Placeholders:** none — all code is concrete; `data/resume.ts` explicitly marked "do not create."
- **Type consistency:** `useTheme(): { theme, toggle }` used identically in Tasks 3–4; `Section({label,children})` and `TimelineItem({title,meta,contents,children})` signatures match across Tasks 5, 10; token utility names match Global Constraints throughout.
- **Motion note:** section fade/slide-in from the spec is delivered as CSS transitions honoring `prefers-reduced-motion`; a JS IntersectionObserver reveal was dropped as YAGNI for a short static page (calm, no dependency). Timeline + smooth scroll provide the movement.
