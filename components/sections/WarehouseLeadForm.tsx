"use client";

import type React from "react";
import { useState } from "react";
import { trackButtonClick } from "@/lib/utils";
import { getUAParsed } from "@/utils/ua-parsed";

// Helper function to detect browser
const detectBrowser = (): string => {
  if (typeof window === "undefined") return "Unknown";
  const ua = navigator.userAgent;
  if (ua.includes("Chrome") && !ua.includes("Edg")) return "Chrome";
  if (ua.includes("Firefox")) return "Firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Edg")) return "Edge";
  if (ua.includes("Opera") || ua.includes("OPR")) return "Opera";
  return "Unknown";
};

// Helper function to detect device type
const detectDeviceType = (): string => {
  if (typeof window === "undefined") return "Unknown";
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  if (/tablet|ipad|playbook|silk/i.test(ua)) return "Tablet";
  if (
    /mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(
      ua,
    )
  )
    return "Mobile";
  if (width < 768) return "Mobile";
  if (width < 1024) return "Tablet";
  return "Desktop";
};

// Validation helpers
const NAME_REGEX = /^[a-zA-Z\s\-']*$/; // letters, spaces, hyphen, apostrophe only
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_LENGTH = /^\d{9,12}$/;  // 9–12 digits for validation

export function WarehouseLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    fullName?: string;
    companyName?: string;
    email?: string;
    phone?: string;
  }>({});
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
  });

  const getClientIP = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      if (data?.ip) return data.ip;
    } catch {
      // ignore and try fallback
    }

    try {
      const response = await fetch("https://ipapi.co/ip/");
      const ip = await response.text();
      return ip.trim() || "";
    } catch {
      return "";
    }
  };

  const validateForm = (): boolean => {
    const errors: typeof fieldErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedCompany = formData.companyName.trim();
    const trimmedEmail = formData.email.trim();
    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!trimmedName) {
      errors.fullName = "Full name is required.";
    } else if (!NAME_REGEX.test(trimmedName)) {
      errors.fullName = "Full name can only contain letters, spaces, hyphens and apostrophes.";
    }

    if (!trimmedCompany) {
      errors.companyName = "Company name is required.";
    } else if (!NAME_REGEX.test(trimmedCompany)) {
      errors.companyName = "Company name can only contain letters, spaces, hyphens and apostrophes.";
    }

    if (!trimmedEmail) {
      errors.email = "Email is required.";
    } else if (!EMAIL_REGEX.test(trimmedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_LENGTH.test(phoneDigits)) {
      errors.phone = "Phone must be 9–12 digits (numbers only).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFieldErrors({});
    setErrorMessage("");
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const timezone =
        Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
      const browser = detectBrowser();
      const deviceType = detectDeviceType();
      const clientIP = await getClientIP();
       const ua_parsed = getUAParsed();
      const apiBase = `${process.env.NEXT_PUBLIC_BASE_URL}`.replace(/\/+$/, "");
      const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
      const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      if (!apiBase || apiBase === "undefined") {
        throw new Error("API host is not configured (NEXT_PUBLIC_BASE_URL)");
      }
      if (!clientId || clientId === "undefined") {
        throw new Error("Client ID is not configured (NEXT_PUBLIC_CLIENT_ID)");
      }
      if (!projectId || projectId === "undefined") {
        throw new Error("Project ID is not configured (NEXT_PUBLIC_PROJECT_ID)");
      }
      if (!apiKey || apiKey === "undefined") {
        throw new Error("API key is not configured (NEXT_PUBLIC_API_KEY)");
      }

      const warehouseSizeNum = formData.warehouseSize.trim()
        ? Number(formData.warehouseSize)
        : 0;
      const budgetNum = formData.budget.trim() ? Number(formData.budget) : 0;

      const other = {
        browser: {
          name: ua_parsed.browser.name ?? null,
          version: ua_parsed.browser.version ?? null,
        },
        device: {
          model: ua_parsed.device.model ?? null,
          type: ua_parsed.device.type ?? null,
          vendor: ua_parsed.device.vendor ?? null,
        },
        engine: {
          name: ua_parsed.engine.name ?? null,
          version: ua_parsed.engine.version ?? null,
        },
        os: {
          name: ua_parsed.os.name ?? null,
          version: ua_parsed.os.version ?? null,
        },
      };

      const payload = {
        client_id: clientId,
        project_id: projectId,
        form_data: {
          full_name: formData.fullName.trim(),
          company_name: formData.companyName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          warehouse_size_sqft: !Number.isNaN(warehouseSizeNum)
            ? warehouseSizeNum
            : 0,
          preferred_location: formData.location.trim() || "",
          monthly_budget: !Number.isNaN(budgetNum) ? budgetNum : 0,
          lease_duration: formData.leaseDuration.trim() || "",
          timeline_to_move_in: formData.timeline.trim() || "",
          additional_information: formData.notes.trim() || "",
          timezone,
          ip_address: clientIP,
          browser,
          device_type: deviceType,
        },
        other,
      };

      const response = await fetch(`${apiBase}/api/v1/forms/submit-form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        let serverMessage = "Failed to submit form";
        try {
          const errBody = await response.json();
          // FastAPI-style: { detail: [{ loc: ["body", "form_data", "field"], msg: "Field required" }] }
          if (Array.isArray(errBody?.detail) && errBody.detail.length > 0) {
            const first = errBody.detail[0];
            const loc = first?.loc;
            const msg = first?.msg ?? "Field required";
            const field =
              Array.isArray(loc) && loc.length > 0
                ? loc.slice(-1)[0]
                : null;
            serverMessage = field
              ? `${msg}: ${String(field).replace(/_/g, " ")}`
              : msg;
          } else if (errBody?.message) {
            serverMessage = errBody.message;
          } else if (errBody?.success === false && errBody?.message) {
            serverMessage = errBody.message;
          } else if (errBody?.error) {
            serverMessage = errBody.error;
          } else if (typeof errBody === "string") {
            serverMessage = errBody;
          }
        } catch {
          // ignore if response is not JSON
        }
        throw new Error(serverMessage);
      }

      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);

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
      });
      setFieldErrors({});
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong while submitting. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    let sanitized = value;
    if (field === "fullName" || field === "companyName") {
      // Allow only letters, spaces, hyphen, apostrophe
      sanitized = value.replace(/[^a-zA-Z\s\-']/g, "");
    } else if (field === "phone") {
      // Allow only digits (9–12 digit validation on submit)
      sanitized = value.replace(/\D/g, "");
    }
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (fieldErrors[field as keyof typeof fieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      <div className="rounded-xl border  lg:w-[65%] border-neutral-200 bg-white shadow-lg mb-16">
        <div className="border-b border-neutral-200 bg-neutral-50/50 px-6 py-6 md:px-8">
          <h2 className="text-xl   lg:text-2xl xl:text-3xl font-semibold text-[#173c65]">
            Warehouse Inquiry Form
          </h2>
          <p className="mt-2 md:text-base text-sm text-gray-600">
            Share your requirements and we will match you with available
            warehouse spaces
          </p>
        </div>

        <div className="px-6 py-8 md:px-8">
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {errorMessage}
              </div>
            )}
            {/* Contact Information Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">
                  Contact Information
                </h3>
                <p className="text-sm text-neutral-600">
                  Let us know how to reach you
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="John Smith"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    required
                    className={`w-full rounded-lg border bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${fieldErrors.fullName ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-orange-500"}`}
                  />
                  {fieldErrors.fullName && (
                    <p className="text-sm text-red-600">{fieldErrors.fullName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    placeholder="Acme Corporation"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleChange("companyName", e.target.value)
                    }
                    required
                    className={`w-full rounded-lg border bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${fieldErrors.companyName ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-orange-500"}`}
                  />
                  {fieldErrors.companyName && (
                    <p className="text-sm text-red-600">{fieldErrors.companyName}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@acme.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className={`w-full rounded-lg border bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${fieldErrors.email ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-orange-500"}`}
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="9–12 digits (numbers only)"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    required
                    maxLength={12}
                    className={`w-full rounded-lg border bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 ${fieldErrors.phone ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-orange-500"}`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-sm text-red-600">{fieldErrors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Warehouse Requirements Section */}
            <div className="space-y-6">
              <div className="border-l-4 border-[#173c65] pl-4">
                <h3 className="text-lg font-semibold text-[#173c65]">
                  Warehouse Requirements
                </h3>
                <p className="text-sm text-neutral-600">
                  Tell us about your space needs
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="warehouseSize"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Warehouse Size (sq ft){" "}
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="warehouseSize"
                    type="number"
                    min="0"
                    step="1"
                    placeholder="4000"
                    value={formData.warehouseSize}
                    onChange={(e) =>
                      handleChange("warehouseSize", e.target.value)
                    }
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Preferred Location <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="City, State or Region"
                    value={formData.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Monthly Budget <span className="text-red-600">*</span>
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
                  <label
                    htmlFor="leaseDuration"
                    className="block text-sm font-medium text-neutral-700"
                  >
                    Lease Duration <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="leaseDuration"
                    type="text"
                    placeholder="5 Years"
                    value={formData.leaseDuration}
                    onChange={(e) =>
                      handleChange("leaseDuration", e.target.value)
                    }
                    required
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder:text-neutral-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Timeline to Move In <span className="text-red-600">*</span>
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
                <h3 className="text-lg font-semibold text-[#173c65]">
                  Additional Information
                </h3>
                <p className="text-sm text-neutral-600">
                  Any special requirements or questions?
                </p>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Additional Notes
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
                <span className="text-red-600">*</span> Required fields
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={() => trackButtonClick("form-submit-inquiry")}
                className="w-full rounded-lg bg-[#173c65] px-8 py-3 font-medium text-white transition-colors hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>
            </div>
            <p className=" text-xs text-center text-gray-600 ">
              This information has been prepared by Jilotepec Logistics for general
              information only. Jilotepec Logistics makes no warranties nor representations
              of any kind, express or implied, with respect to the information,
              including, but not limited to, warranties of content, accuracy,
              and reliability. Any interested party should make their own
              inquiries about the accuracy of the information. Jilotepec Logistics
              unequivocally excludes all inferred or implied terms, conditions
              and warranties arising from this document and excludes all
              liability for loss and damage arising therefrom.
            </p>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 max-w-md rounded-lg border border-green-200 bg-white p-4 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-full bg-green-100 p-1">
              <svg
                className="h-5 w-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-neutral-900">
                Thank you for your inquiry!
              </h4>
              <p className="mt-1 text-sm text-neutral-600">
                Our team will contact you within 24 hours to discuss your
                warehouse needs.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
