"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common";
import { trackButtonClick } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "connectivity", label: "Connectivity" },
  { id: "specifications", label: "Specifications" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "opportunities", label: "Opportunities" },
  { id: "applications", label: "Applications" },
] as const;

const SECTIONS = [...NAV_ITEMS.map((item) => item.id), "contact"] as const;
const NAVBAR_OFFSET = 80;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");

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
        <div className="flex items-center justify-between h-16 relative lg:ml-14">
          {/* Mobile Left Side - Hamburger */}
          <div className="lg:hidden flex-2">
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

          {/* Logo - Centered on mobile, left on desktop */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="absolute left-[8rem] md:left-1/2 transform -translate-x-1/2 max-[350px]:-ml-8 max-[350px]:mt-1 lg:relative lg:left-0 lg:transform-none lg:ml-12 flex items-center gap-3"
          >
            <Logo className="h-auto min-h-6 leading-tight lg:h-6 lg:leading-normal" />
          </a>

          {/* Mobile Right Side - Language Switcher & Call Now */}
          <div className="lg:hidden flex items-center gap-2 flex-1 justify-end">
            <button
              className="inline-flex items-center justify-center text-sm font-semibold text-[#173C65] bg-white border border-[#173C65] px-3 py-1.5 rounded-md shadow-sm hover:bg-[#EFF6FF] transition-colors"
              aria-label="Toggle language"
              onClick={() => setLanguage((prev) => (prev === "en" ? "es" : "en"))}
            >
              {language === "en" ? "ES" : "EN"}
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => trackButtonClick("navbar-call-now-mobile")}
              className="bg-[#173c65] text-white text-nowrap rounded-full px-4 py-1.5 text-sm transition cursor-pointer hover:bg-blue-800"
            >
              Call Now
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-2 xl:gap-8 lg:absolute lg:left-[45%] xl:left-1/2 lg:transform lg:-translate-x-1/2">
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

          {/* Desktop Contact */}
          <div className="hidden lg:flex items-center gap-4">
          <button
             
              className="inline-flex items-center justify-center text-sm font-semibold text-[#173C65] bg-white border border-[#173C65] px-4 py-2 rounded-md shadow-sm hover:bg-[#EFF6FF] transition-colors"
              aria-label="Toggle language"
              onClick={() => setLanguage((prev) => (prev === "en" ? "es" : "en"))}
            >
              {language === "en" ? "ES" : "EN"}
            </button>
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={() => trackButtonClick("navbar-call-now-desktop")}
              className="bg-[#173c65] text-white text-nowrap rounded-full px-6 py-2   transition cursor-pointer hover:bg-blue-800"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
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
