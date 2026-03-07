"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { track } from "../../lib/track";

type FormData = {
  business_name: string;
  business_context: string;
  tone: "professional" | "friendly" | "casual";
  email: string;
};

const STEPS = [
  { id: 1, label: "Business" },
  { id: 2, label: "Context" },
  { id: 3, label: "Tone" },
  { id: 4, label: "Email" },
];

const TONE_OPTIONS = [
  {
    value: "professional" as const,
    label: "Professional",
    desc: "Formal, polished, business-appropriate",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
  },
  {
    value: "friendly" as const,
    label: "Friendly",
    desc: "Warm, approachable, personable",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    value: "casual" as const,
    label: "Casual",
    desc: "Relaxed, conversational, like a peer",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<FormData>({
    business_name: "",
    business_context: "",
    tone: "professional",
    email: "",
  });

  const trackedSteps = useRef(new Set<number>());

  useEffect(() => {
    if (!trackedSteps.current.has(step)) {
      trackedSteps.current.add(step);
      if (step === 1) track("onboarding_start");
      else if (step === 2) track("onboarding_step_2");
    }
  }, [step]);

  function update(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  function canAdvance() {
    if (step === 1) return data.business_name.trim().length > 0;
    if (step === 2) return data.business_context.trim().length > 20;
    if (step === 3) return true;
    if (step === 4) return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    return false;
  }

  const goTo = useCallback((target: number) => {
    setStep(target);
  }, []);

  async function handleSubmit(plan: "free" | "paid") {
    track("onboarding_complete", { plan });
    setLoading(true);
    setError("");
    try {
      if (plan === "free") {
        const res = await fetch("/api/signup-free", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Something went wrong");
        window.location.href = `/success?customer_id=${json.customer_id}`;
      } else {
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const json = await res.json();
        if (!res.ok) throw new Error(json.error || "Something went wrong");
        window.location.href = json.url;
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="/" className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 min-h-[44px] min-w-[44px] justify-center">
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back
            </a>
            <a href="/" className="font-bold text-xl text-indigo-600">FormReply</a>
          </div>
          <span className="text-sm text-gray-400">Step {step} of {STEPS.length}</span>
        </div>
      </div>

      {/* Progress bar with checkmarks */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 pt-3 pb-1">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className={`h-1.5 sm:h-1 flex-1 rounded-full transition-all duration-300 ${
                  s.id < step
                    ? "bg-green-500"
                    : s.id === step
                    ? "bg-indigo-600"
                    : "bg-gray-100"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1 pb-3">
            {STEPS.map((s) => (
              <div key={s.id} className="flex-1 text-center">
                <span className={`text-[11px] sm:text-xs transition-colors inline-flex items-center justify-center gap-1 ${
                  s.id < step
                    ? "text-green-600 font-medium"
                    : s.id === step
                    ? "text-indigo-600 font-medium"
                    : "text-gray-300"
                }`}>
                  {s.id < step && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content with transitions */}
      <div className="flex-1 flex items-start justify-center pt-6 sm:pt-12 px-4 sm:px-6">
        <div key={step} className="w-full max-w-lg animate-[fadeSlideIn_200ms_ease-out]">
          {step === 1 && (
            <StepCard
              title="What's your business called?"
              subtitle="This appears in your AI-drafted replies."
            >
              <input
                type="text"
                placeholder="e.g. Acme Studio, The Coffee Lab"
                value={data.business_name}
                onChange={(e) => update("business_name", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 sm:py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[48px]"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && goTo(2)}
              />
              {data.business_name.length > 0 && data.business_name.trim().length === 0 && (
                <p className="text-sm text-red-500 mt-2">Business name can&apos;t be only spaces</p>
              )}
              {canAdvance() && (
                <p className="text-xs text-gray-400 mt-3 flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[10px] font-mono">Enter</kbd>
                  to continue
                </p>
              )}
            </StepCard>
          )}

          {step === 2 && (
            <StepCard
              title="Describe what your business does"
              subtitle="The AI uses this to write relevant, informed replies. More detail = better drafts."
            >
              <textarea
                placeholder="e.g. We run a boutique web design studio specializing in small e-commerce brands. Our clients are usually founders who want a premium online store but don't know where to start."
                value={data.business_context}
                onChange={(e) => update("business_context", e.target.value)}
                rows={5}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 sm:py-3 text-gray-900 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                autoFocus
              />
              <p className={`text-sm mt-2 transition-colors ${
                data.business_context.length < 20 ? "text-gray-400" : "text-green-600"
              }`}>
                {data.business_context.length < 20
                  ? `${20 - data.business_context.length} more characters needed`
                  : (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Looks good
                    </span>
                  )}
              </p>
            </StepCard>
          )}

          {step === 3 && (
            <StepCard
              title="How should replies sound?"
              subtitle="Pick the tone your AI drafts will use."
            >
              <div className="space-y-3">
                {TONE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => update("tone", option.value)}
                    className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-all duration-200 min-h-[56px] active:scale-[0.98] flex items-start gap-3 ${
                      data.tone === option.value
                        ? "border-indigo-600 bg-indigo-50 shadow-sm shadow-indigo-100"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className={`mt-0.5 transition-colors ${
                      data.tone === option.value ? "text-indigo-600" : "text-gray-400"
                    }`}>
                      {option.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">{option.label}</p>
                      <p className="text-sm text-gray-500">{option.desc}</p>
                    </div>
                    {data.tone === option.value && (
                      <svg className="w-5 h-5 text-indigo-600 ml-auto mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </StepCard>
          )}

          {step === 4 && (
            <StepCard
              title="Where should drafts be delivered?"
              subtitle="We'll send every AI-drafted reply to this inbox."
            >
              <input
                type="email"
                placeholder="you@yourcompany.com"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3.5 sm:py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent min-h-[48px]"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && handleSubmit("paid")}
              />
              {data.email.length > 0 && !canAdvance() && (
                <p className="text-sm text-red-500 mt-2">Please enter a valid email address</p>
              )}

              {/* Live draft preview */}
              {canAdvance() && data.business_name.trim() && (
                <div className="mt-5 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-gray-50 px-3 py-2 border-b border-gray-100 flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                    </div>
                    <span className="text-[10px] text-gray-400 mx-auto">Preview: what you&apos;ll receive</span>
                  </div>
                  <div className="p-3.5 text-xs text-gray-600 space-y-1.5 leading-relaxed">
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mb-2">Draft reply — New Contact Form Submission</p>
                    <p>Hi there,</p>
                    <p>
                      {data.tone === "professional"
                        ? `Thank you for reaching out to ${data.business_name}. We've received your inquiry and would be happy to assist.`
                        : data.tone === "friendly"
                        ? `Thanks so much for getting in touch with ${data.business_name}! We'd love to help you out.`
                        : `Hey! Thanks for hitting up ${data.business_name}. Let's figure this out together.`}
                    </p>
                    <p className="text-gray-400 italic">
                      [AI continues based on the actual submission...]
                    </p>
                    <p className="pt-1 text-gray-500">
                      {data.tone === "professional" ? "Best regards," : data.tone === "friendly" ? "Cheers," : "Talk soon,"}
                      <br />
                      <span className="text-gray-400">[Your name]</span>
                    </p>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500 mt-4">
                Choose your plan below. Free: 5 replies/month, no card required. Starter: 14-day free trial, then $19/month.
              </p>
            </StepCard>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {step > 1 && (
              <button
                onClick={() => goTo(step - 1)}
                className="flex-1 border border-gray-200 text-gray-600 py-3.5 sm:py-3 rounded-xl font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[48px]"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => goTo(step + 1)}
                disabled={!canAdvance()}
                className="flex-1 bg-indigo-600 text-white py-3.5 sm:py-3 rounded-xl font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px]"
              >
                Continue
              </button>
            ) : (
              <div className="flex-1 flex flex-col gap-3">
                <div className="relative">
                  <span className="absolute -top-2.5 left-4 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Recommended
                  </span>
                  <button
                    onClick={() => handleSubmit("paid")}
                    disabled={!canAdvance() || loading}
                    className="w-full bg-indigo-600 text-white py-3.5 sm:py-3.5 rounded-xl font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed ring-2 ring-indigo-600 ring-offset-2 min-h-[48px] flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Setting up...
                      </>
                    ) : (
                      <span className="text-sm sm:text-base">Start 14-day free trial — $19/month after</span>
                    )}
                  </button>
                </div>
                <button
                  onClick={() => handleSubmit("free")}
                  disabled={!canAdvance() || loading}
                  className="w-full border border-gray-200 text-gray-500 py-3.5 sm:py-3 rounded-xl font-medium hover:bg-gray-50 hover:text-gray-700 active:bg-gray-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed min-h-[48px] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Setting up...
                    </>
                  ) : (
                    "Start free — 5 replies/month, no card"
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Reassurance */}
          <div className="text-center mt-6 space-y-1">
            <p className="text-xs text-gray-400">
              Your information is stored securely and never shared.
            </p>
            <p className="text-xs text-gray-300 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              256-bit encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">{title}</h1>
      <p className="text-sm sm:text-base text-gray-500 mb-5 sm:mb-6">{subtitle}</p>
      {children}
    </div>
  );
}
