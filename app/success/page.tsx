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
          <a
            href="https://formreply.app"
            className="text-sm text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to formreply.app
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Setup Progress Stepper */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {/* Step 1: Account created -- always completed */}
            <div className="flex flex-col items-center flex-1">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-green-700 mt-2">Account created</span>
            </div>

            {/* Connector 1-2 */}
            <div className={`h-0.5 flex-1 -mt-5 mx-1 rounded ${oauthConnected ? "bg-green-400" : "bg-indigo-300"}`} />

            {/* Step 2: Connect your form */}
            <div className="flex flex-col items-center flex-1">
              {oauthConnected ? (
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              ) : (
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-sm shadow-indigo-200 animate-pulse">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
              )}
              <span className={`text-xs font-semibold mt-2 ${oauthConnected ? "text-green-700" : "text-indigo-700"}`}>
                Connect your form
              </span>
            </div>

            {/* Connector 2-3 */}
            <div className={`h-0.5 flex-1 -mt-5 mx-1 rounded ${oauthConnected ? "bg-indigo-300" : "bg-gray-200"}`} />

            {/* Step 3: Send a test */}
            <div className="flex flex-col items-center flex-1">
              {oauthConnected ? (
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center shadow-sm shadow-indigo-200 animate-pulse">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
              ) : (
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-sm">3</span>
                </div>
              )}
              <span className={`text-xs font-semibold mt-2 ${oauthConnected ? "text-indigo-700" : "text-gray-400"}`}>
                Send a test
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
              Trial started! Your FormReply account is active. Now connect your form — it takes 60 seconds.
            </p>
          </div>
        </div>

        {/* OAuth success / denied banners (client component) */}
        <OAuthSuccessBanner status={oauthStatus} reason={reason} provider={oauthProvider} />

        {/* Section 1: Connect Typeform OAuth -- Primary action */}
        <div className="bg-white rounded-2xl border-2 border-indigo-200 p-6 mb-6 shadow-sm shadow-indigo-50">
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              1
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 text-lg">Connect Typeform automatically</h3>
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
                  Recommended
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                Click below to authorize FormReply on Typeform. We&apos;ll create the webhook on all your forms automatically — no copying URLs required.
              </p>
              <a
                href={oauthStartUrl}
                className="inline-flex items-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-sm shadow-indigo-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Connect with Typeform
              </a>
            </div>
          </div>
        </div>

        {/* Section 1b: Connect Google Forms OAuth */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6 opacity-75">
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              1
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-gray-900 text-lg">Connect Google Forms automatically</h3>
                <span className="text-xs font-semibold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  Coming soon
                </span>
              </div>
              <p className="text-gray-500 text-sm mb-5">
                One-click OAuth for Google Forms is almost ready. In the meantime, you can use the manual webhook method below.
              </p>
              <span
                className="inline-flex items-center gap-2.5 bg-gray-300 text-white font-semibold px-6 py-3 rounded-xl text-sm cursor-not-allowed"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Connect with Google Forms
              </span>
            </div>
          </div>
        </div>

        {/* Section 2: Manual webhook -- Secondary / collapsible */}
        <details className="bg-white rounded-2xl border border-gray-200 mb-6 group">
          <summary className="p-6 cursor-pointer list-none flex items-start gap-4">
            <span className="w-7 h-7 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              2
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

        {/* Section 3: Test your setup */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-4">
            <span className="w-7 h-7 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-0.5">
              3
            </span>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">Test your setup</h3>
              <p className="text-gray-500 text-sm mb-4">
                Send a sample submission through the full pipeline — an AI draft will arrive in your inbox within 15 seconds.
              </p>
              <TestSubmissionButton token={customer.webhook_token} email={customer.email} />
            </div>
          </div>
        </div>

        {/* What happens next -- with icons */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-5">What happens next</h3>
          <ol className="space-y-4">
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              Someone submits your form
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </span>
              FormReply receives the submission and runs spam filtering
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </span>
              AI drafts a reply in your {customer.tone} tone using your business context
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              You receive the draft at {customer.email} within 15 seconds
            </li>
            <li className="flex items-start gap-3 text-sm text-gray-600">
              <span className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Read, edit if needed, and send
            </li>
          </ol>
        </div>

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
