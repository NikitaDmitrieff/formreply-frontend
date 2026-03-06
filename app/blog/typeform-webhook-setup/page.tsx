import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Set Up a Typeform Webhook (Step-by-Step Guide) — FormReply",
  description:
    "A practical guide to enabling Typeform webhooks: where to find the setting, what URL to paste, how to test, and what to do with the data once it arrives.",
  openGraph: {
    title: "How to Set Up a Typeform Webhook (Step-by-Step Guide)",
    description:
      "Enable Typeform webhooks in under 5 minutes. Exact UI steps, testing instructions, and what to do with the payload once it lands.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-webhook-setup",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Webhooks</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Set Up a Typeform Webhook (Step-by-Step Guide)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform&rsquo;s webhook is straightforward to enable &mdash; once you know where the setting lives. This
            guide walks through exact UI steps, testing, and what to actually do with the data once it arrives.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Typeform webhooks do (quick version)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You know what a webhook is. The short version specific to Typeform: every time someone submits your form,
            Typeform fires an HTTP POST to a URL you specify. The payload is JSON containing every field response,
            respondent metadata, and a form identifier. It happens in real time &mdash; within a second or two of
            submission.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Webhooks are available on all Typeform paid plans (Basic and above). They&rsquo;re not available on the
            free tier. If you&rsquo;re on a paid plan and haven&rsquo;t enabled one yet, the setup takes about three
            minutes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Step-by-step: enabling a webhook in Typeform
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s UI buries the webhook setting under the Connect tab, not Settings &mdash; which trips up
            most people the first time. Here&rsquo;s the exact path:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              Open <strong>Typeform</strong> and navigate to the form you want to connect.
            </li>
            <li>
              Click <strong>Connect</strong> in the top navigation bar (not Settings).
            </li>
            <li>
              Scroll down past the native integrations until you see the <strong>Webhooks</strong> section.
            </li>
            <li>
              Click <strong>Add a webhook</strong>.
            </li>
            <li>
              Paste your destination URL into the field that appears.
            </li>
            <li>
              Click <strong>Save webhook</strong>.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s the full setup. The webhook is active immediately &mdash; the next real submission will fire
            a POST to your URL.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Can&rsquo;t find the Webhooks section?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Make sure you&rsquo;re in the <strong>Connect</strong> tab, not the <strong>Settings</strong> tab. The
              Webhooks section sits below the third-party integrations list &mdash; scroll down past Slack, Google
              Sheets, and the others. If you&rsquo;re on the free Typeform plan, this section won&rsquo;t appear at
              all; webhooks require a paid plan.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What URL to paste
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is where most of the real decision-making happens. The URL needs to be a publicly reachable HTTPS
            endpoint that can accept a POST request and return a 200 response. A few common options:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              <strong>Your own server or serverless function</strong> &mdash; full control, but you&rsquo;re writing
              and maintaining the handler, parsing the JSON, and doing something useful with it.
            </li>
            <li>
              <strong>A workflow builder (Zapier, Make)</strong> &mdash; each has a &ldquo;Typeform&rdquo; trigger
              that gives you a webhook URL. Works, but adds latency and another monthly bill.
            </li>
            <li>
              <strong>A dedicated Typeform webhook receiver</strong> &mdash; a service built specifically to handle
              Typeform payloads, so you skip the plumbing entirely.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your goal is to do something with contact form submissions &mdash; read them, reply to them, route them
            &mdash; the third option is almost always faster to get working. <Link href="/onboarding" className="text-indigo-600 hover:underline">FormReply</Link> is
            built specifically for this: you paste the FormReply webhook URL into Typeform, and every submission
            triggers an AI-drafted reply that lands in your inbox within 10 seconds. No handler to write, no parsing
            to debug.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to test your webhook
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a built-in test mechanism. After saving a webhook, you&rsquo;ll see a{" "}
            <strong>Send test request</strong> button next to it in the Webhooks section. Clicking it fires a POST
            with a sample payload to your URL &mdash; the same structure as a real submission, with placeholder
            values.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Use this to confirm two things before relying on real traffic:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              Your endpoint is reachable from Typeform&rsquo;s servers (the test will fail if it&rsquo;s on
              localhost or behind a firewall without a tunnel like ngrok).
            </li>
            <li>
              Your handler is responding with a 2xx status code. Typeform considers anything else a failure and will
              retry.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            After clicking Send test request, look at the webhook entry &mdash; Typeform shows a delivery status
            indicator. Green means the endpoint received it and returned a success response. If it&rsquo;s red,
            the URL is either unreachable or the handler is returning an error.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What to do with the webhook data
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Receiving the payload is just the start. The Typeform webhook body is a JSON object with a{" "}
            <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-700">form_response</code>{" "}
            key containing the answers array. Each answer has a field reference, the field type, and the response
            value. Parsing it manually is doable but tedious, especially when field types vary (text, multiple choice,
            rating, date).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Once parsed, common things people do with Typeform webhook data:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Write rows to a spreadsheet or database</li>
            <li>Trigger a Slack notification with the submission content</li>
            <li>Add the respondent to a CRM or email list</li>
            <li>
              <strong>Draft and send a reply to the person who submitted</strong> &mdash; which is usually the highest-value
              action for a contact form
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            That last one is where most people lose time. Writing a thoughtful, personalized reply to every contact
            form submission takes 3&ndash;5 minutes per response. At any real submission volume, that compounds fast.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply handles this automatically: when your Typeform fires the webhook, FormReply parses the payload,
            passes it to GPT-4o-mini along with a brief description of your business and tone, and emails you a
            ready-to-review reply draft in about 10 seconds. You review it, make any edits, and send from your normal
            email client. The AI drafts; you stay in control.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Common issues and fixes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A few problems that come up reliably when setting up Typeform webhooks:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>Webhook not firing on real submissions.</strong> Check that the webhook is toggled{" "}
              <em>on</em> in the Webhooks section &mdash; there&rsquo;s an enable/disable toggle next to each entry.
              Saving a webhook doesn&rsquo;t automatically enable it if you had previously disabled it.
            </li>
            <li>
              <strong>Test works but real submissions don&rsquo;t.</strong> Confirm your form is published, not in
              draft mode. Unpublished forms don&rsquo;t fire webhooks on real submissions, but the test button
              bypasses this restriction.
            </li>
            <li>
              <strong>Payload structure is different than expected.</strong> The test payload uses placeholder values
              and may have a slightly different shape than a real submission for certain field types (especially
              file upload fields). Always test with a real submission in a staging environment before relying on the
              structure in production.
            </li>
            <li>
              <strong>Signature verification failing.</strong> If you&rsquo;re validating the{" "}
              <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-700">
                Typeform-Signature
              </code>{" "}
              header, make sure you&rsquo;re using the secret shown in Typeform&rsquo;s webhook settings (not your
              API key) and hashing the raw request body, not a parsed version. Signature verification is optional
              but recommended for production endpoints.
            </li>
            <li>
              <strong>Typeform retrying the webhook repeatedly.</strong> Typeform retries failed deliveries with
              exponential backoff. If your endpoint is intermittently returning errors, you may receive duplicate
              payloads. Make your handler idempotent &mdash; check a unique submission ID before processing.
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Stop writing replies from scratch</h3>
          <p className="text-gray-500 mb-6">
            Connect your Typeform. Get AI reply drafts in your inbox in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free 14-day trial &rarr;
          </Link>
          <p className="text-sm text-gray-400 mt-3">$9/month after trial &middot; Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
