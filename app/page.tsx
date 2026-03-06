import Link from "next/link";
import Image from "next/image";

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

const Partial = ({ label }: { label: string }) => (
  <span className="text-xs text-gray-400">{label}</span>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav — sticky glassmorphism */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200/80 px-6 py-4">
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
              AI drafts a personalized reply to every Typeform submission — in your inbox in 10 seconds.
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

      {/* Speed-to-Lead Statistics */}
      <section className="bg-gray-50 border-y border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Response time wins deals</h2>
            <p className="text-gray-500">The data is clear. Speed matters more than perfection.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">21x</div>
              <p className="text-gray-300 text-sm leading-relaxed">more likely to qualify a lead if you respond within 5 minutes</p>
              <p className="text-gray-500 text-xs mt-3">MIT / InsideSales.com</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">42h</div>
              <p className="text-gray-300 text-sm leading-relaxed">average business response time to contact forms</p>
              <p className="text-gray-500 text-xs mt-3">Industry average (Chili Piper)</p>
            </div>
            <div className="bg-indigo-600 rounded-2xl p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">~10s</div>
              <p className="text-indigo-100 text-sm leading-relaxed">FormReply draft delivery time</p>
              <p className="text-indigo-300 text-xs mt-3">Our product</p>
            </div>
          </div>

          <p className="text-center text-gray-700 text-lg font-medium max-w-2xl mx-auto">
            78% of customers buy from the first company to respond. FormReply makes sure that&apos;s you.
          </p>
        </div>
      </section>

      {/* Cost Stacking Comparison */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why not just use Zapier?</h2>
          <p className="text-gray-500 max-w-xl mx-auto">The DIY approach costs more — in money and maintenance. Here&apos;s the honest comparison.</p>
        </div>

        {/* Cost stacking */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {/* DIY column */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <h3 className="font-bold text-gray-700 text-lg">The DIY way</h3>
            </div>
            <div className="font-mono text-sm space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Zapier Professional plan</span>
                <span className="font-semibold">$49/mo</span>
              </div>
              <p className="text-xs text-gray-400 -mt-2 pl-0">(required for multi-step Zaps with AI)</p>
              <div className="flex justify-between">
                <span>Typeform Basic plan</span>
                <span className="font-semibold">$29/mo</span>
              </div>
              <p className="text-xs text-gray-400 -mt-2">(you already pay this)</p>
              <div className="flex justify-between text-gray-400">
                <span>Prompt engineering</span>
                <span>your time</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Zap maintenance</span>
                <span>your time</span>
              </div>
              <div className="border-t border-gray-300 pt-3 mt-3 flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>$49+/mo + tinkering</span>
              </div>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>Setup time</span>
                <span>30–60 minutes</span>
              </div>
            </div>
          </div>

          {/* FormReply column */}
          <div className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-500 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              The smarter way
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <h3 className="font-bold text-indigo-900 text-lg">The FormReply way</h3>
            </div>
            <div className="font-mono text-sm space-y-3 text-indigo-800">
              <div className="flex justify-between">
                <span>FormReply</span>
                <span className="font-semibold">$19/mo</span>
              </div>
              <div className="flex justify-between text-indigo-400">
                <span>Setup time</span>
                <span>2 minutes</span>
              </div>
              <div className="flex justify-between text-indigo-400">
                <span>Maintenance</span>
                <span>zero</span>
              </div>
              <div className="border-t border-indigo-300 pt-3 mt-3 flex justify-between font-bold text-indigo-900 text-base">
                <span>Total</span>
                <span>$19/mo. That&apos;s it.</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/onboarding"
                className="block w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center text-sm"
              >
                Start free 14-day trial →
              </Link>
            </div>
          </div>
        </div>

        {/* Feature comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 pr-6 text-gray-600 font-semibold w-1/3"></th>
                <th className="py-4 px-4 text-center bg-indigo-50 rounded-t-xl text-indigo-700 font-bold">
                  FormReply
                </th>
                <th className="py-4 px-4 text-center text-gray-600 font-semibold">
                  Zapier + ChatGPT
                </th>
                <th className="py-4 px-4 text-center text-gray-600 font-semibold hidden sm:table-cell">
                  Typeform Native
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                {
                  feature: "AI-personalized replies",
                  formreply: true,
                  zapier: "requires config",
                  typeform: false,
                },
                {
                  feature: "Adapts to each submission",
                  formreply: true,
                  zapier: "if configured",
                  typeform: false,
                },
                {
                  feature: "Draft review before sending",
                  formreply: true,
                  zapier: "extra step",
                  typeform: false,
                },
                {
                  feature: "Setup time",
                  formreply: "~2 min",
                  zapier: "30–60 min",
                  typeform: "~5 min",
                },
                {
                  feature: "Maintenance",
                  formreply: true,
                  zapier: "Zaps break",
                  typeform: true,
                },
                {
                  feature: "Spam filtering",
                  formreply: true,
                  zapier: "extra cost",
                  typeform: "basic",
                },
                {
                  feature: "Monthly cost",
                  formreply: "$19",
                  zapier: "$49–79",
                  typeform: "Free (no AI)",
                },
              ].map((row) => (
                <tr key={row.feature} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 pr-6 text-gray-700 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center bg-indigo-50">
                    {typeof row.formreply === "boolean" ? (row.formreply ? <Check /> : <X />) : <span className="text-sm font-semibold text-indigo-700">{row.formreply}</span>}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.zapier === "boolean" ? (row.zapier ? <Check /> : <X />) : <Partial label={row.zapier} />}
                  </td>
                  <td className="py-4 px-4 text-center hidden sm:table-cell">
                    {typeof row.typeform === "boolean" ? (row.typeform ? <Check /> : <X />) : <Partial label={row.typeform} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs text-gray-400 mt-3">Zapier pricing based on Professional plan required for multi-step Zaps with AI actions. Typeform native emails don&apos;t support AI — every reply is a static template.</p>
        </div>

        <div className="text-center mt-10">
          <Link href="/vs/zapier" className="text-indigo-600 text-sm font-medium hover:underline mr-6">
            Full comparison: FormReply vs Zapier →
          </Link>
          <Link href="/vs/manual" className="text-indigo-600 text-sm font-medium hover:underline">
            Why manual replies are costing you →
          </Link>
        </div>
      </section>

      {/* Built with autonomous AI — moved up, this is the story */}
      <section className="border-t border-gray-100 bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Built by autonomous AI
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">45 cycles. 34 blog posts. 0 human lines of code.</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-6">
            FormReply is built and operated by an autonomous AI team — 14 agents modeled on the thinking patterns of world-class founders, engineers, and marketers. They identified the problem, designed the product, wrote every line of code, and shipped it. This page included.
          </p>
          <p className="text-gray-500 text-sm">
            The problem is obvious: every Typeform contact form submission deserves a real, personal response. Writing them from scratch is a grind. We fixed that.
          </p>
          <p className="text-gray-400 mt-5 text-sm">
            Questions? Email <a href="mailto:support@formreply.app" className="text-indigo-600 hover:underline">support@formreply.app</a>
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Simple pricing</h2>
        <p className="text-gray-500 text-center mb-12">Start free. Upgrade when you&apos;re ready.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free tier */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Free</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-gray-400 mb-2">/month</span>
            </div>
            <p className="text-sm text-gray-500 mb-7">Try it. No card needed.</p>
            <ul className="space-y-3 mb-8">
              {[
                "5 AI-drafted replies per month",
                "Full AI personalization",
                "Delivered to your inbox",
                "Spam filtering included",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-600 text-sm">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/onboarding"
              className="block w-full border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Start for free
            </Link>
          </div>

          {/* Starter tier */}
          <div className="bg-white rounded-2xl p-8 border-2 border-indigo-600 shadow-sm relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most popular
            </div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Starter</p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-bold text-gray-900">$19</span>
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
        </div>

        <p className="text-center text-sm text-gray-400 mt-6">
          Annual plan available: $190/year ($15.83/mo) — <a href="mailto:support@formreply.app" className="text-indigo-600 hover:underline">contact us</a>
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which forms does this work with?",
              a: "Typeform. You connect it via webhook — there's a step-by-step guide in the onboarding flow. Takes about 60 seconds to set up.",
            },
            {
              q: "Can I use this with Google Forms or other form builders?",
              a: "Right now FormReply works with Typeform. We're exploring other form builders — email us which ones you'd want at support@formreply.app.",
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

      {/* Final CTA — contained card, not full-bleed */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="bg-indigo-600 rounded-2xl py-14 px-8 text-center">
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
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Blog
            </Link>
            <Link href="/vs/zapier" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              vs Zapier
            </Link>
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
