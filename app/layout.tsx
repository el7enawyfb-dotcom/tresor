import type React from "react"
import type { Metadata } from "next"
import { Tajawal, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const tajawal = Tajawal({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin", "arabic"],
  variable: "--font-tajawal",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Trésor Agency | وكالة تريزور للتسويق والإبداع",
  description:
    "Luxury marketing and creative agency delivering premium branding, visual content, advertising, and web solutions remotely.",
  keywords: [
    "marketing agency",
    "creative agency",
    "branding",
    "web design",
    "video production",
    "وكالة تسويق",
    "براندينج",
  ],
  authors: [{ name: "Tresor" }],
  creator: "Tresor",
  generator: "Next.js",
  metadataBase: new URL("https://tresor-agency.com"),
  openGraph: {
    title: "Trésor Agency | وكالة تريزور للتسويق والإبداع",
    description: "Luxury marketing and creative agency",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_EG",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" className="dark" dir="rtl" suppressHydrationWarning>
      <body className={`${tajawal.variable} ${montserrat.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
