import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Badge } from "@workspace/ui/components/badge"

type EyebrowProps = React.ComponentProps<typeof Badge> & {
  tone?: "light" | "dark"
}

export function Eyebrow({
  className,
  tone = "light",
  ...props
}: EyebrowProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "h-auto bg-transparent px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase",
        tone === "light"
          ? "border-action/40 text-action"
          : "border-white/30 text-white",
        className,
      )}
      {...props}
    />
  )
}
