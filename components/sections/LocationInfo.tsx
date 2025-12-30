import { MapPin, ExternalLink, Building2 } from "lucide-react"

export function LocationInfo() {
  const address = {
    facilityName: "Location 2",
    street: "Manzana 057",
    city: "Jilotepec de Molina Enríquez",
    state: "Edo. De Mexico",
    postalCode: "C.P. 54250",
    googleMapsUrl: "https://maps.app.goo.gl/JKUyxyL6S2gf3nJ98",
  }

  return (
    <div className="overflow-hidden border-2 border-[#173c65]/20 rounded-lg shadow-lg w-[95%] lg:w-[70%] xl:w-[45%]">
      <div className="bg-primary px-6 py-4 flex items-center gap-3">
        <h2 className="text-xl font-semibold text-[#173c65] tracking-wide">{address.facilityName}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-0 text-gray-600">
        <div className="p-8 space-y-6 bg-card">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="rounded-lg bg-primary/10 p-2.5 mt-1">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground md:mb-3">
                  Warehouse Address
                </h3>
                <address className="not-italic text-foreground  text-gray-600 leading-relaxed md:space-y-1">
                  <p className="font-medium">{address.street}</p>
                  <p>{address.city}</p>
                  <p>{address.state}</p>
                  <p className="font-semibold text-sm">{address.postalCode}</p>
                </address>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <a
              href={address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center"
            >
              View on Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative h-80 md:h-auto bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.8!2d-99.53!3d19.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU3JzAwLjAiTiA5OcKwMzEnNDguMCJX!5e0!3m2!1sen!2smx!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Warehouse location map"
            className="absolute inset-0"
            aria-label="Warehouse location map"
          />
        </div>
      </div>
    </div>
  )
}
