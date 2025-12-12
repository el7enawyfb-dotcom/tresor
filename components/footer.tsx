"use client"

import Link from "next/link"
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = translations.footer

  const footerLinks = {
    services: [
      { name: translations.services.design.title[language], href: "/services#design" },
      { name: translations.services.marketing.title[language], href: "/services#marketing" },
      { name: translations.services.web.title[language], href: "/services#web" },
      { name: translations.services.branding.title[language], href: "/services#branding" },
    ],
    company: [
      { name: translations.header.about[language], href: "/about" },
      { name: translations.header.portfolio[language], href: "/portfolio" },
      { name: translations.header.contact[language], href: "/contact" },
    ],
    legal: [
      {
        name: language === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
        href: "/privacy",
      },
      {
        name: language === "ar" ? "شروط الخدمة" : "Terms of Service",
        href: "/terms",
      },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Email", icon: Mail, href: "mailto:hello@tresor-agency.com" },
  ]

  return (
    <footer className="border-t border-primary/20 bg-card">
      <div className="border-b border-primary/20 bg-gradient-to-br from-primary/5 via-transparent to-primary/5">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Us Section */}
            <div className="relative rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/30 glow-gold">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-sans">
                    {language === "ar" ? "تواصل معنا" : "Contact Us"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-sans">
                    {language === "ar" ? "نحن متاحون للرد على استفساراتكم" : "We're available to answer your inquiries"}
                  </p>
                  <a
                    href="tel:+201156990699"
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 font-sans inline-block"
                    dir="ltr"
                  >
                    01156990699
                  </a>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="relative rounded-2xl border border-primary/30 bg-card/50 backdrop-blur-sm p-8 shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/30 glow-gold">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 font-sans">
                    {language === "ar" ? "موقعنا" : "Our Location"}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-sans">
                    {language === "ar" ? "مقرنا في قلب القاهرة" : "Our headquarters in the heart of Cairo"}
                  </p>
                  <p className="text-base font-bold text-foreground leading-relaxed font-sans">
                    {language === "ar"
                      ? "3053 المعراج العلوي، المعادي، القاهرة، مصر"
                      : "3053 Al-Miraj Al-Ulwi, Maadi, Cairo, Egypt"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-4xl font-bold tracking-tight text-gradient-gold glow-gold">Trésor</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md font-sans">
              {t.description[language]}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground transition-all duration-300 hover:text-primary hover:scale-110"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-bold leading-6 text-primary mb-4 font-sans">{t.servicesTitle[language]}</h3>
            <ul role="list" className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold leading-6 text-primary mb-4 font-sans">{t.companyTitle[language]}</h3>
            <ul role="list" className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold leading-6 text-primary mb-4 font-sans">{t.legalTitle[language]}</h3>
            <ul role="list" className="space-y-3">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-muted-foreground hover:text-primary transition-colors duration-300 font-sans"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs leading-5 text-muted-foreground text-center md:text-start font-sans">
              © {new Date().getFullYear()} Trésor Agency. {t.copyright[language]}
            </p>
            <p className="text-xs leading-5 text-primary font-semibold font-sans">{t.developedBy[language]}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
