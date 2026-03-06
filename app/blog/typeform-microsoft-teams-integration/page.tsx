import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Connect Typeform to Microsoft Teams (Step-by-Step) — FormReply",
  description:
    "Send Typeform submission notifications to Microsoft Teams channels automatically. Step-by-step guides for Power Automate and Zapier, with field mapping, use cases, and common mistakes.",
  openGraph: {
    title: "How to Connect Typeform to Microsoft Teams (Step-by-Step)",
    description:
      "Automatically post Typeform submissions to Microsoft Teams channels. Power Automate and Zapier methods covered with step-by-step instructions.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-microsoft-teams-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Integration Guide &middot; Collaboration</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Connect Typeform to Microsoft Teams (Step-by-Step)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Microsoft Teams is where enterprise teams collaborate. Typeform is where they collect
            structured information. Connecting the two means new form submissions surface immediately
            in the right Teams channel — visible to whoever needs to act on them, without email
            notifications that get buried. This guide covers two methods: Power Automate (Microsoft&rsquo;s
            own automation tool, included in most Microsoft 365 plans) and Zapier (easier setup,
            third-party cost).
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Connect Typeform to Microsoft Teams?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most Typeform workflows depend on email notifications — the form owner gets an email
            every time someone submits, forwards it to the relevant colleague, and the response gets
            buried in inboxes. For teams that live in Teams, this creates a broken handoff: important
            submissions (sales leads, support requests, HR intake forms, project requests) don&rsquo;t
            reach the right people in the right channel.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The integration routes each Typeform submission directly to a Teams channel as a formatted
            message. Sales submissions go to <strong>#sales-leads</strong>. Support tickets go to
            <strong>#support-queue</strong>. HR intake goes to <strong>#hr-ops</strong>. The right
            person sees it immediately and can respond or assign without context-switching to email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This also creates a lightweight shared log — anyone in the channel can see submission
            history, reply in thread, and track whether it was followed up on.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Two Methods: Power Automate vs. Zapier</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Factor</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Power Automate</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Zapier</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Cost</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Included in most Microsoft 365 plans</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free (100 tasks/mo) or $20/mo Starter</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Setup difficulty</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Moderate (less intuitive UI)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Easy (guided wizard)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Typeform support</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Via HTTP webhook connector</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Native Typeform connector</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Teams support</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Native (same ecosystem)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Native Teams connector</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message formatting</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Adaptive Cards (rich formatting)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Basic text/markdown</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Best for</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Teams already on Microsoft 365</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Quickest setup, non-Microsoft shops</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 1: Power Automate (Recommended for Microsoft 365 Teams)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Power Automate connects to Typeform via a webhook — you configure Typeform to send a
            payload to a Power Automate HTTP trigger URL, then format and route that payload to Teams.
            It&rsquo;s more setup than Zapier but costs nothing if your organisation is already on
            Microsoft 365.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 1: Create a New Flow in Power Automate</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Log in to <strong>make.powerautomate.com</strong> with your Microsoft 365 account. Click
            <strong>Create &rarr; Automated cloud flow</strong>. Name the flow (e.g., &ldquo;Typeform
            to Teams&rdquo;). In the trigger search, type &ldquo;When a HTTP request is received&rdquo;
            and select it. Click <strong>Create</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 2: Configure the HTTP Trigger</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In the trigger card, set <strong>Method</strong> to POST. Click <strong>Save</strong> to
            generate the HTTP POST URL. Copy this URL — you will paste it into Typeform in the next step.
            You can optionally paste a sample Typeform webhook payload into the &ldquo;Generate from
            sample&rdquo; field to automatically create the JSON schema (makes field mapping easier later).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 3: Add a Typeform Webhook</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In Typeform, open the form you want to connect. Go to <strong>Connect &rarr; Webhooks
            &rarr; Add a webhook</strong>. Paste the Power Automate HTTP POST URL. Click <strong>Save
            webhook</strong> and then <strong>Deliver a test payload</strong> to send a sample
            submission to Power Automate. Return to Power Automate — you should see the test run
            in the flow run history.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 4: Parse the Typeform Payload</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Add a <strong>Parse JSON</strong> action after the trigger. In the Content field, select
            the Body from the HTTP trigger. Click <strong>Generate from sample</strong> and paste
            the Typeform webhook payload (available in Typeform&rsquo;s Webhook documentation or
            from your test run). This maps the JSON fields into named variables you can reference
            in later steps.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 5: Post to Microsoft Teams</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Add a <strong>Post message in a chat or channel</strong> action from the Microsoft Teams
            connector. Configure:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li><strong>Post as:</strong> Flow bot</li>
            <li><strong>Post in:</strong> Channel</li>
            <li><strong>Team:</strong> Select your team from the dropdown</li>
            <li><strong>Channel:</strong> Select the target channel (e.g., #sales-leads)</li>
            <li><strong>Message:</strong> Compose using parsed JSON fields</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Example message format using dynamic content:
          </p>
          <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 overflow-x-auto mb-4">
{`New Typeform submission

Name: [name field]
Email: [email field]
Message: [message field]
Submitted: [submitted_at]`}
          </pre>
          <p className="text-gray-600 leading-relaxed mb-4">
            Save the flow. Submit a test Typeform response — it should appear in the Teams channel
            within 30&ndash;60 seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 2: Zapier (Quickest Setup)</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 1: Create a New Zap</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Log in to Zapier and click <strong>Create Zap</strong>. Search for &ldquo;Typeform&rdquo;
            as the trigger app. Select <strong>New Entry</strong> as the trigger event. Connect your
            Typeform account and select the specific form.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 2: Test the Trigger</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Click <strong>Test trigger</strong>. Zapier pulls the most recent submission from your
            Typeform. If no submissions exist, submit a test response first — Zapier needs real data
            to map fields in the action step.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 3: Add Microsoft Teams Action</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Click <strong>+</strong> to add an action. Search for &ldquo;Microsoft Teams&rdquo; and
            select it. Choose <strong>Send Channel Message</strong> as the action event. Connect your
            Microsoft Teams account (requires admin consent in your Microsoft 365 tenant if connecting
            organisation accounts).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Step 4: Configure the Channel Message</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Select your Team and Channel from the dropdowns. In the Message field, compose a
            notification using Typeform field data from the trigger step. Map fields from the
            Typeform submission to readable labels in the message body. Turn the Zap on and test
            with a live submission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Field Mapping Reference</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Teams Message Element</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Name (short answer)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message header / Bold label</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Prefix with &ldquo;New submission from:&rdquo; for quick scanning</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message body line</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Teams renders mailto links automatically</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message / Details (long text)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message body (indented)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Truncate at 500 chars for long-form inputs to keep cards scannable</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Inquiry type (dropdown)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Tag / Category label</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Use emoji prefix (e.g., &ldquo;Sales&rdquo;) to make type scannable at a glance</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Company / Organisation</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Subtitle line</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Useful for B2B lead forms — signals company size context immediately</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Submitted at (timestamp)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Footer / Metadata</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Format as local time using Power Automate&rsquo;s convertTimeZone function</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4 Use Cases That Work Well</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Sales Lead Routing</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Typeform demo request or contact form submission posts to <strong>#sales-inbound</strong>
            immediately. The sales team sees it in real time, can reply in thread to claim the lead,
            and follows up within minutes rather than hours. First-response time is a strong predictor
            of conversion for inbound leads.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Internal Project Request Intake</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Teams submit project requests via Typeform (scope, timeline, budget, priority). Each
            submission posts to <strong>#project-requests</strong> where a PM can triage it, add
            a reaction to acknowledge receipt, and reply in thread with next steps — all without
            leaving Teams.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. HR and People Ops</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            New job applications, onboarding form completions, and PTO requests submitted via Typeform
            route to the relevant HR channel. The people ops team gets real-time visibility without
            checking email or the Typeform dashboard continuously.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Customer Support Queue</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Typeform support intake form posts each ticket to <strong>#support-queue</strong> in
            Teams. Support agents can see all incoming requests, claim them by replying in thread,
            and track status without a separate ticketing system — useful for small teams before
            they need dedicated helpdesk software.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common Mistakes to Avoid</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Using a personal Microsoft account instead of an organisational account:</strong>
              Power Automate Teams actions require a Microsoft 365 organisational account. Personal
              Outlook/Hotmail accounts cannot post to Teams channels. Make sure you&rsquo;re logged
              in with your work account.
            </li>
            <li>
              <strong>Missing admin consent for third-party OAuth (Zapier):</strong> In many
              Microsoft 365 tenants, connecting Zapier to Teams requires admin approval. If the OAuth
              consent screen shows an error, contact your IT admin to grant Zapier access to the
              Microsoft Graph API.
            </li>
            <li>
              <strong>Posting to a channel everyone ignores:</strong> Pick a channel the relevant team
              actually monitors. A message in #general reaches everyone and is usually ignored. A message
              in #sales-leads reaches the right people and gets actioned.
            </li>
            <li>
              <strong>Dumping the full form payload unformatted:</strong> A raw Typeform webhook payload
              in a Teams message is unreadable. Take the extra 10 minutes to format the message with
              labelled fields and logical ordering. The goal is for someone reading the Teams message
              to know exactly what action to take without opening the Typeform dashboard.
            </li>
            <li>
              <strong>Not testing with real data before going live:</strong> Power Automate flows with
              Parse JSON steps sometimes fail silently when the actual payload differs from the sample
              schema (e.g., optional fields are missing). Test with multiple real submissions before
              treating the integration as production-ready.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What the Integration Doesn&rsquo;t Handle: Replying to Respondents</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform-to-Teams integration is excellent for internal visibility — your team sees
            submissions in real time and can coordinate a response. But it doesn&rsquo;t handle the
            respondent&rsquo;s side: the person who submitted the form is still waiting for a reply
            to their inbox.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For contact forms, inquiry forms, and demo requests, that reply is often the most
            important part of the workflow. A lead who submits a demo request and hears nothing for
            24 hours has likely moved on to a competitor.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <Link href="/" className="text-indigo-600 hover:underline">FormReply</Link> handles the
            respondent side. It reads each Typeform submission, drafts a personalised reply based on
            what the person wrote, and delivers it to your inbox ready to review and send. Combine it
            with the Teams integration and you have full coverage: your team gets notified in Teams,
            and the respondent gets a personalised reply within minutes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Does Typeform have a native Microsoft Teams integration?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. As of 2025, Typeform&rsquo;s built-in integrations do not include Microsoft Teams.
            Typeform&rsquo;s native integrations cover HubSpot, Salesforce, Slack, Google Sheets,
            Mailchimp, and a few others. For Teams, you need Power Automate (via webhook) or Zapier.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can I route different form answers to different Teams channels?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. In Power Automate, add a <strong>Condition</strong> or <strong>Switch</strong> step
            after parsing the Typeform payload. Branch based on the form answer — for example, if
            &ldquo;Inquiry type&rdquo; is &ldquo;Sales&rdquo; post to #sales-leads; if it&rsquo;s
            &ldquo;Support&rdquo; post to #support-queue. In Zapier, this requires the Paths feature
            (Starter plan, $20/mo).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can Power Automate post as a specific Teams user rather than a bot?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, with limitations. Instead of &ldquo;Post as: Flow bot&rdquo;, select &ldquo;Post as:
            User&rdquo; in the Teams action — this posts as the user whose account is connected to
            Power Automate. Note that this requires the user to have a Power Automate licence and
            the message appears as if they personally sent it, which can be misleading for automated
            notifications.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Is there a cost to using Power Automate for this?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Power Automate is included in Microsoft 365 Business Basic ($6/user/mo) and above. Most
            organisations already on Microsoft 365 have access. The free tier of Power Automate
            (available standalone) allows 750 runs/month. If you&rsquo;re processing more than 750
            Typeform submissions per month, you&rsquo;ll need a paid Power Automate plan
            (from $15/user/mo).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Which method should I use — Power Automate or Zapier?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your organisation uses Microsoft 365 and your IT team is comfortable with Power
            Automate, use that — it&rsquo;s included in your existing subscription, keeps data
            within the Microsoft ecosystem, and supports richer message formatting via Adaptive Cards.
            If you want the quickest setup and your team already uses Zapier for other automations,
            Zapier is faster to configure and easier to troubleshoot. For straightforward
            Typeform-to-Teams notifications, both work well.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Using Typeform for contact or inquiry forms?</h2>
          <p className="text-gray-600 mb-6">
            FormReply drafts personalised replies to each submission and delivers them to your inbox.
            Your team gets Teams notifications — respondents get a personal reply within minutes.
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
