"use client"

import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { useContactPanel } from "@/components/contact-panel/contact-panel-provider"
import { cn } from "@workspace/ui/lib/utils"

export function ContactCtaButton({
  label = "Start a conversation",
  className,
}: {
  label?: string
  className?: string
}) {
  const { setOpen } = useContactPanel()
  return (
    <Button
      onClick={() => setOpen(true)}
      className={cn(
        "group h-12 gap-2 bg-action px-6 text-action-foreground hover:bg-action-dark",
        className,
      )}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </Button>
  )
}
