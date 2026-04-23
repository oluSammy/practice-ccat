import Link from "next/link";
import { ArrowRightIcon, PlayIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  AnswerOption,
  CategoryChip,
  QuestionNavigator,
  Timer,
  type NavCellState,
} from "@/components/ccat";

function buildNavStates(): NavCellState[] {
  return Array.from({ length: 50 }, (_, i) => {
    if (i === 16) return "current";
    if (i < 12) return "answered";
    if (i === 14) return "flagged";
    return "unanswered";
  });
}

export function Hero() {
  const navStates = buildNavStates();

  return (
    <section className="relative overflow-hidden px-10 pt-20 pb-28">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
        {/* Left column: headline + CTAs */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3 py-1.5 text-[13px] text-brand-ink mb-7">
            <span className="size-1.5 rounded-full bg-brand" />
            200+ original practice questions
          </div>

          <h1 className="font-display text-5xl lg:text-[60px] leading-[1.02] tracking-[-0.03em] mb-6 max-w-[560px]">
            Walk into your CCAT{" "}
            <em className="italic text-brand">calm, fast,</em> and ready.
          </h1>

          <p className="text-lg leading-[1.55] text-ink-muted mb-10 max-w-[480px]">
            50 questions in 15 minutes. The difference between a great score and
            an average one isn&apos;t knowledge — it&apos;s pace. We train it.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/practice"
              className={buttonVariants({
                size: "lg",
                className:
                  "h-12 px-6 rounded-lg text-[15px] bg-primary text-primary-foreground hover:bg-[color:var(--brand-hover)] shadow-1",
              })}
            >
              <PlayIcon className="size-4" />
              Start a free practice test
            </Link>
            <a
              href="#how-it-works"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className: "h-12 px-6 rounded-lg text-[15px]",
              })}
            >
              How it works
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[13px] text-ink-subtle">
            <span>No credit card</span>
            <span aria-hidden="true">·</span>
            <span>3 min to start</span>
            <span aria-hidden="true">·</span>
            <span>Works on mobile</span>
          </div>
        </div>

        {/* Right column: floating card + ghost navigator */}
        <div className="relative h-[540px] hidden lg:block" aria-hidden="true">
          {/* Ghost navigator — behind, rotated */}
          <div
            className="absolute top-5 left-0 w-[280px] rounded-lg border border-border bg-surface-sunk p-5"
            style={{ transform: "rotate(-3deg)" }}
          >
            <div className="font-mono text-[11px] text-ink-muted tracking-[0.08em] mb-3">
              QUESTION 17 / 50
            </div>
            <QuestionNavigator states={navStates} columns={10} />
          </div>

          {/* Floating question card — in front, rotated */}
          <div
            className="absolute bottom-0 right-0 w-[460px] rounded-xl border border-border bg-card p-7 shadow-3"
            style={{ transform: "rotate(1.5deg)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <CategoryChip category="verbal" />
              <Timer seconds={17} size="sm" warning />
            </div>
            <div className="text-lg font-medium leading-[1.4] mb-6">
              ROOM is to HOUSE as{" "}
              <span className="text-ink-subtle">______</span> is to TREE.
            </div>
            <div className="grid gap-2">
              <AnswerOption letter="A" label="Forest" as="div" />
              <AnswerOption letter="B" label="Branch" state="selected" as="div" />
              <AnswerOption letter="C" label="Leaf" as="div" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative scroll cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ink-subtle hidden lg:flex items-center gap-2 text-[11px] font-mono tracking-[0.1em]">
        <span>SCROLL</span>
        <ArrowRightIcon className="size-3 rotate-90" />
      </div>
    </section>
  );
}
