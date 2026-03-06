import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Monday.com Integration: How to Connect Submissions to Your Boards — FormReply",
  description:
    "Connect Typeform to Monday.com to automatically create items from form submissions. Setup guide, use cases, Zapier vs native, and what happens after the board updates.",
  openGraph: {
    title: "Typeform Monday.com Integration: Connect Submissions to Your Boards",
    description:
      "Typeform fills your Monday.com board. FormReply sends the personal reply. Here's how to set up both.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-monday-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Integration Guide &middot; Monday.com</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Monday.com Integration: Connect Form Submissions to Your Boards
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform captures structured data. Monday.com manages the work that follows. Connecting the two
            eliminates manual data entry and puts every submission directly into the board where your team
            acts on it. Here&rsquo;s how to set it up — and what the integration still doesn&rsquo;t cover.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Teams Combine Typeform and Monday.com</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform excels at collecting structured, high-quality intake data. Monday.com excels at tracking
            work and keeping teams aligned. The gap between them — manually copying submission details into
            board items — is exactly the kind of low-value work that automation eliminates.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Common workflows that benefit from this integration:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              <strong>Lead intake pipeline</strong> — A Typeform contact or lead gen form creates a new item
              in a CRM board on Monday.com, pre-populated with the lead&rsquo;s name, company, inquiry type,
              and timeline. The sales team works the board; the Typeform collects the data.
            </li>
            <li>
              <strong>Project request intake</strong> — Internal teams submit project requests through a
              Typeform. Each submission creates a Monday.com item with the requester&rsquo;s details, project
              type, deadline, and priority. No tickets lost in email threads.
            </li>
            <li>
              <strong>Event registration and onboarding</strong> — Event sign-ups or onboarding intakes flow
              directly into a Monday.com tracking board, giving the operations team real-time visibility into
              who&rsquo;s registered and what their setup requirements are.
            </li>
            <li>
              <strong>Support and bug intake</strong> — Customer support Typeforms create Monday.com items
              automatically, making it easy to track issue status, assign owners, and monitor resolution time
              without manual ticket creation.
            </li>
            <li>
              <strong>Partnership and vendor applications</strong> — External applications collected through
              Typeform route into a Monday.com review board, where the team evaluates, scores, and progresses
              each application through a defined workflow.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Integration Options: Native vs Zapier vs Make</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform does not have a native direct integration with Monday.com. You need a middleware
            connector — Zapier, Make (formerly Integromat), or a custom webhook receiver — to bridge the two.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Method</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Setup Time</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Cost</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Zapier</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">15–30 min</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">$20+/mo (paid plan for multi-step)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Simple, reliable, most common setup</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Make (Integromat)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">30–60 min</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free tier available; paid for volume</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Complex workflows with conditional logic</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Custom webhook</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Hours (developer required)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Infrastructure cost only</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">High volume, custom field mapping, no per-task fees</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            For most teams, Zapier is the fastest path to a working integration. Make is worth considering
            if you need branching logic inside the integration itself — for example, routing to different
            Monday.com boards based on the value of a specific Typeform field.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting Up the Zapier Integration (Step by Step)</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Create a new Zap</strong> in Zapier. Set the trigger app to Typeform and the trigger
              event to &ldquo;New Entry.&rdquo;
            </li>
            <li>
              <strong>Connect your Typeform account</strong> and select the specific form you want to use
              as the data source.
            </li>
            <li>
              <strong>Test the trigger</strong> by selecting a recent submission. Zapier will use this to
              map fields in the next step.
            </li>
            <li>
              <strong>Add the action app</strong> — Monday.com. Set the action event to &ldquo;Create Item.&rdquo;
            </li>
            <li>
              <strong>Connect your Monday.com account</strong> and select the board and group where new
              items should be created.
            </li>
            <li>
              <strong>Map Typeform fields to Monday.com columns</strong> — set the item name (usually the
              respondent&rsquo;s name or company), and map other fields (email, inquiry type, timeline) to
              the appropriate column types on your board.
            </li>
            <li>
              <strong>Test the action</strong> to verify the Monday.com item appears with correct data,
              then turn the Zap on.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Key setup consideration: Monday.com column types matter. Text columns accept any Typeform text
            field. Status columns require you to map Typeform multiple-choice values to Monday.com status
            labels exactly — any mismatch defaults to a blank status. Map these carefully during setup.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Field Mapping Best Practices</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Monday.com Column Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Name (short text)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Item name</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use as the item identifier</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email column</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Enables email send from Monday.com</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice (inquiry type)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Status or dropdown column</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Values must match Monday.com labels exactly</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice (timeline)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Status or text column</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use text if values don&apos;t match status labels</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long text (message)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long text column</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Full submission context for the assignee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Submission timestamp</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Date column</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Useful for SLA tracking</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What the Integration Does Not Cover</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform–Monday.com integration handles data routing. A new item appears in your board.
            Your team can see it, assign it, and track its progress.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            What it does not do: reply to the person who submitted.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For contact forms, lead intake forms, and any external form where the respondent is waiting
            to hear back — the Monday.com item is internal. The submitter gets nothing until someone on
            your team manually reads the item and writes an email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That gap has a measurable cost. Research consistently shows leads contacted within five minutes
            of submitting are 9x more likely to convert than those reached after an hour. Most teams with a
            Monday.com board take far longer than five minutes to see, open, read, and respond to a new item.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Adding Auto-Reply to the Workflow</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply runs alongside the Zapier integration without interfering with it. Both connect to
            the same Typeform via independent API connections.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a Typeform submission arrives:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
            <li>Zapier creates the Monday.com item (your internal tracking)</li>
            <li>FormReply reads the submission, generates a personalized reply draft, and places it in your Gmail inbox within 10 seconds</li>
            <li>You review the draft and send — total time under a minute, regardless of how busy your day is</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Monday.com item gives your team visibility and a place to track the account long-term.
            The FormReply draft closes the loop with the person who submitted — immediately, and without
            anyone having to remember to do it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Troubleshooting Common Issues</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Monday.com item creates but columns are blank</strong> — Check that the column type
              accepts the data format. Monday.com&rsquo;s email column rejects non-email strings; its status
              column rejects values that don&rsquo;t match defined labels exactly.
            </li>
            <li>
              <strong>Zap runs but no item appears</strong> — Check that the Monday.com account in Zapier
              has write access to the target board. Private boards often block API writes from connected
              integrations.
            </li>
            <li>
              <strong>Item name appears blank</strong> — The item name field in Monday.com is required.
              If the Typeform field mapped to item name is optional and a respondent skipped it, Zapier
              may fail silently. Use a Zapier &ldquo;Formatter&rdquo; step to set a fallback (e.g., submission
              timestamp) if the name field is empty.
            </li>
            <li>
              <strong>Long text field gets cut off</strong> — Monday.com&rsquo;s text columns have character
              limits. If your Typeform message field captures long responses, test with a maximum-length
              sample to confirm the full content comes through.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does Monday.com have a native Typeform integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Not directly. Monday.com&rsquo;s integration center includes many apps, but Typeform requires
            a middleware connector like Zapier or Make. Both have reliable Typeform and Monday.com
            connectors and are the standard approach for this workflow.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I route to different Monday.com boards based on a Typeform answer?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes — with Make or a multi-step Zapier workflow. Set up a filter step or path after the
            Typeform trigger that checks the value of the routing field, then routes to the appropriate
            Monday.com Create Item action for each board. Zapier Paths (paid feature) handles this cleanly.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can FormReply and the Zapier integration run simultaneously?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Both connect to Typeform independently via the API. FormReply&rsquo;s connection does not
            affect Zapier&rsquo;s webhook listener or vice versa. Running both simultaneously is the recommended
            setup for external-facing forms where you need both internal tracking and outbound reply automation.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Will Monday.com notify my team when a new Typeform item is created?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            By default, Monday.com sends an in-app notification to board members when a new item is added.
            You can configure additional automations inside Monday.com (under the Automations tab) to send
            email or Slack notifications, assign an owner, or set a status when an item is created via
            integration.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            How quickly does the Monday.com item appear after a Typeform submission?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            On Zapier, item creation typically happens within 1–15 minutes, depending on your Zapier plan.
            Paid Zapier plans offer faster polling intervals (as low as 1 minute). Make scenarios can
            trigger closer to real-time. Custom webhook implementations are essentially instant.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Typeform feeds your Monday.com board. FormReply sends the reply.
          </h2>
          <p className="text-gray-600 mb-6">
            While Zapier creates your Monday.com item, FormReply puts a personalized reply draft in
            your Gmail inbox within 10 seconds — so the person who submitted hears back immediately.
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
