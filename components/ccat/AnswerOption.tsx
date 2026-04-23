import { cn } from "@/lib/utils";

export type AnswerLetter = "A" | "B" | "C" | "D" | "E";
export type AnswerState =
  | "default"
  | "selected"
  | "correct"
  | "incorrect"
  | "flagged";

type AnswerOptionProps = {
  letter: AnswerLetter;
  label?: React.ReactNode;
  state?: AnswerState;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  as?: "button" | "div";
};

const STATE_STYLES: Record<AnswerState, string> = {
  default: "border-border bg-card hover:bg-muted text-foreground",
  selected:
    "border-[color:var(--brand)] bg-[color:var(--brand-soft)] text-foreground ring-2 ring-[color:var(--brand)]/30",
  correct:
    "border-[color:var(--color-success)] bg-[color:var(--color-success)]/10 text-foreground",
  incorrect:
    "border-[color:var(--color-danger)] bg-[color:var(--color-danger)]/10 text-foreground",
  flagged:
    "border-[color:var(--color-warning)] bg-[color:var(--color-warning)]/10 text-foreground",
};

const BADGE_STYLES: Record<AnswerState, string> = {
  default: "bg-muted text-muted-foreground",
  selected: "bg-[color:var(--brand)] text-[color:var(--on-brand)]",
  correct: "bg-[color:var(--color-success)] text-white",
  incorrect: "bg-[color:var(--color-danger)] text-white",
  flagged: "bg-[color:var(--color-warning)] text-[color:var(--on-brand)]",
};

export function AnswerOption({
  letter,
  label,
  state = "default",
  children,
  onClick,
  disabled,
  className,
  as = "button",
}: AnswerOptionProps) {
  const Component = as;
  return (
    <Component
      type={as === "button" ? "button" : undefined}
      onClick={onClick}
      disabled={as === "button" ? disabled : undefined}
      className={cn(
        "group flex w-full items-start gap-3 rounded-md border px-3 py-2.5 text-left text-sm",
        "transition-colors duration-[120ms] ease-[var(--ease-ccat)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-60",
        STATE_STYLES[state],
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex size-6 shrink-0 items-center justify-center rounded-[5px] font-mono text-xs font-semibold",
          BADGE_STYLES[state]
        )}
      >
        {letter}
      </span>
      <span className="flex-1 leading-snug">{label ?? children}</span>
    </Component>
  );
}
