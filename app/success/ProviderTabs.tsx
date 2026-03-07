"use client";

import { useState, useRef, useEffect } from "react";

type Provider = "typeform" | "google" | "webflow" | "jotform" | "tally";

interface ProviderTabsProps {
  oauthStartUrl: string;
  googleOauthStartUrl: string;
  typeformUrl: string;
  webflowUrl: string;
  googleFormsUrl: string;
  jotformUrl: string;
  tallyUrl: string;
}

export default function ProviderTabs({
  oauthStartUrl,
  googleOauthStartUrl,
  typeformUrl,
  webflowUrl,
  googleFormsUrl,
  jotformUrl,
  tallyUrl,
}: ProviderTabsProps) {
  const [active, setActive] = useState<Provider>("typeform");

  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    if (!tabsRef.current) return;
    const providers: Provider[] = ["typeform", "google", "webflow", "jotform", "tally"];
    const idx = providers.indexOf(active);
    const buttons = tabsRef.current.querySelectorAll("button");
    if (buttons[idx]) {
      const btn = buttons[idx] as HTMLElement;
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [active]);

  return (
    <div>
      {/* Tab buttons with sliding indicator */}
      <div className="relative mb-5" ref={tabsRef}>
        <div className="flex gap-2 relative z-10 flex-wrap">
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
          <TabButton
            active={active === "jotform"}
            onClick={() => setActive("jotform")}
            label="Jotform"
          />
          <TabButton
            active={active === "tally"}
            onClick={() => setActive("tally")}
            label="Tally"
          />
        </div>
        <div
          className="absolute top-0 h-full bg-indigo-600 rounded-lg transition-all duration-250 ease-in-out z-0"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />
      </div>

      {/* Tab content with fade transition */}
      <div className="relative">
        <div
          key={active}
          className="animate-[fadeIn_200ms_ease-in-out]"
          style={{ animation: "fadeIn 200ms ease-in-out" }}
        >
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
            <WebhookOnlyTab
              url={webflowUrl}
              label="Webflow"
              instructions='Copy this webhook URL and paste it into your Webflow site: Site Settings &rarr; Integrations &rarr; Webhooks &rarr; Add webhook &rarr; choose "Form submission".'
            />
          )}

          {/* Jotform */}
          {active === "jotform" && (
            <WebhookOnlyTab
              url={jotformUrl}
              label="Jotform"
              instructions="In Jotform: open your form &rarr; Settings &rarr; Integrations &rarr; search for Webhooks &rarr; paste this URL &rarr; Complete Integration."
            />
          )}

          {/* Tally */}
          {active === "tally" && (
            <WebhookOnlyTab
              url={tallyUrl}
              label="Tally"
              instructions="In Tally: open your form &rarr; Integrations tab &rarr; Connect Webhooks &rarr; paste this endpoint URL &rarr; Connect."
            />
          )}
        </div>
      </div>
    </div>
  );
}

function WebhookOnlyTab({
  url,
  label,
  instructions,
}: {
  url: string;
  label: string;
  instructions: string;
}) {
  return (
    <div>
      <p
        className="text-gray-500 text-sm mb-4"
        dangerouslySetInnerHTML={{ __html: instructions }}
      />
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mb-3">
        <label className="text-xs font-semibold text-gray-600 block mb-1.5">
          Your {label} webhook URL
        </label>
        <div className="flex gap-2">
          <code className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 break-all font-mono">
            {url}
          </code>
          <button
            data-copy={url}
            className="copy-btn flex-shrink-0 border border-gray-200 text-gray-600 text-xs px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            type="button"
          >
            Copy
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400">
        That&apos;s it! Once saved, any form submission will trigger an AI-drafted reply.
      </p>
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
      className={`relative z-10 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        active
          ? "text-white"
          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
}
