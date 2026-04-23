# Design Agent Prompt — CCAT Practice

Paste the section below ("--- PROMPT START ---" through "--- PROMPT END ---") to a design-capable AI agent. It is self-contained: the agent will not have this repo's context, so everything it needs is embedded.

---

## --- PROMPT START ---

You are a senior product designer. Design a complete, production-quality design system and the key screens for a web app called **CCAT Practice** — a test-prep tool that helps job candidates prepare for the Criteria Cognitive Aptitude Test (CCAT). Deliver beautiful, modern work that feels as polished as Linear, Vercel, or Things 3 — not another generic Tailwind template.

### 1. What the product does

CCAT is a 15-minute, 50-question cognitive test used in hiring. It mixes Verbal, Math/Logic, and Spatial Reasoning questions. The average test-taker answers 24/50; top candidates answer 40+. Pacing (≈18 seconds per question) is the #1 reason people fail — not lack of knowledge.

**CCAT Practice** gives candidates:
- 4 full 50-question practice tests, plus category drills and adaptive weakness drills.
- A **Mock mode** (strict 15:00 timer, fullscreen, no feedback until the end) and a **Practice mode** (untimed, instant feedback, hints).
- Spaced-repetition review for questions they missed.
- A progress dashboard with per-category stats, percentile ranking, streaks.
- An AI tutor that explains any question on demand.
- Focus integrity: the app detects tab switches during Mock mode and reports them.

### 2. Audience and emotional arc

Users are job candidates — often nervous, often preparing the night before an interview. The product must make them feel:

| Surface | Feeling |
|---|---|
| Landing page | **Warm, reassuring, confident.** "You've got this — here's how." |
| Onboarding / pre-test | **Clear, calming, prepared.** Like a flight-attendant safety briefing: short, friendly, unambiguous. |
| Question runner | **Focused, calm, not noisy.** Nothing on screen except what the user needs right now. The UI should disappear. |
| Results | **Honest but encouraging.** Never scolding. Frame failures as "here's what to practice next." |
| Dashboard | **Momentum.** "You're improving. Keep going." |

### 3. Design principles

1. **Calm beats clever.** Lots of whitespace. One focal point per screen. No decorative noise.
2. **Trust through precision.** Perfect alignment, consistent spacing, deliberate typography. Candidates are handing us their career prep — the UI must feel serious and correct.
3. **Warm not corporate.** Soft neutrals, one warm accent, rounded-but-not-bubbly geometry. Avoid the cold blue-gray of enterprise SaaS.
4. **Accessible by default.** WCAG 2.1 AA minimum. Keyboard-first. Motion-reduced variants. Color is never the only signal.
5. **Responsive, mobile-capable.** Full test-taking experience must work on a phone in portrait.

### 4. Design system deliverables

Build these first, then apply them consistently across every screen.

#### 4.1 Brand foundation
- **Name/wordmark treatment** for "CCAT Practice" (and a compact monogram for favicon/app icon).
- **Logo** — simple, geometric, works at 16px and 512px.
- **Voice & tone** — 1-paragraph description + 6 example phrasings (CTA, empty state, error, success, timer warning, results headline).

#### 4.2 Color
- Two palettes: **Light** (default) and **Dark**.
- Warm neutral base (off-white paper, warm gray 50–900 scale) — not cold #F5F5F5.
- **One** primary accent (suggest: a warm indigo or terracotta — pick and defend).
- Semantic colors: success, warning, danger, info. Each with surface/border/text variants.
- **Category hues** for Verbal / Math / Spatial — subtle, distinguishable, never neon.
- Provide hex values, OKLCH equivalents, and Tailwind v4 token names (`--color-accent-500`, etc.).
- All text/background pairs must pass WCAG AA (document contrast ratios).

#### 4.3 Typography
- One display face + one text face (or a single versatile family like Inter, Geist, or General Sans — pick and defend).
- A monospace for timer digits and answer keys (A/B/C/D/E letters look better monospaced).
- Type scale (12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 48 / 60) with line-heights and usage notes.

#### 4.4 Spacing, radii, elevation
- 4px base spacing scale.
- Radius scale (sm 6px → full). Suggest a consistent radius identity (e.g. 10px everywhere for cards).
- 3 elevation levels using soft, warm shadows (not black drop shadows).

