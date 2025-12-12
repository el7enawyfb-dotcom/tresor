import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  category: "SME" | "Enterprise" | "Startup"
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Trésor Agency transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    category: "Startup",
  },
  {
    quote:
      "Working with Trésor was seamless. They delivered high-quality marketing campaigns that drove real results for our business.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "Global Enterprises",
    category: "Enterprise",
  },
  {
    quote:
      "Professional, creative, and always on time. Trésor Agency is our go-to partner for all visual content needs.",
    author: "Ahmed Al-Mansouri",
    role: "Founder",
    company: "Desert Ventures",
    category: "SME",
  },
]

export function Testimonials() {
  const categories = ["All", "Startup", "Enterprise", "SME"]

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">See what our clients say about working with us</p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {testimonial.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
