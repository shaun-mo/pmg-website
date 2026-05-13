"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react"

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
import { useHeaderScrollState } from "@/hooks/use-header-scroll-state"
import { useContactPanel } from "@/components/contact-panel/contact-panel-provider"
import { primaryNavItems } from "@/lib/nav/primary-nav-items"
import { markets, services } from "@/lib/placeholder-data"

type MegaKind = "markets" | "services" | null

export function SiteHeader() {
  const { atTop, scrollingDown } = useHeaderScrollState()
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

  const isSolid = !atTop || openMega !== null || mobileOpen
  const shouldHide = !atTop && scrollingDown && openMega === null && !mobileOpen
  const useDarkText = isSolid

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-[background-color,box-shadow,transform] duration-200 ease-out",
        isSolid
          ? "bg-background shadow-[0_2px_12px_-6px_rgba(15,23,42,0.15)]"
          : "bg-transparent",
        shouldHide ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:h-24 lg:px-8">
        <Logo light={!useDarkText} />

        <nav className="hidden flex-1 items-center justify-center gap-2 md:flex">
          {primaryNavItems.map((item) => {
            if (item.kind === "mega-markets" || item.kind === "mega-services") {
              const kind = item.kind === "mega-markets" ? "markets" : "services"
              const isOpen = openMega === kind
              return (
                <button
                  key={item.label}
                  type="button"
                  className={cn(
                    "group relative flex h-12 items-center gap-1.5 px-4 text-[17px] font-medium tracking-tight transition-colors",
                    useDarkText ? "text-foreground" : "text-white",
                    "hover:text-action",
                  )}
                  onMouseEnter={() => openMenu(kind)}
                  onMouseLeave={scheduleClose}
                  onFocus={() => openMenu(kind)}
                  onBlur={scheduleClose}
                  aria-expanded={isOpen}
                  aria-controls={`mega-${kind}`}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute right-4 bottom-2 left-4 h-px bg-action transition-transform duration-200",
                      isOpen ? "scale-x-100" : "scale-x-0",
                      "group-hover:scale-x-100",
                    )}
                  />
                </button>
              )
            }
            if (item.kind === "contact-trigger") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className={cn(
                    "group relative flex h-12 items-center px-4 text-[17px] font-medium tracking-tight transition-colors",
                    useDarkText ? "text-foreground" : "text-white",
                    "hover:text-action",
                  )}
                >
                  {item.label}
                  <span className="absolute right-4 bottom-2 left-4 h-px scale-x-0 bg-action transition-transform duration-200 group-hover:scale-x-100" />
                </button>
              )
            }
            return (
              <Link
                key={item.label}
                href={item.href ?? "#"}
                className={cn(
                  "group relative flex h-12 items-center px-4 text-[17px] font-medium tracking-tight transition-colors",
                  useDarkText ? "text-foreground" : "text-white",
                  "hover:text-action",
                )}
              >
                {item.label}
                <span className="absolute right-4 bottom-2 left-4 h-px scale-x-0 bg-action transition-transform duration-200 group-hover:scale-x-100" />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="group hidden h-12 gap-2 bg-action px-5 text-[15px] text-action-foreground hover:bg-action-dark md:inline-flex"
          >
            <Link href="/careers">
              Careers
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>

          <MobileMenu
            open={mobileOpen}
            onOpenChange={setMobileOpen}
            light={!useDarkText}
            onOpenContact={() => {
              setMobileOpen(false)
              setContactOpen(true)
            }}
          />
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

function Logo({ light }: { light: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-baseline gap-2 transition-opacity hover:opacity-80"
    >
      <span
        className={cn(
          "text-xl font-bold tracking-tight",
          light ? "text-white" : "text-primary",
        )}
      >
        PMG
      </span>
      <span
        className={cn(
          "text-base font-medium tracking-[0.2em]",
          light ? "text-white/70" : "text-muted-foreground",
        )}
      >
        UNITED
      </span>
    </Link>
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
      className="absolute top-full right-0 left-0 border-t border-border bg-background shadow-lg"
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
  light,
  onOpenContact,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  light: boolean
  onOpenContact: () => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button
          type="button"
          aria-label="Open navigation menu"
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center md:hidden",
            light ? "text-white" : "text-foreground",
          )}
        >
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto p-0 sm:max-w-md"
      >
        <SheetHeader className="border-b border-border px-6 py-4">
          <SheetTitle className="text-left text-base font-semibold tracking-tight">
            <span className="text-primary">PMG</span>{" "}
            <span className="text-muted-foreground tracking-[0.2em]">
              UNITED
            </span>
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
          <button
            type="button"
            onClick={onOpenContact}
            className="px-4 py-3 text-left text-base font-medium text-foreground hover:text-action"
          >
            Contact Us
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
