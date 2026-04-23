import {
  BookOpenIcon,
  BrainIcon,
  ChevronDownIcon,
  ClockIcon,
  FlameIcon,
  ZapIcon,
} from "lucide-react";
import { CategoryChip } from "@/components/ccat";
import { SpatialTetromino } from "./spatial-tetromino";

// ── 18-second section ──────────────────────────────────────────
export function EighteenSecondSection() {
  return (
    <section
      id="how-it-works"
      className="border-t border-border px-10 py-24"
    >
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-20 items-center">
        <div>
          <div className="font-mono text-[12px] text-brand tracking-[0.08em] mb-4">
            THE 18-SECOND PROBLEM
          </div>
          <h2 className="text-4xl lg:text-[44px] mb-5">
            Pace is what breaks people.
            <br />
            Not knowledge.
          </h2>
          <p className="text-[17px] leading-[1.6] text-ink-muted max-w-[440px]">
            The CCAT gives you 15 minutes for 50 questions. That&apos;s ~18 seconds
            each. The average candidate answers 24. The top ones answer 40+.
            The difference isn&apos;t IQ — it&apos;s practice under the clock.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-10 shadow-2">
          <div className="flex justify-between mb-8">
            <StatBlock label="Total time" value="15:00" />
            <StatBlock label="Questions" value="50" />
            <StatBlock label="Per question" value="00:18" accent />
          </div>
          <div className="grid grid-cols-[repeat(25,1fr)] gap-1.5 mb-6">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-sm ${
                  i < 24 ? "bg-brand" : "bg-[color:var(--color-paper-200)]"
                }`}
              />
            ))}
          </div>
          <div className="flex justify-between text-[13px]">
            <span className="text-ink-muted flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-brand" />
              Average candidate: 24 answered
            </span>
            <span className="text-ink-subtle flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[color:var(--color-paper-300)]" />
              Remaining unanswered
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <div
        className={`text-[11px] uppercase tracking-[0.08em] mb-1 ${
          accent ? "text-brand" : "text-ink-subtle"
        }`}
      >
        {label}
      </div>
      <div
        className={`font-mono tabular-nums text-[32px] font-medium tracking-[-0.02em] leading-none ${
          accent ? "text-brand" : "text-ink"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

// ── How it helps ───────────────────────────────────────────────
const FEATURES = [
  {
    title: "Mock-mode realism",
    body:
      "Same 15:00 clock. Same question count. No feedback until the end — exactly like the real thing.",
    Icon: ClockIcon,
  },
  {
    title: "Spaced review",
    body: "Missed questions come back on a Leitner schedule so they stick.",
    Icon: BookOpenIcon,
  },
  {
    title: "Pace trainer",
    body:
      "A drill that punishes hesitation. You learn to answer, skip, or move on in 18 seconds flat.",
    Icon: ZapIcon,
  },
  {
    title: "AI tutor",
    body:
      "Ask why an answer is right. Get a calm, specific explanation — not a wall of text.",
    Icon: BrainIcon,
  },
];

export function HowItHelpsSection() {
  return (
    <section className="border-t border-border px-10 py-24">
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[520px] mb-14">
          <div className="font-mono text-[12px] text-brand tracking-[0.08em] mb-4">
            HOW IT HELPS
          </div>
          <h2 className="text-4xl lg:text-[44px]">
            Everything you need. Nothing you don&apos;t.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-lg border border-border bg-card p-6 shadow-1"
            >
              <div className="inline-flex size-9 items-center justify-center rounded-md bg-brand-soft text-brand mb-5">
                <f.Icon className="size-[18px]" strokeWidth={1.6} />
              </div>
              <div className="text-base font-medium mb-2">{f.title}</div>
              <p className="text-[14px] leading-[1.55] text-ink-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Sample question ────────────────────────────────────────────
export function SampleQuestionSection() {
  return (
    <section className="border-t border-border bg-surface-sunk px-10 py-24">
      <div className="max-w-[1120px] mx-auto">
        <div className="max-w-[560px] mb-12">
          <div className="font-mono text-[12px] text-brand tracking-[0.08em] mb-4">
            TRY ONE
          </div>
          <h2 className="text-4xl lg:text-[44px]">
            What a question actually looks like.
          </h2>
          <p className="text-base text-ink-muted mt-3">
            No sign up. Pick an answer — we&apos;ll show you the rest.
          </p>
        </div>

        <div className="max-w-[820px] mx-auto rounded-xl border border-border bg-card p-10 shadow-2">
          <div className="flex justify-between items-center mb-7">
            <CategoryChip category="spatial" />
            <span className="font-mono text-[11px] tracking-[0.08em] text-ink-subtle">
              SAMPLE · 3 of 50
            </span>
          </div>
          <div className="text-xl font-medium mb-7 text-ink">
            Which shape completes the sequence?
          </div>
          <div className="flex flex-wrap gap-6 justify-center mb-9 p-6 bg-surface-sunk rounded-lg">
            <SpatialTetromino variant={1} size={72} />
            <SpatialTetromino variant={2} size={72} />
            <SpatialTetromino variant={3} size={72} />
            <div className="flex items-center justify-center size-[84px] rounded-lg border-2 border-dashed border-border-strong text-ink-subtle font-display text-2xl">
              ?
            </div>
          </div>
          <div className="grid grid-cols-5 gap-2.5">
            {(["A", "B", "C", "D", "E"] as const).map((letter, i) => {
              const isSelected = i === 2;
              const variant = (i + 1) as 1 | 2 | 3 | 4 | 5;
              return (
                <button
                  key={letter}
                  type="button"
                  aria-pressed={isSelected}
                  className={`flex flex-col items-center gap-2.5 rounded-lg border p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isSelected
                      ? "border-[color:var(--brand)] bg-brand-soft"
                      : "border-border bg-card hover:bg-muted"
                  }`}
                >
                  <SpatialTetromino variant={variant} size={44} />
                  <span className="font-mono text-[11px] text-ink-subtle">
                    {letter}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Progress section + mini dashboard preview ──────────────────
export function ProgressSection() {
  return (
    <section className="border-t border-border px-10 py-24">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-20 items-center">
        <div>
          <div className="font-mono text-[12px] text-brand tracking-[0.08em] mb-4">
            PROGRESS YOU CAN SEE
          </div>
          <h2 className="text-4xl lg:text-[44px] mb-5">
            Watch your pace close in on 18 seconds.
          </h2>
          <p className="text-[17px] leading-[1.6] text-ink-muted max-w-[420px]">
            Per-category accuracy, average time per question, percentile rank.
            Honest numbers, delivered without theatrics.
          </p>
        </div>
        <DashboardPreview />
      </div>
    </section>
  );
}

const SPARK_POINTS = [
  [0, 48], [32, 42], [64, 44], [96, 36], [128, 30], [160, 28],
  [192, 22], [224, 24], [256, 14], [288, 12], [320, 8],
] as const;

const CATEGORY_BARS: {
  label: string;
  pct: number;
  barClass: string;
}[] = [
  { label: "Verbal", pct: 82, barClass: "bg-verbal-500" },
  { label: "Math", pct: 64, barClass: "bg-math-500" },
  { label: "Spatial", pct: 58, barClass: "bg-spatial-500" },
];

function DashboardPreview() {
  return (
    <div className="rounded-xl border border-border bg-card p-7 shadow-2">
      <div className="flex justify-between mb-6">
        <div>
          <div className="text-[12px] text-ink-subtle mb-1">Latest score</div>
          <div className="font-display text-[40px] leading-none">
            34<span className="text-ink-subtle">/50</span>
          </div>
          <div className="text-[13px] text-brand mt-1">
            ↑ Better than 68% of candidates
          </div>
        </div>
        <div className="flex items-center gap-2">
          <FlameIcon
            className="size-[18px] text-[color:var(--color-warning)]"
            strokeWidth={1.6}
          />
          <span className="font-mono tabular-nums text-xl">7</span>
          <span className="text-[12px] text-ink-subtle">day streak</span>
        </div>
      </div>
      <svg viewBox="0 0 320 60" className="w-full h-[60px] mb-6">
        <polyline
          fill="none"
          stroke="var(--brand)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          points={SPARK_POINTS.map(([x, y]) => `${x},${y}`).join(" ")}
        />
        {SPARK_POINTS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2.5} fill="var(--brand)" />
        ))}
      </svg>
      <div className="flex flex-col gap-2.5">
        {CATEGORY_BARS.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[80px_1fr_40px] items-center gap-3"
          >
            <span className="text-[13px]">{r.label}</span>
            <div className="h-2 rounded-full bg-surface-sunk overflow-hidden">
              <div
                className={`h-full rounded-full ${r.barClass}`}
                style={{ width: `${r.pct}%` }}
              />
            </div>
            <span className="font-mono tabular-nums text-[12px] text-ink-muted text-right">
              {r.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Proof stats ────────────────────────────────────────────────
const PROOF_STATS = [
  { n: "200+", l: "Hand-written questions" },
  { n: "4", l: "Full 50-question mock tests" },
  { n: "18s", l: "The problem we solve" },
];

export function ProofSection() {
  return (
    <section id="pricing" className="border-t border-border bg-surface-sunk px-10 py-24">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">
        {PROOF_STATS.map((s) => (
          <div key={s.n}>
            <div className="font-display text-5xl sm:text-6xl tracking-[-0.03em] leading-none">
              {s.n}
            </div>
            <div className="text-[15px] text-ink-muted mt-2">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── FAQ ────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Is this the real CCAT?",
    a: "No. We build original practice questions in the same style and format. The real CCAT is owned by Criteria Corp — we're unaffiliated.",
  },
  {
    q: "Is it free?",
    a: "The first practice test is free. A full subscription unlocks all 4 mocks, drills, and spaced review.",
  },
  {
    q: "How accurate are the predicted scores?",
    a: "Our sample users score within ±4 of their real-CCAT result on average. We don't guarantee scores — the real test varies.",
  },
  {
    q: "Do you use my data to train models?",
    a: "No. Your attempts stay yours.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="border-t border-border px-10 py-24">
      <div className="max-w-[760px] mx-auto">
        <h2 className="text-4xl lg:text-[44px] mb-10">Questions, answered.</h2>
        {FAQS.map((item, i) => (
          <details
            key={i}
            open={i === 0}
            className="group border-b border-border py-6"
          >
            <summary className="flex items-start justify-between gap-10 cursor-pointer list-none">
              <div className="text-lg font-medium flex-1">{item.q}</div>
              <ChevronDownIcon className="size-5 text-ink-subtle shrink-0 transition-transform group-open:rotate-180" />
            </summary>
            <div className="mt-3 text-[15px] leading-[1.6] text-ink-muted">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
