import { Access, Doublesec, Fancing, IndustrialFacility, IndustrialFacilitytwo } from "@/assets/images"
import { Shield, Eye, Users, Fence } from "lucide-react"

export default function SecuritySystems() {
  const features = [
    {
      icon: Fence,
      title: "Outer security fencing + internal controlled perimeter",
      description: "Multi-layer perimeter protection with advanced boundary systems",
      image: Fancing,
    },
    {
      icon: Shield,
      title: "24/7 manned access control",
      description: "Round-the-clock professional security personnel and monitoring",
      image: Access,
    },
    {
      icon: Eye,
      title: "Centralized monitoring and surveillance",
      description: "State-of-the-art monitoring systems with real-time oversight",
      image: IndustrialFacility,
    },
    {
      icon: Users,
      title: "Segregated access for trucks, vehicles, and personnel",
      description: "Dedicated entry points ensuring optimal traffic flow and safety",
      image: IndustrialFacilitytwo,
    },
  ]

  return (
    <section className="bg-zinc-100 py-16 w-full">
      <div className="xl:max-w-7xl w-[95%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl text-[#173c65] font-bold tracking-tight text-balance ">
            ADVANCED SECURITY SYSTEMS
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            Each building within the park includes comprehensive security measures designed for maximum protection and
            operational efficiency
          </p>
        </div>

        {/* Main Security Feature */}
        <div className="bg-gradient-to-br from-blue-950 to-zinc-900 border-2 border-blue-500/30 rounded-2xl p-8 md:p-12 mb-12 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                </div>
                <h3 className="text-xl   lg:text-2xl xl:text-3xl   font-bold text-white">Double Perimeter Security</h3>
              </div>
              <p className="text-zinc-300 text-base leading-relaxed">
                Our multi-layered security approach combines outer fencing with an internal controlled perimeter,
                creating a fortress-level protection system for your operations.
              </p>
            </div>
            <div className="w-full lg:w-auto flex-shrink-0">
              <img
                src={Doublesec.src}
                alt="Double perimeter security system"
                className="rounded-xl shadow-2xl w-full lg:w-[500px] h-auto"
              />
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-800/50 border border-zinc-700/50 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="aspect-video w-full overflow-hidden bg-zinc-800">
                <img
                  src={feature.image.src }
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 bg-blue-950">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-black " />
                    </div>
                  </div>
                  <div className="space-y-2 ">
                    <h4 className="font-semibold text-base leading-snug text-white">{feature.title}</h4>
                    <p className="text-sm text-white leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-blue-950 to-zinc-900 border border-zinc-700/50 rounded-xl p-8 md:p-12 text-center">
          <p className="text-xl   lg:text-2xl xl:text-3xl font-semibold text-balance max-w-4xl mx-auto text-white">
            This ensures a highly controlled and secure operational environment for industrial users.
          </p>
        </div>
      </div>
    </section>
  )
}
