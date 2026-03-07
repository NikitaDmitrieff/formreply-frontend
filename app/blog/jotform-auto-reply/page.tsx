import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jotform Auto-Reply: How to Respond to Form Submissions Instantly with AI — FormReply",
  description:
    "Jotform's built-in autoresponder sends the same static template to everyone. Learn how to use AI to draft personalized replies to every Jotform submission automatically — no Zapier required.",
  openGraph: {
    title: "Jotform Auto-Reply: How to Respond to Form Submissions Instantly with AI",
    description:
      "Use Jotform webhooks and AI to draft personalized replies to every form submission — delivered to your inbox in 10 seconds.",
    url: "https://formreply.app/blog/jotform-auto-reply",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Jotform Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Jotform Auto-Reply: How to Respond to Form Submissions Instantly with AI
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Jotform&rsquo;s built-in autoresponder sends the same static template to everyone. Pair Jotform&rsquo;s
            webhook integration with AI and you get a personalized reply draft in your inbox before you&rsquo;ve even
            opened the notification email.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The problem with Jotform&rsquo;s built-in autoresponder
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jotform has a built-in autoresponder email feature. You can set it up under Settings &gt; Emails &gt;
            Autoresponder. It sends a confirmation email to the person who submitted your form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The problem: it sends the exact same message to everyone. Someone asking about pricing gets the same
            template as someone reporting a bug. Someone writing three paragraphs about their project gets the same
            two-sentence &ldquo;thanks for reaching out&rdquo; as someone who filled in only the required fields.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For simple confirmations — &ldquo;we got your form&rdquo; — this is fine. But if you&rsquo;re using
            Jotform as a contact form, intake form, or lead capture form, your reply is the first impression of
            your business. A static template communicates &ldquo;you are a ticket number,&rdquo; not &ldquo;I
            actually read what you wrote.&rdquo;
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The manual reply problem
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s how most Jotform users handle contact form submissions today:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Jotform sends an email notification with the submission details</li>
            <li>You open the email, read through what the person wrote</li>
            <li>You open Gmail (or wherever) and start writing a reply from scratch</li>
            <li>You spend 3-5 minutes crafting something that sounds personal</li>
            <li>You repeat this 20-40 times a week</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            At 20 submissions per week at 4 minutes each, that&rsquo;s 80 minutes of context-switching per week —
            spread across 20 separate interruptions that pull you out of whatever you were actually doing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How AI auto-reply drafting works with Jotform
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The full workflow using{" "}
            <Link href="/for/jotform" className="text-indigo-600 hover:underline">
              FormReply for Jotform
            </Link>{" "}
            looks like this:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Someone submits your Jotform form</li>
            <li>Jotform fires a webhook payload to FormReply</li>
            <li>FormReply reads all the form fields — name, email, message, and any custom fields</li>
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
            You review, you send. AI-drafted replies going directly to real leads without human review is the wrong
            tradeoff. The 30-second review step is the right constraint.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For standard inquiries — &ldquo;what are your rates,&rdquo; &ldquo;do you work with nonprofits,&rdquo;
            &ldquo;are you available next month&rdquo; — the drafts are 80-90% ready to send. For complex or unusual
            submissions, you&rsquo;ll edit more. Either way, you&rsquo;re editing, not writing from scratch.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setup: 3 minutes, no code
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don&rsquo;t need Zapier, Make, or any workflow builder. FormReply is a direct Jotform webhook
            receiver. Here&rsquo;s the full setup:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              <strong>Create your FormReply account</strong> at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app
              </Link>{" "}
              — enter your email, business name, and 2-3 sentences about what you do
            </li>
            <li>
              <strong>Copy your webhook URL</strong> — it&rsquo;s generated automatically in your dashboard
            </li>
            <li>
              <strong>Open Jotform</strong> → your form → Settings → Integrations → Webhooks → paste your
              FormReply webhook URL → save
            </li>
            <li>
              <strong>Submit a test entry</strong> — you&rsquo;ll have a reply draft in your inbox within 10 seconds
            </li>
          </ol>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Where to find Webhooks in Jotform</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              In Jotform, open your form → click <strong>Settings</strong> in the top nav → click{" "}
              <strong>Integrations</strong> on the left sidebar → search for <strong>Webhooks</strong> → click it →
              paste your FormReply webhook URL into the field → click <strong>Complete Integration</strong>.
              Webhooks are available on all Jotform plans, including the free plan.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Jotform autoresponder vs. FormReply: what&rsquo;s the difference?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both send an email when someone submits your form. The similarity ends there.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              <strong>Jotform autoresponder:</strong> sends the same static template to every respondent. You write
              it once. Everyone gets the same text regardless of what they submitted.
            </li>
            <li>
              <strong>FormReply:</strong> reads the actual submission content, drafts a personalized reply that
              references what the person wrote, and sends the draft to you (not to them) for review before sending.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jotform&rsquo;s autoresponder is a receipt. FormReply is a reply. They solve different problems. You can
            use both — the autoresponder for an instant &ldquo;we got your message&rdquo; confirmation, and
            FormReply for the actual personalized follow-up that converts leads.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What about Zapier?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can build a version of this in Zapier: Jotform trigger → OpenAI action → Gmail action. It works, but
            it has practical downsides:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Zapier adds latency — webhook processing can take 1-5 minutes on lower-tier plans</li>
            <li>You need to maintain a 3-step Zap and debug it when either API changes</li>
            <li>OpenAI tokens and Zapier tasks are both billed separately, so costs compound at volume</li>
            <li>The email format is raw text with no submission context shown alongside the draft</li>
            <li>Zapier&rsquo;s Starter plan is $19.99/month for 750 tasks — and each submission uses 3 tasks</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply handles the full pipeline for $19/month with a free tier of 5 replies/month: webhook receiver,
            AI drafting, and structured email delivery with both the submission and the draft shown together. Setup
            is a single webhook URL — no multi-step workflow to maintain.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Works with all Jotform plans
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Jotform&rsquo;s webhook integration is available on every plan — including the free tier. Whether
            you&rsquo;re on Jotform Starter, Bronze, Silver, Gold, or Enterprise, you can connect FormReply with
            the same webhook setup. No paid Jotform plan required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This also means you can test the full workflow without upgrading anything. Create a Jotform form on the
            free plan, connect FormReply, and submit a test entry to see the AI-drafted reply in your inbox.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Try it</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Want to see what an AI-drafted reply looks like before committing?{" "}
            <Link href="/tools/reply-generator" className="text-indigo-600 underline underline-offset-2">
              Try our free reply generator
            </Link>{" "}
            — paste any form submission and get a ready-to-send reply instantly, no signup required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply includes 5 free replies per month — no credit card needed. If you need more, the full plan is
            $19/month with unlimited forms and reply drafts.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stop writing replies from scratch
          </h3>
          <p className="text-gray-500 mb-6">
            Connect your Jotform. Get AI reply drafts in your inbox in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free — 5 replies/month
          </Link>
          <p className="text-sm text-gray-400 mt-3">$19/month for unlimited · Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
