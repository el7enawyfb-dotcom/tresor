"use client"

import { useEffect, useRef } from "react"

export function TrustedBy() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Dummy client logos - replace with actual client logos
  const clients = [
    "Client Logo 1",
    "Client Logo 2",
    "Client Logo 3",
    "Client Logo 4",
    "Client Logo 5",
    "Client Logo 6",
    "Client Logo 7",
    "Client Logo 8",
  ]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 1
    const scrollInterval = setInterval(() => {
      scrollAmount += scrollStep
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0
      }
      scrollContainer.scrollLeft = scrollAmount
    }, 30)

    return () => clearInterval(scrollInterval)
  }, [])

  return (
    <section className="border-y border-border/40 bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Trusted by Industry Leaders
        </h2>
        <div className="relative mt-8 overflow-hidden">
          <div ref={scrollRef} className="flex gap-x-12 overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex h-16 w-40 flex-shrink-0 items-center justify-center rounded-lg border border-border/50 bg-muted/20 px-6"
              >
                <span className="text-sm font-medium text-muted-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
