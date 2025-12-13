"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  const { language } = useLanguage()
  const t = translations.privacy

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans">{t.title[language]}</h1>
            <p className="text-muted-foreground font-sans">
              {t.lastUpdated[language]}: {language === "ar" ? "13 ديسمبر 2025" : "December 13, 2025"}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 mb-8">
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.intro[language]}</p>
            </div>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.infoCollectionTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.infoCollection[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.useInfoTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.useInfo[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.dataSecurityTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.dataSecurity[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.yourRightsTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.yourRights[language]}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
