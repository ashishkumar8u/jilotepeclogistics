"use client"

import { Building2, Package, Truck, Factory, Zap, Building } from "lucide-react"
import { useUITranslations } from "@/hooks/use-warehouse-config"

interface IdealForProps {
  className?: string
}

const operations = [
  { icon: Building2, titleKey: "idealFor.op1Title", descKey: "idealFor.op1Desc" },
  { icon: Package, titleKey: "idealFor.op2Title", descKey: "idealFor.op2Desc" },
  { icon: Truck, titleKey: "idealFor.op3Title", descKey: "idealFor.op3Desc" },
  { icon: Factory, titleKey: "idealFor.op4Title", descKey: "idealFor.op4Desc" },
  { icon: Zap, titleKey: "idealFor.op5Title", descKey: "idealFor.op5Desc" },
  { icon: Building, titleKey: "idealFor.op6Title", descKey: "idealFor.op6Desc" },
]

export function IdealFor({ className = "" }: IdealForProps) {
  const t = useUITranslations()
  return (
    <section className={`w-full py-20 bg-gray-50 ${className}`}>
      <div className="lg:max-w-7xl w-[95%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="   text-xl   lg:text-2xl xl:text-3xl font-bold text-[#173c65]   mb-4">{t("idealFor.title")}</h2>
      
        </div>

      

        {/* Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operations.map((operation, index) => {
            const Icon = operation.icon
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
                  <h3 className="text-xl font-bold text-[#173c65] mb-3 text-balance">{t(operation.titleKey)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(operation.descKey)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
