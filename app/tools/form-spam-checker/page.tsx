"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Spam-checking logic                                                */
/* ------------------------------------------------------------------ */

interface CheckResult {
  label: string;
  points: number;
  detail: string;
}

const SPAM_KEYWORDS = [
  "buy now",
  "free money",
  "act now",
  "click here",
  "limited offer",
  "earn extra",
  "100% free",
  "winner",
  "congratulations",
  "you have been selected",
  "no obligation",
  "risk free",
  "double your",
  "million dollars",
  "work from home",
  "make money fast",
  "as seen on",
  "order now",
  "special promotion",
  "urgent",
  "casino",
  "viagra",
  "crypto opportunity",
];

const SHORTENED_DOMAINS = [
  "bit.ly",
  "tinyurl.com",
  "t.co",
  "goo.gl",
  "ow.ly",
  "is.gd",
  "buff.ly",
  "adf.ly",
  "bl.ink",
  "shorte.st",
];

const BOT_NAMES = [
  "admin",
  "test",
  "info",
  "user",
  "guest",
  "root",
  "webmaster",
  "no name",
  "name",
  "asdf",
  "qwerty",
];

function checkSpam(
  name: string,
  email: string,
  message: string
): { score: number; checks: CheckResult[] } {
  const checks: CheckResult[] = [];
  const combined = `${name} ${email} ${message}`;

  // 1. Suspicious links (+30)
  const urlMatches = combined.match(/https?:\/\/[^\s]+/gi) || [];
  const shortened = urlMatches.filter((u) =>
    SHORTENED_DOMAINS.some((d) => u.toLowerCase().includes(d))
  );
  const randomUrlChars = urlMatches.filter((u) =>
    /[a-z0-9]{15,}/i.test(u.replace(/https?:\/\//, ""))
  );
  if (urlMatches.length >= 3 || shortened.length > 0 || randomUrlChars.length > 0) {
    const reasons: string[] = [];
    if (urlMatches.length >= 3) reasons.push(`${urlMatches.length} URLs found`);
    if (shortened.length > 0) reasons.push("shortened URLs detected");
    if (randomUrlChars.length > 0) reasons.push("URLs with random characters");
    checks.push({
      label: "Suspicious links",
      points: 30,
      detail: reasons.join(", "),
    });
  }

  // 2. Spam keywords (+20)
  const lowerCombined = combined.toLowerCase();
  const foundKeywords = SPAM_KEYWORDS.filter((kw) =>
    lowerCombined.includes(kw)
  );
  if (foundKeywords.length > 0) {
    checks.push({
      label: "Spam keywords",
      points: 20,
      detail: `Found: ${foundKeywords.slice(0, 4).map((k) => `"${k}"`).join(", ")}${foundKeywords.length > 4 ? ` and ${foundKeywords.length - 4} more` : ""}`,
    });
  }

  // 3. ALL CAPS abuse (+15)
  const alphaChars = combined.replace(/[^a-zA-Z]/g, "");
  if (alphaChars.length > 5) {
    const upperRatio =
      alphaChars.replace(/[^A-Z]/g, "").length / alphaChars.length;
    if (upperRatio > 0.4) {
      checks.push({
        label: "ALL CAPS abuse",
        points: 15,
        detail: `${Math.round(upperRatio * 100)}% of letters are uppercase`,
      });
    }
  }

  // 4. Excessive punctuation (+10)
  const excessiveBangs = (combined.match(/!{2,}/g) || []).length;
  const excessiveQuestions = (combined.match(/\?{2,}/g) || []).length;
  const excessiveDollars = (combined.match(/\${2,}/g) || []).length;
  const totalExcessive = excessiveBangs + excessiveQuestions + excessiveDollars;
  if (totalExcessive > 0) {
    checks.push({
      label: "Excessive punctuation",
      points: 10,
      detail: `${totalExcessive} instance${totalExcessive > 1 ? "s" : ""} of repeated punctuation (!!!, ???, $$$)`,
    });
  }

  // 5. Email pattern (+10)
  const emailMatches =
    combined.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g) || [];
  const freeProviders = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "mail.com", "protonmail.com"];
  const suspiciousEmails = emailMatches.filter((e) => {
    const [local, domain] = e.split("@");
    const isFree = freeProviders.some((fp) => domain?.toLowerCase() === fp);
    const hasRandomLocal = /[a-z]{2,}\d{4,}/i.test(local || "");
    return isFree && hasRandomLocal;
  });
  if (emailMatches.length >= 3 || suspiciousEmails.length > 0) {
    const reasons: string[] = [];
    if (emailMatches.length >= 3)
      reasons.push(`${emailMatches.length} email addresses`);
    if (suspiciousEmails.length > 0)
      reasons.push("random-looking email addresses");
    checks.push({
      label: "Suspicious email pattern",
      points: 10,
      detail: reasons.join(", "),
    });
  }

  // 6. No real name (+5)
  const trimmedName = name.trim();
  const isShortName = trimmedName.length === 1;
  const isAllNumbers = /^\d+$/.test(trimmedName);
  const isBotName = BOT_NAMES.includes(trimmedName.toLowerCase());
  if (trimmedName && (isShortName || isAllNumbers || isBotName)) {
    checks.push({
      label: "No real name",
      points: 5,
      detail: isShortName
        ? "Single character name"
        : isAllNumbers
          ? "Name is all numbers"
          : `"${trimmedName}" is a common bot name`,
    });
  }

  // 7. Very short message (+5)
  if (message.trim().length > 0 && message.trim().length < 10) {
    checks.push({
      label: "Very short message",
      points: 5,
      detail: `Only ${message.trim().length} characters`,
    });
  }

  // 8. Gibberish detection (+10)
  const lowerMsg = message.toLowerCase().replace(/[^a-z]/g, "");
  if (lowerMsg.length > 10) {
    const vowels = lowerMsg.replace(/[^aeiou]/g, "").length;
    const consonants = lowerMsg.length - vowels;
    const ratio = vowels > 0 ? consonants / vowels : consonants;
    if (ratio > 4) {
      checks.push({
        label: "Gibberish detected",
        points: 10,
        detail: `High consonant-to-vowel ratio (${ratio.toFixed(1)}:1) suggests random key mashing`,
      });
    }
  }

  const score = Math.min(100, checks.reduce((sum, c) => sum + c.points, 0));
  return { score, checks };
}

