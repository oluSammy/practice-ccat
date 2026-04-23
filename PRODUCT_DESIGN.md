# CCAT Practice — Full Product Design

This document turns the current prototype (200 static questions, client-side timer, localStorage persistence) into a real, full-stack product with auth, progress tracking, integrity checks, and features that measurably improve test prep outcomes.

It's split into three parts:
1. **Features that actually move the needle on test prep** — grouped by what they unlock, as a checklist.
2. **System design** — stack, data model, integrity rules, and a phased build plan.
3. **Issues, tradeoffs & suggested additions** — critique of the current feature list + missing pieces.

A note on terminology before anything else: the current doc conflated two different "flag" behaviors, so this rewrite splits them:
- **Bookmark** — *personal*, "review this later"; private to the user.
- **Report** — *quality feedback to admins*, "this question is wrong/unclear"; enters an admin triage queue.

Where the old doc said "flag" it almost always meant bookmark. Where the new admin-panel requirement says "flag" it means report. Keeping these two concepts separate avoids a messy data model where one boolean has to serve two audiences.

---

## 1. Features

The ★ items are unique differentiators — most competitor CCAT-prep sites don't do these well.

### 1.1 Landing & acquisition

- [ ] **Marketing landing page** — hero, feature walkthrough ("why CCAT matters"), sample question embed, pricing, social proof (percentile stats, testimonials), SEO-targeted FAQ.
- [ ] **Sample test without signup** — one full 15-minute mock accessible anonymously. Conversion happens on the results screen ("Create an account to see your percentile + review your answers").
- [ ] **Feature showcase section** — interactive demos: live pace trainer, live integrity banner, AI-tutor preview with a canned question.

### 1.2 Preparation effectiveness

- [ ] **★ Adaptive weakness drills.** After each test, identify the user's weakest sub-skill (e.g. "3×3 matrix rotation") and auto-generate a 10-question targeted drill.
- [ ] **★ Spaced repetition for missed questions.** Anki-style — wrong answers resurface on day 1, 3, 7, 14 until nailed.
- [ ] **★ Pace trainer.** CCAT = 18 s/question. Ghost indicator shows "you should be on Q17 by now" — pacing, not knowledge, is the #1 reason people fail.
- [ ] **Category drills** — isolate Verbal / Math / Spatial for 10-minute coffee-break sessions.
- [ ] **Difficulty laddering** — Easy → Medium → Hard.
- [ ] **Warmup mode** — 5 calibration questions before a full test.

### 1.3 Questions: categorization & tagging

- [ ] **Category** (top-level: Verbal / Math / Spatial) — drives filtering, per-category stats, drills.
- [ ] **Sub-skill tag** (e.g. `rate-problems`, `matrix-rotation`, `syllogism`, `antonyms`) — drives adaptive drills and SRS grouping. Multi-tag per question.
- [ ] **Difficulty** (Easy / Medium / Hard) — calibrated from user response data over time, not just author opinion.
- [ ] **Source/pack tag** (e.g. `core-200`, `ai-generated-v1`, `user-submitted`) — lets admins gate which question sets appear in which tests.
- [ ] **Tag-based filtering in practice mode** — "give me 10 hard rate problems."
- [ ] **Per-tag accuracy analytics** in the dashboard.

### 1.4 Real-test authenticity

- [ ] **Mock mode vs. Practice mode.**
  - *Mock* = locked 15:00 timer, no pausing, no explanations until the end, fullscreen-enforced, tab-switch warnings.
  - *Practice* = untimed, instant feedback, hints allowed.
- [ ] **★ Focus integrity monitoring.** Listen to `visibilitychange`, `blur`, `fullscreenchange`, Log to `attempt_events`. In Mock mode, show red banner "3 tab switches detected" on the results screen.
  - [ ] **Zero-violation reporting.** When a mock attempt records 0 integrity events, surface it explicitly on the results screen and in the post-test email ("Clean attempt — no tab switches, no focus loss"). Reinforces the behavior you want on real test day.
- [ ] **Proctor simulation (optional)** — honor-mode full-screen lock, right-click disabled. copy/paste events. 

### 1.5 Time integrity & resume

The hardest tradeoff in this product: resume-after-disconnect is a legitimate UX need (dropped wifi, closed laptop by accident) **and** an obvious cheat vector (pause, look up answers, resume). Design must make cheating infeasible without punishing honest users.

