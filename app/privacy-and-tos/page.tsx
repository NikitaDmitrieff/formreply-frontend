import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Terms — FormReply",
  description: "FormReply privacy policy and terms of service. Plain language, no legalese.",
};

export default function PrivacyAndTosPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy & Terms</h1>
        <p className="text-gray-500 mb-2">Last updated: March 2026</p>
        <p className="text-gray-500 mb-10">
          We wrote this in plain English on purpose. If something's unclear, just email us at{" "}
          <a href="mailto:support@formreply.io" className="text-indigo-600 hover:underline">
            support@formreply.io
          </a>
          .
        </p>

        <hr className="my-10 border-gray-100" />

        {/* Privacy Policy */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Privacy Policy</h2>

          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What we collect</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                When you sign up, we store your email address and the business description you write during onboarding (your tone, what your business does). That's what the AI uses to write drafts in your voice.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                When your Typeform receives a submission and routes it to us via webhook, we see the form responses — whatever your visitors typed into your form. We use that to generate a reply draft and then email it to you.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Payment is handled entirely by Stripe. We never see or store your card details.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">How we use it</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Your data is used for one thing: generating draft replies and sending them to you. We don't sell it, share it with third parties, or use it to train AI models.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We use OpenAI to generate drafts. Form submissions are sent to OpenAI's API as part of this process — subject to{" "}
                <a
                  href="https://openai.com/policies/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  OpenAI's privacy policy
                </a>
                . We don't send more than what's needed to write the draft.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Where it's stored</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Your data lives in Supabase (Postgres). If you're in the EU and this matters to you, email us — we can discuss data residency options. We take reasonable steps to keep your data secure and don't retain form submission content longer than needed to generate the draft.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Your rights (GDPR and otherwise)</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                You can ask us to delete your account and all associated data at any time. Just email{" "}
                <a href="mailto:support@formreply.io" className="text-indigo-600 hover:underline">
                  support@formreply.io
                </a>{" "}
                and we'll handle it within a few days. If you're in the EU, you have the right to access, correct, or export your data too — same email.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Cookies</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We use minimal cookies — basically just what's needed to keep you logged in. No ad tracking, no cross-site surveillance.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-100" />

        {/* Terms of Service */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Terms of Service</h2>

          <div className="space-y-8">
            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What FormReply is</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                FormReply is a tool that watches your Typeform webhook and generates draft email replies for you to review before sending. We draft, you decide. We never send anything on your behalf.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">What you're responsible for</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                You're responsible for what you actually send to your customers. FormReply gives you a starting point — you review it, and you hit send. If you use a draft without reading it and it causes a problem, that's on you.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                You're also responsible for making sure you have the right to route your users' form submissions through our service. If your form collects sensitive personal data, think about whether that's appropriate before setting up the webhook.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Limitation of liability</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                FormReply is provided as-is. We're a small operation and we can't guarantee uptime, accuracy of AI drafts, or that the service will always work exactly as expected. We're not liable for any losses arising from use of the service — whether that's a missed inquiry, a bad AI draft, or downtime. Our total liability to you is capped at what you've paid us in the last 3 months.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Cancellation & refunds</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                You can cancel anytime by emailing{" "}
                <a href="mailto:support@formreply.io" className="text-indigo-600 hover:underline">
                  support@formreply.io
                </a>
                . We'll cancel your subscription immediately — no forms, no waiting period.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                We don't offer automatic refunds, but if something broke and you were charged for a period where the service wasn't working, email us and we'll make it right. We're not going to fight you over $9.
              </p>
            </div>

            <div className="border-b border-gray-100 pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Account termination</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We can terminate accounts that are being used to send spam, process data without consent, or anything else that's clearly not in the spirit of what FormReply is for. We'd tell you first unless it's seriously harmful.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Changes to these terms</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                If we make significant changes, we'll email you. Continuing to use FormReply after that counts as acceptance. We won't make changes that are designed to surprise you — if you're a customer, we treat you like a person.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-100" />

        <section className="text-center">
          <p className="text-gray-500 text-sm mb-3">Questions about any of this?</p>
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
            <Link href="/support" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Support
            </Link>
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
