export const runtime = 'edge';

import { notFound } from "next/navigation";
import { getServiceClient } from "@/lib/supabase";
import CopyScript from "./CopyScript";
import TestSubmissionButton from "./TestSubmissionButton";
import OAuthSuccessBanner from "./OAuthSuccessBanner";
import ProviderTabs from "./ProviderTabs";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://formreply-backend-production.up.railway.app";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ customer_id?: string; oauth?: string; reason?: string; provider?: string }>;
}) {
  const { customer_id, oauth, reason, provider } = await searchParams;

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
  const googleFormsUrl = `${BACKEND_URL}/webhook/google-forms/${customer.webhook_token}`;
  const jotformUrl = `${BACKEND_URL}/webhook/jotform/${customer.webhook_token}`;
  const tallyUrl = `${BACKEND_URL}/webhook/tally/${customer.webhook_token}`;
  const oauthStartUrl = `${BACKEND_URL}/oauth/typeform/start?customer_id=${customer_id}`;
  const googleOauthStartUrl = `${BACKEND_URL}/oauth/google/start?customer_id=${customer_id}`;
  const oauthStatus = (oauth === "done" || oauth === "partial" || oauth === "denied" || oauth === "error") ? oauth : null;
  const oauthProvider = provider === "google" ? "google" : "typeform";
  const oauthConnected = oauth === "done";

  const truncatedToken = customer.webhook_token
    ? `${customer.webhook_token.slice(0, 8)}...${customer.webhook_token.slice(-4)}`
    : "";

  return (
    <div className="min-h-screen bg-gray-50"><CopyScript />
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="font-bold text-xl text-indigo-600">FormReply</span>
          <div className="flex items-center gap-4">
            <a
              href={`/dashboard?customer_id=${customer_id}`}
              className="text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
            >
              Dashboard
            </a>
            <a
              href="https://formreply.app"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Home
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Setup Progress Stepper -- matches the 2-step flow below */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {/* Step 1: Connect your form */}
            <div className="flex flex-col items-center flex-1">
              {oauthConnected ? (
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-sm shadow-indigo-200 animate-pulse">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
              )}
              <span className={`text-xs font-semibold mt-2 ${oauthConnected ? "text-green-700" : "text-indigo-700"}`}>
                Connect form
              </span>
            </div>

            {/* Connector */}
            <div className={`h-0.5 flex-1 -mt-5 mx-1 rounded ${oauthConnected ? "bg-green-400" : "bg-gray-200"}`} />

            {/* Step 2: Test it */}
            <div className="flex flex-col items-center flex-1">
              {oauthConnected ? (
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-sm shadow-indigo-200 animate-pulse">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              ) : (
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">2</span>
                </div>
              )}
              <span className={`text-xs font-semibold mt-2 ${oauthConnected ? "text-indigo-700" : "text-gray-400"}`}>
                Test it
              </span>
            </div>
          </div>
        </div>

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
              Your account is active. Follow the two steps below to start receiving AI-drafted replies.
            </p>
            <p className="text-green-600 text-xs mt-2 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Takes about 60 seconds to complete
            </p>
          </div>
        </div>

        {/* OAuth success / denied banners (client component) */}
        <OAuthSuccessBanner status={oauthStatus} reason={reason} provider={oauthProvider} />

        {/* Step 1: Choose your form provider */}
        <div className="bg-white rounded-2xl border-2 border-indigo-200 p-6 mb-6 shadow-sm shadow-indigo-50">
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              1
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Connect your form provider</h3>
              <ProviderTabs
                oauthStartUrl={oauthStartUrl}
                googleOauthStartUrl={googleOauthStartUrl}
                typeformUrl={typeformUrl}
                webflowUrl={webflowUrl}
                googleFormsUrl={googleFormsUrl}
                jotformUrl={jotformUrl}
                tallyUrl={tallyUrl}
              />
            </div>
          </div>
        </div>

        {/* Manual webhook -- Secondary / collapsible */}
        <details className="bg-white rounded-2xl border border-gray-200 mb-6 group">
          <summary className="p-6 cursor-pointer list-none flex items-start gap-4">
            <span className="w-7 h-7 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </span>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-500 text-base">Or add the webhook manually</h3>
                <svg className="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm mt-1">
                If you prefer, copy the URL for your form tool and paste it into the webhook settings.
              </p>
            </div>
          </summary>
          <div className="px-6 pb-6 pt-0 ml-11">
            <WebhookField
              label="Typeform"
              url={typeformUrl}
              instructions="In Typeform: open your form -> Connect tab -> Webhooks -> Add a webhook -> paste this URL -> Save. Takes 30 seconds."
            />
            <WebhookField label="Webflow" url={webflowUrl} instructions='Go to Site Settings -> Integrations -> Webhooks -> Add webhook -> choose "Form submission"' />
            <WebhookField label="Google Forms" url={googleFormsUrl} instructions="Open your Google Form -> three-dot menu -> Script editor -> paste the Apps Script below -> Save -> set up a trigger for form submissions." />
            <WebhookField label="Jotform" url={jotformUrl} instructions="In Jotform: open your form -> Settings -> Integrations -> search for Webhooks -> paste this URL -> Complete Integration." />
            <WebhookField label="Tally" url={tallyUrl} instructions="In Tally: open your form -> Integrations tab -> Connect Webhooks -> paste this endpoint URL -> Connect." />
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-2">
              <p className="text-xs font-semibold text-gray-600 mb-2">Google Forms Apps Script (copy and paste into Script editor):</p>
              <pre className="text-xs text-gray-700 font-mono whitespace-pre-wrap break-all bg-white border border-gray-100 rounded p-3">{`function onFormSubmit(e) {
  var responses = {};
  var items = e.source.getItems();
  for (var i = 0; i < e.response.getItemResponses().length; i++) {
    var item = e.response.getItemResponses()[i];
    responses[item.getItem().getTitle()] = item.getResponse();
  }
  UrlFetchApp.fetch("${googleFormsUrl}", {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({
      formTitle: e.source.getTitle(),
      responses: responses
    })
  });
}`}</pre>
              <p className="text-xs text-gray-400 mt-2">After pasting, go to Triggers (clock icon) and add a trigger: onFormSubmit, from form, on form submit.</p>
            </div>
          </div>
        </details>

        {/* Step 2: Test your setup */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              2
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Test your setup</h3>
              <p className="text-gray-500 text-sm mb-4">
                Send a sample submission through the full pipeline — an AI-drafted reply will arrive at <span className="font-medium text-gray-700">{customer.email}</span> within 15 seconds.
              </p>
              <TestSubmissionButton token={customer.webhook_token} email={customer.email} />
            </div>
          </div>
        </div>

        {/* How it works -- compact pipeline visualization */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4">How FormReply works</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-0">
            <PipelineStep icon="form" label="Form submitted" />
            <PipelineArrow />
            <PipelineStep icon="filter" label="Spam filtered" />
            <PipelineArrow />
            <PipelineStep icon="ai" label={`AI drafts reply (${customer.tone} tone)`} />
            <PipelineArrow />
            <PipelineStep icon="email" label="Draft in your inbox" />
          </div>
          <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
            Average response time: ~10 seconds from submission to your inbox.
          </p>
        </div>

        {/* Upgrade nudge for free users */}
        {customer.plan === "free" && (
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Need more than 5 replies/month?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Upgrade to Starter for unlimited replies, priority support, and custom tone settings. 14-day free trial included.
                </p>
                <a
                  href={`/api/checkout?customer_id=${customer_id}`}
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                >
                  Upgrade to Starter — $19/month
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Account summary -- improved */}
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
              <span>Webhook token</span>
              <span className="font-mono font-medium text-xs bg-indigo-100 px-2 py-0.5 rounded">{truncatedToken}</span>
            </div>
            <div className="flex justify-between">
              <span>Plan</span>
              <span className="font-medium">{customer.plan === "free" ? "Free — 5 replies/month" : "Starter — $19/month (14-day trial active)"}</span>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-indigo-200/60 flex items-center gap-2 text-xs text-indigo-500">
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            Bookmark this page — you may need to return for webhook URLs or to run another test.
          </div>
        </div>

        {/* Need help? */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mt-6 text-center">
          <h3 className="font-semibold text-gray-900 mb-2">Need help?</h3>
          <p className="text-sm text-gray-500 mb-3">
            Having trouble connecting your form or not receiving test emails? We&apos;re here to help.
          </p>
          <a
            href="/support"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Visit our support page
          </a>
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

function PipelineStep({ icon, label }: { icon: "form" | "filter" | "ai" | "email"; label: string }) {
  const icons = {
    form: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    filter: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />,
    ai: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
    email: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  };
  return (
    <div className="flex items-center gap-2 flex-1 min-w-0">
      <span className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
        <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">{icons[icon]}</svg>
      </span>
      <span className="text-xs text-gray-600 leading-tight">{label}</span>
    </div>
  );
}

function PipelineArrow() {
  return (
    <svg className="w-4 h-4 text-gray-300 flex-shrink-0 mx-1 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
