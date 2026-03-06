import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Klaviyo Integration: Capture Leads and Reply to the Ones Who Have Questions — FormReply",
  description:
    "The Typeform Klaviyo integration syncs leads into your flows automatically. It doesn't reply to the customer who added a message to their submission. Here's how to handle both.",
  openGraph: {
    title: "Typeform Klaviyo Integration: Capture Leads and Reply to the Ones Who Have Questions",
    description:
      "Typeform + Klaviyo handles list growth and flow triggers. FormReply handles the personal reply to every customer who submitted something more than an email — draft in your inbox in 10 seconds.",
    url: "https://formreply.app/blog/typeform-klaviyo-integration",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Integrations</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Klaviyo Integration: Add Subscribers to Your Flows and Reply to the Ones Who Have More to Say
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            The Typeform Klaviyo integration moves leads into your flows automatically. But Klaviyo&rsquo;s
            flows aren&rsquo;t designed to read what someone wrote in their message field and send a personal
            reply. That gap is where ecommerce conversations get dropped.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How the Typeform Klaviyo integration works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Klaviyo&rsquo;s integration with Typeform works through the Klaviyo API. You connect your Klaviyo
            account via Typeform&rsquo;s <strong>Connect</strong> panel or through Zapier, mapping Typeform
            fields to Klaviyo profile properties. When someone submits your form, Klaviyo creates or updates
            a profile and can trigger a flow immediately:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>A customer completes your Typeform — signup, quiz, inquiry, or waitlist form</li>
            <li>Klaviyo creates or updates the contact&rsquo;s profile with the mapped fields</li>
            <li>The submission can trigger a Klaviyo flow — welcome series, post-quiz sequence, or nurture campaign</li>
            <li>Tags or custom properties set in the form can be used for segmentation from day one</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            For ecommerce brands, this is particularly useful because Klaviyo can tie the new profile to
            purchase history if the email already exists in your account. A returning customer who fills out
            a contact form gets routed differently from a first-time visitor — Klaviyo handles that logic well.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Klaviyo&rsquo;s strength is scale: high-volume sequences, A/B tested flows, predictive analytics
            on purchase likelihood. It is built for broadcast and behavioral automation across your entire
            customer base.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Klaviyo flows don&rsquo;t handle
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Ecommerce contact forms collect more than email addresses. A customer writing in about a specific
            order, a product question, a wholesale inquiry, or a return issue is starting a conversation —
            not just joining a list.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When that submission hits Klaviyo, the flow fires. If you&rsquo;ve set up a welcome sequence,
            they receive it. But the flow doesn&rsquo;t read their message. It can&rsquo;t. Klaviyo&rsquo;s
            dynamic blocks use profile properties and event data — structured fields you mapped from the form.
            A free-text message field describing their situation is not something Klaviyo&rsquo;s template
            engine can respond to personally.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The customer who wrote &ldquo;I ordered the wrong size and need to exchange before my trip — is
            that possible on short notice?&rdquo; gets the same welcome flow as someone who just signed up for
            a discount code. The flow triggers correctly. The message goes unanswered.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The same pattern applies to wholesale inquiry forms, VIP application forms, post-purchase feedback
            forms, and any Typeform where customers write context alongside their email address. Klaviyo handles
            the automation side. The personal reply has to come from somewhere else.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Klaviyo dynamic content can&rsquo;t close the gap
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Klaviyo&rsquo;s personalization engine is powerful for structured data. You can insert{" "}
            <code className="bg-gray-100 px-1 rounded text-sm">{"{{ first_name }}"}</code>,
            reference recent purchase data, or conditionally show different content blocks based on
            segment membership. This works well for scaling 1-to-many communication.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It doesn&rsquo;t work for 1-to-1 replies. Reading a customer&rsquo;s message, understanding
            their specific situation, and drafting a response that addresses what they actually wrote
            requires either a human or a tool that processes the submission content itself. Klaviyo
            dynamic tags operate on profile properties — not on the content of a message field.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result: Klaviyo handles 95% of your email marketing workload without a problem. The 5%
            that drives the most revenue per conversation — customers who reach out with a specific need —
            requires a personal reply that the flow can&rsquo;t generate.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply works alongside Klaviyo
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects via Typeform webhook — separate from your Klaviyo integration. Both run
            in parallel when a form is submitted:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Klaviyo integration</strong> creates or updates the contact profile, triggers
              your flows, and applies any tags or custom properties you&rsquo;ve mapped
            </li>
            <li>
              <strong>FormReply</strong> reads the full submission — every field the customer filled in —
              generates a personalized reply draft, and sends it to your inbox within 10 seconds
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft arrives before you&rsquo;ve opened another tab. It references the customer&rsquo;s
            specific message, addresses their situation, and frames a reply based on your brand context.
            You review, adjust if needed, and send from your regular email client.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Klaviyo handles your flows. FormReply handles the conversation. Neither affects the other.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up Typeform + Klaviyo + FormReply
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 1 — Connect Typeform to Klaviyo
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The most direct route is Typeform&rsquo;s native integrations panel under{" "}
            <strong>Connect</strong>, or via Zapier with a Typeform trigger and Klaviyo action. Map your
            Typeform fields to Klaviyo profile properties: at minimum email, first name, and any
            fields you use for segmentation (product interest, order number, form type).
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Even if you don&rsquo;t plan to segment on a field immediately, mapping it now means
            the data is available in the profile later. Test with a live submission and confirm the
            contact appears in Klaviyo and enters the correct flow.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 2 — Add FormReply via webhook
          </h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Create a FormReply account at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app/onboarding
              </Link>
              . Enter your email, your store or business name, and a brief description — the AI uses
              this to write replies that match your brand voice
            </li>
            <li>Copy your FormReply webhook URL from the dashboard</li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong> and
              paste the FormReply URL
            </li>
            <li>
              Send a test submission using Typeform&rsquo;s built-in tester — you should receive a
              draft reply email in your inbox within 10 seconds
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform webhooks are additive. The Klaviyo integration fires independently and is
            unaffected by any webhook you add.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 3 — Live workflow
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a customer submits: Klaviyo updates their profile, triggers the appropriate flow,
            and segments them based on mapped fields. FormReply reads their full submission and sends
            you a personalized reply draft in 10 seconds. You reply to customers who need a personal
            response. Your flows run without interruption.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Klaviyo vs. FormReply: what each handles
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Klaviyo integration</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Primary job</td>
                  <td className="py-3 pr-4 text-gray-600">Build profiles and trigger flows</td>
                  <td className="py-3 text-gray-600">Draft personalized first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reads message content</td>
                  <td className="py-3 pr-4 text-gray-600">Maps to profile properties only</td>
                  <td className="py-3 text-gray-600">Full content, used in draft</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Sends automated sequences</td>
                  <td className="py-3 pr-4 text-gray-600">Yes — flows, campaigns, A/B tests</td>
                  <td className="py-3 text-gray-600">No — focused on first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Writes personal reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — dynamic tags only</td>
                  <td className="py-3 text-gray-600">Yes — AI draft in 10 sec</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Run together</td>
                  <td className="py-3 pr-4 text-gray-600">—</td>
                  <td className="py-3 text-gray-600">Yes — parallel, no conflict</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Will FormReply interfere with my Klaviyo integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Typeform sends the submission payload to each destination independently. The Klaviyo
            integration and any webhook endpoints receive their own copies of the data. They don&rsquo;t
            share a queue, and neither can block or delay the other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can Klaviyo flows replace FormReply for customer inquiries?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For broadcast follow-ups and behavioral sequences — yes. If your goal is a post-signup
            welcome series or an abandoned cart flow, Klaviyo handles that. FormReply is for the
            personal reply: reading what the customer wrote and drafting a response to that specific
            message. Klaviyo flows can&rsquo;t do this without a human reviewing each submission manually.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send the reply automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply sends the draft to your inbox. You review it, edit if needed, and send from
            your regular email client. You stay in control of every outbound message. FormReply
            removes the blank-page step, not your oversight.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What types of Typeform forms work well with this setup?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Any form where customers write context alongside their email address: contact and support
            forms, wholesale inquiry forms, VIP or loyalty application forms, post-purchase feedback
            forms, and product question forms. Forms that collect only structured fields (quiz results,
            survey scores) are better served by Klaviyo flows alone — FormReply adds the most value
            when there&rsquo;s a message field to reply to.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            I already use Zapier to connect Typeform and Klaviyo. Does that affect setup?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Zapier and Typeform webhooks are independent channels. Adding a FormReply webhook in
            Typeform&rsquo;s Connect panel does not affect your Zapier workflow. Both fire on
            submission without interfering with each other.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">
              Klaviyo runs your flows. FormReply starts the conversation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you use Typeform + Klaviyo and you&rsquo;re still writing first replies manually
              for customers who submitted more than just their email address, FormReply fills the
              specific gap your email platform leaves open. One webhook, 3-minute setup.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform + Klaviyo is a reliable stack for ecommerce email marketing. Contact profiles
            sync automatically, flows trigger on submission, and segmentation works from day one.
            Klaviyo does exactly what it&rsquo;s designed to do.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The gap appears the moment a customer adds a message, question, or specific request to
            their form submission. They&rsquo;re not just joining a list — they&rsquo;re reaching
            out. Klaviyo flows don&rsquo;t read submissions; they send to them. FormReply reads them
            and drafts a reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. Works alongside your Klaviyo setup without changing it. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Reply to every Klaviyo customer who wrote something
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends a personalized reply draft to your inbox within 10 seconds of every
            Typeform submission — alongside your existing Klaviyo integration, without touching it.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free 14-day trial &rarr;
          </Link>
          <p className="text-sm text-gray-400 mt-3">$19/month after trial &middot; Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
