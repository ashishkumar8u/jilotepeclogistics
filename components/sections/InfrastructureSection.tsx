"use client"

import { Electrical, Services, Water } from "@/assets/images"
import { Zap, Droplets, Plus, Dot } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/translations"

const INFRA_ITEMS = [
  { key: "electrical", image: Electrical, icon: Zap, pointKeys: ["electrical1", "electrical2", "electrical3", "electrical4"] },
  { key: "water", image: Water, icon: Droplets, pointKeys: ["water1", "water2", "water3"] },
  { key: "additional", image: Services, icon: Plus, pointKeys: ["additional1", "additional2", "additional3", "additional4"] },
] as const

export default function InfrastructureSection() {
  const { language } = useLanguage()
  const t = translations[language].infrastructure as Record<string, string>

  return (
    <section className="py-0">
      <div className="mx-auto w-[95%] xl:max-w-7xl">
        <div className="mb-16 text-center">
          <h1 className="text-balance font-bold text-xl   lg:text-2xl xl:text-3xl leading-tight mb-4 text-[#173c65]">
            {t.title}
          </h1>
          <p className="text-gray-600 text-base  leading-relaxed">
            {t.desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {INFRA_ITEMS.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="relative overflow-hidden group bg-white rounded-xl"
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item.image}
                    alt={t[item.key]}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
                  <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-3 z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="px-2 pb-6">
                  <h2 className="md:text-xl text-lg lg:text-2xl font-bold mb-4 text-[#173c65]">
                    {t[item.key]}
                  </h2>
                  <ul className="space-y-3">
                    {item.pointKeys.map((pk) => (
                      <li key={pk} className="flex items-start gap-3">
                        <Dot className=" w-8 h-8 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600 md:text-base text-sm leading-relaxed">
                          {t[pk]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