- [ ] **Server-authoritative timer.** Single source of truth is the server's `attempts.started_at`. Client timer is UX only; the countdown on submit is `min(client_elapsed, server_elapsed + grace)`.
- [ ] **Heartbeat.** Client POSTs `/attempts/:id/heartbeat` every 10 s with `current_question_id`, `client_elapsed_ms`. Used to detect disconnects and to reconstruct partial progress.
- [ ] **Resume rules (mode-dependent):**
  - *Practice* → resume freely. No penalty, no limit.
  - *Mock* → **wall-clock timer keeps running during disconnect.** If user returns with 3 minutes left on the 15:00 clock, they get 3 minutes. This is how the real test behaves. Closing the tab is not a pause.
  - *Mock with grace window* → optional 60 s hard reconnect window. If you reconnect within 60 s you keep going; if not, the attempt auto-submits with whatever's answered. Shown to the user up front.
- [ ] **Auto-submit on timeout.** Cron job scans `attempts` where `started_at + duration + grace < now()` AND `submitted_at IS NULL`; grades them as-is.
- [ ] **Anti-cheat telemetry.** Record `attempt_events.kind = 'disconnect'` with reason (`visibility_hidden`, `offline`, `heartbeat_missed`) and duration. Disconnect totals surface on the results screen.
- [ ] **No manual pause in Mock mode** — period. Trains the honest user, closes the loophole.

### 1.6 Explanation quality

- [ ] **★ AI tutor chat per question.** "Why is D wrong?" opens a Claude sidebar scoped to that question + the user's selected answer.
- [ ] **Video/animated walkthroughs** for spatial questions (step-through rotations).
- [ ] **Related-concept links** — "Struggling with this? See our Rate Problems primer."

### 1.7 Motivation & progress

- [ ] **Progress dashboard** — score over time, per-category percentile, time-per-question trend.
- [ ] **★ Percentile ranking** — "You scored better than 68% of users on Test 2."
- [ ] **Streaks + daily goal** (e.g. 10 questions/day). One push, not spammy.
- [ ] **Achievements** — "First 40+", "7-day streak", "Spatial Master (80%+ on 3 tests)".

### 1.8 Bookmarks (personal)

- [ ] **Bookmark a question during a test.** Button in the question UI (distinct from Report); doesn't affect scoring.
- [ ] **Bookmark a question from the review screen** after submission.
- [ ] **Bookmarks dashboard** — filterable by category/tag, sortable by "date bookmarked" or "last answered".
- [ ] **Un-bookmark** inline from the dashboard or review.
- [ ] **Bulk actions** — "clear all bookmarks in this category", "send all bookmarks into a drill".

### 1.9 Reports (quality feedback to admin)

- [ ] **Report a question.** Button in the question UI *and* in the review screen. Required fields: reason enum (`wrong-answer`, `typo`, `confusing`, `image-broken`, `duplicate`, `other`) + free-text note.
- [ ] **"My reports" view** for the user — status column (`open / acknowledged / resolved-fixed / resolved-wontfix / resolved-duplicate`) + admin reply text.
- [ ] **In-app notification + email** when an admin replies or a report is resolved. Closes the feedback loop so users know their report mattered.
- [ ] **Reports are private** (not public comments). One report per user per question.

### 1.10 Email touchpoints

- [ ] **Magic-link / verification email** (transactional).
- [ ] **Welcome email** — one-time, links to the first practice test.
- [ ] **Post-test results email.** Sent within ~1 minute of submission. Includes: score, percentile, per-category breakdown, top 3 missed sub-skills, integrity summary, total time, avg time per question, CTA to "Review answers" and "Start adaptive drill". See §1.11 for the full metrics list.
- [ ] **Report-resolved email** — "Thanks for reporting Q42. We fixed it. Your attempt score was unchanged." (See §1.9.)
- [ ] **Question of the day** (opt-in) — one question, answerable from the email (deep link into the app).
- [ ] **Inactivity re-engagement** (opt-in) — "You haven't practiced in 7 days; your streak resets tomorrow." Max once per 7 days.
- [ ] **Email preferences page** — per-category toggles, not a single global unsubscribe. Honest defaults (QOTD off by default).
- [ ] **All marketing emails include List-Unsubscribe header.** Transactional emails (magic link, report replies) do not.

### 1.11 Test analysis metrics

Every metric below shows up in three places: the **results screen**, the **post-test email**, and the **review-answers view** where relevant.

Per-attempt aggregates:
- [ ] Total time used (mm:ss) and time remaining at submission.
- [ ] Questions answered / skipped / unanswered.
- [ ] Correct / incorrect counts; raw score and scaled score if we add scaling.
- [ ] Percentile among all attempts on this test.
- [ ] Integrity summary: focus events, disconnect count, total disconnect duration.

