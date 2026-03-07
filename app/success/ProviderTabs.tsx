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
            One-click OAuth for Google Forms is almost ready. For now, use the webhook URL below with a simple Apps Script.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
            <label className="text-xs font-semibold text-gray-600 block mb-1.5">Your Google Forms webhook URL</label>
            <div className="flex gap-2">
              <code className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 break-all font-mono">
                {googleFormsUrl}
              </code>
              <button data-copy={googleFormsUrl} className="copy-btn flex-shrink-0 border border-gray-200 text-gray-600 text-xs px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium" type="button">
                Copy
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            Open the &ldquo;Or add the webhook manually&rdquo; section below for the full Apps Script and setup instructions.
          </p>
        </div>
      )}

      {/* Webflow */}
      {active === "webflow" && (
        <div>
          <p className="text-gray-500 text-sm mb-4">
            Copy this webhook URL and paste it into your Webflow site: Site Settings &rarr; Integrations &rarr; Webhooks &rarr; Add webhook &rarr; choose &ldquo;Form submission&rdquo;.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
            <label className="text-xs font-semibold text-gray-600 block mb-1.5">Your Webflow webhook URL</label>
            <div className="flex gap-2">
              <code className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 break-all font-mono">
                {webflowUrl}
              </code>
              <button data-copy={webflowUrl} className="copy-btn flex-shrink-0 border border-gray-200 text-gray-600 text-xs px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium" type="button">
                Copy
              </button>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            That&apos;s it! Once saved, any form submission on your Webflow site will trigger an AI-drafted reply.
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
