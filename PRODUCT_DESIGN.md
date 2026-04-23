# CCAT Practice — Full Product Design

This document turns the current prototype (200 static questions, client-side timer, localStorage persistence) into a real, full-stack product with auth, progress tracking, integrity checks, and features that measurably improve test prep outcomes.

It's split into two parts:
1. **Features that actually move the needle on test prep** — grouped by what they unlock.
2. **System design** — stack, data model, integrity rules, and a phased build plan.

---

## 1. Features

The ★ items are the unique differentiators — most competitor CCAT-prep sites don't do these well.

### 1.1 Preparation effectiveness

- **★ Adaptive weakness drills.** After each test, identify the user's weakest sub-skill (e.g. "3×3 matrix rotation" or "rate problems") and auto-generate a 10-question drill targeting exactly that.
- **★ Spaced repetition for missed questions.** Anki-style — questions you got wrong resurface on day 1, 3, 7, 14 until you nail them consistently. CCAT rewards pattern recognition; spaced repetition is the right mechanic.
- **★ Pace trainer.** CCAT = 18 seconds/question. A ghost indicator shows "you should be on Q17 by now" — the single biggest reason people fail CCAT is pacing, not knowledge.
- **Category drills** — isolate Verbal / Math / Spatial for 10-minute mini-sessions when you only have coffee-break time.
- **Difficulty laddering** — questions tagged Easy / Medium / Hard. Warmup with Easy, build to Hard.
- **Warmup mode** — 5 calibration questions before a full test so users don't waste Q1–Q3 getting into flow.

### 1.2 Real-test authenticity

- **Mock mode vs. Practice mode.**
  - *Mock* = locked 15:00 timer, no pausing, no explanations until the end, fullscreen-enforced, tab-switch warnings.
  - *Practice* = untimed, instant feedback, hints allowed.
- **★ Focus integrity.** Listen to `visibilitychange`, `blur`, `fullscreenchange`, copy/paste events. Log them to the attempt. In Mock mode, show a red banner "3 tab switches detected" on the results screen. Trains users to stay focused on real test day.
- **Proctor simulation (optional toggle)** — webcam-off honor mode, full-screen lock, right-click disabled.

### 1.3 Explanation quality

- **★ AI tutor chat per question.** "Why is D wrong?" opens a sidebar Claude chat scoped to that question + the user's selected answer. This is where an LLM pays rent — personalized explanations beat static ones.
- **Video/animated walkthroughs** for spatial questions (step-through rotations frame by frame).
- **Related-concept links** — "Struggling with this? See our Rate Problems primer."

### 1.4 Motivation & progress

- **Progress dashboard**: score over time, per-category percentile, time-per-question trend.
- **★ Percentile ranking** — "You scored better than 68% of users on Test 2." Social proof drives return visits.
- **Streaks + daily goal** (e.g. "10 questions/day"). One push notification, not spammy.
- **Question of the day** via email (Resend) — reactivates lapsed users.
- **Achievements** — "First 40+", "7-day streak", "Spatial Master (80%+ on 3 tests)".

### 1.5 Quality-of-life

- **Bookmarks** — star tricky questions to review later.
- **Attempt replay** — see every answer from a past attempt with which ones you flagged/changed.
- **Export PDF report** after each test (great for sharing with a coach/recruiter).
- **Keyboard-first UX** (already partial — expand it).
- **PWA / mobile responsive** — subway practice.
- **Dark mode**.

### 1.6 Community (later, carefully)