function getVerdict(score: number): {
  label: string;
  color: string;
  ringColor: string;
  bgColor: string;
} {
  if (score <= 25)
    return {
      label: "Likely legitimate",
      color: "text-green-600",
      ringColor: "stroke-green-500",
      bgColor: "bg-green-50",
    };
  if (score <= 50)
    return {
      label: "Suspicious",
      color: "text-yellow-600",
      ringColor: "stroke-yellow-500",
      bgColor: "bg-yellow-50",
    };
  if (score <= 75)
    return {
      label: "Probably spam",
      color: "text-orange-600",
      ringColor: "stroke-orange-500",
      bgColor: "bg-orange-50",
    };
  return {
    label: "Almost certainly spam",
    color: "text-red-600",
    ringColor: "stroke-red-500",
    bgColor: "bg-red-50",
  };
}

function getTips(score: number): string[] {
  if (score <= 25)
    return [
      "This submission looks legitimate. Respond promptly to keep the lead warm.",
      "Even legitimate messages deserve a quick acknowledgment within 5 minutes.",
    ];
  if (score <= 50)
    return [
      "This submission has some suspicious signals. Review it carefully before responding.",
      "Check if the sender email looks real by searching for it online.",
      "If it contains links, hover over them to verify the destination before clicking.",
    ];
  if (score <= 75)
    return [
      "This submission is likely spam. Consider ignoring or deleting it.",
      "Do not click any links in the message.",
      "If you receive many submissions like this, consider adding a CAPTCHA or honeypot field to your form.",
    ];
  return [
    "This is almost certainly spam. Delete it and do not engage.",
    "Never click links or reply to addresses in spam submissions.",
    "Add spam protection to your forms: CAPTCHA, honeypot fields, or an automated filter like FormReply.",
    "Consider rate-limiting form submissions from the same IP address.",
  ];
}

