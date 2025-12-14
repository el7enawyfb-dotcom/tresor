"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function TrustedBy() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()

  const clients = [
    {
      name: "Ugee",
      logo: "/images/ugeelogo400px-25a33bb1-98be-46c0-af57-f413bb540049.webp",
    },
    {
      name: "Huion",
      logo: "/images/huion-current-logo-vertical-arrangement.png",
    },
    {
      name: "XP-Pen",
      logo: "/images/xp-pen-logo.png",
    },
    {
      name: "Petit Bébé",
      logo: "/images/petitbebe-logo.png",
    },
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
          {language === "ar" ? "موثوق من قبل رواد الصناعة" : "Trusted by Industry Leaders"}
        </h2>
        <div className="relative mt-8 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

          <div ref={scrollRef} className="flex gap-x-12 overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="group flex h-24 w-48 flex-shrink-0 items-center justify-center rounded-xl border border-border/50 bg-white px-6 transition-all duration-500 hover:scale-110 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
