export type Market = {
  slug: string
  name: string
  summary: string
  heroImage: string
}

export type Service = {
  slug: string
  name: string
  summary: string
  heroImage: string
}

export type Project = {
  slug: string
  name: string
  client: string
  location: string
  market: string
  service: string
  year: string
  heroImage: string
}

export const markets: Market[] = [
  {
    slug: "transportation",
    name: "Transportation",
    summary: "Roads, transit, and rail infrastructure that move communities forward.",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    slug: "aviation",
    name: "Aviation",
    summary: "Terminals, hangars, and airside facilities for the busiest airports.",
    heroImage:
      "https://images.unsplash.com/photo-1473445730015-841f29a9490b?w=1200&q=80",
  },
  {
    slug: "education",
    name: "Education",
    summary: "K-12 and higher-ed environments built to support learning at every scale.",
    heroImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  },
  {
    slug: "health-science-research",
    name: "Health, Science & Research",
    summary: "Mission-critical labs, clinical spaces, and research environments.",
    heroImage:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
  },
  {
    slug: "municipal",
    name: "Municipal",
    summary: "Civic, public-safety, and parks facilities that serve the public good.",
    heroImage:
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1200&q=80",
  },
  {
    slug: "housing",
    name: "Housing",
    summary: "Multifamily, affordable, and senior-living communities at every scale.",
    heroImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
  },
]

export const services: Service[] = [
  {
    slug: "program-project-management",
    name: "Program / Project Management",
    summary:
      "End-to-end ownership of programs from inception through closeout.",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    summary:
      "Estimating, scheduling, controls, and advisory expertise at every phase.",
    heroImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
  {
    slug: "construction-services",
    name: "Construction Services",
    summary: "Boots-on-the-ground delivery from preconstruction to turnover.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
  },
  {
    slug: "disaster-recovery",
    name: "Disaster Recovery",
    summary: "Rapid response and rebuild programs for communities under pressure.",
    heroImage:
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=1200&q=80",
  },
]

export const featuredProjects: Project[] = [
  {
    slug: "metro-elevator-replacement",
    name: "METRO Multi-Elevator Replacement Program",
    client: "Houston METRO",
    location: "Houston, TX",
    market: "Transportation",
    service: "Program / Project Management",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=80",
  },
  {
    slug: "iah-terminal-b",
    name: "IAH Terminal B Transformation",
    client: "Houston Airport System",
    location: "Houston, TX",
    market: "Aviation",
    service: "Construction Services",
    year: "2025",
    heroImage:
      "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1600&q=80",
  },
  {
    slug: "health-science-research-center",
    name: "Health Science & Research Center Expansion",
    client: "Texas A&M International",
    location: "Laredo, TX",
    market: "Health, Science & Research",
    service: "Construction Services",
    year: "2024",
    heroImage:
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1600&q=80",
  },
  {
    slug: "hpd-station-iah",
    name: "Houston Police Department Station at IAH",
    client: "City of Houston",
    location: "Houston, TX",
    market: "Municipal",
    service: "Construction Services",
    year: "2023",
    heroImage:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80",
  },
]

export const stats = [
  { value: "20+", label: "Years delivering" },
  { value: "$2B+", label: "Programs managed" },
  { value: "4", label: "Texas offices" },
  { value: "100+", label: "Projects delivered" },
]

export const values = [
  {
    title: "Customer-focused",
    body: "Every decision starts with the client's outcome — schedule, budget, and quality together.",
  },
  {
    title: "Always responsive",
    body: "Same-day answers. Real accountability. We do not disappear when things get hard.",
  },
  {
    title: "Safety first",
    body: "An uncompromising commitment to the people on every site, every day.",
  },
  {
    title: "Built to last",
    body: "We build relationships and structures with the same standard: durable, honest, and well-made.",
  },
]

export const offices = [
  { city: "Houston", state: "TX", phone: "(713) 555-0100" },
  { city: "Austin", state: "TX", phone: "(512) 555-0100" },
  { city: "San Antonio", state: "TX", phone: "(210) 555-0100" },
  { city: "Dallas", state: "TX", phone: "(214) 555-0100" },
]

export const homeHero = {
  heading: "Building Texas with people who answer the phone.",
  subheading:
    "PMG delivers program management, professional services, construction, and disaster recovery for clients who can't afford to be left guessing.",
  backgroundImage:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=2400&q=80",
  alt: "Construction team coordinating on a project site at sunrise.",
}
