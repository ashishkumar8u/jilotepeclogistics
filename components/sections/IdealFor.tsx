import { Building2, Package, Truck, Factory, Zap, Building } from "lucide-react"

interface IdealForProps {
  className?: string
}

const operations = [
  {
    icon: Building2,
    title: "National and Regional Distribution Centers",
    description: "Large-scale operations requiring efficient logistics coordination",
  },
  {
    icon: Package,
    title: "E-commerce and Retail Fulfillment",
    description: "Fast-paced order processing and delivery management",
  },
  {
    icon: Truck,
    title: "3PL Logistics Providers",
    description: "Multi-client warehouse and transportation services",
  },
  {
    icon: Factory,
    title: "Manufacturing and Assembly Operations",
    description: "Production facilities with complex supply chain needs",
  },
  {
    icon: Zap,
    title: "High-Demand Utility Users",
    description: "Operations requiring consistent power and resources",
  },
  {
    icon: Building,
    title: "Large Corporate Supply Chain Operations",
    description: "Enterprise-level logistics and distribution management",
  },
]

export function IdealFor({ className = "" }: IdealForProps) {
  return (
    <section className={`w-full py-20 bg-gray-50 ${className}`}>
      <div className="lg:max-w-7xl w-[95%] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="   text-xl   lg:text-2xl xl:text-3xl font-bold text-[#173c65]   mb-4">Ideal For</h2>
      
        </div>

      

        {/* Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {operations.map((operation, index) => {
            const Icon = operation.icon
            return (
              <div
                key={index}
                className="group relative p-8 bg-muted  border border-orange-500/20 hover:border-accent/20 rounded-lg transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                      <Icon className="w-7 h-7 text-[#173c65] group-hover:text-[#173c65] transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#173c65] mb-3 text-balance">{operation.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{operation.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
