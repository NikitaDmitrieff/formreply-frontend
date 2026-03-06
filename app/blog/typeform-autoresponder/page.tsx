import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Autoresponder: Stop Sending Templates, Start Sending Real Replies — FormReply",
  description:
    "A Typeform autoresponder that sends the same template to everyone is better than nothing — but not by much. Here's how AI-drafted replies change the equation.",
  openGraph: {
    title: "Typeform Autoresponder: Stop Sending Templates, Start Sending Real Replies",
    description:
      "Most Typeform autoresponders send generic templates. FormReply drafts a personalized reply for each submission — ready to review and send in one click.",
    url: "https://formreply.app/blog/typeform-autoresponder",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Autoresponder: Stop Sending Templates, Start Sending Real Replies
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            A template autoresponder tells people &ldquo;we got your message.&rdquo; An AI-drafted reply tells them
            &ldquo;we read your message.&rdquo; That difference is what converts inquiries into clients.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What people mean when they search &ldquo;Typeform autoresponder&rdquo;
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are two distinct things people want here, and they often get conflated:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>A confirmation email to the respondent</strong> — the &ldquo;thanks for submitting, we&rsquo;ll
              be in touch&rdquo; email that goes to the person who filled out your form. Typeform has this built in
              (Respondent Notifications under your form&rsquo;s settings).
            </li>
            <li>
              <strong>A reply draft for you</strong> — an AI-assisted first draft of your actual reply to the
              inquiry, delivered to your inbox so you can review and send it. This is what most businesses actually
              need and can&rsquo;t find.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The first is easy. Typeform handles it natively, or you can use Mailchimp/ConvertKit for more control over
            the template. The second — a smart, personalized reply draft — requires something different. That&rsquo;s
            where FormReply fits.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The problem with template autoresponders
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Template autoresponders are better than silence. Telling someone their form was received is basic
            courtesy. But they have a ceiling — and for contact forms, that ceiling is low.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s the gap: your contact form typically captures meaningful information. Someone told you their
            budget, their timeline, their specific problem, what they&rsquo;ve already tried. Your template response
            ignores all of it. It says &ldquo;Thanks for reaching out! We&rsquo;ll get back to you within 24–48
            hours.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            From the respondent&rsquo;s perspective, that template signals one of two things: either you
            didn&rsquo;t read what they wrote, or the reply is automated and not worth their attention. Neither builds
            trust.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The businesses that convert well from contact forms are the ones who reply fast <em>and</em> reply
            specifically — referencing details from the submission in their first message. That specificity signals
            that a real person read the inquiry and took it seriously. It turns a cold inquiry into the start of a
            real conversation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The problem is that writing a personalized reply for every contact form submission takes time — and when
            inquiries come in at 2am or during a busy week, that time doesn&rsquo;t always exist.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How an AI-powered Typeform autoresponder works differently
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instead of sending the same template, an AI autoresponder reads the actual content of each submission and
            drafts a reply that addresses what that specific person wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The practical workflow with FormReply:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Someone submits your Typeform contact form</li>
            <li>
              Typeform fires a webhook to FormReply (~instantly)
            </li>
            <li>
              FormReply reads every field — name, company, message, budget, timeline, custom questions — and sends
              them to GPT-4o-mini with context about your business and the tone you want
            </li>
            <li>
              Within ~10 seconds of the submission, you get an email with two things: the full submission at the top,
              and a personalized reply draft below
            </li>
            <li>
              You review, edit if needed, and hit send. Or you ignore it if the lead isn&rsquo;t relevant — no
              template reply went out without your oversight
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The key distinction: FormReply drafts replies <em>for you to review and send</em>, not automated
            responses sent directly to respondents without your input. You stay in control of every communication that
            leaves your business. The AI just eliminates the blank-page problem and the time pressure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Template autoresponder vs. AI reply drafts: a real comparison
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/3"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Template autoresponder</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply (AI drafts)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Goes to</td>
                  <td className="py-3 pr-4 text-gray-600">Respondent automatically</td>
                  <td className="py-3 text-gray-600">You (for review), then you send</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Personalization</td>
                  <td className="py-3 pr-4 text-gray-600">Name merge at best</td>
                  <td className="py-3 text-gray-600">Reads every field, drafts specific reply</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Your control</td>
                  <td className="py-3 pr-4 text-gray-600">Set-and-forget</td>
                  <td className="py-3 text-gray-600">You approve every reply before it sends</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Time to first reply</td>
                  <td className="py-3 pr-4 text-gray-600">Instant (template)</td>
                  <td className="py-3 text-gray-600">10 sec to draft, then your response time</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Conversion signal</td>
                  <td className="py-3 pr-4 text-gray-600">Low (&ldquo;we got it&rdquo;)</td>
                  <td className="py-3 text-gray-600">High (&ldquo;we read it carefully&rdquo;)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Works while you sleep</td>
                  <td className="py-3 pr-4 text-gray-600">Yes (sends itself)</td>
                  <td className="py-3 text-gray-600">Drafts ready when you wake up</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Risk of bad replies</td>
                  <td className="py-3 pr-4 text-gray-600">Template can seem cold/irrelevant</td>
                  <td className="py-3 text-gray-600">You review before any reply sends</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up your Typeform autoresponder in 3 minutes
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The setup is intentionally fast. You don&rsquo;t need Zapier, API keys, or coding knowledge.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>Create your FormReply account</strong> — go to{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app/onboarding
              </Link>{" "}
              and enter your email, business name, and 2–3 sentences about your business (this context shapes how the
              AI drafts replies)
            </li>
            <li>
              <strong>Copy your webhook URL</strong> — FormReply generates a unique webhook URL for your account
            </li>
            <li>
              <strong>Add it to Typeform</strong> — in your Typeform, go to <strong>Connect</strong> &rarr;{" "}
              <strong>Webhooks</strong> &rarr; <strong>Add a webhook</strong> &rarr; paste the URL &rarr; save
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Test it with a real submission (Typeform&rsquo;s webhook tester sends a sample payload). You&rsquo;ll see
            the reply draft in your inbox within 10–15 seconds.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Do you need both? (Confirmation email + AI drafts)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can run both simultaneously, and for most businesses, that&rsquo;s the right setup:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              <strong>Typeform Respondent Notifications</strong> sends your contact a confirmation email
              automatically — &ldquo;Thanks, we received your message. We&rsquo;ll respond within one business
              day.&rdquo;
            </li>
            <li>
              <strong>FormReply</strong> simultaneously sends you a personalized reply draft so that when you
              do respond, it feels immediate and specific — not like you just got around to it two days later
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform webhooks can send to multiple destinations, so both tools receive the submission at the same
            time. There&rsquo;s no delay, no interference, no conflict.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does FormReply send replies automatically, or do I review them first?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply sends the draft <em>to you</em>, not to your respondent. You review it, make any edits, and
            send it yourself. Nothing leaves your account without your explicit action.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What happens if a submission comes in overnight?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft is waiting in your inbox when you wake up. Instead of spending 5 minutes writing a reply from
            scratch at 7am, you spend 30 seconds reviewing and sending. The respondent gets a thoughtful, specific
            reply first thing in the morning — which often feels faster and more attentive than they expected.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Does it work with any Typeform form?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes — any Typeform that has a contact or inquiry purpose (where someone expects a personal reply). It
            reads all field types: short text, long text, multiple choice, dropdowns, number inputs. The more
            information your form captures, the more specific and useful the draft will be.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if the AI draft misses something important?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You&rsquo;re always reviewing before sending. The draft is a starting point — usually 80–90% of what
            you&rsquo;d write yourself. You edit what needs editing and send. The full submission is included in the
            same email, so you have all the context in one place.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can I customize the tone of the replies?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. During onboarding you provide a short business description and can specify tone (formal, casual,
            concise, detailed). The AI uses that context for every draft. You can update it anytime from your
            dashboard.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">One thing to know upfront</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              FormReply works specifically with Typeform — not Jotform, Tally, Gravity Forms, or other form tools. If
              your contact form is on another platform, FormReply won&rsquo;t be the right fit. If you&rsquo;re on
              Typeform and want to reply faster without losing the personal touch, it&rsquo;s built for exactly that.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A template autoresponder solves the &ldquo;did you get my message?&rdquo; problem. An AI reply draft
            solves the real problem: how do you respond to every inquiry specifically and promptly, without spending
            half your morning writing emails?
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The businesses that close more inbound leads aren&rsquo;t the ones with the best templates. They&rsquo;re
            the ones who respond first and respond specifically. FormReply makes that possible without requiring you
            to be at your desk the moment a form is submitted.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. 3-minute setup. Reply drafts in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Turn your Typeform into a reply machine
          </h3>
          <p className="text-gray-500 mb-6">
            AI-drafted replies for every submission. You review, you send. No templates, no generic responses.
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
