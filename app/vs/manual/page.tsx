import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stop Writing Form Replies From Scratch | FormReply",
  description:
    "Manual form replies cost you 100 minutes a month. FormReply cuts that to under 5 minutes. See the math.",
};

export default function VsManual() {
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
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-3 py-1 rounded-full mb-6">
          The hidden cost of manual replies
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-5">
          Stop writing form replies<br />from scratch.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          Every contact form submission deserves a real response. But writing 20 personal replies a month costs you 100 minutes of focused work — every single month.
        </p>
        <Link
          href="/onboarding"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors"
        >
          Get started free &rarr;
        </Link>
        <p className="text-sm text-gray-400 mt-3">5 free replies/month · No card required · 2-minute setup</p>
      </section>

      {/* The real cost */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white text-center mb-14">What manual replies actually cost you</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-6">The manual way</h3>
              <div className="space-y-4">
                {[
                  { step: "Read the submission", time: "30s" },
                  { step: "Open compose window", time: "10s" },
                  { step: "Think about what to write", time: "60s" },
                  { step: "Draft the reply", time: "2–3 min" },
                  { step: "Re-read and edit", time: "60s" },
                ].map((item) => (
                  <div key={item.step} className="flex justify-between items-center border-b border-gray-700 pb-4">
                    <span className="text-gray-300 text-sm">{item.step}</span>
                    <span className="text-gray-500 text-sm font-mono">{item.time}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-red-400 font-semibold">Per reply</span>
                  <span className="text-red-400 font-semibold font-mono">~5 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-red-300 text-sm">×20 replies/month</span>
                  <span className="text-red-300 font-semibold font-mono">100 min/mo</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-indigo-400 text-xs uppercase tracking-wider font-semibold mb-6">With FormReply</h3>
              <div className="space-y-4">
                {[
                  { step: "Submission arrives", time: "0s" },
                  { step: "FormReply generates draft", time: "~8s" },
                  { step: "You review the draft", time: "20s" },
                  { step: "Edit if needed (usually not)", time: "0–30s" },
                  { step: "Send", time: "5s" },
                ].map((item) => (
                  <div key={item.step} className="flex justify-between items-center border-b border-indigo-900 pb-4">
                    <span className="text-indigo-100 text-sm">{item.step}</span>
                    <span className="text-indigo-400 text-sm font-mono">{item.time}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-green-400 font-semibold">Per reply</span>
                  <span className="text-green-400 font-semibold font-mono">~30s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-green-300 text-sm">×20 replies/month</span>
                  <span className="text-green-300 font-semibold font-mono">10 min/mo</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-indigo-900 rounded-2xl p-8 text-center">
            <p className="text-white text-xl font-bold mb-2">You save ~90 minutes every month.</p>
            <p className="text-indigo-300">At $50/hr, that&apos;s $75 of your time back — for $19/mo.</p>
          </div>
        </div>
      </section>

      {/* Speed-to-lead */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">But time isn&apos;t the only cost</h2>
        <p className="text-gray-500 text-center mb-12 leading-relaxed">
          Manual replies aren&apos;t just slow — they&apos;re late. The average business takes 42 hours to reply to a contact form. Most deals are decided in minutes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-white mb-2">21x</div>
            <p className="text-gray-400 text-sm">more likely to qualify a lead with a 5-minute response</p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-white mb-2">78%</div>
            <p className="text-gray-400 text-sm">of customers buy from the first company to respond</p>
          </div>
          <div className="bg-indigo-600 rounded-2xl p-6 text-center">
            <div className="text-5xl font-bold text-white mb-2">~10s</div>
            <p className="text-indigo-100 text-sm">FormReply draft delivery time</p>
          </div>
        </div>
      </section>

      {/* How FormReply works */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How FormReply works</h2>
          <p className="text-gray-500 mb-12">It&apos;s not magic. It&apos;s just a better workflow.</p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { n: 1, title: "Connect Typeform", desc: "Paste your webhook URL into Typeform settings. Takes 60 seconds." },
              { n: 2, title: "Submission arrives", desc: "FormReply reads it and generates a personalized draft in your tone." },
              { n: 3, title: "You review and send", desc: "The draft lands in your inbox. Read, tweak if needed, send. Done." },
            ].map((step) => (
              <div key={step.n}>
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-bold mb-4">{step.n}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
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
            <Link href="/vs/zapier" className="text-sm text-gray-400 hover:text-gray-600">vs Zapier</Link>
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600">Support</Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600">Privacy & Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
