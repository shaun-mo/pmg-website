"use client"

import * as React from "react"

export type HeaderScrollState = {
  atTop: boolean
  scrollingDown: boolean
}

const HIDE_THRESHOLD = 64
const SOLID_THRESHOLD = 8

export function useHeaderScrollState(): HeaderScrollState {
  const [state, setState] = React.useState<HeaderScrollState>({
    atTop: true,
    scrollingDown: false,
  })

  React.useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const y = window.scrollY
        const delta = y - lastY
        const atTop = y < SOLID_THRESHOLD
        const scrollingDown =
          y > HIDE_THRESHOLD && delta > 0 ? true : delta < 0 ? false : undefined

        setState((prev) => ({
          atTop,
          scrollingDown:
            scrollingDown === undefined ? prev.scrollingDown : scrollingDown,
        }))

        lastY = y
        ticking = false
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return state
}
