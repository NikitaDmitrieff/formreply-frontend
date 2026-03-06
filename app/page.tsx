import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 tracking-tight">
            <Image src="/logo.png" alt="FormReply" width={28} height={28} />
            <span>FormReply</span>
          </Link>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Stop writing the same<br />
          <span className="text-indigo-600">reply over and over.</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          You get a contact form submission. You open a blank email. You write the same-ish reply
          you wrote last week. FormReply drafts it for you — you just review and send.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free 14-day trial →
          </Link>
          <a
            href="#how-it-works"
            className="border border-gray-200 text-gray-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-colors"
          >
            See how it works
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-4">14-day free trial · No setup fees · Cancel anytime</p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">How it works</h2>
        <p className="text-gray-500 text-center mb-12">Three steps. No moving parts.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              n: "1",
              title: "Connect your form",
              body: "Paste your unique webhook URL into Typeform. Takes about a minute.",
            },
            {
              n: "2",
              title: "Someone fills your form",
              body: "Within seconds, a draft reply lands in your inbox — written based on what they asked, in your voice.",
            },
            {
              n: "3",
              title: "Review and send",
              body: "Read it over. Edit if something's off. Hit send. Done.",
            },
          ].map((step) => (
            <div key={step.n} className="text-center">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.n}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Simple pricing</h2>
          <p className="text-gray-500 mb-10">One plan. Everything included.</p>

          <div className="bg-white rounded-2xl p-8 border-2 border-indigo-600">
            <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">14-day free trial</div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Starter</p>
            <div className="flex items-end justify-center gap-1 mb-1">
              <span className="text-5xl font-bold text-gray-900">$9</span>
              <span className="text-gray-400 mb-2">/month</span>
            </div>
            <p className="text-xs text-gray-400 mb-5">after free trial · card required · cancel anytime</p>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Unlimited form submissions",
                "Typeform webhook support",
                "AI drafts in your tone",
                "Spam filtering included",
                "Email delivery within seconds",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/onboarding"
              className="block w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Get started now
            </Link>
            <p className="text-xs text-gray-400 mt-3">Cancel anytime. No questions asked.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which forms does this work with?",
              a: "Right now, Typeform. Webflow form support is coming. If you use something else, email me and I'll see what I can do.",
            },
            {
              q: "How does it know my tone?",
              a: "During setup you describe your business and pick a tone — professional, friendly, or casual. The AI uses that for every draft it writes. It's not magic, but it's good enough that you usually only have to make small edits.",
            },
            {
              q: "Does it send replies for me?",
              a: "No. FormReply emails you the draft. You read it, change whatever needs changing, and send it yourself. We never touch your email account.",
            },
            {
              q: "What happens with spam?",
              a: "We filter out obvious bot submissions automatically. You only get drafts for real inquiries.",
            },
          ].map((item) => (
            <div key={item.q} className="border-b border-gray-100 pb-6">
              <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start replying faster</h2>
          <p className="text-indigo-200 mb-8">14-day free trial. Cancel anytime.</p>
          <Link
            href="/onboarding"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Start free 14-day trial →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-indigo-600">
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Support
            </Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Privacy & Terms
            </Link>
            <p className="text-sm text-gray-400">© 2026 FormReply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
