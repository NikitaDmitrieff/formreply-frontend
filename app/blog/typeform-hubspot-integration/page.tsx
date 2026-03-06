import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform HubSpot Integration: Connect Your Form, Then Actually Reply to the Lead — FormReply",
  description:
    "The Typeform HubSpot native integration is fast to set up. But HubSpot still won't write your first reply. Here's how to close that gap and respond before the lead goes cold.",
  openGraph: {
    title: "Typeform HubSpot Integration: Connect Your Form, Then Actually Reply to the Lead",
    description:
      "Typeform + HubSpot captures and organizes leads automatically. FormReply handles the step HubSpot skips — drafting the first personalized reply in 10 seconds.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-hubspot-integration",
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
            Typeform HubSpot Integration: Capture the Lead, Then Reply to It
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            The Typeform-to-HubSpot integration takes about 10 minutes to set up and works reliably. The part it
            doesn&rsquo;t solve is writing the first reply — and that&rsquo;s where most leads go cold.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How the Typeform HubSpot native integration works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a built-in HubSpot integration available under <strong>Connect &rarr; HubSpot</strong> in
            your form settings. Once authorized, it maps Typeform fields to HubSpot contact properties automatically:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Someone submits your Typeform contact or inquiry form</li>
            <li>Typeform fires the integration in real time</li>
            <li>A contact record is created or updated in HubSpot with the form data</li>
            <li>The contact appears in your HubSpot CRM, ready for follow-up</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Field mapping is configurable — name, email, company, phone, any custom properties. For most setups,
            you can be live in under 15 minutes without touching Zapier or Make.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The integration handles exactly what it promises: the lead is captured, organized, and accessible to
            your team in HubSpot. No leads slip through, no manual data entry, clean contact records from day one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What the HubSpot integration doesn&rsquo;t do
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The lead is in HubSpot. Your pipeline stage shows &ldquo;New.&rdquo; HubSpot will send you a
            notification. Your sequences and workflows can kick in if you&rsquo;ve set them up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But none of that writes the first reply to the person who just submitted.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            HubSpot sequences are templated — they use tokens like{" "}
            <code className="bg-gray-100 px-1 rounded text-sm">&#123;&#123;contact.firstname&#125;&#125;</code> and{" "}
            <code className="bg-gray-100 px-1 rounded text-sm">&#123;&#123;contact.company&#125;&#125;</code>, but
            they don&rsquo;t read what the person actually wrote. They don&rsquo;t know whether the submission is
            a pricing question, a technical request, a partnership inquiry, or something urgent. Every email looks
            like a template, because it is one.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you want to send a genuinely personalized first reply — one that references what the person asked
            and shows you actually read their message — you still have to write it yourself. That means opening
            HubSpot, finding the contact, reading the original submission, and drafting a response. Ten to
            twenty minutes, and it doesn&rsquo;t always happen fast enough.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The first-reply gap and why it matters
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Response time to a contact form inquiry is one of the strongest predictors of whether that lead
            converts. The research consistently shows that leads contacted within the first hour are far more
            likely to engage than those reached later. Intent decays quickly — the person has moved on to
            the next tab, the next option, the next provider.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This isn&rsquo;t a sales trick. It&rsquo;s just how attention works. When someone fills out a
            contact form, they&rsquo;ve committed to making contact. That window is your best chance to
            have a conversation. Miss it, and you&rsquo;re playing catch-up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The challenge isn&rsquo;t knowing this — most service businesses know first-reply speed matters.
            The challenge is that writing a good personalized reply takes time, and it&rsquo;s hard to
            prioritize when you&rsquo;re in the middle of other work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply fills the gap alongside HubSpot
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to your Typeform via webhook — independent of the HubSpot integration. Both
            run simultaneously when a form is submitted:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>HubSpot integration</strong> creates or updates the contact record, adds them to
              your pipeline, and fires any sequences you&rsquo;ve configured
            </li>
            <li>
              <strong>FormReply</strong> reads the full submission content, generates a personalized reply
              draft, and sends it to your inbox — within 10 seconds
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The FormReply email arrives before you&rsquo;ve even opened HubSpot. You see the submission summary
            and a draft reply that references the person by name, acknowledges what they wrote, and frames
            a response based on your business context. You review it, edit if needed, and reply from your
            regular email client.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            HubSpot logs the contact. FormReply handled the first reply. Both did their job. You spent
            two minutes instead of fifteen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up Typeform + HubSpot + FormReply
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 1 — Connect Typeform to HubSpot
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In your Typeform form settings, go to <strong>Connect &rarr; HubSpot</strong>. Authorize the
            integration with your HubSpot account. Map your Typeform fields to HubSpot contact properties —
            at minimum: email, first name, last name. Add company, phone, or custom properties as needed.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Test with a submission. Verify the contact appears in HubSpot with the correct field values.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 2 — Add FormReply via webhook
          </h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Create a FormReply account at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend.vercel.app/onboarding
              </Link>
              . Enter your email, business name, and a short description of what you do — the AI uses
              this to draft replies that match your voice and context
            </li>
            <li>Copy your FormReply webhook URL from the dashboard</li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong> and paste
              the FormReply URL
            </li>
            <li>
              Save and test using Typeform&rsquo;s built-in webhook tester — you should receive a
              draft reply email within 10 seconds
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The HubSpot integration is unaffected — Typeform webhooks are additive and fire independently.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 3 — Live workflow
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a lead submits: HubSpot captures the contact automatically. FormReply sends you a draft
            reply within 10 seconds. You reply to the lead. Later, you log the outreach in HubSpot as
            part of your normal process.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            HubSpot vs. FormReply: what each one does
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">HubSpot integration</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Primary job</td>
                  <td className="py-3 pr-4 text-gray-600">Capture and organize leads in CRM</td>
                  <td className="py-3 text-gray-600">Draft personalized first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reads submission content</td>
                  <td className="py-3 pr-4 text-gray-600">Maps to fields only</td>
                  <td className="py-3 text-gray-600">Full content, uses in draft</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Writes first reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — templates only</td>
                  <td className="py-3 text-gray-600">Yes — AI draft in 10 sec</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Manages pipeline</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">No — focused on reply step</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Run together</td>
                  <td className="py-3 pr-4 text-gray-600">—</td>
                  <td className="py-3 text-gray-600">Yes — same submission, parallel</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Will FormReply interfere with my HubSpot integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Typeform sends the submission payload to both endpoints independently. Your HubSpot sync
            receives its copy; FormReply receives its own. Neither knows about the other, and neither
            blocks the other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can HubSpot sequences replace FormReply?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For templated outreach — yes. If your goal is to send a standard acknowledgment or nurture sequence,
            HubSpot sequences handle that. FormReply is for personalized first replies that reference exactly what
            the person submitted, which templates can&rsquo;t do without manual work.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send the reply automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply delivers the draft to your inbox. You review it, edit if needed, and send from your
            regular email client. You stay in control of every outbound message — FormReply removes the
            blank-page friction, not your oversight.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if I use a different CRM alongside HubSpot?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform supports multiple webhook destinations and multiple native integrations simultaneously.
            FormReply works at the webhook level — it&rsquo;s compatible with any CRM configuration.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">HubSpot captures leads. FormReply replies to them.</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you use Typeform + HubSpot and you&rsquo;re still writing first replies from scratch,
              FormReply fills the specific gap your CRM leaves open. One additional webhook endpoint,
              3-minute setup.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform + HubSpot is a solid combination for contact form lead capture. You don&rsquo;t lose
            leads, your pipeline stays clean, and your team has structured data to work from. That&rsquo;s
            the CRM solving its problem well.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The gap is the first reply — personalized, fast, based on what the person actually wrote.
            HubSpot isn&rsquo;t built for that. FormReply is.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $9/month. Works alongside your existing setup. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Reply to every HubSpot lead before they go cold
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends a personalized reply draft to your inbox within 10 seconds of every Typeform
            submission — alongside your existing HubSpot integration.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free 14-day trial →
          </Link>
          <p className="text-sm text-gray-400 mt-3">$9/month after trial · Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
