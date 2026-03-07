"use client";

import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";

interface DailyEntry {
  date: string;
  count: number;
}

interface PathEntry {
  path: string;
  count: number;
}

interface ReferrerEntry {
  referrer: string;
  count: number;
}

interface AnalyticsData {
  total_views: number;
  views_today: number;
  views_last_7_days: number;
  daily_views_30d: DailyEntry[];
  top_paths: PathEntry[];
  top_referrers: ReferrerEntry[];
}

const API_URL =
  "https://formreply-backend-production.up.railway.app/analytics";

export function StatsClient() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const maxDaily = data
    ? Math.max(...data.daily_views_30d.map((d) => d.count), 1)
    : 1;

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />

      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Analytics</h1>

        {loading && (
          <div className="flex items-center gap-3 text-white/50">
            <div className="h-5 w-5 border-2 border-white/20 border-t-indigo-500 rounded-full animate-spin" />
            Loading analytics...
          </div>
        )}

        {error && (
          <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 text-red-300">
            Failed to load analytics: {error}
          </div>
        )}

        {data && (
          <>
            {/* Summary cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <SummaryCard label="Total page views" value={data.total_views} />
              <SummaryCard label="Today" value={data.views_today} />
              <SummaryCard label="Last 7 days" value={data.views_last_7_days} />
            </div>

            {/* Daily bar chart */}
            <section className="mb-12">
              <h2 className="text-lg font-semibold mb-4 text-white/80">
                Daily views (last 30 days)
              </h2>
              <div className="flex items-end gap-[3px] h-48 bg-white/5 rounded-lg p-4">
                {data.daily_views_30d.map((entry) => {
                  const pct = (entry.count / maxDaily) * 100;
                  return (
                    <div
                      key={entry.date}
                      className="flex-1 group relative flex flex-col justify-end h-full"
                    >
                      <div
                        className="bg-indigo-500 rounded-sm min-h-[2px] transition-all hover:bg-indigo-400"
                        style={{ height: `${pct}%` }}
                      />
                      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black text-xs rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                        {entry.date}: {entry.count}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Tables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Top paths */}
              <section>
                <h2 className="text-lg font-semibold mb-4 text-white/80">
                  Top paths
                </h2>
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/50">
                        <th className="text-left py-3 px-4 font-medium">
                          Path
                        </th>
                        <th className="text-right py-3 px-4 font-medium">
                          Views
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.top_paths.map((entry) => (
                        <tr
                          key={entry.path}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="py-2.5 px-4 font-mono text-white/70">
                            {entry.path}
                          </td>
                          <td className="py-2.5 px-4 text-right tabular-nums text-indigo-400">
                            {entry.count}
                          </td>
                        </tr>
                      ))}
                      {data.top_paths.length === 0 && (
                        <tr>
                          <td
                            colSpan={2}
                            className="py-4 px-4 text-center text-white/30"
                          >
                            No data yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Top referrers */}
              <section>
                <h2 className="text-lg font-semibold mb-4 text-white/80">
                  Top referrers
                </h2>
                <div className="bg-white/5 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-white/50">
                        <th className="text-left py-3 px-4 font-medium">
                          Referrer
                        </th>
                        <th className="text-right py-3 px-4 font-medium">
                          Views
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.top_referrers.map((entry) => (
                        <tr
                          key={entry.referrer}
                          className="border-b border-white/5 last:border-0"
                        >
                          <td className="py-2.5 px-4 text-white/70 truncate max-w-[200px]">
                            {entry.referrer || "(direct)"}
                          </td>
                          <td className="py-2.5 px-4 text-right tabular-nums text-indigo-400">
                            {entry.count}
                          </td>
                        </tr>
                      ))}
                      {data.top_referrers.length === 0 && (
                        <tr>
                          <td
                            colSpan={2}
                            className="py-4 px-4 text-center text-white/30"
                          >
                            No data yet
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6">
      <p className="text-sm text-white/50 mb-1">{label}</p>
      <p className="text-4xl font-bold tabular-nums tracking-tight">
        {value.toLocaleString()}
      </p>
    </div>
  );
}
