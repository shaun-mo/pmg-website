import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Eyebrow } from "@/components/ui/eyebrow"

export type IntroSplitProps = {
  eyebrow?: string
  heading: string
  paragraphs?: string[]
  cta?: { label: string; href: string }
}

export function IntroSplit({
  eyebrow,
  heading,
  paragraphs = [],
  cta,
}: IntroSplitProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <h2 className="mt-4 text-primary">{heading}</h2>
          </div>
          <div className="md:col-span-7">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-foreground"
                    : "mt-4 text-base leading-relaxed text-muted-foreground"
                }
              >
                {p}
              </p>
            ))}
            {cta ? (
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="group h-11 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
