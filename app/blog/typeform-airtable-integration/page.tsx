import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Airtable Integration: Sync Form Submissions to a Base — FormReply",
  description:
    "Send Typeform submissions directly into Airtable as new records. Step-by-step Zapier setup, field type mapping, common mistakes to avoid, and how to automate replies after the data lands.",
  openGraph: {
    title: "Typeform Airtable Integration: Sync Form Submissions to a Base",
    description:
      "Typeform captures the data. Airtable organizes it. FormReply sends the reply. Here's how to connect all three.",
    url: "https://formreply.app/blog/typeform-airtable-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Integration Guide &middot; Airtable</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Airtable Integration: Sync Form Submissions to a Base
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform collects structured responses. Airtable stores, filters, and links that data in
            ways spreadsheets can&rsquo;t. Connecting the two means every submission becomes an Airtable
            record automatically — no manual entry, no export-and-import cycles, no stale databases.
            Here&rsquo;s exactly how to set it up and what to watch for.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Teams Connect Typeform to Airtable</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Airtable&rsquo;s combination of flexible field types, linked records, views (grid, gallery,
            kanban, calendar), and native automations makes it a preferred backend for teams that
            outgrow spreadsheets but don&rsquo;t want to build a custom database. Typeform generates
            exactly the kind of structured, consistent data that Airtable bases are designed for.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The most common use cases:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Lead and sales pipeline management</strong> — Typeform contact and intake forms
              create Airtable records with name, company, email, budget range, and inquiry type. Sales
              teams manage the pipeline from Airtable&rsquo;s kanban view while Typeform handles the
              public-facing collection page.
            </li>
            <li>
              <strong>Job application tracking</strong> — Candidate applications submitted via Typeform
              flow into an Airtable base with Status, Interviewer, and Notes fields. Linked records
              connect applicants to job requisitions, making cross-filtering straightforward.
            </li>
            <li>
              <strong>Event and workshop registration</strong> — Registrations land in Airtable with
              all fields (name, dietary requirements, session preferences) captured cleanly, ready to
              drive badge printing, seating assignments, or attendee communications.
            </li>
            <li>
              <strong>Vendor and partnership applications</strong> — External applications processed
              through Typeform populate an Airtable review base where team members score, comment, and
              advance or reject candidates using a structured workflow.
            </li>
            <li>
              <strong>Client onboarding and project intake</strong> — New client intake forms push to
              an Airtable project tracker, auto-creating the record that project managers then fill out
              with timelines, deliverables, and linked contacts.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Integration Methods</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform and Airtable do not have a direct native integration. You need a middleware layer.
            Three approaches are in common use:
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
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Fastest setup, most reliable, best support</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Make (Integromat)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Medium</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free tier; paid for volume</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Complex conditional routing, better free tier</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Typeform Webhook + Airtable API</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">High</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Infrastructure cost only</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">High volume, full field control, no per-task fees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier is the standard choice for teams without a developer. Make is worth the setup time
            when you need conditional routing — for example, different Typeform answers should create
            records in different Airtable tables or bases.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting Up with Zapier</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Set up your Airtable base first.</strong> Create the table and define field types
              (Single line text, Long text, Email, Single select, etc.) before building the Zap. Zapier
              needs the table schema to exist before it can offer field mapping.
            </li>
            <li>
              <strong>Create a new Zap.</strong> Trigger: Typeform — &ldquo;New Entry.&rdquo; Connect your
              Typeform account and select the specific form.
            </li>
            <li>
              <strong>Pull in a test submission.</strong> Zapier loads an existing submission as sample
              data, which populates the available fields for mapping in the next step. If no submissions
              exist yet, submit a test response first.
            </li>
            <li>
              <strong>Add the Airtable action.</strong> Action app: Airtable. Action event: &ldquo;Create
              Record.&rdquo; Connect your Airtable account, select the base, and select the table.
            </li>
            <li>
              <strong>Map fields.</strong> Match each Typeform field to its corresponding Airtable field.
              Pay attention to field type compatibility (see the table below).
            </li>
            <li>
              <strong>Test and activate.</strong> Run the test to verify a record appears in Airtable
              with the correct values in the correct fields. Turn the Zap on.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Field Mapping: Typeform to Airtable</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Airtable Field Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Short text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Single line text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match; use for names, company, subject</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use for open-text responses, message body</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match; enables mailto links in grid view</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice (single)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Single select</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Values auto-create as options in Airtable</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice (multi-select)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple select</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Ensure comma-separated format from Typeform</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Number / rating / opinion scale</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Number</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match; works for NPS, ratings</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Date</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Date</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">May need Zapier Formatter to convert to ISO 8601</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Website / URL</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">URL</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Direct match; clickable in Airtable</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes / No</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Checkbox or Single select</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Checkbox if boolean; single select if you want the label</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Setup Mistakes</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Using Single line text for long responses.</strong> Airtable truncates single-line
              text fields in grid view and doesn&rsquo;t expand them well. Map open-text Typeform fields to
              Airtable&rsquo;s Long text field type so the full response is readable without expanding the row.
            </li>
            <li>
              <strong>Forgetting to pre-populate Single/Multiple select options.</strong> Airtable does
              create new select options automatically when they arrive from Zapier, but if you have a
              fixed list of choices in Typeform, pre-creating those options in Airtable ensures consistent
              color-coding from day one.
            </li>
            <li>
              <strong>Date format mismatch.</strong> Typeform outputs dates as MM/DD/YYYY by default.
              Airtable expects ISO 8601 (YYYY-MM-DD). Add a Zapier Formatter step between the trigger and
              action to convert the date format before it hits Airtable, or the Date field will reject the value.
            </li>
            <li>
              <strong>Mapping to the wrong table.</strong> If your Airtable base has multiple tables,
              double-check the table name in the Zapier action step. Submissions accidentally routed to
              the wrong table are easy to miss until you notice the primary table isn&rsquo;t growing.
            </li>
            <li>
              <strong>Not testing with a real submission before going live.</strong> Zapier&rsquo;s sample
              data test may not surface all the edge cases — especially for fields that are optional in
              Typeform. Submit a full test response with all fields filled, then verify every Airtable
              field populated as expected.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Gap the Integration Doesn&rsquo;t Fill</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once a submission lands in Airtable, your team can filter it, assign it, move it through
            views, and track its status. That&rsquo;s the internal workflow sorted.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But the person who submitted the form is still waiting. They don&rsquo;t know their record
            exists in your Airtable base. They don&rsquo;t know if anyone read their message. Someone on
            your team needs to open the record, read the submission, switch to their email client, and
            write a reply — a process that takes minutes at best, hours at worst.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Research consistently shows that leads reached within five minutes of submitting are nine
            times more likely to convert than those reached after an hour. An Airtable record is a
            great operations tool, but it doesn&rsquo;t shorten the reply window on its own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Combining Airtable Sync with Instant Reply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to Typeform via the Typeform API independently of your Zapier–Airtable
            workflow. The two integrations read from the same submission data without interfering with
            each other.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a submission arrives:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
            <li>Zapier creates the Airtable record (internal tracking, pipeline management)</li>
            <li>FormReply reads the same submission, drafts a personalized email reply referencing the submitter&rsquo;s name, company, and specific message, then delivers the draft to your Gmail inbox within 10 seconds</li>
            <li>You review and send the draft — the external response is handled before your team has even triaged the Airtable record</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Airtable handles the operations side. FormReply handles the communication side. Both run
            automatically from the same Typeform submission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does Airtable have a native Typeform integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Airtable&rsquo;s native form feature is a separate product from Typeform. To sync Typeform
            submissions into Airtable, you need a middleware tool like Zapier or Make, or a custom
            integration using the Typeform webhook and the Airtable REST API.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I route different Typeform answers to different Airtable tables?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, using Zapier Paths (paid feature) or Make&rsquo;s conditional routing. Set a branching
            condition based on a multiple-choice or dropdown field in your Typeform. Each branch creates
            a record in a different Airtable table or base. This is useful when different inquiry types
            should go to different team workflows — e.g., sales inquiries to a CRM table, support
            requests to a support queue.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            How do I update an existing Airtable record from a Typeform submission instead of creating a new one?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Use the Airtable &ldquo;Update Record&rdquo; action in Zapier instead of &ldquo;Create Record.&rdquo; You&rsquo;ll
            need a matching field (like email or a unique ID) to find the existing record. Add a search
            step before the update action: Airtable &ldquo;Find Record&rdquo; searches for the record by email,
            returns the record ID, and then the update step uses that ID to write new values.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I trigger Airtable automations from Typeform submissions coming through Zapier?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Airtable&rsquo;s native automations trigger on record creation, so once Zapier creates the
            record, Airtable automations fire normally — including sending Airtable notifications,
            running scripts, or sending emails from Airtable. The source of the record creation
            (Zapier vs. manual entry vs. Airtable form) doesn&rsquo;t affect Airtable automation triggers.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Will FormReply interfere with my Zapier–Airtable setup?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply reads Typeform submissions through the Typeform API using a separate
            connection. It does not modify your Typeform data, does not interact with Zapier, and does
            not write to Airtable. Running both simultaneously is the intended setup — Airtable handles
            internal tracking while FormReply handles the external reply.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Airtable tracks the record. FormReply sends the reply.
          </h2>
          <p className="text-gray-600 mb-6">
            While Zapier logs the submission in Airtable, FormReply puts a personalized Gmail draft
            in your inbox within 10 seconds — so the person who submitted hears back before you&rsquo;ve
            finished triaging your Airtable queue.
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
