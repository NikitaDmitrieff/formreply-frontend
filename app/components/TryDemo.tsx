"use client";

import { useState } from "react";
import Link from "next/link";
import { track } from "../../lib/track";

type DemoState = "idle" | "loading" | "done" | "error";

export function TryDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState("");
  const [state, setState] = useState<DemoState>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    track("demo_start");
    setState("loading");
    setDraft("");
    setError("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong");
        setState("error");
        return;
      }

      setDraft(data.draft);
      track("demo_complete");
      setState("done");
    } catch {
      setError("Network error. Please try again.");
      setState("error");
    }
  }

  const canSubmit = name.trim() && email.trim() && message.trim() && state !== "loading";

  function fillSample() {
    setName("Sarah Chen");
    setEmail("sarah@example.com");
    setMessage("Hi, I'm interested in your consulting services — can you share pricing and availability for a project starting in April?");
  }

  return (
    <section id="try-demo" className="max-w-5xl mx-auto px-6 py-16">
      <div className="text-center mb-8">
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
          Try it yourself
        </p>
        <h2 className="text-2xl font-bold text-gray-900">
          See a real AI draft in seconds
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Enter a sample form submission below. No signup required.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Input form */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Sample submission
            </span>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="demo-name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="demo-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Sarah Chen"
                maxLength={100}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="demo-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="demo-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="sarah@example.com"
                maxLength={200}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>
            <div>
              <label htmlFor="demo-message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="demo-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi, I'm interested in your services..."
                maxLength={1000}
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
              />
            </div>
            {!name && !email && !message && state === "idle" && (
              <button
                type="button"
                onClick={fillSample}
                className="w-full border border-dashed border-indigo-300 text-indigo-600 text-sm font-medium py-2 rounded-lg hover:bg-indigo-50 transition-colors mb-2"
              >
                Fill with sample data
              </button>
            )}
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-white text-sm font-semibold py-2.5 rounded-lg transition-colors"
            >
              {state === "loading" ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Generating draft...
                </span>
              ) : (
                "Generate AI draft"
              )}
            </button>
          </form>
        </div>

        {/* Right: Draft output */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <div className={`w-2 h-2 rounded-full ${state === "done" ? "bg-indigo-500" : "bg-gray-300"}`} />
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              AI Draft Reply
            </span>
            {state === "done" && (
              <span className="ml-auto flex items-center gap-1 bg-indigo-50 border border-indigo-100 rounded-full px-2 py-0.5 text-xs text-indigo-600 font-medium">
                GPT-4o mini
              </span>
            )}
          </div>

          {state === "idle" && (
            <div className="flex-1 flex items-center justify-center text-gray-300 text-sm">
              Your AI-generated draft will appear here
            </div>
          )}

          {state === "loading" && (
            <div className="flex-1 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <svg className="animate-spin h-8 w-8 text-indigo-500" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span className="text-sm text-gray-400">Drafting reply...</span>
              </div>
            </div>
          )}

          {state === "done" && (
            <div className="flex-1 flex flex-col">
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap flex-1">
                {draft}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/onboarding"
                  className="block w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold py-2.5 rounded-lg transition-colors text-center"
                >
                  Get this for your forms — free to start
                </Link>
              </div>
            </div>
          )}

          {state === "error" && (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-red-500 mb-2">{error}</p>
                <button
                  onClick={() => setState("idle")}
                  className="text-sm text-indigo-600 hover:underline"
                >
                  Try again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
