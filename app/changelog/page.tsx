import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog - What's New at FormReply",
  description:
    "See what we're shipping at FormReply. Latest updates, new features, and improvements to AI-powered form reply automation.",
};

const entries = [
  {
    date: "March 7, 2026",
    title: "Google Forms OAuth Integration",
    items: [
      "Full OAuth flow for Google Forms — connect with one click",
      "No more manual webhook setup for Google Forms users",
      "Auto-detects form fields and maps them to reply context",
    ],
  },
  {
    date: "March 5, 2026",
    title: "Email Open Tracking + Dashboard",
    items: [
      "See when recipients open your draft replies",
      "Open rate visibility on the dashboard",
      '"Powered by FormReply" branding in sent emails for viral growth',
    ],
  },
  {
    date: "March 3, 2026",
    title: "Jotform & Tally Support",
    items: [
      "Added webhook support for Jotform forms",
      "Added webhook support for Tally forms",
      "Now supporting 5 form providers total",
    ],
  },
  {
    date: "March 1, 2026",
    title: "SEO Blog Launch",
    items: [
      "Published 41 SEO-optimized articles on formreply.app/blog",
      "Covering Typeform integrations, comparisons, and use cases",
      "Free tools launched: Reply Generator, Spam Checker, Email Template Generator, Response Time Calculator",
    ],
  },
  {
    date: "February 28, 2026",
    title: "Webflow Webhook Support",
    items: [
      "Added manual webhook integration for Webflow forms",
      "Step-by-step setup guide in onboarding flow",
    ],
  },
  {
    date: "February 25, 2026",
    title: "Spam Filtering",
    items: [
      "AI-powered spam detection on form submissions",
      "Bot submissions automatically filtered",
      "Only real inquiries generate draft replies",
    ],
  },
  {
    date: "February 22, 2026",
    title: "Stripe Integration + Pricing",
    items: [
      "Live payments via Stripe",
      "Free tier: 5 replies/month, no card required",
      "Starter plan: $19/month, unlimited submissions",
      "14-day free trial on Starter plan",
    ],
  },
  {
    date: "February 18, 2026",
    title: "FormReply Launch",
    items: [
      "AI-drafted replies for Typeform submissions",
      "One-click OAuth connect for Typeform",
      "Draft review and one-click send",
      "Personalized replies using GPT-4o-mini",
    ],
  },
];

export default function Changelog() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight">
            <Image src="/logo.png" alt="FormReply" width={28} height={28} />
            <span>FormReply</span>
          </Link>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Get started free
          </Link>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          Building in public
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-5">What&apos;s New</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Everything we ship, as we ship it. No roadmap theater — just real updates from a real product being built in the open.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-12">
            {entries.map((entry, i) => (
              <div key={i} className="relative md:pl-10">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-[3px] border-indigo-500 bg-white hidden md:block" />

                {/* Date badge */}
                <div className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {entry.date}
                </div>

                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-indigo-200 transition-colors">
                  <h2 className="text-lg font-bold text-gray-900 mb-3">{entry.title}</h2>
                  <ul className="space-y-2">
                    {entry.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-sm text-gray-600 leading-relaxed">
                        <span className="text-indigo-500 mt-0.5 shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start replying faster today</h2>
          <p className="text-indigo-200 mb-8">Free plan available. No card required. Cancel anytime.</p>
          <Link
            href="/onboarding"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get started free &rarr;
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
            <Link href="/changelog" className="text-sm text-gray-400 hover:text-gray-600">Changelog</Link>
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600">Support</Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600">Privacy & Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
