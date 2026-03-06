import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Send Quiz Results by Email in Typeform — FormReply",
  description:
    "Typeform's native respondent notifications are static templates. Here's how to send personalized quiz result emails — including score-based results, conditional outcomes, and AI-drafted assessments.",
  openGraph: {
    title: "How to Send Quiz Results by Email in Typeform",
    description:
      "Static confirmation emails vs. personalized result emails: here's the difference and how to set each one up in Typeform.",
    url: "https://formreply.app/blog/typeform-quiz-result-email",
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
            How to Send Quiz Results by Email in Typeform
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform can send respondents a confirmation email after they submit. But a confirmation email isn&rsquo;t a
            results email. Here&rsquo;s the difference — and three ways to actually send personalized quiz results.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What Typeform gives you natively
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a feature called Respondent Notifications. Once enabled, it sends an automatic email to the
            person who filled out your form after they submit. You can customize the subject line and body, and you can
            pull in specific answers using variables.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For many use cases, this is enough. If your quiz is pure lead capture — someone signs up and you want to
            confirm receipt — a respondent notification works fine.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Where it breaks down is when you want to send results that are actually personalized to the respondent&rsquo;s
            answers. The notification is a static template. You can embed their name or a specific answer into it, but
            you cannot branch the content based on their score or outcome. Everyone gets the same email structure,
            with different variable values slotted in.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s not a quiz result email. It&rsquo;s a mail merge.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The three types of &ldquo;quiz result email&rdquo; people actually want
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most requests for &ldquo;typeform quiz result email&rdquo; fall into one of three categories:
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Score-based results</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The respondent answers 10 questions. You calculate a score. Based on the score, they get one of three
            result emails: &ldquo;Beginner,&rdquo; &ldquo;Intermediate,&rdquo; or &ldquo;Advanced.&rdquo; Each email
            is substantially different — different content, different recommendations, different CTAs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s logic variables can calculate a score. But the respondent notification system can&rsquo;t
            send different emails based on that score. The branching happens in the form flow, not in the follow-up
            email layer.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Conditional outcome results</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The quiz is really a diagnostic: &ldquo;What type of X are you?&rdquo; or &ldquo;Which plan is right for
            you?&rdquo; The respondent gets one of several outcomes based on their combination of answers. Each outcome
            should be accompanied by a tailored explanation, not just a label.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Again — Typeform can calculate the outcome. It cannot send outcome-specific emails natively.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. Personalized assessment replies</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            The form is an intake or assessment. The respondent describes their situation — their goals, their
            challenges, their context. The expected result isn&rsquo;t one of N predefined buckets. It&rsquo;s a
            genuine response that engages with what they actually said.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is the most valuable type and the one that&rsquo;s hardest to automate with templates. It&rsquo;s also
            the type where the &ldquo;quiz result email&rdquo; framing starts to blur into something closer to a reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Approach 1: Use Typeform&rsquo;s Endings + respondent notification (score-based)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For score-based results, Typeform&rsquo;s Endings feature is the native solution. You create multiple ending
            screens — one per outcome — and use logic jumps to route respondents to the right ending based on their score.
            Each ending screen shows the result in the form itself.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The limitation: this happens inside the form, not in an email. The respondent sees their result while still
            on the Typeform page. If you want to send them an email with that result, you need a separate automation —
            and that&rsquo;s where most people get stuck.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>What actually works for score-based email:</strong> Use Typeform&rsquo;s logic variables to calculate
            the score, send the score to Zapier or Make via webhook, then use a conditional step in Zapier to route to
            different email templates based on the score value.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This requires a paid Zapier plan (for multi-step zaps with conditional logic), email templates in Gmail or
            whatever you&rsquo;re using, and the willingness to maintain both sides of the integration when either
            changes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Approach 2: Zapier with conditional email routing (conditional outcomes)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For conditional outcome results, the Zapier approach is the most common production solution:
          </p>
          <ol className="list-decimal list-inside text-gray-600 leading-relaxed mb-4 space-y-2">
            <li>Typeform webhook fires on submission</li>
            <li>Zapier receives the submission with all field values</li>
            <li>A Filter or Router step evaluates the outcome variable</li>
            <li>Each branch of the router connects to a different email template</li>
            <li>Email goes out via Gmail, SendGrid, or Mailchimp</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            This works well for a fixed set of outcomes (3-5 buckets). It doesn&rsquo;t scale gracefully when the
            number of outcomes grows or when the email content should incorporate multiple answer variables in a
            natural way. At some point, the templates become so complex with conditional blocks that they&rsquo;re
            harder to maintain than just writing the emails manually.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>Cost:</strong> Zapier Professional starts at ~$50/month for multi-step zaps with conditional logic.
            Add email service costs on top if you&rsquo;re not using Gmail directly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Approach 3: AI-drafted personalized replies (assessment use case)
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For the third type — intake forms, assessments, consultation requests — the problem is different. There is
            no fixed set of outcomes. The result is a genuine engagement with what the person said.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is what{" "}
            <Link href="/" className="text-indigo-600 hover:underline">
              FormReply
            </Link>{" "}
            is built for. Connect your Typeform via webhook. When a submission arrives, FormReply reads all the fields
            and drafts a personalized reply email — not a template with variables, but a coherent response that
            references what the person actually said, acknowledges their specific situation, and moves the conversation
            forward.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft lands in your inbox in about 10 seconds. You review, edit if needed, and send. It&rsquo;s not
            auto-sent — you stay in control of what goes out — but the 80% of the work is already done.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This approach is better than templates for intake/assessment forms because it handles the long tail. When
            someone describes an unusual situation, a template either ignores it or produces an awkward response with
            an uncanny valley quality. An AI draft that actually read their submission reads like a human wrote it —
            because the content is drawn from their specific words, not a pattern-matched bucket.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Which approach is right for your quiz?
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Use case</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Best approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Score-based quiz, 3-5 outcomes, static content</td>
                  <td className="py-3 text-gray-600">Typeform Endings + Zapier conditional router</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Personality/diagnostic quiz, fixed outcome labels</td>
                  <td className="py-3 text-gray-600">Zapier conditional routing to email templates</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Intake form, consultation request, assessment</td>
                  <td className="py-3 text-gray-600">AI-drafted reply (FormReply)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Simple lead capture, just needs confirmation</td>
                  <td className="py-3 text-gray-600">Typeform native respondent notification</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The thing most tutorials skip
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most guides on &ldquo;typeform quiz result email&rdquo; focus on the mechanics of the automation and skip
            the question of what the email should actually say. Templates are fine for simple outcomes. They break
            down when the quiz is doing real diagnostic work — when the result depends on a combination of answers,
            when different respondents are in genuinely different situations, or when the expected response is a
            recommendation, not a label.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            In those cases, the right question isn&rsquo;t &ldquo;how do I automate sending a result email?&rdquo;
            It&rsquo;s &ldquo;how do I send a reply that actually responds to what this person wrote?&rdquo; That&rsquo;s
            a different problem, and it requires a different tool.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 mt-10">
            <h3 className="text-lg font-bold text-gray-900 mb-2">FormReply — personalized replies for Typeform</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              If your Typeform is an intake form, contact form, or assessment — and you want to send genuine replies
              to each respondent — FormReply drafts them automatically. Free tier: 5 replies/month, no card required.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Try it free
            </Link>
          </div>

        </div>
      </article>
    </main>
  );
}
