import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Send an Email When Someone Submits Your Typeform — FormReply",
  description:
    "Three ways to send an email every time someone submits your Typeform: built-in notifications, Zapier, or an AI-drafted reply in your inbox in 10 seconds. Which one is right for you?",
  openGraph: {
    title: "How to Send an Email When Someone Submits Your Typeform",
    description:
      "Typeform has basic email notifications, but they don't write the reply for you. Here's how to go from submission to a personalized draft in 10 seconds.",
    url: "https://formreply.app/blog/typeform-send-email-on-submission",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Email Setup</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Send an Email When Someone Submits Your Typeform
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Getting notified about a new Typeform submission is step one. Actually replying to it —
            fast and personally — is where most people get stuck.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Typeform gives you by default</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Typeform includes a basic email notification feature. Every time someone submits your form,
            you can receive an email with the submission data: the respondent&apos;s name, email, and
            answers, neatly formatted.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            To turn it on, go to your form&apos;s <strong>Connect</strong> tab → <strong>Email notifications</strong>.
            Add your email address, save, and you&apos;re done. From that point on, every submission
            triggers an email to you.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This works fine if all you need is a record of responses. But there&apos;s a catch: the
            notification tells you what someone submitted. It doesn&apos;t help you respond to them.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You still have to read the submission, think about what to say, compose an email, and send it.
            For a contact form that gets 5 submissions a week, that&apos;s fine. For anything busier, it
            becomes a drain.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Option 1: Typeform&apos;s built-in email notification (free)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Best for:</strong> Low-volume forms where you just want a heads-up
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Setup is about 60 seconds. In your Typeform dashboard:
          </p>
          <ol className="list-decimal list-outside ml-6 space-y-2 mb-6 text-gray-700">
            <li>Open the form you want notifications for</li>
            <li>Click <strong>Connect</strong> in the top navigation</li>
            <li>Select <strong>Email notifications</strong></li>
            <li>Enter your email address and save</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            You&apos;ll start receiving notifications immediately. The email includes all submitted
            answers, the respondent&apos;s email if they provided it, and a timestamp.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Limitation:</strong> It&apos;s a static notification — no personalization, no
            reply draft. You&apos;re on your own when it comes to actually writing back.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Option 2: Use Zapier to route submissions to Gmail (paid)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Best for:</strong> Teams that already use Zapier for other automations
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can build a Zapier workflow that triggers on every Typeform submission and sends a
            formatted email to your inbox via Gmail. The email can include submission data in
            the body, using Typeform field values as variables.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The setup is a few steps:
          </p>
          <ol className="list-decimal list-outside ml-6 space-y-2 mb-6 text-gray-700">
            <li>Create a new Zap with Typeform as the trigger (New Entry)</li>
            <li>Connect your Typeform account and select the form</li>
            <li>Add a Gmail action: Send Email</li>
            <li>Map the submission fields into the email subject and body</li>
            <li>Test and activate</li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is more powerful than the built-in notification because you control the email format
            and can route to different addresses based on submission content.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Limitation:</strong> Zapier starts at $19.99/month. You&apos;re still getting raw
            submission data — not a reply draft. You still have to write the actual response to the
            person who submitted.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Option 3: Get an AI-drafted reply in your inbox (fastest)</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Best for:</strong> Contact forms where you need to actually reply to people
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The difference between a notification and a reply draft is significant. A notification
            tells you something happened. A draft handles the hardest part of responding — figuring
            out what to say.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            FormReply connects to your Typeform via OAuth (no webhook configuration needed), reads
            each incoming submission, and uses GPT-4o-mini to draft a personalized reply. That draft
            arrives in your inbox within ~10 seconds of the submission, ready to review and send.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The draft picks up the respondent&apos;s name, references their actual question or message,
            and suggests a relevant reply — all automatically. You read it, make any edits you want,
            and hit send.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What does the drafted email look like?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here&apos;s an example. Suppose someone submits your Typeform contact form with:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 font-mono leading-relaxed">
              Name: Sarah Chen<br />
              Email: sarah@company.com<br />
              Message: Hi, I&apos;m interested in your consulting services for a product launch next quarter. What&apos;s your availability and pricing?
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ten seconds later, you receive this draft:
          </p>
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 font-mono leading-relaxed">
              <strong>Subject:</strong> Re: Your inquiry<br /><br />
              Hi Sarah,<br /><br />
              Thanks for reaching out — a product launch next quarter sounds like an exciting project.<br /><br />
              I&apos;d love to learn more about what you&apos;re building and where you&apos;d like support. Would you be available for a 20-minute call this week to discuss fit and timing?<br /><br />
              Looking forward to it,<br />
              [Your name]
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            You didn&apos;t write any of that. You just review it, adjust the call link or your name,
            and send. Total time: under 60 seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which option is right for you?</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Option</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Cost</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">What you get</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">What you still do</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Built-in notification</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Free</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Raw submission data</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Write the reply</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Zapier + Gmail</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">$20+/mo</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Formatted notification</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Write the reply</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">FormReply</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">$19/mo</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">AI-drafted reply, ready to send</td>
                  <td className="border border-gray-200 px-4 py-3 text-gray-700">Review and send</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you&apos;re just monitoring a low-traffic form and don&apos;t need to reply to every
            submission, the built-in notification is enough. If you&apos;re routing submissions into a
            larger workflow (CRM, Slack, spreadsheet), Zapier is the right tool.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            If your Typeform is a contact form where people expect a personal reply — and you want to
            respond quickly without writing each email manually — FormReply is built specifically for
            that.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Common questions</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Does FormReply send the reply automatically?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            No. FormReply drafts the email and sends it to your inbox. You review it, make any edits,
            and send it yourself. This keeps you in control of every message that goes out under your
            name.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">What if the draft isn&apos;t quite right?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Edit it before sending. The draft is a starting point — it handles the blank-page problem
            and gets the structure right. You add your voice, adjust the specifics, and send.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Does it work with all Typeform plans?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yes. FormReply connects via Typeform&apos;s OAuth API, which is available on all plan levels
            including the free tier. No webhook setup, no developer work required.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How does setup work?</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            You connect your Typeform account (one click, OAuth), tell FormReply which form to watch,
            and enter your Resend email for delivery. That&apos;s it. You&apos;ll receive your first
            draft the next time someone submits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Getting an email when someone submits your Typeform is easy. Writing a thoughtful, timely
            reply to every submission is where the real effort is.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            FormReply handles the drafting so you can focus on the conversation. If your Typeform is a
            contact form and you care about response quality and speed, it&apos;s worth a try.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Get an AI reply draft for every Typeform submission
          </h3>
          <p className="text-gray-600 mb-6">
            Connect your Typeform in 60 seconds. Your first draft arrives the next time someone submits.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free trial — $19/month
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 mt-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-sm text-gray-500">
          <span>© 2025 FormReply</span>
          <div className="flex gap-6">
            <Link href="/support" className="hover:text-gray-700">Support</Link>
            <Link href="/privacy-and-tos" className="hover:text-gray-700">Privacy & Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
