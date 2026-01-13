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
          'X-API-Key': 'gAAAAABpZI7sMrya9JkkulQukUR0ZkRnpja71e0b6gdGgfbLVH7UQLu1W_Sv1hy0lFvRJpqUZyUTVdxLpsF3r5IZGk3Q9g_3ffFydo-BoOE1B7fLIWSHNTrK3hN1czhmpkLedf1MfycW',
        },
        body: JSON.stringify({
          client_id: '1435480d-deae-4596-afb7-60f96763352c',
          project_id: 'cea54c03-12ed-4a58-aae8-70d867e4ff6a',
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

