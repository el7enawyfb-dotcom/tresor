"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(true)
  const { language } = useLanguage()
  const t = translations.whatsapp

  // WhatsApp number (remove + and spaces for the URL)
  const whatsappNumber = "201156990699"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none"
        aria-label={t.tooltip[language]}
      >
        {/* Tooltip on hover */}
        <span className="absolute right-full mr-3 px-4 py-2 bg-card border border-primary/30 text-foreground text-sm font-sans rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          {t.chatWithUs[language]}
        </span>

        {/* Button content */}
        <div className="flex items-center gap-2 px-5 py-4">
          <MessageCircle className="h-6 w-6" />
          <span className="hidden md:inline font-bold font-sans">WhatsApp</span>
        </div>

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
      </a>
    </div>
  )
}
