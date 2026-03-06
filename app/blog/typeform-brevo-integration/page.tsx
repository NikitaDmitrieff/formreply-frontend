import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Brevo Integration: Automate Your List and Reply to Every Inquiry — FormReply",
  description:
    "The Typeform Brevo integration adds contacts and triggers email sequences. It doesn't read what someone wrote in their message and draft a personal reply. Here's how to handle both.",
  openGraph: {
    title: "Typeform Brevo Integration: Automate Your List and Reply to Every Inquiry",
    description:
      "Typeform + Brevo handles contact creation and automated sequences. FormReply handles the personal reply to every business inquiry, partnership request, or service quote — draft in your inbox in 10 seconds.",
    url: "https://formreply.app/blog/typeform-brevo-integration",
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
            Typeform Brevo Integration: Grow Your List Automatically and Reply Personally to Every Inquiry
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            The Typeform Brevo integration adds contacts to your list and fires automated sequences the moment
            someone submits your form. It doesn&rsquo;t read what a small business owner, wholesale buyer, or
            service prospect wrote in their message field and draft a reply. That gap is where relationships
            are won or lost.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How the Typeform Brevo integration works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Brevo (formerly Sendinblue) connects to Typeform via Zapier or through Brevo&rsquo;s own automation
            workflows. When a form is submitted, Brevo can:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Create or update a contact in your Brevo list with the fields mapped from the form</li>
            <li>Apply contact attributes — industry, location, inquiry type — for segmentation</li>
            <li>Trigger a Brevo automation: a welcome sequence, a nurture drip, or a quote follow-up</li>
            <li>Send an SMS notification or transactional email via Brevo&rsquo;s built-in sending infrastructure</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Brevo is the platform of choice for many small and medium businesses, European companies, and
            cost-conscious teams that want email marketing, SMS, and basic CRM functionality in one affordable
            tool. The Typeform integration makes lead capture and list growth automatic — a prospect fills out
            a contact form, a partnership inquiry, or a service quote request, and they land in Brevo without
            any manual export or copy-paste.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For an SMB using Typeform for wholesale partnership inquiries, a local service business capturing
            quote requests, or an agency running a client intake form, this automation covers the data
            management and follow-up sequence side reliably.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The gap Brevo automations don&rsquo;t close
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Business inquiry forms ask for more than an email address. A wholesale partnership form asks what
            products the buyer is interested in, their order volume, and their market. A service quote form
            asks about project scope, timeline, and budget. A client intake form asks about the problem the
            prospect is trying to solve.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When that submission fires, Brevo creates the contact and triggers the automation. The sequence
            sends a confirmation email — often a generic acknowledgment or a link to book a call.
            What the automation doesn&rsquo;t do is read the message field and write back to it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A wholesale buyer who wrote &ldquo;We&rsquo;re a specialty food retailer with 12 locations
            across the Netherlands and Belgium — we&rsquo;re interested in your premium line for Q3 and
            would like to discuss minimum order quantities and white-label options&rdquo; receives the
            same automated reply as someone who left the message field blank. Brevo has the contact.
            The conversation hasn&rsquo;t started.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Brevo&rsquo;s automation personalization works on structured data: contact attributes and
            list segments. It can insert a first name, reference an industry tag, or conditionally show
            different email blocks based on a contact attribute. It cannot read an open-ended message,
            understand the specific request, and draft a reply that demonstrates you&rsquo;ve engaged
            with what the prospect actually wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For small and medium businesses where the owner or a small team handles each inquiry, that
            first reply is often what closes the deal — or loses it to a competitor who replied faster.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Brevo&rsquo;s dynamic content doesn&rsquo;t solve it
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Brevo supports dynamic content blocks in email templates — you can show different content
            based on contact attributes, segments, or automation conditions. This is genuinely useful
            for segmenting by product interest or region.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It doesn&rsquo;t help with free-text messages. Dynamic content requires predefined logic
            applied to structured fields. A message field — where someone describes their situation,
            requirements, or question in their own words — isn&rsquo;t a structured field that
            template conditions can respond to. It&rsquo;s a message. Responding to it requires
            reading it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result: Brevo runs your list and sequences efficiently. The personal reply to each
            inquiry — the thing that actually differentiates you from a competitor who sends the
            same automated acknowledgment — still requires someone to sit down and write it.
            Or a tool that drafts it for you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply works alongside Brevo
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects via Typeform webhook — entirely separate from your Brevo integration.
            Both run in parallel the moment a form is submitted:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Brevo integration</strong> adds the contact to your list, applies attributes,
              and triggers your automated sequence — confirmation email, nurture drip, or SMS notification
            </li>
            <li>
              <strong>FormReply</strong> reads the full submission — every field the prospect filled in —
              generates a personalized reply draft, and sends it to your inbox within 10 seconds
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft arrives before you&rsquo;ve finished reading the form notification. It references
            what the prospect described — their industry, their request, their specific situation — and
            frames a reply based on your business context. You review it, adjust if needed, and send
            from your regular email client.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Brevo runs your list and automations. FormReply gives you the personal reply that starts
            the actual conversation. Neither integration affects the other.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up Typeform + Brevo + FormReply
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 1 — Connect Typeform to Brevo
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Set up a Zapier workflow with a Typeform trigger and a Brevo action, or use Brevo&rsquo;s
            automation to trigger on contact creation after a Typeform webhook fires. Map your key Typeform
            fields to Brevo contact attributes: email (required), first name, company, industry, or any
            segmentation fields relevant to your business. Test with a live submission and confirm
            the contact appears in Brevo with the correct attributes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you want the submission to trigger a specific Brevo automation — a welcome sequence,
            a quote follow-up drip, or an SMS — confirm the automation trigger fires correctly for
            new contacts created via Zapier.
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
              . Enter your email, your name or business name, and a short description of what you do —
              FormReply uses this context to write replies that match your voice and your business
            </li>
            <li>Copy your FormReply webhook URL from the dashboard</li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong> and paste
              the FormReply URL
            </li>
            <li>
              Send a test submission using Typeform&rsquo;s built-in tester — you should receive a draft
              reply email in your inbox within 10 seconds
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform webhooks are additive. Your Zapier workflow to Brevo and the FormReply webhook
            both fire on submission, independently, without interfering with each other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 3 — Live workflow
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a prospect submits your form: Brevo adds the contact to your list, applies segmentation
            attributes, and triggers the relevant automation. FormReply reads their full submission and
            sends you a personalized reply draft in 10 seconds. You reply to the inquiries that deserve
            a personal response. Your list grows and your sequences run without extra work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Brevo vs. FormReply: what each handles
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Brevo integration</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Primary job</td>
                  <td className="py-3 pr-4 text-gray-600">Add contact, trigger automation sequence</td>
                  <td className="py-3 text-gray-600">Draft personalized first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reads message content</td>
                  <td className="py-3 pr-4 text-gray-600">Maps to contact attributes only</td>
                  <td className="py-3 text-gray-600">Full content, used in draft</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Sends automated sequences</td>
                  <td className="py-3 pr-4 text-gray-600">Yes — email, SMS, drip flows</td>
                  <td className="py-3 text-gray-600">No — focused on first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Writes personal reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — dynamic content on structured data</td>
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
            Will FormReply interfere with my Brevo integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Typeform sends the submission payload to each destination independently. Your Zapier
            workflow to Brevo and the FormReply webhook both receive their own copies of the form
            data. They don&rsquo;t share a queue, and neither can block or delay the other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can Brevo automations replace FormReply for responding to inquiries?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For automated sequences — confirmation emails, nurture drips, SMS follow-ups — yes.
            Brevo handles those well. FormReply is for the personal reply: reading what the prospect
            described in their own words and drafting a response that engages with their specific
            situation, request, or question. Brevo automations can&rsquo;t do this without a human
            reviewing each submission manually.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send the reply automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply sends the draft to your inbox. You review it, edit if needed, and send from
            your regular email client. You stay in control of every outbound message. FormReply removes
            the blank-page problem, not your oversight.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What types of Typeform forms benefit most from this setup?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Any form where someone describes their situation alongside their contact details: partnership
            inquiry forms, wholesale buyer forms, service quote requests, client intake forms, and
            collaboration requests. These are the submissions where a generic automated acknowledgment
            leaves opportunity on the table, and a personal reply that engages with what they wrote
            starts a real conversation. For pure lead capture forms with only email and name, the Brevo
            automation alone is sufficient — FormReply adds the most value when there&rsquo;s a message
            field to respond to.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            I&rsquo;m using Sendinblue — does this still apply?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Brevo rebranded from Sendinblue in 2023. The platform, features, and integrations
            are the same — only the name changed. Everything in this guide applies whether you
            search for &ldquo;Sendinblue&rdquo; or &ldquo;Brevo&rdquo; in your Zapier account.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            I use Zapier to connect Typeform to Brevo. Does FormReply still work?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Zapier workflows and Typeform webhooks are completely independent channels.
            Adding a FormReply webhook in Typeform&rsquo;s Connect panel does not affect your
            Zapier workflow to Brevo. Both fire on submission independently.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">
              Brevo manages your list. FormReply opens the conversation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you use Typeform + Brevo to capture business inquiries and you&rsquo;re still writing
              first replies manually for every prospect who described their request in the message field,
              FormReply fills the specific gap your automation leaves open. One webhook, 3-minute setup.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform + Brevo is a solid stack for SMBs that need affordable, all-in-one email marketing
            and SMS automation without a complex CRM. Inquiry submissions flow into your Brevo list
            automatically, contacts are segmented by attributes, and follow-up sequences fire without
            manual work. Brevo does exactly what it&rsquo;s designed to do.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The gap appears when a prospect describes their situation in the message field. They&rsquo;re
            not just requesting contact — they&rsquo;re telling you what they need, what their business
            looks like, and why they&rsquo;re reaching out. Brevo automations don&rsquo;t read
            submissions; they send to them. FormReply reads them and drafts a reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. Works alongside your Brevo setup without changing it. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Reply to every inquiry that deserves a personal response
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends a personalized reply draft to your inbox within 10 seconds of every
            Typeform submission — alongside your existing Brevo setup, without touching it.
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
