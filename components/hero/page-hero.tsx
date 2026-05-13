import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export type PageHeroProps = {
  heading: string
  subheading?: string
  backgroundImage: string
  alt: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  textColor?: "light" | "dark"
  showScrollCue?: boolean
}

export function PageHero({
  heading,
  subheading,
  backgroundImage,
  alt,
  primaryCta,
  secondaryCta,
  textColor = "light",
  showScrollCue = true,
}: PageHeroProps) {
  const isLight = textColor === "light"

  return (
    <section
      className={cn(
        "relative isolate flex min-h-[90svh] items-end overflow-hidden md:min-h-[80vh] lg:min-h-screen",
        "max-h-[900px]",
      )}
    >
      <Image
        src={backgroundImage}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {isLight && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      )}

      <div className="mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <h1
            className={cn(
              "text-4xl leading-[1.05] font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl",
              isLight ? "text-white" : "text-primary",
            )}
          >
            {heading}
          </h1>
          {subheading ? (
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-relaxed md:text-lg",
                isLight ? "text-white/85" : "text-muted-foreground",
              )}
            >
              {subheading}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Button
                  asChild
                  className="group h-12 gap-2 bg-action px-6 text-action-foreground hover:bg-action-dark"
                >
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  asChild
                  variant="outline"
                  className={cn(
                    "group h-12 gap-2 bg-transparent px-6",
                    isLight
                      ? "border-white/40 text-white hover:bg-white hover:text-primary"
                      : "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
                  )}
                >
                  <Link href={secondaryCta.href}>
                    {secondaryCta.label}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {showScrollCue ? (
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute right-0 bottom-6 left-0 flex justify-center motion-safe:animate-bounce",
            isLight ? "text-white/70" : "text-primary/60",
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      ) : null}
    </section>
  )
}
