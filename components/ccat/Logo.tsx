import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "wordmark" | "mark";
  size?: number;
  className?: string;
};

export function Logo({ variant = "wordmark", size = 32, className }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-ink",
        className
      )}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="30"
          height="30"
          rx="7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.25"
        />
        <path
          d="M21 9.5a7.5 7.5 0 1 0 0 13"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="22.5" cy="16" r="1.8" fill="var(--brand)" />
      </svg>
      {variant === "wordmark" && (
        <span
          className="font-display tracking-tight"
          style={{ fontSize: Math.round(size * 0.58) }}
        >
          CCAT <span className="text-ink-muted">Practice</span>
        </span>
      )}
    </span>
  );
}
