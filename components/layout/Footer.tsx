'use client'

import { Logo } from "@/components/common"
import { ExternalLink } from "lucide-react"
import { trackButtonClick, reportCallConversion } from "@/lib/utils"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/translations"

const NAVBAR_OFFSET = 80
const FOOTER_NAV_IDS = ["home", "connectivity", "specifications", "infrastructure", "opportunities", "applications"] as const

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer as Record<string, string>
  const nav = translations[language].nav as Record<string, string>
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)

    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - NAVBAR_OFFSET

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }
  return (
    <footer className="bg-[#003A5D] flex justify-center  text-white max-w-[1520px] mx-auto ">
      <div className="lg:max-w-7xl  w-[95%] mx-auto py-12 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 mb-12">
          {/* Brand Section */}
          <div>
          <Logo variant="light" className="h-6 mb-2" />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {t.tagline}
            </p>
            <Link
              href="https://www.nmrk.com"
              target="_blank"
              className="text-gray-300 text-sm hover:text-white inline-flex items-center gap-1"
            >
              www.nmrk.com
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>

          {/* Contacts */}
          <div className="">
            <p className="text-sm text-gray-300 mb-4 italic">
              {t.forMoreInfo}
            </p>

            <div className="flex flex-col  gap-6 text-sm text-gray-300">
              {/* Jorge Fabris */}
              <div>
                <p className="font-semibold text-white">Jorge Fabris</p>
                <p>Executive Managing Director | Industrial</p>
                <p className="text-blue-300">jorge.fabris@nmrk.com</p>
                <a
                  href="tel:+52-5539891639"
                  onClick={(e) => {
                    e.preventDefault();
                    trackButtonClick("footer-call-jorge");
                    reportCallConversion("tel:+52-5539891639");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  +52-5539891639
                </a>
              </div>

              {/* Guillermo Garrido */}
              <div>
                <p className="font-semibold text-white">Guillermo Garrido</p>
                <p>Executive Managing Director | Industrial</p>
                <p className="text-blue-300">guillermo.garrido@nmrk.com</p>
                <a
                  href="tel:+52-5518497483"
                  onClick={(e) => {
                    e.preventDefault();
                    trackButtonClick("footer-call-guillermo");
                    reportCallConversion("tel:+52-5518497483");
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  +52-5518497483
                </a>
              </div>

            </div>
          </div>

          {/* Quick Links */}
          <div className=" ">
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_NAV_IDS.map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(e, id)}
                    className="text-gray-300 hover:text-white cursor-pointer"
                  >
                    {nav[id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/30 pt-8 mb-8">
        <p className="text-sm font-semibold text-center md:text-left">{t.disclaimer}</p>
          <p className="text-gray-300 text-xs leading-relaxed">
            {t.disclaimerText}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/30">
        
          <p className="text-gray-400 text-sm ">
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
