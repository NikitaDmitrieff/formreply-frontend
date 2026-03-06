import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Reply to 50 Typeform Submissions Per Week in Under 2 Hours — FormReply",
  description:
    "At 50 Typeform submissions per week, manual replies take 16–20 hours. Here's the workflow that cut that to under 2 hours without sacrificing personalization.",
  openGraph: {
    title: "How We Reply to 50 Typeform Submissions Per Week in Under 2 Hours",
    description:
      "At 50 Typeform submissions per week, manual replies take 16–20 hours. Here's the workflow that cut that to under 2 hours without sacrificing personalization.",
    url: "https://formreply.app/blog/typeform-50-submissions-workflow",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Case Study · Typeform Workflows</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            How We Reply to 50 Typeform Submissions Per Week in Under 2 Hours
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            At 50 submissions a week, manual replies were consuming 16&ndash;20 hours. Here&rsquo;s the exact workflow
            that brought that down to under 2 hours &mdash; without copy-paste templates or sacrificing
            personalization.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 leading-relaxed mb-4">
            If you run an agency or a consulting practice and use Typeform for intake, you know what happens after a
            busy week of inbound.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Monday morning: 12 new submissions in the queue. Each one is different. One person wants SEO help for an
            e-commerce site. Another is a B2B SaaS company looking for content. Another filled out every field with
            one sentence. You open the first one, read it, start typing a reply that actually references what they
            said &mdash; and 25 minutes later you&rsquo;re on submission two.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s the before. It&rsquo;s not dramatic, but it compounds. Fifty submissions a week at 20&ndash;25
            minutes each is 16&ndash;20 hours. That&rsquo;s half a full-time week spent on replies before any actual
            work starts.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Problem Isn&rsquo;t the Form</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most intake forms are well-built. Good qualifying questions, logical flow, the right fields. The form does
            its job.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The problem is the reply. It needs to feel personal &mdash; because it is personal, this person told you
            something real about their situation. But writing from scratch every time is slow, and copy-paste templates
            sound exactly like what they are.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The result is usually one of three things: replies that go out late, replies that feel generic, or a
            backlog that quietly kills the lead before anyone responds at all.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            The After: What Our Current Workflow Looks Like
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We run about 50 Typeform submissions per week across a few different intake forms. The shift happened when
            we started using FormReply.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">Here&rsquo;s the actual workflow:</p>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-6 ml-2">
            <li>Someone submits the Typeform.</li>
            <li>
              FormReply reads the submission and drafts a reply &mdash; one that references what they actually wrote.
              Their industry, their specific problem, the question they asked in the last field.
            </li>
            <li>We open the draft, read it, adjust one or two lines if needed, and send.</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Total time per reply: under 3 minutes on most days. Two or three minutes if there&rsquo;s something
            specific we want to add.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fifty submissions at 3 minutes each is about 2.5 hours. Compare that to the 16&ndash;20 hours before. We
            didn&rsquo;t hire anyone. We didn&rsquo;t build a complex automation. We just stopped writing replies from
            scratch.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What &ldquo;Personalized&rdquo; Actually Means Here
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The replies don&rsquo;t read like they came from a template. That&rsquo;s the part that surprised us most.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If someone mentions they&rsquo;re a solo consultant trying to scale their discovery process, the draft
            references that. If someone lists three specific pain points in their submission, the reply addresses those
            points in order. The draft has enough context to feel like the person who built the form wrote it.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            We still review everything before it goes out. That&rsquo;s important &mdash; the human read-through
            catches anything that needs a different tone or a specific follow-up question. But we&rsquo;re reviewing
            and refining, not writing from zero.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who This Works For</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;re fielding fewer than 5 submissions a month, you probably don&rsquo;t need this. Write them
            manually, you have the time.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;re fielding 10 or more per week &mdash; agencies, consultants, coaches, anyone running a
            Typeform-based intake &mdash; the math changes quickly. The time you spend on replies is time you&rsquo;re
            not spending on delivery, sales, or anything else.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The free tier at FormReply is 5 replies per month, no card required. If you have a Typeform intake running
            right now, it&rsquo;s worth connecting it and seeing what the drafts look like on your actual submissions.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stop writing Typeform replies from scratch
          </h3>
          <p className="text-gray-500 mb-6">
            Free tier: 5 replies/month, no card required. AI drafts ready in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try FormReply free &rarr;
          </Link>
          <p className="text-sm text-gray-400 mt-3">$19/month for unlimited replies &middot; Cancel anytime</p>
        </div>
      </article>
    </main>
  );
}
