"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")
  const { language } = useLanguage()
  const t = translations.portfolio

  const filters = [
    { id: "all", label: t.allProjects[language] },
    { id: "design", label: t.designVideo[language] },
    { id: "marketing", label: t.marketing[language] },
    { id: "web", label: t.websites[language] },
    { id: "branding", label: t.branding[language] },
    { id: "logos", label: t.logos[language] },
  ]

  const projects = [
    {
      id: 1,
      title: language === "ar" ? "حملة فندق فاخر" : "Luxury Hotel Campaign",
      category: "design",
      industry: language === "ar" ? "الضيافة" : "Hospitality",
      image: "/luxury-hotel-campaign-cinematic-photography.jpg",
      description:
        language === "ar"
          ? "حملة مرئية كاملة تشمل التصوير الفوتوغرافي وإنتاج الفيديو"
          : "Complete visual campaign including photography and video production",
      href: "/portfolio/1",
    },
    {
      id: 2,
      title: language === "ar" ? "منصة تجارة إلكترونية" : "E-commerce Platform",
      category: "web",
      industry: language === "ar" ? "التجزئة" : "Retail",
      image: "/modern-ecommerce-website-dark-elegant.jpg",
      description:
        language === "ar"
          ? "منصة تجارة إلكترونية عالية الأداء مع نظام إدارة محتوى مخصص"
          : "High-performance Next.js e-commerce platform with custom CMS",
      href: "/portfolio/2",
    },
    {
      id: 3,
      title: language === "ar" ? "هوية شركة تقنية ناشئة" : "Tech Startup Branding",
      category: "branding",
      industry: language === "ar" ? "التكنولوجيا" : "Technology",
      image: "/tech-startup-logo-brand-identity-modern.jpg",
      description:
        language === "ar"
          ? "نظام هوية تجارية كامل من المفهوم إلى الإرشادات"
          : "Full brand identity system from concept to guidelines",
      href: "/portfolio/3",
    },
    {
      id: 4,
      title: "Petit Bébé",
      category: "marketing",
      industry: language === "ar" ? "منتجات الأطفال" : "Baby Products",
      image: "/images/petitbebe-carseat-ad.jpeg",
      description:
        language === "ar"
          ? "حملة إعلانية لمنتجات الأطفال - كرسي سيارة للأطفال من 3 أشهر إلى سنتين - خصم 20%"
          : "Baby products advertising campaign - Car seat suitable from 3 months to 2 years old - 20% OFF",
      href: "/portfolio/petit-bebe",
    },
    {
      id: 11,
      title: language === "ar" ? "خبز وشاورما" : "Khubz w Shawarma",
      category: "marketing",
      industry: language === "ar" ? "المطاعم" : "Restaurants",
      image: "/images/khubz-shawarma-mawlid.jpg",
      description:
        language === "ar"
          ? "حملة احتفالية بالمولد النبوي - توزيع خبز السرايا مجاناً في فرع المعادي"
          : "Prophet's Birthday celebration campaign - Free Khubz Al-Saraya distribution at Maadi branch",
      href: "/portfolio/khubz-shawarma",
    },
    {
      id: 12,
      title: "Phi Line Studio",
      category: "marketing",
      industry: language === "ar" ? "الأزياء والإكسسوارات" : "Fashion & Accessories",
      image: "/images/philine-studio-hats.jpeg",
      description:
        language === "ar"
          ? "حملة تسويقية لمنتجات الأزياء الفاخرة - قبعات صيفية أنيقة بتصميم عصري - الدقة في كل تفصيلة"
          : "Luxury fashion products marketing campaign - Elegant summer hats with modern design - Precision in every detail",
      href: "/portfolio/philine-studio",
    },
    {
      id: 5,
      title: language === "ar" ? "إعادة هوية مطعم" : "Restaurant Rebranding",
      category: "branding",
      industry: language === "ar" ? "الطعام والشراب" : "Food & Beverage",
      image: "/restaurant-branding-elegant-luxury.jpg",
      description:
        language === "ar"
          ? "إعادة هوية كاملة تشمل الشعار وتصميم القائمة والحضور الرقمي"
          : "Complete rebrand including logo, menu design, and digital presence",
      href: "/portfolio/5",
    },
    {
      id: 6,
      title: language === "ar" ? "فيديو إطلاق منتج" : "Product Launch Video",
      category: "design",
      industry: language === "ar" ? "التكنولوجيا" : "Technology",
      image: "/product-launch-video-cinematic-dark.jpg",
      description:
        language === "ar"
          ? "فيديو إطلاق منتج سينمائي مع رسومات متحركة"
          : "Cinematic product launch video with motion graphics",
      href: "/portfolio/6",
    },
    {
      id: 7,
      title: "Petit Bébé",
      category: "logos",
      industry: language === "ar" ? "منتجات الأطفال" : "Baby Products",
      image: "/images/petitbebe-logo.png",
      description:
        language === "ar"
          ? "شعار عصري ومرح لعلامة تجارية لمنتجات الأطفال"
          : "Playful and modern logo for a baby products brand",
      href: "/portfolio/7",
    },
    {
      id: 8,
      title: "Ugee",
      category: "logos",
      industry: language === "ar" ? "التكنولوجيا" : "Technology",
      image: "/images/ugeelogo400px-25a33bb1-98be-46c0-af57-f413bb540049.webp",
      description:
        language === "ar"
          ? "شعار بسيط وأنيق لشركة تقنية متخصصة في الأجهزة الرسومية"
          : "Minimalist and elegant logo for a graphics tablet technology company",
      href: "/portfolio/8",
    },
    {
      id: 9,
      title: "XP-Pen",
      category: "logos",
      industry: language === "ar" ? "التكنولوجيا" : "Technology",
      image: "/images/xp-pen-logo.png",
      description:
        language === "ar"
          ? "شعار احترافي وعصري لشركة أقلام رقمية رائدة"
          : "Professional and modern logo for a leading digital pen company",
      href: "/portfolio/9",
    },
    {
      id: 10,
      title: "Huion",
      category: "logos",
      industry: language === "ar" ? "التكنولوجيا" : "Technology",
      image: "/images/huion-current-logo-vertical-arrangement.png",
      description:
        language === "ar"
          ? "شعار مميز بتاج ملكي لشركة رائدة في الأجهزة الرسومية"
          : "Distinctive crown logo for a leading graphics device company",
      href: "/portfolio/10",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

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

        {/* Filter Section */}
        <section className="border-b border-border bg-background py-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter.id)}
                  className={activeFilter === filter.id ? "bg-primary text-primary-foreground" : "border-border"}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <Link key={project.id} href={project.href}>
                  <Card
                    className="group overflow-hidden border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: "both" }}
                  >
                    <div
                      className={`relative aspect-[3/2] overflow-hidden ${project.category === "logos" ? "bg-white flex items-center justify-center p-6" : ""}`}
                    >
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`transition-transform duration-500 group-hover:scale-110 ${
                          project.category === "logos"
                            ? "max-h-full max-w-full object-contain"
                            : "h-full w-full object-cover"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <CardContent className="p-6">
                      <span className="text-xs font-medium uppercase tracking-wide text-primary">
                        {project.industry}
                      </span>
                      <h3 className="mt-2 text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
