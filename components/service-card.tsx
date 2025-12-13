"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
  buttonText?: string
}

export function ServiceCard({ title, description, icon: Icon, href, buttonText }: ServiceCardProps) {
  const { language } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <Card className="group relative h-full overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20">
        <div className="absolute right-0 top-0 -mr-8 -mt-8 opacity-5 transition-all duration-500 group-hover:scale-110 group-hover:opacity-10">
          <Icon className="h-48 w-48 text-primary" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <CardHeader className="relative">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/50"
          >
            <Icon className="h-7 w-7" />
          </motion.div>
          <CardTitle className="font-sans text-xl font-bold leading-relaxed">{title}</CardTitle>
        </CardHeader>

        <CardContent className="relative">
          <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
        </CardContent>

        <CardFooter className="relative">
          <Button
            variant="outline"
            asChild
            className="w-full border-primary/30 bg-transparent text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            <Link href={href}>{buttonText || (language === "ar" ? "اعرف المزيد" : "Learn More")}</Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
