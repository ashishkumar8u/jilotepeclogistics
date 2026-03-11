"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { Land } from "@/assets/images"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/translations"

const FEAT_KEYS = [
  { title: "feat1Title", desc: "feat1Desc" },
  { title: "feat2Title", desc: "feat2Desc" },
] as const

export function BuildToSuitLand() {
  const { language } = useLanguage()
  const t = translations[language].buildToSuit as Record<string, string>

  return (
    <section className="w-full bg-gray-50   ">
      <div className=" mx-auto w-[95%] lg:max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4  font-bold tracking-tight  text-[#173c65] text-xl   lg:text-2xl xl:text-3xl text-balance">
            {t.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600  text-pretty">
            {t.intro}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative overflow-hidden rounded-lg border border-border bg-card">
            <div className="aspect-[4/3] relative">
              <Image
                src={Land}
                alt="Aerial view of CLJ industrial land"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 " />
              <div className="absolute bottom-0 left-0 right-0 p-6 ">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-900"></span>
                  </span>
                  {t.availableNow}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {FEAT_KEYS.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black transition-transform group-hover:scale-110">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 md:text-xl lg:text-2xl text-lg font-bold text-[#173c65]">{t[item.title]}</h3>
                    <p className="text-gray-600 md:text-base text-sm">{t[item.desc]}</p>
                  </div>
                </div>
              ))}

              <div className="mt-8 rounded-lg border-2  bg-primary/5 p-6">
                <h4 className="mb-3 text-lg font-semibold text-[#173c65]">{t.projectCapabilities}</h4>
                <p className="text-gray-600 md:text-base text-sm text-pretty">
                  {t.projectCapabilitiesDesc}
                </p>
              </div>

             
            </div>  
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16">
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">53+</div>
            <div className="text-sm text-muted-foreground">Total Hectares Available</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">10,000+</div>
            <div className="text-sm text-muted-foreground">Minimum Project Size (m²)</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Infrastructure Ready</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
