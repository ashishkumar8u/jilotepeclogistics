"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { logo } from "@/assets/images";

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
const SCROLL_OFFSET = 100;

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener("scroll", handleScroll);
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

  const PHONE_NUMBER = "+52.55.5980.2011";

  return (
    <nav className="sticky top-0 z-50 border-b bg-white max-w-[1520px] mx-auto ">
      <div className="xl:max-w-7xl w-[95%] mx-auto ">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "home")}
            className="flex items-center gap-3"
          >
            <Image
              src={logo}
              alt="NEWMARK Logo"
              width={180}
              height={45}
              className="h-6 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
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
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-[#173c65] text-white rounded-full px-6 py-2  transition cursor-pointer"
            >
              Call Now
            </a>
          </div>

          {/* Hamburger (below lg) */}
          <button
            className="lg:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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

            <div className="pt-4 border-t w-1/3">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block text-center bg-black text-white rounded-full px-6 md:py-3 py-2"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
