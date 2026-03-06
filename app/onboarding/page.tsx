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

  async function handleSubmit() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong");
      window.location.href = json.url;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <a href="/" className="font-bold text-xl text-indigo-600">FormReply</a>
          <span className="text-sm text-gray-400">Step {step} of {STEPS.length}</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex gap-1 py-3">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  s.id <= step ? "bg-indigo-600" : "bg-gray-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center pt-12 px-6">
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && setStep(2)}
              />
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                autoFocus
              />
              <p className="text-sm text-gray-400 mt-2">
                {data.business_context.length < 20
                  ? `At least ${20 - data.business_context.length} more characters`
                  : "✓ Looks good"}
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
                    className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-colors ${
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
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoFocus
                onKeyDown={(e) => e.key === "Enter" && canAdvance() && handleSubmit()}
              />
              <p className="text-sm text-gray-500 mt-3">
                After this step, you&apos;ll start your free 14-day trial (card required, then $9/month). Then we&apos;ll give you your webhook URLs.
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
                className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                disabled={!canAdvance()}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvance() || loading}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {loading ? "Redirecting to payment…" : "Proceed to payment →"}
              </button>
            )}
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
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-500 mb-6">{subtitle}</p>
      {children}
    </div>
  );
}
