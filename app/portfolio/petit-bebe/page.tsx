"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Tag,
  ExternalLink,
  ShoppingCart,
  Baby,
  Shield,
  Star,
  Percent,
} from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export default function PetitBebeProjectPage() {
  const { language } = useLanguage()
  const isArabic = language === "ar"

  const project = {
    title: "Petit Bébé",
    client: "Petit Bébé",
    category: isArabic ? "التسويق والإعلان" : "Marketing & Advertising",
    industry: isArabic ? "منتجات الأطفال" : "Baby Products",
    date: isArabic ? "ديسمبر 2024" : "December 2024",
    website: "www.petitbebe.com",
    challenge: isArabic
      ? "احتاجت شركة Petit Bébé إلى حملة تسويقية مبتكرة لتعزيز مبيعات كرسي السيارة للأطفال خلال موسم الصيف، مع التركيز على السلامة والراحة للأطفال من 3 أشهر إلى سنتين."
      : "Petit Bébé needed an innovative marketing campaign to boost car seat sales during summer season, focusing on safety and comfort for children aged 3 months to 2 years.",
    solution: isArabic
      ? "صممنا حملة إعلانية جذابة بتصميم صيفي مميز يعرض المنتج على الشاطئ مع عرض خصم 20%. الإعلان يجمع بين الألوان الزاهية والرسالة الواضحة لجذب الآباء والأمهات."
      : "We designed an eye-catching advertising campaign with a distinctive summer theme showcasing the product at the beach with a 20% discount offer. The ad combines vibrant colors with a clear message to attract parents.",
    deliverables: isArabic
      ? [
          "تصميم إعلان كرسي السيارة",
          "تصوير المنتج بتقنية عالية",
          "تصميم حملة السوشيال ميديا",
          "إنشاء محتوى ترويجي",
          "تصميم بانرات إعلانية",
          "إدارة الحملة الإعلانية",
        ]
      : [
          "Car seat advertisement design",
          "High-quality product photography",
          "Social media campaign design",
          "Promotional content creation",
          "Advertising banners design",
          "Campaign management",
        ],
    results: isArabic
      ? "زيادة المبيعات بنسبة 35%، وصول الحملة لأكثر من 100,000 عميل محتمل، معدل تفاعل مرتفع على وسائل التواصل الاجتماعي"
      : "35% increase in sales, campaign reached over 100,000 potential customers, high engagement rate on social media",
    productFeatures: isArabic
      ? [
          { icon: Baby, text: "مناسب للأطفال من 3 أشهر إلى سنتين" },
          { icon: Shield, text: "معايير أمان عالية" },
          { icon: Star, text: "تصميم مريح وعملي" },
          { icon: Percent, text: "خصم 20% على السعر" },
        ]
      : [
          { icon: Baby, text: "Suitable from 3 months to 2 years old" },
          { icon: Shield, text: "High safety standards" },
          { icon: Star, text: "Comfortable and practical design" },
          { icon: Percent, text: "20% discount on price" },
        ],
    images: ["/images/petitbebe-carseat-ad.jpeg"],
  }

  return (
    <div className="min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      <Header />

      <main className="pt-24">
        {/* Back Button */}
        <section className="border-b border-border bg-background py-6">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Button variant="ghost" asChild>
              <Link href="/portfolio" className="gap-2">
                {isArabic ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
                {isArabic ? "العودة إلى المعرض" : "Back to Portfolio"}
              </Link>
            </Button>
          </div>
        </section>

        {/* Project Hero */}
        <section className="bg-card py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-500/10 px-4 py-2 text-pink-500">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="text-sm font-medium">{isArabic ? "حملة تسويقية" : "Marketing Campaign"}</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{project.title}</h1>
                <p className="mt-4 text-xl text-primary">
                  Car Seat - {isArabic ? "كرسي سيارة للأطفال" : "Baby Car Seat"}
                </p>
                <p className="mt-2 text-lg text-muted-foreground">
                  {isArabic ? "مناسب للأطفال من 3 أشهر إلى سنتين" : "Suitable from 3 months to 2 years old"}
                </p>

                {/* Discount Badge */}
                <div className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 px-6 py-3 text-white shadow-lg">
                  <Percent className="h-6 w-6" />
                  <span className="text-2xl font-bold">20% {isArabic ? "خصم" : "OFF"}</span>
                </div>
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
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {project.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Product Image */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img
                src={project.images[0] || "/placeholder.svg"}
                alt={`${project.title} - Car Seat Advertisement`}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="border-t border-border bg-gradient-to-br from-pink-500/5 via-transparent to-transparent py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              {isArabic ? "مميزات المنتج" : "Product Features"}
            </h2>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {project.productFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="border-border bg-card text-center transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <feature.icon className="mx-auto mb-4 h-10 w-10 text-pink-500" />
                    <p className="text-sm text-muted-foreground">{feature.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="border-t border-border bg-background py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-foreground">{isArabic ? "التحدي" : "The Challenge"}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.challenge}</p>

                <h2 className="mt-8 text-2xl font-bold text-foreground">{isArabic ? "الحل" : "Our Solution"}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.solution}</p>

                <h2 className="mt-8 text-2xl font-bold text-foreground">{isArabic ? "النتائج" : "Results"}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{project.results}</p>
              </div>

              <div className="space-y-8">
                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-foreground">{isArabic ? "التسليمات" : "Deliverables"}</h3>
                    <ul className="space-y-2">
                      {project.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-pink-500">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-foreground">
                      {isArabic ? "عن العميل" : "About the Client"}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {isArabic
                        ? "Petit Bébé هي علامة تجارية رائدة في منتجات الأطفال، متخصصة في توفير منتجات عالية الجودة وآمنة للأطفال من الولادة حتى سن 3 سنوات."
                        : "Petit Bébé is a leading baby products brand, specializing in providing high-quality and safe products for children from birth to 3 years old."}
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-transparent">
                  <CardContent className="pt-6">
                    <h3 className="mb-4 font-semibold text-foreground">{isArabic ? "دور تريزور" : "Trésor's Role"}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {isArabic
                        ? "قمنا بتصميم وإدارة الحملة التسويقية الكاملة، من التصميم الإبداعي إلى التنفيذ على وسائل التواصل الاجتماعي."
                        : "We designed and managed the complete marketing campaign, from creative design to social media execution."}
                    </p>
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
              <h2 className="text-3xl font-bold text-foreground">
                {isArabic ? "هل تريد نتائج مماثلة؟" : "Interested in Similar Results?"}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                {isArabic
                  ? "دعنا نناقش كيف يمكننا مساعدة علامتك التجارية على تحقيق التميز"
                  : "Let's discuss how we can help your brand achieve excellence"}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              >
                <Link href="/contact">{isArabic ? "ابدأ مشروعك" : "Start Your Project"}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
