import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Email Notification: Get Submission Alerts + Reply Drafts in One Email — FormReply",
  description:
    "Typeform's built-in email notification tells you a form was submitted. FormReply's notification tells you what was submitted — and drafts your reply. Here's how to set up both.",
  openGraph: {
    title: "Typeform Email Notification: Get Submission Alerts + Reply Drafts in One Email",
    description:
      "Stop reading raw form data in notification emails. FormReply sends you a formatted submission summary with an AI-drafted reply — ready to review and send.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-email-notification",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Notifications</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Email Notification: From &ldquo;Someone Submitted&rdquo; to &ldquo;Here&rsquo;s Your Reply&rdquo;
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform&rsquo;s built-in notification emails tell you that a form was submitted. That&rsquo;s useful. But
            what you actually need is: what did they write, and what should you say back?
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The two types of Typeform email notifications
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are two notification flows in Typeform, and they serve very different purposes:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>Respondent notifications</strong> — emails sent to the person who filled out your form. A
              confirmation that their submission was received. Typeform handles this natively under form settings &rarr;
              Notifications.
            </li>
            <li>
              <strong>Owner notifications</strong> — emails sent to you when a submission comes in. Typeform also
              handles this natively, but the email just dumps the raw form data into your inbox. It&rsquo;s functional,
              but not actionable.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most people searching &ldquo;Typeform email notification&rdquo; want both — but the owner notification is
            usually the one that falls short. You get alerted, but you&rsquo;re still left staring at a wall of form
            responses and figuring out what to write back.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to set up Typeform&rsquo;s built-in owner notification
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s the standard Typeform notification setup:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Open your Typeform and go to <strong>Connect</strong></li>
            <li>Select <strong>Notifications</strong></li>
            <li>Under <strong>Send email to form owner</strong>, toggle it on</li>
            <li>Add the email address where you want to receive notifications</li>
            <li>Optionally customize the subject line and which fields to include in the email body</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s it. You&rsquo;ll now get an email every time someone submits. The email contains the
            submission data formatted as a list of field/answer pairs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This works for survey responses, registrations, and data-collection forms where you just need to know what
            was submitted. But for contact forms — where someone expects a personal reply — this notification is only
            half of what you need.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The gap: notification tells you &ldquo;someone submitted.&rdquo; It doesn&rsquo;t help you reply.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your Typeform is a contact form — a prospective client asking about your services, someone requesting a
            quote, a partnership inquiry — the notification email is just the start of a problem. You now have to:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Read through the raw submission carefully</li>
            <li>Switch to your email client and start a blank compose</li>
            <li>Figure out what to say, referencing the details from the form</li>
            <li>Write, review, send</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            For one submission, that&rsquo;s fine. If you get five contact form submissions on a busy Monday, or if one
            comes in at 11pm Sunday, the friction compounds. Inquiries sit unanswered not because you don&rsquo;t
            want to reply — but because writing a thoughtful reply takes time you don&rsquo;t have right now.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Research on B2B lead response consistently shows that responding within the first hour increases conversion
            likelihood significantly. The bottleneck isn&rsquo;t willingness — it&rsquo;s the blank page problem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply changes the notification email
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply adds a second layer on top of Typeform&rsquo;s existing notifications. When someone submits your
            contact form, you get a single email that contains:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>The full submission</strong>, formatted cleanly — name, company, message, budget, timeline,
              every field they filled in
            </li>
            <li>
              <strong>An AI-drafted reply</strong>, written specifically for this submission based on what they wrote
              and context about your business
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft lands in your inbox within 10 seconds of the submission. You open the email, read the submission,
            check the draft — usually it&rsquo;s 80–90% of what you&rsquo;d write yourself — make any edits, and
            forward or copy-paste it as your reply. Two minutes instead of fifteen.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Critically: FormReply never sends anything to the respondent directly. You review and approve every reply
            before it goes out. The AI eliminates the blank page, not your judgment.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Standard notification vs. FormReply: what each gives you
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Typeform notification</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply notification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Tells you who submitted</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Shows submission data</td>
                  <td className="py-3 pr-4 text-gray-600">Raw field dump</td>
                  <td className="py-3 text-gray-600">Formatted summary</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Helps you reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — you write from scratch</td>
                  <td className="py-3 text-gray-600">Yes — draft included</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Personalization</td>
                  <td className="py-3 pr-4 text-gray-600">N/A</td>
                  <td className="py-3 text-gray-600">Tailored to each submission</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Setup required</td>
                  <td className="py-3 pr-4 text-gray-600">Toggle in Typeform settings</td>
                  <td className="py-3 text-gray-600">3-minute webhook setup</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Works together?</td>
                  <td className="py-3 pr-4 text-gray-600">—</td>
                  <td className="py-3 text-gray-600">Yes — both fire simultaneously</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up FormReply alongside your existing Typeform notification
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don&rsquo;t need to replace or disable your current Typeform notification. Both can run simultaneously —
            Typeform webhooks support multiple destinations.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>Create your FormReply account</strong> at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>
              . Enter your email, business name, and a short description of what your form is for. This shapes how the
              AI drafts replies.
            </li>
            <li>
              <strong>Copy your webhook URL</strong> from your FormReply dashboard.
            </li>
            <li>
              <strong>Add the webhook to Typeform</strong>: in your form, go to{" "}
              <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong>, paste the URL, and save. Your existing
              notification settings are unchanged.
            </li>
            <li>
              <strong>Test it</strong> using Typeform&rsquo;s built-in webhook tester. Within 10–15 seconds
              you&rsquo;ll receive the notification email with the draft included.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            No Zapier. No code. No API keys on your end.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Common questions about Typeform email notifications
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can I send Typeform notifications to multiple email addresses?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Typeform&rsquo;s built-in notification supports multiple recipients — add them comma-separated in the
            notification settings. FormReply separately sends to the email address on your FormReply account.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Will both notifications arrive at the same time?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Near-simultaneously. Typeform fires the native notification and the webhook to FormReply at the same time
            on submission. The FormReply email (with the draft) typically arrives within 10–15 seconds of the
            submission.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if the form is used for surveys, not contact inquiries?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply is designed specifically for contact forms where respondents expect a personal reply —
            freelancers, agencies, consultants, small teams. If your Typeform is a feedback survey or data-collection
            tool where no personal reply is needed, FormReply won&rsquo;t add value and the standard Typeform
            notification is sufficient.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can I customize what the AI knows about my business?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. During onboarding you provide a business description and tone preference (formal, friendly, concise,
            detailed). The AI uses this context to tailor every draft. You can update it anytime from your dashboard as
            your services or positioning changes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply work with Typeform Pro or only certain plans?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects via Typeform webhooks, which are available on all Typeform paid plans (Basic and above).
            If webhooks aren&rsquo;t available on your plan, you&rsquo;d need to upgrade your Typeform plan first —
            but the webhook feature is standard on any paid Typeform tier.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">FormReply is built for Typeform contact forms</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If your Typeform is collecting contact inquiries, quote requests, or any form where someone expects a
              personal reply, FormReply turns that passive notification into a ready-to-send draft. If you&rsquo;re
              using a different form builder (Jotform, Tally, Gravity Forms), FormReply doesn&rsquo;t apply — it&rsquo;s
              Typeform-specific.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s built-in email notification is the right tool for knowing that a submission happened. For
            contact forms, that&rsquo;s only half the job. The other half is responding — quickly and personally.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply handles that half. Set it up once alongside your existing Typeform notification, and every
            contact form submission now arrives with a reply draft ready to review. No more blank pages, no more
            delayed responses because you ran out of time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. 3-minute setup. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Make your Typeform notification actionable
          </h3>
          <p className="text-gray-500 mb-6">
            Get submission summary + AI reply draft in every notification. Review, edit, send.
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
