"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Industry benchmarks (median response times in minutes)             */
/* ------------------------------------------------------------------ */

const INDUSTRIES: Record<string, { name: string; median: number; top10: number }> = {
  saas: { name: "SaaS / Software", median: 720, top10: 5 },
  agency: { name: "Agency / Consulting", median: 1440, top10: 15 },
  ecommerce: { name: "E-commerce", median: 480, top10: 10 },
  realestate: { name: "Real Estate", median: 510, top10: 5 },
  financial: { name: "Financial Services", median: 960, top10: 10 },
  healthcare: { name: "Healthcare", median: 2880, top10: 30 },
  education: { name: "Education", median: 2520, top10: 60 },
  other: { name: "Other / General", median: 1020, top10: 15 },
};

/* ------------------------------------------------------------------ */
/*  Calculation logic                                                  */
/* ------------------------------------------------------------------ */

interface CalcResult {
  currentMinutes: number;
  industryMedian: number;
  top10: number;
  industryName: string;
  percentile: string;
  monthlyLeadsLost: number;
  revenueAtRisk: number;
  withFormReply: number;
  improvementFactor: string;
}

function formatTime(minutes: number): string {
  if (minutes < 1) return "< 1 min";
  if (minutes < 60) return `${Math.round(minutes)} min`;
  if (minutes < 1440) {
    const h = Math.floor(minutes / 60);
    const m = Math.round(minutes % 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  const d = Math.floor(minutes / 1440);
  const h = Math.round((minutes % 1440) / 60);
  return h > 0 ? `${d}d ${h}h` : `${d}d`;
}

function calculate(
  industry: string,
  currentTimeStr: string,
  currentUnit: string,
  monthlyLeads: number,
  avgDealValue: number
): CalcResult | null {
  const currentTime = parseFloat(currentTimeStr);
  if (isNaN(currentTime) || currentTime <= 0) return null;

  const bench = INDUSTRIES[industry];
  if (!bench) return null;

  const currentMinutes =
    currentUnit === "minutes"
      ? currentTime
      : currentUnit === "hours"
        ? currentTime * 60
        : currentTime * 1440;

  // Percentile estimate based on position relative to median
  let percentile: string;
  if (currentMinutes <= bench.top10) {
    percentile = "Top 10%";
  } else if (currentMinutes <= bench.median * 0.25) {
    percentile = "Top 25%";
  } else if (currentMinutes <= bench.median * 0.5) {
    percentile = "Top 35%";
  } else if (currentMinutes <= bench.median) {
    percentile = "Average";
  } else if (currentMinutes <= bench.median * 2) {
    percentile = "Below average";
  } else {
    percentile = "Bottom 25%";
  }

  // Lead conversion decay: Harvard Business Review / MIT study
  // Contact within 5 min = 21x more likely to qualify
  // After 30 min = 21x drop. After 1 hour = 60x drop vs 5 min.
  const conversionAt5min = 0.391; // baseline qualification rate at 5 min
  const conversionAtCurrent = currentMinutes <= 5
    ? conversionAt5min
    : conversionAt5min / (1 + Math.log2(currentMinutes / 5) * 1.5);
  const conversionWithFormReply = conversionAt5min; // ~10 seconds = effectively 5-min bucket

  const leadsLostPerMonth = Math.round(
    monthlyLeads * (conversionWithFormReply - conversionAtCurrent)
  );
  const revenueAtRisk = Math.round(leadsLostPerMonth * avgDealValue);

  const improvementFactor =
    currentMinutes > 0.17
      ? `${Math.round(currentMinutes / 0.17)}x`
      : "already fast";

  return {
    currentMinutes,
    industryMedian: bench.median,
    top10: bench.top10,
    industryName: bench.name,
    percentile,
    monthlyLeadsLost: Math.max(0, leadsLostPerMonth),
    revenueAtRisk: Math.max(0, revenueAtRisk),
    withFormReply: 0.17, // ~10 seconds
    improvementFactor,
  };
}

/* ------------------------------------------------------------------ */
/*  Grade badge                                                        */
/* ------------------------------------------------------------------ */

function getGrade(percentile: string): {
  label: string;
  color: string;
  bgColor: string;
  emoji: string;
} {
  switch (percentile) {
    case "Top 10%":
      return { label: "A+", color: "text-green-700", bgColor: "bg-green-50 border-green-200", emoji: "Excellent" };
    case "Top 25%":
      return { label: "A", color: "text-green-600", bgColor: "bg-green-50 border-green-200", emoji: "Great" };
    case "Top 35%":
      return { label: "B", color: "text-blue-600", bgColor: "bg-blue-50 border-blue-200", emoji: "Good" };
    case "Average":
      return { label: "C", color: "text-yellow-600", bgColor: "bg-yellow-50 border-yellow-200", emoji: "Average" };
    case "Below average":
      return { label: "D", color: "text-orange-600", bgColor: "bg-orange-50 border-orange-200", emoji: "Needs work" };
    default:
      return { label: "F", color: "text-red-600", bgColor: "bg-red-50 border-red-200", emoji: "Critical" };
  }
}

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function ResponseTimeCalculatorPage() {
  const [industry, setIndustry] = useState("saas");
  const [currentTime, setCurrentTime] = useState("");
  const [currentUnit, setCurrentUnit] = useState("hours");
  const [monthlyLeads, setMonthlyLeads] = useState("50");
  const [avgDealValue, setAvgDealValue] = useState("500");
  const [result, setResult] = useState<CalcResult | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setShowStickyCta(scrollPercent > 0.3);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleCalculate = () => {
    if (!currentTime) return;
    setCalculating(true);
    setTimeout(() => {
      setResult(
        calculate(
          industry,
          currentTime,
          currentUnit,
          parseInt(monthlyLeads) || 50,
          parseInt(avgDealValue) || 500
        )
      );
      setCalculating(false);
    }, 500);
  };

  const handleTryExample = () => {
    setIndustry("agency");
    setCurrentTime("4");
    setCurrentUnit("hours");
    setMonthlyLeads("30");
    setAvgDealValue("2000");
    setResult(null);
  };

  const grade = result ? getGrade(result.percentile) : null;

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
              href="/tools"
              className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors hidden sm:block"
            >
              Free tools
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
          Lead Response Time Calculator
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
          How fast do you reply to leads? Compare your response time to industry
          benchmarks and see how much revenue you&apos;re leaving on the table.
        </p>
      </section>

      {/* Calculator */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
          <div className="space-y-4 mb-6">
            {/* Industry */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your industry
              </label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
              >
                {Object.entries(INDUSTRIES).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Current response time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Your average response time
              </label>
              <div className="grid grid-cols-[1fr_auto] gap-2">
                <input
                  type="number"
                  value={currentTime}
                  onChange={(e) => setCurrentTime(e.target.value)}
                  placeholder="e.g. 4"
                  min="0"
                  step="any"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
                <select
                  value={currentUnit}
                  onChange={(e) => setCurrentUnit(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
                >
                  <option value="minutes">minutes</option>
                  <option value="hours">hours</option>
                  <option value="days">days</option>
                </select>
              </div>
            </div>

            {/* Monthly leads + avg deal value */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Monthly form submissions
                </label>
                <input
                  type="number"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(e.target.value)}
                  placeholder="e.g. 50"
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Average deal value ($)
                </label>
                <input
                  type="number"
                  value={avgDealValue}
                  onChange={(e) => setAvgDealValue(e.target.value)}
                  placeholder="e.g. 500"
                  min="1"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-1">
              <button
                onClick={handleTryExample}
                className="text-xs text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Try an example (agency, 4h response time) →
              </button>
            </div>
          </div>

          <button
            onClick={handleCalculate}
            disabled={!currentTime || calculating}
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {calculating ? "Calculating..." : "Calculate My Response Time Grade"}
          </button>

          {/* Results */}
          {result && grade && (
            <div className="mt-8 space-y-6">
              {/* Grade */}
              <div className={`rounded-2xl border p-6 text-center ${grade.bgColor}`}>
                <div className={`text-6xl font-bold ${grade.color} mb-2`}>
                  {grade.label}
                </div>
                <p className={`text-sm font-semibold ${grade.color}`}>
                  {grade.emoji} — {result.percentile} in {result.industryName}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Your response time: {formatTime(result.currentMinutes)}
                </p>
              </div>

              {/* Benchmark comparison */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Industry benchmark comparison
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-600">
                      You
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Your response time
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {formatTime(result.currentMinutes)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center text-xs font-bold text-yellow-600">
                      50%
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Industry median
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {formatTime(result.industryMedian)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-xs font-bold text-green-600">
                      10%
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          Top performers
                        </p>
                        <p className="text-sm font-bold text-gray-900">
                          {formatTime(result.top10)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-indigo-50 border border-indigo-200 rounded-xl px-4 py-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                      <Image src="/logo.png" alt="" width={16} height={16} />
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-indigo-900">
                          With FormReply
                        </p>
                        <p className="text-sm font-bold text-indigo-700">
                          ~10 seconds
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue impact */}
              {result.monthlyLeadsLost > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">
                    Estimated revenue impact
                  </h3>
                  <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-red-600 font-medium uppercase tracking-wide mb-1">
                          Leads lost per month
                        </p>
                        <p className="text-2xl font-bold text-red-700">
                          ~{result.monthlyLeadsLost}
                        </p>
                        <p className="text-xs text-red-500 mt-1">
                          due to slow response time
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-red-600 font-medium uppercase tracking-wide mb-1">
                          Revenue at risk per month
                        </p>
                        <p className="text-2xl font-bold text-red-700">
                          ${result.revenueAtRisk.toLocaleString()}
                        </p>
                        <p className="text-xs text-red-500 mt-1">
                          ${(result.revenueAtRisk * 12).toLocaleString()}/year
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Key insight */}
              <div className="bg-gray-900 text-white rounded-xl px-5 py-4">
                <p className="text-sm leading-relaxed">
                  <strong>The research is clear:</strong> responding within 5 minutes
                  makes you 21x more likely to qualify a lead (MIT/InsideSales.com).
                  After 30 minutes, your odds drop dramatically. The average business
                  takes {formatTime(result.industryMedian)} to respond — that&apos;s why
                  78% of customers buy from whoever replies first.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA after result */}
      {result && (
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Reply in 10 seconds instead of {formatTime(result.currentMinutes)}
            </h2>
            <p className="text-gray-600 text-sm mb-6 max-w-lg mx-auto">
              FormReply connects to your Typeform and delivers an AI-drafted reply
              to your inbox within ~10 seconds of every submission. Review, tweak,
              send — never lose a lead to slow response time again.
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
            Why lead response time matters
          </h2>
          <div className="prose prose-gray prose-sm max-w-none text-gray-600 space-y-4">
            <p>
              Speed-to-lead is one of the most important metrics for any business
              that generates leads through contact forms. Research from MIT and
              InsideSales.com shows that contacting a lead within 5 minutes makes
              you <strong>21 times more likely</strong> to qualify them compared to
              waiting 30 minutes.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              Response time benchmarks by industry
            </h3>
            <p>
              The average business takes <strong>42 hours</strong> to respond to a
              contact form submission (Chili Piper). But top-performing companies
              respond in under 5 minutes. Here are typical median response times:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>SaaS / Software:</strong> 12 hours median, top 10% respond in 5 minutes</li>
              <li><strong>Agency / Consulting:</strong> 24 hours median, top 10% respond in 15 minutes</li>
              <li><strong>E-commerce:</strong> 8 hours median, top 10% respond in 10 minutes</li>
              <li><strong>Real Estate:</strong> 8.5 hours median, top 10% respond in 5 minutes</li>
              <li><strong>Financial Services:</strong> 16 hours median, top 10% respond in 10 minutes</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              How to improve your response time
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Set up instant notifications.</strong> Make sure form
                submissions trigger immediate alerts — email, Slack, or SMS.
              </li>
              <li>
                <strong>Use templates.</strong> Pre-written templates reduce the time
                from &quot;I need to reply&quot; to &quot;reply sent&quot; significantly.
              </li>
              <li>
                <strong>Automate with AI.</strong>{" "}
                <Link
                  href="/onboarding"
                  className="text-indigo-600 hover:underline font-medium"
                >
                  FormReply
                </Link>{" "}
                generates a personalized draft reply for every Typeform submission
                and delivers it to your inbox in ~10 seconds — cutting your response
                time from hours to seconds.
              </li>
              <li>
                <strong>Assign ownership.</strong> Designate who responds to form
                submissions so inquiries don&apos;t sit in a shared inbox.
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6">
              The cost of slow responses
            </h3>
            <p>
              Every hour you delay, your conversion probability drops. A study
              by Harvard Business Review found that firms who responded within
              an hour were <strong>7x more likely</strong> to have a meaningful
              conversation with a decision maker. After 24 hours, most leads
              have already contacted a competitor.
            </p>
            <p className="mt-4">
              This free calculator estimates how many leads and how much revenue
              your current response time is costing you. For instant response to
              every form submission,{" "}
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
      <footer className="border-t border-gray-100 py-8 pb-20 bg-white">
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
              href="/tools"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Free Tools
            </Link>
            <Link
              href="/tools/response-time-calculator"
              className="text-sm text-indigo-600 hover:text-indigo-700 transition-colors font-medium"
            >
              Response Time Calculator
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

      {/* Sticky bottom CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-gray-200 py-3 px-6 transition-all duration-300 ${
          showStickyCta
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600 hidden sm:block">
            <strong>Automate this.</strong> FormReply drafts replies in ~10
            seconds, automatically.
          </p>
          <Link
            href="/onboarding"
            className="shrink-0 bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Try free →
          </Link>
        </div>
      </div>
    </main>
  );
}
