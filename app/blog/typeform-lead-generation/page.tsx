import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Lead Generation: Why Your Form Converts but Your Follow-Up Doesn't — FormReply",
  description:
    "Typeform's conversational forms get high completion rates. But a completed form isn't a converted lead — the follow-up is where you win or lose them. Here's how to close that gap.",
  openGraph: {
    title: "Typeform Lead Generation: Why Your Form Converts but Your Follow-Up Doesn't",
    description:
      "Typeform captures leads beautifully. FormReply makes sure you reply to each one fast, with a personalized draft in your inbox within 10 seconds of every submission.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-lead-generation",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Lead Generation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Lead Generation: Your Form Is Working. Your Follow-Up Probably Isn&rsquo;t.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform converts visitors into form completions better than almost any other tool. The problem isn&rsquo;t
            the form. The problem is what happens — or doesn&rsquo;t happen — in the first hour after someone submits.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Typeform works well for lead generation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s conversational format is genuinely effective at lead capture. Traditional multi-field
            forms — name, email, company, message, submit — feel like filling out paperwork. People abandon them.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform presents one question at a time. It feels like a dialogue. Completion rates are consistently
            higher than static HTML forms for the same content. For a contact or inquiry form, that difference
            is measurable: more people who start the form actually finish it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You also get richer data. Because people feel less like they&rsquo;re filling out a form, they
            give more context — longer answers, more specific details about what they need. By the time a
            lead hits your inbox, you already know more about them than you would from a standard contact form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s the form doing its job. Good form.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The conversion gap: form completion vs. lead conversion
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A completed form is not a converted lead. It&rsquo;s an expression of interest, nothing more. The
            lead conversion happens when you have a conversation — and that conversation starts with your
            first reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the part most businesses underinvest in. They spend time and money optimizing the form
            (one-question-at-a-time layout, better copy, conditional logic) and then reply three days later
            with a generic &ldquo;Thanks for reaching out. We&rsquo;ll be in touch.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The person who submitted at 10am has moved on by Thursday. They emailed two other companies.
            One replied within an hour. That one probably has the conversation now.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Speed matters. Personalization matters more. A fast, generic reply is better than a slow one —
            but a fast, specific reply is what actually converts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why first replies are slow and generic
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The bottleneck isn&rsquo;t motivation. Most service businesses know that first-reply speed matters.
            The bottleneck is execution:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Writing a good personalized reply takes 10–20 minutes.</strong> You have to re-read
              the submission, decide what to address first, frame your response to match their specific
              situation, and write it in a way that moves the conversation forward without being salesy.
            </li>
            <li>
              <strong>Submissions arrive at inconvenient times.</strong> The lead at 4pm on a Friday. The
              inquiry that comes in while you&rsquo;re in client calls. Three submissions in one day when
              you have a project deadline.
            </li>
            <li>
              <strong>Templates feel impersonal.</strong> You could create reply templates, but Typeform
              gives you rich, specific information about each person — using a generic template feels
              like a waste of that data and signals to the lead that you didn&rsquo;t read their message.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result: good form, slow follow-up, leads lost to competitors who replied faster or better.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply fixes the follow-up problem
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to your Typeform via webhook. When someone submits your lead gen form,
            within 10 seconds you receive an email containing:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>A formatted summary of the submission — name, email, and all responses</li>
            <li>
              An AI-drafted personalized reply that references their name, their specific question or
              situation, and your business context
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft is built from the actual submission content — not a template. If the person mentioned
            a specific deadline, the draft acknowledges it. If they asked about a particular service or
            had a specific concern, the draft addresses it. It reads their message so you don&rsquo;t
            have to start from scratch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You review the draft, make any edits, and reply directly from your email client. The whole
            process takes two minutes instead of fifteen. You reply within the first hour instead of
            the next business day.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The complete Typeform lead generation workflow
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            The form layer — what Typeform handles
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s job is to convert visitors into completed submissions with rich, useful data:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>Conversational, one-question-at-a-time format for higher completion rates</li>
            <li>Conditional logic to ask relevant follow-up questions based on earlier answers</li>
            <li>
              Field types that capture qualitative context — long-text answers, dropdown selections,
              rating scales
            </li>
            <li>
              Native integrations (HubSpot, Google Sheets, Slack, email) to route submissions to the
              right places
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            The reply layer — what FormReply handles
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply&rsquo;s job is to make sure every lead gets a fast, personalized first reply:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>Reads the full submission content the moment it arrives</li>
            <li>Drafts a reply that references the specific person and their specific message</li>
            <li>Delivers the draft to your inbox in under 10 seconds</li>
            <li>Lets you review, edit, and send — no automated emails go out without your approval</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Setting it up</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Create your FormReply account at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>
              . Describe your business in 2–3 sentences — this context is what makes the drafts specific
              to you
            </li>
            <li>Copy your FormReply webhook URL</li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong> and paste
              the URL
            </li>
            <li>
              Submit a test response. You should receive a draft reply email within 10 seconds
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply runs alongside any other Typeform integrations you have — CRM syncs, Zapier workflows,
            Google Sheets — without interfering with them.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What kind of Typeform lead gen use cases this fits
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply is the right fit when:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Each lead is a person you need to reply to personally</strong> — service businesses,
              consultants, agencies, freelancers, B2B SaaS with sales-led conversion
            </li>
            <li>
              <strong>Submission volume is manageable (1–50/day)</strong> — if you&rsquo;re getting
              hundreds of form fills, you likely need a different model; FormReply is for businesses
              where each submission deserves a thoughtful response
            </li>
            <li>
              <strong>The form captures meaningful context</strong> — longer answers, specific questions,
              details about the person&rsquo;s situation — that you want to use in the reply
            </li>
            <li>
              <strong>You want to stay in control</strong> — FormReply drafts but never sends automatically;
              you review every reply before it goes out
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            It&rsquo;s less relevant for high-volume lead capture (e-commerce, newsletter sign-ups) or
            forms where no personal reply is expected.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            My Typeform form already sends a thank-you email. Is that the same thing?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Typeform&rsquo;s thank-you email is sent to the person who submitted — it&rsquo;s an
            acknowledgment, not a reply. FormReply sends a draft reply to <em>you</em>, built from
            the submission content, so you can respond with something personalized. They serve entirely
            different purposes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can I use FormReply with a Typeform quiz or multi-step lead form?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. FormReply receives the full submission payload — all answers, in order. If your form has
            conditional logic, scoring, or multiple sections, FormReply reads everything and factors it
            into the draft. More context in the form means a more specific draft reply.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send anything to the lead automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply only sends a draft to your inbox. Nothing reaches your prospect automatically.
            You always review before sending. This is intentional — automated personalized emails that
            haven&rsquo;t been reviewed create risk; FormReply removes effort, not oversight.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            How is the draft personalized if FormReply doesn&rsquo;t know my business?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            During setup, you provide a description of your business — what you do, who you serve, the
            tone you use. FormReply combines this context with the specific submission content to generate
            a draft that sounds like you replying to this specific person.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">
              Good forms get leads. Fast, personal replies convert them.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If your Typeform is generating inquiries and you want to make sure every one gets a fast,
              personalized reply without spending 20 minutes per lead, FormReply closes that gap. Setup
              takes 3 minutes.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform solves the form completion problem. It does that well. The conversion problem — turning
            a completed form into an actual client — lives in the follow-up, and specifically in the first
            reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Speed and personalization in that first reply are the two factors most correlated with lead
            conversion in service businesses. FormReply gives you both — a draft ready in 10 seconds,
            built from what the person actually wrote, ready for you to review and send.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. Works with any Typeform form. 3-minute setup.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Turn more Typeform leads into conversations
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply delivers a personalized reply draft to your inbox within 10 seconds of every Typeform
            submission — so you can reply fast, reply well, and convert more of the leads your form captures.
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
