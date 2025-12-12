"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function HeroSection() {
  const { language } = useLanguage()
  const t = translations.hero

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(203,161,53,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Content - Animated */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Company Badge */}
          <div className="mx-auto mb-8 w-fit opacity-0 animate-fade-in">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-base shadow-lg shadow-primary/50 flex items-center gap-2 glow-gold">
              <Sparkles className="h-5 w-5" />
              <span className="font-sans">{t.companyName[language]}</span>
            </div>
          </div>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            <span className="block opacity-0 animate-slide-in-left animation-delay-200 font-sans">
              {t.title1[language]}
            </span>
            <span className="text-gradient-gold block opacity-0 animate-slide-in-right animation-delay-400 font-sans">
              {t.title2[language]}
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-muted-foreground sm:text-xl max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-600 leading-relaxed font-sans">
            {t.description[language]}
          </p>

          <div className="mt-12 flex items-center justify-center gap-x-6 opacity-0 animate-scale-in animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 font-sans"
            >
              <Link href="/contact">{translations.header.startProject[language]}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-foreground hover:bg-primary/10 bg-transparent transition-all duration-300 hover:border-primary/50 font-sans"
            >
              <Link href="/portfolio">{t.viewWork[language]}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </section>
  )
}
