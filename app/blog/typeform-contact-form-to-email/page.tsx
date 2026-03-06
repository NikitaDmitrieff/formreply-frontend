import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Contact Form to Email: How Notifications Work (and How to Reply Automatically) — FormReply",
  description:
    "How Typeform sends contact form submissions to email, what the notification actually contains, and how to go from raw notification to a drafted reply in 10 seconds.",
  openGraph: {
    title: "Typeform Contact Form to Email: How Notifications Work (and How to Reply Automatically)",
    description:
      "Typeform can forward contact form submissions to your inbox. Here's what arrives, what's missing, and how FormReply turns that raw data into a ready-to-send reply.",
    url: "https://formreply.app/blog/typeform-contact-form-to-email",
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
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide &middot; Typeform Email</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Contact Form to Email: How Notifications Work (and How to Reply Automatically)
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Typeform can forward every contact form submission directly to your inbox. The raw notification
            tells you what arrived — but it doesn&rsquo;t help you reply. Here&rsquo;s how the whole system
            works, and how to add a drafted reply to each notification automatically.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What &ldquo;Typeform contact form to email&rdquo; actually means</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are two distinct flows people mean when they ask how to get a Typeform contact form to email:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
            <li><strong>Owner notifications</strong> — you receive an email every time someone fills out your form</li>
            <li><strong>Respondent confirmations</strong> — the person who filled the form gets an acknowledgment email</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most contact form setups want both. This guide covers owner notifications in depth — because that&rsquo;s where
            the real gap is. Getting a notification is easy. Getting a notification that includes a ready-to-send reply is what
            most people actually want.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to set up Typeform email notifications</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform&rsquo;s built-in email notification is called <strong>Respond to</strong>. Here&rsquo;s how to enable it:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600 mb-6">
            <li>Open your form in the Typeform builder</li>
            <li>Click <strong>Connect</strong> in the top navigation</li>
            <li>Select <strong>Email notifications</strong></li>
            <li>Toggle on <strong>Self notifications</strong></li>
            <li>Enter the email address where you want submissions delivered</li>
            <li>Customize the subject line if needed (you can reference field values using <code>@</code> mentions)</li>
            <li>Save</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            From this point, every submission triggers an email to the address you specified. The email contains all the
            answers the respondent provided, formatted as a list.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">What the Typeform notification email actually contains</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The default notification email gives you:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li>Form name and submission timestamp</li>
            <li>Each field label followed by the respondent&rsquo;s answer</li>
            <li>A link to view the full response in Typeform&rsquo;s dashboard</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s a realistic example of what lands in your inbox:
          </p>

          {/* Email mockup */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 font-mono text-sm">
            <p className="text-gray-400 text-xs mb-3 uppercase tracking-wide">Example notification email</p>
            <p className="text-gray-800 font-semibold mb-1">Subject: New response — Contact Form</p>
            <div className="border-t border-gray-200 pt-3 space-y-2 text-gray-600">
              <p><span className="text-gray-400">Name:</span> Sarah Chen</p>
              <p><span className="text-gray-400">Email:</span> sarah@example.com</p>
              <p><span className="text-gray-400">What can we help you with?</span> I&rsquo;m interested in your consulting services — can you share pricing and availability for a project starting in April?</p>
              <p><span className="text-gray-400">Budget:</span> $5,000–10,000</p>
            </div>
            <p className="text-indigo-500 text-xs mt-4 cursor-pointer">View full response →</p>
          </div>

          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s it. You have the data. You still have to reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The gap: from notification to reply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The notification tells you what arrived. It does not help you respond. For a contact form where someone
            has asked a specific question or described a specific situation, you need to:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-600 mb-6">
            <li>Read the submission carefully</li>
            <li>Think about what this specific person actually needs to hear</li>
            <li>Open a compose window</li>
            <li>Write a reply that references their situation — not a generic acknowledgment</li>
            <li>Send it</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Done once, that&rsquo;s fine. Done twenty times a month, with each submission requiring different context and
            a different reply, it&rsquo;s a significant time drain. Research from MIT and InsideSales.com shows you&rsquo;re
            21 times more likely to qualify a lead if you respond within five minutes. The average business takes 42 hours.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The bottleneck is not the notification. The bottleneck is the reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to add an AI-drafted reply to each notification</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply connects to your Typeform via webhook. When a submission arrives, it reads the full response,
            generates a personalized draft reply, and sends that draft to your inbox — alongside the original submission data.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Instead of receiving a raw notification and starting from scratch, you receive a notification with a complete
            reply already written. Review it, adjust anything that needs adjusting, and send.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The draft typically arrives within 10 seconds of the submission. You never auto-send — you always review
            before anything goes out.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How FormReply differs from Typeform&rsquo;s built-in reply</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a <strong>Respondent notifications</strong> feature that sends a confirmation email to the person
            who filled out the form. It&rsquo;s useful for &ldquo;Thanks, we got your message&rdquo; confirmations. It is not
            useful for contact form replies because:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-6">
            <li>The content is a static template — it cannot reference what the person actually wrote</li>
            <li>It sends automatically, without your review</li>
            <li>It goes from Typeform&rsquo;s email infrastructure, not your address</li>
            <li>There is no AI involved — every reply is identical</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            FormReply is the opposite. Every draft is unique to that submission. Nothing sends without your approval.
            The draft comes to you — you send the reply from your own email.
          </p>

          {/* Comparison table */}
          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 text-gray-600 font-semibold border border-gray-200">Feature</th>
                  <th className="py-3 px-4 text-center text-indigo-700 font-bold border border-gray-200 bg-indigo-50">FormReply</th>
                  <th className="py-3 px-4 text-center text-gray-600 font-semibold border border-gray-200">Typeform Notifications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Sends raw submission data to your inbox", "Yes", "Yes"],
                  ["Includes an AI-drafted reply", "Yes", "No"],
                  ["Personalized to each submission", "Yes", "No (template only)"],
                  ["You review before sending", "Yes", "N/A — no reply drafted"],
                  ["Sends from your email address", "You send it", "Typeform&rsquo;s servers"],
                  ["Setup time", "~2 minutes", "~1 minute"],
                  ["Cost", "$19/mo", "Included in Typeform"],
                ].map(([feature, formreply, typeform]) => (
                  <tr key={feature} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700 font-medium border border-gray-200" dangerouslySetInnerHTML={{ __html: feature }} />
                    <td className="py-3 px-4 text-center text-indigo-700 font-semibold border border-gray-200 bg-indigo-50" dangerouslySetInnerHTML={{ __html: formreply }} />
                    <td className="py-3 px-4 text-center text-gray-500 border border-gray-200" dangerouslySetInnerHTML={{ __html: typeform }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Setting up FormReply with your Typeform contact form</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The connection takes about two minutes:
          </p>
          <ol className="list-decimal pl-6 space-y-3 text-gray-600 mb-6">
            <li>
              <strong>Create a FormReply account</strong> — free tier includes 5 replies per month, no card required
            </li>
            <li>
              <strong>Connect your Typeform</strong> — FormReply will show you a unique webhook URL. Copy it.
            </li>
            <li>
              <strong>Add the webhook in Typeform</strong> — go to Connect → Webhooks in your form, paste the URL, and enable it
            </li>
            <li>
              <strong>Set your reply email</strong> — where FormReply should send your drafts
            </li>
            <li>
              <strong>Describe your business and tone</strong> — a sentence or two is enough. FormReply uses this context to match your voice
            </li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            The next submission that hits your Typeform will arrive in your inbox with a draft already written.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Do you need FormReply if you&rsquo;re only getting a few submissions a month?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The free tier covers five drafts per month — enough to test whether the quality is good and whether it saves
            you meaningful time. If you&rsquo;re getting fewer than five inquiries a month, the free tier is all you need.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            If you&rsquo;re getting more, the upgrade to $19/month covers unlimited submissions. At that volume, the draft
            quality and the time saved typically pay for the subscription in the first week.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Summary</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-8">
            <li>Typeform&rsquo;s built-in email notifications forward raw submission data to your inbox — they don&rsquo;t help you reply</li>
            <li>Respondent confirmations are static templates — they&rsquo;re acknowledgments, not personalized replies</li>
            <li>FormReply adds a third layer: an AI-drafted, personalized reply to each submission, delivered to your inbox alongside the original data</li>
            <li>You always review before sending — nothing goes out automatically</li>
            <li>Setup takes two minutes via webhook</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Turn your Typeform notifications into drafted replies
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Free tier: 5 drafts/month. No card required. Takes 2 minutes to connect.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
          >
            Start free →
          </Link>
        </div>

        {/* Related */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Related guides</p>
          <div className="space-y-3">
            <Link href="/blog/typeform-email-notification" className="block text-indigo-600 hover:underline text-sm">
              Typeform email notifications: complete setup guide →
            </Link>
            <Link href="/blog/typeform-email-to-respondent" className="block text-indigo-600 hover:underline text-sm">
              How to send email to the Typeform respondent →
            </Link>
            <Link href="/blog/typeform-auto-reply" className="block text-indigo-600 hover:underline text-sm">
              Typeform auto-reply: what&rsquo;s possible and what isn&rsquo;t →
            </Link>
            <Link href="/blog/typeform-automate-responses" className="block text-indigo-600 hover:underline text-sm">
              How to automate Typeform responses →
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-bold text-gray-900">FormReply</Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-600">Blog</Link>
            <Link href="/vs/zapier" className="text-sm text-gray-400 hover:text-gray-600">vs Zapier</Link>
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600">Support</Link>
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600">Privacy & Terms</Link>
            <p className="text-sm text-gray-400">© 2026 FormReply</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
