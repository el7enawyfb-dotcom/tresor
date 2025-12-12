"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "design", label: "Design & Video" },
    { id: "marketing", label: "Marketing" },
    { id: "web", label: "Websites" },
    { id: "branding", label: "Branding" },
  ]

  const projects = [
    {
      id: 1,
      title: "Luxury Hotel Campaign",
      category: "design",
      industry: "Hospitality",
      image: "/luxury-hotel-campaign-cinematic-photography.jpg",
      description: "Complete visual campaign including photography and video production",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      category: "web",
      industry: "Retail",
      image: "/modern-ecommerce-website-dark-elegant.jpg",
      description: "High-performance Next.js e-commerce platform with custom CMS",
    },
    {
      id: 3,
      title: "Tech Startup Branding",
      category: "branding",
      industry: "Technology",
      image: "/tech-startup-logo-brand-identity-modern.jpg",
      description: "Full brand identity system from concept to guidelines",
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "marketing",
      industry: "Fashion",
      image: "/fashion-social-media-ads-campaign.jpg",
      description: "Multi-platform paid advertising campaign with 300% ROI",
    },
    {
      id: 5,
      title: "Restaurant Rebranding",
      category: "branding",
      industry: "Food & Beverage",
      image: "/restaurant-branding-elegant-luxury.jpg",
      description: "Complete rebrand including logo, menu design, and digital presence",
    },
    {
      id: 6,
      title: "Product Launch Video",
      category: "design",
      industry: "Technology",
      image: "/product-launch-video-cinematic-dark.jpg",
      description: "Cinematic product launch video with motion graphics",
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
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Our Portfolio
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Explore our latest work across branding, design, web development, and marketing campaigns.
              </p>
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
