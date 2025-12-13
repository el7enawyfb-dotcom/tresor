"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBanner, setShowBanner] = useState(true)
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
    <header className="fixed top-0 z-50 w-full">
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/90 to-primary"
          >
            {/* Animated Background Effect */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </div>

            <div className="relative flex items-center justify-center gap-3 px-4 py-2.5 text-center">
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-4 w-4 text-black" />
              </motion.div>

              <p className="text-xs font-bold tracking-wide text-black sm:text-sm">
                🎉 DISCOUNT 50% FOR NEW CUSTOMERS 🎉
              </p>

              <motion.div
                animate={{
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="h-4 w-4 text-black" />
              </motion.div>

              <button
                onClick={() => setShowBanner(false)}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-black/70 transition-colors hover:bg-black/10 hover:text-black"
                aria-label="Close announcement"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="border-b border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/90 shadow-lg shadow-primary/5">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="relative">
                <span className="font-serif text-3xl font-bold tracking-tight text-gradient-gold glow-gold">
                  Trésor
                </span>
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
        </div>

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
      </nav>
    </header>
  )
}