#### 4.5 Motion
- Durations (fast 120ms / base 200ms / slow 320ms) and easings (prefer `cubic-bezier(0.2, 0, 0, 1)` or similar).
- Specify where motion is used (page transitions, answer selection, timer pulse in the last 60 seconds) and where it is **not** (during a live test — no distractions).
- Always honor `prefers-reduced-motion`.

#### 4.6 Components
Design each with all states (default / hover / focus-visible / active / disabled / loading) plus dark-mode variants:

- Button (primary, secondary, ghost, danger; sm/md/lg; with icon)
- Input, Textarea, Select, Checkbox, Radio, Toggle
- Card (elevated, outlined, interactive)
- Badge / Pill (category colors, difficulty levels, status)
- Progress bar (linear + ring), Segmented progress (for test navigation)
- Tooltip, Popover, Dialog / Modal, Sheet, Toast
- Tabs, Accordion
- Empty state, Skeleton loader
- **Timer component** — large mode (test runner), small mode (header), warning state under 60s (subtle pulse, color shift)
- **Question card** — prompt, optional figure slot, 5 answer options, flag/bookmark affordance
- **Answer option** — letter badge + label, selected / correct / incorrect / flagged states
- **Question navigator** — grid of 50 cells showing answered / unanswered / flagged / current
- **Keyboard hint chip** — small chip that shows "↑ ↓" or "A B C D E" so keyboard users discover shortcuts
- **Category chip** — Verbal / Math / Spatial, with the category hue
- **Streak flame**, **Achievement badge**, **Percentile ring**
- **Focus-integrity banner** — appears in results when tab switches were detected (informational, not scolding)

### 5. Screens to design

For each: desktop (1440px) and mobile (390px). Include dark mode for all.

#### 5.1 Landing page — *warm, interesting, clear value*

The job: a candidate who's never heard of us in 20 seconds understands what CCAT Practice is, why it will help them, and wants to start a practice test.

Required sections (in order):
1. **Hero.** One-line promise (example seed: *"Walk into your CCAT calm, fast, and ready."*). Short subhead. Primary CTA "Start a free practice test", secondary "How it works". Show a quiet visual — a partial question card, the timer, or an abstract spatial shape — not a stock hero illustration.
2. **The 18-second problem.** One section explaining that CCAT is 50 questions in 15 minutes = 18 seconds each, and that pacing — not knowledge — is what breaks people. This is the hook. Make it a diagram or animated counter, not a paragraph.
3. **How it helps.** 3–4 feature blocks: Mock-mode realism, Spaced-repetition for missed questions, Pace trainer, AI tutor. Each block = icon + headline + 1 sentence + optional inline preview.
4. **What a test looks like.** Interactive inline preview of a real question the user can answer (spatial ideally — shows off the figure renderer).
5. **Progress you can see.** Mockup of the dashboard (progress chart, per-category stats, percentile).
6. **Social proof / numbers.** "200+ hand-written questions", "4 full tests", "tracks your weak spots". If future: testimonials.
7. **FAQ.** Short, honest. "Is this the real CCAT?" / "Is it free?" / "How accurate are the scores?"
8. **Footer.** Minimal. Links, one line, no link-soup.

The page must feel more like a Linear or Stripe landing than a Udemy course page.

#### 5.2 Onboarding — *before the first test*

A 3-step flow (can be one scrollable page or 3 sequential cards — pick and justify):

- **Step 1 — What you're about to do.** "50 questions. 15 minutes. You don't need to answer them all." One-glance summary with icons.
- **Step 2 — How to answer fast.**
  - Keyboard shortcuts (A–E to select, ← → to navigate, F to flag, Enter to submit).
  - You can skip and come back — use the navigator.
  - Flag questions you're unsure of (shows a small demo animation).
- **Step 3 — Focus ground rules.**
  - Don't switch tabs. We track it in Mock mode.
  - Enable full-screen for best focus.
  - There's no penalty for wrong answers — guess if you're out of time.
  - A single "I'm ready — start the 15-minute timer" button. This is the only way into Mock mode.

Each step needs a "skip onboarding" option (respects returning users).

#### 5.3 Test runner — *calm, not noisy*

The single most important screen. Design goals:

