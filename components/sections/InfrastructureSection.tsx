"use client";

import { Electrical, Services, Water } from "@/assets/images"
import { Zap, Droplets, Plus, Dot } from "lucide-react"
import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"

export default function InfrastructureSection() {
  const t = useTranslations();
  
  // Use optional chaining with fallback values
  const infrastructureData = {
    header: {
      title: t.infrastructure?.header?.title || 'High-Capacity Water & Power Infrastructure',
      description: t.infrastructure?.header?.description || 'Enterprise-grade utility systems designed for high-demand industrial operations',
    },
    items: [
      {
        title: t.infrastructure?.items?.[0]?.title || 'Electrical Capacity',
        image: Electrical,
        icon: Zap,
        points: t.infrastructure?.items?.[0]?.points || [
          'Redundant 7 MVA substation',
          '23 KV medium-voltage line',
          '140 KVA per hectare available',
          'LED street lighting',
        ],
      },
      {
        title: t.infrastructure?.items?.[1]?.title || 'Water',
        image: Water,
        icon: Droplets,
        points: t.infrastructure?.items?.[1]?.points || [
          'Two water wells',
          'Aquifer with availability for high-demand users',
          'MBBR wastewater treatment plant (90 m³/day)',
        ],
      },
      {
        title: t.infrastructure?.items?.[2]?.title || 'Additional Services',
        image: Services,
        icon: Plus,
        points: t.infrastructure?.items?.[2]?.points || [
          'Conduits for voice and data',
          'Natural gas available',
          'Park administration building and service areas',
          'Planned on-site fuel station',
        ],
      },
    ],
  }
  return (
    <section className="py-0">
      <div className="mx-auto w-[95%] xl:max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-balance font-bold text-xl   lg:text-2xl xl:text-3xl leading-tight mb-4 text-[#173c65]">
            {infrastructureData.header.title}
          </h1>
          <p className="text-gray-600 text-base  leading-relaxed">
            {infrastructureData.header.description}
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {infrastructureData.items.map((item, index) => {
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
                    alt={item.title}
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
                    {item.title}
                  </h2>

                  <ul className="space-y-3">
                    {item.points.map((point: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Dot className=" w-8 h-8 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600 md:text-base text-sm leading-relaxed">
                          {point}
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
