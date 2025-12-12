"use client"

import Link from "next/link"
import { Camera, TrendingUp, Globe, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServiceCard } from "@/components/service-card"
import { TrustedBy } from "@/components/trusted-by"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export default function HomePage() {
  const { language } = useLanguage()
  const t = translations

  const services = [
    {
      title: t.services.design.title[language],
      description: t.services.design.description[language],
      icon: Camera,
      href: "/services#design",
    },
    {
      title: t.services.marketing.title[language],
      description: t.services.marketing.description[language],
      icon: TrendingUp,
      href: "/services#marketing",
    },
    {
      title: t.services.web.title[language],
      description: t.services.web.description[language],
      icon: Globe,
      href: "/services#web",
    },
    {
      title: t.services.branding.title[language],
      description: t.services.branding.description[language],
      icon: Sparkles,
      href: "/services#branding",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Company Info */}
      <HeroSection />

      {/* Trusted By Section */}
      <TrustedBy />

      {/* Services Overview */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.services.title[language]}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{t.services.subtitle[language]}</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.cta.title[language]}
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.cta.subtitle[language]}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-gold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40"
              >
                <Link href="/contact">{t.cta.button[language]}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
