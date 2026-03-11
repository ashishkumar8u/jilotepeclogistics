"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common";
import { trackButtonClick } from "@/lib/utils";
import Link from "next/link";
import { Modal } from "../common/Modal";
import { CallbackForm } from "../common/CallbackForm";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

const NAV_IDS = [
  "home",
  "connectivity",
  "specifications",
  "infrastructure",
  "opportunities",
  "applications",
] as const;

const SECTIONS = [...NAV_IDS, "contact"] as const;
const NAVBAR_OFFSET = 80;

export function Navbar() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav as Record<string, string>;
  const modalT = translations[language].modal as Record<string, string>;
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + NAVBAR_OFFSET + 1;

          let currentSection = "";

          for (const section of SECTIONS) {
            const element = document.getElementById(section);
            if (!element) continue;

            const offsetTop = element.offsetTop;
            const offsetBottom = offsetTop + element.offsetHeight;

            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              currentSection = section;
              break;
            }
          }

          if (currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set on page load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - NAVBAR_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsOpen(false); // close mobile menu
  };

  const getNavLinkClassName = (sectionId: string) =>
    `block py-2 transition-all duration-300 ${
      activeSection === sectionId
        ? "text-[#173c65] font-semibold border-b-2 border-[#173c65]"
        : "text-black hover:text-blue-700"
    }`;

  const PHONE_NUMBER = "+525518497483";

  return (
    <nav className="sticky top-0 z-50 border-b bg-white max-w-[1520px] mx-auto ">
      <div className="xl:max-w-7xl w-[95%] mx-auto ">
        <div className="flex items-center justify-between h-16 relative">
          {/* Mobile Left Side - Hamburger */}
          <div className="lg:hidden flex-shrink-0">
            <button
              className="text-black "
              onClick={() => {
                trackButtonClick("navbar-hamburger-menu");
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo - On mobile: flex middle (shrinkable). On desktop: left then centered nav */}
          <div className="lg:hidden flex-1 min-w-0 overflow-hidden flex items-center justify-center px-1">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="min-w-0 max-w-full overflow-hidden flex items-center justify-center"
            >
              <span className="block truncate min-w-0 max-w-full text-center">
                <Logo className="h-auto min-h-6 leading-tight" />
              </span>
            </a>
          </div>
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="hidden lg:flex lg:items-center lg:gap-3"
          >
            <Logo className="h-auto min-h-6 leading-tight lg:h-6 lg:leading-normal" />
          </a>

          {/* Mobile Right Side - Language Switcher & Get A Callback */}
          <div className="lg:hidden flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              className="inline-flex items-center justify-center text-sm font-semibold text-[#173C65] bg-white border border-[#173C65] px-3 py-1.5 rounded-md shadow-sm hover:bg-[#EFF6FF] transition-colors"
              aria-label="Toggle language"
              onClick={() =>
                setLanguage(language === "en" ? "es" : "en")
              }
            >
              {language === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => {
                trackButtonClick("navbar-get-callback");
                setIsCallbackOpen(true);
              }}
              className="bg-[#173c65] text-white text-nowrap rounded-full px-3 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm transition cursor-pointer hover:bg-blue-800"
            >
              {t.getCallback}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-2 xl:gap-8 lg:absolute lg:left-[45%] xl:left-1/2 lg:transform lg:-translate-x-1/2">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={getNavLinkClassName(id)}
              >
                {t[id]}
              </a>
            ))}
          </div>

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              className="inline-flex items-center justify-center text-sm font-semibold text-[#173C65] bg-white border border-[#173C65] px-4 py-2 rounded-md shadow-sm hover:bg-[#EFF6FF] transition-colors"
              aria-label="Toggle language"
              onClick={() =>
                setLanguage(language === "en" ? "es" : "en")
              }
            >
              {language === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => {
                trackButtonClick("navbar-get-callback");
                setIsCallbackOpen(true);
              }}
              className="bg-[#173c65] text-white text-nowrap rounded-full px-6 py-2 transition cursor-pointer hover:bg-blue-800"
            >
              {t.getCallback}
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isCallbackOpen}
        onClose={() => setIsCallbackOpen(false)}
        title={modalT.requestCallback}
      >
        <CallbackForm onClose={() => setIsCallbackOpen(false)} />
      </Modal>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="px-4 ">
            {NAV_IDS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={getNavLinkClassName(id)}
              >
                {t[id]}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
