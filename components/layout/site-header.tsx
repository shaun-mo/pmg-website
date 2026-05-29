"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useContactPanel } from "@/components/contact-panel/contact-panel-provider"
import { markets, services } from "@/lib/placeholder-data"

type MegaKind = "markets" | "services" | null

const subNavItems = [
  { label: "Trusted Clients & Partners", href: "/about-us" },
  { label: "Selected Work", href: "/projects" },
  { label: "Markets We Serve", href: "/markets" },
  { label: "How We Work", href: "/about-us" },
]

export function SiteHeader() {
  const [openMega, setOpenMega] = React.useState<MegaKind>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)
  const { setOpen: setContactOpen } = useContactPanel()

  const openMenu = (kind: MegaKind) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMega(kind)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenMega(null), 150)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background">
      {/* Mobile (< md): logo + hamburger */}
      <div className="flex h-16 items-center justify-between px-4 md:hidden">
        <Link
          href="/"
          aria-label="PMG United — home"
          className="inline-flex items-center"
        >
          <Image
            src="/logos/pmg-logo-primary.svg"
            alt="PMG United"
            width={171}
            height={70}
            priority
            className="h-8 w-auto brightness-0"
          />
        </Link>
        <MobileMenu
          open={mobileOpen}
          onOpenChange={setMobileOpen}
          onOpenContact={() => {
            setMobileOpen(false)
            setContactOpen(true)
          }}
        />
      </div>

      {/* Desktop (md+): two-row layout with logo column */}
      <div className="hidden h-28 md:flex">
        {/* Logo column */}
        <Link
          href="/"
          aria-label="PMG United — home"
          className="flex shrink-0 items-center justify-center border-r border-border px-5 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logos/pmg-logo-primary.svg"
            alt="PMG United"
            width={171}
            height={70}
            priority
            className="h-14 w-auto brightness-0"
          />
        </Link>

        {/* Right side: stacked rows */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Top row — blue band */}
          <div className="flex h-14 bg-blue-700 text-white">
            {/* Left primary nav */}
            <ul className="flex divide-x divide-white/30">
              <li>
                <button
                  type="button"
                  className="flex h-14 w-28 items-center justify-center text-base font-semibold transition-colors hover:bg-blue-800"
                  onMouseEnter={() => openMenu("markets")}
                  onMouseLeave={scheduleClose}
                  onFocus={() => openMenu("markets")}
                  onBlur={scheduleClose}
                  aria-expanded={openMega === "markets"}
                  aria-controls="mega-markets"
                >
                  Markets
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="flex h-14 w-28 items-center justify-center text-base font-semibold transition-colors hover:bg-blue-800"
                  onMouseEnter={() => openMenu("services")}
                  onMouseLeave={scheduleClose}
                  onFocus={() => openMenu("services")}
                  onBlur={scheduleClose}
                  aria-expanded={openMega === "services"}
                  aria-controls="mega-services"
                >
                  Services
                </button>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="flex h-14 w-28 items-center justify-center text-base font-semibold transition-colors hover:bg-blue-800"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="flex h-14 w-28 items-center justify-center text-base font-semibold transition-colors hover:bg-blue-800"
                >
                  About Us
                </Link>
              </li>
            </ul>

            {/* Spacer */}
            <div className="flex-1" />

            {/* Right utility nav */}
            <ul className="flex divide-x divide-white/30 border-l border-white/30">
              <li>
                <button
                  type="button"
                  aria-label="Search"
                  className="flex h-14 items-center justify-center px-5 transition-colors hover:bg-blue-800"
                >
                  <Search className="h-5 w-5" />
                </button>
              </li>
              <li>
                <Link
                  href="/login"
                  className="flex h-14 w-28 items-center justify-center text-base font-semibold transition-colors hover:bg-blue-800"
                >
                  Login
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="flex h-14 w-28 items-center justify-center text-base font-semibold transition-colors hover:bg-blue-800"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="flex h-14 w-28 items-center justify-center bg-action text-base font-semibold text-action-foreground transition-colors hover:bg-action-dark"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom row — sub-nav */}
          <div className="flex h-14 bg-background">
            <ul className="flex divide-x divide-border">
              {subNavItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex h-14 items-center justify-center px-4 text-base font-medium text-foreground transition-colors hover:bg-muted/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <MegaMenu
        kind={openMega}
        onMouseEnter={() => openMenu(openMega)}
        onMouseLeave={scheduleClose}
      />
    </header>
  )
}

function MegaMenu({
  kind,
  onMouseEnter,
  onMouseLeave,
}: {
  kind: MegaKind
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  if (!kind) return null
  const items = kind === "markets" ? markets : services
  const viewAllHref = kind === "markets" ? "/markets" : "/services"
  const viewAllLabel =
    kind === "markets" ? "View all markets" : "View all services"

  return (
    <div
      id={`mega-${kind}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full right-0 left-0 z-50 border-t border-border bg-background shadow-lg"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/${kind}/${item.slug}`}
              className="group flex flex-col gap-3"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.heroImage}
                  alt={item.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  aria-hidden
                  className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center bg-action text-action-foreground transition-all duration-200 group-hover:bg-action-dark"
                >
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
              <div>
                <div className="text-lg font-semibold text-primary transition-colors group-hover:text-action">
                  {item.name}
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-action"
          >
            {viewAllLabel}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function MobileMenu({
  open,
  onOpenChange,
  onOpenContact,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onOpenContact: () => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className="inline-flex h-10 w-10 items-center justify-center text-foreground"
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-6 py-4">
          <SheetTitle className="text-left">
            <Image
              src="/logos/pmg-logo-primary.svg"
              alt="PMG United"
              width={218}
              height={73}
              className="h-8 w-auto brightness-0"
            />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-1 px-2 py-4">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="markets" className="border-0">
              <AccordionTrigger className="px-4 py-3 text-base font-medium text-foreground hover:no-underline">
                Markets
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <ul className="flex flex-col">
                  {markets.map((m) => (
                    <li key={m.slug}>
                      <Link
                        href={`/markets/${m.slug}`}
                        onClick={() => onOpenChange(false)}
                        className="block px-8 py-2 text-sm text-muted-foreground hover:text-action"
                      >
                        {m.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="services" className="border-0">
              <AccordionTrigger className="px-4 py-3 text-base font-medium text-foreground hover:no-underline">
                Services
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <ul className="flex flex-col">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        onClick={() => onOpenChange(false)}
                        className="block px-8 py-2 text-sm text-muted-foreground hover:text-action"
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Link
            href="/projects"
            onClick={() => onOpenChange(false)}
            className="px-4 py-3 text-base font-medium text-foreground hover:text-action"
          >
            Projects
          </Link>
          <Link
            href="/about-us"
            onClick={() => onOpenChange(false)}
            className="px-4 py-3 text-base font-medium text-foreground hover:text-action"
          >
            About Us
          </Link>
          <Link
            href="/login"
            onClick={() => onOpenChange(false)}
            className="px-4 py-3 text-base font-medium text-foreground hover:text-action"
          >
            Login
          </Link>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-3 text-left text-base font-medium text-foreground hover:text-action"
          >
            Contact
          </button>

          <div className="mt-4 px-4">
            <Button
              asChild
              className="group h-11 w-full gap-2 bg-action text-action-foreground hover:bg-action-dark"
            >
              <Link href="/careers" onClick={() => onOpenChange(false)}>
                Careers
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
