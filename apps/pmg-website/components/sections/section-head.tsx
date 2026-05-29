import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Eyebrow } from "@workspace/ui/components/eyebrow"

export type SectionHeadProps = {
  eyebrow?: string
  heading?: string
  body?: string
  link?: { label: string; href: string }
}

export function SectionHead({ eyebrow, heading, body, link }: SectionHeadProps) {
  return (
    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {heading ? (
          <h2 className="mt-4 text-primary">{heading}</h2>
        ) : null}
        {body ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {body}
          </p>
        ) : null}
      </div>
      {link ? (
        <Link
          href={link.href}
          className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-action"
        >
          {link.label}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      ) : null}
    </div>
  )
}
