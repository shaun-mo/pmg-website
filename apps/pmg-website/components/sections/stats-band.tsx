import { ArrowUpRight } from "lucide-react"

import { Eyebrow } from "@workspace/ui/components/eyebrow"
import { stats as defaultStats } from "@/lib/placeholder-data"

export type StatItem = {
  value: string
  label: string
  description?: string
}

export type StatsBandProps = {
  stats?: StatItem[]
  eyebrow?: string
  heading?: string
  meta?: string
}

export function StatsBand({
  stats,
  eyebrow = "By the numbers",
  heading = "A standard built into every project.",
  meta = "2005 · Founded · Houston, TX",
}: StatsBandProps) {
  const data: StatItem[] =
    stats ??
    defaultStats.map((s) => ({
      value: s.value,
      label: s.label,
    }))

  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-white">{heading}</h2>
          </div>
          {meta ? (
            <p className="font-mono text-xs tracking-wider text-white/60 uppercase">
              {meta}
            </p>
          ) : null}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
          {data.map((s) => (
            <div key={s.label} className="flex flex-col gap-3">
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center bg-action text-action-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <div className="text-4xl leading-none font-bold tracking-tight text-white md:text-5xl">
                {s.value}
              </div>
              <div className="text-xs font-semibold tracking-[0.18em] text-white/85 uppercase">
                {s.label}
              </div>
              {s.description ? (
                <div className="text-sm text-white/65">{s.description}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