Per-category breakdown (Verbal / Math / Spatial):
- [ ] Questions seen, correct, accuracy %.
- [ ] Average time per question (tabular-nums).
- [ ] Time-share of the total test (stacked bar).
- [ ] Percentile *within* category.

Per-question review feedback (review-answers screen):
- [ ] Your answer vs correct answer, with explanation.
- [ ] Time spent on this question (vs median time for this question across all users).
- [ ] Pace delta — "you answered this in 24 s, target pace is 18 s".
- [ ] Changed-answer indicator — "you changed A → C". Research shows changed answers are *right* more often; we surface whether that happened here.
- [ ] Difficulty rating (calibrated) + your cohort's accuracy ("62% of users got this right").
- [ ] Tag chips — clickable to spin up a drill on that sub-skill.

Cohort-wide metrics (dashboard, not per-attempt):
- [ ] Accuracy by difficulty (Easy/Med/Hard).
- [ ] Accuracy by tag — heat-map of strengths/weaknesses.
- [ ] Time-per-question trend over the last N attempts.
- [ ] Score trend with a 3-attempt rolling average.

### 1.12 Admin panel

Gated behind an `admin` role on `users`. Everything here is logged to an audit table.

- [ ] **Users list** — search by email/name; columns = attempts, last active, created_at. Click through to user detail (attempts list, reports filed, email preferences). Impersonation is **not** included by default (trust + liability).
- [ ] **Questions CRUD.**
  - [ ] Create/edit with live preview (renders SVG, options, explanation the way the runner will).
  - [ ] Category + multi-tag + difficulty picker.
  - [ ] Versioning — edits create a new `version` row; past attempts keep referencing the version they were graded against. Scoring never retroactively changes.
  - [ ] Publish / unpublish toggle (soft delete).
  - [ ] Per-question analytics sidebar — accuracy, median time, report count.
- [ ] **Batch upload.**
  - [ ] CSV **and** JSON accepted. JSON Schema + example downloadable from the upload page.
  - [ ] **Dry-run preview** — parse, validate, render each question the way the runner would; reject the whole batch if any row fails validation (no partial imports). Show per-row diffs if updating existing IDs.
  - [ ] Bulk tag assignment during import (e.g. apply `source=pack-2025-05` to all rows).
  - [ ] Idempotency key per batch to prevent double-submits.
- [ ] **Reports triage queue.**
  - [ ] Columns: question, reason, reporter, filed_at, status.
  - [ ] Filters by reason, status, category.
  - [ ] Actions: `acknowledge`, `reply` (with message sent to user), `resolve-fixed` (links to the question edit), `resolve-wontfix`, `resolve-duplicate` (links to canonical report).
  - [ ] Bulk-resolve duplicates.
  - [ ] Resolved reports stay visible — filterable — so patterns (one question with 20 reports) are obvious.
- [ ] **Audit log** — every admin action (question edit, report resolve, user role change) recorded with actor + before/after diff. Read-only.
- [ ] **Content analytics dashboard** — questions sorted by report count, by accuracy outlier (too easy/too hard), by median time outlier. Drives content quality improvements.

### 1.13 Quality-of-life

- [ ] **Attempt replay** — every answer from a past attempt, with which you bookmarked and which you changed.
- [ ] **Export PDF report** after each test.
- [ ] **Keyboard-first UX** — already partial; expand it (A/B/C/D, Enter = next, F = bookmark, R = report).
- [ ] **PWA / mobile responsive** — subway practice.
- [ ] **Dark mode** — done as part of the design foundation pass.

### 1.14 Community (later, carefully)

- [ ] Per-question discussion — moderated, hidden by default until you've answered.
- [ ] Opt-in leaderboards by test.

---

## 2. System design

### 2.1 Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 App Router | RSC + server actions simplify fullstack |
| Database | Postgres (Neon or Supabase) | Relational fits attempt/answer/event data |
| ORM | Drizzle | Lightweight, SQL-first, great TS inference |
| Auth | Auth.js (NextAuth) | Google OAuth + magic-link email |
| Email | Resend | Magic links, results emails, QOTD |
| Analytics | PostHog (self-hostable) | Event tracking, funnels |
| LLM | Claude API (Sonnet 4.6) | AI tutor, admin question-gen tool |
| Jobs | Vercel Cron + Upstash QStash | SRS, streak rollups, auto-submit, QOTD |
| Storage | S3-compatible (R2) | Question images if SVG isn't enough |
| Hosting | Vercel | Seamless with Next; edge for landing |
| Payments (future) | Stripe | Free + Pro |

### 2.2 Data model (core tables)

