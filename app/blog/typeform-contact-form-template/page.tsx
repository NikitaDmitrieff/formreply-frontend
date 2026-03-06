import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Contact Form Template: Fields, Logic, and Setup That Actually Converts — FormReply",
  description:
    "The best Typeform contact form template for B2B and service businesses. Which fields to include, how to use conditional logic, and how to handle replies automatically.",
  openGraph: {
    title: "Typeform Contact Form Template: Fields, Logic, and Setup That Actually Converts",
    description:
      "Build a Typeform contact form that qualifies leads and triggers a personalized reply in 10 seconds.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-contact-form-template",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide &middot; Typeform Setup</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Contact Form Template: Fields, Logic, and Setup That Actually Converts
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            A Typeform contact form is only as good as the follow-up it enables. This guide covers which fields
            to include, how to structure conditional logic for lead qualification, and how to automate your
            first reply so no inquiry sits unanswered for more than ten seconds.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Typeform for Contact Forms</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s conversational format — one question at a time — produces meaningfully better
            contact form data than traditional all-at-once layouts. Respondents write longer messages, answer
            more questions before dropping off, and provide more specific information about their situation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a contact form where you need to understand what someone is asking for before you reply,
            that data quality difference matters. A message that says &ldquo;interested in your services&rdquo;
            gives you nothing to work with. A Typeform that asked three focused questions first gives you
            company size, use case, and timeline before you ever read the open-text message.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Core Contact Form Template</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This template works for B2B service businesses, consultancies, agencies, and SaaS companies
            with a sales-led motion. Adjust field wording to match your business context.
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Type</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Required</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">First name</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Short text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Personalize your reply</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Work email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Reply destination</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Company name</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Short text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Context for reply, CRM routing</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">What are you looking for?</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Triggers conditional logic</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Company size</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Qualify lead, adjust reply tone</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Timeline</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Prioritize urgent inbound</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Tell me more about your situation</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Long text</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">The core message — drives reply quality</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">How did you hear about us?</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Multiple choice</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">No</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Attribution tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Keep the form to 6&ndash;8 questions maximum. Typeform&rsquo;s completion rates drop at around 8+
            questions for external forms where respondents have no prior relationship with your brand.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Adding Conditional Logic</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The &ldquo;What are you looking for?&rdquo; multiple choice question is the branch point. Common options:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li>General inquiry / pricing information</li>
            <li>Partnership or collaboration</li>
            <li>Support for an existing account</li>
            <li>Press or media</li>
            <li>Something else</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            In Typeform&rsquo;s Logic panel, set jump conditions so that:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>
              &ldquo;General inquiry / pricing&rdquo; → show company size and timeline questions (these
              qualify the sales lead)
            </li>
            <li>
              &ldquo;Support for existing account&rdquo; → skip company size and timeline, jump directly
              to the open-text message (support doesn&rsquo;t need the same qualification)
            </li>
            <li>
              &ldquo;Press or media&rdquo; → skip qualification questions, optionally show a &ldquo;link
              to media kit&rdquo; field or direct them to a different contact
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            This keeps the form short for respondents whose answers don&rsquo;t need qualification, while
            collecting the right data for leads who do.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Notifications and Routing</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s native notifications (under Responses &gt; Notifications) send an email to your
            address when a new submission arrives. For most small teams, this is sufficient to know a
            submission landed.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For more sophisticated routing, use Typeform&rsquo;s webhook to trigger actions based on
            submission data:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Route to Slack when timeline is &ldquo;immediately&rdquo;</li>
            <li>Create a HubSpot contact only when company size is above a threshold</li>
            <li>Send different notification emails based on what the respondent selected</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier and Make both have strong Typeform connectors if you need conditional routing without
            writing code.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Problem with Notifications Alone</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Notifications tell you someone submitted. They don&rsquo;t help you respond.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The workflow without automation:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-4">
            <li>Notification email arrives</li>
            <li>You open Typeform to read the full submission</li>
            <li>You switch to Gmail and start composing a reply</li>
            <li>You reference the form again to address their specific situation</li>
            <li>You send — often 30&ndash;120 minutes after submission</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            If the form is the first interaction a potential customer has with you, the speed of that reply
            is part of the first impression. Leads contacted within five minutes are 9x more likely to
            convert than leads reached after an hour. Most teams reply in 30&ndash;120 minutes. The math
            is unfavorable.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Automating the First Reply with FormReply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to your Typeform via the API and listens for new submissions. When one arrives,
            it reads every field — name, company, situation description, inquiry type — and generates a
            personalized reply draft that addresses what the specific person asked.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft appears in your Gmail inbox within 10 seconds. It&rsquo;s addressed to their email,
            references their name and company, and speaks to their specific situation — not a generic template.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You review the draft, make any adjustments you want, and hit send. Total time: under a minute
            from submission to sent reply. No tool switching, no copy-pasting, no starting from scratch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The richer the data your Typeform template collects — and why the field design above matters —
            the more specific and useful the FormReply draft will be. Open-text fields produce the best
            results because they give the AI the actual words the person used to describe their situation.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Full Setup Checklist</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Build the Typeform using the field template above</li>
            <li>Add conditional logic to the branch question (What are you looking for?)</li>
            <li>Enable Typeform email notifications for your own reference</li>
            <li>Connect Typeform to your CRM via Zapier or native integration if applicable</li>
            <li>Connect FormReply to the same Typeform (separate API connection, non-conflicting)</li>
            <li>Test with a real submission — confirm the Gmail draft arrives within 10&ndash;15 seconds</li>
            <li>Review and adjust the reply draft, then send</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            How many fields should a Typeform contact form have?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            6&ndash;8 fields is the practical ceiling for external contact forms. Beyond that, completion
            rates decline sharply. Typeform&rsquo;s own data suggests forms with fewer questions have
            significantly higher completion rates. Use conditional logic to keep the path short for each
            respondent type rather than showing all fields to everyone.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Should I make the message field required?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Making the long-text message field required creates friction for respondents who filled out
            your structured fields thoroughly. The structured fields (company size, timeline, inquiry type)
            give you enough to write a reply. The open-text field enriches the draft but shouldn&rsquo;t
            be a gate.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            What should the Typeform ending screen say?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Set an expectation for response time. Something like &ldquo;Thanks [name] — we&rsquo;ll be in touch within
            24 hours.&rdquo; If you&rsquo;re using FormReply, you can honestly set expectations of &ldquo;within a few
            minutes.&rdquo; Typeform&rsquo;s recall feature lets you use the respondent&rsquo;s first name in the
            ending screen for a personal touch.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does FormReply replace Typeform&rsquo;s built-in confirmation email?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No — they serve different purposes. Typeform&rsquo;s confirmation email is sent to the respondent
            and acknowledges receipt. FormReply drafts a reply from you to the respondent — a real, personal
            response to what they wrote. Both can (and should) run simultaneously. The confirmation email
            sets expectations; the FormReply draft is your actual response.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I use this template for client onboarding intake too?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, with modifications. Replace the &ldquo;What are you looking for?&rdquo; branch with
            onboarding-specific options (new project setup, account transfer, team addition). Add fields
            specific to your onboarding process — preferred start date, assigned team member, project type.
            The core structure (name, email, context, message) stays the same; the middle fields adapt
            to the intake context.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your Typeform collects it. FormReply replies to it.
          </h2>
          <p className="text-gray-600 mb-6">
            Connect your Typeform contact form to FormReply and get a personalized Gmail reply draft within
            10 seconds of every submission — no templates, no copy-pasting, no delay.
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
