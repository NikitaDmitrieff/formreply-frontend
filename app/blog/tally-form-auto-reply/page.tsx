import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tally Form Auto-Reply: How to Respond to Submissions with AI — FormReply",
  description:
    "Tally forms are free and beautiful, but have no built-in reply feature. Connect FormReply via webhook and get AI-drafted replies to every submission in seconds.",
  openGraph: {
    title: "Tally Form Auto-Reply: How to Respond to Submissions with AI",
    description:
      "Tally has no reply feature. Connect FormReply via webhook and get AI-drafted replies to every form submission in your inbox.",
    url: "https://formreply.app/blog/tally-form-auto-reply",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide · Tally Form Automation</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Tally Form Auto-Reply: How to Respond to Submissions with AI
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Tally is one of the best free form builders available — clean design, unlimited forms, no
            branding. But it has no built-in way to reply to the people who submit your forms. FormReply
            fills that gap with AI-drafted reply emails delivered to your inbox within seconds.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Tally users need an auto-reply solution
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tally does forms exceptionally well. You get a clean editor, conditional logic, file uploads,
            payment collection, and integrations — all for free. What you don&rsquo;t get is any way to
            reply to the person who filled out your form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When someone submits your Tally contact form, you receive an email notification with the
            submission data. That&rsquo;s where the automation ends. To actually respond, you need to:
          </p>
          <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Open the notification email</li>
            <li>Copy the respondent&rsquo;s email address from the form data</li>
            <li>Open your email client and compose a new message</li>
            <li>Write a personalized reply from scratch</li>
            <li>Repeat for every single submission</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            For freelancers, consultants, and small businesses using Tally as their contact form, this
            manual process eats 3-5 minutes per submission. At 15-20 submissions per week, that&rsquo;s
            over an hour of repetitive work — just writing replies.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How Tally webhooks work
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tally supports webhooks natively. When someone submits your form, Tally sends the full
            submission data as a JSON payload to any URL you configure. This is how FormReply connects
            to your Tally forms — no OAuth, no browser extensions, no code.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The webhook includes all form fields: name, email, message, file uploads, and any custom
            fields you&rsquo;ve added. FormReply receives this data, reads the submission, and generates
            a personalized reply draft using AI.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Setup: connect Tally to FormReply in 3 minutes
          </h2>
          <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-4 ml-2">
            <li>
              <strong>Sign up at FormReply</strong> at{" "}
              <Link href="/onboarding" className="text-indigo-600 hover:underline">
                formreply.app
              </Link>{" "}
              — enter your email, business name, and a short description of what you do
            </li>
            <li>
              <strong>Copy your webhook URL</strong> — FormReply generates a unique webhook endpoint
              for your account
            </li>
            <li>
              <strong>Paste it in Tally</strong> — go to your Tally form &rarr; Integrations &rarr;
              Webhooks &rarr; paste the URL. Done.
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The next time someone submits your Tally form, FormReply receives the submission, reads all
            the fields, drafts a personalized reply using GPT-4o-mini, and delivers it to your inbox
            within ~10 seconds.
          </p>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-6 my-8">
            <p className="text-gray-700 font-medium mb-2">Why webhook instead of OAuth?</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tally&rsquo;s webhook system is simple and reliable. Unlike OAuth-based integrations that
              can expire or require re-authorization, webhooks fire on every submission with no token
              management. You paste the URL once and it works indefinitely. Learn more about our{" "}
              <Link href="/for/tally" className="text-indigo-600 hover:underline">
                Tally integration
              </Link>.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            What the AI draft looks like
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply doesn&rsquo;t send emails automatically. It drafts a reply based on the full
            context of what the person wrote, then delivers that draft to your inbox alongside the
            original submission. You review, edit if needed, and send.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For a typical contact form inquiry — &ldquo;Hi, I&rsquo;m interested in your design services.
            Do you have availability in April?&rdquo; — the AI draft will reference their specific
            question, mention your availability, and maintain your professional tone. It reads like a
            reply you wrote, because it was trained on the context of your business description.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For straightforward inquiries, the drafts are 80-90% ready to send. For complex requests,
            you&rsquo;ll edit more. Either way, you&rsquo;re editing a draft instead of staring at a
            blank compose window.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Tally + Zapier vs. FormReply
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            You could build something similar with Zapier: Tally webhook trigger &rarr; OpenAI action
            &rarr; Gmail action. But there are practical differences:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Zapier&rsquo;s free plan is limited to 100 tasks/month — a single form submission uses 3 tasks (trigger + AI + email)</li>
            <li>The Zapier Starter plan costs $19.99/month for 750 tasks — FormReply is $19/month for unlimited replies</li>
            <li>Building the Zap requires configuring 3 separate steps and mapping fields between them</li>
            <li>When Tally changes its webhook format or OpenAI updates its API, you need to fix the Zap manually</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply is purpose-built for this exact workflow. One webhook URL, AI drafting included,
            structured emails with submission context alongside the draft. No multi-step configuration.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Who this is for
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tally is popular with freelancers, solo consultants, and small agencies — people who chose
            it because it&rsquo;s free, fast, and looks professional without any branding. These are
            exactly the users who feel the reply gap most acutely:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4 ml-2">
            <li>Freelance designers getting project inquiries through their portfolio contact form</li>
            <li>Consultants receiving intake questionnaires before discovery calls</li>
            <li>Small agencies fielding RFPs and general business inquiries</li>
            <li>Course creators getting questions about enrollment and pricing</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;re getting 5+ form submissions per week and spending real time writing replies,
            FormReply pays for itself on the first day.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Try it</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Want to see what an AI-drafted reply looks like before connecting your Tally form?{" "}
            <Link href="/tools/reply-generator" className="text-indigo-600 underline underline-offset-2">
              Try our free reply generator
            </Link>{" "}
            — paste any form submission and get a ready-to-send reply instantly, no signup required.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            FormReply offers a free tier with 5 replies per month — enough to test the workflow with
            your real Tally submissions. The full plan is $19/month with unlimited replies. If it
            doesn&rsquo;t save you time on the first submission, cancel anytime.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 bg-indigo-50 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Your Tally form deserves better follow-up
          </h3>
          <p className="text-gray-500 mb-6">
            Connect your Tally form via webhook. Get AI reply drafts in your inbox in 10 seconds.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free trial →
          </Link>
          <p className="text-sm text-gray-400 mt-3">Free tier: 5 replies/month · $19/month for unlimited</p>
        </div>
      </article>
    </main>
  );
}
