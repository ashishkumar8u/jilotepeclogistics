"use client"

import { Electrical, Services, Water } from "@/assets/images"
import { Zap, Droplets, Plus, Dot } from "lucide-react"
import Image from "next/image"
import { useUITranslations } from "@/hooks/use-warehouse-config"

export default function InfrastructureSection() {
  const t = useUITranslations()
  const items = [
    {
      titleKey: "infrastructure.electricalTitle",
      image: Electrical,
      icon: Zap,
      pointKeys: ["infrastructure.electrical1", "infrastructure.electrical2", "infrastructure.electrical3", "infrastructure.electrical4"],
    },
    {
      titleKey: "infrastructure.waterTitle",
      image: Water,
      icon: Droplets,
      pointKeys: ["infrastructure.water1", "infrastructure.water2", "infrastructure.water3"],
    },
    {
      titleKey: "infrastructure.servicesTitle",
      image: Services,
      icon: Plus,
      pointKeys: ["infrastructure.services1", "infrastructure.services2", "infrastructure.services3", "infrastructure.services4"],
    },
  ]

  return (
    <section className="py-0">
      <div className="mx-auto w-[95%] xl:max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-balance font-bold text-xl   lg:text-2xl xl:text-3xl leading-tight mb-4 text-[#173c65]">
            {t("infrastructure.title")}
          </h1>
          <p className="text-gray-600 text-base  leading-relaxed">
            {t("infrastructure.description")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={index}
                className="relative overflow-hidden group bg-white rounded-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={item.image}
                    alt={t(item.titleKey)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />

                  {/* Top Icon */}
                  <div className="absolute top-4 right-4 bg-blue-600 rounded-full p-3 z-10">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 pb-6">
                  <h2 className="md:text-xl text-lg lg:text-2xl font-bold mb-4 text-[#173c65]">
                    {t(item.titleKey)}
                  </h2>

                  <ul className="space-y-3">
                    {item.pointKeys.map((key, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Dot className=" w-8 h-8 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600 md:text-base text-sm leading-relaxed">
                          {t(key)}
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
