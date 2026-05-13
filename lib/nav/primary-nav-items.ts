export type NavItem = {
  label: string
  href?: string
  kind: "link" | "mega-markets" | "mega-services" | "contact-trigger"
}

export const primaryNavItems: NavItem[] = [
  { label: "Markets", kind: "mega-markets" },
  { label: "Services", kind: "mega-services" },
  { label: "Projects", href: "/projects", kind: "link" },
  { label: "About Us", href: "/about-us", kind: "link" },
  { label: "Contact Us", kind: "contact-trigger" },
]
