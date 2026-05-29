import { Geist, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { AtsHeader } from "@/components/layout/ats-header"
import { AtsFooter } from "@/components/layout/ats-footer"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: {
    default: "PMG ATS — Applicant Tracking",
    template: "%s | PMG ATS",
  },
  description: "PMG Project Management Group — internal applicant tracking and HR system.",
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="flex min-h-svh flex-col bg-background text-foreground">
        <AtsHeader />
        <main className="flex-1">{children}</main>
        <AtsFooter />
      </body>
    </html>
  )
}
