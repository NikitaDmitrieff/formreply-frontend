"use client";

import { useState } from "react";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://formreply-backend-production.up.railway.app";

export default function TestSubmissionButton({
  token,
  email,
}: {
  token: string;
  email: string;
}) {
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function sendTest() {
    setState("loading");
    try {
      const res = await fetch(`${BACKEND_URL}/test-submission/${token}`, {
        method: "POST",
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || `HTTP ${res.status}`);
      }
      setState("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-green-900 font-bold">
                Test sent! You&apos;re all set.
              </p>
              <p className="text-sm text-green-700 mt-0.5">
                Check <span className="font-semibold">{email}</span> — your AI-drafted reply should arrive within 15 seconds.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={() => setState("idle")}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
          >
            Send another test
          </button>
          <span className="text-gray-300">|</span>
          <a
            href={`/dashboard?customer_id=${new URLSearchParams(window.location.search).get("customer_id")}`}
            className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors flex items-center gap-1"
          >
            Go to Dashboard
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
        <details>
          <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
            Didn&apos;t receive it?
          </summary>
          <ul className="mt-2 text-sm text-gray-500 space-y-1 ml-4 list-disc">
            <li>Check your spam/junk folder</li>
            <li>Make sure <span className="font-medium">{email}</span> is correct</li>
            <li>Wait 30 seconds — sometimes email delivery takes a moment</li>
            <li>Try sending another test above</li>
          </ul>
        </details>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button
        onClick={sendTest}
        disabled={state === "loading"}
        className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Sending…" : "Send test submission →"}
      </button>
      {state === "error" && (
        <p className="text-sm text-red-600">{errorMsg}</p>
      )}
    </div>
  );
}
