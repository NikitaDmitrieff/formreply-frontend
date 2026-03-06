import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform ConvertKit Integration: Grow Your List and Reply to Every Message That Counts — FormReply",
  description:
    "The Typeform ConvertKit (Kit) integration adds subscribers and triggers sequences automatically. It doesn't read what someone wrote in their message and draft a personal reply. Here's how to handle both.",
  openGraph: {
    title: "Typeform ConvertKit Integration: Grow Your List and Reply to Every Message That Counts",
    description:
      "Typeform + ConvertKit handles subscriber growth and automation triggers. FormReply handles the personal reply to every creator fan, course inquiry, or collaboration request — draft in your inbox in 10 seconds.",
    url: "https://formreply.app/blog/typeform-convertkit-integration",
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
            Typeform ConvertKit Integration: Add Subscribers to Your Sequences and Reply to the Messages That Need a Human Response
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            The Typeform ConvertKit integration — now Kit — subscribes people to your list and triggers the
            right sequence automatically. But Kit&rsquo;s automations aren&rsquo;t designed to read what
            someone wrote in their message field and send a personal reply. That&rsquo;s the gap where
            creator relationships get lost.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How the Typeform ConvertKit integration works
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            ConvertKit — rebranded as Kit in 2024 — is the email platform built for creators: newsletter
            writers, course builders, podcasters, community founders, and anyone who earns from an audience.
            Its strength is combining subscriber management, visual automation sequences, and commerce tools
            (digital product sales, paid newsletters, tip jars) in one place.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform connects to Kit via Zapier or through community-built integrations. When someone
            submits your Typeform, Kit can:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Add the subscriber to your Kit account with the email and fields you mapped from the form</li>
            <li>Apply tags based on their answers — useful for segmenting by interest, content type, or product they&rsquo;re asking about</li>
            <li>Trigger a specific automation sequence — a welcome flow, a lead magnet delivery, a course onboarding sequence</li>
            <li>Add them to a specific form or sequence within Kit&rsquo;s visual automation builder</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            For creators who use Typeform to collect newsletter signups, course interest forms, community
            applications, or collaboration inquiries, this integration removes the manual step of importing
            subscribers. Typeform captures the lead; Kit runs the sequence.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The gap Kit automations don&rsquo;t close
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Creator contact forms aren&rsquo;t just signup forms. A course creator&rsquo;s inquiry form
            asks what the prospect is hoping to learn and what&rsquo;s blocking them. A newsletter writer&rsquo;s
            collaboration form asks what the partnership idea is and why they think it&rsquo;s a fit. A
            community builder&rsquo;s application form asks about goals, background, and what the applicant
            wants to contribute.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When that form fires, Kit adds the subscriber and starts the sequence. The automation sends a
            welcome email — typically with a link to your lead magnet, a course overview, or a booking
            calendar. What the automation doesn&rsquo;t do is read the message and reply to it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The person who wrote &ldquo;I&rsquo;ve been following your newsletter for two years and I think
            our audiences would genuinely love a collaboration — here&rsquo;s what I had in mind&rdquo; gets
            the same automated sequence as someone who only submitted their email address. The subscriber is
            created. The conversation hasn&rsquo;t started.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kit&rsquo;s automation personalization is tag- and field-based. You can send different content
            based on which tag a subscriber has, or use their first name in the subject line. The platform
            can&rsquo;t read an open-ended message, understand the specific ask, and compose a reply that
            engages with what they actually wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For creators, this matters most in two situations: collaboration requests, where a generic reply
            kills the opportunity; and course or community inquiries, where a personal response often turns
            an interested prospect into a paying member.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Kit&rsquo;s broadcast and sequence features don&rsquo;t fill this gap
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kit has powerful tools for reaching your audience at scale: visual automation sequences, broadcast
            emails, conditional content blocks, and A/B testing. These tools are designed for
            one-to-many communication — reaching hundreds or thousands of subscribers at once with
            content that feels personal.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s the opposite of what a form message requires. When someone fills out your Typeform
            and writes a specific question, pitch, or personal note, they expect a reply to what they said —
            not a sequence triggered by their tag, not a broadcast that goes to your whole list. A response
            to their message, written for them specifically.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kit is excellent at what it does. Responding to individual form messages at scale isn&rsquo;t
            what it&rsquo;s built for. That&rsquo;s a different problem.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How FormReply works alongside ConvertKit
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects via Typeform webhook — independent of your Kit integration. Both fire the
            moment a form is submitted:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>ConvertKit integration</strong> adds the subscriber to Kit, applies tags, and triggers
              your welcome sequence or automation flow
            </li>
            <li>
              <strong>FormReply</strong> reads the full submission — every field the person filled in —
              generates a personalized reply draft, and sends it to your inbox within 10 seconds
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft arrives before you&rsquo;ve finished reading the notification. It references what
            the person wrote specifically — their collaboration idea, their course question, their community
            application — and frames a reply based on your creator context. You review it, adjust if
            needed, and send from your regular email client.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kit runs your audience automation. FormReply gives you the personal reply that starts the real
            conversation. Neither affects the other.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up Typeform + ConvertKit + FormReply
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 1 — Connect Typeform to ConvertKit via Zapier
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            In Zapier, create a Zap with a Typeform trigger (new submission on your form) and a Kit action.
            The most common action is <strong>Add Subscriber to a Form</strong> or{" "}
            <strong>Tag Subscriber</strong>. Map your Typeform fields to the subscriber properties: at
            minimum email and first name. Add tag actions for any fields you use to segment subscribers —
            content interest, product they&rsquo;re asking about, or how they found you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Test with a live Typeform submission and confirm the subscriber appears in Kit with the correct
            tags and enters the right sequence. Once confirmed, the Zap handles every submission automatically.
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
              . Enter your email, your name or creator brand name, and a short description of what you
              do — the AI uses this to write replies that match your voice and context
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
            The Zapier workflow and the Typeform webhook run entirely independently. Adding FormReply
            doesn&rsquo;t interfere with your Kit integration in any way.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Step 3 — Live workflow
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            When someone submits your Typeform: Kit adds them to your list, applies tags, and starts your
            automation sequence. FormReply reads their full submission and sends you a personalized reply
            draft in 10 seconds. You reply to the people who wrote something worth responding to — a
            collaboration pitch, a course question, a community application. Your subscriber list grows
            without any extra work.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            ConvertKit vs. FormReply: what each handles
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">ConvertKit integration</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Primary job</td>
                  <td className="py-3 pr-4 text-gray-600">Add subscriber, apply tags, trigger sequence</td>
                  <td className="py-3 text-gray-600">Draft personalized first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reads message content</td>
                  <td className="py-3 pr-4 text-gray-600">Maps to subscriber fields only</td>
                  <td className="py-3 text-gray-600">Full content, used in draft</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Manages audience automation</td>
                  <td className="py-3 pr-4 text-gray-600">Yes — sequences, broadcasts, tags</td>
                  <td className="py-3 text-gray-600">No — focused on first reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Writes personal reply</td>
                  <td className="py-3 pr-4 text-gray-600">No — sequence emails only</td>
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
            Will FormReply interfere with my ConvertKit integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. Your Zapier workflow runs on its own trigger. The FormReply webhook is a separate Typeform
            destination. Typeform sends the submission payload to each destination independently — they
            don&rsquo;t share a queue, and neither can block or affect the other.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can Kit sequences replace FormReply for form responses?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For automated follow-up after a signup — yes. If your goal is to send a lead magnet, start a
            nurture sequence, or send a course welcome email, Kit handles that well. FormReply is for the
            personal reply: reading what someone wrote in their message and drafting a response that
            engages with their specific situation. Kit sequences send the same email to everyone who
            hits a given trigger. FormReply drafts a unique reply for each submission.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send the reply automatically?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply sends the draft to your inbox. You review it, edit if needed, and send from
            your regular email client. You stay in control of every outbound message. FormReply removes
            the blank-page step, not your judgment about what to send.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What types of Typeform forms benefit most from this setup?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Any creator form where people describe what they want alongside their email: collaboration
            request forms, course inquiry forms, community application forms, podcast pitch forms, and
            consultation request forms. These are the submissions where a generic automated sequence
            loses the opportunity, and a personal reply starts a real relationship. For pure newsletter
            signup forms with only an email field, the Kit integration alone is sufficient — FormReply
            adds the most value when there&rsquo;s a message or context field to respond to.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            ConvertKit rebranded to Kit — does that change how the integration works?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. The underlying platform and API are the same. Zapier still lists it as ConvertKit in many
            workflows, and both names refer to the same service. The integration setup described above
            works regardless of whether you see it labeled ConvertKit or Kit in your tools.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">
              ConvertKit grows your list. FormReply starts the conversation.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              If you use Typeform + Kit and you&rsquo;re still writing personal replies manually to
              every collaboration pitch, course question, or community application — FormReply fills
              the gap your automation leaves open. One webhook, 3-minute setup.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform + ConvertKit is the standard creator stack for audience growth. Form submissions flow
            into your Kit account automatically, tags are applied, sequences fire, and your list grows
            without manual import. Kit does exactly what it&rsquo;s designed to do.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The gap appears when someone describes what they want in the message field. A collaboration
            idea. A specific question about your course. A community application that deserves a thoughtful
            response. Kit&rsquo;s sequences send to submissions; they don&rsquo;t read them. FormReply
            reads them and drafts a reply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. Works alongside your ConvertKit setup without changing it. Draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Reply to every message that deserves a personal response
          </h3>
          <p className="text-gray-500 mb-6">
            FormReply sends a personalized reply draft to your inbox within 10 seconds of every
            Typeform submission — alongside your existing ConvertKit setup, without touching it.
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
