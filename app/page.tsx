import Link from "next/link";
import Image from "next/image";
import { NavBar } from "./components/NavBar";
import { TryDemo } from "./components/TryDemo";
import { TrackEvent, TrackClick } from "./components/TrackEvent";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FormReply",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: "https://formreply.app",
            description:
              "AI drafts a personalized reply to every form submission — in your inbox in 10 seconds. Works with Typeform, Webflow, and Google Forms.",
            offers: [
              {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                name: "Free",
                description: "5 AI-drafted replies per month",
              },
              {
                "@type": "Offer",
                price: "19",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  billingDuration: "P1M",
                },
                name: "Starter",
                description: "Unlimited form submissions (Typeform, Webflow, Google Forms)",
              },
            ],
          }),
        }}
      />
      <TrackEvent event="landing_view" />
      <NavBar />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Live now &mdash; try the demo below
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.08] mb-5 tracking-tight">
              Stop losing leads to slow replies.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              AI reads each form submission and drafts a personalized response in seconds &mdash; you just review and send. No templates, no copy-paste.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/onboarding"
                className="bg-indigo-600 text-white px-6 py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors text-center shadow-sm shadow-indigo-200"
              >
                Get started free &rarr;
              </Link>
              <a
                href="#try-demo"
                className="border border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl text-base font-medium hover:bg-gray-50 transition-colors text-center"
              >
                See it in action
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">Free plan &middot; 5 replies/month &middot; No card required</p>
          </div>

          {/* Email draft mockup */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
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
                Draft reply &mdash; Sarah Chen (Contact Form)
              </h4>
              <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
                <p>Hi Sarah,</p>
                <p>Thanks for reaching out &mdash; happy to tell you more about our services.</p>
                <p>To give you accurate pricing, could you share a bit more about the project scope? I have availability starting in April, so let&apos;s set up a quick call this week.</p>
                <p>Best,<br /><span className="text-gray-400 text-xs">[Your name]</span></p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">Original submission</p>
                <p className="text-xs text-gray-500 italic">&quot;Hi, I&apos;m interested in your consulting services &mdash; can you share pricing and availability for a project starting in April?&quot; &mdash; Sarah Chen</p>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 bg-indigo-600 text-white text-xs py-2 rounded-lg font-medium text-center">Reply with this draft</div>
                <div className="px-3 py-2 border border-gray-200 text-gray-500 text-xs rounded-lg">Edit first</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility strip — integrations + trust signals combined */}
      <div className="border-y border-gray-100 bg-gray-50 py-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-4">
            {/* Typeform */}
            <Link href="/for/typeform" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.333 0v24h21.334V0H1.333zm12.735 13.31c-.697.394-1.378.811-2.084 1.187-.353.189-.733.334-1.093.503-.245.115-.437.023-.445-.258-.018-.619-.009-1.238-.005-1.857.003-.375.014-.75.013-1.125-.003-.644-.013-1.287-.017-1.93 0-.166.053-.27.206-.345.51-.25 1.015-.51 1.525-.76.67-.328 1.346-.646 2.008-.986.168-.086.306-.072.46.012.484.262.976.512 1.462.77.627.333 1.25.674 1.878 1.005.143.076.204.175.204.338-.005 1.29-.004 2.58-.003 3.871 0 .306-.032.34-.326.178-.822-.454-1.642-.911-2.463-1.367-.442-.246-.883-.494-1.32-.736-.164-.09-.164-.09 0 .3z"/>
              </svg>
              <span className="text-sm font-medium">Typeform</span>
            </Link>
            {/* Google Forms */}
            <Link href="/for/google-forms" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.727 6.727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6.001zm-.545 10.455H7.09v-1.637h7.09v1.637zm2.727-3.273H7.091v-1.636h9.818v1.636zm0-3.272H7.091V9h9.818v1.637zM14.727 0l6 6.727h-6V0z"/>
              </svg>
              <span className="text-sm font-medium">Google Forms</span>
            </Link>
            {/* Webflow */}
            <Link href="/for/webflow" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.803 6.105c-1.457 2.393-4.108 7.523-4.108 7.523s-.075-3.83-2.478-7.523c-1.706-2.622-4.543-3.855-6.717-3.855v15.5c0 .574.32 1.1.832 1.362l.025.013c.238.12.508.183.78.183.292 0 .583-.073.844-.22C8.6 18.254 10 16.914 10 14.498s-.042-5.357-.042-5.357 3.395 9.354 3.595 9.854c.2.5.793.755 1.247.755.454 0 .922-.293 1.13-.653C16.67 17.9 21.5 8.81 21.5 8.81v7.94c0 2.25 1.8 4.5 4.5 4.5"/>
              </svg>
              <span className="text-sm font-medium">Webflow</span>
            </Link>
            {/* Jotform */}
            <Link href="/for/jotform" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.5h-11V15h11v2.5zm0-4h-11v-2.5h11V13.5zm0-4h-11V7h11v2.5z"/>
              </svg>
              <span className="text-sm font-medium">Jotform</span>
            </Link>
            {/* Tally */}
            <Link href="/for/tally" className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 3h2v18H4V3zm5 0h2v18H9V3zm5 0h2v18h-2V3zm5 0h2v18h-2V3z"/>
              </svg>
              <span className="text-sm font-medium">Tally</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="flex flex-col items-center gap-1.5">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span className="text-sm text-gray-600 font-medium">No email access needed</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              <span className="text-sm text-gray-600 font-medium">You review before sending</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <span className="text-sm text-gray-600 font-medium">Setup in under 2 minutes</span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <svg className="w-5 h-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" /></svg>
              <span className="text-sm text-gray-600 font-medium">Spam filtered automatically</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive demo — front and center */}
      <TryDemo />

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">How it works</h2>
        <p className="text-gray-500 text-center mb-14">Three steps. Set up in under 2 minutes.</p>

        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0">1</div>
              <div className="hidden md:block h-px flex-1 bg-gray-200"></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Connect your form</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">Sign up, then connect Typeform or Google Forms via OAuth (one click), or paste a webhook URL for Webflow, Jotform, or Tally. Done in 60 seconds.</p>
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
            <p className="text-gray-500 text-sm leading-relaxed mb-4">The moment a submission arrives, FormReply reads the message and generates a draft in your tone &mdash; usually in under 10 seconds.</p>
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
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">21x</div>
              <p className="text-gray-300 text-sm leading-relaxed">more likely to qualify a lead if you respond within 5 minutes</p>
              <p className="text-gray-500 text-xs mt-3">MIT / InsideSales.com</p>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">42h</div>
              <p className="text-gray-300 text-sm leading-relaxed">average business response time to contact forms</p>
              <p className="text-gray-500 text-xs mt-3">Industry average (Chili Piper)</p>
            </div>
            <div className="bg-indigo-600 rounded-2xl p-8 text-center ring-4 ring-indigo-200">
              <div className="text-5xl sm:text-6xl font-bold text-white mb-3">~10s</div>
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
          <p className="text-gray-500 max-w-xl mx-auto">The DIY approach costs more &mdash; in money and maintenance. Here&apos;s the honest comparison.</p>
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
                <span className="line-through decoration-red-400 decoration-2">$49+/mo + tinkering</span>
              </div>
              <div className="flex justify-between text-gray-500 text-xs">
                <span>Setup time</span>
                <span>30&ndash;60 minutes</span>
              </div>
            </div>
          </div>

          {/* FormReply column */}
          <div className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-500 relative">
            <div className="flex items-center gap-2 mb-6 mt-1">
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
              <div className="mt-3 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2 text-center">
                <span className="text-emerald-700 text-sm font-semibold">Save $30+/mo vs Zapier</span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/onboarding"
                className="block w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center text-sm"
              >
                Start free &mdash; no card required
              </Link>
            </div>
          </div>
        </div>

        {/* Feature comparison table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[400px]">
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
                { feature: "AI-personalized replies", formreply: true, zapier: "requires config", typeform: false },
                { feature: "Adapts to each submission", formreply: true, zapier: "if configured", typeform: false },
                { feature: "Draft review before sending", formreply: true, zapier: "extra step", typeform: false },
                { feature: "Setup time", formreply: "~2 min", zapier: "30\u201360 min", typeform: "~5 min" },
                { feature: "Maintenance", formreply: true, zapier: "Zaps break", typeform: true },
                { feature: "Spam filtering", formreply: true, zapier: "extra cost", typeform: "basic" },
                { feature: "Monthly cost", formreply: "$19", zapier: "$49\u201379", typeform: "Free (no AI)" },
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
          <p className="text-xs text-gray-400 mt-3">Zapier pricing based on Professional plan required for multi-step Zaps with AI actions. Typeform native emails don&apos;t support AI &mdash; every reply is a static template.</p>
        </div>

        <div className="text-center mt-10">
          <Link href="/vs/zapier" className="text-indigo-600 text-sm font-medium hover:underline mr-6">
            Full comparison: FormReply vs Zapier &rarr;
          </Link>
          <Link href="/vs/manual" className="text-indigo-600 text-sm font-medium hover:underline">
            Why manual replies are costing you &rarr;
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 border-y border-gray-200 py-24 overflow-hidden">
        {/* Subtle background glow behind Starter card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg>
              Launch pricing &mdash; locked in for early adopters
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-3">Simple, honest pricing</h2>
          <p className="text-gray-500 text-center mb-2">Start free. Upgrade when you need more.</p>
          <p className="text-sm text-gray-400 text-center mb-14">Less than a coffee a week.</p>

          <div className="grid md:grid-cols-5 gap-8 md:gap-0 items-center">
            {/* Free tier — narrower, visually recessive */}
            <div className="md:col-span-2 bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/80">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Free</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-gray-900">$0</span>
                <span className="text-gray-400 mb-1">/month</span>
              </div>
              <p className="text-sm text-gray-500 mb-7">No card required. No time limit.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "5 AI-drafted replies per month",
                  "Full AI personalization",
                  "Delivered to your inbox",
                  "Spam filtering included",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-gray-500 text-sm">
                    <svg className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/onboarding"
                className="block w-full border border-gray-200 text-gray-500 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Start for free
              </Link>
            </div>

            {/* Starter tier — hero card, wider, elevated, gradient border */}
            <div className="md:col-span-3 relative md:-ml-4 z-10">
              {/* Gradient border wrapper */}
              <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-500 to-violet-600 p-[2px] shadow-2xl shadow-indigo-200/50">
                <div className="bg-white rounded-[22px] p-8 sm:p-10 relative overflow-hidden">
                  {/* Subtle inner glow */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-50 to-transparent rounded-bl-full pointer-events-none" />

                  <div className="relative">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-5">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" /></svg>
                      Most Popular
                    </div>

                    <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2">Starter</p>

                    {/* Price with daily breakdown */}
                    <div className="flex flex-wrap items-end gap-x-3 gap-y-1 mb-1">
                      <span className="text-5xl sm:text-6xl font-bold text-gray-900">$19</span>
                      <span className="text-gray-400 mb-2">/month</span>
                      <span className="text-sm font-medium text-indigo-600/70 mb-2 bg-indigo-50 px-2.5 py-0.5 rounded-full">$0.63/day</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-8">14-day free trial included</p>

                    <ul className="space-y-3.5 mb-8">
                      {[
                        "Unlimited form submissions",
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

                    <TrackClick event="pricing_click" metadata={{ plan: "starter" }}>
                      <Link
                        href="/onboarding"
                        className="block w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3.5 rounded-xl font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all text-center shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30"
                      >
                        Start free 14-day trial
                      </Link>
                    </TrackClick>

                    {/* Satisfaction guarantee */}
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <p className="text-xs text-gray-400">30-day money-back guarantee. Cancel anytime, no questions asked.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-10">
            Need a custom plan? Email <a href="mailto:support@formreply.app" className="text-indigo-600 hover:underline">support@formreply.app</a>
          </p>
        </div>
      </section>

      {/* Why we built this */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why we built FormReply</h2>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            Every contact form submission deserves a real, personal response. But writing them from scratch is a grind &mdash; most businesses take 42 hours to reply. By then, the lead is gone.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm mb-4">
            FormReply was built to close that gap. AI drafts a thoughtful reply in seconds, so you can respond while the conversation is still warm.
          </p>
          <p className="text-gray-400 text-xs">
            FormReply launched March 2026. Works with Typeform, Google Forms, Webflow, Jotform, and Tally. Early adopters get priority support and direct influence on the roadmap.
          </p>
          <p className="text-gray-400 mt-5 text-sm">
            Questions? Email <a href="mailto:support@formreply.app" className="text-indigo-600 hover:underline">support@formreply.app</a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Common questions</h2>
        <div className="space-y-3">
          {[
            {
              q: "Which forms does this work with?",
              a: "Typeform, Google Forms, Webflow, Jotform, and Tally. Typeform connects via OAuth (one click). The others use a webhook URL \u2014 there\u2019s a step-by-step guide for each in the onboarding flow. Takes about 60 seconds to set up.",
            },
            {
              q: "How does it match my tone?",
              a: "During setup you describe your business and choose a tone \u2014 professional, friendly, or casual. The AI uses that context for every draft. You\u2019ll still edit occasionally, but usually it\u2019s just small tweaks.",
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
          ].map((item, i) => (
            <details key={item.q} className="border border-gray-100 rounded-xl group" open={i === 0 ? true : undefined}>
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors list-none">
                {item.q}
                <svg className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="text-gray-500 text-sm leading-relaxed px-5 pb-4">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="bg-indigo-600 rounded-2xl py-10 px-6 sm:py-14 sm:px-8 text-center">
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
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-gray-900">
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/tools/reply-generator" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Reply Generator
            </Link>
            <Link href="/tools/form-spam-checker" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Spam Checker
            </Link>
            <Link href="/vs/zapier" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              vs Zapier
            </Link>
            <Link href="/changelog" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Changelog
            </Link>
            <Link href="/support" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Support
            </Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Privacy &amp; Terms
            </Link>
            <p className="text-sm text-gray-400">&copy; 2026 FormReply</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
