import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Automatically Reply to Typeform Submissions (Without Zapier) — FormReply",
  description:
    "Stop writing contact form replies from scratch. This guide explains how Typeform webhooks work and how to use AI to draft personalized replies automatically — no Zapier required.",
  openGraph: {
    title: "How to Automatically Reply to Typeform Submissions (Without Zapier)",
    description:
      "Use Typeform webhooks and AI to draft personalized replies to every form submission — delivered to your inbox in 10 seconds.",
    url: "https://formreply.app/blog/typeform-auto-reply",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Automatically Reply to Typeform Contact Form Submissions (Without Zapier)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform&rsquo;s built-in webhook sends every submission to any URL in real time. Pair it with AI and you
            have a reply draft in your inbox before you&rsquo;ve opened the notification email.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Typeform webhooks actually do
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most Typeform users rely on email notifications: someone submits, Typeform sends you a summary, you open it
            and start writing a reply. Webhooks are a different mechanism — and a much more powerful one.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a webhook is enabled on your Typeform form, Typeform fires an HTTP POST request to a URL you specify
            the instant someone submits. The payload contains every field response in structured JSON. This happens in
            real time, before you&rsquo;ve seen the notification email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Webhooks are available on any Typeform paid plan. Most users have never used them — they were designed for
            developers, but the setup is genuinely simple: you paste a URL into your form&rsquo;s settings and
            Typeform does the rest.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The manual reply problem
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s how most Typeform users handle contact form submissions today:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Typeform sends an email notification with the submission details</li>
            <li>You open the email, read the submission</li>
            <li>You open Gmail (or wherever) and start writing a reply from scratch</li>
            <li>You spend 3–5 minutes crafting a personalized response</li>
            <li>You repeat this 20–40 times a week</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            At 20 submissions per week at 4 minutes each, that&rsquo;s 80 minutes of context-switching per week. It
            doesn&rsquo;t feel like much until you realize it&rsquo;s happening in 20 separate interruptions across
            your workday, each one pulling you out of whatever you were doing.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Templates help — but templated replies are obviously templated. They communicate &ldquo;you are a
            ticket,&rdquo; not &ldquo;I read what you wrote.&rdquo; For consultants, agencies, and anyone selling on
            the strength of their relationship, that matters.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How automated reply drafting works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The full workflow using FormReply looks like this:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Someone submits your Typeform contact form</li>
            <li>Typeform fires the webhook payload to FormReply</li>
            <li>FormReply reads all the form fields — name, email, message, and any other fields</li>
            <li>
              It passes the submission to GPT-4o-mini along with a short description of your business and your
              preferred tone
            </li>
            <li>
              A personalized reply draft is generated and emailed to you within ~10 seconds
            </li>
            <li>You review the draft, make any edits, and send from your regular email client</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The key design choice: FormReply does not send the email for you. It drafts and delivers to your inbox.
            You review, you send. This is intentional — AI-drafted replies going directly to real leads without human
            review is the wrong tradeoff. The 30-second review step is the right constraint.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For standard inquiries — &ldquo;what are your rates,&rdquo; &ldquo;how long does it take,&rdquo;
            &ldquo;are you available in March&rdquo; — the drafts are 80–90% ready to send with minor editing. For
            complex or unusual submissions, you&rsquo;ll edit more. Either way, you&rsquo;re editing, not writing
            from scratch.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setup: 3 minutes, no code
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don&rsquo;t need Zapier, Make, or any additional workflow builder. FormReply is a direct Typeform
            webhook receiver.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              <strong>Create your FormReply account</strong> at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app
              </Link>{" "}
              — enter your email, business name, and 2–3 sentences about what you do
            </li>
            <li>
              <strong>Copy your webhook URL</strong> — it&rsquo;s generated automatically in your dashboard
            </li>
            <li>
              <strong>Open Typeform</strong> → your form → Connect → Webhooks → add a new webhook → paste the URL →
              save
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s it. The next time someone submits your form, you&rsquo;ll have a reply draft in your inbox
            within 10 seconds.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Where to find Webhooks in Typeform</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              In Typeform, open your form → click <strong>Connect</strong> in the top nav → scroll down to{" "}
              <strong>Webhooks</strong> → click <strong>Add a webhook</strong> → paste your FormReply URL → click{" "}
              <strong>Save webhook</strong>. The section is not always immediately visible — it&rsquo;s under the
              Connect tab, not Settings.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What about Zapier?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can build a version of this in Zapier: Typeform trigger → OpenAI action → Gmail action. It works, but
            it has a few practical downsides:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Zapier adds latency — webhook processing can take 1–5 minutes on lower-tier plans</li>
            <li>The email format is raw text; there&rsquo;s no submission context shown alongside the draft</li>
            <li>OpenAI tokens and Zapier tasks are both billed, so costs add up at volume</li>
            <li>Maintaining the Zap when either Typeform or OpenAI changes their API requires manual updates</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply handles the full pipeline for $19/month: webhook receiver, AI drafting, structured email
            delivery with both the submission and the draft shown together. Setup is a single webhook URL.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Try it</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply offers a 14-day free trial with card required. The trial includes full product access — no
            feature limits. If it doesn&rsquo;t save you time on the first real submission, cancel and pay nothing.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stop writing replies from scratch
          </h3>
          <p className="text-gray-500 mb-6">
            Connect your Typeform. Get AI reply drafts in your inbox in 10 seconds.
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
