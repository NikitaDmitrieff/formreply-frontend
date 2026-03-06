import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — FormReply",
  description: "Get help with FormReply. Learn how to connect your Typeform, understand how draft replies work, and reach us directly.",
};

const faqs = [
  {
    q: "How do I connect my Typeform?",
    a: "You get a unique webhook URL when you sign up. Copy it, then go to your Typeform form, click Connect → Webhooks, paste the URL, and save. That's it. The next form submission will trigger a draft reply to your inbox.",
  },
  {
    q: "What happens after I connect my form?",
    a: "Every time someone fills out your form, FormReply reads the submission, drafts a reply in your voice, and emails it to you — usually within about 10 seconds. You review the draft, tweak anything if needed, and send it yourself.",
  },
  {
    q: "How does the AI know my tone?",
    a: "During onboarding you write a short description of your business and pick a tone (professional, friendly, or casual). FormReply uses that for every draft it writes. You can update it anytime by emailing us.",
  },
  {
    q: "Does FormReply send replies automatically?",
    a: "No — never. FormReply only ever sends you a draft. You're always in the loop before anything goes out. We don't have access to your email account at all.",
  },
  {
    q: "How do I cancel?",
    a: "Email support@formreply.io and we'll cancel your subscription immediately. No forms, no runaround.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-indigo-600 tracking-tight">
            <Image src="/logo.png" alt="FormReply" width={28} height={28} />
            <span>FormReply</span>
          </Link>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Get started
          </Link>
        </div>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Support</h1>
        <p className="text-gray-500 mb-2">
          Something not working? Question before you sign up? Just email us —
        </p>
        <a
          href="mailto:support@formreply.io"
          className="text-indigo-600 font-medium hover:underline"
        >
          support@formreply.io
        </a>

        <hr className="my-12 border-gray-100" />

        {/* How to connect */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to connect your Typeform
          </h2>
          <ol className="space-y-4">
            {[
              <>
                Sign up at{" "}
                <a
                  href="https://formreply.app/onboarding"
                  className="text-indigo-600 hover:underline"
                >
                  formreply.app/onboarding
                </a>
                . You'll get a unique webhook URL.
              </>,
              "Copy your unique webhook URL from the success page.",
              "In Typeform, open your form and go to Connect → Webhooks.",
              "Paste the webhook URL into the field and click Save.",
              "Submit a test entry in your form — you should get a draft reply in your inbox within about 10 seconds.",
            ].map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-gray-700 pt-1 text-sm leading-relaxed">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            {faqs.map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-8">
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-12 border-gray-100" />

        {/* Contact */}
        <section className="text-center">
          <p className="text-gray-500 text-sm mb-3">Still stuck? We read every email.</p>
          <a
            href="mailto:support@formreply.io"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            Email support@formreply.io
          </a>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-indigo-600">
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/privacy-and-tos" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Privacy & Terms
            </Link>
            <p className="text-sm text-gray-400">© 2026 FormReply. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
