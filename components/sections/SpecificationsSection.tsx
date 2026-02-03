export function SpecificationsSection() {
  return (
    <section className="">
      <div className="max-w-7xl  mx-auto">
        {/* Header */}
        <div className="">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl text-center text-[#173c65] font-bold tracking-tight mb-12 text-balance">
            Park & Building Specifications
          </h2>
        </div>

        {/* Main Grid */}
        <div className="flex  md:flex-row flex-col flex-wrap   md:justify-between w-full  gap-4 text-black">
          {/* Park Overview */}
          <div className="grid  lg:grid-cols-2 grid-cols-1 gap-4 lg:gap-20 xl:gap-0">
            <div className="space-y-8  ">
              <div className="text-black">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  Park Overview
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg md:text-lg font-medium mb-1">
                      Total Park Land
                    </p>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">
                      57 ha
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Phase 1: 33 ha
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8 ">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                  Existing Buildings
                </h3>
                <div className="space-y-6">
                  <div className="border-l-2 border-primary pl-4">
                    <div className="flex items-start gap-30 mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">
                        Building A
                      </p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase bg-primary text-[#173c65] rounded-full">
                        AVAILABLE: JUNE 2026
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold">
                      40,000 m²
                    </p>
                  </div>

                  <div className="border-l-2 border-accent pl-4">
                    <div className="flex items-start gap-23 mb-2">
                      <p className="md:text-lg text-[#173c65] font-bold">
                        Building B
                      </p>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wide uppercase border-2 border-accent text-[#173c65] rounded-full bg-transparent">
                        IMMEDIATE AVAILABILITY
                      </span>
                    </div>
                    <p className="text-lg md:text-3xl text-[#173c65] font-bold mb-2">28,000 m²</p>
                    <p className="text-sm text-muted-foreground">Divisible Space</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-4 font-medium">
                  Land Available
                </h3>
                <div>
                  <p className="text-lg font-medium mb-1">
                    For Sale or BTS Projects
                  </p>
                  <p className="text-3xl text-[#173c65] font-bold">
                    400,000 m²
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Class-A Features */}
          <div className="space-y-8 ">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-[#173c65] mb-6 font-medium">
                Class-A Building Features
              </h3>
              <ul className="space-y-3 text-sm md:text-base leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Concrete walls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>KR-18 insulated metal roof</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>6% natural lighting via polycarbonate skylights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Clear height: 11.50 m (38 ft)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>6" (15 cm) concrete floor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>
                    Fully equipped dock doors (up to 1 dock / 350 SQM approx.)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Drive-in ramps (BTS options)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>40-meter deep truck courts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>LED lighting throughout</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-muted-foreground mt-1">•</span>
                  <span>Hydrants and sprinkler-ready system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
