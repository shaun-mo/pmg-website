import { JetBrains_Mono, Geist } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@workspace/ui/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ContactPanelProvider } from "@/components/contact-panel/contact-panel-provider"
import { ContactPanel } from "@/components/contact-panel/contact-panel"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    default: "PMG United — Program management, construction, professional services",
    template: "%s | PMG United",
  },
  description:
    "PMG United delivers program management, construction, professional services, and disaster recovery across Texas.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <ThemeProvider>
          <ContactPanelProvider>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
            <ContactPanel />
          </ContactPanelProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
