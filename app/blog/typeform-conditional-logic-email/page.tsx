import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Conditional Logic + Email: Route Submissions and Draft Smarter Replies — FormReply",
  description:
    "Typeform conditional logic personalizes the form experience. But when different people submit different things, your replies need to match. Here's how to handle both.",
  openGraph: {
    title: "Typeform Conditional Logic + Email: Draft Replies That Match What They Actually Submitted",
    description:
      "Conditional logic makes your Typeform adaptive. FormReply makes your replies adaptive too — AI-drafted based on the exact path each respondent took.",
    url: "https://formreply-frontend-production.up.railway.app/blog/typeform-conditional-logic-email",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Typeform Advanced Features</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Conditional Logic + Email: When Different Paths Need Different Replies
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Conditional logic makes your Typeform smart — different people see different questions based on what
            they&rsquo;ve answered. But if your reply is the same template for everyone, you&rsquo;ve thrown away all
            that context.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What conditional logic does — and where it ends
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s conditional logic (called &ldquo;Logic&rdquo; in the form builder) lets you branch the
            form based on responses. A prospective client who selects &ldquo;enterprise&rdquo; sees different
            follow-up questions than one who selects &ldquo;freelancer.&rdquo; Someone with a budget under $1,000
            gets routed differently than someone with $10,000+ to spend.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This is valuable because it means by the time someone submits, you have highly relevant, pre-qualified
            information — not a generic wall of text, but structured data that reflects their actual situation.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The problem is that conditional logic stops at the &ldquo;submit&rdquo; button. The branching made the
            form experience smart. But when a submission lands in your inbox as a flat list of field/answer pairs,
            you&rsquo;re back to reading context and writing a reply from scratch — for every submission, even when
            they&rsquo;re all different.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Template autoresponders make this worse. A template sent to your enterprise prospect says the same thing
            as the template sent to the freelancer with a $500 budget. You spent time building a smart form; your
            response reveals that you didn&rsquo;t actually read it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How AI reply drafts extend conditional logic into the response
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply reads the actual submitted data — every field, every answer, including the fields that only
            appeared because of how the respondent answered earlier questions. It doesn&rsquo;t see the form
            structure; it sees the submission payload. And because conditional logic routes different people through
            different paths, different people submit different data.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AI draft reflects that. A submission where someone answered &ldquo;enterprise,&rdquo;{" "}
            &ldquo;$50k+ budget,&rdquo; and &ldquo;ready to start within 30 days&rdquo; gets a different draft than
            a submission where someone answered &ldquo;just exploring,&rdquo; &ldquo;no budget set yet,&rdquo; and
            &ldquo;6 months out.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You didn&rsquo;t write routing rules. The draft is personalized because it&rsquo;s responding to the
            actual content of each submission — the same way you would if you were writing the reply yourself.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Example: a consulting intake form with conditional logic
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Say your Typeform contact form works like this:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-2">
            <li>
              <strong>Q1: What type of project?</strong> (Options: Website redesign / Brand identity / Strategy
              consulting / Not sure yet)
            </li>
            <li>
              <strong>Q2 (shown if &ldquo;Website redesign&rdquo;):</strong> Do you have an existing site? What
              platform?
            </li>
            <li>
              <strong>Q2 (shown if &ldquo;Not sure yet&rdquo;):</strong> Can you describe what you&rsquo;re trying
              to achieve?
            </li>
            <li>
              <strong>Q3: Budget range?</strong>
            </li>
            <li>
              <strong>Q4: Timeline?</strong>
            </li>
            <li>
              <strong>Q5: Anything else we should know?</strong>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Two submissions arrive. One is from a company looking for a website redesign on a $15k budget, starting
            next month, currently on Squarespace. The other is from someone who &ldquo;isn&rsquo;t sure yet&rdquo;
            but describes a launch situation that sounds like it needs brand strategy first.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            A template reply to both: &ldquo;Thanks for reaching out! I&rsquo;ll get back to you within 24 hours.&rdquo;
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply drafts:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              <strong>For the website redesign:</strong> Acknowledges the Squarespace migration context, mentions
              your experience with that specific transition, notes the timeline works, suggests a discovery call.
            </li>
            <li>
              <strong>For the &ldquo;not sure yet&rdquo;:</strong> Acknowledges the launch description they gave,
              asks a clarifying question about one specific aspect, frames how a strategy session might help them
              figure out the right scope.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both drafts took 10 seconds to generate. You review, edit where needed, send. The person on the other
            end receives a reply that feels like you read their specific inquiry carefully.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What FormReply does with conditional logic fields
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s webhook payload includes all answered fields — including fields that only appeared due
            to conditional logic. FormReply receives the full payload and uses all of it. There&rsquo;s no
            configuration required on your end: you don&rsquo;t label which fields to use or define routing rules.
            The AI reads the submission as a whole and drafts accordingly.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fields that weren&rsquo;t shown (because the respondent went a different path) simply aren&rsquo;t in
            the payload, so they don&rsquo;t confuse the draft. The submission reflects the respondent&rsquo;s actual
            path through the form.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setting up FormReply with a conditional logic form
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The setup is the same regardless of whether your form uses conditional logic. FormReply connects at the
            webhook level and handles the rest.
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>
              Create your FormReply account at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply-frontend-production.up.railway.app/onboarding
              </Link>
              . Write a clear business description — the more specific you are about your services, ideal clients,
              and reply tone, the more relevant the drafts will be.
            </li>
            <li>
              Copy your FormReply webhook URL.
            </li>
            <li>
              In Typeform, go to <strong>Connect &rarr; Webhooks &rarr; Add a webhook</strong>, paste the URL,
              and save.
            </li>
            <li>
              Test with a real submission or Typeform&rsquo;s webhook tester. Try a submission that goes through
              different conditional paths and check that both drafts reflect the different contexts.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            One thing to know about the business description
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The AI draft quality scales with how well the business description captures your context. If your form
            handles very different types of inquiries (e.g., both small clients and enterprise clients), a business
            description that acknowledges that range will produce better drafts than a generic one.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can update the business description anytime from your FormReply dashboard as your positioning
            evolves. Some users write it once and leave it. Others refine it after reviewing a few drafts and
            noticing patterns in what they always edit.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Frequently asked questions
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Do I need to map my conditional logic branches to FormReply?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply receives the webhook payload automatically and reads whatever fields were answered.
            There&rsquo;s no configuration for conditional logic — it just works because Typeform includes all
            answered fields in the webhook.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if my form has many possible paths?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            More paths mean more varied submissions, and the drafts will vary accordingly. The AI reads each
            submission independently — it doesn&rsquo;t average across submissions or apply rules. A submission
            that went through a very specific path gets a draft tailored to that path.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            Can I use this with Typeform Logic Jumps (older feature)?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Whether you&rsquo;re using the newer Logic feature or older Logic Jumps, the webhook payload
            includes the fields that were actually answered. FormReply works with either.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            What if a submission is clearly not a qualified lead?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            You can ignore the draft — nothing is sent until you explicitly reply. Some users set up conditional
            logic specifically to qualify leads before submission, but even if an unqualified submission comes
            through, you just don&rsquo;t reply to the draft.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">FormReply works with any Typeform contact form</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Whether your form is simple (3 fields) or complex (12 fields with conditional branching), FormReply
              handles the response side. It&rsquo;s Typeform-specific — not built for other form tools — but within
              Typeform, conditional logic forms work as well as any other.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The bottom line</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Conditional logic makes your form smart. FormReply makes your replies equally smart — drafted to match
            the specific path each respondent took, without any routing rules on your end.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;ve invested time in a well-structured Typeform with conditional logic, it&rsquo;s worth
            making sure your first reply reflects that structure — not a generic template that ignores everything
            the form captured.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            $19/month. 3-minute setup. Personalized draft in your inbox in 10 seconds.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Make your replies as smart as your Typeform
          </h3>
          <p className="text-gray-500 mb-6">
            AI reply drafts tailored to each submission — including the conditional logic fields. You review,
            you send.
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
