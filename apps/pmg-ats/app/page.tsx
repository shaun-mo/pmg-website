import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"

export default function HomePage() {
  return (
    <section className="bg-background">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-8 px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <span className="inline-flex h-7 items-center border border-action/40 bg-transparent px-3 text-[11px] font-semibold tracking-[0.18em] text-action uppercase">
          Internal · Auth required
        </span>

        <h1 className="text-5xl leading-[1.05] font-semibold tracking-tight text-primary md:text-6xl">
          PMG Applicant Tracking
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Pipeline view, candidate detail, and offer workflow for PMG hiring
          managers. Sign in with your PMG account to continue.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/sign-in"
            className="group inline-flex h-12 items-center gap-2 bg-action px-6 text-sm font-semibold text-action-foreground transition-colors hover:bg-action-dark"
          >
            Sign in to ATS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="https://pmgunited.com/careers"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-12 items-center gap-2 border border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View public careers page
          </Link>
        </div>

        <div className="mt-6 flex items-start gap-3 border-l-2 border-action/40 pl-4 text-sm text-muted-foreground">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-action" />
          <p>
            Access is restricted to PMG HR and hiring managers. All activity is
            audit-logged.
          </p>
        </div>
      </div>
    </section>
  )
}
