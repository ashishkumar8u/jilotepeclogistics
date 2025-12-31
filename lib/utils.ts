import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Tracks button click by sending metadata to the API
 * Fire-and-forget function that doesn't block the UI
 * @param buttonId - Unique identifier for the button
 */
export function trackButtonClick(buttonId: string): void {
  // Fire-and-forget: don't await or handle errors to avoid blocking UI
  fetch('https://collection.apinext.in/forms/metadata', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: '457c9f07-81e4-4d32-9893-f9cc83f1e1bc',
      button_id: buttonId,
      count: 1,
    }),
  }).catch(() => {
    // Silently ignore all errors (CORS, network, etc.)
    // Don't log to console to avoid cluttering
  });
}

