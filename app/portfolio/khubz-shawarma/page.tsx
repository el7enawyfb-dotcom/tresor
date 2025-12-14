"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, Phone, MapPin, Gift, Calendar, Utensils, Heart } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function KhubzShawarmaPage() {
  const { language } = useLanguage()
  const isRTL = language === "ar"

  const content = {
    ar: {
      backToPortfolio: "العودة للأعمال",
      client: "العميل",
      clientName: "خبز وشاورما",
      industry: "المجال",
      industryName: "المطاعم والأغذية",
      services: "الخدمات",
      servicesName: "تصميم حملة إعلانية",
      title: "حملة المولد النبوي الشريف",
      subtitle: "كل عام وأنتم بخير",
      description:
        "حملة تسويقية احتفالية بمناسبة المولد النبوي الشريف لمطعم خبز وشاورما، تتضمن توزيع خبز السرايا مجاناً على العملاء في فرع المعادي.",
      aboutCampaign: "عن الحملة",
      aboutText:
        "قمنا بتصميم حملة إعلانية مميزة لمطعم خبز وشاورما بمناسبة المولد النبوي الشريف. الحملة تتضمن إعلان جذاب يعكس روح المناسبة الدينية مع الترويج لتوزيع خبز السرايا الشهي مجاناً على العملاء. التصميم يجمع بين الألوان الدافئة والعناصر الإسلامية مع صورة احترافية للمنتج.",
      highlights: "أبرز النقاط",
      highlight1: "توزيع خبز السرايا مجاناً",
      highlight2: "فرع المعادي",
      highlight3: "احتفالية المولد النبوي",
      highlight4: "تصميم جذاب ومميز",
      campaignDetails: "تفاصيل الحملة",
      eventTitle: "المناسبة",
      eventDesc: "المولد النبوي الشريف - كل عام وأنتم بخير",
      offerTitle: "العرض",
      offerDesc: "توزيع خبز السرايا مجاناً احتفالاً بالمولد",
      locationTitle: "الموقع",
      locationDesc: "فرع المعادي",
      contactTitle: "التواصل",
      contactDesc: "01505666651",
      slogan: "سيب فرحة المولد علينا",
      results: "نتائج الحملة",
      result1Title: "زيادة التفاعل",
      result1Desc: "تفاعل كبير على منصات التواصل الاجتماعي",
      result2Title: "زيادة الزيارات",
      result2Desc: "إقبال كبير على فرع المعادي خلال أيام الحملة",
      result3Title: "تعزيز الولاء",
      result3Desc: "تعزيز ولاء العملاء من خلال المبادرة الاجتماعية",
      visitWebsite: "تواصل الآن",
    },
    en: {
      backToPortfolio: "Back to Portfolio",
      client: "Client",
      clientName: "Khubz w Shawarma",
      industry: "Industry",
      industryName: "Restaurants & Food",
      services: "Services",
      servicesName: "Campaign Design",
      title: "Prophet's Birthday Campaign",
      subtitle: "Wishing You Well Every Year",
      description:
        "A celebratory marketing campaign for Khubz w Shawarma restaurant on the occasion of Prophet's Birthday, featuring free Khubz Al-Saraya distribution to customers at Maadi branch.",
      aboutCampaign: "About the Campaign",
      aboutText:
        "We designed a distinctive advertising campaign for Khubz w Shawarma restaurant on the occasion of Prophet's Birthday. The campaign includes an attractive ad that reflects the spirit of the religious occasion while promoting the free distribution of delicious Khubz Al-Saraya to customers. The design combines warm colors and Islamic elements with a professional product photo.",
      highlights: "Key Highlights",
      highlight1: "Free Khubz Al-Saraya",
      highlight2: "Maadi Branch",
      highlight3: "Prophet's Birthday Celebration",
      highlight4: "Attractive & Unique Design",
      campaignDetails: "Campaign Details",
      eventTitle: "Occasion",
      eventDesc: "Prophet's Birthday - Wishing you well every year",
      offerTitle: "Offer",
      offerDesc: "Free Khubz Al-Saraya distribution celebrating the Mawlid",
      locationTitle: "Location",
      locationDesc: "Maadi Branch",
      contactTitle: "Contact",
      contactDesc: "01505666651",
      slogan: "Leave the Mawlid Joy to Us",
      results: "Campaign Results",
      result1Title: "Increased Engagement",
      result1Desc: "High engagement on social media platforms",
      result2Title: "Increased Visits",
      result2Desc: "Great turnout at Maadi branch during campaign days",
      result3Title: "Enhanced Loyalty",
      result3Desc: "Strengthened customer loyalty through social initiative",
      visitWebsite: "Contact Now",
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="group">
              {isRTL ? (
                <>
                  {t.backToPortfolio}
                  <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              ) : (
                <>
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  {t.backToPortfolio}
                </>
              )}
            </Button>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="border-b border-border pb-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/khubz-shawarma-mawlid.jpg"
                  alt="Khubz w Shawarma - Prophet's Birthday Campaign"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-6 flex flex-wrap gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">{t.client}</span>
                    <p className="font-semibold text-foreground">{t.clientName}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.industry}</span>
                    <p className="font-semibold text-foreground">{t.industryName}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t.services}</span>
                    <p className="font-semibold text-foreground">{t.servicesName}</p>
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{t.title}</h1>
                <p className="mt-2 text-2xl text-primary font-semibold">{t.subtitle}</p>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.description}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Gift className="mr-1 h-3 w-3" />
                    {t.highlight1}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <MapPin className="mr-1 h-3 w-3" />
                    {t.highlight2}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    <Calendar className="mr-1 h-3 w-3" />
                    {t.highlight3}
                  </Badge>
                </div>

                <div className="mt-8">
                  <a href="tel:01505666651">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Phone className="mr-2 h-5 w-5" />
                      {t.visitWebsite}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Campaign */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground">{t.aboutCampaign}</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-4xl">{t.aboutText}</p>
          </div>
        </section>

        {/* Campaign Details */}
        <section className="border-t border-border py-16 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">{t.campaignDetails}</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
                <Calendar className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground">{t.eventTitle}</h3>
                <p className="mt-2 text-muted-foreground">{t.eventDesc}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
                <Gift className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground">{t.offerTitle}</h3>
                <p className="mt-2 text-muted-foreground">{t.offerDesc}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
                <MapPin className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground">{t.locationTitle}</h3>
                <p className="mt-2 text-muted-foreground">{t.locationDesc}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-primary/50 hover:shadow-lg">
                <Phone className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground">{t.contactTitle}</h3>
                <p className="mt-2 text-muted-foreground" dir="ltr">
                  {t.contactDesc}
                </p>
              </div>
            </div>

            {/* Slogan */}
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-primary italic">"{t.slogan}"</p>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12">{t.results}</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t.result1Title}</h3>
                <p className="mt-2 text-muted-foreground">{t.result1Desc}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t.result2Title}</h3>
                <p className="mt-2 text-muted-foreground">{t.result2Desc}</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Utensils className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{t.result3Title}</h3>
                <p className="mt-2 text-muted-foreground">{t.result3Desc}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
