"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Star, Palette, Eye, Award } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function PhiLineStudioPage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const content = {
    backToPortfolio: isArabic ? "العودة للأعمال" : "Back to Portfolio",
    category: isArabic ? "تسويق" : "Marketing",
    industry: isArabic ? "الأزياء والإكسسوارات" : "Fashion & Accessories",
    title: "Phi Line Studio",
    tagline: "Precision in every detail",
    taglineAr: "الدقة في كل تفصيلة",
    description: isArabic
      ? "Phi Line Studio هي علامة تجارية فاخرة متخصصة في تصميم وإنتاج الإكسسوارات العصرية والأنيقة. تتميز منتجاتها بالجودة العالية والتصميم المميز الذي يجمع بين الأصالة والحداثة."
      : "Phi Line Studio is a luxury brand specializing in designing and producing modern and elegant accessories. Their products are characterized by high quality and distinctive design that combines authenticity with modernity.",
    projectOverview: isArabic ? "نظرة عامة على المشروع" : "Project Overview",
    overviewText: isArabic
      ? "قمنا بتصميم حملة تسويقية متكاملة لـ Phi Line Studio تركز على إبراز جمال وأناقة القبعات الصيفية الفاخرة. تم التصوير في استوديو احترافي مع إضاءة مدروسة لإظهار تفاصيل المنتجات بشكل مثالي."
      : "We designed a comprehensive marketing campaign for Phi Line Studio focusing on highlighting the beauty and elegance of luxury summer hats. The shoot was done in a professional studio with carefully planned lighting to showcase product details perfectly.",
    featuredProducts: isArabic ? "المنتجات المميزة" : "Featured Products",
    summerHats: isArabic ? "قبعات صيفية" : "Summer Hats",
    summerHatsDesc: isArabic
      ? "قبعات صيفية أنيقة مصنوعة من القش الطبيعي بتصميم عصري مع شراريب جانبية وشعار العلامة المميز"
      : "Elegant summer hats made from natural straw with modern design featuring side fringes and distinctive brand logo",
    brandValues: isArabic ? "قيم العلامة التجارية" : "Brand Values",
    values: [
      {
        icon: Star,
        title: isArabic ? "الجودة العالية" : "High Quality",
        desc: isArabic ? "مواد طبيعية فاخرة وحرفية متقنة" : "Premium natural materials and fine craftsmanship",
      },
      {
        icon: Palette,
        title: isArabic ? "التصميم المميز" : "Distinctive Design",
        desc: isArabic ? "تصاميم عصرية تجمع بين الأناقة والراحة" : "Modern designs combining elegance and comfort",
      },
      {
        icon: Eye,
        title: isArabic ? "الاهتمام بالتفاصيل" : "Attention to Detail",
        desc: isArabic ? "دقة في كل تفصيلة من تفاصيل المنتج" : "Precision in every product detail",
      },
      {
        icon: Award,
        title: isArabic ? "التميز والفخامة" : "Excellence & Luxury",
        desc: isArabic ? "منتجات فاخرة تناسب الأذواق الراقية" : "Luxury products for refined tastes",
      },
    ],
    campaignHighlights: isArabic ? "أبرز نقاط الحملة" : "Campaign Highlights",
    highlights: [
      isArabic
        ? "تصوير احترافي في استوديو مجهز بأحدث التقنيات"
        : "Professional photography in a state-of-the-art studio",
      isArabic
        ? "إضاءة LED مدروسة لإبراز تفاصيل المنتجات"
        : "Carefully planned LED lighting to highlight product details",
      isArabic ? "عرض المنتجات على أرفف خشبية أنيقة" : "Product display on elegant wooden shelves",
      isArabic ? "تصميم جرافيكي عصري يعكس هوية العلامة" : "Modern graphic design reflecting brand identity",
      isArabic ? "محتوى مناسب لمنصات التواصل الاجتماعي" : "Content suitable for social media platforms",
    ],
    contactUs: isArabic ? "تواصل معنا" : "Contact Us",
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Back Button */}
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <Link href="/portfolio">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              {isArabic ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              {content.backToPortfolio}
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
                  src="/images/philine-studio-hats.jpeg"
                  alt="Phi Line Studio - Summer Hats"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    <Sparkles className="mr-1 h-3 w-3" />
                    {content.tagline}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary text-primary">
                    {content.category}
                  </Badge>
                  <Badge variant="outline" className="border-border">
                    {content.industry}
                  </Badge>
                </div>

                <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{content.title}</h1>
                <p className="mt-2 text-2xl font-medium text-primary">
                  {isArabic ? content.taglineAr : content.tagline}
                </p>

                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{content.description}</p>

                <div className="mt-8">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      {content.contactUs}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground">{content.projectOverview}</h2>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">{content.overviewText}</p>
          </div>
        </section>

        {/* Featured Products */}
        <section className="border-y border-border bg-card/50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground">{content.featuredProducts}</h2>
            <div className="mt-8 rounded-xl border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{content.summerHats}</h3>
                  <p className="mt-2 text-muted-foreground">{content.summerHatsDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Values */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground">{content.brandValues}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {content.values.map((value, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campaign Highlights */}
        <section className="border-t border-border bg-card/50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground">{content.campaignHighlights}</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {content.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-12 text-center">
              <h2 className="text-3xl font-bold text-foreground">
                {isArabic ? "هل لديك مشروع مشابه؟" : "Have a similar project?"}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {isArabic
                  ? "دعنا نساعدك في إبراز علامتك التجارية بأفضل صورة"
                  : "Let us help you showcase your brand in the best way"}
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    {content.contactUs}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
