"use client"

import type React from "react"
import { useState } from "react"
import { trackButtonClick } from "@/lib/utils"
import { useTranslations } from "@/hooks/use-translations"

// Helper function to detect browser
const detectBrowser = (): string => {
  if (typeof window === "undefined") return "Unknown"
  const ua = navigator.userAgent
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome"
  if (ua.includes("Firefox")) return "Firefox"
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari"
  if (ua.includes("Edg")) return "Edge"
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera"
  return "Unknown"
}

// Helper function to detect device type
const detectDeviceType = (): string => {
  if (typeof window === "undefined") return "Unknown"
  const ua = navigator.userAgent.toLowerCase()
  const width = window.innerWidth

  if (/tablet|ipad|playbook|silk/i.test(ua)) return "Tablet"
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(ua)) return "Mobile"
  if (width < 768) return "Mobile"
  if (width < 1024) return "Tablet"
  return "Desktop"
}

export function WarehouseLeadForm() {
  const t = useTranslations();
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    warehouseSize: "",
    location: "",
    budget: "",
    leaseDuration: "",
    timeline: "",
    notes: "",
  })

  const getClientIP = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.ipify.org?format=json")
      const data = await response.json()
      if (data?.ip) return data.ip
    } catch {
      // ignore and try fallback
    }

    try {
      const response = await fetch("https://ipapi.co/ip/")
      const ip = await response.text()
      return ip.trim() || ""
    } catch {
      return ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"
      const browser = detectBrowser()
      const deviceType = detectDeviceType()
      const clientIP = await getClientIP()
      const apiBase = (process.env.NEXT_PUBLIC_API_HOST || "https://collection.apinext.in").replace(/\/+$/, "")
      if (!apiBase) {
        throw new Error("API host is not configured")
      }

      const payload = {
        client_id: "1435480d-deae-4596-afb7-60f96763352c",
        project_id: "cea54c03-12ed-4a58-aae8-70d867e4ff6a",
        form_data: {
          full_name: formData.fullName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          warehouse_size_sqft: Number(formData.warehouseSize) || formData.warehouseSize,
          preferred_location: formData.location,
          monthly_budget: Number(formData.budget) || formData.budget,
          lease_duration: formData.leaseDuration,
          timeline_to_move_in: formData.timeline,
          additional_information: formData.notes,
          timezone,
          ip_address: clientIP,
          browser,
          device_type: deviceType,
        },
      }

      const response = await fetch(`${apiBase}/forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-Key": "gAAAAABpZI7sMrya9JkkulQukUR0ZkRnpja71e0b6gdGgfbLVH7UQLu1W_Sv1hy0lFvRJpqUZyUTVdxLpsF3r5IZGk3Q9g_3ffFydo-BoOE1B7fLIWSHNTrK3hN1czhmpkLedf1MfycW",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setShowToast(true)
      setTimeout(() => setShowToast(false), 5000)

      // Reset form
      setFormData({
        fullName: "",
        companyName: "",
        phone: "",
        email: "",
        warehouseSize: "",
        location: "",
        budget: "",
        leaseDuration: "",
        timeline: "",
        notes: "",
      })
    } catch {
      setErrorMessage(t.form?.errorMessage || "Something went wrong while submitting. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <div className="rounded-xl border  lg:w-[65%] border-neutral-200 bg-white shadow-lg mb-16">
        <div className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-6 md:px-8">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl font-semibold text-[#173c65]">{t.form?.title || 'Warehouse Inquiry Form'}</h2>
          <p className="mt-2 md:text-base text-sm text-gray-600">
          {t.form?.description || 'Share your requirements and we will match you with available warehouse spaces'}

          </p>
        </div>

        <div className="px-6 py-8 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}
            {/* Contact Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">{t.form?.contactInfo || 'Contact Information'}</h3>
                <p className="text-sm text-neutral-600">{t.form?.contactInfoDesc || 'Let us know how to reach you'}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700">
                    {t.form?.fullName || 'Full Name'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-neutral-700">
                    {t.form?.companyName || 'Company Name'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Acme Corporation"
                    value={formData.companyName}
                    onChange={(e) => handleChange("companyName", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
                    {t.form?.email || 'Email Address'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">
                    {t.form?.phone || 'Phone Number'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>
            </div>

            {/* Warehouse Requirements Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">{t.form?.warehouseRequirements || 'Warehouse Requirements'}</h3>
                <p className="text-sm text-neutral-600">{t.form?.warehouseRequirementsDesc || 'Tell us about your space needs'}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="warehouseSize" className="block text-sm font-medium text-neutral-700">
                    {t.form?.warehouseSize || 'Warehouse Size (sq ft)'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="warehouseSize"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="4000"
                    value={formData.warehouseSize}
                    onChange={(e) => handleChange("warehouseSize", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="block text-sm font-medium text-neutral-700">
                    {t.form?.preferredLocation || 'Preferred Location'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder={t.form?.locationPlaceholder || 'City, State or Region'}
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="block text-sm font-medium text-neutral-700">
                    {t.form?.monthlyBudget || 'Monthly Budget'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="budget"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="200000"
                    value={formData.budget}
                    onChange={(e) => handleChange("budget", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="leaseDuration" className="block text-sm font-medium text-neutral-700">
                    {t.form?.leaseDuration || 'Lease Duration'} <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="leaseDuration"
                    type="text"
                    placeholder="5 Years"
                    value={formData.leaseDuration}
                    onChange={(e) => handleChange("leaseDuration", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-sm font-medium text-neutral-700">
                  {t.form?.timeline || 'Timeline to Move In'} <span className="text-red-600">*</span>
                </label>
                <input
                  id="timeline"
                  type="text"
                  placeholder="1 Month"
                  value={formData.timeline}
                  onChange={(e) => handleChange("timeline", e.target.value)}
                  required
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">{t.form?.additionalInfo || 'Additional Information'}</h3>
                <p className="text-sm text-neutral-600">{t.form?.additionalInfoDesc || 'Any special requirements or questions?'}</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="block text-sm font-medium text-neutral-700">
                  {t.form?.additionalNotes || 'Additional Notes'}
                </label>
                <textarea
                  id="notes"
                  placeholder="Tell us about any specific requirements: loading docks, ceiling height, temperature control, security features, etc."
                  value={formData.notes}
                  onChange={(e) => handleChange("notes", e.target.value)}
                  rows={5}
                  className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4 border-t border-neutral-200 pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-neutral-600">
                <span className="text-red-600">*</span> {t.form?.requiredFields || 'Required fields'}
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => trackButtonClick('form-submit-inquiry')}
                className="w-full rounded-lg bg-[#173c65] px-8 py-3 font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? (t.form?.submitting || "Submitting...") : (t.form?.submitInquiry || "Submit Inquiry")}
              </button>
            </div>
            <p className=" text-xs text-center text-gray-600 ">{t.form?.disclaimer || 'This information has been prepared by Newmark for general information only. Newmark makes no warranties nor representations of any kind, express or implied, with respect to the information, including, but not limited to, warranties of content, accuracy, and reliability. Any interested party should make their own inquiries about the accuracy of the information. Newmark unequivocally excludes all inferred or implied terms, conditions and warranties arising from this document and excludes all liability for loss and damage arising therefrom.'}</p>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg border border-green-200 bg-white p-4 shadow-lg">
            <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-full bg-green-100 p-1">
              <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-neutral-900">{t.form?.thankYou || 'Thank you for your inquiry!'}</h4>
              <p className="mt-1 text-sm text-neutral-600">
                {t.form?.thankYouMessage || 'Our team will contact you within 24 hours to discuss your warehouse needs.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
