import { UAParser } from "ua-parser-js";

export type UAParsed = {
  browser: { name: string | null; version: string | null };
  os: { name: string | null; version: string | null };
  device: { type: string | null; vendor: string | null; model: string | null };
  engine: { name: string | null; version: string | null };
};

/**
 * Parse current User-Agent and return browser, OS, device, engine.
 * Safe to call in browser only; returns null values on server.
 */
export function getUAParsed(): UAParsed {
  // SSR safety (Next.js / Node)
  if (typeof window === "undefined") {
    return {
      browser: { name: null, version: null },
      os: { name: null, version: null },
      device: { type: null, vendor: null, model: null },
      engine: { name: null, version: null },
    };
  }

  const parser = new UAParser();
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();
  const engine = parser.getEngine();

  // 🔹 Normalize device type
  let deviceType: string | null = "Desktop";

  if (device.type === "mobile") {
    deviceType = "Mobile";
  } else if (device.type === "tablet") {
    deviceType = "Tablet";
  } else if (device.type) {
    deviceType = device.type; // smarttv, console, wearable
  }

  return {
    browser: {
      name: browser.name ?? null,
      version: browser.version ?? null,
    },
    os: {
      name: os.name ?? null,
      version: os.version ?? null,
    },
    device: {
      type: deviceType,
      vendor: device.vendor ?? null,
      model: device.model ?? null,
    },
    engine: {
      name: engine.name ?? null,
      version: engine.version ?? null,
    },
  };
}