```text
users(id, email, name, image, role, email_prefs_json, created_at)

questions(id, category, difficulty, prompt, figure_svg, options_json,
          answer, explanation, tags[], source, version, published, created_at)
questions_versions(question_id, version, …snapshot fields…)   -- immutable

tests(id, title, slug, mode_default, duration_seconds, question_ids[])

attempts(id, user_id, test_id, mode, started_at, submitted_at,
         time_used_ms, score, category_scores_json)

attempt_answers(id, attempt_id, question_id, question_version,
                selected_key, time_spent_ms, bookmarked, changed_count,
                first_key, final_key)

attempt_events(id, attempt_id, kind, at, duration_ms, meta_json)
  -- kind ∈ {tab_blur, focus, paste, fullscreen_exit, disconnect, heartbeat}

bookmarks(user_id, question_id, created_at)                   -- personal

reports(id, user_id, question_id, question_version, reason,
        note, status, admin_reply, resolved_by, resolved_at,
        created_at)                                           -- quality feedback

review_cards(user_id, question_id, ease, interval_days, due_at)  -- SRS

streaks(user_id, current, longest, last_activity_date)

user_category_stats(user_id, category, attempts, correct, avg_time_ms)

user_tag_stats(user_id, tag, seen, correct, avg_time_ms)

admin_audit(id, actor_id, kind, target_kind, target_id, diff_json, at)

email_events(id, user_id, kind, sent_at, opened_at, clicked_at)
```

### 2.3 Critical integrity rules (server-side)

- **Answers never ship to the client until submission.** `getTest()` returns questions with options but **no** `answer`/`explanation` field.
- **Server-side timer.** Client timer is UX only. Server records `started_at`, rejects submissions past `started_at + duration + grace`. Cron auto-submits expired attempts.
- **Heartbeat-driven resume.** Mock-mode reconnects honor wall-clock elapsed time, not client-reported time.
- **Rate limit** auth, attempt creation, report filing (Upstash).
- **Version-pinned grading.** `attempt_answers.question_version` freezes the grading rule so edits don't rewrite history.
- **Report abuse protection.** Max N reports per user per day; auto-throttle users whose reports are consistently `wontfix`.

### 2.4 Architecture at a glance

```text
┌─────────────────────────────────────────────────┐
│  Next.js App (Vercel)                           │
│  ┌──────────────┐ ┌────────────┐ ┌────────────┐ │
│  │ Landing RSC  │ │ Test runner│ │ Admin      │ │
│  └──────────────┘ └──────┬─────┘ └──────┬─────┘ │
│  ┌──────────────────────┴───────────────┴─────┐ │
│  │ Server Actions / Route Handlers            │ │── Auth.js
│  └──────────────────┬─────────────────────────┘ │
└─────────────────────┼───────────────────────────┘
                      │
      ┌───────────────┼───────────────┬──────────────┐
      ▼               ▼               ▼              ▼
   Postgres       Claude API     Resend / QStash   PostHog
   (Neon)         (tutor)        (email, cron)     (events)
```

### 2.5 Build phases

1. **Foundation (1–2 wks)** — Auth.js + Postgres + Drizzle. Migrate 200 questions into DB with category/tag/difficulty. Server-side grading + version-pinning. Existing flow still works, just with accounts.
2. **Dashboard + history (1 wk)** — attempts list, progress chart, per-category + per-tag stats, bookmarks, reports ("my reports" view).
3. **Integrity + time layer (1 wk)** — tab-switch tracking, server timer enforcement, heartbeat + resume, mock/practice modes, auto-submit cron.
4. **Admin panel MVP (1 wk)** — users list, questions CRUD with versioning, reports triage, audit log. Batch upload in a follow-up.
5. **Email touchpoints (3 days)** — post-test results email, report-resolved email, email preferences page.
6. **Differentiators (2 wks)** — SRS engine, adaptive weakness drills, pace trainer, percentile rankings.
7. **AI tutor (1 wk)** — Claude API with prompt caching on question + user-answer context.
8. **Landing page + marketing (1 wk)** — hero, feature walkthrough, sample test, pricing.
9. **Polish (ongoing)** — PWA, QOTD emails, achievements, PDF export, batch upload UI.

### 2.6 One pivotal decision to make now

**Keep questions in code (current) vs. migrate to DB.**

**Recommendation: migrate at the start of phase 1.** It unlocks:
- Admin UI without redeploying.
- A/B-calibrated difficulty ratings.
- AI-assisted question generation pipeline.
- **Versioning** — crucial once reports → edits → grading-history matters.

The SVG strings become a `text` column. No loss of expressiveness.

---

## 3. Issues, tradeoffs & suggested additions

Critique of the 8 feature areas above, plus gaps worth filling before build.

