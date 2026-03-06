import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Send a Follow-Up Email After Every Typeform Submission — FormReply",
  description:
    "Learn how to automatically send a personalized follow-up email after every Typeform submission. Three methods compared — from manual to AI-drafted replies in 10 seconds.",
  openGraph: {
    title: "How to Send a Follow-Up Email After Every Typeform Submission",
    description:
      "Three ways to follow up after Typeform submissions — manual, templates, and AI-drafted replies. One of them takes 10 seconds. Here's how to set it up.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-follow-up-email",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Follow-Up</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Send a Follow-Up Email After Every Typeform Submission
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Every Typeform submission is a person waiting for a reply. Here&rsquo;s how to respond
            quickly and personally — without writing each email from scratch.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why follow-up speed matters more than you think</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A Harvard Business Review study found that companies responding to leads within an hour
            are 7 times more likely to have meaningful conversations than those responding even one
            hour later. Other research puts the conversion advantage of a sub-5-minute response at
            9x over a response sent after 30 minutes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This creates a real problem for small businesses and solo operators who use Typeform
            for lead gen or client intake. You know a fast reply matters. You also know that writing
            a genuinely personalized follow-up email — one that actually addresses what the person
            asked, not just a &ldquo;thanks for reaching out&rdquo; template — takes 3 to 5 minutes
            per submission.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            At 20 submissions a week, that&rsquo;s nearly two hours of writing. Most of it happens
            hours after the submission came in, when you finally get a block of time to sit down
            with your inbox.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The good news: there are three ways to fix this, and they sit at different points on the
            effort-vs-quality tradeoff.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 1: Typeform&rsquo;s built-in respondent notifications (free, not personalized)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a native notification system that can send an automated email to anyone
            who submits your form. Here&rsquo;s how to set it up:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600">
            <li>Open your form in the Typeform editor</li>
            <li>Click the <strong>Connect</strong> tab at the top</li>
            <li>Select <strong>Notifications</strong></li>
            <li>Enable <strong>Respondent notifications</strong></li>
            <li>Choose which field contains the respondent&rsquo;s email address</li>
            <li>Write your message and save</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            This sends every respondent the same message immediately after they submit. It works
            well as an acknowledgment (&ldquo;We received your inquiry — we&rsquo;ll be in touch
            within 24 hours&rdquo;) but it&rsquo;s completely static. Every person gets identical
            text, regardless of what they actually submitted.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a transactional confirmation, this is fine. For a genuine follow-up that references
            what someone asked, it isn&rsquo;t.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 2: Zapier or Make.com with templated variables (semi-personalized)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both Zapier and Make.com (formerly Integromat) can connect Typeform to Gmail, Outlook,
            or a transactional email service and populate reply templates with form field values as
            variables.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A basic Zapier setup looks like this:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li>Trigger: New entry in Typeform</li>
            <li>Action: Send email via Gmail with subject &ldquo;Re: &#123;&#123;First Name&#125;&#125;&rsquo;s inquiry&rdquo; and body containing <code>&#123;&#123;service_interest&#125;&#125;</code>, <code>&#123;&#123;budget&#125;&#125;</code>, etc.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is more personal than a static notification because it includes actual form field
            values in the email body. If your form asks &ldquo;What type of project are you looking
            for?&rdquo; with a dropdown, you can template the reply to say &ldquo;Thanks for
            reaching out about &#123;&#123;project_type&#125;&#125;.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The limitations are real though:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 text-gray-600">
            <li><strong>Templates break on edge cases.</strong> If someone selects &ldquo;Other&rdquo; in a dropdown or writes something unexpected in a freetext field, the templated reply looks awkward or wrong.</li>
            <li><strong>You still review nothing.</strong> The email goes directly to the lead. If the template produces a bad output, you&rsquo;ll find out from the lead, not before.</li>
            <li><strong>Zapier paid plans are required</strong> for multi-step Zaps (free tier is limited to 2-step). Make.com&rsquo;s free tier is more generous.</li>
            <li><strong>Setup takes 30-60 minutes</strong> and breaks if you change your form structure.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Method 3: AI-drafted replies in your inbox (personalized, 10 seconds)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The third approach uses Typeform&rsquo;s webhook system to pass the full submission to
            an AI model, which generates a personalized reply draft — and delivers it to your inbox
            before you&rsquo;ve even opened the Typeform notification email.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is what{" "}
            <Link href="/" className="text-indigo-600 underline underline-offset-2">
              FormReply
            </Link>{" "}
            does. Here&rsquo;s the workflow:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600">
            <li>Someone submits your Typeform</li>
            <li>Typeform fires a webhook to FormReply (you configure this once)</li>
            <li>FormReply reads all the form fields and passes them to GPT-4o-mini with a short description of your business</li>
            <li>A personalized reply draft arrives in your inbox in ~10 seconds</li>
            <li>You read it, tweak one or two lines if needed, and send it from your regular email client</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The key difference from the Zapier/template approach: the AI generates a genuinely
            written reply based on what the person actually asked, not a template with filled-in
            blanks. A submission that says &ldquo;I need a logo for my bakery, budget around $400,
            timeline 3 weeks&rdquo; produces a reply that addresses the bakery, the $400 budget,
            and the 3-week timeline — naturally, in full sentences.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            And critically: the draft goes to you, not to the lead. You stay in the loop. If the
            AI draft is off, you catch it. For business inquiries and client intake, this is the
            right tradeoff.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to set up Typeform follow-up emails with FormReply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Setup takes under five minutes:
          </p>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
            <li>
              <strong>Create a FormReply account</strong> at{" "}
              <Link href="/onboarding" className="text-indigo-600 underline underline-offset-2">
                formreply-frontend.vercel.app/onboarding
              </Link>
              . Enter your business context — 2 to 3 sentences about what you do and who you serve.
              This is what the AI uses to write in your voice.
            </li>
            <li>
              <strong>Copy your webhook URL</strong> from the FormReply dashboard.
            </li>
            <li>
              <strong>Go to your Typeform.</strong> Open the form you want to connect, click
              the <strong>Connect</strong> tab, then <strong>Webhooks</strong>, then{" "}
              <strong>Add a webhook</strong>. Paste your FormReply webhook URL and save.
            </li>
            <li>
              <strong>Submit a test entry</strong> to your Typeform. Within 10 seconds, a draft
              reply should arrive in your inbox.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s the entire setup. No Zapier account, no API keys, no ongoing maintenance
            when you change your form fields. The AI reads whatever fields exist in the payload and
            adapts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Which method is right for you?</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Method</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Personalization</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Setup time</th>
                  <th className="text-left py-2 font-semibold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Typeform notifications</td>
                  <td className="py-3 pr-4">None (static)</td>
                  <td className="py-3 pr-4">5 minutes</td>
                  <td className="py-3">Free</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Zapier / Make template</td>
                  <td className="py-3 pr-4">Low (field variables)</td>
                  <td className="py-3 pr-4">30–60 minutes</td>
                  <td className="py-3">$20+/month</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">FormReply (AI draft)</td>
                  <td className="py-3 pr-4">High (full AI reply)</td>
                  <td className="py-3 pr-4">5 minutes</td>
                  <td className="py-3">$9/month</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you just need a confirmation message to the submitter, Typeform&rsquo;s native
            notifications are the right choice — free, instant, no setup.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If your form collects project inquiries, consultation requests, or anything where the
            reply needs to genuinely address what the person asked, the AI-draft approach is
            meaningfully better and faster to set up than the Zapier path.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">A note on quality</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The quality of AI-drafted follow-ups depends directly on the business context you
            provide. A context that says &ldquo;We are a web design agency&rdquo; produces
            generic-sounding drafts. A context that says &ldquo;We are a two-person studio
            specializing in branding for food and hospitality businesses. We only take on 4-5
            projects per quarter. Our typical project is $3,000-$8,000 and takes 6-8 weeks&rdquo;
            produces drafts that sound like they came from the actual studio.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Spend 10 minutes on your business context the first time. The drafts you get back will
            reflect that investment on every single submission.
          </p>

          {/* CTA */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Follow up on every Typeform submission in 10 seconds
            </h3>
            <p className="text-gray-600 mb-6">
              FormReply delivers a personalized reply draft to your inbox every time someone
              submits your form. Review and send — no writing from scratch.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              Start free trial — $9/month
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-bold text-lg text-indigo-600 tracking-tight">
            FormReply
          </Link>
          <p className="text-sm text-gray-400">
            AI reply drafts for every Typeform submission. $9/month.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/blog/typeform-auto-reply" className="hover:text-gray-600">
              Auto-reply guide
            </Link>
            <Link href="/blog/typeform-contact-form-automation" className="hover:text-gray-600">
              Automation guide
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
