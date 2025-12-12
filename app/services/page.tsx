"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, TrendingUp, Globe, Sparkles, Check } from "lucide-react"
import Link from "next/link"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"

export default function ServicesPage() {
  const { language } = useLanguage()
  const t = translations.servicesPage
  const tServices = translations.services

  const services = [
    {
      id: "design",
      title: tServices.design.title[language],
      icon: Camera,
      description: tServices.design.description[language],
      includes: [
        t.designIncludes.item1[language],
        t.designIncludes.item2[language],
        t.designIncludes.item3[language],
        t.designIncludes.item4[language],
        t.designIncludes.item5[language],
        t.designIncludes.item6[language],
      ],
      deliveryTime: t.designDelivery[language],
      whyChoose: t.designWhy[language],
    },
    {
      id: "marketing",
      title: tServices.marketing.title[language],
      icon: TrendingUp,
      description: tServices.marketing.description[language],
      includes: [
        t.marketingIncludes.item1[language],
        t.marketingIncludes.item2[language],
        t.marketingIncludes.item3[language],
        t.marketingIncludes.item4[language],
        t.marketingIncludes.item5[language],
        t.marketingIncludes.item6[language],
      ],
      deliveryTime: t.marketingDelivery[language],
      whyChoose: t.marketingWhy[language],
    },
    {
      id: "web",
      title: tServices.web.title[language],
      icon: Globe,
      description: tServices.web.description[language],
      includes: [
        t.webIncludes.item1[language],
        t.webIncludes.item2[language],
        t.webIncludes.item3[language],
        t.webIncludes.item4[language],
        t.webIncludes.item5[language],
        t.webIncludes.item6[language],
      ],
      deliveryTime: t.webDelivery[language],
      whyChoose: t.webWhy[language],
    },
    {
      id: "branding",
      title: tServices.branding.title[language],
      icon: Sparkles,
      description: tServices.branding.description[language],
      includes: [
        t.brandingIncludes.item1[language],
        t.brandingIncludes.item2[language],
        t.brandingIncludes.item3[language],
        t.brandingIncludes.item4[language],
        t.brandingIncludes.item5[language],
        t.brandingIncludes.item6[language],
      ],
      deliveryTime: t.brandingDelivery[language],
      whyChoose: t.brandingWhy[language],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-transparent py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{t.title[language]}</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.subtitle[language]}</p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <Card className="overflow-hidden border-border bg-card">
                    <CardHeader className="border-b border-border bg-muted/30 pb-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <service.icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl font-bold">{service.title}</CardTitle>
                          <p className="mt-4 text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-8">
                      <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-foreground">{t.whatsIncluded[language]}</h3>
                          <ul className="space-y-3">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">{t.deliveryTime[language]}</h3>
                            <p className="text-sm text-muted-foreground">{service.deliveryTime}</p>
                          </div>
                          <div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">{t.whyChoose[language]}</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{service.whyChoose}</p>
                          </div>
                          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href={`/contact?service=${service.id}`}>{t.contactAbout[language]}</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
