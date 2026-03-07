"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "https://formreply-backend-production.up.railway.app";

type Account = {
  id: string;
  email: string;
  business_name: string;
  business_context: string;
  tone: "professional" | "friendly" | "casual";
  plan: "free" | "starter";
  created_at: string;
  webhook_token: string;
  webhook_last_pinged_at: string | null;
};

type Usage = {
  replies_this_month: number;
  limit: number | null;
  total_processed: number;
  total_spam: number;
};

type Submission = {
  id: string;
  submitter_name: string;
  submitter_email: string;
  message: string;
  form_name: string;
  platform: string;
  draft: string;
  status: string;
  spam_reason: string | null;
  created_at: string;
  email_opens: number;
};

type DashboardData = {
  account: Account;
  usage: Usage;
  submissions: Submission[];
};

export default function DashboardClient() {
  const searchParams = useSearchParams();
  const customerId = searchParams.get("customer_id");
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [editMode, setEditMode] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [editFields, setEditFields] = useState({
    business_name: "",
    business_context: "",
    tone: "professional" as string,
    email: "",
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);
  const [showWebhookUrl, setShowWebhookUrl] = useState(false);
  const [sendingReply, setSendingReply] = useState<string | null>(null);
  const [replyResult, setReplyResult] = useState<Record<string, string>>({});

  const fetchData = useCallback(async () => {
    if (!customerId) return;
    try {
      const res = await fetch(`${BACKEND_URL}/dashboard/${customerId}`);
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Failed to load dashboard");
      }
      const json = await res.json();
      setData(json);
      setLastRefreshed(new Date());
      setEditFields({
        business_name: json.account.business_name,
        business_context: json.account.business_context,
        tone: json.account.tone,
        email: json.account.email,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [customerId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    if (!customerId) return;
    const interval = setInterval(() => {
      fetchData();
    }, 30000);
    return () => clearInterval(interval);
  }, [customerId, fetchData]);

  async function handleSave() {
    if (!customerId) return;
    setSaving(true);
    setSaveMsg("");
    try {
      const res = await fetch(`${BACKEND_URL}/dashboard/${customerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editFields),
      });
      if (!res.ok) throw new Error("Save failed");
      setSaveMsg("Settings saved!");
      setEditMode(false);
      await fetchData();
    } catch {
      setSaveMsg("Failed to save. Try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleEmailLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!loginEmail.trim()) return;
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await fetch(
        `${BACKEND_URL}/dashboard/lookup-by-email?email=${encodeURIComponent(loginEmail.trim())}`
      );
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Account not found");
      window.location.href = `/dashboard?customer_id=${json.customer_id}`;
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Something went wrong");
      setLoginLoading(false);
    }
  }

  async function handleSendReply(submissionId: string) {
    if (!customerId) return;
    setSendingReply(submissionId);
    setReplyResult((prev) => ({ ...prev, [submissionId]: "" }));
    try {
      const res = await fetch(
        `${BACKEND_URL}/dashboard/${customerId}/reply/${submissionId}`,
        { method: "POST" }
      );
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send reply");
      setReplyResult((prev) => ({ ...prev, [submissionId]: "sent" }));
      await fetchData();
    } catch (err) {
      setReplyResult((prev) => ({
        ...prev,
        [submissionId]: err instanceof Error ? err.message : "Failed",
      }));
    } finally {
      setSendingReply(null);
    }
  }

  if (!customerId) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">
            Welcome back
          </h1>
          <p className="text-gray-500 mb-6">
            Enter the email you signed up with to access your dashboard.
          </p>
          <form onSubmit={handleEmailLogin} className="space-y-3">
            <input
              type="email"
              placeholder="you@yourcompany.com"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              autoFocus
              required
            />
            {loginError && (
              <p className="text-sm text-red-600">{loginError}</p>
            )}
            <button
              type="submit"
              disabled={loginLoading || !loginEmail.trim()}
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              {loginLoading ? "Looking up..." : "Access dashboard"}
            </button>
          </form>
          <p className="text-xs text-gray-400 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/onboarding" className="text-indigo-600 font-medium hover:text-indigo-800">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex items-center gap-3 text-gray-500">
          <svg
            className="animate-spin h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
          Loading dashboard...
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">
            Could not load dashboard
          </h1>
          <p className="text-gray-500">{error}</p>
        </div>
      </div>
    );
  }

  const { account, usage, submissions } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl text-indigo-600 flex items-center gap-2"
          >
            FormReply
          </Link>
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="text-sm text-gray-400 hidden sm:inline truncate max-w-[200px]">
              {account.email}
            </span>
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${
                account.plan === "starter"
                  ? "bg-indigo-100 text-indigo-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {account.plan === "starter" ? "Starter" : "Free"}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Welcome + refresh indicator */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Hi, {account.business_name}
            </h1>
            <p className="text-gray-500 text-sm">
              Your FormReply dashboard — view submissions, usage, and settings.
            </p>
          </div>
          {lastRefreshed && (
            <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1.5 flex-shrink-0">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Live &middot; updated {formatDate(lastRefreshed.toISOString())}
            </div>
          )}
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Replies this month"
            value={usage.replies_this_month}
            sub={usage.limit !== null ? `of ${usage.limit}` : "unlimited"}
          />
          <StatCard label="Total processed" value={usage.total_processed} />
          <StatCard label="Spam blocked" value={usage.total_spam} />
          <StatCard
            label="Webhook status"
            value={account.webhook_last_pinged_at ? "Active" : "Waiting"}
            sub={account.webhook_last_pinged_at ? formatDate(account.webhook_last_pinged_at) : "no pings yet"}
            isText
            color={account.webhook_last_pinged_at ? "green" : "yellow"}
          />
        </div>

        {/* Usage bar (free plan only) */}
        {account.plan === "free" && usage.limit !== null && (
          <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Monthly usage
              </span>
              <span className="text-sm text-gray-500">
                {usage.replies_this_month} / {usage.limit} replies
              </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2.5">
              <div
                className={`h-2.5 rounded-full transition-all ${
                  usage.replies_this_month >= usage.limit
                    ? "bg-red-500"
                    : usage.replies_this_month >= usage.limit * 0.8
                      ? "bg-yellow-500"
                      : "bg-indigo-600"
                }`}
                style={{
                  width: `${Math.min(100, (usage.replies_this_month / usage.limit) * 100)}%`,
                }}
              />
            </div>
            {usage.replies_this_month >= usage.limit && (
              <p className="text-sm text-red-600 mt-2">
                Free tier limit reached.{" "}
                <a
                  href={`/api/checkout?customer_id=${account.id}`}
                  className="font-semibold underline"
                >
                  Upgrade to Starter
                </a>{" "}
                for unlimited replies.
              </p>
            )}
          </div>
        )}

        {/* Webhook URL quick-access */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
          <button
            type="button"
            onClick={() => setShowWebhookUrl(!showWebhookUrl)}
            className="w-full flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-sm font-medium text-gray-900">Your Webhook URL</span>
            </div>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform ${showWebhookUrl ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <AnimatedExpand open={showWebhookUrl}>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <code className="flex-1 text-xs bg-gray-50 rounded-lg px-3 py-2.5 font-mono text-gray-700 truncate">
                  {BACKEND_URL}/webhook/{account.webhook_token}
                </code>
                <CopyButton text={`${BACKEND_URL}/webhook/${account.webhook_token}`} />
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Point your form&apos;s webhook to this URL. <Link href={`/success?customer_id=${account.id}`} className="text-indigo-600 hover:text-indigo-800">Setup guide &rarr;</Link>
              </p>
            </div>
          </AnimatedExpand>
        </div>

        {/* Recent submissions */}
        {(() => {
          const q = searchQuery.toLowerCase();
          const filtered = submissions.filter((sub) => {
            if (statusFilter !== "all" && sub.status !== statusFilter) return false;
            if (q) {
              return (
                sub.submitter_name.toLowerCase().includes(q) ||
                sub.submitter_email.toLowerCase().includes(q) ||
                sub.message.toLowerCase().includes(q) ||
                sub.form_name.toLowerCase().includes(q)
              );
            }
            return true;
          });
          const now24h = Date.now() - 24 * 60 * 60 * 1000;

          return (
        <div className="bg-white rounded-2xl border border-gray-200 mb-6">
          <div className="px-5 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-bold text-gray-900">Recent submissions</h2>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400">
                  {filtered.length === submissions.length
                    ? `${submissions.length} shown`
                    : `${filtered.length} of ${submissions.length}`}
                </span>
                <button
                  onClick={() => {
                    window.location.href = `${BACKEND_URL}/dashboard/${customerId}/export`;
                  }}
                  className="text-xs text-indigo-600 font-medium hover:text-indigo-800 transition-colors flex items-center gap-1"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export CSV
                </button>
              </div>
            </div>
            {submissions.length > 0 && (
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search by name, email, or message..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="text-sm border border-gray-200 rounded-xl px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="all">All</option>
                  <option value="processed">Processed</option>
                  <option value="replied">Replied</option>
                  <option value="spam">Spam</option>
                </select>
              </div>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="px-5 py-12 text-center">
              {submissions.length === 0 ? (
                <>
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-semibold text-sm mb-1">No submissions yet</p>
                  <p className="text-gray-500 text-xs mb-4 max-w-xs mx-auto">
                    Connect a form provider and send a test submission to see your AI-drafted replies here.
                  </p>
                  <Link
                    href={`/success?customer_id=${account.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Connect your first form
                  </Link>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 text-sm">No matching submissions</p>
                  <p className="text-gray-400 text-xs mt-1">Try a different search term or filter.</p>
                </>
              )}
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {filtered.map((sub) => {
                const isNew = new Date(sub.created_at).getTime() > now24h;
                return (
                <div key={sub.id} className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedId(expandedId === sub.id ? null : sub.id)
                    }
                    className="w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-medium text-gray-900 text-sm truncate">
                            {sub.submitter_name}
                          </span>
                          {isNew && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded animate-pulse">
                              New
                            </span>
                          )}
                          <StatusBadge status={sub.status} />
                          {sub.status === "replied" && sub.email_opens > 0 && (
                            <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-emerald-100 text-emerald-700 rounded flex items-center gap-0.5" title={`Opened ${sub.email_opens} time${sub.email_opens !== 1 ? "s" : ""}`}>
                              <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {sub.email_opens}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400 truncate">
                          {sub.submitter_email} &middot; {sub.form_name} &middot;{" "}
                          {sub.platform}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-400">
                          {formatDate(sub.created_at)}
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-400 transition-transform ${expandedId === sub.id ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  <AnimatedExpand open={expandedId === sub.id}>
                    <div className="mt-3 space-y-3">
                      {/* Message */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <p className="text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                          Message
                        </p>
                        <p className="text-sm text-gray-700 whitespace-pre-wrap">
                          {sub.message || "(no message)"}
                        </p>
                      </div>

                      {/* AI Draft */}
                      {sub.draft && (
                        <div className="bg-indigo-50 rounded-xl p-4">
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">
                              AI Draft Reply
                            </p>
                            <div className="flex items-center gap-2">
                              {sub.submitter_email && (
                                <a
                                  href={`mailto:${encodeURIComponent(sub.submitter_email)}?subject=${encodeURIComponent(`Re: ${sub.form_name}`)}&body=${encodeURIComponent(sub.draft)}`}
                                  className="flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700 transition-colors font-medium"
                                  title="Reply via email"
                                >
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                  </svg>
                                  Reply
                                </a>
                              )}
                              {sub.submitter_email && sub.status !== "replied" && sub.status !== "spam" && (
                                <button
                                  onClick={() => handleSendReply(sub.id)}
                                  disabled={sendingReply === sub.id}
                                  className="flex items-center gap-1 text-xs text-white bg-indigo-600 hover:bg-indigo-700 transition-colors font-medium px-2.5 py-1 rounded-md disabled:opacity-50"
                                  title="Send this draft reply directly to the submitter"
                                >
                                  {sendingReply === sub.id ? (
                                    <>
                                      <svg className="animate-spin w-3 h-3" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                      </svg>
                                      Sending...
                                    </>
                                  ) : replyResult[sub.id] === "sent" ? (
                                    <>
                                      <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      <span className="text-green-100">Sent!</span>
                                    </>
                                  ) : (
                                    <>
                                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                      </svg>
                                      Send Reply
                                    </>
                                  )}
                                </button>
                              )}
                              <CopyButton text={sub.draft} />
                            </div>
                          </div>
                          <p className="text-sm text-gray-800 whitespace-pre-wrap">
                            {sub.draft}
                          </p>
                          {replyResult[sub.id] && replyResult[sub.id] !== "sent" && (
                            <p className="text-xs text-red-500 mt-1">{replyResult[sub.id]}</p>
                          )}
                        </div>
                      )}

                      {/* Spam reason */}
                      {sub.spam_reason && (
                        <div className="bg-red-50 rounded-xl p-3">
                          <p className="text-xs text-red-600">
                            Spam reason: {sub.spam_reason}
                          </p>
                        </div>
                      )}
                    </div>
                  </AnimatedExpand>
                </div>
              );})}
            </div>
          )}
        </div>
          );
        })()}

        {/* Settings */}
        <div className="bg-white rounded-2xl border border-gray-200 p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900">Settings</h2>
            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="text-sm text-indigo-600 font-medium hover:text-indigo-800"
              >
                Edit
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setEditMode(false);
                    setEditFields({
                      business_name: account.business_name,
                      business_context: account.business_context,
                      tone: account.tone,
                      email: account.email,
                    });
                  }}
                  className="text-sm text-gray-500 font-medium hover:text-gray-700"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="text-sm bg-indigo-600 text-white px-4 py-1.5 rounded-lg font-medium hover:bg-indigo-700 disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            )}
          </div>

          {saveMsg && (
            <p
              className={`text-sm mb-3 ${saveMsg.includes("saved") ? "text-green-600" : "text-red-600"}`}
            >
              {saveMsg}
            </p>
          )}

          {editMode ? (
            <div className="space-y-4">
              <SettingsField label="Business name">
                <input
                  type="text"
                  value={editFields.business_name}
                  onChange={(e) =>
                    setEditFields((f) => ({
                      ...f,
                      business_name: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </SettingsField>
              <SettingsField label="Business context">
                <textarea
                  value={editFields.business_context}
                  onChange={(e) =>
                    setEditFields((f) => ({
                      ...f,
                      business_context: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                />
              </SettingsField>
              <SettingsField label="Reply tone">
                <select
                  value={editFields.tone}
                  onChange={(e) =>
                    setEditFields((f) => ({ ...f, tone: e.target.value }))
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                >
                  <option value="professional">Professional</option>
                  <option value="friendly">Friendly</option>
                  <option value="casual">Casual</option>
                </select>
              </SettingsField>
              <SettingsField label="Delivery email">
                <input
                  type="email"
                  value={editFields.email}
                  onChange={(e) =>
                    setEditFields((f) => ({ ...f, email: e.target.value }))
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </SettingsField>
            </div>
          ) : (
            <div className="space-y-3">
              <SettingsRow label="Business name" value={account.business_name} />
              <SettingsRow
                label="Business context"
                value={
                  account.business_context.length > 100
                    ? account.business_context.slice(0, 100) + "..."
                    : account.business_context
                }
              />
              <SettingsRow label="Reply tone" value={account.tone} />
              <SettingsRow label="Delivery email" value={account.email} />
              <SettingsRow label="Plan" value={account.plan === "free" ? "Free (5/month)" : "Starter ($19/month)"} />
              <SettingsRow
                label="Webhook token"
                value={`${account.webhook_token.slice(0, 8)}...${account.webhook_token.slice(-4)}`}
                mono
              />
            </div>
          )}
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href={`/success?customer_id=${account.id}`}
            className="bg-white rounded-2xl border border-gray-200 p-5 hover:border-indigo-300 transition-colors group"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-indigo-600">
              Setup & Webhooks
            </h3>
            <p className="text-xs text-gray-500">
              View webhook URLs, connect forms, run test submissions.
            </p>
          </Link>
          {account.plan === "free" && (
            <a
              href={`/api/checkout?customer_id=${account.id}`}
              className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-5 hover:border-indigo-400 transition-colors group"
            >
              <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-indigo-600">
                Upgrade to Starter
              </h3>
              <p className="text-xs text-gray-500">
                Unlimited replies, priority support. $19/month with 14-day
                trial.
              </p>
            </a>
          )}
        </div>

        {/* Share / Referral */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-5 mb-8">
          <h3 className="font-semibold text-gray-900 text-sm mb-1">Share FormReply</h3>
          <p className="text-xs text-gray-500 mb-3">Know someone who gets swamped with form submissions? Share your referral link.</p>
          <div className="flex items-center gap-2">
            <code className="flex-1 text-xs bg-white/70 rounded-lg px-3 py-2.5 font-mono text-gray-700 truncate border border-indigo-100">
              https://formreply.app?ref={account.id.slice(0, 8)}
            </code>
            <CopyButton text={`https://formreply.app?ref=${account.id.slice(0, 8)}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimatedExpand({ open, children }: { open: boolean; children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div
      className="overflow-hidden transition-[height,opacity] duration-250 ease-in-out"
      style={{ height, opacity: open ? 1 : 0 }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
}

function useCountUp(target: number, duration = 600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (target === 0) { setValue(0); return; }
    const start = performance.now();
    let raf: number;
    function step(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    }
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

function StatCard({
  label,
  value,
  sub,
  isText,
  color,
}: {
  label: string;
  value: number | string;
  sub?: string;
  isText?: boolean;
  color?: "green" | "yellow";
}) {
  const animatedValue = useCountUp(typeof value === "number" ? value : 0);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4">
      <p className="text-xs text-gray-500 mb-1">{label}</p>
      <div className="flex items-baseline gap-1.5">
        {isText ? (
          <span
            className={`text-sm font-bold ${
              color === "green"
                ? "text-green-600"
                : color === "yellow"
                  ? "text-yellow-600"
                  : "text-gray-900"
            }`}
          >
            {value}
          </span>
        ) : (
          <span className="text-2xl font-bold text-gray-900">{animatedValue}</span>
        )}
        {sub && <span className="text-xs text-gray-400">{sub}</span>}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "processed") {
    return (
      <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-green-100 text-green-700 rounded">
        Processed
      </span>
    );
  }
  if (status === "replied") {
    return (
      <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded">
        Replied
      </span>
    );
  }
  if (status === "spam") {
    return (
      <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-red-100 text-red-700 rounded">
        Spam
      </span>
    );
  }
  return (
    <span className="text-[10px] font-semibold px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">
      {status}
    </span>
  );
}

function SettingsField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-gray-500 mb-1 block">
        {label}
      </label>
      {children}
    </div>
  );
}

function SettingsRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex justify-between items-start py-1">
      <span className="text-sm text-gray-500">{label}</span>
      <span
        className={`text-sm text-gray-900 font-medium text-right max-w-[60%] ${mono ? "font-mono text-xs bg-gray-100 px-2 py-0.5 rounded" : "capitalize"}`}
      >
        {value}
      </span>
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1 text-xs text-indigo-500 hover:text-indigo-700 transition-colors font-medium"
      title="Copy draft to clipboard"
    >
      {copied ? (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
