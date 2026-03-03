"use client";

import { useState } from "react";
import { detectBrowser, detectDeviceType } from "../sections/WarehouseLeadForm";
import { getUAParsed } from "@/utils/ua-parsed";
import { reportLeadFormConversion } from "@/lib/utils";

export function CallbackForm({ onClose }: { onClose: () => void }) {
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fieldErrors, setFieldErrors] = useState<{
    phone?: string;
  }>({});
  const [formData, setFormData] = useState({
    phone: "",
  });

  const PHONE_LENGTH = /^\d{9,12}$/;
  const validateForm = (): boolean => {
    const errors: typeof fieldErrors = {};
    const phoneDigits = formData.phone.replace(/\D/g, "");

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_LENGTH.test(phoneDigits)) {
      errors.phone = "Phone must be 9–12 digits (numbers only).";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

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
        throw new Error(
          "Project ID is not configured (NEXT_PUBLIC_PROJECT_ID)",
        );
      }
      if (!apiKey || apiKey === "undefined") {
        throw new Error("API key is not configured (NEXT_PUBLIC_API_KEY)");
      }

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
          phone: formData.phone.trim(),
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
              Array.isArray(loc) && loc.length > 0 ? loc.slice(-1)[0] : null;
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

      reportLeadFormConversion();
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);

      // Reset form
      setFormData({
        phone: "",
      });
      onClose();
      setFieldErrors({});
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong while submitting. Please try again.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    let sanitized = value;
    if (field === "phone") {
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
      <form onSubmit={handleSubmit} className="space-y-4">
        {errorMessage && (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        )}
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#173C65] text-white py-2 rounded-lg hover:bg-blue-800 transition"
        >
          {isSubmitting ? "Submitting..." : "Request Callback"}
        </button>
      </form>
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
