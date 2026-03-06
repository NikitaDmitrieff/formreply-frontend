import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Reply to Typeform Submissions: 3 Approaches Compared — FormReply",
  description:
    "You've got Typeform submissions coming in. Here are the three practical ways to reply — manual, Zapier automation, and AI-drafted replies — with honest tradeoffs for each.",
  openGraph: {
    title: "How to Reply to Typeform Submissions: 3 Approaches Compared",
    description:
      "Manual replies, Zapier automation, or AI reply drafts? Here's how to pick the right approach for replying to Typeform contact form submissions.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-reply-to-submissions",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Workflows</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How to Reply to Typeform Submissions: 3 Approaches Compared
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform captures the inquiry beautifully. But getting back to the person who submitted? That part is up
            to you. Here are the three ways most businesses handle it — and what each one actually costs.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            First: what does Typeform give you natively?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform notifies you when someone submits a form via email — you&rsquo;ll get a summary of the
            responses. That&rsquo;s useful for tracking, but it&rsquo;s not a reply workflow. The notification
            doesn&rsquo;t give you a pre-drafted response. It doesn&rsquo;t make replying easier. It just means you
            know a submission arrived.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform also has Respondent Notifications — automated confirmation emails sent to whoever filled out the
            form. These are good for acknowledgment (&ldquo;we got your message&rdquo;), but they&rsquo;re templates.
            They don&rsquo;t contain an actual reply to what the person wrote.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For actual replies — the kind that reference what someone asked, address their specific situation, and
            move the conversation forward — you need one of these three approaches.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Approach 1: Reply manually, from scratch
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You receive the submission notification, open your email, and write a reply. This is the default. Most
            businesses do it this way.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What it looks like in practice:</strong> Typeform emails you a summary of the submission. You
            reply to that email, or you copy the respondent&rsquo;s email address and start a new thread, or you open
            a new compose window and write from scratch. You&rsquo;re staring at the form data trying to remember
            what you&rsquo;d normally say in this situation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>The honest tradeoffs:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Full control over every reply — nothing automated can make an embarrassing mistake</li>
            <li>Slow — each reply takes 5–15 minutes of focused attention</li>
            <li>Inconsistent — quality varies with your energy level and available time</li>
            <li>Doesn&rsquo;t scale — at 20+ submissions per week, this becomes a part-time job</li>
            <li>
              Delayed — submissions that arrive at night, on weekends, or during busy stretches get replied to late
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Manual works fine at low volume. At higher volume, or for businesses where speed of first response
            matters, it breaks down.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Approach 2: Automate with Zapier (or Make.com)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Build a Zap that triggers on Typeform submission, sends the data to an AI model (OpenAI, Claude), and
            then emails the generated reply — either to you or directly to the respondent.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What the setup looks like:</strong> Typeform → Zapier trigger → OpenAI action (write your own
            prompt) → Gmail/Outlook action to send the email. This takes 20–30 minutes to configure properly and
            requires familiarity with Zapier&rsquo;s multi-step flows and some prompt engineering judgment.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>The honest tradeoffs:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Can work well once set up correctly</li>
            <li>Expensive — Zapier Starter ($19.99/mo) + OpenAI usage ($2–5/mo) adds up</li>
            <li>Multi-step Zaps require a paid Zapier plan (free plan only allows single-step)</li>
            <li>
              Fragile — API changes, token expirations, and Typeform webhook payload updates can break the Zap
              silently
            </li>
            <li>
              If sending auto-replies directly to respondents without review, one bad AI output goes out under your
              name
            </li>
            <li>2–5 minute latency (Zapier processing queue)</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier is the right tool if you need replies plus other actions — updating a CRM, posting to Slack,
            creating a task in Asana. If reply drafting is the whole job, the overhead isn&rsquo;t worth it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Approach 3: AI reply drafts, reviewed before sending
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is what FormReply does. Every Typeform submission triggers an AI-drafted reply that lands in your
            inbox — alongside the full submission — within 10 seconds. You review, edit if needed, and send. Nothing
            goes to your respondent without your explicit approval.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What the workflow looks like:</strong>
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Someone submits your Typeform contact form (name, company, message, budget, timeline — whatever fields
              you have)
            </li>
            <li>
              Typeform fires a webhook to FormReply
            </li>
            <li>
              FormReply reads all submission fields and drafts a contextual reply using GPT-4o-mini, informed by your
              business description and tone preferences
            </li>
            <li>
              You get one email with two sections: the full submission at the top, and the draft reply below
            </li>
            <li>
              You spend 30 seconds reviewing, make any edits, and send. Or discard it if the inquiry isn&rsquo;t
              relevant
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>The honest tradeoffs:</strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Drafts are ready when you are — including submissions that arrive at 2am</li>
            <li>Each reply still goes through your review — no automated emails sent without approval</li>
            <li>
              $19/month, no other tools needed — cheaper and simpler than Zapier + OpenAI
            </li>
            <li>3-minute setup — connect your Typeform webhook, done</li>
            <li>Only works with Typeform — not other form builders</li>
            <li>
              Draft quality depends on how much context you provide about your business during setup
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Comparison: all three approaches
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900 w-1/4"></th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Manual</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Zapier + OpenAI</th>
                  <th className="text-left py-3 font-semibold text-gray-900">FormReply</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Setup time</td>
                  <td className="py-3 pr-4 text-gray-600">0 min</td>
                  <td className="py-3 pr-4 text-gray-600">20–30 min</td>
                  <td className="py-3 text-gray-600">~3 min</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Cost/month</td>
                  <td className="py-3 pr-4 text-gray-600">$0</td>
                  <td className="py-3 pr-4 text-gray-600">$22–25</td>
                  <td className="py-3 text-gray-600">$19</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Reply time</td>
                  <td className="py-3 pr-4 text-gray-600">When you get to it</td>
                  <td className="py-3 pr-4 text-gray-600">1–5 min (automated)</td>
                  <td className="py-3 text-gray-600">Draft in 10 sec, you send when ready</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Personalization</td>
                  <td className="py-3 pr-4 text-gray-600">High (if you have time)</td>
                  <td className="py-3 pr-4 text-gray-600">Medium (prompt-dependent)</td>
                  <td className="py-3 text-gray-600">High (reads all fields)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Human review</td>
                  <td className="py-3 pr-4 text-gray-600">Always</td>
                  <td className="py-3 pr-4 text-gray-600">Optional (risky to skip)</td>
                  <td className="py-3 text-gray-600">Always</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Scales to 50+/week</td>
                  <td className="py-3 pr-4 text-gray-600">No</td>
                  <td className="py-3 pr-4 text-gray-600">Yes</td>
                  <td className="py-3 text-gray-600">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600 font-medium">Maintenance</td>
                  <td className="py-3 pr-4 text-gray-600">None</td>
                  <td className="py-3 pr-4 text-gray-600">Manual when APIs change</td>
                  <td className="py-3 text-gray-600">Handled by FormReply</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Which approach is right for you?
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Choose manual if:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>You receive fewer than 5 submissions per week</li>
            <li>Your replies are highly specialized (legal, medical, technical) and need careful human judgment</li>
            <li>You genuinely enjoy the writing and have the time</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Choose Zapier if:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>
              You need replies <em>plus</em> other automations — CRM updates, Slack notifications, task creation
            </li>
            <li>You&rsquo;re already on a Zapier paid plan for other workflows</li>
            <li>You want fully automated replies sent without human review (and you accept the risk)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Choose FormReply if:
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>You receive 5–100+ submissions per week and can&rsquo;t keep up with manual replies</li>
            <li>
              You want personalized, specific replies — not templates — but don&rsquo;t have time to write from
              scratch
            </li>
            <li>You want to stay in control (review before send) without adding tool complexity</li>
            <li>Typeform is your contact form and reply drafting is the core job to solve</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to set up FormReply (3 minutes)
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Go to{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>{" "}
              — enter your email, business name, and 2–3 sentences about what you do and the tone you want (formal,
              casual, concise)
            </li>
            <li>Copy your unique webhook URL from the dashboard</li>
            <li>
              In Typeform: open your form → <strong>Connect</strong> → <strong>Webhooks</strong> → paste the URL →
              save
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The next submission triggers a draft. It arrives in your inbox in ~10 seconds: the full submission at the
            top, your draft reply below. Review, edit if needed, send.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Quick tip: better context = better drafts</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              The quality of your reply drafts depends heavily on the business context you provide during setup. Don&rsquo;t
              write &ldquo;I run a consulting firm.&rdquo; Write &ldquo;I&rsquo;m a freelance UX consultant
              specializing in B2B SaaS onboarding. Replies should be direct and professional, not salesy. I typically
              offer a free 30-minute intro call.&rdquo; The more specific, the better the draft will match what
              you&rsquo;d actually write.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Replying to Typeform submissions doesn&rsquo;t have to be a bottleneck. Manual replies are fine at low
            volume. Zapier works if you need multi-step automation. But if your specific problem is &ldquo;I&rsquo;m
            getting contact form inquiries and I want to reply quickly and specifically without spending 15 minutes
            per reply,&rdquo; there&rsquo;s now a tool built exactly for that.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply: $19/month, 3-minute setup, AI reply drafts in your inbox 10 seconds after every submission.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Reply to every Typeform submission in seconds
          </h3>
          <p className="text-gray-500 mb-6">
            AI drafts the reply. You review and send. No automation risk, no template replies.
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
