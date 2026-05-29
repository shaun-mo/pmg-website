import { PageHero } from "@/components/hero/page-hero"
import { IntroSplit } from "@/components/sections/intro-split"
import { StatsBand } from "@/components/sections/stats-band"
import { SectionHead } from "@/components/sections/section-head"
import { NumberedList } from "@/components/sections/numbered-list"
import { ServiceCard } from "@/components/cards/service-card"
import { ProjectCard } from "@/components/cards/project-card"
import { MarketCard } from "@/components/cards/market-card"
import {
  featuredProjects,
  markets,
  services,
  values,
} from "@/lib/placeholder-data"

export default function HomePage() {
  return (
    <>
      <PageHero
        heading="Customer-Focused, Always Responsive"
        accentWord="Responsive"
        subheading="PMG delivers program management, professional services, construction, and disaster recovery for clients who can't afford to be left guessing."
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2400&q=80"
        alt="Construction team coordinating on a project site at sunrise."
        primaryCta={{ label: "Explore our work", href: "/projects" }}
        secondaryCta={{ label: "About PMG", href: "/about-us" }}
      />

      <IntroSplit
        eyebrow="Who we are"
        heading="Customer-focused. Always responsive."
        paragraphs={[
          "PMG was founded on a simple idea: clients deserve a partner who shows up, picks up the phone, and gets the job done. Twenty years and hundreds of projects later, we still answer to that standard.",
          "Our teams deliver program and project management, professional services, construction services, and disaster recovery across Texas — for transportation, aviation, education, health science, municipal, and housing clients.",
        ]}
        cta={{ label: "More about PMG", href: "/about-us" }}
      />

      <StatsBand
        stats={[
          { value: "20+", label: "Years delivering", description: "Texas-based, Texas-built." },
          { value: "$2B+", label: "Programs managed", description: "From cost to closeout." },
          { value: "4", label: "Texas offices", description: "Houston · Austin · SA · Dallas." },
          { value: "100+", label: "Projects delivered", description: "Across six sectors." },
        ]}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHead
            eyebrow="What we do"
            heading="Four service lines, one team."
            body="From the earliest planning meetings through closeout — and when disaster strikes — PMG brings a single accountable team to the table."
            link={{ label: "All services", href: "/services" }}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHead
            eyebrow="Selected work"
            heading="Programs delivered, statewide."
            link={{ label: "View all projects", href: "/projects" }}
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
          <SectionHead
            eyebrow="Markets we serve"
            heading="Specialists across the sectors that define Texas."
            link={{ label: "All markets", href: "/markets" }}
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {markets.map((market) => (
              <MarketCard key={market.slug} market={market} />
            ))}
          </div>
        </div>
      </section>

      <NumberedList
        eyebrow="How we work"
        heading="Four commitments that define every project."
        items={values}
      />
    </>
  )
}
