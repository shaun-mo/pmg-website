"use client"

import * as React from "react"
import { ArrowRight, Check } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Textarea } from "@workspace/ui/components/textarea"
import { offices } from "@/lib/placeholder-data"

export function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")
    // TODO: wire to submitContact server action once RESEND_API_KEY is configured.
    await new Promise((resolve) => setTimeout(resolve, 600))
    setStatus("sent")
    onSuccess?.()
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-start justify-center gap-3 py-12">
        <div className="flex h-10 w-10 items-center justify-center bg-action text-action-foreground">
          <Check className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-primary">Message received.</h3>
        <p className="text-sm text-muted-foreground">
          We&apos;ll be in touch within one business day. For urgent matters, call
          our Houston office at (713) 555-0100.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="cf-name">Name *</Label>
          <Input id="cf-name" name="name" required autoComplete="name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-email">Email *</Label>
          <Input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="cf-phone">Phone</Label>
          <Input id="cf-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cf-subject">Subject</Label>
          <Input id="cf-subject" name="subject" />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cf-message">Message *</Label>
        <Textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about the project or question."
        />
      </div>
      <Button
        type="submit"
        disabled={status === "sending"}
        className="group h-11 gap-2 bg-action text-action-foreground hover:bg-action-dark"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Button>

      <div className="mt-6 border-t border-border pt-6">
        <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Or call us
        </p>
        <ul className="mt-3 grid gap-2 text-sm">
          {offices.map((office) => (
            <li
              key={office.city}
              className="flex items-center justify-between gap-3"
            >
              <span className="text-foreground">
                {office.city}, {office.state}
              </span>
              <a
                href={`tel:${office.phone.replace(/\D/g, "")}`}
                className="text-muted-foreground hover:text-action hover:underline hover:underline-offset-4 hover:decoration-action"
              >
                {office.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </form>
  )
}
