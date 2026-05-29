import Link from "next/link"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"

const primaryFooterLinks = [
  { name: "Markets", href: "/markets" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About Us", href: "/about-us" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

const legalLinks = [
  { name: "Fraud Alert", href: "/fraud-alert" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Cookie Settings", href: "#cookie-settings" },
]

const socialLinks = [
  {
    icon: <FaLinkedin className="size-5" />,
    href: "https://www.linkedin.com/company/pmg-united",
    label: "LinkedIn",
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-blue-700 text-white">
      {/* Top band: logo, primary nav, social */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Link
            href="/"
            aria-label="PMG United — home"
            className="inline-flex items-center transition-opacity hover:opacity-90"
          >
            <Image
              src="/logos/pmg-logo-secondary.svg"
              alt="PMG United"
              width={400}
              height={120}
              className="h-12 w-auto lg:h-14"
            />
          </Link>

          <nav aria-label="Footer primary">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3 md:flex md:flex-wrap md:items-center md:gap-x-8 lg:gap-x-10">
              {primaryFooterLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-white transition-colors hover:text-white/70"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom band: copyright + EOE + legal */}
      <div className="bg-blue-900">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 text-xs text-white/70 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:px-8 lg:py-10">
          <div className="flex flex-col gap-3 lg:max-w-3xl">
            <p>
              © {new Date().getFullYear()} PMG Project Management Group, LLC.
              All rights reserved.
            </p>
            <p className="italic leading-relaxed text-white/60">
              PMG Project Management Group, LLC is an Equal Opportunity
              Employer — race, color, religion, sex, sexual orientation, gender
              identity, national origin, disability, status as a protected
              veteran, or other characteristics protected by applicable law.
            </p>
            <Link
              href="/human-rights-policy"
              className="text-white/80 transition-colors hover:text-white"
            >
              Human Rights Policy
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-white/70 lg:justify-end">
            {legalLinks.map((link, idx) => (
              <li
                key={link.name}
                className="flex items-center gap-5 whitespace-nowrap"
              >
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white"
                >
                  {link.name}
                </Link>
                {idx < legalLinks.length - 1 ? (
                  <span aria-hidden className="text-white/30">
                    |
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
