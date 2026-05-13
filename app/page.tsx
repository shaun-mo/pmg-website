import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { PageHero } from "@/components/hero/page-hero"
import {
  featuredProjects,
  homeHero,
  markets,
  services,
  stats,
  values,
} from "@/lib/placeholder-data"

export default function HomePage() {
  return (
    <>
      <PageHero
        heading={homeHero.heading}
        subheading={homeHero.subheading}
        backgroundImage={homeHero.backgroundImage}
        alt={homeHero.alt}
        primaryCta={{ label: "Explore our work", href: "/projects" }}
        secondaryCta={{ label: "About PMG", href: "/about-us" }}
      />

      {/* Intro / who we are */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-action uppercase">
                Who we are
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-primary md:text-4xl">
                Customer-focused. Always responsive.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg leading-relaxed text-muted-foreground">
                PMG was founded on a simple idea: clients deserve a partner who
                shows up, picks up the phone, and gets the job done. Twenty
                years and hundreds of projects later, we still answer to that
                standard.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Our teams deliver program and project management, professional
                services, construction services, and disaster recovery across
                Texas — for transportation, aviation, education, health science,
                municipal, and housing clients.
              </p>
              <div className="mt-8">
                <Button
                  asChild
                  variant="outline"
                  className="group h-11 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Link href="/about-us">
                    More about PMG
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-xs font-medium tracking-wider text-white/70 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services callout */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-action uppercase">
                What we do
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-primary md:text-4xl">
                Four service lines, one team.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                From the earliest planning meetings through closeout — and when
                disaster strikes — PMG brings a single accountable team to the
                table.
              </p>
            </div>
            <Link
              href="/services"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:text-action"
            >
              All services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col gap-4"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={service.heroImage}
                    alt={service.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-lg font-semibold text-primary transition-colors group-hover:text-action">
                    {service.name}
                    <ArrowUpRight className="h-4 w-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {service.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-action uppercase">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-primary md:text-4xl">
                Programs delivered, statewide.
              </h2>
            </div>
            <Link
              href="/projects"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:text-action"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex aspect-[16/10] flex-col justify-end overflow-hidden bg-primary"
              >
                <Image
                  src={project.heroImage}
                  alt={project.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="relative z-10 flex flex-col gap-2 p-6 text-white md:p-8">
                  <div className="flex items-center gap-2 text-xs font-medium tracking-wider text-white/75 uppercase">
                    <span>{project.market}</span>
                    <span aria-hidden>·</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="max-w-md text-xl leading-tight font-semibold md:text-2xl">
                      {project.name}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 translate-x-0 translate-y-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Markets callout */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-action uppercase">
                Markets we serve
              </p>
              <h2 className="mt-3 text-3xl leading-tight font-bold tracking-tight text-primary md:text-4xl">
                Specialists across the sectors that define Texas.
              </h2>
            </div>
            <Link
              href="/markets"
              className="group inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-primary hover:text-action"
            >
              All markets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {markets.map((market) => (
              <Link
                key={market.slug}
                href={`/markets/${market.slug}`}
                className="group relative flex aspect-square flex-col justify-end overflow-hidden bg-muted"
              >
                <Image
                  src={market.heroImage}
                  alt={market.name}
                  fill
                  sizes="(min-width: 1024px) 16vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <h3 className="relative z-10 p-4 text-base leading-tight font-semibold text-white">
                  {market.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values band */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 md:pb-28 lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-action uppercase">
              How we work
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl leading-tight font-bold tracking-tight text-primary md:text-4xl">
              Four commitments that define every project.
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v, i) => (
                <div key={v.title} className="flex flex-col gap-3">
                  <div className="font-mono text-xs text-action">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-primary">
                    {v.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
