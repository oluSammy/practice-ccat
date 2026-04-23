import { Kbd } from "./Kbd";
import { cn } from "@/lib/utils";

type KeyboardHintChipProps = {
  keys: string[];
  label?: string;
  separator?: string;
  className?: string;
};

export function KeyboardHintChip({
  keys,
  label,
  separator = "·",
  className,
}: KeyboardHintChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs text-muted-foreground",
        className
      )}
    >
      {label && <span>{label}</span>}
      {keys.map((k, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {i > 0 && <span className="text-muted-foreground/50">{separator}</span>}
          <Kbd>{k}</Kbd>
        </span>
      ))}
    </span>
  );
}
