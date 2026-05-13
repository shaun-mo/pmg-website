import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

import { cn } from "@/lib/utils"
import { markets, services } from "@/lib/placeholder-data"

interface FooterLink {
  name: string
  href: string
}
interface FooterSection {
  title: string
  links: FooterLink[]
}
interface FooterSocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

interface Footer53Props {
  description?: string
  sections?: FooterSection[]
  socialLinks?: FooterSocialLink[]
  copyright?: string
  legalLinks?: FooterLink[]
  className?: string
}

type Props = Partial<Footer53Props>

const defaultProps: Footer53Props = {
  description:
    "PMG Project Management Group, LLC is an Equal Opportunity Employer. We are committed to a workplace that values diversity and inclusion.",
  sections: [
    {
      title: "Markets",
      links: markets.map((m) => ({
        name: m.name,
        href: `/markets/${m.slug}`,
      })),
    },
    {
      title: "Services",
      links: services.map((s) => ({
        name: s.name,
        href: `/services/${s.slug}`,
      })),
    },
    {
      title: "Resources",
      links: [
        { name: "Projects", href: "/projects" },
        { name: "About Us", href: "/about-us" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ],
  socialLinks: [
    {
      icon: <FaLinkedin className="size-5" />,
      href: "https://www.linkedin.com/company/pmg-united",
      label: "LinkedIn",
    },
  ],
  copyright: `© ${new Date().getFullYear()} PMG Project Management Group, LLC. All rights reserved.`,
  legalLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Compliance Hotline", href: "/contact" },
  ],
}

const MAX_SECTIONS = 3

const Footer53 = (props: Props) => {
  const {
    sections,
    description,
    socialLinks,
    copyright,
    legalLinks,
    className,
  } = {
    ...defaultProps,
    ...props,
  }

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS)

  return (
    <section className={cn("bg-blue-700 text-white", className)}>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <footer>
          <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-start lg:text-left">
            {/* Left column: logo, description, socials, EOE */}
            <div className="flex w-full max-w-md flex-col gap-6 lg:items-start">
              <Link
                href="/"
                className="flex items-baseline gap-2 transition-opacity hover:opacity-90"
              >
                <span className="text-xl font-bold tracking-tight text-white">
                  PMG
                </span>
                <span className="text-base font-medium tracking-[0.2em] text-white/70">
                  UNITED
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-white/80 italic">
                {description}
              </p>
              <ul className="flex flex-wrap items-center gap-3">
                {socialLinks?.map((social, idx) => (
                  <li key={idx}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-9 w-9 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right side: link sections */}
            <div className="grid w-full gap-8 md:grid-cols-3 lg:max-w-3xl lg:gap-10">
              {visibleSections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 text-xs font-semibold tracking-[0.18em] text-white uppercase">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {section.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-white/80 transition-colors hover:text-white"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>

      {/* Bottom strip — blue-900 */}
      <div className="bg-blue-900">
        <div className="container mx-auto flex flex-col justify-between gap-3 px-4 py-5 text-xs font-medium text-white/70 sm:px-6 md:flex-row md:items-center lg:px-8">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:flex-wrap md:gap-x-5 md:gap-y-2">
            {legalLinks?.map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export { Footer53 }
