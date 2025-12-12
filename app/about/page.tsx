import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Users, Zap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About Us | Trésor Agency",
  description:
    "Learn about Trésor Agency - our story, values, and approach to delivering exceptional marketing and creative solutions.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      titleAr: "التميز",
      description:
        "We pursue perfection in every project, ensuring the highest quality standards in all our deliverables.",
    },
    {
      icon: Users,
      title: "Collaboration",
      titleAr: "التعاون",
      description:
        "We work closely with our clients as partners, understanding their vision and bringing it to life together.",
    },
    {
      icon: Zap,
      title: "Innovation",
      titleAr: "الابتكار",
      description: "We stay ahead of trends and leverage cutting-edge tools to deliver modern, impactful solutions.",
    },
    {
      icon: Award,
      title: "Results",
      titleAr: "النتائج",
      description: "We focus on measurable outcomes that drive real business growth and brand recognition.",
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
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                About Trésor Agency
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Your trusted partner for luxury marketing and creative solutions
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                <p>
                  Trésor Agency was founded on a simple belief: every brand deserves to shine like a treasure. Our name,
                  meaning "treasure" in French, reflects our commitment to uncovering and highlighting the unique value
                  in every client we work with.
                </p>
                <p>
                  Working remotely from day one, we've built a team of talented creatives, strategists, and developers
                  who share a passion for excellence. We combine the sophistication of luxury branding with the agility
                  of modern digital practices.
                </p>
                <p>
                  From startups to established enterprises, we've helped businesses across industries transform their
                  brand presence and achieve remarkable growth. Our approach is simple: listen deeply, create boldly,
                  and deliver precisely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="border-y border-border bg-card/50 py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">The principles that guide everything we do</p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border bg-card">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <value.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <p className="text-sm text-muted-foreground" dir="rtl">
                      {value.titleAr}
                    </p>
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
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Remote Excellence
              </h2>
              <div className="mt-6 space-y-6 text-lg leading-8 text-muted-foreground">
                <p>
                  We're proud to operate as a fully remote agency. This allows us to work with the best talent
                  regardless of location and provide our clients with flexible, efficient service across time zones.
                </p>
                <p>
                  Our remote-first approach means we've invested heavily in communication tools, project management
                  systems, and collaborative workflows. You'll always know the status of your project, and we're just a
                  message away when you need us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Section */}
        <section className="border-t border-border bg-muted/20 py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Development & Programming</p>
              <p className="mt-2 text-lg font-semibold text-foreground">حقوق البرمجة © Ahmed Elhenawy</p>
              <p className="mt-1 text-sm text-muted-foreground">Programming Rights © Ahmed Elhenawy</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
