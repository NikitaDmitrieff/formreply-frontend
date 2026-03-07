"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TONES = ["Professional", "Friendly", "Casual"] as const;
type Tone = (typeof TONES)[number];

function generateReply(
  senderName: string,
  message: string,
  businessName: string,
  tone: Tone
): string {
  const name = senderName.split(" ")[0] || "there";
  const hasPricing =
    /pric|cost|rate|quote|budget|how much/i.test(message);
  const hasAvailability =
    /avail|when|timeline|schedule|start|deadline/i.test(message);
  const hasQuestion = /\?/.test(message) || /can you|could you|do you|is it|are you/i.test(message);
  const hasPartnership =
    /partner|collaborat|work together|team up/i.test(message);
  const hasSupport =
    /help|issue|problem|broken|not working|bug|error/i.test(message);

  const greetings: Record<Tone, string> = {
    Professional: `Dear ${name},`,
    Friendly: `Hi ${name}!`,
    Casual: `Hey ${name},`,
  };

  const thanks: Record<Tone, string> = {
    Professional: "Thank you for reaching out to us.",
    Friendly: "Thanks so much for getting in touch!",
    Casual: "Thanks for the message!",
  };

  const parts: string[] = [greetings[tone], "", thanks[tone]];

  if (hasSupport) {
    parts.push(
      tone === "Professional"
        ? "I understand you're experiencing an issue, and I want to help resolve it as quickly as possible. Could you share a few more details so I can look into this right away?"
        : tone === "Friendly"
        ? "Sorry to hear you're running into trouble! Let me help sort this out. Could you share a bit more about what's happening so I can dig in?"
        : "No worries, let's get this sorted. Can you tell me a bit more about what's going on?"
    );
  } else if (hasPartnership) {
    parts.push(
      tone === "Professional"
        ? `We appreciate your interest in exploring a collaboration${businessName ? ` with ${businessName}` : ""}. We'd be happy to discuss how we might work together.`
        : tone === "Friendly"
        ? `Love that you're interested in working together${businessName ? ` with ${businessName}` : ""}! Let's explore what that could look like.`
        : `Cool that you want to team up${businessName ? ` with ${businessName}` : ""}! Let's chat about it.`
    );
  } else {
    parts.push(
      tone === "Professional"
        ? `Thank you for your interest${businessName ? ` in ${businessName}` : ""}. I'd be happy to provide you with more information.`
        : tone === "Friendly"
        ? `Great to hear from you${businessName ? ` about ${businessName}` : ""}! Happy to help with whatever you need.`
        : `Glad you reached out${businessName ? ` about ${businessName}` : ""}! Let me fill you in.`
    );
  }

  if (hasPricing) {
    parts.push(
      tone === "Professional"
        ? "Regarding pricing, I'd like to understand your specific requirements first so I can provide you with the most accurate quote. Could you share more about the scope of what you're looking for?"
        : tone === "Friendly"
        ? "On pricing — I'd love to give you numbers that actually match what you need. Could you share a bit more about the scope so I can put together the right quote?"
        : "For pricing, it really depends on what you need. Tell me a bit more about what you're after and I'll get you a number."
    );
  }

  if (hasAvailability) {
    parts.push(
      tone === "Professional"
        ? "As for timing, I have availability in the coming weeks and would be glad to align on a schedule that works for you."
        : tone === "Friendly"
        ? "Timeline-wise, I've got some availability coming up soon. Let's find a time that works for both of us!"
        : "I've got some open slots coming up — let's find something that works."
    );
  }

  if (hasQuestion && !hasPricing && !hasAvailability && !hasSupport) {
    parts.push(
      tone === "Professional"
        ? "I'd be happy to address your questions in detail. Would it be helpful to schedule a brief call to discuss further?"
        : tone === "Friendly"
        ? "Great questions! Would a quick call be helpful so I can walk you through everything?"
        : "Good questions — want to hop on a quick call so I can explain everything?"
    );
  }

  if (!hasQuestion && !hasPricing && !hasAvailability && !hasSupport && !hasPartnership) {
    parts.push(
      tone === "Professional"
        ? "Would you be available for a brief call this week to discuss this further? I'd be happy to provide more details."
        : tone === "Friendly"
        ? "Would you be up for a quick chat this week? I'd love to tell you more!"
        : "Want to grab a quick call this week? I can fill you in on everything."
    );
  }

  const signoffs: Record<Tone, string> = {
    Professional: "\nBest regards,\n[Your name]",
    Friendly: "\nBest,\n[Your name]",
    Casual: "\nCheers,\n[Your name]",
  };

  parts.push(signoffs[tone]);

  return parts.join("\n\n");
}

