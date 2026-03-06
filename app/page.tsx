import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="font-bold text-xl text-indigo-600 tracking-tight">FormReply</span>
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
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full" style={{ animation: "pulse 2s infinite" }} />
          Live — replies drafted in under 15 seconds
        </div>

        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          AI drafts replies to your<br />
          <span className="text-indigo-600">contact form submissions</span>
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Connect your Typeform or Webflow form. Every new submission gets an AI-drafted reply,
          written in your tone, delivered straight to your inbox. Review and send.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start for $12/month →
          </Link>
          <a
            href="#how-it-works"
            className="border border-gray-200 text-gray-600 px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-50 transition-colors"
          >
            See how it works
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-4">No setup fees. Cancel anytime.</p>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">15s</p>
              <p className="text-sm text-gray-500 mt-1">Average reply draft time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">2 min</p>
              <p className="text-sm text-gray-500 mt-1">Setup time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500 mt-1">Submissions covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Works in 3 steps</h2>
        <p className="text-gray-500 text-center mb-12">From signup to first drafted reply in under 5 minutes.</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              n: "1",
              title: "Connect your form",
              body: "Paste your unique webhook URL into Typeform or Webflow. Takes 60 seconds.",
            },
            {
              n: "2",
              title: "Submission arrives",
              body: "Someone fills your form. AI reads it, drafts a personalized reply in your voice.",
            },
            {
              n: "3",
              title: "Review & send",
              body: "The draft lands in your inbox within 15 seconds. Edit if needed, then send.",
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
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Starter</p>
            <div className="flex items-end justify-center gap-1 mb-6">
              <span className="text-5xl font-bold text-gray-900">$12</span>
              <span className="text-gray-400 mb-2">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "Unlimited form submissions",
                "Typeform + Webflow webhooks",
                "AI drafts in your tone",
                "Email delivery in <15 seconds",
                "Spam filtering included",
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
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which form tools are supported?",
              a: "Typeform and Webflow Forms. We generate a unique webhook URL for each — paste it into your form settings.",
            },
            {
              q: "How does it know my tone?",
              a: "During setup you describe your business and choose a tone (professional, friendly, or casual). The AI uses this for every draft.",
            },
            {
              q: "Do I need to review every reply?",
              a: "Yes. FormReply emails you the draft — you read it, edit if needed, then send it yourself. We never send on your behalf.",
            },
            {
              q: "What happens with spam submissions?",
              a: "Our spam filter drops obvious spam and bot submissions automatically. You only receive drafts for real inquiries.",
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
          <h2 className="text-3xl font-bold text-white mb-4">Start replying faster today</h2>
          <p className="text-indigo-200 mb-8">2-minute setup. First draft reply in under 15 seconds.</p>
          <Link
            href="/onboarding"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Get started — $12/month →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <span className="font-bold text-indigo-600">FormReply</span>
          <p className="text-sm text-gray-400">© 2026 FormReply. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
