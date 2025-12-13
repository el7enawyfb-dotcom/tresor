"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

interface Testimonial {
  quote: { ar: string; en: string }
  author: string
  role: { ar: string; en: string }
  company: string
  category: "SME" | "Enterprise" | "Startup"
}

const testimonials: Testimonial[] = [
  {
    quote: {
      ar: "وكالة تريزور غيّرت هوية علامتنا التجارية بالكامل. اهتمامهم بالتفاصيل ورؤيتهم الإبداعية تجاوزت كل التوقعات.",
      en: "Trésor Agency transformed our brand identity completely. Their attention to detail and creative vision exceeded all expectations.",
    },
    author: "Sarah Johnson",
    role: { ar: "الرئيس التنفيذي", en: "CEO" },
    company: "TechStart Inc.",
    category: "Startup",
  },
  {
    quote: {
      ar: "العمل مع تريزور كان سلساً. قدموا حملات تسويقية عالية الجودة حققت نتائج حقيقية لأعمالنا.",
      en: "Working with Trésor was seamless. They delivered high-quality marketing campaigns that drove real results for our business.",
    },
    author: "Michael Chen",
    role: { ar: "مدير التسويق", en: "Marketing Director" },
    company: "Global Enterprises",
    category: "Enterprise",
  },
  {
    quote: {
      ar: "محترفون، مبدعون، ودائماً في الوقت المحدد. وكالة تريزور هي شريكنا المفضل لجميع احتياجات المحتوى المرئي.",
      en: "Professional, creative, and always on time. Trésor Agency is our go-to partner for all visual content needs.",
    },
    author: "Ahmed Al-Mansouri",
    role: { ar: "المؤسس", en: "Founder" },
    company: "Desert Ventures",
    category: "SME",
  },
]

export function Testimonials() {
  const { language } = useLanguage()
  const t = translations.testimonials

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.title[language]}
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t.subtitle[language]}</p>
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
                  &ldquo;{testimonial.quote[language]}&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role[language]} at {testimonial.company}
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
