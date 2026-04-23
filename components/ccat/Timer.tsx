import { cn } from "@/lib/utils";

type TimerProps = {
  seconds: number;
  size?: "sm" | "md" | "lg";
  warning?: boolean;
  className?: string;
};

function format(totalSeconds: number) {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function Timer({
  seconds,
  size = "md",
  warning,
  className,
}: TimerProps) {
  const auto = warning ?? seconds < 60;
  return (
    <span
      role="timer"
      aria-live="off"
      className={cn(
        "font-mono tabular-nums tracking-tight",
        size === "lg" && "text-5xl",
        size === "md" && "text-2xl",
        size === "sm" && "text-sm",
        auto ? "text-[color:var(--color-danger)]" : "text-foreground",
        auto && "motion-safe:animate-pulse",
        className
      )}
    >
      {format(seconds)}
    </span>
  );
}
