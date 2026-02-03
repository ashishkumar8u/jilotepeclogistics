"use client";

import { useUITranslations } from "@/hooks/use-warehouse-config";

export function SpecificationsSection() {
  const t = useUITranslations();
  return (
    <section className="">
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <div className="">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl text-center text-[#173c65] font-bold tracking-tight mb-12 text-balance">
            {t("spec.title")}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="flex  md:flex-row flex-col flex-wrap   md:justify-between w-full  gap-4 text-black">
          {/* Park Overview */}
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-20 xl:gap-0">
            <div className="space-y-8  ">
              <div className="text-black">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  {t("spec.parkOverview")}
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg md:text-lg font-medium mb-1">
                      {t("spec.totalParkLand")}
                    </p>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">
                      57 ha
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t("spec.phase1")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 ">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  {t("spec.existingBuildings")}
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-start gap-30 mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">
                        {t("spec.buildingA")}
                      </p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-primary text-[#173c65] rounded-full">
                        {t("spec.leased")}
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">
                      40,000 m²
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-4">
                    <div className="flex items-start gap-10 mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">
                        {t("spec.buildingB")}
                      </p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase border-2 border-accent text-[#173c65] rounded-full bg-transparent">
                        {t("spec.immediateAvailability")}
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold mb-2">
                      32,000 m²
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t("spec.divisibleSpace")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-4 font-medium">
                  {t("spec.landAvailable")}
                </h3>
                <div>
                  <p className="text-lg font-medium mb-1">
                    {t("spec.forSaleOrBTS")}
                  </p>
                  <p className="text-3xl text-[#173c65] font-bold">
                    400,000 m²
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Class-A Features */}
          <div className="space-y-8 ">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                {t("spec.classAFeatures")}
              </h3>
              <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.concreteWalls")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.kr18Roof")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.naturalLighting")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.clearHeight")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.concreteFloor")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.dockDoors")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.driveInRamps")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.truckCourts")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.ledLighting")}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>{t("spec.hydrantsSprinkler")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
