import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Mailchimp Integration: Grow Your List and Reply to the People Who Have Questions — FormReply",
  description:
    "The Typeform Mailchimp integration adds subscribers to your list automatically. It doesn't reply to the ones who ask a question or need a personal response. Here's how to handle both.",
  openGraph: {
    title: "Typeform Mailchimp Integration: Grow Your List and Reply to the People Who Have Questions",
    description:
      "Typeform + Mailchimp handles list growth. FormReply handles the reply to everyone who submitted something more than an email address — personalized draft in 10 seconds.",
    url: "https://formreply.app/blog/typeform-mailchimp-integration",
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
            Typeform Mailchimp Integration: Build the List, Then Reply to the People Who Have More to Say
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            The Typeform Mailchimp integration works well — submissions flow into your audience automatically.
            But Mailchimp isn&rsquo;t built to send a personal reply to the person who added a message to their
            form submission. That gap is where conversations get dropped.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How the Typeform Mailchimp integration works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a native Mailchimp integration available under <strong>Connect &rarr; Mailchimp</strong>{" "}
            in your form settings. Once authorized, it maps Typeform responses to Mailchimp subscriber fields
            and adds each submitter to your chosen audience:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Someone completes your Typeform form or signup page</li>
            <li>The integration fires in real time and creates a subscriber in Mailchimp</li>
            <li>First name, last name, email, and any custom fields you mapped are populated</li>
            <li>The subscriber enters any automations or welcome sequences you&rsquo;ve configured</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Setup takes under 10 minutes. No Zapier required. For forms whose sole job is list growth — newsletter
            signups, lead magnets, waitlists — this is the right tool for the job. It handles exactly what it
            promises.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can trigger Mailchimp automations (double opt-in, welcome series, onboarding drips) based on
            the signup. Tags and merge fields carry over from Typeform, so your segments work from day one.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The scenario Mailchimp doesn&rsquo;t handle
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most Typeform forms aren&rsquo;t pure signup pages. They collect context alongside the email address.
            A coaching inquiry form asks what the person is struggling with. A freelance services form asks about
            the project scope. A newsletter signup might include a &ldquo;what would you like to learn?&rdquo;
            question. A community application asks why someone wants to join.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mailchimp adds that person to your list and may send them a welcome email. What it doesn&rsquo;t do
            is read what they wrote and send a reply that acknowledges it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If someone writes &ldquo;I&rsquo;ve been trying to grow my newsletter for six months and I&rsquo;m
            stuck at 200 subscribers — I&rsquo;d love your take on what&rsquo;s blocking me,&rdquo; the Mailchimp
            welcome sequence sends them the same email everyone else gets. That&rsquo;s appropriate for a newsletter
            — but it misses the signal that this person wanted a conversation, not just content.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The same pattern applies to lead generation forms, service inquiry forms, and application forms that
            feed into Mailchimp for follow-up. The automation handles the broadcast side. The personal reply falls
            through.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why templated Mailchimp emails don&rsquo;t fill the gap
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mailchimp automations use merge tags —{" "}
            <code className="bg-gray-100 px-1 rounded text-sm">*|FNAME|*</code>,{" "}
            <code className="bg-gray-100 px-1 rounded text-sm">*|LNAME|*</code>, custom fields. This works for
            personalizing at scale: &ldquo;Hey Sarah, welcome to the list.&rdquo; It doesn&rsquo;t work for
            personalization that requires reading what the person actually wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A merge tag can insert someone&rsquo;s company name. It can&rsquo;t draft a response to their specific
            situation, reference their stated goal, or ask a relevant follow-up question. That still requires a
            human — or a tool that reads the submission and generates a reply from it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result: Mailchimp handles 95% of the work perfectly. The 5% that matters for conversion —
            the person who wrote something and is waiting to hear back — gets a generic sequence instead of
            a reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply works alongside Mailchimp
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects via Typeform webhook — separate from the Mailchimp integration. Both run in parallel
            when a form is submitted:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Mailchimp integration</strong> adds the subscriber to your audience, triggers your welcome
              sequence, and populates their contact record with mapped fields
            </li>
            <li>
              <strong>FormReply</strong> reads the full submission — every answer, not just the email — generates
              a personalized reply draft, and sends it to your inbox within 10 seconds
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The FormReply draft lands in your inbox before you&rsquo;ve opened another tab. It references what
            the person wrote, addresses their specific situation, and frames a reply based on your business
            context. You review it, make any edits, and reply from your normal email client.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mailchimp handles the list. FormReply handles the conversation. Neither interferes with the other.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up Typeform + Mailchimp + FormReply
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 1 — Connect Typeform to Mailchimp
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In your Typeform form, go to <strong>Connect &rarr; Mailchimp</strong> and authorize the integration
            with your Mailchimp account. Select the audience you want submissions added to, then map your
            Typeform fields to Mailchimp merge tags — at minimum, email address and first name.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you collect additional context (message field, project description, goals), map those to Mailchimp
            merge tags as well, even if you don&rsquo;t use them in automations yet. You can segment on them later.
            Test with a submission and verify the subscriber appears in your Mailchimp audience correctly.
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
              . Enter your email, your name or business name, and a short description of what you do — the AI
              uses this to write replies that match your tone and context
            </li>
            <li>Copy your FormReply webhook URL from the dashboard</li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong> and paste the
              FormReply URL
            </li>
            <li>
              Send a test submission using Typeform&rsquo;s built-in tester — you should receive a draft reply
              email within 10 seconds
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform webhooks are additive — the Mailchimp integration fires independently and is unaffected
            by any webhook you add.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 3 — Live workflow
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When someone submits: Mailchimp adds them to your audience and starts their welcome sequence.
            FormReply reads their full submission and sends you a personalized reply draft in 10 seconds.
            You reply to the people who need a personal response. Your list grows without any extra work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Mailchimp vs. FormReply: what each handles
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Mailchimp integration</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Primary job</td>
                  <td className="py-3 pr-4 text-gray-600">Add subscribers to audience</td>
                  <td className="py-3 text-gray-600">Draft personalized first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reads message content</td>
                  <td className="py-3 pr-4 text-gray-600">Maps to merge tags only</td>
                  <td className="py-3 text-gray-600">Full content, used in draft</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Sends broadcast emails</td>
                  <td className="py-3 pr-4 text-gray-600">Yes — sequences and campaigns</td>
                  <td className="py-3 text-gray-600">No — focused on first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Writes personal reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — merge tags only</td>
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
            Will FormReply interfere with my Mailchimp integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Typeform sends the submission payload to each destination independently — the Mailchimp integration
            and any webhook endpoints receive their own copies. They don&rsquo;t share a queue, and neither can
            block or delay the other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can Mailchimp automations replace FormReply?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For broadcast follow-ups — yes. If your goal is to send a standard welcome email, a drip sequence,
            or a lead magnet delivery, Mailchimp handles that well. FormReply is for the personal reply: reading
            what the person wrote in their message field and drafting a response to that specific content.
            Mailchimp automations can&rsquo;t do this without manual intervention.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send the reply automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply sends the draft to your inbox. You review it, edit if needed, and send from your regular
            email client. You stay in control of every outbound message. FormReply removes the blank-page step,
            not your oversight.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if not every submission includes a message?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply generates a draft from whatever the person submitted. For a simple signup with just name
            and email, the draft will be a brief, warm acknowledgment. For a submission with a detailed message,
            the draft will engage with the specifics. You choose which drafts to send and which to skip.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">
              Mailchimp grows your list. FormReply starts the conversation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you use Typeform + Mailchimp and you&rsquo;re still writing first replies from scratch for
              people who submitted more than just their email address, FormReply fills the specific gap your
              list tool leaves open. One webhook, 3-minute setup.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform + Mailchimp is a reliable combination for audience building. Submissions flow into your list,
            welcome sequences fire, and your subscriber count grows without manual work. Mailchimp does exactly
            what it&rsquo;s designed to do.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The gap appears the moment someone adds a message, question, or specific context to their form
            submission. They&rsquo;re not just joining a list — they&rsquo;re starting a conversation.
            Mailchimp sequences don&rsquo;t read submissions; they send to them. FormReply reads them and
            drafts a reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. Works alongside your Mailchimp setup without changing it. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Reply to every Mailchimp subscriber who wrote something
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends a personalized reply draft to your inbox within 10 seconds of every Typeform
            submission — alongside your existing Mailchimp integration, without touching it.
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
