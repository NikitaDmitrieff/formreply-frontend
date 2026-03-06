import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
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
            Start free trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
              Typeform submission → draft reply in ~10 seconds
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-5">
              Stop writing the same<br />reply from scratch.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When someone fills your Typeform contact form, FormReply reads what they wrote and drafts a personalized reply — delivered to your inbox in seconds. Review it, edit if needed, and send.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/onboarding"
                className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-indigo-700 transition-colors text-center"
              >
                Start free 14-day trial →
              </Link>
              <a
                href="#how-it-works"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors text-center"
              >
                See how it works
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-3">No card required · Cancel anytime</p>
          </div>

          {/* Email draft mockup */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-400 mx-auto">Inbox</span>
            </div>
            <div className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Image src="/logo.png" alt="" width={16} height={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-xs font-semibold text-gray-900">FormReply</span>
                    <span className="text-xs text-gray-400">10s ago</span>
                  </div>
                  <p className="text-xs text-gray-500">drafts@formreply.app</p>
                </div>
              </div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Draft reply — Sarah Chen (Contact Form)
              </h4>
              <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
                <p>Hi Sarah,</p>
                <p>Thanks for reaching out — happy to tell you more about our services.</p>
                <p>To give you accurate pricing, could you share a bit more about the project scope? I have availability starting in April, so let&apos;s set up a quick call this week.</p>
                <p>Best,<br /><span className="text-gray-400 text-xs">[Your name]</span></p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">Original submission</p>
                <p className="text-xs text-gray-500 italic">&quot;Hi, I&apos;m interested in your consulting services — can you share pricing and availability for a project starting in April?&quot; — Sarah Chen</p>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 bg-indigo-600 text-white text-xs py-2 rounded-lg font-medium text-center">Reply with this draft</div>
                <div className="px-3 py-2 border border-gray-200 text-gray-500 text-xs rounded-lg">Edit first</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-gray-100 bg-gray-50 py-4">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
          <span>Integrates with Typeform in &lt; 1 minute</span>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span>AI-generated, never auto-sent</span>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span>Draft in inbox within 10 seconds</span>
          <span className="text-gray-300 hidden sm:block">·</span>
          <span>14-day free trial</span>
        </div>
      </div>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">How it works</h2>
        <p className="text-gray-500 text-center mb-14">Three steps. Set up in under 5 minutes.</p>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0">1</div>
              <div className="hidden md:block h-px flex-1 bg-gray-200"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Connect your Typeform</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">Copy your unique webhook URL from FormReply and paste it into Typeform&apos;s webhook settings. Takes about 60 seconds.</p>
            <div className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 font-mono text-xs text-gray-500 break-all">
              https://api.formreply.app/<span className="text-indigo-600">wh/abc123</span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0">2</div>
              <div className="hidden md:block h-px flex-1 bg-gray-200"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Someone fills your form</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">The moment a submission arrives, FormReply reads the message and generates a draft in your tone — usually in under 10 seconds.</p>
            <div className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-xs">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-700">New submission received</span>
              </div>
              <p className="text-gray-400">Generating draft... done in 8s</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0">3</div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Review and send</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">The draft lands in your inbox. Read it, tweak anything that needs adjusting, and send. FormReply never connects to your email account.</p>
            <div className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-xs flex items-center gap-3">
              <div className="w-8 h-8 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="font-medium text-gray-700">Draft in your inbox</div>
                <div className="text-gray-400">~10 seconds after submission</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Time savings */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">The math is simple</h2>
          <p className="text-gray-400 mb-10">A thoughtful reply to a contact form submission takes 5 minutes on average.</p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-gray-800 rounded-xl p-5">
              <div className="text-3xl font-bold text-white mb-1">20</div>
              <div className="text-sm text-gray-400">submissions/month</div>
            </div>
            <div className="bg-gray-800 rounded-xl p-5">
              <div className="text-3xl font-bold text-white mb-1">100</div>
              <div className="text-sm text-gray-400">minutes of writing</div>
            </div>
            <div className="bg-indigo-600 rounded-xl p-5">
              <div className="text-3xl font-bold text-white mb-1">$9</div>
              <div className="text-sm text-indigo-200">to get it all back</div>
            </div>
          </div>
          <p className="text-gray-500 text-sm">FormReply drafts every reply in seconds. You review, edit if needed, and send.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Simple pricing</h2>
        <p className="text-gray-500 text-center mb-10">One plan. Everything included.</p>

        <div className="bg-white rounded-2xl p-8 border-2 border-indigo-600 shadow-sm">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">14-day free trial · no card required</div>
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Starter</p>
          <div className="flex items-end gap-1 mb-1">
            <span className="text-5xl font-bold text-gray-900">$9</span>
            <span className="text-gray-400 mb-2">/month</span>
          </div>
          <p className="text-sm text-gray-500 mb-7">Less than one billable hour of your time saved monthly</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited Typeform submissions",
              "AI drafts matched to your tone",
              "Delivered to your inbox in ~10 seconds",
              "Spam submissions automatically filtered",
              "You review and send — we never touch your email",
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-gray-700 text-sm">
                <svg className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <Link
            href="/onboarding"
            className="block w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center"
          >
            Start free 14-day trial
          </Link>
          <p className="text-xs text-gray-400 mt-3 text-center">Cancel anytime. No questions asked.</p>
        </div>
      </section>

      {/* Founder section */}
      <section className="border-t border-gray-100 py-16">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="w-14 h-14 bg-indigo-100 rounded-full mx-auto mb-5 flex items-center justify-center text-2xl">
            👋
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Built by a solo founder</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            I built FormReply because I was spending 20 minutes every day rewriting the same contact form replies.
            Every inquiry deserved a real response — but writing them from scratch was a grind.
            FormReply handles the drafting so I can focus on actually helping people. If that resonates, give it a try.
          </p>
          <p className="text-gray-400 mt-5 text-sm">
            Questions? Email <a href="mailto:support@formreply.app" className="text-indigo-600 hover:underline">support@formreply.app</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which forms does this work with?",
              a: "Typeform. You connect it via webhook — there's a step-by-step guide in the onboarding flow. Takes about 60 seconds to set up.",
            },
            {
              q: "How does it match my tone?",
              a: "During setup you describe your business and choose a tone — professional, friendly, or casual. The AI uses that context for every draft. You'll still edit occasionally, but usually it's just small tweaks.",
            },
            {
              q: "Does it send replies automatically?",
              a: "No. FormReply emails you the draft. You review it, change anything that needs adjusting, and send it yourself. We never connect to your email account.",
            },
            {
              q: "What happens with spam submissions?",
              a: "We filter obvious bot and spam submissions automatically. You only receive drafts for real inquiries.",
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your account settings at any time. No questions asked, no notice period required.",
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
          <p className="text-indigo-200 mb-8">14-day free trial. No card required. Cancel anytime.</p>
          <Link
            href="/onboarding"
            className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Start free trial →
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
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Support
            </Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Privacy & Terms
            </Link>
            <p className="text-sm text-gray-400">© 2026 FormReply</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
