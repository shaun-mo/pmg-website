import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/layout/site-header"
import { Footer53 } from "@/components/footer53"
import { ContactPanelProvider } from "@/components/contact-panel/contact-panel-provider"
import { ContactPanel } from "@/components/contact-panel/contact-panel"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

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
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>
          <ContactPanelProvider>
            <SiteHeader />
            <main>{children}</main>
            <Footer53 />
            <ContactPanel />
          </ContactPanelProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
