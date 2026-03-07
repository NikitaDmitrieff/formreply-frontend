import Link from "next/link";
import Image from "next/image";
import { NavBar } from "../components/NavBar";

const tools = [
  {
    title: "Contact Form Reply Generator",
    description:
      "Paste a contact form submission and get a ready-to-send reply instantly. Choose professional, friendly, or casual tone.",
    href: "/tools/reply-generator",
    badge: "Reply faster",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    title: "Form Spam Checker",
    description:
      "Paste a form submission and instantly check if it's spam. Get a detailed spam score with explanations for each signal.",
    href: "/tools/form-spam-checker",
    badge: "Filter spam",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    title: "Lead Response Time Calculator",
    description:
      "How fast should you reply to leads? Compare your response time to industry benchmarks and see the revenue impact of faster replies.",
    href: "/tools/response-time-calculator",
    badge: "Speed to lead",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Email Template Generator",
    description:
      "Generate professional reply templates for common contact form inquiries. Choose inquiry type and tone, get 3 ready-to-use templates instantly.",
    href: "/tools/email-template-generator",
    badge: "Save time",
    icon: (
      <svg
        className="w-8 h-8 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
];

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          100% free — no signup required
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Free Contact Form Tools
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          Everything you need to manage contact form submissions — from filtering
          spam to crafting replies. All tools run in your browser, no account needed.
        </p>
      </section>

      {/* Tool cards */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group block bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-indigo-300 hover:bg-indigo-50/30 transition-all"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-indigo-100 flex items-center justify-center">
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-700 transition-colors">
                      {tool.title}
                    </h2>
                    <span className="shrink-0 text-xs font-medium bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full">
                      {tool.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-indigo-600 group-hover:text-indigo-700 transition-colors">
                    Try it free
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Want to automate all of this?
          </h2>
          <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
            FormReply connects to your Typeform, filters out spam, and
            auto-drafts personalized replies to real submissions — delivered to
            your inbox in ~10 seconds. No manual work.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
          >
            Start free 14-day trial
          </Link>
          <p className="text-xs text-gray-400 mt-3">
            No card required &middot; 5 free replies/month forever
          </p>
        </div>
      </section>

      {/* SEO content */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why use free contact form tools?
          </h2>
          <div className="prose prose-gray prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              Managing contact form submissions is one of the most
              time-consuming parts of running a website. Between filtering out
              spam, crafting personalized replies, and keeping response times
              low, it&apos;s easy to fall behind — and every slow reply is a
              lost lead.
            </p>
            <p>
              These free tools help you handle the biggest pain points: identifying
              spam submissions, generating quick replies, benchmarking your response
              time, and creating reusable email templates. All tools run entirely in
              your browser — no data is sent to any server.
            </p>
            <p>
              For fully automated contact form management — spam filtering, AI-drafted
              replies, and instant inbox delivery —{" "}
              <Link
                href="/onboarding"
                className="text-indigo-600 hover:underline font-medium"
              >
                try FormReply free
              </Link>
              . It connects to your Typeform and handles everything automatically.
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
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Reply Generator
            </Link>
            <Link
              href="/tools/form-spam-checker"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Spam Checker
            </Link>
            <Link
              href="/tools/response-time-calculator"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Response Time
            </Link>
            <Link
              href="/tools/email-template-generator"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Email Templates
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
