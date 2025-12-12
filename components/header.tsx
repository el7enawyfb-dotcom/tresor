"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, dir } = useLanguage()
  const t = translations.header

  const navigation = [
    { name: t.home[language], href: "/" },
    { name: t.services[language], href: "/services" },
    { name: t.portfolio[language], href: "/portfolio" },
    { name: t.about[language], href: "/about" },
    { name: t.contact[language], href: "/contact" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 shadow-lg shadow-primary/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="relative">
              <span className="font-serif text-3xl font-bold tracking-tight text-gradient-gold glow-gold">Trésor</span>
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-semibold leading-6 text-foreground transition-all duration-300 hover:text-primary group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="flex flex-1 items-center justify-end gap-x-4">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="hidden lg:flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm font-semibold">{language === "ar" ? "EN" : "AR"}</span>
          </Button>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="hidden lg:flex bg-primary text-primary-foreground hover:bg-primary/90 glow-gold transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <Link href="/contact">{t.startProject[language]}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary/20 bg-background/95 backdrop-blur-md">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-4 py-3 text-base font-semibold leading-7 text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-full mt-2 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary"
            >
              <Globe className="h-4 w-4" />
              <span>{language === "ar" ? "English" : "العربية"}</span>
            </Button>
            <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-gold">
              <Link href="/contact">{t.startProject[language]}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
