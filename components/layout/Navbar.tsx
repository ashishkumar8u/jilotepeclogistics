"use client";

import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { logo } from "@/assets/images";
import { trackButtonClick } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";
import { useTranslations } from "@/hooks/use-translations";

const NAV_ITEMS_IDS = [
  { id: "home", key: "home" },
  { id: "connectivity", key: "connectivity" },
  { id: "specifications", key: "specifications" },
  { id: "infrastructure", key: "infrastructure" },
  { id: "opportunities", key: "opportunities" },
  { id: "applications", key: "applications" },
] as const;

const SECTIONS = [...NAV_ITEMS_IDS.map((item) => item.id), "contact"] as const;
const NAVBAR_OFFSET = 80;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();

  const NAV_ITEMS = useMemo(() => {
    return NAV_ITEMS_IDS.map((item) => ({
      id: item.id,
      label: (t.nav as any)[item.key] || item.key,
    }));
  }, [t]);

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
    sectionId: string
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
        <div className="flex items-center justify-between h-16 relative lg:ml-14 px-4 lg:px-0">
          {/* Mobile Left Side - Hamburger - Show up to xl (1279px) */}
          <div className="xl:hidden flex-shrink-0">
            <button
              className="text-black "
              onClick={() => {
                trackButtonClick('navbar-hamburger-menu');
                setIsOpen(!isOpen);
              }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo - Wrapped in div for mobile/tablet, direct link for desktop */}
          <div className="xl:hidden flex-1 flex justify-center items-center min-w-0">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, "home")}
              className="flex items-center gap-3 flex-shrink-0"
            >
              <Image
                src={logo}
                alt="NEWMARK Logo"
                width={180}
                height={45}
                className="h-6 w-auto flex-shrink-0"
                priority
              />
            </a>
          </div>

          {/* Desktop Logo - left on desktop (xl and above) */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="hidden xl:flex items-center gap-3 flex-shrink-0"
          >
            <Image
              src={logo}
              alt="NEWMARK Logo"
              width={180}
              height={45}
              className="h-6 w-auto flex-shrink-0"
              priority
            />
          </a>

          {/* Mobile/Tablet Right Side - Language Switcher & Call Now - Show up to xl (1279px) */}
          <div className="xl:hidden flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <button
              className="inline-flex items-center justify-center text-sm font-semibold text-[#173C65] bg-white border border-[#173C65] px-3 py-1.5 rounded-md shadow-sm hover:bg-[#EFF6FF] transition-colors flex-shrink-0 whitespace-nowrap"
              aria-label="Toggle language"
              onClick={()=>setLanguage(language === 'en' ? 'es' : 'en')}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => trackButtonClick('navbar-call-now-mobile')}
              className="bg-[#173c65] text-white text-nowrap rounded-full px-4 py-1.5 text-sm transition cursor-pointer hover:bg-blue-800 flex-shrink-0 whitespace-nowrap"
            >
              {t.header.callNow}
            </a>
          </div>

          {/* Desktop Navigation - Show at xl (1280px+) to avoid overlap at 1024px-1100px */}
          <div className="hidden xl:flex items-center gap-8 xl:absolute xl:left-1/2 xl:transform xl:-translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={getNavLinkClassName(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact - Show at xl (1280px+) */}
          <div className="hidden xl:flex items-center gap-4">
          <button
             
              className="inline-flex items-center justify-center text-sm font-semibold text-[#173C65] bg-white border border-[#173C65] px-4 py-2 rounded-md shadow-sm hover:bg-[#EFF6FF] transition-colors"
              aria-label="Toggle language"
              onClick={()=>setLanguage(language === 'en' ? 'es' : 'en')}
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => trackButtonClick('navbar-call-now-desktop')}
              className="bg-[#173c65] text-white text-nowrap rounded-full px-6 py-2   transition cursor-pointer hover:bg-blue-800"
            >
              {t.header.callNow}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Show up to xl (1279px) */}
      {isOpen && (
        <div className="xl:hidden border-t bg-white">
          <div className="px-4 ">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={getNavLinkClassName(item.id)}
              >
                {item.label}
              </a>
            ))}

           
          </div>
        </div>
      )}
    </nav>
  );
}