### 3.1 Issues with the requested feature list

- **"Flag" was ambiguous.** Split into **Bookmark** (personal, private) and **Report** (quality feedback to admin). Two workflows, two tables, two notification paths. This doc uses the new names consistently.
- **"Time monitoring with resume" needs an explicit anti-cheat posture.** Free resume makes Mock mode worthless as a real-test simulator. Decision baked in above: **Mock = no pause, wall-clock keeps running through disconnect.** Practice mode resumes freely. Without this rule the feature is a regression, not an improvement.
- **"Email after tests" needs latency + opt-out design.** A results email 2 hours later is useless. Send via QStash within 60 seconds. Users must be able to opt out of everything except transactional (magic link, report replies) — one global unsubscribe is a dark pattern at best and a CAN-SPAM/CASL issue at worst.
- **"Focus integrity warnings" is only half the feature.** Surface zero-violation attempts too — positive reinforcement is the behavior change, not just the red banner.
- **"Admin CRUD with batch upload" needs dry-run + versioning or it'll silently corrupt historical scores.** Both are spec'd above; neither was in the original request.
- **Reports → feedback loop to user is often skipped.** If a user reports a bad question and hears nothing, they stop reporting. The report-resolved email + "my reports" view are mandatory for this feature to sustain itself.
- **Categories vs tags.** "Categorized/tagged" is often implemented as a single field; keep them separate (category = top-level enum, tags = multi-valued) or adaptive drills and per-tag analytics become painful.

### 3.2 Gaps worth adding

- **Abandoned-attempt auto-submit** — already above; calling it out as a gap because without it, `attempts` accumulates zombie rows that distort percentile calculations.
- **Accessibility.** Screen reader labels on the answer grid + timer, font-size setting (CCAT is cognitive load — not eyesight), full keyboard nav, prefers-reduced-motion respected (already done in the CSS foundation).
- **Internationalization readiness** — extract strings, even if v1 is English-only. CCAT-prep has a large non-US audience.
- **Data export (GDPR / user trust).** Self-serve "download my data" (attempts, answers, reports, bookmarks) as JSON + CSV. One route handler; big trust win.
- **Account deletion** — hard delete on request, with clear cascade rules (anonymize reports so admin triage history survives).
- **2FA for admin accounts** — non-negotiable once there's a production user table.
- **Rate limiting everywhere** — attempt creation, report filing, AI-tutor calls (per-user dollar cap), batch upload size limits.
- **Content protection against scraping** — questions are the product. Don't ship `answer`/`explanation` to the client before submit; watermark batched AI-generated questions so leaks are traceable; consider a per-attempt question salt so screenshots don't cleanly aggregate.
- **Onboarding survey** — target score + test date → personalizes the dashboard ("you have 21 days, 3 mocks + daily drills gets most users into the 80th percentile").
- **Honest percentile math.** Rank among users who submitted a *clean* mock (0 integrity events). Otherwise cheaters inflate the pool and dilute the signal users paid for.
- **Question-quality analytics loop.** A question with <20% accuracy and 50s median time is probably broken, not hard. Surface these in the admin panel automatically, not just via user reports.
- **AI tutor guardrails.** Cap tokens per user per day; log every chat for abuse/leak auditing; don't let the tutor reveal answers to unanswered questions in the same attempt.
- **Observability.** Add Sentry or equivalent day one — a mis-graded attempt email is worse than no email.

### 3.3 Sequencing suggestion

Ship in this order so each phase is independently useful:
1. DB + auth + server-graded attempts (phase 1).
2. Bookmarks + reports + "my reports" view (phase 2, alongside dashboard).
3. Integrity + resume rules (phase 3) — **before** marketing the product, because Mock mode's credibility depends on it.
4. Admin panel MVP + email touchpoints (phases 4–5) — needed before any meaningful user base, because the feedback loop to users and content-fix loop for admins both depend on these.
5. Differentiators + AI tutor (phases 6–7) — these are what you market.
6. Landing page + pricing (phase 8) — only after the product delivers on its promise.

---

## 4. Open questions

- **(a)** Drizzle schema + migration plan from the current static files.
- **(b)** Spaced-repetition algorithm + data flow.
- **(c)** Landing + dashboard wireframes.
- **(d)** Free-tier vs Pro split (e.g. free = 2 tests + basic progress; Pro = all tests + AI tutor + SRS + drills + PDF export).
- **(e)** Admin bootstrap — first admin via env-var email allowlist? Seed script? Both?
- **(f)** Does "reply to flag" require notifying the user by in-app badge + email, or email-only? (Lean: both, with a single "mark all read" in the notifications tray.)
