'use client'

import { FooterLogo } from "@/assets/images"
import { Logo } from "@/components/common"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const NAVBAR_OFFSET = 80

export default function Footer() {
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
    <footer className="bg-[#003A5D] text-white max-w-[1520px] mx-auto ">
      <div className="lg:max-w-7xl w-[95%] mx-auto py-12 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
          <Logo variant="light" className="h-6 mb-2" />
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Premium Class A industrial warehouse facilities in strategic
              locations across Mexico. Your partner for logistics excellence.
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
          <div className="lg:col-span-2">
            <p className="text-sm text-gray-300 mb-4 italic">
              For more information:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-300">
              {/* Jorge Fabris */}
              <div>
                <p className="font-semibold text-white">Jorge Fabris</p>
                <p>Executive Managing Director | Industrial</p>
                <p className="text-blue-300">jorge.fabris@nmrk.com</p>
                <p>+52.55.5980.2011</p>
              </div>

              {/* Guillermo Garrido */}
              <div>
                <p className="font-semibold text-white">Guillermo Garrido</p>
                <p>Executive Managing Director | Industrial</p>
                <p className="text-blue-300">guillermo.garrido@nmrk.com</p>
                <p>+52 55 1849 7483</p>
              </div>

              {/* Carlos Garrido */}
              <div>
                <p className="font-semibold text-white">Carlos Garrido</p>
                <p>Industrial Broker</p>
                <p className="text-blue-300">carlos.garrido@nmrk.com</p>
                <p>+52.55.3915.2152</p>
              </div>
            </div>

            {/* Locations */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8 text-sm text-gray-300">
              {/* Mexico City */}
              <div>
                <p className="font-semibold text-white">Mexico City</p>
                <p>Corporativo Espacio Santa Fe</p>
                <p>Carr. México – Toluca 5420 – PH</p>
                <p>Santa Fe, Cuajimalpa, CDMX 05320</p>
                <p>+52 (55) 5980 2011</p>
              </div>

              {/* New York */}
              <div>
                <p className="font-semibold text-white">New York Headquarters</p>
                <p>125 Park Ave.</p>
                <p>New York, NY 10017</p>
                <p>t 212-372-2000</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => scrollToSection(e, 'home')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#connectivity" 
                  onClick={(e) => scrollToSection(e, 'connectivity')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Connectivity
                </a>
              </li>
              <li>
                <a 
                  href="#specifications" 
                  onClick={(e) => scrollToSection(e, 'specifications')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Specifications
                </a>
              </li>
              <li>
                <a 
                  href="#infrastructure" 
                  onClick={(e) => scrollToSection(e, 'infrastructure')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Infrastructure
                </a>
              </li>
              <li>
                <a 
                  href="#opportunities" 
                  onClick={(e) => scrollToSection(e, 'opportunities')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Opportunities
                </a>
              </li>
              <li>
                <a 
                  href="#applications" 
                  onClick={(e) => scrollToSection(e, 'applications')}
                  className="text-gray-300 hover:text-white cursor-pointer"
                >
                  Applications
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/30 pt-8 mb-8">
        <p className="text-sm font-semibold text-center md:text-left">Disclaimer</p>
          <p className="text-gray-300 text-xs leading-relaxed">
            This document has been prepared for general informational purposes only. No warranties or representations of any kind, whether express or implied, are made with respect to the information contained herein, including, without limitation, its content, accuracy, or reliability. Any interested party should conduct its own independent investigation and verification of the information. All inferred or implied terms, conditions, and warranties arising from this document are expressly excluded, as is any liability for loss or damage arising from its use. The information contained herein is subject to change without prior notice.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/30">
        
          <p className="text-gray-400 text-sm ">
            © 2025 Jilotepec Logistics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
