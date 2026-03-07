import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Forms vs Typeform: Which Is Better for Contact Forms? — FormReply",
  description:
    "Detailed comparison of Google Forms and Typeform for contact forms. Pricing, features, integrations, and reply workflows compared side by side.",
  openGraph: {
    title: "Google Forms vs Typeform: Which Is Better for Contact Forms?",
    description:
      "Google Forms is free. Typeform looks better. Which one actually works better as a contact form? We compare pricing, features, and reply workflows.",
    url: "https://formreply.app/blog/google-forms-vs-typeform",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Comparison · Form Builders</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Google Forms vs Typeform: Which Is Better for Contact Forms?
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Google Forms is free and works. Typeform looks better and costs $25+/month. If you&rsquo;re
            choosing a form builder specifically for contact forms, the answer depends on what matters
            most to you: cost, design, or what happens after someone hits submit.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The quick answer
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Use <strong>Google Forms</strong> if you want free, fast, and functional. Use{" "}
            <strong>Typeform</strong> if you want a polished, branded experience and are willing to pay
            for it. Use <strong>either one with FormReply</strong> if you want to actually reply to
            submissions quickly — because neither tool solves that problem on its own.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Pricing
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm text-gray-600 border border-gray-200 rounded-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">Google Forms</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-900 border-b">Typeform</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Free plan</td>
                  <td className="px-4 py-3">Unlimited forms, unlimited submissions</td>
                  <td className="px-4 py-3">10 responses/month per form</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Paid plans</td>
                  <td className="px-4 py-3">$0 (included with Google account)</td>
                  <td className="px-4 py-3">$25/mo Basic, $50/mo Plus, $83/mo Business</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-3 font-medium">Response limits</td>
                  <td className="px-4 py-3">None</td>
                  <td className="px-4 py-3">100-10,000/mo depending on plan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Custom branding</td>
                  <td className="px-4 py-3">Limited (colors, header image)</td>
                  <td className="px-4 py-3">Full (logos, colors, fonts, custom endings)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a basic contact form that receives 20-50 submissions per month, Google Forms costs
            nothing. Typeform&rsquo;s free tier caps at 10 responses per form — you&rsquo;ll hit the
            paywall fast if you&rsquo;re using it as your main contact form.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Form design and UX
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is where Typeform wins clearly. Typeform&rsquo;s one-question-at-a-time interface is
            engaging, polished, and feels more like a conversation than a form. For brand-conscious
            businesses, this matters — your contact form is often the first interaction a potential
            client has with you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google Forms is functional but unmistakably &ldquo;Google Forms.&rdquo; You can change
            colors and add a header image, but the form still looks like a Google product, not your
            product. For internal forms or non-client-facing use, this is fine. For a portfolio contact
            form or sales inquiry page, it can feel unprofessional.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Integrations and automation
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both platforms integrate with major tools, but through different mechanisms:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li><strong>Google Forms:</strong> Native Google Sheets integration, Apps Script for custom automation, Zapier/Make for third-party tools. No native webhook support.</li>
            <li><strong>Typeform:</strong> Native webhooks, direct integrations with HubSpot/Slack/Mailchimp/etc., Zapier/Make support. OAuth API available.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s native webhook support is a significant advantage for automation. Google
            Forms requires Apps Script workarounds or third-party tools to trigger actions on submission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The reply problem: neither solves it
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s the thing both Google Forms and Typeform have in common: neither one helps you
            reply to the person who submitted the form. Both send you a notification email with the
            submission data. Neither gives you a reply button, a draft, or any way to respond without
            manually composing an email from scratch.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Google Forms users resort to Apps Script auto-responders — static templates that
            don&rsquo;t reference what the person actually wrote. Typeform users build Zapier workflows
            or use the thank-you screen to set expectations. Neither approach is a real reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the gap FormReply fills. Whether you use Google Forms or Typeform, FormReply
            connects to your form and drafts a personalized, AI-generated reply to every submission.
            The draft is delivered to your inbox within seconds — you review, edit, and send.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">FormReply works with both</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              FormReply connects to Google Forms via{" "}
              <Link href="/for/google-forms" className="text-indigo-600 hover:underline">
                OAuth (one-click setup)
              </Link>{" "}
              and to Typeform via{" "}
              <Link href="/for/typeform" className="text-indigo-600 hover:underline">
                OAuth or webhook
              </Link>
              . Same AI drafting, same inbox delivery, regardless of which form builder you use.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Which should you choose?
          </h2>
          <div className="space-y-4 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Choose Google Forms if:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Budget is a primary concern — you want $0/month</li>
                <li>Your form is internal or non-client-facing</li>
                <li>You already use Google Workspace and want native Sheets integration</li>
                <li>You need unlimited responses without paying</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-1">Choose Typeform if:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                <li>Brand presentation matters — your form represents your business</li>
                <li>You want the conversational one-question-at-a-time UX</li>
                <li>You need native webhooks and direct integrations</li>
                <li>You&rsquo;re willing to pay $25+/month for the experience</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Try it</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Whichever form builder you choose, see what an AI-drafted reply looks like.{" "}
            <Link href="/tools/reply-generator" className="text-indigo-600 underline underline-offset-2">
              Try our free reply generator
            </Link>{" "}
            — paste any contact form submission and get a personalized reply instantly, no signup
            required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply works with Google Forms, Typeform, Tally, Jotform, and Webflow. Free tier
            includes 5 replies/month. Full plan is $19/month — less than Typeform&rsquo;s cheapest paid
            plan, and it works with any form builder.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            The form builder doesn&rsquo;t matter. The reply does.
          </h3>
          <p className="text-gray-500 mb-6">
            Connect Google Forms or Typeform. Get AI reply drafts in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free trial →
          </Link>
          <p className="text-sm text-gray-400 mt-3">Free tier: 5 replies/month · $19/month for unlimited</p>
        </div>
      </article>
    </main>
  );
}
