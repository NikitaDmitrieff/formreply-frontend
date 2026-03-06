import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Connect Typeform to Asana (Step-by-Step) — FormReply",
  description:
    "Automatically create Asana tasks from Typeform submissions using Zapier, Make, or Typeform's native integrations. Step-by-step guide with field mapping and common mistakes to avoid.",
  openGraph: {
    title: "How to Connect Typeform to Asana (Step-by-Step)",
    description:
      "Turn Typeform submissions into Asana tasks automatically. Three methods covered: Zapier, Make, and native integration.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-asana-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Integration Guide &middot; Project Management</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Connect Typeform to Asana (Step-by-Step)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform is where requests come in. Asana is where work gets tracked. Connecting them
            means every form submission — a project intake, a bug report, a feature request — instantly
            becomes an Asana task without any manual copy-paste. This guide covers three methods to
            build that connection, plus the field mappings that actually work in practice.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Connect Typeform to Asana?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Project and operations teams typically use Typeform as the front door for structured
            requests: client onboarding questionnaires, internal project requests, bug submission
            forms, vendor intake forms. Asana is where those requests get triaged, assigned, and
            tracked to completion.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Without automation, the handoff looks like this: someone submits the form, you get an
            email notification, you open Asana, create a task manually, and paste in the relevant
            fields. For five submissions a week it&rsquo;s annoying. For fifty, it&rsquo;s untenable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The integration creates tasks automatically, with form fields mapped directly to Asana
            task name, description, custom fields, assignee, due date, and project — the moment
            someone hits submit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Three Ways to Connect Typeform to Asana</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Option 1: Zapier (Recommended for Most Teams)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier has a dedicated Typeform + Asana integration that requires no code. It&rsquo;s
            the most reliable option for straightforward task creation and supports conditional
            logic (send to different Asana projects based on a form answer) on higher-tier plans.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Cost:</strong> Free Zapier plan covers 100 tasks/month. Starter ($20/mo) covers 750 tasks.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Option 2: Make (formerly Integromat)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Make is cheaper than Zapier and more powerful for complex workflows — multiple branches,
            data transformation, error handling. If you need to create a task AND send a Slack
            notification AND add a row to Google Sheets from the same submission, Make handles that
            more elegantly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Cost:</strong> Free plan covers 1,000 operations/month. Core plan is $9/mo for 10,000 operations.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Option 3: Typeform Native Integrations</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s built-in integrations panel (Settings &rarr; Integrations) does not
            include a direct Asana integration as of 2025. The native integrations cover HubSpot,
            Salesforce, Slack, Google Sheets, Mailchimp, and a few others — but not Asana. You will
            need Zapier or Make for this connection.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Step-by-Step: Typeform to Asana via Zapier</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 1: Create a New Zap</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Log in to Zapier and click <strong>Create Zap</strong>. In the trigger search, type
            &ldquo;Typeform&rdquo; and select the Typeform app. Choose <strong>New Entry</strong>
            as the trigger event.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 2: Connect Your Typeform Account</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Click <strong>Sign in</strong> and authorise Zapier to access your Typeform account.
            Once connected, select the specific form you want to trigger on. If you have multiple
            forms, pick the one that handles the requests you want to send to Asana.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 3: Test the Trigger</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Click <strong>Test trigger</strong>. Zapier will pull a recent submission from your
            Typeform. If your form has no submissions yet, submit a test response first — Zapier
            needs sample data to map fields in the next step.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 4: Add an Asana Action</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Click the <strong>+</strong> button to add an action. Search for &ldquo;Asana&rdquo;
            and select it. Choose <strong>Create Task</strong> as the action event. Connect your
            Asana account when prompted.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 5: Map Typeform Fields to Asana</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is where the value is. Map your Typeform answers to the corresponding Asana task
            fields. Common mappings:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Asana Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Project name / Request title</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Task Name</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Required. Use a short-answer field in Typeform for this.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Description / Details</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Notes / Description</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long-text field. Consider concatenating multiple fields here.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Priority (dropdown)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Custom field: Priority</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Requires matching Typeform answer values to Asana custom field options exactly.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Deadline (date field)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Due Date</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Typeform date format (YYYY-MM-DD) maps cleanly to Asana.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Requester email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Followers / Custom field: Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Asana can&apos;t set followers by email from Zapier — use a custom text field instead.</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Department / Team</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Project</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use Zapier Paths (paid) to route to different projects based on answer.</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Submission timestamp</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Custom field: Submitted At</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Useful for SLA tracking.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            After mapping, click <strong>Test action</strong> to confirm a task appears in Asana.
            If it does, turn the Zap on.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3 Use Cases That Work Well</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Project Intake Forms</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Internal teams or clients fill out a Typeform describing a new project request — scope,
            timeline, budget, stakeholders. Each submission creates an Asana task in a &ldquo;New
            Requests&rdquo; project for a PM to triage. Fields like priority and deadline map
            directly from form answers.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Bug Reports</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Typeform linked from your app or docs page asks users to describe the bug, their
            browser, steps to reproduce, and severity. The submission creates an Asana task in your
            engineering bug backlog, tagged with the severity level from the form dropdown.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Vendor or Partner Onboarding</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            New vendors fill out a qualification form covering services, pricing range, and
            capacity. Each submission creates an Asana task assigned to the procurement lead, with
            all vendor details in the task description — no inbox digging required.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Not testing with a real submission:</strong> Zapier needs actual form data to
              map fields. Use the &ldquo;Test trigger&rdquo; step after submitting a test response,
              not before.
            </li>
            <li>
              <strong>Mismatched dropdown values:</strong> If your Typeform has a &ldquo;Priority&rdquo;
              dropdown with options &ldquo;High / Medium / Low&rdquo; and your Asana custom field uses
              &ldquo;P1 / P2 / P3&rdquo;, the mapping won&rsquo;t work cleanly. Either align the
              labels or use Zapier&rsquo;s Formatter to remap values.
            </li>
            <li>
              <strong>Putting all fields in the task name:</strong> Keep the task name short and
              scannable. Push detail into the Notes field — a task name like &ldquo;New request from
              Acme Corp — Q2 website redesign — high priority — budget $15k&rdquo; is unworkable in
              Asana&rsquo;s list view.
            </li>
            <li>
              <strong>Forgetting to turn the Zap on:</strong> Zaps default to paused. After testing,
              manually flip the toggle to enable. Any submissions while the Zap is paused will not
              be retroactively processed.
            </li>
            <li>
              <strong>Using personal Asana accounts:</strong> If the connected Asana account
              belongs to an individual, tasks get created under that person&rsquo;s workspace only.
              Use a team workspace and a service account or shared login if your team needs access.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Closing the Reply Loop</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform-to-Asana integration handles your internal workflow. But the person who
            submitted the form still needs a reply. Especially for external-facing forms — client
            intake, contact requests, support submissions — respondents expect acknowledgement and
            often a substantive response.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <Link href="/" className="text-indigo-600 hover:underline">FormReply</Link> handles
            that side of the workflow for Typeform contact and inquiry forms. It reads each new
            submission, drafts a personalised reply using GPT-4o, and delivers it to your inbox.
            You review, edit if needed, and send — without spending 10 minutes composing a response
            from scratch for every form submission.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Together, the two integrations give you full coverage: the task goes into Asana for
            tracking, and the respondent gets a personalised reply within minutes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Does Typeform have a native Asana integration?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. As of 2025, Typeform&rsquo;s built-in integrations do not include Asana. You need
            a third-party automation tool — Zapier or Make — to connect the two.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can I route submissions to different Asana projects based on a form answer?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, but it requires Zapier&rsquo;s Paths feature (available on the Starter plan and
            above, $20/mo). Set up a path condition based on the form answer — for example, send
            &ldquo;Bug&rdquo; submissions to your engineering project and &ldquo;Feature
            Request&rdquo; submissions to your product backlog.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can I set the Asana task assignee from a form answer?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes — if the form answer is the person&rsquo;s Asana account email address, Zapier can
            map it to the Assignee field. For dropdown-based routing (&ldquo;Which department?&rdquo;),
            use Zapier&rsquo;s Lookup Table to convert department names to the correct assignee
            emails.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What happens to submissions sent while the Zap is paused?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            They are not automatically processed when you re-enable the Zap. Zapier only processes
            submissions received while the Zap is active. To handle missed submissions, you can
            manually replay them from Zapier&rsquo;s task history if you&rsquo;re on a paid plan,
            or re-submit the form entries via Typeform&rsquo;s webhook replay option.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Is Make better than Zapier for this integration?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Make is more cost-effective at scale and better for complex multi-step workflows (create
            Asana task + update CRM + send Slack notification in one scenario). Zapier is faster to
            set up and more beginner-friendly. For a straightforward Typeform-to-Asana task creation,
            either works. Start with Zapier if you want the quickest setup; switch to Make if you
            hit the cost ceiling or need more flexibility.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Using Typeform for contact or inquiry forms?</h2>
          <p className="text-gray-600 mb-6">
            FormReply drafts personalised replies to each submission and delivers them to your inbox.
            You review and send — no copy-pasting, no blank page.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </article>
    </main>
  );
}
