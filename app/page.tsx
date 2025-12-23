import { BuildToSuitLand } from "@/components/sections/BuildToSuitLand";
import { IdealFor } from "@/components/sections/IdealFor";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import { LocationInfo } from "@/components/sections/LocationInfo";
import SecuritySystems from "@/components/sections/SecuritySystems";
import { SpecificationsSection } from "@/components/sections/SpecificationsSection";
import { StrategicLocationSection } from "@/components/sections/StrategicLocationSection";
import { WarehouseBanner } from "@/components/sections/WarehouseBanner";
import WarehouseCTA from "@/components/sections/WarehouseCTA";
import { WarehouseLeadForm } from "@/components/sections/WarehouseLeadForm";

export default function Home() {
  return (
    <div className="w-full">
      {/* Home Section */}
      <section id="home" className="bg-gray-50">
        <WarehouseBanner />
      </section>

      {/* Connectivity Section */}
      <section id="connectivity" className="min-h-screen flex items-center justify-center bg-white    ">
        <StrategicLocationSection/>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="min-h-screen  flex items-center justify-center bg-gray-50  ">
        <SpecificationsSection />
      </section>
      <section  className=" flex items-center justify-center bg-gray-50  ">
        <WarehouseCTA />
      </section>

      {/* Infrastructure Section */}
      <section id="infrastructure" className="min-h-screen flex items-center justify-center bg-white  py-0">
      <SecuritySystems />
      </section>

      {/* Opportunities Section */}
      <section id="opportunities" className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-20">
      <InfrastructureSection />
      </section>

      {/* Applications Section */}
      <section id="applications" className="min-h-screen flex items-center justify-center bg-gray-50  ">
        <BuildToSuitLand />
      </section>
      <section id="" className="py-6 flex items-center justify-center bg-gray-50  ">
        <LocationInfo />
      </section>

      {/* Contact Section */}
      <section id="" className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-0">
      <IdealFor />
      </section>
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 px-4  ">
      <WarehouseLeadForm />
      </section>
    </div>
  );
}
