"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  business_name: string;
  business_context: string;
  tone: "professional" | "friendly" | "casual";
  email: string;
};

const STEPS = [
  { id: 1, label: "Business name" },
  { id: 2, label: "About your business" },
  { id: 3, label: "Reply tone" },
  { id: 4, label: "Your email" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<FormData>({
    business_name: "",
    business_context: "",
    tone: "professional",
    email: "",
  });

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

  async function handleSubmit(plan: "free" | "paid") {
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

      {/* Progress bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 pt-3 pb-1">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className={`h-1.5 sm:h-1 flex-1 rounded-full transition-colors ${
                  s.id <= step ? "bg-indigo-600" : "bg-gray-100"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-1 pb-3">
            {STEPS.map((s) => (
              <div key={s.id} className="flex-1 text-center">
                <span className={`text-[11px] sm:text-xs transition-colors ${
                  s.id <= step ? "text-indigo-600 font-medium" : "text-gray-300"
                }`}>
                  {s.id === 1 ? "Business" : s.id === 2 ? "Context" : s.id === 3 ? "Tone" : "Email"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center pt-6 sm:pt-12 px-4 sm:px-6">
        <div className="w-full max-w-lg">
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
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && setStep(2)}
              />
              {data.business_name.length > 0 && data.business_name.trim().length === 0 && (
                <p className="text-sm text-red-500 mt-2">Business name can&apos;t be only spaces</p>
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
                  : "Looks good"}
              </p>
            </StepCard>
          )}

          {step === 3 && (
            <StepCard
              title="How should replies sound?"
              subtitle="Pick the tone your AI drafts will use."
            >
              <div className="space-y-3">
                {(
                  [
                    {
                      value: "professional",
                      label: "Professional",
                      desc: "Formal, polished, business-appropriate",
                    },
                    {
                      value: "friendly",
                      label: "Friendly",
                      desc: "Warm, approachable, personable",
                    },
                    {
                      value: "casual",
                      label: "Casual",
                      desc: "Relaxed, conversational, like a peer",
                    },
                  ] as const
                ).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => update("tone", option.value)}
                    className={`w-full text-left px-4 py-4 sm:py-4 rounded-xl border-2 transition-colors min-h-[56px] active:scale-[0.98] ${
                      data.tone === option.value
                        ? "border-indigo-600 bg-indigo-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-500">{option.desc}</p>
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
              <p className="text-sm text-gray-500 mt-3">
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
                onClick={() => setStep((s) => s - 1)}
                className="flex-1 border border-gray-200 text-gray-600 py-3.5 sm:py-3 rounded-xl font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[48px]"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
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
          <p className="text-center text-xs text-gray-400 mt-6">
            Your information is stored securely and never shared.
          </p>
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
