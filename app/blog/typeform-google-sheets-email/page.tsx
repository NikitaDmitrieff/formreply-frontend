import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform + Google Sheets + Email: Collect, Track, and Reply Without Zapier — FormReply",
  description:
    "You can log Typeform submissions to Google Sheets automatically. But Sheets can't reply to them. Here's how to set up the full workflow: collect → track → reply.",
  openGraph: {
    title: "Typeform + Google Sheets + Email: The Full Submission Workflow",
    description:
      "Typeform to Google Sheets handles collection and tracking. FormReply handles the reply. Two webhooks, five minutes, no Zapier required.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-google-sheets-email",
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
            Typeform + Google Sheets + Email: Log Every Submission and Reply to the Ones That Matter
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Google Sheets gives you a permanent record of every submission. Email is how you actually respond to them.
            These are two different jobs — and each has the right tool.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why people want both: Sheets for tracking, email for responding
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform → Google Sheets setup is one of the most common Typeform workflows. It makes sense: Sheets
            gives you a running log of every submission, filterable and sortable, accessible to your whole team,
            easy to export. If you get 50 contact form submissions a month, having them in Sheets lets you review
            patterns, track which leads you&rsquo;ve followed up on, and share the list with collaborators.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But the Sheets log doesn&rsquo;t help with what comes next: actually responding to the person who
            submitted. Sheets stores the data. It doesn&rsquo;t draft your reply, it doesn&rsquo;t send email, and
            it doesn&rsquo;t alert you when a high-priority inquiry comes in at midnight.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most people who set up Typeform → Sheets still end up manually scanning the sheet daily, opening each
            submission row, and writing a reply from scratch. The tracking problem is solved. The response problem
            isn&rsquo;t.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up Typeform → Google Sheets (the tracking layer)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a native Google Sheets integration. Here&rsquo;s the standard setup:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              In your Typeform, go to <strong>Connect</strong>
            </li>
            <li>
              Find <strong>Google Sheets</strong> and click <strong>Connect</strong>
            </li>
            <li>
              Authorize Typeform to access your Google account
            </li>
            <li>
              Select or create the Google Sheet where submissions should be logged
            </li>
            <li>
              Map your Typeform fields to sheet columns (Typeform usually does this automatically)
            </li>
            <li>
              Save — every new submission now appends a row to your sheet in real time
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            This works well and requires no ongoing maintenance. New submissions appear as rows automatically.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you prefer more control over the mapping or want to combine multiple forms into one sheet, Zapier and
            Make both have Typeform → Google Sheets templates with field-level mapping options. The native
            integration is sufficient for most use cases.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Adding the reply layer: what you need beyond Sheets
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once Sheets is handling your submission log, the next question is: how do you respond to the submissions
            that require a reply? Specifically, how do you respond fast and personally — without reviewing the sheet
            manually each day?
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are a few approaches:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Option 1: Typeform&rsquo;s built-in email notification</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Under Typeform&rsquo;s <strong>Notifications</strong> settings, you can receive an email alert for each
            submission. This tells you a form was submitted and shows the raw field data. You still write the reply
            yourself.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Good for awareness. Doesn&rsquo;t help with the writing.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Option 2: Zapier email action</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can set up a Zap that sends an email when a new Typeform response comes in, with the submission data
            merged into the email body. This is essentially a more customizable version of Option 1 — better
            formatting, but still no reply draft.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Option 3: FormReply (draft included)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects via a Typeform webhook and sends you an email that includes the full submission{" "}
            <em>and</em> an AI-drafted reply — written specifically for that submission, based on what the person
            said and context about your business.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The email arrives in your inbox within 10 seconds of the submission. You review the draft, edit if
            needed, and send. Your Sheets log is unchanged — FormReply runs independently.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The full workflow: Typeform + Google Sheets + FormReply
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s how the three tools work together when someone submits your contact form:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Tool</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Fires when</th>
                  <th className="text-left py-3 font-semibold text-gray-900">What it does</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Google Sheets</td>
                  <td className="py-3 pr-4 text-gray-600">Immediately on submission</td>
                  <td className="py-3 text-gray-600">Appends a row with all field data — permanent log</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">FormReply</td>
                  <td className="py-3 pr-4 text-gray-600">Within 10 seconds of submission</td>
                  <td className="py-3 text-gray-600">Sends you formatted summary + AI reply draft</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">You</td>
                  <td className="py-3 pr-4 text-gray-600">When you open the FormReply email</td>
                  <td className="py-3 text-gray-600">Review draft, edit if needed, reply directly to submitter</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            Sheets and FormReply both receive the submission simultaneously — Typeform webhooks support multiple
            destinations. They don&rsquo;t interfere with each other.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setup guide: adding FormReply to an existing Typeform + Sheets workflow
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you already have Typeform → Google Sheets running, adding FormReply takes 3 minutes and requires no
            changes to your existing setup.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Go to{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>{" "}
              and create your account. Enter your email, business name, and 2–3 sentences about what your business
              does and the tone you want for replies (formal, friendly, concise, detailed).
            </li>
            <li>
              Copy your unique FormReply webhook URL from your dashboard.
            </li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong>. Paste the URL
              and save. Your Google Sheets integration is untouched.
            </li>
            <li>
              Test it with a real submission (or use Typeform&rsquo;s webhook tester under the webhook settings).
              Within 15 seconds you&rsquo;ll get the FormReply notification with the draft.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Common questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Will adding FormReply affect my Google Sheets integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. They operate independently. Typeform sends the submission data to both at the same time — Sheets
            gets its copy, FormReply gets its copy. Neither affects the other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can I use this with Zapier if my Sheets integration runs through Zapier?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. FormReply connects at the Typeform webhook level, independently of however your Sheets connection
            is set up (native or Zapier). Both work simultaneously.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply also log submissions somewhere?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply doesn&rsquo;t maintain a submission log — that&rsquo;s Sheets&rsquo; job. FormReply is focused
            entirely on the reply-drafting step. Using both tools means each one does what it does best.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if I want to reply to all submissions, not just some?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply drafts a reply for every submission that comes through your webhook. You choose which ones to
            actually send — if a submission isn&rsquo;t relevant, you just ignore the draft. Nothing is sent
            automatically.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">FormReply is Typeform-specific</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              FormReply only works with Typeform contact forms — not Jotform, Tally, Google Forms, or other builders.
              If your contact form is on Typeform and you want to reply faster without losing the personal touch,
              it&rsquo;s built for exactly that.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google Sheets solves the tracking problem — you have a permanent, filterable record of every submission.
            FormReply solves the response problem — you have a reply draft ready within 10 seconds of each
            submission. They complement each other perfectly and require no changes to your existing Sheets setup.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. 3-minute setup. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Add the reply layer to your Typeform + Sheets workflow
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends you a personalized reply draft for every Typeform submission. Works alongside Google
            Sheets — no changes to your existing setup.
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