- **Per-question discussion** (moderated, hidden by default to avoid spoilers until you've answered).
- **Opt-in leaderboards** by test.

---

## 2. System design

### 2.1 Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 App Router | Already started; RSC + server actions simplify fullstack |
| Database | Postgres (Neon or Supabase) | Relational fits attempt/answer/event data cleanly |
| ORM | Drizzle | Lightweight, SQL-first, great TS inference |
| Auth | Auth.js (NextAuth) | Google OAuth + magic-link email + credentials |
| Email | Resend | Magic links, QOTD, welcome emails |
| Analytics | PostHog (self-hostable) | Event tracking for tab switches, funnels |
| LLM | Claude API (Sonnet 4.5) | AI tutor chat, question generation admin tool |
| Jobs | Vercel Cron + Upstash QStash | Daily streak rollups, SRS scheduling, QOTD send |
| Hosting | Vercel | Seamless with Next; edge for landing page |
| Payments (future) | Stripe | Free tier + Pro subscription |

### 2.2 Data model (core tables)

```text
users(id, email, name, image, created_at)

questions(id, category, difficulty, prompt, figure_svg, options_json,
          answer, explanation, tags[], version, created_at)

tests(id, title, slug, question_ids[])          -- or generated dynamically

attempts(id, user_id, test_id, mode, started_at, submitted_at,
         time_used_ms, score, category_scores_json)

attempt_answers(id, attempt_id, question_id, selected_key,
                time_spent_ms, flagged, changed_count)

attempt_events(id, attempt_id, kind, at)        -- tab_blur, focus, paste, fullscreen_exit

bookmarks(user_id, question_id, created_at)

review_cards(user_id, question_id, ease, interval_days, due_at)  -- SRS

streaks(user_id, current, longest, last_activity_date)

user_category_stats(user_id, category, attempts, correct, avg_time_ms)
```

### 2.3 Critical integrity rules (server-side)

- **Answers never ship to the client until submission.** `getTest()` returns questions with options but **no** `answer`/`explanation` field. Grading is a server action.
- **Server-side timer.** Client timer is UX only. Server records `started_at`, rejects submissions past `started_at + 15 min + grace`.
- **Rate limit** auth and attempt creation (Upstash rate-limit middleware).
- **Audit tab-switches.** Client batches `visibilitychange` events and POSTs on submit; server stores in `attempt_events`.

### 2.4 Architecture at a glance

```text
┌─────────────────────────────────────────────────┐
│  Next.js App (Vercel)                           │
│  ┌───────────────┐   ┌────────────────────────┐ │
│  │ Landing (RSC) │   │ Test Runner (client)   │ │
│  └───────────────┘   └────────┬───────────────┘ │
│  ┌────────────────────────────┴────┐            │
│  │ Server Actions / Route Handlers │── Auth.js  │
│  └──────────────┬──────────────────┘            │
└─────────────────┼───────────────────────────────┘
                  │
       ┌──────────┼───────────────┐
       ▼          ▼               ▼
   Postgres    Claude API     Resend / QStash
   (Neon)      (tutor chat)   (email, cron)
```

### 2.5 Build phases

1. **Foundation (1–2 weeks)** — Auth.js + Postgres + Drizzle. Migrate the current 200 questions into DB. Server-side grading. Existing flow still works, just now with accounts.
2. **Dashboard + history (1 week)** — attempts list, progress chart, per-category stats, bookmarks.
3. **Integrity layer (3 days)** — tab-switch tracking, server timer enforcement, mock vs practice modes.
4. **Differentiators (2 weeks)** — spaced repetition engine, adaptive weakness drills, pace trainer, percentile rankings.
5. **AI tutor (1 week)** — Claude API integration with prompt caching on the question + user-answer context.
6. **Landing page + marketing (1 week)** — hero, feature walkthrough, "why CCAT matters", sample question, pricing.
7. **Polish (ongoing)** — PWA, dark mode, QOTD emails, achievements, PDF export.

### 2.6 One pivotal decision to make now

**Keep questions in code (current) vs. migrate to DB.**

**Recommendation: migrate to DB at the start of phase 1.** It unlocks:

- Admin UI to add/edit questions without deploying.
- A/B testing question difficulty ratings.
- AI-assisted question generation pipeline (Claude drafts → human reviews → published).
- Versioning (so a question's wording change doesn't invalidate past attempt scores).

The SVG strings just become a `text` column — no loss of expressiveness.

---

## 3. Open questions / next steps

Good next moves:

- **(a)** Write out the Drizzle schema + a migration plan from the current static files.
- **(b)** Design the spaced-repetition algorithm and data flow.
- **(c)** Wireframe the landing page + dashboard.
- **(d)** Decide free-tier vs. Pro split (e.g. free = 2 tests + basic progress; Pro = all tests + AI tutor + SRS + drills).
