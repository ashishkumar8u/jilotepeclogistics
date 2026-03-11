"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const FEATURE_KEYS = [
  "concreteWalls",
  "kr18Roof",
  "skylights",
  "clearHeight",
  "concreteFloor",
  "dockDoors",
  "driveInRamps",
  "truckCourts",
  "ledLighting",
  "hydrants",
] as const;

export function SpecificationsSection() {
  const { language } = useLanguage();
  const t = translations[language].specifications as Record<string, string>;

  return (
    <section className="">
      <div className="max-w-7xl  mx-auto">
        <div className="">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl text-center text-[#173c65] font-bold tracking-tight mb-12 text-balance">
            {t.title}
          </h2>
        </div>

        <div className="flex  md:flex-row flex-col flex-wrap   md:justify-between w-full  gap-4 text-black">
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-20 xl:gap-0">
            <div className="space-y-8  ">
              <div className="text-black">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  {t.parkOverview}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg md:text-lg font-medium mb-1">
                      {t.totalParkLand}
                    </p>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">57 ha</p>
                    <p className="text-sm text-muted-foreground mt-1">{t.phase1}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 ">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  {t.existingBuildings}
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-start gap-30 mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">{t.buildingA}</p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-primary text-[#173c65] rounded-full">
                        {t.availableJune}
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">40,000 m²</p>
                  </div>
                  <div className="border-l-2 border-accent pl-4">
                    <div className="flex items-start gap-23 mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">{t.buildingB}</p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase border-2 border-accent text-[#173c65] rounded-full bg-transparent">
                        {t.immediateAvailability}
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold mb-2">28,000 m²</p>
                    <p className="text-sm text-muted-foreground">{t.divisibleSpace}</p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-4 font-medium">
                  {t.landAvailable}
                </h3>
                <div>
                  <p className="text-lg font-medium mb-1">{t.forSaleBts}</p>
                  <p className="text-3xl text-[#173c65] font-bold">400,000 m²</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 ">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                {t.classAFeatures}
              </h3>
              <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                {FEATURE_KEYS.map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="text-muted-foreground mt-1">•</span>
                    <span>{t[key]}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
