import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Intake Form Email: How to Reply Personally at Scale — FormReply",
  description:
    "Typeform intake forms collect rich information — but most teams follow up with a generic template or nothing at all. Here's how to send a genuinely personalized email reply to every intake submission.",
  openGraph: {
    title: "Typeform Intake Form Email: How to Reply Personally at Scale",
    description:
      "Client intake, job applications, vendor forms — every submission deserves a real reply. Here's how to automate personalized follow-up emails from your Typeform intake form.",
    url: "https://formreply.app/blog/typeform-intake-form-email",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Workflows</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Intake Form Email: How to Reply Personally at Scale
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Intake forms collect the richest information you&rsquo;ll ever get from a potential client, applicant, or
            partner. Most teams follow up with a generic acknowledgment — or nothing. Here&rsquo;s how to send a
            genuinely personal reply to every submission.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What makes intake forms different from contact forms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A contact form asks: name, email, message. An intake form asks: what&rsquo;s your budget, what&rsquo;s
            your timeline, describe your current situation, what have you already tried, what outcome are you looking
            for?
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The information is richer. The person filling it out has invested real effort. And the expected reply
            is not &ldquo;thanks, we&rsquo;ll be in touch&rdquo; — it&rsquo;s something that demonstrates you
            actually read what they said.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Common intake form types built on Typeform:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-1">
            <li>Client onboarding intake (freelancers, agencies, consultants)</li>
            <li>Job or program applications</li>
            <li>Vendor or partner applications</li>
            <li>Coaching or consulting intake questionnaires</li>
            <li>Service eligibility forms (financial, legal, medical)</li>
            <li>Grant or funding applications</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            In every case, the person who submitted the form is waiting for a real response — not a confirmation
            number.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Typeform sends by default
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a feature called Respondent Notifications. When enabled, it sends an automatic email to the
            person who submitted the form. You can customize the subject line and body, and pull in specific field
            values as variables.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For intake forms, this is almost always inadequate. The notification is a static template. You can insert
            their name or a specific answer, but the email reads the same way for every respondent — because it
            literally is the same email for every respondent. The only difference is which variable values are
            slotted in.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If someone spent 20 minutes filling out your intake form describing their specific situation, they
            can tell when the reply is a template. It undermines the trust your intake form was trying to build.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The three options for intake form email replies
          </h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Option 1: Write every reply manually</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You get notified about the submission, you read it, you open Gmail and write a reply. This produces the
            best quality replies — but it doesn&rsquo;t scale past a handful of submissions per week. At 20+ submissions
            weekly, it becomes a significant time sink. At 50+, it&rsquo;s a part-time job.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most teams start here. They eventually either hire someone to handle replies, move to templates, or let
            the response time slip — which kills conversion.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Option 2: Template-based automation (Zapier / Make)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You build a Zapier workflow that fires when Typeform receives a submission. The zap sends an email via
            Gmail, Mailchimp, or SendGrid using a template that pulls in form field values.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This solves the speed problem — the reply goes out in seconds. But it doesn&rsquo;t solve the
            personalization problem. The template approach forces you to decide in advance which fields matter and
            how to phrase the email around them. When respondents write something unexpected, the template
            can&rsquo;t adapt.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Common issues with template-based intake replies:
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed mb-4 space-y-1">
            <li>Templates become stale as form questions evolve</li>
            <li>Long-form &ldquo;describe your situation&rdquo; fields are ignored by templates</li>
            <li>Replies feel generic even with variable substitution</li>
            <li>Zapier multi-step zaps with conditional logic cost $50+/month</li>
            <li>Maintaining two systems (form + template) doubles the update burden</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Option 3: AI-drafted personalized reply</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is what{" "}
            <Link href="/" className="text-indigo-600 hover:underline">
              FormReply
            </Link>{" "}
            does. When a submission arrives, FormReply reads every field the respondent filled out — including
            free-text fields — and drafts a reply email that actually engages with their specific situation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft arrives in your inbox in about 10 seconds. It references what they wrote, acknowledges their
            specific context, and moves the conversation forward in a way a template cannot. You review it, make any
            edits, and send it — or approve as-is.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You stay in control of what goes out. Nothing is auto-sent without your approval. The difference is that
            80% of the work is already done by the time you open the email.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Comparing the approaches
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Factor</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Manual</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Template (Zapier)</th>
                  <th className="text-left py-3 text-gray-900 font-semibold">AI draft (FormReply)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Personalization quality</td>
                  <td className="py-3 pr-4 text-gray-600">High</td>
                  <td className="py-3 pr-4 text-gray-600">Low</td>
                  <td className="py-3 text-gray-600">High</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Scales past 20/week</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Handles free-text fields</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Setup time</td>
                  <td className="py-3 pr-4 text-gray-600">Zero</td>
                  <td className="py-3 pr-4 text-gray-600">Hours</td>
                  <td className="py-3 text-gray-600">Minutes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Human in the loop</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Monthly cost</td>
                  <td className="py-3 pr-4 text-gray-600">$0 (time cost)</td>
                  <td className="py-3 pr-4 text-gray-600">$50+</td>
                  <td className="py-3 text-gray-600">$19</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to connect your Typeform intake form to FormReply
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Setup takes under 5 minutes:
          </p>
          <ol className="list-decimal list-inside text-gray-600 leading-relaxed mb-4 space-y-3">
            <li>
              <strong>Create a FormReply account</strong> — free tier includes 5 replies/month, no credit card required.
            </li>
            <li>
              <strong>Connect your Typeform</strong> — FormReply uses Typeform&rsquo;s OAuth integration. You authorize
              the connection and select which form to watch.
            </li>
            <li>
              <strong>Add your email context</strong> — give FormReply a sentence or two about your business and what
              kind of replies to draft. &ldquo;I&rsquo;m a UX consultant. Replies should acknowledge their project
              context and suggest a 30-minute discovery call.&rdquo;
            </li>
            <li>
              <strong>Submit a test entry</strong> — fill out your own form. Within 10 seconds, a draft reply lands in
              your inbox. Review it to confirm the tone and personalization match what you want.
            </li>
            <li>
              <strong>Go live</strong> — every new submission from that point triggers an automatic draft. You get
              notified when a draft is ready.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What good intake email replies actually look like
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The difference between a template and a genuine reply is apparent in the first two sentences. A template
            says &ldquo;Thank you for reaching out. We&rsquo;ve received your inquiry and will be in touch
            shortly.&rdquo; A real reply says something like:
          </p>
          <blockquote className="border-l-4 border-indigo-200 pl-4 py-1 my-4 text-gray-600 italic">
            &ldquo;Hi Sarah — thanks for filling out the intake form. It sounds like you&rsquo;re in the middle of
            a rebranding project with a March deadline and a team of three, which is a tight but workable scope.
            I&rsquo;d love to learn more about the CMS migration piece you mentioned — that&rsquo;s often where
            timelines compress. Would a 30-minute call this week work for you?&rdquo;
          </blockquote>
          <p className="text-gray-600 leading-relaxed mb-4">
            That email could only have been written by someone who read the form. It references specific details,
            demonstrates comprehension, and advances the conversation with a concrete next step.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply drafts at this level because it reads the entire submission — not just the fields you
            mapped into a template.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            When to use each approach
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform respondent notification is fine for forms where the follow-up is a simple confirmation —
            appointment reminders, event registrations, newsletter signups. There&rsquo;s no expectation of a
            personalized reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Zapier template route works when you have high volume and fixed outcomes — when every respondent
            falls into one of a small number of buckets and the email content per bucket is stable.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For intake forms — where the information is rich, the respondents are qualified prospects or applicants,
            and the expected follow-up is a genuine human conversation — AI-drafted replies are the right tool.
            They&rsquo;re faster than writing manually, more personal than templates, and cost a fraction of
            what a multi-step automation stack costs.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">FormReply — AI-drafted replies for Typeform intake forms</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Connect your Typeform intake form and get a personalized reply draft in your inbox within 10 seconds
              of every submission. Free tier: 5 replies/month, no credit card required.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Try it free
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}
