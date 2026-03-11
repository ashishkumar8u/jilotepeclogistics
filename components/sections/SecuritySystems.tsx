"use client"

import { Access, Doublesec, Fancing, IndustrialFacility, IndustrialFacilitytwo } from "@/assets/images"
import { Shield, Eye, Users, Fence } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/translations"

const CARD_KEYS = [
  { key: "card1Title", descKey: "card1Desc", image: Fancing, icon: Fence },
  { key: "card2Title", descKey: "card2Desc", image: Access, icon: Shield },
  { key: "card3Title", descKey: "card3Desc", image: IndustrialFacility, icon: Eye },
  { key: "card4Title", descKey: "card4Desc", image: IndustrialFacilitytwo, icon: Users },
] as const

export default function SecuritySystems() {
  const { language } = useLanguage()
  const t = translations[language].security as Record<string, string>

  return (
    <section className="bg-zinc-100 py-16 w-full">
      <div className="xl:max-w-7xl w-[95%] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl text-[#173c65] font-bold tracking-tight text-balance ">
            {t.title}
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.intro}
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-950 to-zinc-900 border-2 border-[#173c65]/20 rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                </div>
                <h3 className="text-xl   lg:text-2xl xl:text-3xl   font-bold text-white">{t.doublePerimeter}</h3>
              </div>
              <p className="text-zinc-300 text-base leading-relaxed">
                {t.doublePerimeterDesc}
              </p>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0 relative">
              <Image
                src={Doublesec}
                alt="Double perimeter security system"
                width={500}
                height={400}
                className="rounded-xl shadow-2xl w-full lg:w-[500px] h-auto"
                sizes="(max-width: 1024px) 100vw, 500px"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {CARD_KEYS.map(({ key, descKey, image, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 border-2 border-[#173c65]/20 rounded-xl overflow-hidden hover:border-[#173c65]/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-800 relative">
                <Image
                  src={image}
                  alt={t[key]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-blue-950">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      <Icon className="w-6 h-6 text-black " />
                    </div>
                  </div>
                  <div className="space-y-2 ">
                    <h4 className="font-semibold text-base leading-snug text-white">{t[key]}</h4>
                    <p className="text-sm text-white leading-relaxed">{t[descKey]}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-950 to-zinc-900 border-2 border-[#173c65]/20 rounded-xl p-8 md:p-12 text-center">
          <p className="text-xl   lg:text-2xl xl:text-3xl font-semibold text-balance max-w-4xl mx-auto text-white">
            {t.bottomCta}
          </p>
        </div>
      </div>
    </section>
  )
}
