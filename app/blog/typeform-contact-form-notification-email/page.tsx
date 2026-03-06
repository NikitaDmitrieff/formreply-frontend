import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Contact Form Notification Email: What You Get vs. What You Need — FormReply",
  description:
    "Typeform's built-in notification email tells you someone submitted. It doesn't help you reply. Here's how to set up contact form notifications that actually save you time.",
  openGraph: {
    title: "Typeform Contact Form Notification Email: What You Get vs. What You Need",
    description:
      "Typeform notifications tell you a form came in. They don't draft a reply. Here's the gap — and how to close it.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-contact-form-notification-email",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Notifications</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Contact Form Notification Email: What You Get vs. What You Actually Need
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform&rsquo;s email notifications are good for knowing a submission arrived.
            They&rsquo;re not much help with actually replying to it. Here&rsquo;s how to bridge that gap.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What Typeform&rsquo;s default notification email actually does</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When someone fills in your Typeform, you get an email. It looks something like this:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-sm text-gray-600 font-mono">
            <p className="mb-1"><strong>Subject:</strong> New submission for &ldquo;Contact Us&rdquo;</p>
            <p className="mb-3"><strong>From:</strong> notifications@typeform.com</p>
            <p className="mb-1">Name: Sarah Chen</p>
            <p className="mb-1">Email: sarah@example.com</p>
            <p className="mb-1">Message: I&rsquo;m interested in your branding packages. Can you tell me more about pricing and availability?</p>
            <p>Submitted: March 6, 2026, 14:32</p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s it. You now know Sarah submitted. You still have to open a blank email,
            think through what she actually asked, and write a reply. The notification tells you there&rsquo;s
            work to do — it doesn&rsquo;t reduce the work.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the gap most people run into: Typeform is excellent at collecting responses.
            The notification system stops at &ldquo;here&rsquo;s what came in.&rdquo; What happens
            next is entirely on you.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to set up Typeform&rsquo;s email notifications (and their limits)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            First, the basics. Typeform gives you two types of email notifications:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Self-notifications (you get an email)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This tells you a form was submitted. To set it up:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600 text-sm">
            <li>Open your form in Typeform</li>
            <li>Click <strong>Connect</strong> at the top</li>
            <li>Select <strong>Notifications</strong></li>
            <li>Enable <strong>Self notifications</strong></li>
            <li>Enter the email address where you want to receive alerts</li>
            <li>Customize the subject line if you want (e.g., &ldquo;New contact form submission&rdquo;)</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is available on all Typeform paid plans. The notification arrives as a plain-text
            summary of the form fields. No formatting, no customization of the body content.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Respondent notifications (the submitter gets a confirmation)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This sends an automatic email to the person who filled in your form. To set it up:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-600 text-sm">
            <li>Same path: <strong>Connect → Notifications → Respondent notifications</strong></li>
            <li>Choose which field contains the respondent&rsquo;s email</li>
            <li>Write the message they&rsquo;ll receive</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every respondent gets identical text. You can&rsquo;t personalize it based on what they
            submitted — it&rsquo;s the same email for every submission. Good for &ldquo;Thanks,
            we&rsquo;ll be in touch&rdquo;; not useful for a reply that actually addresses what they asked.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The problem: notifications are about alerting, not responding</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s notification system was designed to solve a specific problem: making sure
            you don&rsquo;t miss submissions. It does that well.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But for most business contact forms — project inquiries, consultation requests, support
            questions — the notification is just the beginning. The actual job is writing a thoughtful
            reply that addresses what the person asked. And that doesn&rsquo;t happen inside Typeform.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The workflow most people end up with:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
            <li>Typeform sends notification email</li>
            <li>You open it, read the submission</li>
            <li>You open a new email tab</li>
            <li>You find the respondent&rsquo;s email address (sometimes buried in the notification)</li>
            <li>You draft a reply from scratch</li>
            <li>You send it</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Steps 3 through 5 aren&rsquo;t the notification system&rsquo;s fault — it was never
            built to help with that. But this is where the real time cost sits. If you get ten
            contact form submissions a week and each reply takes four minutes to write, that&rsquo;s
            40 minutes of repetitive writing. Not a huge number in isolation, but it compounds
            across months.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Three ways to get more from Typeform contact form notifications</h2>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Option 1: Zapier — route submissions to your inbox with context</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier can connect Typeform to Gmail (or Outlook) so form submissions arrive as emails
            in a specific folder with a cleaner format than Typeform&rsquo;s default notification.
            You can also use it to auto-populate a reply template with form field values.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cost: Zapier starts at $20/month for multi-step Zaps. Setup time: 30-60 minutes. The
            templates are static — they break on edge cases like freetext fields with unexpected input.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Option 2: Typeform + Google Sheets + manual review</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform integrates directly with Google Sheets. Every submission populates a row.
            Some people prefer reviewing submissions in a spreadsheet and then replying from there.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This doesn&rsquo;t reduce writing time — you still draft every reply manually. But it
            organizes submissions better and makes it easier to track which ones you&rsquo;ve responded to.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Option 3: AI-drafted reply delivered to your inbox (10 seconds)</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is what{" "}
            <Link href="/" className="text-indigo-600 underline underline-offset-2">
              FormReply
            </Link>{" "}
            does. Instead of sending you a notification that says &ldquo;someone submitted,&rdquo;
            it sends you a drafted reply — one that&rsquo;s already addressed what the person asked,
            written in your voice.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The workflow:
          </p>
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
            <li>Someone submits your Typeform</li>
            <li>Typeform sends a webhook to FormReply (you set this up once, takes about 2 minutes)</li>
            <li>FormReply reads the submission and generates a reply draft using GPT-4o-mini</li>
            <li>The draft arrives in your inbox within ~10 seconds</li>
            <li>You read it, edit anything that&rsquo;s off, and hit send</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The difference from a Zapier template: the AI generates a full reply in natural prose,
            not field variables slotted into a fixed template. A submission that says &ldquo;I need
            help with my restaurant&rsquo;s brand, mostly social media presence, budget is around $800&rdquo;
            produces a reply that engages with those specifics — the restaurant context, the $800
            budget, the social media focus — rather than just echoing them back as &ldquo;Thanks for
            your inquiry about &#123;service&#125;.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            And you review before anything goes out. The draft goes to you, not to the person who
            submitted. If the AI draft is wrong, you catch it. For client-facing correspondence,
            this matters.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Comparison: Typeform notification options</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Option</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">What it does</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-700">Still need to write?</th>
                  <th className="text-left py-2 font-semibold text-gray-700">Cost</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Typeform self-notification</td>
                  <td className="py-3 pr-4">Tells you a form came in</td>
                  <td className="py-3 pr-4">Yes, from scratch</td>
                  <td className="py-3">Free</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Zapier template reply</td>
                  <td className="py-3 pr-4">Sends templated email automatically</td>
                  <td className="py-3 pr-4">No (no review either)</td>
                  <td className="py-3">$20+/mo</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">Google Sheets sync</td>
                  <td className="py-3 pr-4">Organizes submissions</td>
                  <td className="py-3 pr-4">Yes, from scratch</td>
                  <td className="py-3">Free</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">FormReply AI draft</td>
                  <td className="py-3 pr-4">Draft reply in inbox in 10s</td>
                  <td className="py-3 pr-4">Just review + send</td>
                  <td className="py-3">$19/mo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting up FormReply with Typeform (quick version)</h2>
          <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-600">
            <li>
              <strong>Sign up at{" "}
              <Link href="/onboarding" className="text-indigo-600 underline underline-offset-2">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>
              </strong> — write 2-3 sentences about your business and pick a tone (professional, friendly, or casual).
            </li>
            <li>
              <strong>Copy your webhook URL</strong> from the success page.
            </li>
            <li>
              <strong>In Typeform:</strong> open your form → Connect tab → Webhooks → Add a webhook → paste the URL → Save.
            </li>
            <li>
              <strong>Test it:</strong> submit a test entry. A draft reply should arrive in your inbox in under 15 seconds.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            From that point forward, every contact form submission arrives with a draft reply already
            written. You spend 30 seconds reviewing instead of 4 minutes writing.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">One thing to keep in mind about AI-drafted replies</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            AI drafts are starting points, not finished products. For most business contact form
            submissions — project inquiries, quote requests, general questions — they&rsquo;re good
            enough that you&rsquo;re mostly confirming rather than rewriting. But they&rsquo;re not
            magic, and the quality correlates directly with the business context you give during setup.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A generic context (&ldquo;I run a marketing agency&rdquo;) produces generic-sounding drafts.
            A specific one (&ldquo;We do brand strategy and visual identity for D2C food brands. Projects
            run $5,000-$15,000 over 8-12 weeks. We&rsquo;re selective and only take on 3-4 projects per quarter&rdquo;)
            produces drafts that actually sound like you.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Spend five minutes on that context when you sign up. It pays off on every submission after.
          </p>

          {/* CTA */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Replace your Typeform notification with a draft reply
            </h3>
            <p className="text-gray-600 mb-6">
              FormReply sends you a personalized reply draft for every form submission — in your inbox,
              in 10 seconds. Review it, tweak one line if needed, and send.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition-colors"
            >
              Start free trial — $19/month
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8 mt-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-bold text-lg text-indigo-600 tracking-tight">
            FormReply
          </Link>
          <p className="text-sm text-gray-400">
            AI reply drafts for every Typeform submission. $19/month.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/blog/typeform-follow-up-email" className="hover:text-gray-600">
              Follow-up guide
            </Link>
            <Link href="/blog/typeform-zapier-alternative" className="hover:text-gray-600">
              Zapier alternative
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
