"use client"

import type React from "react"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin } from "lucide-react"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"

function ContactFormContent() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service")
  const { language } = useLanguage()
  const t = translations.contact

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceType: serviceParam || "",
    projectDescription: "",
    budget: "",
    deadline: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const serviceOptions = [
    { value: "design", label: t.serviceOptions.design[language] },
    { value: "marketing", label: t.serviceOptions.marketing[language] },
    { value: "web", label: t.serviceOptions.web[language] },
    { value: "branding", label: t.serviceOptions.branding[language] },
    { value: "other", label: t.serviceOptions.other[language] },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="mx-auto max-w-2xl border-border bg-card">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">{t.thankYou[language]}</CardTitle>
          <CardDescription>{t.messageReceived[language]}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">
            {t.sendAnother[language]}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-12 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">{t.formTitle[language]}</CardTitle>
            <CardDescription>{t.formSubtitle[language]}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">{t.fullName[language]}</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="companyName">{t.companyName[language]}</Label>
                  <Input
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    placeholder={language === "ar" ? "شركتك" : "Your Company"}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">{t.email[language]}</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">{t.phone[language]}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serviceType">{t.serviceType[language]}</Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleChange("serviceType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t.selectService[language]} />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDescription">{t.projectDescription[language]}</Label>
                <Textarea
                  id="projectDescription"
                  required
                  value={formData.projectDescription}
                  onChange={(e) => handleChange("projectDescription", e.target.value)}
                  placeholder={t.projectPlaceholder[language]}
                  rows={5}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="budget">{t.budget[language]}</Label>
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    placeholder="$5,000 - $10,000"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">{t.deadline[language]}</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleChange("deadline", e.target.value)}
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-gold"
              >
                {isSubmitting ? t.sending[language] : t.sendMessage[language]}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">{t.contactInfo[language]}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t.emailLabel[language]}</p>
                <a href="mailto:hello@tresor-agency.com" className="text-sm text-muted-foreground hover:text-primary">
                  hello@tresor-agency.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t.phoneLabel[language]}</p>
                <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary">
                  567-890 (234) 1+
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium">{t.location[language]}</p>
                <p className="text-sm text-muted-foreground">{t.remoteAgency[language]}</p>
                <p className="text-sm text-muted-foreground">{t.worldwideService[language]}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-xl">{t.responseTime[language]}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed text-muted-foreground">{t.responseText[language]}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations.contact

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24">
        <section className="border-b border-border bg-gradient-to-br from-primary/5 via-transparent to-transparent py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">{t.title[language]}</h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">{t.subtitle[language]}</p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Suspense fallback={<div className="text-center">Loading form...</div>}>
              <ContactFormContent />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
