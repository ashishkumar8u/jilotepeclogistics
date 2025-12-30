import type React from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { Land } from "@/assets/images"

interface LandFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export function BuildToSuitLand() {
  const features: LandFeature[] = [
    {
      icon: <Check className="h-5 w-5" />,
      title: "30+ hectares",
      description: "Fully serviced with infrastructure at lot line",
    },
    {
      icon: <Check className="h-5 w-5" />,
      title: "23+ hectares",
      description: "Hectares of additional industrial reserve land",
    },
  ]

  return (
    <section className="w-full bg-gray-50   ">
      <div className=" mx-auto w-[95%] lg:max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4  font-bold tracking-tight  text-[#173c65] text-xl   lg:text-2xl xl:text-3xl text-balance">
            Land Available for Build-to-Suit Projects
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600  text-pretty">
            In addition to existing buildings, CLJ offers comprehensive land solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-card">
            <div className="aspect-[4/3] relative">
              <Image
                src={Land}
                alt="Aerial view of CLJ industrial land"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute inset-0 " />
              <div className="absolute bottom-0 left-0 right-0 p-6 ">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-900"></span>
                  </span>
                  Available Now
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="flex flex-col justify-center">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-black transition-transform group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 md:text-xl lg:text-2xl text-lg font-bold text-[#173c65]">{feature.title}</h3>
                    <p className="text-gray-600 md:text-base text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}

              {/* Project Size Info */}
              <div className="mt-8 rounded-lg border-2  bg-primary/5 p-6">
                <h4 className="mb-3 text-lg font-semibold text-[#173c65]">Project Capabilities</h4>
                <p className="text-gray-600 md:text-base text-sm text-pretty">
                  Suitable for BTS projects ranging from <span className="font-bold text-gray-600   ">10,000 m²</span> to
                  over <span className="font-bold text-gray-600">100,000 m²</span>, tailored to the exact needs of the
                  user.
                </p>
              </div>

             
            </div>  
          </div>
        </div>

        {/* Stats Bar */}
        {/* <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-16">
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">53+</div>
            <div className="text-sm text-muted-foreground">Total Hectares Available</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">10,000+</div>
            <div className="text-sm text-muted-foreground">Minimum Project Size (m²)</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 text-center">
            <div className="mb-2 text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Infrastructure Ready</div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
