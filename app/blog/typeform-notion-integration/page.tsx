import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Notion Integration: Send Form Submissions to a Notion Database — FormReply",
  description:
    "Connect Typeform to Notion to automatically add submissions as database entries. Setup guide, field mapping, Zapier vs Make, and how to handle replies after the data lands.",
  openGraph: {
    title: "Typeform Notion Integration: Send Form Submissions to a Notion Database",
    description:
      "Typeform fills your Notion database. FormReply sends the personal reply. Here's how to connect both.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-notion-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Integration Guide &middot; Notion</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Notion Integration: Send Form Submissions to a Notion Database
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform collects structured data. Notion organizes and surfaces it for your team. Connecting
            the two means submissions become Notion database entries automatically — no copy-pasting, no
            missed entries, no out-of-date trackers. Here&rsquo;s the complete setup and what to watch for.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Teams Pipe Typeform into Notion</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notion databases are flexible enough to serve as lightweight CRMs, research repositories,
            applicant trackers, and project intake boards. Typeform produces exactly the kind of clean,
            structured data that populates those databases well.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Teams commonly use this combination for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Lead and contact tracking</strong> — Typeform contact or intake form submissions
              create Notion database entries with name, company, email, and inquiry type. The team manages
              the pipeline from Notion while Typeform handles the public-facing collection.
            </li>
            <li>
              <strong>Job application and speaker submission tracking</strong> — Typeform applications
              flow into a Notion database with status properties, so reviewers can filter, sort, and
              progress candidates through review stages without spreadsheets.
            </li>
            <li>
              <strong>User research and feedback collection</strong> — Typeform surveys and interview
              intake forms populate a Notion research database, giving the product and design team a
              single place to search and synthesize insights.
            </li>
            <li>
              <strong>Event and workshop registration</strong> — Attendee registrations from Typeform
              land in Notion as database rows with all relevant fields, making headcount, dietary needs,
              and communication preferences searchable without exporting anything.
            </li>
            <li>
              <strong>Vendor and partnership applications</strong> — External applications submitted
              through Typeform create Notion entries that move through a review workflow tracked in the
              same database.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Integration Methods</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform and Notion do not have a native direct integration. You need a middleware layer.
            Three options are commonly used:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Method</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Complexity</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Cost</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Zapier</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Low</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">$20+/mo for multi-step</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Fastest setup, most reliable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Make (Integromat)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Medium</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free tier; paid for volume</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Complex routing, better free tier</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Typeform Webhook + Notion API</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">High</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Infrastructure cost only</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">High volume, full control, no per-task fees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier is the recommended starting point. Make is worth considering if you need conditional
            routing — for example, adding to different Notion databases depending on the value of a
            multiple-choice field in the Typeform.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting Up with Zapier</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Create the Notion database first.</strong> Build the database schema (columns and
              property types) before setting up Zapier. You need to know what properties exist before
              you can map Typeform fields to them.
            </li>
            <li>
              <strong>Create a new Zap.</strong> Trigger: Typeform &mdash; &ldquo;New Entry.&rdquo; Connect your
              Typeform account and select the form.
            </li>
            <li>
              <strong>Test the trigger</strong> using an existing submission. Zapier pulls in the field
              structure so you can map fields in the next step.
            </li>
            <li>
              <strong>Add the action.</strong> Action app: Notion. Action event: &ldquo;Create Database Item.&rdquo;
              Connect your Notion account (you&rsquo;ll be prompted to grant Zapier access to specific
              databases — select the target database).
            </li>
            <li>
              <strong>Map Typeform fields to Notion properties.</strong> Match each Typeform field to the
              corresponding Notion property. Notion&rsquo;s property types must match the data format from
              Typeform (see table below).
            </li>
            <li>
              <strong>Test and activate.</strong> Run a test submission to confirm the Notion entry appears
              correctly, then turn the Zap on.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Field Mapping: Typeform to Notion</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Notion Property Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Short text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Title or Text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use Title for the page name (name/company)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match — Notion validates format</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice (single)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Select</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Values auto-create as options</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice (multi-select)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multi-select</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Requires comma-separated format from Typeform</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Text (rich text)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Goes into the page body or a text property</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Number / rating</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Number</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Date</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Date</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use ISO 8601 format via Zapier Formatter if needed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">URL field</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">URL</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Granting Zapier access to the wrong Notion database.</strong> Notion&rsquo;s
              permission model requires you to explicitly share each database with the integration during
              OAuth. If your target database doesn&rsquo;t appear in Zapier, go to Notion settings and
              share the database with the Zapier connection.
            </li>
            <li>
              <strong>Title property mismatch.</strong> Every Notion database page has exactly one Title
              property. If you map a Typeform field to a Text property instead of the Title property,
              the page will be created with a blank title — which makes it impossible to identify in list
              views.
            </li>
            <li>
              <strong>Long text in a text property instead of page body.</strong> Notion text properties
              have a character limit. For long open-text Typeform responses, use Zapier&rsquo;s &ldquo;Create
              a page with content&rdquo; feature (instead of just property mapping) to put the full message
              into the Notion page body.
            </li>
            <li>
              <strong>Dates formatted incorrectly.</strong> Notion&rsquo;s Date property requires ISO 8601
              format (YYYY-MM-DD). Typeform&rsquo;s date fields output in a different format. Use a Zapier
              Formatter (Date/Time) step to convert before passing to Notion.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Gap the Integration Doesn&rsquo;t Fill</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once the Notion entry exists, your team can see it, comment on it, and move it through a
            workflow. That&rsquo;s valuable for internal operations.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But for any external form — a contact form, a lead intake form, a partnership application —
            the person who submitted is still waiting for a reply. The Notion entry is invisible to them.
            Someone on your team needs to open the entry, read the submission, go to their email client,
            and write a reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That step takes time. Research shows leads contacted within five minutes of submission are 9x
            more likely to convert than those reached after an hour. A Notion database entry doesn&rsquo;t
            close that gap — it just makes the internal tracking better.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Combining Notion Sync with Instant Reply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to the same Typeform independently, via the Typeform API. It does not
            interfere with the Zapier–Notion workflow.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a submission arrives:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
            <li>Zapier creates the Notion database entry (internal tracking, team visibility)</li>
            <li>FormReply reads the same submission, drafts a personalized email reply, and delivers it to your Gmail inbox within 10 seconds</li>
            <li>You review the draft — it already references the person&rsquo;s name, company, and the specific situation they described — and send</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Notion entry handles the workflow side. FormReply handles the human communication side.
            Both run from the same form submission with no duplication of effort.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does Notion have a native Typeform integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Notion&rsquo;s native integrations are limited. Connecting Typeform to Notion requires Zapier,
            Make, or a custom webhook implementation using the Notion API. Zapier is the standard approach
            for teams without developer resources.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I add Typeform submissions to an existing Notion database with data already in it?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. The Zapier integration adds new entries — it doesn&rsquo;t modify or overwrite existing ones.
            As long as your Notion database has the properties you&rsquo;re mapping to, new Typeform submissions
            will appear as new rows alongside your existing data.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I route Typeform submissions to different Notion databases based on form answers?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, using Zapier Paths (a paid Zapier feature) or Make. Set up a branching condition based
            on the value of a multiple-choice field in the Typeform. Each branch creates an entry in a
            different Notion database. This is useful for routing, say, sales inquiries to one database
            and support requests to another.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            How do I include the full Typeform message in the Notion page body (not just properties)?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In Zapier, use the &ldquo;Create Page with Content&rdquo; action instead of &ldquo;Create Database Item.&rdquo;
            This lets you set both the database properties and the page body content in a single step.
            Pass your long-text Typeform field into the content body field to get the full message in the
            Notion page rather than truncated in a property.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Will FormReply conflict with my Zapier–Notion integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply connects to Typeform via the Typeform API independently. It reads the same
            submission data that Zapier reads, but through a separate API connection. The two integrations
            are non-conflicting — running both simultaneously is the standard setup for teams that want
            internal tracking in Notion and fast external replies via FormReply.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Typeform fills your Notion database. FormReply sends the reply.
          </h2>
          <p className="text-gray-600 mb-6">
            While Zapier logs the entry in Notion, FormReply puts a personalized Gmail reply draft in
            your inbox within 10 seconds — so the person who submitted doesn&rsquo;t wait hours to hear back.
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
