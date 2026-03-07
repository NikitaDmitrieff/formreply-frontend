const EVENTS_URL =
  "https://formreply-backend-production.up.railway.app/analytics/events";

let sessionId: string | null = null;

function getSessionId(): string {
  if (sessionId) return sessionId;
  sessionId = Math.random().toString(36).slice(2) + Date.now().toString(36);
  return sessionId;
}

export function track(
  event: string,
  metadata?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  if (/bot|crawler/i.test(navigator.userAgent)) return;

  const payload = JSON.stringify({
    event,
    path: window.location.pathname,
    metadata: metadata ?? {},
    session_id: getSessionId(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      EVENTS_URL,
      new Blob([payload], { type: "application/json" })
    );
  } else {
    fetch(EVENTS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  }
}
