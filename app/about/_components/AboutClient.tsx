"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Users, Zap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"

export function AboutClient() {
  const { language } = useLanguage()
  const t = translations.about

  const values = [
    {
      icon: Target,
      title: t.excellence[language],
      description: t.excellenceDesc[language],
    },
    {
      icon: Users,
      title: t.collaboration[language],
      description: t.collaborationDesc[language],
    },
    {
      icon: Zap,
      title: t.innovation[language],
      description: t.innovationDesc[language],
    },
    {
      icon: Award,
      title: t.results[language],
      description: t.resultsDesc[language],
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

        {/* Story Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.storyTitle[language]}
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                <p>{t.storyPara1[language]}</p>
                <p>{t.storyPara2[language]}</p>
                <p>{t.storyPara3[language]}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y border-border bg-card/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.valuesTitle[language]}
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">{t.valuesSubtitle[language]}</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border bg-card">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Remote Work Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {t.remoteTitle[language]}
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                <p>{t.remotePara1[language]}</p>
                <p>{t.remotePara2[language]}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