/* ------------------------------------------------------------------ */
/*  Score circle component                                             */
/* ------------------------------------------------------------------ */

function ScoreCircle({ score }: { score: number }) {
  const verdict = getVerdict(score);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            className={verdict.ringColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-3xl font-bold ${verdict.color}`}>{score}</span>
        </div>
      </div>
      <p className={`mt-3 text-sm font-semibold ${verdict.color}`}>
        {verdict.label}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function FormSpamCheckerPage() {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<{
    score: number;
    checks: CheckResult[];
  } | null>(null);
  const [checking, setChecking] = useState(false);

  const handleCheck = () => {
    if (!message.trim() && !senderName.trim() && !senderEmail.trim()) return;
    setChecking(true);
    setTimeout(() => {
      setResult(checkSpam(senderName, senderEmail, message));
      setChecking(false);
    }, 600);
  };

  const handleTryExample = () => {
    setSenderName("admin");
    setSenderEmail("xkr7832mz@gmail.com");
    setMessage(
      "CONGRATULATIONS!!! You have been selected as a WINNER! Click here to claim your FREE money: https://bit.ly/3xYz9kW — Act now, this limited offer expires soon!!! Visit https://totallylegit293847.com/claim and https://bit.ly/abc123 to earn extra $$$ today!"
    );
    setResult(null);
  };

  const handleClear = () => {
    setSenderName("");
    setSenderEmail("");
    setMessage("");
    setResult(null);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200 py-3 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg text-gray-900"
          >
            <Image src="/logo.png" alt="FormReply" width={24} height={24} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/demo"
              className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors hidden sm:block"
            >
              See demo
            </Link>
            <Link
              href="/onboarding"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1 rounded-full mb-6">
          <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
          Free tool — no signup required
        </div>
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
          Form Spam Checker
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          Paste a form submission and instantly find out if it&apos;s spam. Get a
          detailed score with explanations — no signup required.
        </p>
      </section>

      {/* Tool */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          {/* Input form */}
          <div className="space-y-4 mb-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sender name
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Sarah Chen"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Sender email
                </label>
                <input
                  type="text"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="e.g. sarah@company.com"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Paste the form submission message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
              />
              <div className="flex items-center gap-3 mt-1">
                <button
                  onClick={handleTryExample}
                  className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Try a spammy example →
                </button>
                {(senderName || senderEmail || message) && (
                  <button
                    onClick={handleClear}
                    className="text-xs text-gray-400 hover:text-gray-600 font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>
            </div>
          </div>

          <button
            onClick={handleCheck}
            disabled={
              (!message.trim() && !senderName.trim() && !senderEmail.trim()) ||
              checking
            }
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {checking ? "Analyzing submission..." : "Check for Spam"}
          </button>

          {/* Output */}
          {result && (
            <div className="mt-8 space-y-6">
              {/* Score circle */}
              <div className="flex justify-center py-4">
                <ScoreCircle score={result.score} />
              </div>

              {/* Breakdown */}
              {result.checks.length > 0 ? (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Spam signals detected
                  </h3>
                  <div className="space-y-2">
                    {result.checks.map((check, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3"
                      >
                        <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-red-600 text-xs font-bold">
                          +{check.points}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {check.label}
                          </p>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {check.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-xl px-4 py-3">
                  <p className="text-sm text-gray-600">
                    No spam signals detected. This submission looks clean.
                  </p>
                </div>
              )}

              {/* Tips */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  What to do
                </h3>
                <div
                  className={`rounded-xl px-5 py-4 ${getVerdict(result.score).bgColor}`}
                >
                  <ul className="space-y-2">
                    {getTips(result.score).map((tip, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="shrink-0 mt-0.5 text-gray-400">
                          &bull;
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      {result && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Want automatic spam filtering for your Typeform submissions?
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              FormReply filters out spam before it reaches your inbox and
              auto-drafts personalized replies to real submissions — all in
              ~10 seconds. No more manual checking.
            </p>
            <Link
              href="/onboarding"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors text-sm"
            >
              Start free 14-day trial →
            </Link>
            <p className="text-xs text-gray-400 mt-3">
              No card required · 5 free replies/month forever
            </p>
          </div>
        </section>
      )}

      {/* SEO content */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to identify contact form spam
          </h2>
          <div className="prose prose-gray prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              Contact form spam is one of the most common problems for any
              website with a public form. Bots and bad actors submit fake
              messages containing promotional links, phishing attempts, and
              gibberish — wasting your time and cluttering your inbox.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Common spam patterns to watch for
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Shortened or suspicious links.</strong> Spam submissions
                almost always include URLs — especially shortened ones (bit.ly,
                tinyurl) that hide the real destination.
              </li>
              <li>
                <strong>Generic or fake names.</strong> Names like
                &quot;admin&quot;, &quot;test&quot;, single characters, or
                all-number names are strong spam indicators.
              </li>
              <li>
                <strong>ALL CAPS and excessive punctuation.</strong> Legitimate
                contacts rarely write in all caps or use multiple exclamation
                marks.
              </li>
              <li>
                <strong>Sales-y keywords.</strong> Phrases like &quot;act
                now&quot;, &quot;click here&quot;, and &quot;limited offer&quot;
                are hallmarks of spam content.
              </li>
              <li>
                <strong>Random email addresses.</strong> Emails from free
                providers with long random strings (e.g.
                xkr7832mz@gmail.com) are often bot-generated.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Why form spam matters
            </h3>
            <p>
              Beyond wasting your time, form spam poses real risks.
              Phishing links can compromise your security. Spam floods can
              bury legitimate leads, causing you to miss real customer
              inquiries. For businesses that rely on contact forms for
              revenue, unfiltered spam directly costs money.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              How to reduce contact form spam
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Add a CAPTCHA.</strong> Google reCAPTCHA or hCaptcha
                blocks most automated bots. Use invisible CAPTCHAs to
                avoid hurting the user experience.
              </li>
              <li>
                <strong>Use a honeypot field.</strong> Add a hidden form
                field that humans won&apos;t fill out but bots will. If
                it&apos;s filled, the submission is spam.
              </li>
              <li>
                <strong>Rate-limit submissions.</strong> Prevent the same IP
                from submitting your form more than a few times per minute.
              </li>
              <li>
                <strong>Use automated filtering.</strong>{" "}
                <Link
                  href="/onboarding"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  FormReply
                </Link>{" "}
                automatically filters spam from your Typeform submissions and
                only sends you AI-drafted replies for real messages — so you
                never waste time on junk again.
              </li>
            </ul>

            <p className="mt-4">
              This free spam checker analyzes submissions using the same
              heuristics used by email spam filters — link analysis, keyword
              detection, pattern matching, and more. For fully automated
              spam filtering and AI-powered replies,{" "}
              <Link
                href="/onboarding"
                className="text-indigo-600 hover:underline font-medium"
              >
                try FormReply free
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 bg-white">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <Image src="/logo.png" alt="FormReply" width={22} height={22} />
            <span>FormReply</span>
          </Link>
          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/blog"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tools/reply-generator"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Reply Generator
            </Link>
            <Link
              href="/tools/form-spam-checker"
              className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              Spam Checker
            </Link>
            <Link
              href="/support"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/privacy-and-tos"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Privacy & Terms
            </Link>
            <p className="text-sm text-gray-400">&copy; 2026 FormReply</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
