import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground glow-gold">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold leading-relaxed">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          asChild
          className="w-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent transition-all duration-300"
        >
          <Link href={href}>
            {/* Learn More text - could be translated if needed */}
            Learn More
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
