import { FooterLogo, logo } from "@/assets/images"
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#003A5D] text-white">
      <div className="lg:max-w-7xl w-[95%] mx-auto py-12 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div>
          <Image
              src={FooterLogo}
              alt="NEWMARK Logo"
              width={180}
              height={45}
              className="h-6 w-auto"
              priority
            />
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
                <p>+52.55.5980.2011</p>
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
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/connectivity" className="text-gray-300 hover:text-white">Connectivity</Link></li>
              <li><Link href="/specifications" className="text-gray-300 hover:text-white">Specifications</Link></li>
              <li><Link href="/infrastructure" className="text-gray-300 hover:text-white">Infrastructure</Link></li>
              <li><Link href="/opportunities" className="text-gray-300 hover:text-white">Opportunities</Link></li>
              <li><Link href="/applications" className="text-gray-300 hover:text-white">Applications</Link></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/30 pt-8 mb-8">
          <p className="text-gray-300 text-xs leading-relaxed">
            This document has been prepared by Newmark for general information
            only. Newmark makes no warranties nor representations of any kind,
            express or implied, with respect to the information, including,
            without limitation, warranties of content, accuracy and reliability.
            Any interested party should make their own inquiries into the
            accuracy of the information. Newmark unequivocally excludes all
            inferred or implied terms, conditions and warranties arising from
            this document and excludes all liability for loss and damage arising
            therefrom. The information is subject to change without prior notice.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-white/30">
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <span className="text-gray-500">|</span>
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Terms & Conditions
            </Link>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 NEWMARK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
