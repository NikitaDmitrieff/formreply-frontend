import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";

/* ------------------------------------------------------------------ */
/*  Provider data                                                      */
/* ------------------------------------------------------------------ */

type ProviderKey = "typeform" | "google-forms" | "jotform" | "tally" | "webflow";

interface ProviderData {
  name: string;
  title: string;
  integration: "oauth" | "webhook";
  integrationLabel: string;
  description: string;
  keywords: string[];
  heroSubtitle: string;
  steps: { title: string; description: string }[];
  benefits: string[];
  faqs: { q: string; a: string }[];
}

const PROVIDERS: Record<ProviderKey, ProviderData> = {
  typeform: {
    name: "Typeform",
    title: "Typeform Auto-Reply with AI",
    integration: "oauth",
    integrationLabel: "OAuth (one-click connect)",
    description:
      "Auto-reply to every Typeform submission with a personalized AI-drafted email. Connect in one click, get drafts in 10 seconds. $19/mo.",
    keywords: [
      "Typeform auto reply",
      "Typeform AI response",
      "Typeform automated email reply",
      "Typeform autoresponder",
    ],
    heroSubtitle:
      "Connect Typeform in one click. Every submission gets a personalized AI-drafted reply in your inbox within 10 seconds.",
    steps: [
      {
        title: "Connect Typeform with one click",
        description:
          "Sign up and click \"Connect Typeform.\" OAuth handles everything \u2014 no API keys, no webhook URLs. Done in 30 seconds.",
      },
      {
        title: "A lead fills out your form",
        description:
          "The moment someone submits your Typeform, FormReply reads the message and drafts a personalized reply matched to your tone.",
      },
      {
        title: "Review and send from your inbox",
        description:
          "The draft lands in your email in ~10 seconds. Read it, tweak if needed, and hit send. We never touch your email account.",
      },
    ],
    benefits: [
      "One-click OAuth setup \u2014 no API keys or webhook configuration needed",
      "Works with all Typeform form types: contact, lead gen, surveys, quizzes",
      "Supports Typeform conditional logic \u2014 AI reads the full submission context",
      "Most popular integration \u2014 battle-tested with thousands of submissions",
    ],
    faqs: [
      {
        q: "Does it work with Typeform's free plan?",
        a: "Yes. FormReply works with any Typeform plan, including free. The only requirement is that your form collects at least a name and message field.",
      },
      {
        q: "How does the Typeform connection work?",
        a: "We use Typeform's official OAuth flow. Click connect, authorize FormReply, and we'll automatically receive new submissions. No manual webhook setup required.",
      },
      {
        q: "Can I use it with multiple Typeform forms?",
        a: "Yes. Once connected, you can select which forms to auto-reply to from your FormReply dashboard. Each form can have its own tone settings.",
      },
      {
        q: "What if I already use Zapier for Typeform?",
        a: "FormReply replaces the Zapier + ChatGPT combo for auto-replies. It's simpler ($19 vs $49+/mo), faster to set up (2 min vs 30-60 min), and requires zero maintenance.",
      },
    ],
  },
  "google-forms": {
    name: "Google Forms",
    title: "Google Forms Auto-Reply with AI",
    integration: "oauth",
    integrationLabel: "OAuth (one-click connect)",
    description:
      "Auto-reply to Google Forms submissions with personalized AI-drafted emails. Connect your Google account in one click. $19/mo.",
    keywords: [
      "Google Forms auto reply",
      "Google Forms AI response",
      "Google Forms automated email reply",
      "Google Forms autoresponder",
    ],
    heroSubtitle:
      "Connect your Google account in one click. Every Google Forms submission gets a personalized AI-drafted reply delivered to your inbox.",
    steps: [
      {
        title: "Connect Google Forms via OAuth",
        description:
          "Sign up and click \"Connect Google Forms.\" Authorize with your Google account \u2014 no spreadsheet add-ons, no Apps Script. Done in 30 seconds.",
      },
      {
        title: "Someone submits your form",
        description:
          "When a new response arrives, FormReply reads the submission and generates a contextual, personalized draft reply in under 10 seconds.",
      },
      {
        title: "Review and send",
        description:
          "The draft appears in your inbox. Read it, make any edits, and send. FormReply never accesses your Gmail \u2014 it only reads form submissions.",
      },
    ],
    benefits: [
      "One-click Google OAuth \u2014 no Apps Script or Google Sheets add-ons required",
      "Works with any Google Forms response type: short text, paragraphs, multiple choice",
      "Handles Google Forms with file uploads and complex question types",
      "Free to use with any Google Workspace or personal Google account",
    ],
    faqs: [
      {
        q: "Does FormReply access my Gmail?",
        a: "No. FormReply only requests access to Google Forms responses. We never read, send, or access your Gmail. The draft reply is sent to your inbox as a regular email from FormReply.",
      },
      {
        q: "Do I need Google Workspace?",
        a: "No. FormReply works with both personal Google accounts and Google Workspace accounts. Any Google Forms user can connect.",
      },
      {
        q: "Can I auto-reply to quiz responses too?",
        a: "Yes. FormReply reads the full submission including quiz scores, and the AI draft incorporates that context into its reply.",
      },
      {
        q: "How is this different from Google Forms' built-in email notifications?",
        a: "Google Forms can notify you of new submissions, but it can't draft personalized replies. FormReply generates a unique, AI-written response for each submission.",
      },
    ],
  },
  jotform: {
    name: "Jotform",
    title: "Jotform Auto-Reply with AI",
    integration: "webhook",
    integrationLabel: "Webhook (paste URL)",
    description:
      "Auto-reply to Jotform submissions with personalized AI-drafted emails. Paste a webhook URL and start getting drafts in 10 seconds. $19/mo.",
    keywords: [
      "Jotform auto reply",
      "Jotform AI response",
      "Jotform automated email reply",
      "Jotform autoresponder",
    ],
    heroSubtitle:
      "Paste a webhook URL into Jotform's settings. Every submission gets a personalized AI-drafted reply in your inbox within 10 seconds.",
    steps: [
      {
        title: "Copy your webhook URL",
        description:
          "Sign up for FormReply and copy your unique webhook URL. Then paste it into Jotform's Settings > Integrations > Webhooks. Takes about 60 seconds.",
      },
      {
        title: "A submission arrives",
        description:
          "Jotform sends the submission data to FormReply instantly. Our AI reads every field and drafts a personalized reply in your tone.",
      },
      {
        title: "Review and send",
        description:
          "The draft lands in your inbox in ~10 seconds. Review, edit if needed, and send. No connection to your email required.",
      },
    ],
    benefits: [
      "Works with all Jotform plans including the free tier",
      "Supports all Jotform field types: text, file uploads, signatures, payments",
      "Compatible with Jotform conditional logic and multi-page forms",
      "Webhook setup takes under 60 seconds with our step-by-step guide",
    ],
    faqs: [
      {
        q: "How do I set up the Jotform webhook?",
        a: "In Jotform, go to Settings > Integrations > Webhooks. Paste the FormReply webhook URL we provide. That's it \u2014 new submissions will start flowing in immediately.",
      },
      {
        q: "Does it work with Jotform's free plan?",
        a: "Yes. Jotform's free plan supports webhooks, so FormReply works regardless of which Jotform plan you're on.",
      },
      {
        q: "Can I use it with Jotform payment forms?",
        a: "Yes. FormReply reads the full submission including payment details, and the AI can reference order information in its reply draft.",
      },
      {
        q: "What if Jotform already sends autoresponder emails?",
        a: "Jotform's autoresponder sends the same static template to everyone. FormReply drafts a unique, personalized reply based on what each person actually wrote.",
      },
    ],
  },
  tally: {
    name: "Tally",
    title: "Tally Auto-Reply with AI",
    integration: "webhook",
    integrationLabel: "Webhook (paste URL)",
    description:
      "Auto-reply to Tally form submissions with personalized AI-drafted emails. Paste a webhook URL and start in under 2 minutes. $19/mo.",
    keywords: [
      "Tally auto reply",
      "Tally AI response",
      "Tally form automated email reply",
      "Tally autoresponder",
    ],
    heroSubtitle:
      "Paste a webhook URL into Tally's integration settings. Every form submission gets a personalized AI-drafted reply in your inbox.",
    steps: [
      {
        title: "Copy your webhook URL",
        description:
          "Sign up for FormReply and copy your unique webhook URL. In Tally, go to your form's Integrations tab and add a Webhook with the URL. Done in 60 seconds.",
      },
      {
        title: "Someone fills out your Tally form",
        description:
          "Tally fires the webhook on every submission. FormReply reads the data and drafts a personalized reply matched to your business tone.",
      },
      {
        title: "Review and send",
        description:
          "The AI draft arrives in your inbox in ~10 seconds. Review it, make any changes, and reply. FormReply never touches your email account.",
      },
    ],
    benefits: [
      "Works with Tally's free plan \u2014 webhooks are available on all tiers",
      "Supports all Tally question types including conditional logic blocks",
      "Perfect for Tally users who love the simplicity but need smarter follow-ups",
      "No code required \u2014 just paste a URL and you're done",
    ],
    faqs: [
      {
        q: "Does Tally support webhooks on the free plan?",
        a: "Yes. Tally includes webhook integrations on all plans, including free. You can connect FormReply without upgrading your Tally account.",
      },
      {
        q: "How do I add the webhook in Tally?",
        a: "Open your form in Tally, click the Integrations tab, select Webhook, and paste the FormReply URL. New submissions will start arriving immediately.",
      },
      {
        q: "Can I use FormReply with multiple Tally forms?",
        a: "Yes. Each Tally form gets its own webhook URL from FormReply. You can connect as many forms as you need.",
      },
      {
        q: "Why not just use Tally's built-in email notifications?",
        a: "Tally can notify you of submissions, but it doesn't draft replies. FormReply gives you a ready-to-send personalized response for each submission.",
      },
    ],
  },
  webflow: {
    name: "Webflow",
    title: "Webflow Form Auto-Reply with AI",
    integration: "webhook",
    integrationLabel: "Webhook (paste URL)",
    description:
      "Auto-reply to Webflow form submissions with personalized AI-drafted emails. Add a webhook URL to your Webflow site and start in 2 minutes. $19/mo.",
    keywords: [
      "Webflow form auto reply",
      "Webflow AI response",
      "Webflow automated email reply",
      "Webflow form autoresponder",
    ],
    heroSubtitle:
      "Add a webhook URL to your Webflow site settings. Every form submission gets a personalized AI-drafted reply in your inbox.",
    steps: [
      {
        title: "Add the webhook to Webflow",
        description:
          "Sign up for FormReply and copy your webhook URL. In Webflow, go to Site Settings > Integrations > Webhooks and add it for \"Form submission\" events.",
      },
      {
        title: "A visitor submits your contact form",
        description:
          "Webflow fires the webhook instantly. FormReply reads the submission and drafts a personalized reply in your tone \u2014 usually in under 10 seconds.",
      },
      {
        title: "Review and send",
        description:
          "The draft arrives in your inbox. Read it, edit if needed, hit send. Your Webflow site now has enterprise-level response speed.",
      },
    ],
    benefits: [
      "Works with any Webflow form \u2014 contact, lead gen, quote request, newsletter signup",
      "No Webflow Logic or Zapier integration needed \u2014 just a webhook URL",
      "Perfect for agencies and freelancers managing multiple Webflow client sites",
      "Handles all Webflow form field types including dropdowns and checkboxes",
    ],
    faqs: [
      {
        q: "Which Webflow plan supports webhooks?",
        a: "Webflow site plans (Basic and above) support form submissions. Webhook integrations are available in Site Settings > Integrations on CMS and Business plans, or via Webflow Logic on all paid plans.",
      },
      {
        q: "Can I use this for multiple Webflow sites?",
        a: "Yes. Each Webflow site gets its own webhook URL. This is especially useful for agencies managing multiple client sites.",
      },
      {
        q: "Does it work with Webflow's native form notifications?",
        a: "Yes, they work independently. Webflow can still send you its default notification while FormReply drafts the actual reply you'll send back.",
      },
      {
        q: "Do I need Webflow Logic?",
        a: "No. You only need to add a webhook URL in Webflow's site settings. No Logic workflows, no Zapier, no code.",
      },
    ],
  },
};

