import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webflow Form Submissions: How to Auto-Reply with AI (No Code) — FormReply",
  description:
    "Webflow forms notify you but never reply for you. Learn how to auto-draft personalized replies to every Webflow form submission using a single webhook — no Webflow Logic, no Zapier, no code.",
  openGraph: {
    title: "Webflow Form Submissions: How to Auto-Reply with AI (No Code)",
    description:
      "Connect a single webhook in Webflow Site Settings and get AI-drafted reply emails for every form submission in 10 seconds. No code, no Zapier, no Webflow Logic.",
    url: "https://formreply.app/blog/webflow-form-auto-reply",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Webflow Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Webflow Form Submissions: How to Auto-Reply with AI (No Code)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Webflow forms collect submissions beautifully but do nothing with them. One webhook in Site Settings
            connects your forms to AI-drafted replies — delivered to your inbox before you&rsquo;ve opened the
            notification email.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The Webflow form problem
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Webflow&rsquo;s native form handling does exactly one thing: it stores submissions in the dashboard and
            optionally sends you an email notification. That&rsquo;s it. There is no built-in way to reply to the
            person who submitted. No autoresponder. No confirmation beyond the default &ldquo;Thank you&rdquo;
            message on the page.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            So here&rsquo;s what happens in practice: a potential client fills out your contact form at 2pm. You see
            the notification at 4pm. You open Gmail, re-read the submission, and spend 4 minutes writing a
            personalized reply. Meanwhile the lead has already emailed two other agencies. By the time you respond,
            you&rsquo;re third in line.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;re an agency or freelancer managing multiple Webflow client sites, multiply that by every
            site. Each one has its own forms, its own notification emails, its own manual reply workflow. The
            busier you get, the slower your responses become — exactly when speed matters most.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Webflow Logic and Zapier are overkill
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Webflow Logic is the official automation layer. You can build flows triggered by form submissions. But
            Logic has real limitations for this use case:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Logic flows are per-site, per-form — you rebuild the same automation for every client project</li>
            <li>There is no native AI or email-drafting action in Logic — you still need an external integration</li>
            <li>Logic is only available on Workspace plans, not on the basic Site plan</li>
            <li>Debugging Logic flows when they break is painful — limited logging, no replay</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Zapier route works: Webflow trigger, OpenAI action, Gmail action. But now you&rsquo;re paying for
            Zapier ($20+/month), managing Zap maintenance when APIs change, dealing with 1&ndash;5 minute polling
            delays on lower-tier plans, and configuring the whole chain per form. For agencies with 10+ client sites,
            that&rsquo;s 10+ Zaps to maintain.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both approaches solve the problem. Neither is simple. For something that should take 3 minutes to set up,
            you&rsquo;re spending an afternoon.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The webhook approach: one URL, all your forms
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Webflow has a lesser-known feature in Site Settings: webhook integrations. Under Site Settings &rarr;
            Integrations &rarr; Webhooks, you can add a URL that fires on the &ldquo;Form submission&rdquo; event.
            Every form on that site sends its data to the same webhook URL automatically.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the key insight: you don&rsquo;t need to configure anything per form. One webhook URL covers
            every form on the entire Webflow site. Add a contact form, an intake form, a quote request form — they
            all fire the same webhook.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply is a webhook receiver built for exactly this. It accepts the Webflow form payload, reads the
            fields, generates an AI-drafted reply using your business context, and emails the draft to you. The whole
            cycle takes about 10 seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setup: 3 minutes, no code
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            No Webflow Logic. No Zapier. No third-party form tools replacing Webflow&rsquo;s native forms.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              <strong>Sign up at FormReply</strong> &mdash;{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app/onboarding
              </Link>{" "}
              &mdash; enter your email, business name, and 2&ndash;3 sentences about what you do
            </li>
            <li>
              <strong>Copy your webhook URL</strong> from your FormReply dashboard &mdash; it&rsquo;s generated
              automatically
            </li>
            <li>
              <strong>In Webflow</strong>, open your site &rarr; Site Settings &rarr; Integrations &rarr; Webhooks
              &rarr; click <strong>Add Webhook</strong> &rarr; select <strong>Form submission</strong> as the trigger
              type &rarr; paste your FormReply webhook URL &rarr; save
            </li>
            <li>
              <strong>Submit a test form</strong> &mdash; you&rsquo;ll have an AI-drafted reply in your inbox within
              10 seconds
            </li>
          </ol>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Where to find Webhooks in Webflow</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Open your Webflow project &rarr; click the gear icon for <strong>Site Settings</strong> &rarr; go to
              the <strong>Integrations</strong> tab &rarr; scroll down to the <strong>Webhooks</strong> section
              &rarr; click <strong>Add Webhook</strong>. Select <strong>Form submission</strong> as the trigger type
              and paste your FormReply URL. This is site-level, not form-level &mdash; every form on the site will
              fire the webhook automatically.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How the AI reply drafting works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When someone submits your Webflow form, here&rsquo;s what happens:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Webflow fires an HTTP POST to your FormReply webhook URL with all form field data</li>
            <li>FormReply parses the submission &mdash; name, email, message, and any custom fields</li>
            <li>
              The submission is passed to GPT-4o-mini along with your business description and preferred tone
            </li>
            <li>A personalized reply draft is generated and emailed to you within ~10 seconds</li>
            <li>You review the draft, make any edits, and send from your regular email client</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply does not send the reply directly to your leads. It drafts and delivers to your inbox. You
            review, you send. AI-drafted replies going straight to real prospects without human review is the wrong
            tradeoff. The 30-second review step is the right constraint.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why this is perfect for agencies
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you build Webflow sites for clients, you already know the handoff problem. You deliver a beautiful
            site, the client&rsquo;s contact form starts collecting leads, and then &hellip; nothing. The client
            takes 48 hours to reply because they&rsquo;re busy running their business. Leads go cold.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With FormReply, you can add the webhook to every client site as part of your delivery process. Each
            client gets their own FormReply account with their business context and tone. When a lead submits, the
            client gets an AI-drafted reply they can send in 30 seconds instead of writing from scratch. It becomes
            part of the value you deliver, not just a pretty website.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>One webhook per Webflow site &mdash; covers all forms automatically</li>
            <li>Each client&rsquo;s account has their own business context and reply tone</li>
            <li>No per-form configuration &mdash; new forms are covered instantly</li>
            <li>Free tier includes 5 replies/month &mdash; enough for client demos</li>
          </ul>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">FormReply for Webflow</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              See exactly how FormReply works with Webflow, including setup details and use cases, on our{" "}
              <Link href="/for/webflow" className="text-indigo-600 underline underline-offset-2">
                dedicated Webflow integration page
              </Link>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            FormReply vs. the alternatives
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s how the options compare for auto-replying to Webflow form submissions:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              <strong>Webflow Logic + external email</strong> &mdash; requires Workspace plan, per-form setup, no
              native AI action, complex for multi-site agencies
            </li>
            <li>
              <strong>Zapier + OpenAI + Gmail</strong> &mdash; works but $20+/month for Zapier alone, 1&ndash;5 min
              polling delay, per-form Zap configuration, two separate billing systems
            </li>
            <li>
              <strong>Third-party form tools</strong> (Basin, Formspree, etc.) &mdash; replace Webflow&rsquo;s
              native forms entirely, most don&rsquo;t offer AI reply drafting
            </li>
            <li>
              <strong>FormReply</strong> &mdash; $19/month, one webhook URL per site, 10-second delivery, keeps
              Webflow&rsquo;s native forms, AI drafting included, no per-form config
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Try it</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Want to see what an AI-drafted reply looks like before connecting your Webflow site?{" "}
            <Link href="/tools/reply-generator" className="text-indigo-600 underline underline-offset-2">
              Try our free reply generator
            </Link>{" "}
            &mdash; paste any contact form submission and get a ready-to-send reply instantly, no signup required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply starts with a free tier of 5 replies per month &mdash; enough to test with real submissions.
            The full plan is $19/month with unlimited forms and AI reply drafting. If it doesn&rsquo;t save you time
            on the first real submission, cancel anytime.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stop writing replies from scratch
          </h3>
          <p className="text-gray-500 mb-6">
            One webhook in Webflow Site Settings. AI reply drafts in your inbox in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free &mdash; 5 replies/month
          </Link>
          <p className="text-sm text-gray-400 mt-3">$19/month for unlimited · Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
