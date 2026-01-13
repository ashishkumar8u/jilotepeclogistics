"use client";

import { useTranslations } from "@/hooks/use-translations";

export function SpecificationsSection() {
  const t = useTranslations();
  
  return (
      <section className="">
        <div className="max-w-7xl  mx-auto">
          {/* Header */}
          <div className="">
            <h2 className="text-xl   lg:text-2xl xl:text-3xl text-center text-[#173c65] font-bold tracking-tight mb-12 text-balance">
              {t.specifications.title}
            </h2>
          </div>
  
          {/* Main Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[95%] lg:max-w-7xl xl:w-full mx-auto gap-12 lg:gap-16 text-black">
            {/* Park Overview */}
            <div className="space-y-8">
              <div className="text-black">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">{t.specifications.parkOverview}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg md:text-lg font-medium mb-1">{t.specifications.totalParkLand}</p>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">57 ha</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.specifications.phase1}</p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Existing Buildings */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  {t.specifications.existingBuildings}
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">{t.specifications.buildingA}</p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-primary text-[#173c65] rounded-full">
                        {t.specifications.leased}
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">40,000 m²</p>
                  </div>

                  <div className="border-l-2 border-accent pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">{t.specifications.buildingB}</p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase border-2 border-accent text-[#173c65] rounded-full bg-transparent">
                        {t.specifications.immediateAvailability}
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold mb-2">32,000 m²</p>
                    <p className="text-sm text-muted-foreground">{t.specifications.divisibleSpace}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-4 font-medium">
                  {t.specifications.landAvailable}
                </h3>
                <div>
                  <p className="text-lg font-medium mb-1">{t.specifications.forSaleOrBTS}</p>
                  <p className="text-3xl text-[#173c65] font-bold">400,000 m²</p>
                </div>
              </div>
            </div>
  
            {/* Class-A Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  {t.specifications.classAFeatures}
                </h3>
                <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                  {t.specifications.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  