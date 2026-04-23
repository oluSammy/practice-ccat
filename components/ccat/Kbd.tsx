import { cn } from "@/lib/utils";

type KbdProps = React.ComponentProps<"kbd">;

export function Kbd({ className, children, ...props }: KbdProps) {
  return (
    <kbd
      className={cn(
        "inline-flex min-w-[1.375rem] h-[1.375rem] items-center justify-center px-1.5",
        "rounded-[5px] border border-b-2 border-border bg-card",
        "font-mono text-[11px] font-medium text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
}
