"use client";

interface OAuthSuccessBannerProps {
  connected: boolean;
  denied: boolean;
  error: boolean;
  partial: boolean;
  partialReason?: string;
}

export default function OAuthSuccessBanner({ connected, denied, error, partial, partialReason }: OAuthSuccessBannerProps) {
  if (!connected && !denied && !error && !partial) return null;

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-6 flex items-start gap-3">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-red-900 text-sm">Connection failed</p>
          <p className="text-red-700 text-sm mt-0.5">
            Something went wrong connecting to Typeform. Please try again, or use the manual webhook URL below.
          </p>
        </div>
      </div>
    );
  }

  if (partial) {
    const message = partialReason === "forms_fetch"
      ? "Typeform connected, but we couldn\u2019t fetch your forms to create webhooks automatically. Please add the webhook URL manually below."
      : "Typeform connected, but some webhooks couldn\u2019t be created. Check the manual webhook section below for any forms that weren\u2019t set up automatically.";

    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 flex items-start gap-3">
        <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-amber-900 text-sm">Partially connected</p>
          <p className="text-amber-700 text-sm mt-0.5">{message}</p>
        </div>
      </div>
    );
  }

  if (connected) {
    return (
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6 flex items-start gap-3">
        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-indigo-900 text-sm">Typeform connected!</p>
          <p className="text-indigo-700 text-sm mt-0.5">
            Webhooks have been created on all your Typeform forms automatically. FormReply is live.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 mb-6 flex items-start gap-3">
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-yellow-900 text-sm">Typeform authorization cancelled</p>
        <p className="text-yellow-700 text-sm mt-0.5">
          No problem — you can connect manually using the webhook URL below, or try again above.
        </p>
      </div>
    </div>
  );
}
