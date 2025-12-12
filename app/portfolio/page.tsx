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
    },
    {
      id: 4,
      title: language === "ar" ? "حملة وسائل التواصل الاجتماعي" : "Social Media Campaign",
      category: "marketing",
      industry: language === "ar" ? "الأزياء" : "Fashion",
      image: "/fashion-social-media-ads-campaign.jpg",
      description:
        language === "ar"
          ? "حملة إعلانية متعددة المنصات مع عائد استثمار 300٪"
          : "Multi-platform paid advertising campaign with 300% ROI",
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
              {filteredProjects.map((project) => (
                <Link key={project.id} href={`/portfolio/${project.id}`}>
                  <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
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
