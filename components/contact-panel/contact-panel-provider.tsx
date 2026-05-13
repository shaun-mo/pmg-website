"use client"

import * as React from "react"

type ContactPanelContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const ContactPanelContext = React.createContext<ContactPanelContextValue | null>(
  null,
)

export function ContactPanelProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [open, setOpen] = React.useState(false)
  const value = React.useMemo(() => ({ open, setOpen }), [open])
  return (
    <ContactPanelContext.Provider value={value}>
      {children}
    </ContactPanelContext.Provider>
  )
}

export function useContactPanel() {
  const ctx = React.useContext(ContactPanelContext)
  if (!ctx) {
    throw new Error("useContactPanel must be used within ContactPanelProvider")
  }
  return ctx
}
