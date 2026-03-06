import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform CRM Integration: Capture the Lead and Reply Before It Hits Your CRM — FormReply",
  description:
    "Typeform connects to HubSpot, Salesforce, and Pipedrive easily. But your CRM doesn't write the reply. Here's how to close the gap between form submission and first contact.",
  openGraph: {
    title: "Typeform CRM Integration: Capture the Lead and Reply Before It Hits Your CRM",
    description:
      "Syncing Typeform to your CRM is step one. FormReply handles step two — the personalized reply that turns a captured lead into an actual conversation.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-crm-integration",
    siteName: "FormReply",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-indigo-600 tracking-tight">
            FormReply
          </Link>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        <header className="mb-12">
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Integrations</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform CRM Integration: Capture the Lead, Then Actually Reply to It
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Connecting Typeform to your CRM is table stakes. The part that actually converts leads into clients is what
            happens in the first hour after the form is submitted — and your CRM can&rsquo;t help you with that.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How Typeform-to-CRM integration works (and what it doesn&rsquo;t do)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The standard Typeform CRM integration — whether via Typeform&rsquo;s native connectors, Zapier, or Make —
            is straightforward:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Someone submits your Typeform contact form</li>
            <li>Typeform fires a webhook or triggers a Zap</li>
            <li>A new contact or lead record is created in your CRM (HubSpot, Salesforce, Pipedrive, etc.)</li>
            <li>The submission data maps to CRM fields — name, email, company, notes</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That pipeline is genuinely useful. You don&rsquo;t lose leads, you have a record of every inquiry, and
            your sales process can start from a structured lead rather than a raw email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But there&rsquo;s a gap the CRM doesn&rsquo;t close: the lead is now in your system, and you still need
            to reply to the person who submitted. Your CRM doesn&rsquo;t draft that email. It doesn&rsquo;t know what
            the person asked, what context they gave, or what a good first response looks like for your business.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The lead sits in your pipeline at &ldquo;New,&rdquo; and someone still has to write the first email —
            from scratch, usually by digging back into the original submission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The first-reply problem in lead conversion
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Speed of first reply is one of the strongest predictors of lead conversion in B2B service businesses.
            This isn&rsquo;t a sales tactic — it&rsquo;s behavioral. When someone fills out a contact form, they have
            a problem they&rsquo;re actively trying to solve. Their attention and intent are highest in the first hour.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most businesses don&rsquo;t reply fast — not because they don&rsquo;t know it matters, but because writing
            a good reply takes time. You have to re-read the submission, think about what they need, frame a response
            that shows you understood their situation, and write it in a way that moves the conversation forward.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s 10–20 minutes for a thoughtful reply, and it doesn&rsquo;t always happen at the right moment.
            A submission at 4pm on Friday. A lead that comes in while you&rsquo;re in back-to-back calls. Three
            inquiries in a day when you have a deadline.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The CRM ensures you don&rsquo;t lose the lead. It doesn&rsquo;t help you respond to it fast enough or
            well enough.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Where FormReply fits alongside your CRM integration
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply runs in parallel with your CRM integration — not instead of it. When someone submits your
            Typeform:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Your CRM integration</strong> captures the lead, creates the contact record, maps the fields —
              exactly as before
            </li>
            <li>
              <strong>FormReply</strong> reads the full submission and sends you an email with the formatted data and
              an AI-drafted personalized reply, within 10 seconds
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft is built specifically for that submission — it references the person&rsquo;s name, their
            specific question or request, their context (budget, timeline, company), and frames a response based on
            your business and the tone you want to use.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You open the FormReply email, scan the draft, make any edits, and reply. The lead in your CRM stays at
            &ldquo;New&rdquo; until you log the activity — but you&rsquo;ve already replied, and you replied well.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up the full workflow: Typeform + CRM + FormReply
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step 1 — Set up your Typeform-to-CRM sync</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you haven&rsquo;t already, connect Typeform to your CRM using whichever method fits your stack:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              <strong>HubSpot</strong>: Typeform has a native HubSpot integration under Connect &rarr; HubSpot.
              Maps form fields directly to HubSpot contact properties.
            </li>
            <li>
              <strong>Salesforce / Pipedrive / others</strong>: Use Zapier or Make to map Typeform submissions to
              CRM records. Standard setup takes 10–15 minutes.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step 2 — Add FormReply via webhook</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform webhooks support multiple destinations — adding FormReply doesn&rsquo;t interfere with your
            CRM sync at all.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Create your FormReply account at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>
              . Enter your email, business name, and a description of what you do (the AI uses this to draft replies
              in your voice)
            </li>
            <li>Copy your FormReply webhook URL from the dashboard</li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong> and paste the URL
            </li>
            <li>Save and test with Typeform&rsquo;s built-in webhook tester</li>
          </ol>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Step 3 — Your workflow going forward</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a lead submits your form, within 10 seconds you receive a FormReply email. Review the draft, reply
            to the lead directly. The CRM captures the contact in the background automatically. You log the outreach
            in your CRM when it fits your process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            CRM integration vs. FormReply: complementary, not competitive
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">CRM integration</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Primary purpose</td>
                  <td className="py-3 pr-4 text-gray-600">Capture and organize leads</td>
                  <td className="py-3 text-gray-600">Draft and accelerate first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">What it produces</td>
                  <td className="py-3 pr-4 text-gray-600">Contact record in CRM</td>
                  <td className="py-3 text-gray-600">Draft reply in your inbox</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Helps you reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — you write from scratch</td>
                  <td className="py-3 text-gray-600">Yes — draft ready in 10 sec</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Manages pipeline</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">No — not its job</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Use together?</td>
                  <td className="py-3 pr-4 text-gray-600">—</td>
                  <td className="py-3 text-gray-600">Yes — both fire on same submission</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Who this workflow is for
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This setup works best for service businesses and consultants who:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              Use Typeform as their primary contact or inquiry form
            </li>
            <li>
              Already have or want a CRM to track leads and pipeline
            </li>
            <li>
              Know that first-reply speed matters but don&rsquo;t always have time to write from scratch
            </li>
            <li>
              Want to stay in control of every reply — no automated emails sent without review
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            It&rsquo;s less relevant for high-volume e-commerce forms, surveys, or registration flows where no
            personal reply is expected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Will adding FormReply break my existing CRM sync?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Typeform webhooks are additive — you can send the same submission payload to multiple endpoints
            simultaneously. FormReply receives its own copy of the submission; your CRM integration is unchanged.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply log activity in my CRM automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not currently. FormReply is focused on the reply-drafting step. You log your outreach in the CRM manually
            as part of your normal process. Keeping the tools separate keeps each one simple.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What CRMs does this work with?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Any CRM that integrates with Typeform (HubSpot, Salesforce, Pipedrive, Notion, Airtable, and others via
            Zapier or Make). FormReply connects at the Typeform webhook level, independent of your CRM.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send the reply automatically, or do I review it?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You always review before sending. FormReply delivers the draft to your inbox — nothing reaches your
            prospect without your explicit action. You review, edit if needed, and send. The AI removes the blank-page
            friction, not your oversight.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">FormReply works alongside your CRM — not instead of it</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If your Typeform is feeding a CRM pipeline and you want to close the gap between &ldquo;lead
              captured&rdquo; and &ldquo;lead replied to,&rdquo; FormReply handles that specific problem. It&rsquo;s
              Typeform-specific and requires no changes to your existing CRM setup.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A CRM sync solves the &ldquo;don&rsquo;t lose the lead&rdquo; problem. FormReply solves the &ldquo;actually
            reply to the lead fast and well&rdquo; problem. They address different moments in the same workflow, and
            they work better together than either does alone.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you already have Typeform integrated with your CRM and you&rsquo;re still finding that first replies
            are slow or generic, the fix is one webhook endpoint away.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. 3-minute setup. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Close the gap between lead captured and lead replied
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends you a personalized reply draft within 10 seconds of every Typeform submission. Works
            alongside your existing CRM integration.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free 14-day trial →
          </Link>
          <p className="text-sm text-gray-400 mt-3">$19/month after trial · Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
