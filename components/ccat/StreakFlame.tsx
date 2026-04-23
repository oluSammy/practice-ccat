import { FlameIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type StreakFlameProps = {
  days: number;
  className?: string;
};

export function StreakFlame({ days, className }: StreakFlameProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-warning)]/10 px-2.5 py-1",
        "text-sm font-medium text-[color:var(--color-warning)]",
        className
      )}
    >
      <FlameIcon className="size-4" />
      <span className="tabular-nums">{days}</span>
      <span className="text-[color:var(--color-warning)]/80">
        day{days === 1 ? "" : "s"}
      </span>
    </span>
  );
}
