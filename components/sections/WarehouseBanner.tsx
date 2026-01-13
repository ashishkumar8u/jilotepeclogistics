"use client"

import { MapPin, Building2, Truck, Shield, Zap, Factory } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trackButtonClick } from "@/lib/utils";
import { useTranslations } from "@/hooks/use-translations";

export function WarehouseBanner() {
  const t = useTranslations();
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
      <Image
        src="/bannerbg.webp"
        alt="Industrial warehouse at Jilotepec Logistics Center"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover opacity-20"
        quality={85}
      />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl w-[95%]  py-16  sm:py-24 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Main Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-gray-100 px-4 py-2 border-2 border-[#173c65]/20">
              <Factory className="h-4 w-4 text-black" />
              <span className="text-sm font-semibold  uppercase tracking-wider text-[#173c65]">
                {t.banner.badge}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-balance text-xl   lg:text-2xl xl:text-3xl  font-bold leading-tight text-[#173c65] ">
                {t.banner.title}
              </h1>
              <div className="flex items-center gap-2 text-lg xl:text-2xl text-gray-700 sm:text-xl">
                {/* <MapPin className="h-8 w-8 text-[#173c65]" /> */}
                <span className="font-medium text-[#173c65]">{t.banner.subtitle}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-pretty text-base leading-relaxed text-gray-950">
            {t.banner.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link 
                href='#contact' 
                onClick={() => trackButtonClick('banner-schedule-tour')}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#173c65] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-800"
              >
                <Building2 className="h-5 w-5" />
                {t.banner.scheduleTour}
              </Link>
              
            </div>
          </div>

          {/* Right Column - Features Grid */}
          <div className="flex items-center">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Feature Card 1 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <h2 className="mb-2 text-lg font-bold text-[#173c65]">{t.banner.premierLocation}</h2>
                <p className="text-sm leading-relaxed text-gray-900">
                  {t.banner.premierLocationDesc}
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3">
                  <Truck className="h-6 w-6 text-[#173c65]" />
                </div>
                <h2 className="mb-2 text-lg font-bold text-[#173c65]">{t.banner.distributionHub}</h2>
                <p className="text-sm leading-relaxed text-gray-900">
                  {t.banner.distributionHubDesc}
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3">
                  <Zap className="h-6 w-6 text-[#173c65]" />
                </div>
                <h2 className="mb-2 text-lg font-bold text-[#173c65]">{t.banner.premiumInfrastructure}</h2>
                <p className="text-sm leading-relaxed text-gray-900">
                  {t.banner.premiumInfrastructureDesc}
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg">
                <div className="mb-4 inline-flex rounded-lg bg-gray-100 p-3">
                  <Shield className="h-6 w-6 text-[#173c65]" />
                </div>
                <h2 className="mb-2 text-lg font-bold text-[#173c65]">{t.banner.advancedSecurity}</h2>
                <p className="text-sm leading-relaxed text-gray-900">
                  {t.banner.advancedSecurityDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Bar */}
        <div className="mt-10 border-t border-gray-200 pt-8">
          {/* Mobile: Grid layout with stable columns */}
          <div className="grid grid-cols-[48px_1fr] gap-x-3 gap-y-6 sm:hidden">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 flex-shrink-0">
              <Building2 className="h-6 w-6 text-[#173c65]" />
            </div>
            <div className="flex flex-col gap-0 min-w-0">
              <p className="text-sm font-semibold text-gray-900 min-w-[140px]">{t.banner.availableOptions}</p>
              <p className="text-base font-semibold text-[#173c65] break-words">{t.banner.availableOptionsValue}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 flex-shrink-0">
              <Factory className="h-6 w-6 text-[#173c65]" />
            </div>
            <div className="flex flex-col gap-0 min-w-0">
              <p className="text-sm font-semibold text-gray-900 min-w-[140px]">{t.banner.facilityType}</p>
              <p className="text-base font-semibold text-[#173c65] break-words">{t.banner.facilityTypeValue}</p>
            </div>
          </div>
          {/* Desktop: Original flex layout */}
          <div className="hidden sm:flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Building2 className="h-6 w-6 text-[#173c65]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.banner.availableOptions}</p>
                <p className="text-base font-semibold text-[#173c65]">{t.banner.availableOptionsValue}</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                <Factory className="h-6 w-6 text-[#173c65]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.banner.facilityType}</p>
                <p className="text-base font-semibold text-[#173c65]">{t.banner.facilityTypeValue}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}