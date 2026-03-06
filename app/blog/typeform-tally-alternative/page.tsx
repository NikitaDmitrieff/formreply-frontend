import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform vs Tally: Which Form Builder Should You Use? — FormReply",
  description:
    "Tally is a free, Notion-native form builder gaining fast adoption. Typeform is the established premium choice. Here's an honest comparison of features, pricing, integrations, and which to choose for your use case.",
  openGraph: {
    title: "Typeform vs Tally: Which Form Builder Should You Use?",
    description:
      "Tally is free and Notion-native. Typeform is polished and integration-rich. Here's the full comparison.",
    url: "https://formreply.app/blog/typeform-tally-alternative",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Comparison Guide &middot; Form Builders</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform vs Tally: Which Form Builder Should You Use?
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Tally launched in 2021 as a free, no-frills Typeform alternative and has steadily gained
            users among no-code builders, indie makers, and Notion-centric teams. Typeform remains
            the premium choice with richer features and deeper integrations. This comparison covers
            pricing, functionality, integrations, and which tool makes more sense depending on your use case.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Tally Is</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tally is a form builder built on a Notion-like block editor. You build forms by typing
            and inserting blocks — similar to writing a Notion page — rather than dragging and dropping
            components in a dedicated form editor. It launched with a generous free tier (unlimited
            forms, unlimited submissions) and has attracted a loyal user base among makers and small
            teams who need functional forms without paying for Typeform.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tally&rsquo;s key appeal:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
            <li>Free forever plan with no submission caps</li>
            <li>Familiar Notion-style editor for teams already in the Notion ecosystem</li>
            <li>Clean, minimal form UI that loads fast</li>
            <li>Native Notion integration as a first-class feature</li>
            <li>Embed anywhere with a lightweight script</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Feature Comparison</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Feature</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Tally</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free plan</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">10 responses/month</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Unlimited responses</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Conversational one-question-at-a-time UI</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (signature feature)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (optional)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Conditional logic</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (advanced branching)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (basic branching)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Logic jump depth</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Complex multi-condition rules</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Simpler single-condition jumps</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">File uploads</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Custom branding (remove logo)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Paid plans</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Paid plan ($29/mo)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Custom domain</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Native analytics</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes — drop-off, completion rate, per-question stats</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Basic submission overview</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Notion integration</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Via Zapier/Make</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Native (built-in)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Zapier integration</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (mature, extensive)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Webhook support</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid plans)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid plan)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">HubSpot / Salesforce native</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (business/enterprise)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Via Zapier only</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Payments / Stripe</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid plans)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid plan)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Form completion emails to respondent</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Yes (paid)</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Editor interface</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Drag-and-drop visual editor</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Notion-style block editor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Pricing Comparison</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Plan</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Tally</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">$0 — 10 responses/month, Typeform branding</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">$0 — unlimited forms, unlimited responses, Tally branding</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Entry paid</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">~$25/mo — 100 responses/month, custom branding</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">$29/mo — remove branding, custom domains, webhooks, Slack notifications</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Growth</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">~$50/mo — 1,000 responses/month, logic, analytics</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">N/A — single paid tier</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Business</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">~$83/mo+ — HubSpot/Salesforce native, priority support</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            The pricing gap is the defining factor for many teams. Tally&rsquo;s free plan has no
            submission cap — you can run a high-volume contact form indefinitely at $0. Typeform&rsquo;s
            free plan caps at 10 responses per month, which is essentially a test-drive tier.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Tally Makes More Sense</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Budget is zero or near-zero.</strong> Tally&rsquo;s free plan is genuinely functional
              for most use cases. If you&rsquo;re an indie maker, solo founder, or small team that needs
              a working contact form, intake form, or survey without a monthly bill, Tally is the answer.
            </li>
            <li>
              <strong>Your team lives in Notion.</strong> Tally&rsquo;s native Notion integration pushes
              submissions directly into a Notion database without Zapier. If you&rsquo;re already tracking
              everything in Notion, Tally removes one more middleware dependency.
            </li>
            <li>
              <strong>You prefer writing over clicking.</strong> The block editor appeals to teams
              used to Notion or linear writing flows. Building a form in Tally feels like writing a
              document — you type questions and hit enter to add the next block.
            </li>
            <li>
              <strong>You need basic conditional logic at zero cost.</strong> Tally includes branching
              on the free plan, which Typeform gates behind paid tiers. For simple if/then flows
              (show Question 4 only if Question 2 answer is &ldquo;Yes&rdquo;), Tally works fine at no cost.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">When Typeform Makes More Sense</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Completion rate is a priority.</strong> Typeform&rsquo;s one-question-at-a-time
              conversational format is its differentiating feature. For surveys and applications where
              response quality matters and completion rate is measured, Typeform&rsquo;s UX consistently
              outperforms traditional multi-field forms — including Tally&rsquo;s default layout.
            </li>
            <li>
              <strong>You need advanced logic.</strong> Typeform supports multi-condition branching,
              score-based routing, and complex jump sequences that Tally doesn&rsquo;t match. For long
              surveys with branching based on combinations of previous answers, Typeform is more capable.
            </li>
            <li>
              <strong>You need native CRM integrations.</strong> Typeform has native HubSpot and
              Salesforce integrations on paid plans. If your CRM is the system of record and you want
              submissions to arrive without Zapier in the middle, Typeform supports that. Tally requires
              Zapier or Make for any CRM connection.
            </li>
            <li>
              <strong>Analytics and drop-off data matter.</strong> Typeform shows you per-question
              drop-off rates, average completion time, and response trends over time. Tally&rsquo;s analytics
              are basic. For forms where optimizing completion rate is a business priority, Typeform&rsquo;s
              analytics make iteration data-driven.
            </li>
            <li>
              <strong>You&rsquo;re running a customer-facing enterprise product.</strong> Typeform&rsquo;s brand
              is recognized as professional and polished. For B2B SaaS products where perception of
              quality affects trust, Typeform&rsquo;s UI may carry more weight than Tally&rsquo;s.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Reply Gap Exists in Both Tools</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Neither Typeform nor Tally solves the problem of responding to submissions. Both tools
            collect data and notify you that a submission arrived. Neither drafts a personalized reply
            to the person who filled out the form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For contact forms, lead intake forms, and application forms, the submission is the start
            of a conversation — not the end of one. Whether you&rsquo;re using Typeform or Tally, someone
            on your team still has to read the submission, context-switch to email, and write a
            response. That gap often means hours of delay.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FormReply Works with Typeform</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to Typeform via the Typeform API. When a contact form submission
            arrives, FormReply reads the submission, drafts a personalized reply referencing the
            submitter&rsquo;s name, company, and the specific content of their message, and delivers the
            draft to your Gmail inbox within 10 seconds.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You review and send. The entire process takes under 30 seconds — compared to finding
            the notification email, clicking through to the response, opening a new compose window,
            and writing a reply from scratch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;re evaluating Typeform vs. Tally primarily for contact form use cases where
            the reply speed matters, FormReply works with Typeform to close that loop automatically.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Is Tally actually free, or does it have hidden limits?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tally&rsquo;s free plan has no submission caps and no form limits. The limitations are branding
            (Tally logo appears), no custom domain, no webhook support, and no Slack notifications.
            For basic data collection where submissions go to email or Tally&rsquo;s built-in dashboard,
            the free plan is fully functional with no hidden caps.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can I use Tally with Zapier to connect to other tools?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Tally has a Zapier integration that lets you route submissions to Google Sheets,
            Airtable, HubSpot, Slack, or any other Zapier-connected app. The Zapier connection works
            on Tally&rsquo;s free plan for Zaps that don&rsquo;t require Tally webhooks — Tally&rsquo;s webhook
            feature is behind the paid plan, but Zapier&rsquo;s Tally trigger uses Zapier&rsquo;s own polling
            mechanism and works on the free plan.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does Tally have the same conversational one-question-at-a-time format as Typeform?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes, Tally supports a conversational mode that presents questions one at a time, similar
            to Typeform&rsquo;s signature style. You can switch between standard (all questions visible)
            and conversational layouts in Tally&rsquo;s settings. The implementation is functional but less
            polished than Typeform&rsquo;s — Typeform has refined this interaction for several years longer.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Which has better completion rates, Typeform or Tally?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform publishes data suggesting conversational forms achieve 3&ndash;4x higher completion
            rates than traditional form layouts. Tally&rsquo;s conversational mode produces comparable
            results in practice, though independent comparison data is limited. For most teams, form
            design and question brevity have more impact on completion rate than the choice of tool.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does FormReply work with Tally forms?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Currently, FormReply integrates with Typeform via the Typeform API. Tally support is not
            available yet. If your primary use case is a contact form where you need automated reply
            drafting, building the form in Typeform gives you access to FormReply&rsquo;s reply automation.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Using Typeform? Get a reply draft in your inbox within 10 seconds.
          </h2>
          <p className="text-gray-600 mb-6">
            FormReply connects to your Typeform contact form and drafts personalized Gmail replies
            for every submission — so you review and send instead of writing from scratch.
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
