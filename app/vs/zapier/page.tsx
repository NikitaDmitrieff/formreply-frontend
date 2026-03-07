import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FormReply vs Zapier for Typeform Auto-Replies | FormReply",
  description:
    "Zapier costs $49/mo and takes an hour to configure. FormReply costs $19/mo and takes 2 minutes. Full comparison for Typeform auto-reply automation.",
};

const Check = () => (
  <svg className="w-5 h-5 text-indigo-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const X = () => (
  <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function VsZapier() {
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

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          Comparison · Typeform auto-replies
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-5">
          FormReply vs Zapier<br />for Typeform auto-replies
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Both can auto-reply to Typeform submissions using AI. But the setup time, cost, and maintenance burden are very different.
        </p>
        <Link
          href="/onboarding"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors"
        >
          Get started free &rarr;
        </Link>
        <p className="text-sm text-gray-400 mt-3">5 free replies/month · No card required · 2-minute setup</p>
      </section>

      {/* TL;DR Summary */}
      <section className="bg-gray-50 border-y border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">The short version</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">Z</span>
                Zapier + ChatGPT
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-red-400">✗</span> $49+/mo (Professional plan required)</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> 30–60 min to configure correctly</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Zaps break — need regular monitoring</li>
                <li className="flex gap-2"><span className="text-red-400">✗</span> Prompt engineering required</li>
                <li className="flex gap-2"><span className="text-yellow-500">~</span> AI replies possible (with config)</li>
              </ul>
            </div>
            <div className="bg-indigo-50 rounded-xl p-6 border-2 border-indigo-500">
              <h3 className="font-bold text-indigo-900 mb-4 flex items-center gap-2">
                <Image src="/logo.png" alt="FormReply" width={18} height={18} />
                FormReply
              </h3>
              <ul className="space-y-2 text-sm text-indigo-800">
                <li className="flex gap-2"><span className="text-green-500">✓</span> $19/mo flat. No hidden tiers.</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> ~2 minutes to set up</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Zero maintenance</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> AI replies built-in, no config</li>
                <li className="flex gap-2"><span className="text-green-500">✓</span> Spam filtering included</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Full comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 pr-6 text-gray-600 font-semibold w-1/3"></th>
                <th className="py-4 px-6 text-center bg-indigo-50 rounded-t-xl text-indigo-700 font-bold">FormReply</th>
                <th className="py-4 px-6 text-center text-gray-600 font-semibold">Zapier + ChatGPT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { feature: "Monthly cost", formreply: "$19/mo", zapier: "$49–79/mo" },
                { feature: "Setup time", formreply: "~2 minutes", zapier: "30–60 minutes" },
                { feature: "AI-personalized replies", formreply: true, zapier: "requires prompt config" },
                { feature: "Per-submission personalization", formreply: true, zapier: "if Zap built correctly" },
                { feature: "Draft review before sending", formreply: true, zapier: "requires extra step" },
                { feature: "Spam filtering", formreply: true, zapier: "extra Zap step + cost" },
                { feature: "Maintenance required", formreply: "None", zapier: "Zaps break regularly" },
                { feature: "Typeform integration", formreply: true, zapier: true },
                { feature: "No prompt engineering needed", formreply: true, zapier: false },
                { feature: "Works out of the box", formreply: true, zapier: false },
              ].map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 pr-6 text-gray-700 font-medium">{row.feature}</td>
                  <td className="py-4 px-6 text-center bg-indigo-50">
                    {row.formreply === true ? <Check /> : <span className="text-sm font-semibold text-indigo-700">{row.formreply}</span>}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {row.zapier === true ? <Check /> : row.zapier === false ? <X /> : <span className="text-xs text-gray-400">{row.zapier}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Who Zapier is right for */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">When Zapier makes sense</h2>
          <p className="text-gray-600 text-center mb-8 leading-relaxed">
            Zapier is the right choice if you need to connect 10+ apps, have an engineer to maintain Zaps, and need custom multi-step automation across your entire stack.
          </p>
          <p className="text-gray-600 text-center leading-relaxed">
            If your goal is specifically <strong>AI-powered Typeform reply drafts in your inbox</strong> — FormReply is a better tool at a fifth of the cost.
          </p>
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
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600">Support</Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600">Privacy & Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
