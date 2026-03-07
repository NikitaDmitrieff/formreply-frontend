import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Auto-Reply to Google Forms Submissions with AI — FormReply",
  description:
    "Google Forms has no built-in reply feature. Skip the Apps Script and Google Sheets add-ons — connect FormReply via OAuth and get AI-drafted replies in your inbox in seconds.",
  openGraph: {
    title: "How to Auto-Reply to Google Forms Submissions with AI",
    description:
      "No Apps Script, no Zapier, no add-ons. Connect Google Forms via OAuth and get AI-drafted replies to every submission in your inbox.",
    url: "https://formreply.app/blog/google-forms-auto-reply",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Google Forms Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Auto-Reply to Google Forms Submissions with AI
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Google Forms has no built-in way to reply to respondents. Most workarounds involve Apps Script or
            clunky Google Sheets add-ons. FormReply connects via OAuth in one click and delivers AI-drafted
            replies to your inbox within seconds.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Google Forms reply gap
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google Forms is one of the most popular form builders in the world — and it has zero built-in
            reply functionality. When someone submits your contact form, you get a notification email with
            their answers. That&rsquo;s it. No reply button, no thread, no way to respond without manually
            opening your email client and writing from scratch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the single biggest gap in Google Forms for anyone using it as a contact form, intake form,
            or lead capture tool. The form collects the data perfectly well — but the moment you need to
            respond to the person who submitted it, you&rsquo;re on your own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The manual reply problem
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s how most Google Forms users handle submissions today:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Google Forms sends an email notification with the submission summary</li>
            <li>You open the email, read through the responses</li>
            <li>You copy the respondent&rsquo;s email address from the form data</li>
            <li>You open Gmail and compose a new message from scratch</li>
            <li>You spend 3-5 minutes crafting a personalized reply</li>
            <li>You repeat this 20-40 times a week</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            At 20 submissions per week at 4 minutes each, that&rsquo;s 80 minutes of context-switching per
            week — spread across 20 separate interruptions, each one pulling you out of whatever you were
            actually doing.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Templates help — but templated replies are obviously templated. They communicate &ldquo;you are a
            ticket,&rdquo; not &ldquo;I read what you wrote.&rdquo; For consultants, freelancers, and anyone
            selling on the strength of their personal attention, that matters.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Apps Script is not the answer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The standard advice for Google Forms auto-reply is &ldquo;write an Apps Script.&rdquo; You open
            the script editor, write a function that triggers on form submission, compose an email with
            GmailApp.sendEmail(), and deploy it. It works — technically.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            In practice, Apps Script auto-replies have serious limitations:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Replies are static templates — they can&rsquo;t reference the actual content of what someone wrote</li>
            <li>You need to maintain JavaScript code inside Google&rsquo;s script editor, which is fragile and hard to debug</li>
            <li>Apps Script has daily email sending quotas (100-1,500 depending on your Google account type)</li>
            <li>There&rsquo;s no review step — emails go out automatically, including to spam submissions and test entries</li>
            <li>When the script breaks (and it will), you get no notification — replies just stop going out silently</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google Sheets add-ons like Form Notifications or Email Notifications for Forms offer a no-code
            alternative, but they share the same core limitation: they send static, templated replies that
            don&rsquo;t actually address what the person wrote. They&rsquo;re confirmation emails, not replies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How automated reply drafting works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The full workflow using FormReply looks like this:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Someone submits your Google Forms contact form</li>
            <li>FormReply receives the submission instantly via its OAuth connection to your Google account</li>
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
            The key design choice: FormReply does not send the email for you. It drafts and delivers to your
            inbox. You review, you send. This is intentional — AI-drafted replies going directly to real leads
            without human review is the wrong tradeoff. The 30-second review step is the right constraint.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For standard inquiries — &ldquo;what are your rates,&rdquo; &ldquo;how long does it take,&rdquo;
            &ldquo;are you available in March&rdquo; — the drafts are 80-90% ready to send with minor editing.
            For complex or unusual submissions, you&rsquo;ll edit more. Either way, you&rsquo;re editing, not
            writing from scratch.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setup: 2 minutes, no code
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            No Apps Script. No Google Sheets add-ons. No Zapier. FormReply connects to Google Forms directly
            via OAuth — the same one-click authorization flow you use to sign into any Google app.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              <strong>Sign up at FormReply</strong> at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app
              </Link>{" "}
              — enter your email, business name, and 2-3 sentences about what you do
            </li>
            <li>
              <strong>Click &ldquo;Connect Google Forms&rdquo;</strong> — this opens the standard Google OAuth
              consent screen. Authorize FormReply to read your form submissions. One click, done.
            </li>
            <li>
              <strong>Select which forms to auto-reply to</strong> — your Google Forms appear in the dashboard.
              Toggle on the ones you want FormReply to monitor.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s it. The next time someone submits one of your connected forms, you&rsquo;ll have a
            reply draft in your inbox within 10 seconds. No webhook URLs to copy, no script editor to open,
            no spreadsheet add-ons to configure.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Why OAuth instead of webhooks?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Google Forms does not support webhooks natively. Other tools work around this with Apps Script
              triggers or polling — both fragile and error-prone. FormReply uses Google&rsquo;s official OAuth
              API to connect directly to your forms. This means no code to maintain, no scripts to break, and
              no third-party add-ons sitting between you and your data. Learn more about our{" "}
              <Link href="/for/google-forms" className="text-indigo-600 hover:underline">
                Google Forms integration
              </Link>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What about Zapier?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can build a version of this in Zapier: Google Forms trigger → OpenAI action → Gmail action. It
            works, but it has a few practical downsides:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Zapier adds latency — webhook processing can take 1-5 minutes on lower-tier plans</li>
            <li>The email format is raw text; there&rsquo;s no submission context shown alongside the draft</li>
            <li>OpenAI tokens and Zapier tasks are both billed, so costs add up at volume</li>
            <li>Maintaining the Zap when either Google Forms or OpenAI changes their API requires manual updates</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply handles the full pipeline for $19/month: OAuth connection, AI drafting, structured email
            delivery with both the submission and the draft shown together. Setup is a single OAuth click —
            no webhook URLs, no multi-step Zap configuration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Try it</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Want to see what an AI-drafted reply looks like before committing?{" "}
            <Link href="/tools/reply-generator" className="text-indigo-600 underline underline-offset-2">
              Try our free reply generator
            </Link>{" "}
            — paste any contact form submission and get a ready-to-send reply instantly, no signup required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply offers a free tier with 5 replies per month — enough to see if it fits your workflow.
            The full plan is $19/month with unlimited replies and full product access. If it doesn&rsquo;t
            save you time on the first real submission, cancel anytime.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stop writing replies from scratch
          </h3>
          <p className="text-gray-500 mb-6">
            Connect your Google Forms. Get AI reply drafts in your inbox in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free trial →
          </Link>
          <p className="text-sm text-gray-400 mt-3">Free tier: 5 replies/month · $19/month for unlimited</p>
        </div>
      </article>
    </main>
  );
}