- **One question on screen. That's it.** No sidebar. No nav. No ads.
- **Top bar (minimal):** timer (center or right), question counter ("17 / 50"), flag toggle, exit menu (with confirm dialog). Nothing else.
- **Question body:** prompt text (large, readable), optional figure (centered, breathing room around it), 5 answer options as large clickable rows with letter badges.
- **Bottom bar:** Previous / Next, "Jump to question" which opens the 50-cell navigator as a bottom sheet. A subtle "submit test" action, but guarded by confirmation if questions are unanswered.
- **Timer:** large, monospaced, understated. Turns a warmer color under 3:00, gentle pulse under 1:00. Never flashes red aggressively.
- **Keyboard-first.** Show a tiny "Press A–E" hint chip that fades after first use.
- **Category indicator:** a small, low-contrast chip so the user knows what they're looking at without being distracted.
- **No progress percentage** — use the 50-cell navigator instead. Percentage creates anxiety; the grid creates agency.

Dark mode for this screen is the default we recommend — many test-takers prefer it under pressure.

Design both a spatial question (with figure) and a verbal question (text-only) version to prove the layout works in both.

#### 5.4 Results page — *honest, encouraging*

- Big number: score (e.g. "34 / 50"). Underneath, percentile ("Better than 68% of users").
- Per-category breakdown (3 horizontal bars: Verbal / Math / Spatial) with hue coding.
- Time analysis: "Avg 17s/question — you're pacing well." or "Avg 22s/question — work on speed."
- Focus integrity banner if applicable ("2 tab switches detected in Mock mode — practice staying focused").
- "Review answers" — opens a reviewer showing each question, your answer, the correct answer, and a button to **ask the AI tutor** to explain.
- CTAs: "Start next test" and "Drill your weak category".

Do not use red/green for right/wrong exclusively. Use the category hues + icons + labels.

#### 5.5 Dashboard — *momentum*

- Streak flame + "Day 4 of 7" goal.
- Score-over-time sparkline (last 10 attempts).
- Category strength radar or bar chart.
- "Due for review" SRS queue (N questions).
- Recent attempts list.
- Quick-start cards: *Start Test 3*, *10-question Math drill*, *Review 8 missed questions*.

#### 5.6 Other surfaces (lower fidelity OK)

- Sign-in / sign-up (email magic link + Google).
- Settings (theme, reduced motion, email prefs).
- AI tutor side-panel (shows question context; streaming Claude reply; keyboard dismissible).
- 404 and error states.
- Email templates: magic-link, welcome, question-of-the-day, streak-at-risk.

### 6. Non-negotiables

- **Accessibility**: WCAG 2.1 AA contrast on all pairs; focus-visible rings present and beautiful (not a browser default); every icon has a label; live regions for timer warnings; respects `prefers-reduced-motion`.
- **Responsive**: every screen works at 390px (iPhone portrait) without horizontal scroll.
- **No stock illustrations.** Use geometry, type, the product's own SVG figures, or subtle custom marks.
- **No emoji as UI icons.** Use a proper icon set (Lucide, Phosphor, or custom).
- **Consistent radius** — pick one and stick to it across buttons, cards, inputs.
- **One accent color**. If you feel the urge to add a second, don't. Use neutrals + category hues instead.

### 7. Deliverables

Produce, in this order:

1. **`design-system.md`** — all tokens (color, type, spacing, radius, shadow, motion), with hex + OKLCH + Tailwind v4 CSS custom-property names, plus rationale for major choices.
2. **Component library** — React components in TypeScript + Tailwind v4, one file per component, living in `components/ui/`. Each component: typed props, all states, dark-mode-ready, keyboard accessible, documented with a top-of-file comment. Favor composition over config; prefer `asChild` patterns where it fits.
3. **Screen implementations** — actual working Next.js App Router pages for: landing, onboarding, test runner (spatial + verbal variants), results, dashboard. Use the real `figureSvg` renderer from the existing `components/SpatialFigure.tsx` — don't rebuild it.
4. **A `DESIGN.md` walkthrough** — screenshots (or an index of the routes to visit), rationale for each major screen, a short list of tradeoffs you made.

### 8. Constraints

- Stack: **Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.** No additional UI framework (no shadcn, no Radix primitives as a hard dependency — you may re-implement patterns inline or add Radix selectively if you justify it for accessibility).
- Keep the bundle lean. No lottie, no heavy animation libs. Framer Motion is acceptable for page-level transitions if used sparingly.
- Do not rewrite the existing question bank, grading logic, or SVG figure helpers — treat those as given. You're designing the shell around them.

### 9. Before you start

State in one paragraph:
- The accent color you're picking and why.
- The type pairing you're picking and why.
- The single word that captures the product's personality (e.g. "calm", "composed", "ready").

Then build.

## --- PROMPT END ---
