import { WarehouseBanner } from "@/components/sections/WarehouseBanner";
import { StrategicLocationSection } from "@/components/sections/StrategicLocationSection";
import { SpecificationsSection } from "@/components/sections/SpecificationsSection";
import WarehouseCTA from "@/components/sections/WarehouseCTA";
import dynamic from "next/dynamic";

// Defer non-critical below-the-fold components
const SecuritySystems = dynamic(() => import("@/components/sections/SecuritySystems").then(mod => ({ default: mod.default })), {
  loading: () => <div className="min-h-[400px]" />,
});
const InfrastructureSection = dynamic(() => import("@/components/sections/InfrastructureSection").then(mod => ({ default: mod.default })), {
  loading: () => <div className="min-h-[400px]" />,
});
const BuildToSuitLand = dynamic(() => import("@/components/sections/BuildToSuitLand").then(mod => ({ default: mod.BuildToSuitLand })), {
  loading: () => <div className="min-h-[400px]" />,
});
const LocationInfo = dynamic(() => import("@/components/sections/LocationInfo").then(mod => ({ default: mod.LocationInfo })), {
  loading: () => <div className="min-h-[200px]" />,
});
const IdealFor = dynamic(() => import("@/components/sections/IdealFor").then(mod => ({ default: mod.IdealFor })), {
  loading: () => <div className="min-h-[400px]" />,
});
const WarehouseLeadForm = dynamic(() => import("@/components/sections/WarehouseLeadForm").then(mod => ({ default: mod.WarehouseLeadForm })), {
  loading: () => <div className="min-h-[600px]" />,
});
const ContactMethods = dynamic(() => import("@/components/sections/contact-methods").then(mod => ({ default: mod.default })), {
  loading: () => <div className="min-h-[600px]" />,
});

export default function Home() {
  return (
    <div className="max-w-[1520px] mx-auto ">
      {/* Home Section */}
      <section id="home" className="bg-gray-50 ">
        <WarehouseBanner />
      </section>

      {/* Connectivity Section */}
      <section id="connectivity" className=" flex items-center justify-center bg-white    ">
        <StrategicLocationSection/>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className=" max-w-[1520px] mx-auto   flex items-center justify-center bg-gray-50  ">
        <SpecificationsSection />
      </section>
      <section id="cta"  className=" flex items-center justify-center bg-gray-50  ">
        <WarehouseCTA />
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className=" flex items-center justify-center bg-white  py-0">
      <SecuritySystems />
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className=" flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
      <InfrastructureSection />
      </section>

      {/* Applications Section */}
      <section id="applications" className=" flex items-center justify-center bg-gray-50  ">
        <BuildToSuitLand />
      </section>
      <section id="info" className="py-6  flex items-center justify-center bg-gray-50  ">
        <LocationInfo />
      </section>

      {/* Contact Section */}
      <section id="for" className=" flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-0">
      <IdealFor />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 px-4  ">
      <WarehouseLeadForm />
      </section>
      <section id="contactmeth" className="">
      <ContactMethods />
      </section>
    </div>
  );
}
