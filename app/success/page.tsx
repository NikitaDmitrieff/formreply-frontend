export const runtime = 'edge';

import { notFound } from "next/navigation";
import { getServiceClient } from "@/lib/supabase";
import CopyScript from "./CopyScript";
import TestSubmissionButton from "./TestSubmissionButton";
import OAuthSuccessBanner from "./OAuthSuccessBanner";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://formreply-backend-production.up.railway.app";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ customer_id?: string; oauth?: string }>;
}) {
  const { customer_id, oauth } = await searchParams;

  if (!customer_id) notFound();

  const supabase = getServiceClient();
  const { data: customer } = await supabase
    .from("formreply_customers")
    .select("*")
    .eq("id", customer_id)
    .single();

  if (!customer) notFound();

  const typeformUrl = `${BACKEND_URL}/webhook/typeform/${customer.webhook_token}`;
  const webflowUrl = `${BACKEND_URL}/webhook/webflow/${customer.webhook_token}`;
  const oauthStartUrl = `${BACKEND_URL}/oauth/typeform/start?customer_id=${customer_id}`;
  const oauthConnected = oauth === "done";
  const oauthDenied = oauth === "denied";

  return (
    <div className="min-h-screen bg-gray-50"><CopyScript />
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-2xl mx-auto">
          <span className="font-bold text-xl text-indigo-600">FormReply</span>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Success banner */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 flex items-start gap-4">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h2 className="font-bold text-green-900 text-lg">You&apos;re all set, {customer.business_name}!</h2>
            <p className="text-green-700 text-sm mt-1">
              Trial started! Your FormReply account is active. Now connect your form — it takes 60 seconds.
            </p>
          </div>
        </div>

        {/* OAuth success / denied banners (client component) */}
        <OAuthSuccessBanner connected={oauthConnected} denied={oauthDenied} />

        {/* Typeform OAuth connect */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-1">Connect Typeform automatically</h3>
          <p className="text-gray-500 text-sm mb-4">
            Click below to authorize FormReply on Typeform. We&apos;ll create the webhook on all your forms automatically — no copying URLs required.
          </p>
          <a
            href={oauthStartUrl}
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Connect with Typeform
          </a>
        </div>

        {/* Webhook URLs (manual fallback) */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-1">Or add the webhook manually</h3>
          <p className="text-gray-500 text-sm mb-6">
            If you prefer, copy the URL for your form tool and paste it into the webhook settings.
          </p>

          <WebhookField
            label="Typeform"
            url={typeformUrl}
            instructions="In Typeform: open your form → Connect tab → Webhooks → Add a webhook → paste this URL → Save. Takes 30 seconds."
          />
          <WebhookField label="Webflow" url={webflowUrl} instructions='Go to Site Settings → Integrations → Webhooks → Add webhook → choose "Form submission"' />
        </div>

        {/* Test your setup */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-1">Test your setup</h3>
          <p className="text-gray-500 text-sm mb-4">
            Send a sample submission through the full pipeline — an AI draft will arrive in your inbox within 15 seconds.
          </p>
          <TestSubmissionButton token={customer.webhook_token} email={customer.email} />
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">What happens next</h3>
          <ol className="space-y-3">
            {[
              "Someone submits your form",
              "FormReply receives the submission and runs spam filtering",
              `AI drafts a reply in your ${customer.tone} tone using your business context`,
              `You receive the draft at ${customer.email} within 15 seconds`,
              "Read, edit if needed, and send",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-5 h-5 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-semibold flex-shrink-0 text-xs mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Account summary */}
        <div className="bg-indigo-50 rounded-2xl p-6 text-sm">
          <h3 className="font-semibold text-indigo-900 mb-3">Your account</h3>
          <div className="space-y-2 text-indigo-700">
            <div className="flex justify-between">
              <span>Business</span>
              <span className="font-medium">{customer.business_name}</span>
            </div>
            <div className="flex justify-between">
              <span>Tone</span>
              <span className="font-medium capitalize">{customer.tone}</span>
            </div>
            <div className="flex justify-between">
              <span>Inbox</span>
              <span className="font-medium">{customer.email}</span>
            </div>
            <div className="flex justify-between">
              <span>Plan</span>
              <span className="font-medium">Starter — $19/month (14-day trial active)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebhookField({ label, url, instructions }: { label: string; url: string; instructions: string }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-semibold text-gray-700">{label} webhook URL</span>
      </div>
      <div className="flex gap-2">
        <code className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-700 break-all font-mono">
          {url}
        </code>
        <CopyButton text={url} />
      </div>
      <p className="text-xs text-gray-400 mt-1">{instructions}</p>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  return (
    <button
      data-copy={text}
      className="copy-btn flex-shrink-0 border border-gray-200 text-gray-600 text-xs px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium"
      type="button"
    >
      Copy
    </button>
  );
}
