import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform API Webhook: Receive Submissions Instantly — Then Actually Reply — FormReply",
  description:
    "Typeform webhooks deliver submission data to your endpoint in real time. What they don't do is write a reply to the person who just filled out your form. Here's how to close that gap.",
  openGraph: {
    title: "Typeform API Webhook: Receive Submissions Instantly — Then Actually Reply",
    description:
      "Typeform webhooks fire instantly. FormReply listens to those same submissions and drafts a personalized reply to your inbox in 10 seconds. No code required.",
    url: "https://formreply.app/blog/typeform-api-webhook",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide &middot; Typeform API &amp; Webhooks</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform API Webhook: Get the Data Instantly — Then Write the Reply
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform webhooks are fast and reliable. Within seconds of a form submission, your endpoint has the full
            payload. What the webhook doesn&rsquo;t include is what to say back to the person who just contacted you —
            and that&rsquo;s where most teams lose the lead.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Typeform Webhooks Actually Do</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Typeform webhook is an HTTP POST request that Typeform sends to a URL you specify every time someone
            completes your form. The payload is a JSON object containing the respondent&rsquo;s answers, a timestamp,
            the form ID, and a unique response ID.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s genuinely useful. It means you don&rsquo;t have to poll the Typeform API for new responses —
            Typeform pushes the data to you. Developers use webhooks to trigger downstream actions: adding a row to a
            database, creating a CRM contact, sending a Slack notification, kicking off an onboarding sequence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But notice what&rsquo;s missing from that list: writing a reply to the person who filled out the form.
            Webhooks are infrastructure plumbing. They move data between systems. They don&rsquo;t read what someone
            wrote and craft a thoughtful first response.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Set Up a Typeform Webhook</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Setting up a webhook in Typeform takes about two minutes:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Open your form in the Typeform workspace.</li>
            <li>Go to <strong>Connect &rarr; Webhooks</strong>.</li>
            <li>Click <strong>Add a webhook</strong>.</li>
            <li>Paste your endpoint URL — this needs to be a publicly reachable HTTPS endpoint.</li>
            <li>Optionally enable the secret token for payload verification.</li>
            <li>Click <strong>Save webhook</strong>.</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can test it immediately with the &ldquo;View deliveries&rdquo; button, which shows recent payload
            delivery attempts and their HTTP response codes. A 200 response from your endpoint means Typeform considers
            the delivery successful.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform retries failed deliveries (non-2xx responses) up to three times with exponential backoff, so
            transient server errors won&rsquo;t silently drop submissions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Webhook Payload Structure</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A typical Typeform webhook payload looks like this:
          </p>
          <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700 overflow-x-auto mb-6">
{`{
  "event_id": "abc123",
  "event_type": "form_response",
  "form_response": {
    "form_id": "XYZ789",
    "token": "response-token",
    "submitted_at": "2026-03-06T12:00:00Z",
    "definition": {
      "id": "XYZ789",
      "title": "Contact Us",
      "fields": [...]
    },
    "answers": [
      {
        "field": { "id": "field_01", "type": "short_text", "ref": "name" },
        "type": "text",
        "text": "Sarah Chen"
      },
      {
        "field": { "id": "field_02", "type": "email", "ref": "email" },
        "type": "email",
        "email": "sarah@example.com"
      },
      {
        "field": { "id": "field_03", "type": "long_text", "ref": "message" },
        "type": "text",
        "text": "Hi, I run a 12-person agency and we're evaluating tools to handle client inquiries faster..."
      }
    ]
  }
}`}
          </pre>
          <p className="text-gray-600 leading-relaxed mb-4">
            The <code className="bg-gray-100 px-1 rounded text-sm">answers</code> array contains everything the
            respondent typed. The structure is predictable and well-documented, which makes it easy to parse.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Webhooks Don&rsquo;t Solve</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s the gap that webhooks expose rather than close: you now have Sarah&rsquo;s data in your
            system. Your CRM has a new contact. Your Slack has a notification. Your database has a new row.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But Sarah is waiting for a reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Research consistently shows that contact form response times under five minutes produce dramatically higher
            conversion rates than responses that arrive hours later. When someone takes the time to describe their
            situation in a form, they&rsquo;re engaged right now — not in four hours when you get to your inbox.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Writing that first reply manually isn&rsquo;t the problem for one submission. It&rsquo;s the problem at
            scale — when you have 20 form submissions on a busy day and each one requires reading, parsing context, and
            writing a personalized response.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Using Webhooks to Trigger Automated Replies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The right approach combines webhook speed with intelligent reply drafting. The workflow looks like this:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Respondent submits your Typeform.</li>
            <li>Typeform fires the webhook payload to your endpoint (or directly to a service like FormReply).</li>
            <li>The payload is parsed — name, email, message context are extracted.</li>
            <li>An AI model reads the submission and drafts a personalized, contextual reply.</li>
            <li>The draft lands in your email inbox, ready to review and send in one click.</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Steps 2–5 take roughly 10 seconds. By the time you open your email after a submission, the draft is already
            there.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Building It Yourself vs. Using FormReply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You could build this pipeline yourself. The components are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>A webhook receiver (Node.js, Python, or any server-side runtime)</li>
            <li>Payload parsing and field extraction logic</li>
            <li>An OpenAI or Anthropic API call with a carefully crafted prompt</li>
            <li>Gmail API or SMTP integration to create the draft</li>
            <li>Error handling, retries, and delivery logging</li>
            <li>Infrastructure to keep the server running</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s a weekend project at minimum, plus ongoing maintenance. If you&rsquo;re a developer building
            a custom workflow where the webhook feeds multiple systems, building it yourself makes sense.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your goal is specifically &ldquo;reply to form submissions faster,&rdquo; FormReply handles all of that
            in a five-minute setup. You connect your Typeform account, connect Gmail, and the pipeline is live. No
            endpoint to host, no prompt engineering, no API billing to manage.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Webhook vs. API Polling: Which to Use</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform offers both a webhook push model and a REST API pull model. For real-time response use cases,
            webhooks are the right choice:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Approach</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Latency</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Complexity</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Webhook (push)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Seconds</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Requires public endpoint</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Real-time triggers, reply drafting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">API polling (pull)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Minutes (polling interval)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Simpler setup, no server needed</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Batch processing, reporting, exports</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            For auto-reply use cases, webhooks win because latency matters. A reply draft that arrives 45 minutes after
            submission (when a polling job finally runs) is far less valuable than one that appears in 10 seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How FormReply Uses Your Webhook Data</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When you connect Typeform to FormReply, you&rsquo;re not setting up a raw webhook — FormReply handles the
            connection through the Typeform API. But the underlying mechanism is the same: every new submission
            triggers an immediate processing pipeline.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply reads the submission fields, identifies the respondent&rsquo;s name, email, and message, and
            passes them to a language model with your form context as grounding. The output is a draft reply that
            sounds like you wrote it — not a template, not a canned &ldquo;thanks for your inquiry&rdquo; — a
            specific, contextual response to what this person actually said.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft appears in your Gmail inbox as a draft email addressed to the respondent. You read it, adjust if
            needed, and send. The whole loop — submission to sent reply — can happen in under a minute.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Do I need to expose a public endpoint to use Typeform webhooks?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, for raw webhook use. Typeform needs an HTTPS URL it can POST to. If you&rsquo;re building a custom
            integration, you&rsquo;ll need a server or a service like ngrok (for development). FormReply abstracts
            this — you connect via OAuth and FormReply handles its own endpoint.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I use Typeform webhooks with Zapier or Make?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Zapier and Make both support Typeform triggers via their native integrations, which use the Typeform
            API under the hood. You can send webhook data to any downstream service they support. If your goal is
            auto-reply, you could route through a Zapier step that calls an AI action — though FormReply is purpose-built
            for exactly this use case and requires no workflow configuration.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            What happens if my webhook endpoint is down when Typeform sends a submission?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform retries failed deliveries up to three times with exponential backoff. If all retries fail, the
            delivery is marked as failed in your webhook delivery log. You can manually retry from the Typeform
            dashboard. For production use cases, your endpoint should return 200 quickly and process the payload
            asynchronously.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            How do I verify webhook payloads are actually from Typeform?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Enable the secret token option when configuring your webhook. Typeform will include a SHA-256 HMAC
            signature in the <code className="bg-gray-100 px-1 rounded text-sm">Typeform-Signature</code> header of
            each request. Verify this signature against your secret before processing the payload.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does FormReply work if I already have a Typeform webhook set up?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Typeform supports multiple webhooks per form. Your existing webhook continues to fire independently.
            FormReply connects via a separate Typeform API integration and doesn&rsquo;t interfere with any existing
            webhook configuration.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Get a reply draft in your inbox 10 seconds after every submission
          </h2>
          <p className="text-gray-600 mb-6">
            FormReply connects to Typeform and Gmail. No webhook endpoint to host, no prompt engineering, no API
            billing. Just fast, personalized reply drafts — ready to review and send.
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
