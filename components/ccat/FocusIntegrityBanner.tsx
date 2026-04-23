import { EyeOffIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

type FocusIntegrityBannerProps = {
  count: number;
  visible?: boolean;
  className?: string;
};

export function FocusIntegrityBanner({
  count,
  visible = true,
  className,
}: FocusIntegrityBannerProps) {
  if (!visible) return null;

  return (
    <Alert
      className={cn(
        "border-[color:var(--color-warning)]/30 bg-[color:var(--color-warning)]/10",
        "[&>svg]:text-[color:var(--color-warning)]",
        className
      )}
    >
      <EyeOffIcon />
      <AlertTitle className="text-foreground">
        {count} tab {count === 1 ? "switch" : "switches"} during this attempt
      </AlertTitle>
      <AlertDescription>
        The real CCAT penalizes losing focus. This is training signal — not a
        scolding.
      </AlertDescription>
    </Alert>
  );
}
