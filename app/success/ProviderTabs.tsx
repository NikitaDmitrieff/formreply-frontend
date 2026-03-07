"use client";

import { useState } from "react";

type Provider = "typeform" | "google" | "webflow";

interface ProviderTabsProps {
  oauthStartUrl: string;
  googleOauthStartUrl: string;
  typeformUrl: string;
  webflowUrl: string;
  googleFormsUrl: string;
}

export default function ProviderTabs({
  oauthStartUrl,
  googleOauthStartUrl,
  typeformUrl,
  webflowUrl,
  googleFormsUrl,
}: ProviderTabsProps) {
  const [active, setActive] = useState<Provider>("typeform");

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 mb-5">
        <TabButton
          active={active === "typeform"}
          onClick={() => setActive("typeform")}
          label="Typeform"
        />
        <TabButton
          active={active === "google"}
          onClick={() => setActive("google")}
          label="Google Forms"
        />
        <TabButton
          active={active === "webflow"}
          onClick={() => setActive("webflow")}
          label="Webflow"
        />
      </div>

      {/* Typeform */}
      {active === "typeform" && (
        <div>
          <p className="text-gray-500 text-sm mb-4">
            Click below to authorize FormReply on Typeform. We&apos;ll create the webhook on all your forms automatically — no copying URLs required.
          </p>
          <a
            href={oauthStartUrl}
            className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm shadow-indigo-200"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Connect with Typeform
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Or use the manual webhook URL in the section below.
          </p>
        </div>
      )}

      {/* Google Forms */}
      {active === "google" && (
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
              OAuth coming soon
            </span>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            One-click OAuth for Google Forms is almost ready. For now, use the manual webhook method — expand the section below and follow the Google Forms instructions.
          </p>
          <span className="inline-flex items-center gap-2.5 bg-gray-300 text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-not-allowed">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Connect with Google Forms
          </span>
          <p className="text-xs text-gray-400 mt-3">
            Use the manual webhook setup below with the Google Forms Apps Script.
          </p>
        </div>
      )}

      {/* Webflow */}
      {active === "webflow" && (
        <div>
          <p className="text-gray-500 text-sm mb-4">
            Webflow uses manual webhook setup. Expand the section below and copy your Webflow webhook URL into Site Settings &rarr; Integrations &rarr; Webhooks.
          </p>
          <p className="text-xs text-gray-400">
            Scroll down to &ldquo;Or add the webhook manually&rdquo; for your Webflow webhook URL and step-by-step instructions.
          </p>
        </div>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-indigo-600 text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
