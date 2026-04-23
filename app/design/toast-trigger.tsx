"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function ToastTrigger() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.success("Attempt submitted", {
          description: "Score: 34 / 50 · 78th percentile",
        })
      }
    >
      Show toast
    </Button>
  );
}
