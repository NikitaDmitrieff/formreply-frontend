import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Email to Respondent: How to Reply Personally to Every Submission — FormReply",
  description:
    "Typeform can send confirmation emails to respondents automatically. But a confirmation is not a reply. Here's how to send a real, personalized email to every Typeform respondent — without manual effort.",
  openGraph: {
    title: "Typeform Email to Respondent: How to Reply Personally to Every Submission",
    description:
      "Typeform's built-in respondent emails are generic confirmations. FormReply drafts a personalized reply to every submission in 10 seconds — delivered to your Gmail inbox, ready to send.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-email-to-respondent",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide &middot; Typeform Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Email to Respondent: Confirmation vs. Real Reply
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform lets you send an automatic email to every respondent when they submit. It&rsquo;s a useful feature
            &mdash; but it&rsquo;s a confirmation, not a conversation. Here&rsquo;s how to send an email to
            respondents that actually responds to what they wrote.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What &ldquo;Email to Respondent&rdquo; Usually Means</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When people search for &ldquo;typeform email to respondent,&rdquo; they&rsquo;re usually looking for one of
            two things:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li><strong>Typeform&rsquo;s built-in confirmation email</strong> — an automated email sent to the respondent immediately after they submit, confirming receipt.</li>
            <li><strong>A personalized reply</strong> — an email from a real person that references what the respondent wrote and actually continues the conversation.</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            These are fundamentally different things. The first is a system notification. The second is a
            human conversation starter. Typeform handles the first natively. The second requires a different approach.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Typeform&rsquo;s Built-In Respondent Email Works</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform includes a &ldquo;Respondent notifications&rdquo; feature under <strong>Connect &rarr; Email notifications</strong>.
            When enabled, it sends an automated confirmation email to the respondent after they submit — assuming
            you collected their email address in the form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can customize the subject line, the sender name, and add a message body. You can also include a
            &ldquo;recall information&rdquo; tag to insert the respondent&rsquo;s name or answers into the email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is genuinely useful for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>Confirming receipt so the respondent knows their submission went through</li>
            <li>Event registrations where the next step is a calendar invite or link</li>
            <li>Survey responses where you want to thank participants</li>
            <li>Lead magnets where the follow-up is a PDF or resource link</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            What it&rsquo;s <em>not</em> built for: contact form inquiries, sales inquiries, or any situation where
            the respondent asked a question and expects an answer.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Confirmation vs. Reply Gap</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Imagine someone fills out your Typeform contact form. They write:
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 my-6 text-gray-600 italic">
            &ldquo;Hi, I run a 12-person consulting firm and we&rsquo;re evaluating tools to automate our client
            intake process. We currently use spreadsheets. What would onboarding look like for a team our size?&rdquo;
          </blockquote>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s built-in respondent email sends them something like:
          </p>
          <blockquote className="border-l-4 border-gray-200 pl-4 my-6 text-gray-500 italic">
            &ldquo;Thanks for submitting! We&rsquo;ll be in touch soon.&rdquo;
          </blockquote>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s a dead end. The respondent asked a specific question and got a generic acknowledgment.
            The conversation hasn&rsquo;t started &mdash; it&rsquo;s been stalled.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A real reply to that submission would reference the 12-person team size, the spreadsheet-to-automation
            transition, and answer the onboarding question specifically. That email cannot be templated. It has to
            be written per submission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Manual Replies Don&rsquo;t Scale</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most businesses that get contact form submissions intend to reply personally. In practice, it rarely
            happens fast enough to matter.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The research on response time is stark: leads contacted within five minutes of submitting are 9x more
            likely to convert than those contacted after 30 minutes. After an hour, conversion probability drops
            sharply. After 24 hours, most leads have moved on entirely.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The problem is that writing a good first reply takes time. Reading the submission, understanding what
            the person needs, drafting something relevant and human — for a busy founder or a small sales team,
            this takes 10–20 minutes per submission. At 10 submissions per day, that&rsquo;s 2 hours of writing
            that could be 2 minutes of reviewing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How FormReply Closes the Gap</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to your Typeform account via the Typeform API. When a new submission arrives, it
            reads all the answers the respondent provided and drafts a personalized reply based on the specific
            content — not a template.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Within 10 seconds of the submission, a reply draft appears in your Gmail inbox. You review it, adjust
            the tone or add details if you want, and send. The respondent gets a real, personalized reply within
            minutes — not hours.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Approach</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Time to Draft</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Personalized?</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Human-Reviewed?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Typeform confirmation email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Instant</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No (template)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Manual reply</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">10–20 min</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Zapier + AI template</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Instant</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Partial</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No (auto-sends)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">FormReply</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">10 seconds</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (per submission)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (draft in Gmail)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            The key distinction: FormReply generates a draft, not an automatic send. Every reply goes through
            a human before the respondent sees it. This keeps quality high without sacrificing speed.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting Up Typeform + FormReply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The setup takes about five minutes:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Connect your Typeform account to FormReply (OAuth — no API keys required).</li>
            <li>Select the form you want to enable reply drafts for.</li>
            <li>Connect your Gmail account (OAuth).</li>
            <li>Optional: Add a sentence or two about your product/service to improve reply context.</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            From that point, every new submission generates a draft in your Gmail Drafts folder within 10 seconds.
            You don&rsquo;t need to log in to Typeform or a separate dashboard — the draft comes to where you
            already work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can Typeform automatically send a personalized email to respondents?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform can send automatic confirmation emails with some personalization (inserting the respondent&rsquo;s
            name or answers via recall information tags). But these are still templated messages — they don&rsquo;t
            generate unique replies based on the content of each submission. For truly personalized replies, you need
            a tool like FormReply that drafts per-submission responses.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does FormReply send the reply automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply creates a draft in your Gmail inbox. You review and send it yourself. This is intentional
            — automatic sends without human review create risk (wrong tone, wrong facts, wrong context). The draft
            workflow gets you to a high-quality reply in under a minute without giving up control.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            What if the respondent didn&rsquo;t provide their email?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply requires an email field in the form submission to generate a reply draft (it needs to know
            who to address the reply to). If no email is collected, no draft is generated. For contact forms, this
            is almost never an issue — email is a standard field.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Will I still get Typeform&rsquo;s notification emails?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. FormReply connects independently via the Typeform API and doesn&rsquo;t modify your Typeform
            notification settings. You can keep receiving Typeform&rsquo;s owner notifications and respondent
            confirmations exactly as configured.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            What types of Typeform forms does FormReply work with?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply works best with contact forms, inquiry forms, demo request forms, and any form where a
            human needs to reply to what was submitted. It&rsquo;s less relevant for survey forms, registration
            forms, or forms where no personal reply is expected.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Turn every Typeform submission into a personalized reply in 10 seconds.
          </h2>
          <p className="text-gray-600 mb-6">
            FormReply reads each submission and drafts a reply based on exactly what the respondent wrote —
            delivered to your Gmail inbox, ready to review and send.
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
