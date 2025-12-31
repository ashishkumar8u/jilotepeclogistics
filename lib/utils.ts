import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
  // Fire-and-forget: get IP and timezone, then send API request
  (async () => {
    try {
      const timezone = getTimezone();
      const clientIP = await getClientIP();

      await fetch('https://collection.apinext.in/forms/metadata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-API-Key': 'gAAAAABpVNqy0Gs3i5WxaEF6vk8slMC9IvWoR7S8iMMKWMXeLT49fcwpiBPWqV_GpGJYPKZb-oqZhpbHCpIrJXOjquwiFMPeGj9oy3i5rAUiM01P5QxXdxb-l30QN4MrvPWHiTSRSbIW',
        },
        body: JSON.stringify({
          client_id: '983f1c31-e5b3-4b14-bff4-ae370010bd82',
          button_id: buttonId,
          count: 1,
          ip_address: clientIP,
          timezone: timezone,
        }),
      });
    } catch {
      // Silently ignore all errors (CORS, network, etc.)
      // Don't log to console to avoid cluttering
    }
  })();
}

