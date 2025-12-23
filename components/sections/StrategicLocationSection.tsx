import { Truck, Airplay as Highway, Globe2, TrendingUp } from "lucide-react";

const HIGHWAY_ROUTES = [
  {
    title: "Highway 57D",
    description: "Mexico–Querétaro–San Luis Potosí corridor",
  },
  {
    title: "Arco Norte 40D",
    description: "Bajío–Gulf–Central–Puebla–Tlaxcala link",
  },
  {
    title: "Circuito Exterior",
    description: "Mexiquense ring road system",
  },
  {
    title: "Rapid Access",
    description: "Mexico City, Bajío, Pacific, Gulf & Northern routes",
  },
] as const;

const advantages = [
  {
    title: "Efficient Distribution",
    description:
      "Highly efficient distribution to ports, borders, and major consumption markets",
  },
  {
    title: "Reduced Transit Times",
    description:
      "Minimized delivery times for national and regional distribution routes",
  },
  {
    title: "Market Reach",
    description: "Immediate access to 23+ million consumers in the metro area",
  },
  {
    title: "Strategic Positioning",
    description:
      "Perfect positioning for supply chains connecting north–central–south",
  },
  {
    title: "Versatile Operations",
    description:
      "Ideal for 3PLs, retail distribution, e-commerce, and manufacturing",
  },
  {
    title: "Multi-Region Coverage",
    description:
      "Direct connectivity to Bajío, Gulf, Central, Puebla, and Tlaxcala regions",
  },
];

export function StrategicLocationSection() {
  return (
    <section className="relative w-full bg-[#FCFBFC] py-16 px-4 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent opacity-40"></div>
      <div className="absolute inset-0 bg-grid-slate-800/20 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className=" mx-auto max-w-7xl lg:px-2 xl:px-0 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 ">
            <div className="w-2 h-2 bg-blue-100 rounded-full animate-pulse"></div>
            <span className="text-[#173c65] text-xl   lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wider">
              Strategic Location Benefits
            </span>
          </div>
          <h2 className=" xl:text-2xl lg:text-xl text-lg py-6 text-[#173c65] font-bold  ">
            Mexico&apos;s Most Efficient Logistics Node
          </h2>
          <p className="text-gray-600  text-base max-w-2xl mx-auto text-pretty">
            CLJ is positioned in one of the most efficient logistics nodes in
            the country, connecting instantly with Mexico&apos;s key corridors.
          </p>
        </div>

        {/* Highway Access Cards */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Truck className="w-6 h-6 text-blue-950" />
            <h3 className="xl:text-2xl lg:text-xl text-lg font-bold text-[#173c65]">
              Direct Highway Access
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHWAY_ROUTES.map((route) => (
              <div
                key={route.title}
                className="group relative bg-white backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                    <Highway className="w-6 h-6 text-[#173c65] group-hover:text-white transition-colors" />
                  </div>

                  <h4 className="text-[#173c65] group-hover:text-white transition-colors font-bold text-lg mb-2">
                    {route.title}
                  </h4>

                  <p className="text-gray-600 group-hover:text-white transition-colors text-sm leading-relaxed">
                    {route.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Stats Banner */}
        <div className="relative bg-[#1F2937] rounded-3xl p-8 md:p-12 mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-xl   lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                23M+
              </div>
              <div className="text-orange-100 font-medium">
                Consumers in Greater Mexico City
              </div>
            </div>
            <div className="text-center border-x border-gray-400">
              <div className="text-xl   lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                5
              </div>
              <div className="text-orange-100 font-medium">
                Major Regions Connected
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl   lg:text-2xl xl:text-3xl font-bold text-white mb-2">
                100%
              </div>
              <div className="text-orange-100 font-medium">
                Efficient Distribution Network
              </div>
            </div>
          </div>
        </div>

        {/* Operational Advantages */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe2 className="w-6 h-6 text-[#173c65]" />
            <h3 className="md:text-xl text-lg font-bold text-[#173c65]">
              Key Operational Advantages
            </h3>
          </div>

          {/* Advantage Card 1 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="relative bg-white backdrop-blur-sm rounded-xl p-6 border border-slate-700/50  transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0  transition-colors">
                    <TrendingUp className="w-5 h-5 text-[#173c65] group-hover:text-[#173c65] transition-colors" />
                  </div>

                  <div>
                    <h4 className="text-[#173c65] group-hover:text-[#173c65] font-semibold mb-2 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-gray-600  text-sm leading-relaxed transition-colors">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
