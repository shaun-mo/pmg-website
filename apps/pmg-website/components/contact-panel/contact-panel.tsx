"use client"

import * as React from "react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { ContactForm } from "@/components/contact-panel/contact-form"
import { useContactPanel } from "@/components/contact-panel/contact-panel-provider"

export function ContactPanel() {
  const { open, setOpen } = useContactPanel()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full overflow-y-auto sm:max-w-[480px]"
      >
        <SheetHeader className="px-6 pt-8">
          <SheetTitle className="text-2xl font-semibold text-primary">
            Get in touch
          </SheetTitle>
          <SheetDescription>
            We respond within one business day.
          </SheetDescription>
        </SheetHeader>
        <div className="px-6 pt-6 pb-10">
          <ContactForm />
        </div>
      </SheetContent>
    </Sheet>
  )
}
