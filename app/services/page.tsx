import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, TrendingUp, Globe, Sparkles, Check } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Services | Trésor Agency",
  description:
    "Explore our comprehensive service packages: Design & Production, Marketing & Media, Website Creation, and Full Brand Identity.",
}

export default function ServicesPage() {
  const services = [
    {
      id: "design",
      title: "Design & Production",
      titleAr: "التصميم والإنتاج",
      icon: Camera,
      description: "Professional visual content creation for your brand",
      descriptionAr: "إنتاج محتوى مرئي احترافي لعلامتك التجارية",
      includes: [
        "Professional poster and ad design",
        "Short and long-form video editing",
        "Commercial photography sessions",
        "Social media visual content",
        "Motion graphics and animations",
        "Product photography",
      ],
      deliveryTime: "3-7 business days",
      whyChoose:
        "Our creative team brings years of experience in visual storytelling, ensuring every piece of content captures attention and drives engagement.",
    },
    {
      id: "marketing",
      title: "Marketing & Media Buying",
      titleAr: "التسويق وشراء الإعلانات",
      icon: TrendingUp,
      description: "Data-driven marketing campaigns that deliver results",
      descriptionAr: "حملات تسويقية مدروسة تحقق النتائج",
      includes: [
        "PPC campaign management (Google Ads)",
        "Social media advertising (Meta, LinkedIn)",
        "Marketing strategy development",
        "Live chat & inbox management",
        "Lead generation campaigns",
        "Performance analytics & reporting",
      ],
      deliveryTime: "Ongoing monthly service",
      whyChoose:
        "We combine creativity with data analytics to maximize your ROI and turn visitors into loyal customers.",
    },
    {
      id: "web",
      title: "Website Creation",
      titleAr: "إنشاء المواقع الإلكترونية",
      icon: Globe,
      description: "Modern, fast, and beautiful websites",
      descriptionAr: "مواقع حديثة وسريعة وجميلة",
      includes: [
        "Custom Next.js website development",
        "Responsive design (mobile, tablet, desktop)",
        "SEO optimization",
        "Performance optimization",
        "Optional CMS integration",
        "Maintenance & support",
      ],
      deliveryTime: "2-4 weeks",
      whyChoose:
        "Built with cutting-edge technology and best practices, our websites are fast, secure, and designed to convert visitors into customers.",
    },
    {
      id: "branding",
      title: "Full Brand Identity",
      titleAr: "الهوية التجارية الكاملة",
      icon: Sparkles,
      description: "Complete brand strategy from concept to execution",
      descriptionAr: "استراتيجية علامة تجارية كاملة من الفكرة للتنفيذ",
      includes: [
        "Logo design & brand mark",
        "Brand identity guidelines",
        "Color palette & typography system",
        "Business card & stationery design",
        "Digital & print application",
        "Brand strategy consultation",
      ],
      deliveryTime: "3-5 weeks",
      whyChoose:
        "We create timeless brand identities that resonate with your audience and stand out in the marketplace.",
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
              <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Our Services</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Comprehensive solutions tailored to your business needs. No fixed pricing—every project is unique.
              </p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div key={service.id} id={service.id} className="scroll-mt-24">
                  <Card className="overflow-hidden border-border bg-card">
                    <CardHeader className="border-b border-border bg-muted/30 pb-8">
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                          <service.icon className="h-7 w-7" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-3xl font-bold">{service.title}</CardTitle>
                          <CardDescription className="mt-2 text-base text-muted-foreground" dir="rtl">
                            {service.titleAr}
                          </CardDescription>
                          <p className="mt-4 text-muted-foreground">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-8">
                      <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                          <h3 className="mb-4 text-lg font-semibold text-foreground">What's Included</h3>
                          <ul className="space-y-3">
                            {service.includes.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                                <span className="text-sm text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">Typical Delivery Time</h3>
                            <p className="text-sm text-muted-foreground">{service.deliveryTime}</p>
                          </div>
                          <div>
                            <h3 className="mb-2 text-lg font-semibold text-foreground">Why Choose Us</h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">{service.whyChoose}</p>
                          </div>
                          <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                            <Link href={`/contact?service=${service.id}`}>Contact About This Service</Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
