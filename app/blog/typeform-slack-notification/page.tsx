import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Get Slack Notifications for Typeform Submissions (And Why Email Might Be Better) — FormReply",
  description:
    "Setting up Typeform Slack notifications is straightforward — but for contact form submissions where you need to reply, there's a faster approach. Here's the honest comparison.",
  openGraph: {
    title: "How to Get Slack Notifications for Typeform Submissions",
    description:
      "Typeform → Slack works well for internal alerts. But if you need to reply to the submitter, there's a better notification format than a raw Slack ping.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-slack-notification",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Setup Guide · Typeform Notifications</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Get Slack Notifications for Typeform Submissions (And Why Email Might Be Better)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Routing Typeform submissions to Slack is easy and genuinely useful — for internal data collection. For
            contact forms where you need to reply to the person, a raw Slack ping creates more work, not less.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to set up Typeform Slack notifications (the standard way)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a native Slack integration. Here&rsquo;s the full setup:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Open your Typeform form and go to <strong>Connect</strong> in the top navigation
            </li>
            <li>
              Find <strong>Slack</strong> in the integrations list and click <strong>Connect</strong>
            </li>
            <li>Authorize Typeform to post to your Slack workspace</li>
            <li>Choose which channel receives notifications (e.g., #leads, #contact-form, #support)</li>
            <li>
              Configure which fields appear in the Slack message — by default, all answers are included
            </li>
            <li>Save, then test with a real submission</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s it. Typeform&rsquo;s native Slack integration is polished and takes about 5 minutes. You can
            also do this via Zapier if you need more control over message formatting, field filtering, or routing to
            different channels based on answer logic.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            When Slack notifications work well for Typeform
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform → Slack notification is genuinely the right tool for several scenarios:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              <strong>Internal surveys or feedback forms</strong> — team polls, retrospectives, product feedback from
              employees. The data lands in Slack where your team already lives.
            </li>
            <li>
              <strong>Event registrations</strong> — knowing immediately when someone signs up is useful for capacity
              planning, and you don&rsquo;t need to send a personal reply.
            </li>
            <li>
              <strong>Lead capture with CRM routing</strong> — if Slack is just one step in a larger Zapier workflow
              (Typeform → Slack + Salesforce + assign task), the notification is a side-effect, not the primary action.
            </li>
            <li>
              <strong>Support ticket triage</strong> — for teams that already do support in Slack, routing form
              submissions into a support channel creates a natural handoff.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            In these cases, Slack is the right destination. The notification arrives where your team is, and no
            individual reply is expected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Where Slack notifications fall short: contact forms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There&rsquo;s one Typeform use case where Slack notifications create friction instead of removing it:
            contact forms where someone expects a personal reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a prospect fills out your &ldquo;Get in touch&rdquo; form, what happens next?
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Slack pings with the raw form data</li>
            <li>You read it in Slack, mentally process what they said</li>
            <li>You switch to your email client to compose a reply</li>
            <li>You re-read the submission in the Slack message while composing</li>
            <li>You send</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Slack notification told you something arrived — but it didn&rsquo;t actually help you respond. You
            still had to context-switch, re-read the submission in a different window, and write the reply from scratch.
            The notification is informational; the work is elsewhere.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This matters most when speed is important. Research consistently shows that responding to an inbound lead
            within 5 minutes dramatically increases your conversion rate. A Slack ping tells you something arrived —
            but doesn&rsquo;t accelerate how fast you can actually reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            An alternative approach: notification + draft reply in your inbox
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For contact forms, there&rsquo;s a different model: instead of a Slack alert that tells you to go write a
            reply, receive an email that contains both the submission and a ready-to-review reply draft.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is what FormReply does. When your Typeform contact form receives a submission:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>You receive an email within ~10 seconds</li>
            <li>The top of the email shows the full submission — every field, cleanly formatted</li>
            <li>Below it is an AI-drafted reply, written in your voice, using the context from the submission</li>
            <li>
              You review, adjust a sentence if needed, and hit forward — the submitter&rsquo;s email is pre-filled
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The &ldquo;notification&rdquo; and the &ldquo;reply workflow&rdquo; are collapsed into a single email. You
            don&rsquo;t need to switch tools.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison</h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Typeform → Slack</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply (email + draft)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Setup time</td>
                  <td className="py-3 pr-4 text-gray-600">~5 min</td>
                  <td className="py-3 text-gray-600">~3 min</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Notification speed</td>
                  <td className="py-3 pr-4 text-gray-600">Near-instant</td>
                  <td className="py-3 text-gray-600">~10 seconds</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reply draft included</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 text-gray-600">Yes — AI-generated</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Best for</td>
                  <td className="py-3 pr-4 text-gray-600">Internal alerts, team visibility</td>
                  <td className="py-3 text-gray-600">Contact forms needing a reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Tool switching to reply</td>
                  <td className="py-3 pr-4 text-gray-600">Yes (Slack → Email)</td>
                  <td className="py-3 text-gray-600">No — stays in email</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Cost</td>
                  <td className="py-3 pr-4 text-gray-600">Free (native) / $20+/mo (Zapier)</td>
                  <td className="py-3 text-gray-600">$9/month</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can you use both?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. If you want team visibility in Slack AND fast replies, you can run both simultaneously:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Connect the native Typeform → Slack integration for your #leads channel (team awareness)</li>
            <li>Add a FormReply webhook to the same Typeform form (personal reply workflow)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform supports multiple webhooks on a single form, so both fire on each submission. The Slack ping keeps
            your team in the loop; the FormReply email lets the person who handles replies move fast.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up FormReply alongside Slack
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you already have the Slack integration set up and want to add FormReply:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              Go to{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend.vercel.app/onboarding
              </Link>{" "}
              — enter your email and 2–3 sentences about your business
            </li>
            <li>Copy your unique webhook URL</li>
            <li>
              In Typeform: <strong>Connect</strong> → <strong>Webhooks</strong> → <strong>Add a webhook</strong> →
              paste the FormReply URL → save
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your Slack integration keeps working exactly as before. FormReply fires in parallel on each new submission.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">What FormReply doesn&rsquo;t do</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              FormReply is purpose-built for Typeform contact forms. It doesn&rsquo;t post to Slack, doesn&rsquo;t
              connect to CRMs, and doesn&rsquo;t support other form tools. If you need those things, the native Slack
              integration (or Zapier) is the right answer. FormReply&rsquo;s value is specifically: get a good reply
              draft in your inbox fast, so you can respond to the person who filled out your form before they move on.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQs</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can Typeform send a Slack notification without Zapier?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Typeform has a native Slack integration under <strong>Connect</strong> in your form settings. No
            Zapier account required. It posts submission data to a channel of your choice immediately on each new
            response.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            How do I customize the Slack message format from Typeform?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The native integration lets you choose which fields appear in the Slack message. For full control over
            formatting (custom blocks, conditional content, routing to different channels), you&rsquo;ll need Zapier
            or a custom webhook with a Slack incoming webhook URL.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Will FormReply replace my Slack notification?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No — they run independently. FormReply is a webhook pointed at your Typeform form. Your Slack integration
            is a separate connection. Both fire on every submission. You can keep your team Slack alert and add
            FormReply for whoever handles replies.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if I want AI-generated responses in Slack instead of email?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s a Zapier workflow: Typeform → OpenAI → Slack message formatter → post to channel. It works,
            but it&rsquo;s a multi-tool setup that requires ongoing maintenance. For the reply workflow specifically,
            most people find email more natural than Slack — the draft lands next to their other correspondence, and
            forwarding or replying is one click.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Add reply drafts to your Typeform contact form
          </h3>
          <p className="text-gray-500 mb-6">
            Works alongside your existing Slack notification. AI-drafted replies in your inbox within 10 seconds.
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
