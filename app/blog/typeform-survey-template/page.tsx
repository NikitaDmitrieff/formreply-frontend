import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Survey Templates: Best Free Templates for Every Use Case — FormReply",
  description:
    "Explore the best Typeform survey templates for customer feedback, lead generation, NPS, event registration, and contact forms. How to find, customize, and get more from each template.",
  openGraph: {
    title: "Typeform Survey Templates: Best Free Templates for Every Use Case",
    description:
      "The best Typeform survey templates for every use case — customer feedback, NPS, lead gen, contact forms, event registration, and more.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-survey-template",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Templates &middot; Surveys</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Survey Templates: The Best Free Templates for Every Use Case
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform&rsquo;s template library has over 800 pre-built forms covering nearly every
            survey category. But not all templates are equal — some are genuinely useful starting
            points; others are too generic to deploy without significant work. This guide covers the
            best templates by category, how to find them, and the customisation moves that turn a
            generic form into something that actually converts.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Where to Find Typeform Templates</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Templates live at <strong>typeform.com/templates</strong> and inside the Typeform
            dashboard under <strong>Create new form &rarr; Use a template</strong>. The dashboard
            view lets you filter by category — Customer Feedback, Lead Generation, Events, Research,
            Human Resources, and more.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            All templates are free to clone regardless of your Typeform plan. What your plan affects
            is what you can do with the form after cloning — response limits, logic jumps,
            integrations, and custom branding all depend on your subscription tier.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can also access community templates shared by other Typeform users via the
            &ldquo;Explore&rdquo; section. These vary widely in quality, so preview before cloning.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Best Templates by Category</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Customer Feedback Survey</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s <strong>Customer Feedback Survey</strong> template is one of the strongest
            in the library. It combines a rating question, an open-text follow-up, and a demographic
            question into a 4-screen flow that typically takes under 2 minutes to complete.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Best for:</strong> Post-purchase surveys, SaaS product feedback, service quality checks.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What to customise:</strong> Replace the generic rating label with something specific
            (&ldquo;How satisfied are you with your onboarding experience?&rdquo; outperforms
            &ldquo;How satisfied are you with us?&rdquo;). Add a conditional follow-up: if rating is 3
            or below, ask &ldquo;What would have made this better?&rdquo; — this is where the
            actionable insight is.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. NPS Survey (Net Promoter Score)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The NPS template is a 2-question form: a 0&ndash;10 rating (&ldquo;How likely are you to
            recommend us to a friend or colleague?&rdquo;) followed by an open-text reason. It&rsquo;s
            simple by design — completion rates are high precisely because it&rsquo;s fast.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Best for:</strong> Quarterly customer health checks, post-onboarding NPS, annual
            benchmarking.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What to customise:</strong> Add conditional branching based on score. Detractors
            (0&ndash;6) should see a different follow-up than Promoters (9&ndash;10). Promoters can be
            routed to a referral ask; Detractors to a support offer. This requires at least Typeform&rsquo;s
            Basic plan for Logic Jumps.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Lead Generation Form</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s lead gen templates are designed to replace static HTML forms with a
            conversational flow. Instead of presenting 8 fields at once, Typeform introduces one question
            at a time — which consistently improves completion rates for cold traffic.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Best for:</strong> Website contact pages, landing page lead capture, demo requests,
            quote requests.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What to customise:</strong> Keep it to 5 fields maximum for cold traffic. Name, email,
            company size, use case, and one qualifying question. Every additional field drops completion
            by roughly 5&ndash;10%. Remove the phone number field unless you absolutely need it — it has
            the highest abandonment rate of any form field.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Contact Form</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The contact form templates are intentionally minimal: name, email, subject, message.
            Typeform&rsquo;s conversational presentation makes even a basic contact form feel less
            transactional than a standard static form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Best for:</strong> Website contact pages, support intake, inquiry forms.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What to customise:</strong> Add a &ldquo;What is your inquiry about?&rdquo;
            dropdown at the top — this lets you route responses differently (sales inquiries vs. support
            requests vs. partnership proposals) and tells you which category is driving the most volume.
            Typeform&rsquo;s default notification email can handle initial confirmation, but it sends
            the same generic acknowledgement to everyone regardless of what they wrote.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Event Registration Form</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Event templates cover attendee registration, session selection, dietary requirements,
            and payment collection (with Stripe integration). They&rsquo;re particularly useful for
            webinars and small-to-medium in-person events.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Best for:</strong> Webinars, conferences, workshops, meetups.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What to customise:</strong> Add a &ldquo;How did you hear about this event?&rdquo;
            attribution question — over time this tells you which channels are actually driving
            registrations vs. which ones look good in last-click analytics. Connect to Google Sheets
            via Typeform&rsquo;s native integration to keep a live attendee list.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">6. Job Application Form</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            HR templates include job application forms that cover work history, skills, availability,
            and role-specific questions. These are genuinely useful for startups and small businesses
            that don&rsquo;t need a full ATS but want something better than email attachments.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Best for:</strong> Early-stage startups, small businesses, freelance role intake.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What to customise:</strong> Use Logic Jumps to branch based on the role applied
            for — a designer application should ask different follow-up questions than an engineer
            application. Add a file upload question for CVs (available on Basic plan and above).
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Template Comparison Table</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Template</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Avg. Questions</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Logic Jumps Needed</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Plan Required</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Best Integration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Customer Feedback</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">4&ndash;6</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Recommended</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Basic ($29/mo)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Google Sheets, Slack</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">NPS Survey</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">2&ndash;3</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Recommended</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Basic ($29/mo)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">HubSpot, Segment</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead Generation</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">5&ndash;8</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Optional</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free (limited responses)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">HubSpot, Salesforce</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Contact Form</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">4&ndash;5</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Optional</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Free (limited responses)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">FormReply, Email</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Event Registration</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">6&ndash;10</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Optional</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Basic ($29/mo) for payments</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Google Sheets, Stripe</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Job Application</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">8&ndash;12</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Recommended</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Basic ($29/mo) for file upload</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Notion, Airtable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Customise Any Template Effectively</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">1. Rewrite the Welcome Screen</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The default welcome screen is almost always too generic. Replace &ldquo;We&rsquo;d love to
            hear your feedback!&rdquo; with a specific value proposition: &ldquo;3 questions, 90 seconds
            &mdash; your answers shape our next product update.&rdquo; State the time commitment and
            what happens with the data.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">2. Replace Stock Images</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform templates ship with stock photography. Replacing them with your own brand imagery
            &mdash; product screenshots, team photos, office images &mdash; significantly increases the
            sense of authenticity and trust. This is available on all paid plans.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">3. Customise the Thank You Screen</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The default &ldquo;Thanks for completing this form!&rdquo; ending is a missed opportunity.
            Use it to: set expectations (&ldquo;We&rsquo;ll reply within 24 hours&rdquo;), encourage
            a next action (visit a page, book a call, follow on LinkedIn), or share a useful resource
            relevant to what the respondent just submitted.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">4. Add Logic Jumps for Personalisation</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The biggest upgrade you can make to most templates is adding conditional logic. A contact
            form that routes &ldquo;partnership&rdquo; inquiries to a different follow-up than
            &ldquo;support&rdquo; inquiries feels personalised even if the underlying form is simple.
            Logic Jumps require Typeform&rsquo;s Basic plan ($29/mo).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">5. Connect an Integration Before Going Live</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Never launch a template without connecting at least one integration. At minimum: connect
            Google Sheets so every submission is automatically logged in a spreadsheet you control.
            This ensures you never lose responses even if Typeform&rsquo;s dashboard has downtime or
            if you change plans.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Limitations to Know Before Using Templates</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Free plan caps responses at 10/month per form.</strong> Templates that go on
              high-traffic pages will hit this almost immediately. Plan to upgrade or use the form
              only for lower-volume use cases.
            </li>
            <li>
              <strong>Typeform branding on free plan.</strong> The &ldquo;Powered by Typeform&rdquo;
              footer appears on all free plan forms. It&rsquo;s not egregious but it is visible. Basic
              plan removes it.
            </li>
            <li>
              <strong>Logic Jumps require Basic plan.</strong> Many templates are designed with branching
              in mind but the logic isn&rsquo;t active until you add it yourself — and that requires
              a paid plan.
            </li>
            <li>
              <strong>File uploads require Basic plan.</strong> If you&rsquo;re cloning an HR or
              application template expecting to collect CVs or portfolios, you&rsquo;ll need to upgrade.
            </li>
            <li>
              <strong>Custom domains require Business plan.</strong> Embedding forms on your own
              subdomain (forms.yourcompany.com) requires the Business tier ($99/mo).
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The One Thing Templates Don&rsquo;t Handle: Replies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every template category generates submissions that expect a response. Contact form
            submissions expect replies. Lead gen forms expect follow-up. Customer feedback submissions
            often expect an acknowledgement. NPS detractors expect someone to reach out.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s built-in response handling sends the submitter a generic confirmation
            email (on paid plans) and sends you a notification. Neither is a personalised reply based
            on what the person actually wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <Link href="/" className="text-indigo-600 hover:underline">FormReply</Link> closes that gap
            for contact and inquiry forms specifically. It reads each Typeform submission, drafts a
            personalised reply using the respondent&rsquo;s actual content, and delivers it to your
            inbox ready to review and send — without requiring you to write from scratch each time.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Frequently Asked Questions</h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Are Typeform templates really free?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes — cloning any template is free on all Typeform plans including the free tier. What
            you pay for is features like Logic Jumps, file uploads, custom branding, and higher
            response limits. You can start with any template on the free plan; you&rsquo;ll just hit
            the 10 responses/month limit quickly if the form sees real traffic.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can I embed a Typeform template on my website?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. After cloning and customising a template, go to <strong>Share &rarr; Embed</strong>
            in the Typeform dashboard. You can embed as a fullpage, popup, slider, or inline widget.
            Copy the provided code snippet and paste it into your website&rsquo;s HTML. Works with
            any website builder or CMS.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Which template has the highest completion rate?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Shorter templates perform better. NPS surveys (2&ndash;3 questions) typically see 40&ndash;60%
            completion rates when sent to warm audiences. Lead gen forms lose roughly 5&ndash;10%
            completion per additional field beyond 4. Contact forms with 4&ndash;5 fields outperform
            8-field equivalents by 20&ndash;30% on most sites.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Can I duplicate a template to create multiple versions for A/B testing?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. In the Typeform dashboard, click the three-dot menu on any form and select
            <strong>Duplicate</strong>. You can then modify the copy and run both versions simultaneously,
            comparing completion rates in the Responses tab. Typeform doesn&rsquo;t have native A/B
            testing, so you&rsquo;ll need to split traffic externally (via your website or a URL
            routing tool).
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How do I share a Typeform template with someone else?</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you want someone else to clone your customised template, you can share the form link
            from <strong>Share &rarr; Copy link</strong> — but this gives them the live form, not
            a cloneable template. To share a template for others to clone, you need to publish it
            to the Typeform community via your account settings. For internal sharing within a team
            workspace, the Workspace feature (Business plan) lets team members access and edit forms
            collaboratively.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Using a Typeform contact form template?</h2>
          <p className="text-gray-600 mb-6">
            FormReply drafts personalised replies to each submission and delivers them to your inbox.
            Review, edit if needed, and send — without writing from scratch for every inquiry.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </article>
    </main>
  );
}