export default function ReplyGeneratorPage() {
  const [senderName, setSenderName] = useState("");
  const [message, setMessage] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [tone, setTone] = useState<Tone>("Professional");
  const [reply, setReply] = useState("");
  const [copied, setCopied] = useState(false);
  const [generating, setGenerating] = useState(false);

  const handleGenerate = () => {
    if (!message.trim()) return;
    setGenerating(true);
    setTimeout(() => {
      setReply(
        generateReply(senderName || "there", message, businessName, tone)
      );
      setGenerating(false);
    }, 800);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(reply);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTryExample = () => {
    setSenderName("Sarah Chen");
    setMessage(
      "Hi, I'm interested in your consulting services. Can you share pricing and availability for a project starting in April?"
    );
    setBusinessName("");
    setReply("");
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-900">
            <Image src="/logo.png" alt="FormReply" width={24} height={24} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors hidden sm:block"
            >
              See demo
            </Link>
            <Link
              href="/onboarding"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Free tool — no signup required
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Contact Form Reply Generator
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          Paste a contact form submission. Get a ready-to-send reply in seconds.
          Choose your tone, copy, and send.
        </p>
      </section>

      {/* Tool */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          {/* Input form */}
          <div className="space-y-4 mb-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sender&apos;s name
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Sarah Chen"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your business name
                  <span className="text-gray-400 font-normal"> (optional)</span>
                </label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Acme Consulting"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Form submission message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Paste the message from your contact form submission here..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
              <button
                onClick={handleTryExample}
                className="text-xs text-indigo-600 hover:text-indigo-700 font-medium mt-1"
              >
                Try an example →
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reply tone
              </label>
              <div className="flex gap-2">
                {TONES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      tone === t
                        ? "bg-indigo-600 text-white"
                        : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!message.trim() || generating}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {generating ? "Generating reply..." : "Generate Reply"}
          </button>

          {/* Output */}
          {reply && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-gray-700">
                  Your reply draft
                </h3>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 text-xs font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                  </svg>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">
                  {reply}
                </pre>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      {reply && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Want this for every Typeform submission — automatically?
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              FormReply connects to your Typeform and sends you an AI-drafted
              reply for every submission — personalized, in your tone, delivered
              to your inbox in ~10 seconds. No copy-pasting needed.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              Start free 14-day trial →
            </Link>
            <p className="text-xs text-gray-400 mt-3">
              No card required · 5 free replies/month forever
            </p>
          </div>
        </section>
      )}

      {/* SEO content */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to write better contact form replies
          </h2>
          <div className="prose prose-gray prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              Responding to contact form submissions quickly and personally is
              one of the highest-leverage things a business can do. Research
              shows companies that respond within 5 minutes are{" "}
              <strong>21x more likely</strong> to qualify a lead than those who
              wait 30 minutes.
            </p>
            <p>
              Yet the average business takes <strong>42 hours</strong> to
              respond to a contact form. That&apos;s nearly two days where your
              potential customer is shopping competitors.
            </p>
            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Tips for great contact form replies
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Respond fast.</strong> Speed matters more than
                perfection. A good reply in 5 minutes beats a perfect reply in
                5 hours.
              </li>
              <li>
                <strong>Use their name.</strong> Personal touches show you read
                their message and care about their specific situation.
              </li>
              <li>
                <strong>Address their question directly.</strong> Don&apos;t
                send a generic template — reference what they actually asked
                about.
              </li>
              <li>
                <strong>Include a clear next step.</strong> Suggest a call, send
                a link, or ask a clarifying question. Don&apos;t leave it open-ended.
              </li>
              <li>
                <strong>Keep it concise.</strong> Two to four paragraphs is
                ideal. Respect their time.
              </li>
            </ul>
            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Why use a reply generator?
            </h3>
            <p>
              Writing personalized replies to every form submission takes time —
              especially when you receive dozens per week. A reply generator
              gives you a strong starting draft that you can tweak and send in
              seconds instead of minutes.
            </p>
            <p>
              This free tool creates a contextual reply based on the
              sender&apos;s message. For fully automated, AI-powered replies
              delivered straight to your inbox,{" "}
              <Link
                href="/onboarding"
                className="text-indigo-600 hover:underline font-medium"
              >
                try FormReply free
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tools/reply-generator"
              className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              Reply Generator
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/privacy-and-tos"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy & Terms
            </Link>
            <p className="text-sm text-gray-400">&copy; 2026 FormReply</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
