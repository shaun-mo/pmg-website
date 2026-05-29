import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

export function ArrowPin({
  size = "md",
  className,
}: {
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const dims = size === "sm" ? "h-8 w-8" : size === "lg" ? "h-11 w-11" : "h-9 w-9"
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute top-3 right-3 inline-flex items-center justify-center bg-action text-action-foreground transition-colors duration-200 group-hover:bg-action-dark",
        dims,
        className,
      )}
    >
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </span>
  )
}
