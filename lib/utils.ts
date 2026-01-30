import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getUAParsed } from "@/utils/ua-parsed";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Gets the client's IP address using fallback methods
 */
async function getClientIP(): Promise<string> {
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
}

/**
 * Gets the client's timezone
 */
function getTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

/**
 * Tracks button click by sending metadata to the API
 * Fire-and-forget function that doesn't block the UI
 * @param buttonId - Unique identifier for the button
 */
export function trackButtonClick(buttonId: string): void {
  (async () => {
    try {
      const timezone = getTimezone();
      const clientIP = await getClientIP();
      const ua_parsed = getUAParsed();

      const rawBase = process.env.NEXT_PUBLIC_BASE_URL;
      const apiBase =
        rawBase && rawBase !== "undefined"
          ? rawBase.replace(/\/+$/, "")
          : typeof window !== "undefined"
            ? window.location.origin
            : "";
      const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
      const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
      const apiKey = process.env.NEXT_PUBLIC_API_KEY;

      if (!apiBase || !clientId || !projectId || !apiKey || clientId === "undefined" || projectId === "undefined" || apiKey === "undefined") {
        return;
      }

      const payload = {
        client_id: clientId,
        project_id: projectId,
        button_id: buttonId,
        timezone,
        ip_address: clientIP,
        other: {
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
        },
      };

      await fetch(`${apiBase}/api/v1/meta-data/submit-meta-data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "X-API-Key": apiKey,
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // Silently ignore all errors (CORS, network, etc.)
    }
  })();
}
