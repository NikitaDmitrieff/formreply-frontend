import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Send Typeform Responses Back to the Respondent — FormReply",
  description:
    "Want to send a Typeform submission back to the person who filled it out? Here's how to do it — and the difference between forwarding answers and sending a real, personalized reply.",
  openGraph: {
    title: "How to Send Typeform Responses Back to the Respondent",
    description:
      "Sending Typeform answers back to respondents is possible with Zapier. Sending them a personalized reply based on what they wrote is a different problem — here's how both work.",
    url: "https://formreply.app/blog/typeform-send-responses-to-respondents",
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
            How to Send Typeform Responses Back to the Respondent
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            You want to send something back to the person who filled out your Typeform. Whether that&rsquo;s a copy of
            their answers, a summary, or a personalized reply — here&rsquo;s how each option works, what Typeform
            supports natively, and where you need extra tools.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            First: what exactly do you want to send back?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are three different things people typically mean when they say &ldquo;send Typeform responses to the
            respondent&rdquo; — and each requires a different solution:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>A copy of their answers</strong> — send the respondent a record of what they submitted
              (confirmation receipt style)
            </li>
            <li>
              <strong>A summary or calculation</strong> — send a result based on their answers (quiz score, assessment
              result, personalized recommendation)
            </li>
            <li>
              <strong>A real reply</strong> — send a message that responds to what they wrote, from you, addressing
              their specific inquiry
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Options 1 and 2 are automatable. Option 3 is where most workflows break down — because a real reply
            requires human judgment, context, and tone that templates and automations can&rsquo;t provide on their own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Option 1: Send a copy of their answers (native Typeform feature)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a built-in Respondent Notifications feature that emails the respondent after submission. You
            can configure it to include their answers in the email body.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>How to set it up:</strong>
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Open your Typeform form in the editor</li>
            <li>
              Go to <strong>Settings</strong> → <strong>Notifications</strong> → <strong>Respondent notifications</strong>
            </li>
            <li>Toggle on the email notification</li>
            <li>
              In the message body, use the <strong>@mention</strong> syntax to insert answer fields directly — for
              example, type <code>@</code> and select the field name
            </li>
            <li>Save — this fires automatically on every submission</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Limitations:</strong> This is a static template. The message structure is the same for every
            respondent. You can insert their answers verbatim, but you cannot write logic that changes what you say
            based on what they answered. Every respondent gets the same email shell with their own data plugged in.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Option 2: Send a result based on their answers (Zapier or Make)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you want to send something conditional — a different message based on what they answered — you need
            Zapier or Make.com. The typical setup:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              Typeform trigger (fires on each submission) → Zapier Formatter step (to parse and transform the answers)
              → Filter or Router (to branch based on answer values) → Gmail/Email action with the appropriate message
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            This works well for quiz results, assessment scores, recommendation engines. The conditional logic is what
            Zapier handles better than Typeform&rsquo;s native notifications.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Cost:</strong> Zapier Starter is ~$20/month. Free Zapier only supports single-step Zaps — you need
            multi-step for the Formatter and Router steps, which requires paid.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Limitation:</strong> Still a template-based approach. The email that goes out is pre-written by
            you. The automation routes to the right template — it doesn&rsquo;t generate an original reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Option 3: Send a real, personalized reply (the hard problem)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your Typeform is a contact form — someone describing their project, asking a question, requesting a
            quote — then neither of the above options solves the actual problem. The respondent submitted something that
            deserves a real reply. A reply that:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Acknowledges what they specifically said (not a template that applies to everyone)</li>
            <li>Addresses their actual question or situation</li>
            <li>Sounds like it came from a person who read their message</li>
            <li>Comes from your email, in your voice</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is a reply — and replying requires reading, understanding, and writing. Templates and automations
            can&rsquo;t do this genuinely. Which is why this step has always been manual: you read the submission and
            you write the email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The problem with manual replies:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Time — each reply takes 5–15 minutes of focused writing</li>
            <li>Delay — submissions arrive at all hours; you only reply when you&rsquo;re at your desk</li>
            <li>Inconsistency — quality varies with how busy or tired you are</li>
            <li>Scale — at 20+ submissions per week, it becomes a significant time cost</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What FormReply does differently
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply is built specifically for contact form reply workflows. It sits between your Typeform and your
            Gmail. When someone submits your form:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              FormReply receives the submission via webhook (within 2–3 seconds of submission)
            </li>
            <li>
              It reads every field — name, company, message, budget, timeline, project description — whatever your form
              collects
            </li>
            <li>
              It drafts a personalized reply using GPT-4o-mini, informed by a business description and tone
              preferences you set once during setup
            </li>
            <li>
              It emails the draft to you — the full submission at the top, the draft reply below — within 10 seconds of
              the form firing
            </li>
            <li>
              You read the draft, make any edits, and send it to the respondent. Or you discard it if the submission
              isn&rsquo;t relevant.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Nothing goes to the respondent automatically. You remain in full control of what gets sent. The AI handles
            the blank page problem — you handle the final judgment.
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8">
            <p className="text-gray-800 font-semibold mb-3">Example: what the email looks like</p>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm font-mono text-gray-600 space-y-2">
              <p><strong>New submission: Contact Form</strong></p>
              <p className="text-gray-400">─────────────────────────</p>
              <p><strong>From:</strong> Sarah Chen</p>
              <p><strong>Company:</strong> Bloom Studio</p>
              <p>
                <strong>Message:</strong> We&rsquo;re a branding agency looking to streamline how we handle intake for
                new client projects. We currently use Typeform and get 30-40 submissions a month. Wondering if
                FormReply could work for us.
              </p>
              <p className="text-gray-400">─────────────────────────</p>
              <p><strong>Draft reply:</strong></p>
              <p>
                Hi Sarah,
              </p>
              <p>
                FormReply would be a good fit for your intake volume. At 30-40 submissions/month, the time savings add
                up quickly — instead of writing each reply from scratch, you&rsquo;re reviewing a draft in 30 seconds.
              </p>
              <p>
                Free tier is 5 replies/month so you can test it before committing. Setup takes about 3 minutes — just
                connect your Typeform webhook. Happy to answer any questions about how it works for agency intake
                flows.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Comparison: all three options
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/4"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Native Typeform</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Zapier / Make</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Sends answers back</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">No (different goal)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Conditional messages</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">Yes (AI-generated)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Personalized reply draft</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 pr-4 text-gray-600">Possible (complex)</td>
                  <td className="py-3 text-gray-600">Yes — core feature</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Human reviews before send</td>
                  <td className="py-3 pr-4 text-gray-600">No (auto-fires)</td>
                  <td className="py-3 pr-4 text-gray-600">Optional</td>
                  <td className="py-3 text-gray-600">Always</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Setup time</td>
                  <td className="py-3 pr-4 text-gray-600">5 min</td>
                  <td className="py-3 pr-4 text-gray-600">20–30 min</td>
                  <td className="py-3 text-gray-600">3 min</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Cost/month</td>
                  <td className="py-3 pr-4 text-gray-600">Included in Typeform</td>
                  <td className="py-3 pr-4 text-gray-600">~$20+</td>
                  <td className="py-3 text-gray-600">$19</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Which one should you use?
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Use Typeform&rsquo;s native notifications if:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>You want to send a simple receipt — &ldquo;here&rsquo;s a copy of what you submitted&rdquo;</li>
            <li>Your form is a survey or registration, not a contact form</li>
            <li>Every respondent should get exactly the same message</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Use Zapier if:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>You need to send different messages based on specific answer values (quiz results, tiers, scores)</li>
            <li>You already have Zapier and want to keep everything in one place</li>
            <li>
              You need the Typeform submission to trigger multiple actions — CRM update, Slack notification, task
              creation — in addition to sending an email
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Use FormReply if:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Your Typeform is a contact form and you want to reply to each person specifically</li>
            <li>
              You want the reply to address what they actually wrote — their project description, their question, their
              budget — not just echo it back or apply a template
            </li>
            <li>You want to stay in control of what gets sent without writing each reply from scratch</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to set up FormReply (3 minutes)
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Go to{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app/onboarding
              </Link>{" "}
              — connect your Typeform account
            </li>
            <li>
              Enter your business name and 2–3 sentences about what you do and the tone you want (formal, friendly,
              concise)
            </li>
            <li>
              Select which Typeform form to connect — FormReply sets up the webhook automatically
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The next time someone submits your form, you&rsquo;ll get an email with their full submission and a draft
            reply — within 10 seconds. Review it, adjust if needed, send it to the respondent. That&rsquo;s the whole
            workflow.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Free tier: 5 replies, no card required</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              You can test FormReply with your real Typeform form before paying anything. The free tier gives you 5
              reply drafts — enough to see whether the quality matches your voice and whether the workflow fits how you
              work. No credit card required to start.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s native notifications handle confirmations. Zapier handles conditional routing. Neither
            handles the hardest part: writing a reply that addresses what someone actually wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            If your Typeform is a contact form and the problem is &ldquo;I need to reply to these people personally,
            but I don&rsquo;t have time to write from scratch every time,&rdquo; FormReply is built for exactly that.
            $19/month, 3-minute setup, draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Get a personalized reply draft for every Typeform submission
          </h3>
          <p className="text-gray-500 mb-6">
            AI drafts it in 10 seconds. You review and send. Free for 5 replies — no card required.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free →
          </Link>
          <p className="text-sm text-gray-400 mt-3">$19/month after 5 free replies · Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
