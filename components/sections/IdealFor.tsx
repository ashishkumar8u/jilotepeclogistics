"use client"

import { Building2, Package, Truck, Factory, Zap, Building } from "lucide-react"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/translations"

interface IdealForProps {
  className?: string
}

const OP_KEYS = [
  { icon: Building2, title: "op1Title", desc: "op1Desc" },
  { icon: Package, title: "op2Title", desc: "op2Desc" },
  { icon: Truck, title: "op3Title", desc: "op3Desc" },
  { icon: Factory, title: "op4Title", desc: "op4Desc" },
  { icon: Zap, title: "op5Title", desc: "op5Desc" },
  { icon: Building, title: "op6Title", desc: "op6Desc" },
] as const

export function IdealFor({ className = "" }: IdealForProps) {
  const { language } = useLanguage()
  const t = translations[language].idealFor as Record<string, string>

  return (
    <section className={`w-full py-20 bg-gray-50 ${className}`}>
      <div className="lg:max-w-7xl w-[95%] mx-auto">
        <div className="text-center mb-16">
          <h2 className="   text-xl   lg:text-2xl xl:text-3xl font-bold text-[#173c65]   mb-4">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OP_KEYS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-muted border-2 border-[#173c65]/20 hover:border-[#173c65]/30 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#173c65] group-hover:text-[#173c65] transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#173c65] mb-3 text-balance">{t[item.title]}</h3>
                  <p className="text-gray-600 leading-relaxed">{t[item.desc]}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
