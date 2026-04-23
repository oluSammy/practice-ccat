"use client";

import { cn } from "@/lib/utils";

export type NavCellState =
  | "unanswered"
  | "answered"
  | "flagged"
  | "current";

const CELL_STYLES: Record<NavCellState, string> = {
  unanswered: "bg-muted text-muted-foreground border-border",
  answered:
    "bg-[color:var(--brand-soft)] text-[color:var(--brand-ink)] border-[color:var(--brand)]/40",
  flagged:
    "bg-[color:var(--color-warning)]/15 text-[color:var(--color-warning)] border-[color:var(--color-warning)]/40",
  current:
    "bg-[color:var(--brand)] text-[color:var(--on-brand)] border-[color:var(--brand)] ring-2 ring-[color:var(--brand)]/40",
};

type QuestionNavigatorProps = {
  states: NavCellState[];
  onJump?: (index: number) => void;
  columns?: number;
  className?: string;
};

export function QuestionNavigator({
  states,
  onJump,
  columns = 10,
  className,
}: QuestionNavigatorProps) {
  return (
    <div
      className={cn("grid gap-1.5", className)}
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      role="list"
      aria-label="Question navigator"
    >
      {states.map((state, i) => (
        <button
          key={i}
          type="button"
          role="listitem"
          onClick={onJump ? () => onJump(i) : undefined}
          disabled={!onJump}
          aria-label={`Question ${i + 1} — ${state}`}
          className={cn(
            "flex aspect-square items-center justify-center rounded-sm border font-mono text-xs font-medium",
            "transition-colors duration-[120ms] ease-[var(--ease-ccat)]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
            onJump && "hover:brightness-95 cursor-pointer",
            !onJump && "cursor-default",
            CELL_STYLES[state]
          )}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
