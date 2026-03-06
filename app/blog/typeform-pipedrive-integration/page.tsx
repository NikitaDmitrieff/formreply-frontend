import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Pipedrive Integration: Capture Leads, Then Reply Before They Go Cold — FormReply",
  description:
    "The Typeform Pipedrive integration creates deals and contacts automatically. But Pipedrive won't write your first reply. Here's how to close the gap before your lead evaluates someone else.",
  openGraph: {
    title: "Typeform Pipedrive Integration: Capture Leads, Then Reply Before They Go Cold",
    description:
      "Typeform + Pipedrive captures and routes leads instantly. FormReply handles the part Pipedrive skips — drafting a personalized first reply in 10 seconds.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-pipedrive-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide &middot; Typeform Integrations</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Pipedrive Integration: Get the Deal In, Then Reply Before It Cools
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Connecting Typeform to Pipedrive is one of the most effective inbound lead capture setups for SMB sales
            teams. New submissions create deals, contacts, and notes automatically. The one step Pipedrive
            can&rsquo;t automate is the first reply — and in B2B sales, that gap is where leads are lost.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Typeform and Pipedrive Work Well Together</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pipedrive is designed for sales teams that need to track deals through a pipeline without the complexity
            of enterprise CRMs. It&rsquo;s fast to set up, visual, and built around the salesperson&rsquo;s workflow
            rather than a manager&rsquo;s reporting needs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform collects better data than standard web forms. Its conversational format produces longer, more
            detailed answers — budget, timeline, company size, specific problem description. By the time a lead
            hits Pipedrive, there&rsquo;s real signal to work with.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The combination is powerful: Typeform gathers qualified lead data conversationally, and Pipedrive
            receives it as a structured deal, ready to be worked. No copy-pasting, no manual entry, no leads
            slipping through email threads.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Connect Typeform to Pipedrive</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are three main methods for setting up the Typeform-Pipedrive integration:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Option 1: Zapier</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier is the most commonly used route. The trigger is a new Typeform submission; the actions can
            include creating a Person, creating a Deal, and creating a Note in Pipedrive — all populated with
            form field data. The visual field mapper makes setup straightforward for non-technical users.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Setup time: 20–40 minutes. Cost: Zapier charges per task, which adds up at higher submission
            volumes. For teams under 500 submissions/month, this is usually the fastest way to get started.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Option 2: Make (formerly Integromat)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Make offers more complex multi-step workflows than Zapier at lower per-operation costs. If you need
            to create both a Pipedrive Person and a Deal, add an activity, and send a Slack notification — all
            from one Typeform submission — Make handles this more elegantly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The tradeoff is a steeper learning curve. For simple Person + Deal creation, Zapier is faster to
            configure. For complex pipelines, Make is more cost-efficient and flexible.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Option 3: Typeform Webhook + Pipedrive API</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For full control, you can configure a Typeform webhook to send submission payloads to an endpoint
            you control, then use the Pipedrive REST API to create records programmatically. This requires
            developer time but removes any per-task cost and allows custom logic (e.g., routing different
            form submissions to different Pipedrive pipelines based on answers).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Field Mapping: Typeform to Pipedrive</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most Typeform-to-Pipedrive setups map to three Pipedrive objects: Person, Deal, and Note. A typical
            mapping looks like this:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Pipedrive Object</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Pipedrive Field</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Name</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Person</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Name</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Person</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Company</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Organization</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Name</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Budget / Deal size</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Deal</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Value</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message / Description</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Note</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Content</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Form source / UTM</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Deal</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Custom field (Lead Source)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            A common design pattern: push the full message text into a Pipedrive Note attached to the Deal.
            This keeps the long-form context (which is where the value is) visible inside the Deal record without
            cluttering Pipedrive&rsquo;s standard fields.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Part Pipedrive Doesn&rsquo;t Handle</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s what Pipedrive does well: it shows you the deal, the contact, the note with the message,
            and where it sits in your pipeline. It reminds you to follow up. It tracks activity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s what Pipedrive doesn&rsquo;t do: write the first reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Someone fills out your Typeform at 10am. Pipedrive has the deal in your inbox pipeline by 10:00:03.
            But you&rsquo;re in a meeting. You see the deal at 11:30. You pull up the note, read the message,
            and start drafting a reply. By noon, you send it — 2 hours after they submitted.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That 2-hour gap is the problem. The research is consistent: the difference between a 5-minute response
            and a 2-hour response in B2B sales is dramatic. Leads contacted within five minutes are 9x more
            likely to convert. At two hours, you&rsquo;re competing with whoever responded faster.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pipedrive&rsquo;s email templates can help you reply faster once you&rsquo;re in the deal view.
            But templates are generic. The Typeform message contained specific details — company size, use case,
            timeline. A generic template doesn&rsquo;t address those. A real reply does.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Adding FormReply to the Stack</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply runs alongside your Typeform-Pipedrive integration without replacing it. When a submission
            arrives, Pipedrive creates the deal via Zapier as usual. Simultaneously, FormReply reads the same
            submission via the Typeform API and drafts a personalized reply based on exactly what the respondent wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Within 10 seconds, there&rsquo;s a reply draft in your Gmail inbox. You open it, make any adjustments,
            and send — without ever opening Pipedrive, switching to a separate tool, or starting a reply from scratch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The workflow:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Respondent submits your Typeform contact form.</li>
            <li><strong>Pipedrive path:</strong> Zapier creates Person + Deal + Note — pipeline updated immediately.</li>
            <li><strong>Reply path (FormReply):</strong> FormReply reads the submission and drafts a personalized reply in Gmail.</li>
            <li>You see the draft in your inbox within 10 seconds, review it, and send.</li>
            <li>Respondent gets a personal reply in minutes. Deal is already in Pipedrive for follow-up tracking.</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who This Setup Is For</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform + Pipedrive + FormReply stack is a strong fit for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li><strong>SMB sales teams</strong> handling inbound leads where first-reply speed directly affects close rate</li>
            <li><strong>Founders doing sales</strong> who use Typeform for qualified intake and Pipedrive for deal tracking</li>
            <li><strong>Agencies and consultancies</strong> where the first reply sets the tone for the engagement</li>
            <li><strong>Solo sellers</strong> with high inbound volume who can&rsquo;t afford to hand-write every first reply</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            It&rsquo;s less relevant for non-contact form use cases — event registrations, surveys, internal
            intake forms — where a personal reply isn&rsquo;t the expected next step.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does Typeform have a native Pipedrive integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform doesn&rsquo;t have a direct native Pipedrive integration in the same way it has one with
            Salesforce. The most common approach is Zapier or Make, which both have well-supported Typeform and
            Pipedrive connectors. Direct webhook-to-API integration is also viable if you have developer resources.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Will FormReply interfere with my Zapier-to-Pipedrive setup?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply connects to Typeform independently via the Typeform API. It reads submission data in
            parallel — it doesn&rsquo;t interact with Zapier, Make, or Pipedrive at all. Your existing integration
            runs exactly as configured.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can FormReply create a note or activity in Pipedrive?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Currently, FormReply focuses on the reply side: it creates a Gmail draft based on the Typeform
            submission. It doesn&rsquo;t create records in Pipedrive. That part is handled by your Zapier/Make
            workflow. The two systems handle different things — Pipedrive manages the deal; FormReply drafts
            the first reply.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            What if multiple reps are using Pipedrive — who gets the draft?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply currently routes drafts to a single connected Gmail account. For teams with multiple reps,
            the most common approach is to route through a shared first-reply inbox (e.g., sales@yourcompany.com)
            that the first available rep monitors, then log the sent reply as an activity in Pipedrive.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does the quality of the Typeform response affect the reply draft?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, significantly. Because Typeform&rsquo;s conversational format produces longer, more detailed
            answers, the reply drafts FormReply generates tend to be more specific and useful than drafts from
            standard form submissions. The more the respondent wrote, the better the draft.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Pipedrive gets the deal. Your inbox gets the reply draft.
          </h2>
          <p className="text-gray-600 mb-6">
            FormReply runs alongside your Typeform-Pipedrive integration and drafts a personalized reply to every
            form submission in 10 seconds — in Gmail, ready to review and send.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </article>
    </main>
  );
}
