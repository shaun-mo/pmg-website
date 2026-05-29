import Link from "next/link"
import Image from "next/image"
import { LogIn } from "lucide-react"

export function AtsHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="PMG ATS — home"
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logos/pmg-logo-primary.svg"
            alt="PMG United"
            width={171}
            height={70}
            priority
            className="h-7 w-auto brightness-0"
          />
          <span className="hidden h-6 border-l border-border pl-3 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase sm:inline">
            Applicant Tracking
          </span>
        </Link>

        <Link
          href="/sign-in"
          className="inline-flex h-10 items-center gap-2 bg-action px-5 text-sm font-semibold text-action-foreground transition-colors hover:bg-action-dark"
        >
          <LogIn className="h-4 w-4" />
          Sign in
        </Link>
      </div>
    </header>
  )
}
