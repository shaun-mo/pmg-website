import Link from "next/link"

import { markets, services } from "@/lib/placeholder-data"

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.451 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.851-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.357V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.602 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.227.792 24 1.771 24h20.451c.978 0 1.778-.773 1.778-1.729V1.728C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const resources = [
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Privacy Policy", href: "/privacy-policy" },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white">
                PMG
              </span>
              <span className="text-sm font-medium tracking-[0.2em] text-white/60">
                UNITED
              </span>
            </Link>
            <address className="text-sm leading-relaxed text-white/80 not-italic">
              Houston, Texas
              <br />
              (713) 555-0100
              <br />
              <a
                href="mailto:contact@pmgunited.com"
                className="hover:text-action hover:underline hover:underline-offset-4 hover:decoration-action"
              >
                contact@pmgunited.com
              </a>
            </address>
            <div className="pt-2">
              <p className="text-xs font-medium tracking-wider text-white/60 uppercase">
                Compliance hotline
              </p>
              <p className="mt-1 text-sm text-white/80">
                (888) 555-0199
                <br />
                <span className="text-xs text-white/60">
                  Confidential reporting
                </span>
              </p>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Markets
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {markets.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/markets/${m.slug}`}
                    className="text-sm text-white/80 hover:text-action hover:underline hover:underline-offset-4 hover:decoration-action"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/80 hover:text-action hover:underline hover:underline-offset-4 hover:decoration-action"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Resources
            </h3>
            <ul className="mt-4 flex flex-col gap-2">
              {resources.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="text-sm text-white/80 hover:text-action hover:underline hover:underline-offset-4 hover:decoration-action"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/pmg-united"
                target="_blank"
                rel="noreferrer"
                aria-label="PMG on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center bg-white/10 text-white transition-colors hover:bg-action hover:text-action-foreground"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PMG Project Management Group, LLC</p>
          <p>Equal Opportunity Employer</p>
        </div>
      </div>
    </footer>
  )
}
