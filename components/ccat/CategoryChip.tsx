import { cn } from "@/lib/utils";

export type Category = "verbal" | "math" | "spatial";

const LABEL: Record<Category, string> = {
  verbal: "Verbal",
  math: "Math",
  spatial: "Spatial",
};

const STYLES: Record<Category, string> = {
  verbal: "bg-verbal-50 border-verbal-200 text-verbal-700",
  math: "bg-math-50 border-math-200 text-math-700",
  spatial: "bg-spatial-50 border-spatial-200 text-spatial-700",
};

const DOT: Record<Category, string> = {
  verbal: "bg-verbal-500",
  math: "bg-math-500",
  spatial: "bg-spatial-500",
};

type CategoryChipProps = {
  category: Category;
  size?: "sm" | "md";
  showDot?: boolean;
  className?: string;
};

export function CategoryChip({
  category,
  size = "md",
  showDot = true,
  className,
}: CategoryChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium",
        size === "sm" ? "h-5 px-2 text-[11px]" : "h-6 px-2.5 text-xs",
        STYLES[category],
        className
      )}
    >
      {showDot && (
        <span className={cn("size-1.5 rounded-full", DOT[category])} />
      )}
      {LABEL[category]}
    </span>
  );
}
