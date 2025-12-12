import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Tag, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  // Mock project data - in real app, fetch from CMS/API
  const project = {
    id: params.id,
    title: "Luxury Hotel Campaign",
    client: "Grand Horizon Hotels",
    category: "Design & Photography",
    industry: "Hospitality",
    date: "March 2024",
    challenge:
      "Grand Horizon Hotels needed to rebrand their luxury property portfolio and create compelling visual assets that would attract high-end travelers and increase direct bookings.",
    solution:
      "We developed a comprehensive visual campaign featuring cinematic photography, video walkthroughs, and cohesive design materials. Our team spent two weeks on location capturing the essence of each property.",
    deliverables: [
      "Professional photography (200+ images)",
      "Cinematic video tour (3 minutes)",
      "Social media content package",
      "Print collateral design",
      "Website imagery optimization",
    ],
    techUsed: ["Adobe Photoshop", "Adobe Premiere Pro", "Cinema 4D", "After Effects"],
    role: "Complete visual production, from concept to final delivery",
    images: ["/luxury-hotel-lobby-cinematic-dark-elegant.jpg", "/luxury-hotel-room-sunset-view-cinematic.jpg", "/luxury-hotel-pool-night-photography-elegant.jpg"],
    results: "40% increase in direct bookings, 2.5x social media engagement, featured in luxury travel publications",
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        {/* Back Button */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Button variant="ghost" asChild>
              <Link href="/portfolio" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </section>

        {/* Project Hero */}
        <section className="bg-card py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-4 text-xl text-muted-foreground">{project.client}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm">
                  <Tag className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{project.category}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <ExternalLink className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{project.industry}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Images */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-lg">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground">The Challenge</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-foreground">Our Solution</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>

                <h2 className="mt-8 font-serif text-2xl font-bold text-foreground">Results</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.results}</p>
              </div>

              <div className="space-y-8">
                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-foreground">Deliverables</h3>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-foreground">Technology Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techUsed.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-foreground">Trésor's Role</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.role}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border bg-card py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground">Interested in Similar Results?</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Let's discuss how we can help your brand achieve excellence
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
