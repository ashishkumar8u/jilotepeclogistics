"use client";

import { Truck, Airplay as Highway, Globe2, TrendingUp } from "lucide-react";
import { useUITranslations } from "@/hooks/use-warehouse-config";

const HIGHWAY_ROUTE_KEYS = [
  { titleKey: "strategic.route1Title", descKey: "strategic.route1Desc" },
  { titleKey: "strategic.route2Title", descKey: "strategic.route2Desc" },
  { titleKey: "strategic.route3Title", descKey: "strategic.route3Desc" },
  { titleKey: "strategic.route4Title", descKey: "strategic.route4Desc" },
] as const;

const ADVANTAGE_KEYS = [
  { titleKey: "strategic.adv1Title", descKey: "strategic.adv1Desc" },
  { titleKey: "strategic.adv2Title", descKey: "strategic.adv2Desc" },
  { titleKey: "strategic.adv3Title", descKey: "strategic.adv3Desc" },
  { titleKey: "strategic.adv4Title", descKey: "strategic.adv4Desc" },
  { titleKey: "strategic.adv5Title", descKey: "strategic.adv5Desc" },
  { titleKey: "strategic.adv6Title", descKey: "strategic.adv6Desc" },
] as const;

export function StrategicLocationSection() {
  const t = useUITranslations();
  return (
    <section className="relative max-w-[1520px] bg-[#FCFBFC] py-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-grid-slate-800/20 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" mx-auto max-w-7xl lg:px-2 xl:px-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border-2 border-[#173c65]/20 rounded-full px-4 py-2 ">
            <div className="w-2 h-2 bg-blue-100 rounded-full animate-pulse"></div>
            <span className="text-[#173c65] text-xl   lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wider">
              {t("strategic.badge")}
            </span>
          </div>
          <h2 className=" xl:text-2xl lg:text-xl text-lg py-6 text-[#173c65] font-bold  ">
            {t("strategic.title")}
          </h2>
          <p className="text-gray-600  text-base max-w-2xl mx-auto text-pretty">
            {t("strategic.subtitle")}
          </p>
        </div>

        {/* Highway Access Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Truck className="w-6 h-6 text-blue-950" />
            <h3 className="xl:text-2xl lg:text-xl text-lg font-bold text-[#173c65]">
              {t("strategic.directHighwayAccess")}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHWAY_ROUTE_KEYS.map((route) => (
              <div
                key={route.titleKey}
                className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Highway className="w-6 h-6 text-[#173c65] group-hover:text-white transition-colors" />
                  </div>

                  <h4 className="text-[#173c65] group-hover:text-white transition-colors font-bold text-lg mb-2">
                    {t(route.titleKey)}
                  </h4>

                  <p className="text-gray-600 group-hover:text-white transition-colors text-sm leading-relaxed">
                    {t(route.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats Banner */}
        <div className="relative bg-[#1F2937] rounded-3xl p-8 md:p-12 mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-xl   lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                23M+
              </div>
              <div className="text-orange-100 font-medium">
                {t("strategic.stat1")}
              </div>
            </div>
            <div className="text-center border-x border-gray-400">
              <div className="text-xl   lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                5
              </div>
              <div className="text-orange-100 font-medium">
                {t("strategic.stat2")}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl   lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-orange-100 font-medium">
                {t("strategic.stat3")}
              </div>
            </div>
          </div>
        </div>

        {/* Operational Advantages */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-6 h-6 text-[#173c65]" />
            <h3 className="md:text-xl text-lg font-bold text-[#173c65]">
              {t("strategic.keyAdvantages")}
            </h3>
          </div>

          {/* Advantage Card 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADVANTAGE_KEYS.map((item, index) => (
              <div
                key={index}
                className="relative bg-white backdrop-blur-sm rounded-xl p-6 border border-slate-700/50  transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0  transition-colors">
                    <TrendingUp className="w-5 h-5 text-[#173c65] group-hover:text-[#173c65] transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-[#173c65] group-hover:text-[#173c65] font-semibold mb-2 transition-colors">
                      {t(item.titleKey)}
                    </h4>

                    <p className="text-gray-600  text-sm leading-relaxed transition-colors">
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