const PROVIDER_KEYS = Object.keys(PROVIDERS) as ProviderKey[];

/* ------------------------------------------------------------------ */
/*  Static params & metadata                                           */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return PROVIDER_KEYS.map((provider) => ({ provider }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ provider: string }>;
}): Promise<Metadata> {
  const { provider } = await params;
  const data = PROVIDERS[provider as ProviderKey];
  if (!data) return {};

  return {
    title: `${data.title} | FormReply`,
    description: data.description,
    keywords: data.keywords,
    openGraph: {
      title: `${data.title} | FormReply`,
      description: data.description,
      url: `https://formreply.app/for/${provider}`,
      siteName: "FormReply",
      type: "website",
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ provider: string }>;
}) {
  const { provider } = await params;
  const data = PROVIDERS[provider as ProviderKey];
  if (!data) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "FormReply",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            url: `https://formreply.app/for/${provider}`,
            description: data.description,
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
                description: `Unlimited ${data.name} form submissions with AI auto-reply`,
              },
            ],
          }),
        }}
      />

      {/* Nav */}
      <nav className="border-b border-gray-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight"
          >
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
          {data.integration === "oauth" ? "OAuth integration" : "Webhook integration"} &middot; {data.name}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          Stop losing {data.name} leads<br />to slow replies
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          {data.heroSubtitle}
        </p>
        <Link
          href="/onboarding"
          className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
        >
          Get started free &rarr;
        </Link>
        <p className="text-sm text-gray-400 mt-3">
          5 free replies/month &middot; No card required &middot; 2-minute setup
        </p>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 border-y border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            How it works with {data.name}
          </h2>
          <p className="text-gray-500 text-center mb-14">
            Three steps.{" "}
            {data.integration === "oauth"
              ? "One-click OAuth connect."
              : "Paste a webhook URL."}{" "}
            Done in under 2 minutes.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {data.steps.map((step, i) => (
              <div key={i}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block h-px flex-1 bg-gray-200" />
                  )}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed stats */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Response time wins deals
          </h2>
          <p className="text-gray-500">
            The data is clear. Speed matters more than perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
              21x
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              more likely to qualify a lead if you respond within 5 minutes
            </p>
            <p className="text-gray-500 text-xs mt-3">
              MIT / InsideSales.com
            </p>
          </div>
          <div className="bg-gray-800 rounded-2xl p-8 text-center">
            <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
              42h
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              average business response time to contact forms
            </p>
            <p className="text-gray-500 text-xs mt-3">
              Industry average (Chili Piper)
            </p>
          </div>
          <div className="bg-indigo-600 rounded-2xl p-8 text-center ring-4 ring-indigo-200">
            <div className="text-5xl sm:text-6xl font-bold text-white mb-3">
              ~10s
            </div>
            <p className="text-indigo-100 text-sm leading-relaxed">
              FormReply draft delivery time
            </p>
            <p className="text-indigo-300 text-xs mt-3">Our product</p>
          </div>
        </div>

        <p className="text-center text-gray-700 text-lg font-medium max-w-2xl mx-auto">
          78% of customers buy from the first company to respond. FormReply
          makes sure that&apos;s you.
        </p>
      </section>

      {/* Provider-specific benefits */}
      <section className="bg-gray-50 border-y border-gray-200 py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Why FormReply for {data.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {data.benefits.map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-gray-200 flex items-start gap-3"
              >
                <svg
                  className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Simple pricing
          </h2>
          <p className="text-gray-500">
            Start free. Upgrade when you need more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Free
            </p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold text-gray-900">$0</span>
              <span className="text-gray-400 mb-1">/month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              No card required. No time limit.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "5 AI-drafted replies per month",
                "Full AI personalization",
                `${data.name} integration included`,
                "Spam filtering included",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-gray-500 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
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

          {/* Starter */}
          <div className="bg-indigo-50 rounded-2xl p-8 border-2 border-indigo-500 relative">
            <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-2 mt-1">
              Starter
            </p>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-bold text-gray-900">$19</span>
              <span className="text-gray-400 mb-1">/month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              14-day free trial included.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `Unlimited ${data.name} submissions`,
                "AI drafts matched to your tone",
                "Delivered to your inbox in ~10 seconds",
                "Spam filtering included",
                "You review and send \u2014 we never touch your email",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 text-gray-700 text-sm"
                >
                  <svg
                    className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="/onboarding"
              className="block w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-center"
            >
              Start free 14-day trial
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          {data.name} + FormReply FAQ
        </h2>
        <div className="space-y-3">
          {data.faqs.map((item, i) => (
            <details
              key={item.q}
              className="border border-gray-100 rounded-xl group"
              open={i === 0 ? true : undefined}
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-gray-900 hover:bg-gray-50 rounded-xl transition-colors list-none">
                {item.q}
                <svg
                  className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="text-gray-500 text-sm leading-relaxed px-5 pb-4">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="bg-indigo-600 rounded-2xl py-10 px-6 sm:py-14 sm:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start replying to {data.name} submissions faster
          </h2>
          <p className="text-indigo-200 mb-8">
            Free plan available. No card required. Cancel anytime.
          </p>
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
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/tools/reply-generator"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Reply Generator
            </Link>
            <Link
              href="/vs/zapier"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              vs Zapier
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Support
            </Link>
            <Link
              href="/privacy-and-tos"
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Privacy &amp; Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
