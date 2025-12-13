"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage() {
  const { language } = useLanguage()
  const t = translations.terms

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
                <FileText className="h-12 w-12 text-primary" />
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
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.servicesTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.services[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.clientObligationsTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.clientObligations[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.paymentTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.payment[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.ipRightsTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.ipRights[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.limitationTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.limitation[language]}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-4 font-sans">{t.contactTitle[language]}</h2>
              <p className="text-foreground leading-relaxed font-sans text-lg">{t.contact[language]}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
