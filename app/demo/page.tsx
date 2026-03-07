import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FormReply Demo — See It In Action",
  description: "Watch FormReply draft personalized replies to real Typeform submissions in seconds.",
  robots: { index: false, follow: false },
};

const submissions = [
  {
    id: "sub_1",
    name: "Sarah Chen",
    email: "sarah.chen@brightpath.io",
    initials: "SC",
    color: "bg-violet-500",
    subject: "Partnership inquiry",
    message:
      "Hi! We're a 40-person consulting firm in Singapore. We use Typeform for all client intake and we're drowning in manual follow-up emails. Could you walk me through how FormReply handles high-volume forms? Also curious whether there's a team plan.",
    receivedAt: "2 min ago",
    status: "sent",
    aiReply: {
      greeting: "Hi Sarah,",
      body: [
        "Thanks for reaching out — we'd love to help streamline your intake process.",
        "FormReply works great for high-volume forms. It processes every submission in parallel, so response time stays under 10 seconds regardless of volume. For a 40-person firm, the main advantage is that your team gets a ready-to-send draft in their inbox — no queue, no backlog.",
        "On team plans: we're working on a team tier but it's not live yet. In the meantime, some firms use separate accounts per department. Happy to discuss what would work best for your setup.",
        "Would a quick call this week work? I can show you exactly how it handles your form types.",
      ],
      sign: "Best,",
    },
  },
  {
    id: "sub_2",
    name: "Marcus Webb",
    email: "m.webb@designstudio.co",
    initials: "MW",
    color: "bg-emerald-500",
    subject: "Pricing question",
    message:
      "Do you offer any discount for annual billing? I'm a freelance designer and the $19/month plan looks perfect but I'd prefer to pay annually if there's a saving.",
    receivedAt: "18 min ago",
    status: "sent",
    aiReply: {
      greeting: "Hi Marcus,",
      body: [
        "Yes! Annual billing is available at $190/year — that works out to $15.83/month, so you save about two months compared to monthly billing.",
        "If you'd like to switch to annual, just email us at support@formreply.app after you sign up and we'll sort it out directly.",
      ],
      sign: "Thanks,",
    },
  },
  {
    id: "sub_3",
    name: "Aiko Tanaka",
    email: "aiko@nexuslabs.jp",
    initials: "AT",
    color: "bg-amber-500",
    subject: "Integration question",
    message:
      "We have a Typeform contact form embedded in our Next.js app. The submissions come through fine in Typeform but I want to make sure FormReply can receive the webhook without breaking our existing Zapier integration. Can both run at the same time?",
    receivedAt: "1 hr ago",
    status: "draft",
    aiReply: {
      greeting: "Hi Aiko,",
      body: [
        "Good news — yes, both can run in parallel. Typeform lets you add multiple webhook endpoints, so your existing Zapier Zap will keep working exactly as it does now. You'd just add the FormReply webhook URL as a second endpoint in Typeform's integrations settings.",
        "There's no conflict between them. Each endpoint receives the same submission payload independently.",
        "If you run into anything during setup, feel free to reply here and I'll walk you through it.",
      ],
      sign: "Best,",
    },
  },
  {
    id: "sub_4",
    name: "Diego Fuentes",
    email: "diego@founderstudio.mx",
    initials: "DF",
    color: "bg-rose-500",
    subject: "Feature request",
    message:
      "Love the product. One thing I'd really want: a way to set different reply tones per form. I have a casual personal consulting form and a formal enterprise inquiry form — right now I can only set one tone across both.",
    receivedAt: "3 hr ago",
    status: "pending",
    aiReply: {
      greeting: "Hi Diego,",
      body: [
        "That's a great point — per-form tone configuration is something several users have asked for and it's on our roadmap.",
        "For now, the workaround is to use separate FormReply accounts (one per form + tone), though I know that's not ideal. We're aiming to ship per-form settings in a future update.",
        "Really glad the product is useful for you, and thanks for the clear feedback — it helps us prioritize.",
      ],
      sign: "Thanks,",
    },
  },
];

const statusConfig = {
  sent: {
    label: "Sent",
    className: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",
    dot: "bg-emerald-400",
  },
  draft: {
    label: "Draft ready",
    className: "bg-indigo-500/15 text-indigo-400 border border-indigo-500/20",
    dot: "bg-indigo-400",
  },
  pending: {
    label: "Processing",
    className: "bg-amber-500/15 text-amber-400 border border-amber-500/20",
    dot: "bg-amber-400 animate-pulse",
  },
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans">
      {/* Top bar */}
      <header className="border-b border-white/[0.06] bg-zinc-900/80 backdrop-blur-sm px-6 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-sm font-semibold text-white">FormReply</span>
            </div>
            <span className="text-white/20 text-xs">|</span>
            <span className="text-xs text-white/40">Inbox · Demo workspace</span>
          </div>
          <Link
            href="/onboarding"
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
          >
            Connect your Typeform →
          </Link>
        </div>
      </header>

      {/* Stats strip */}
      <div className="border-b border-white/[0.06] bg-zinc-900/40 px-6 py-3">
        <div className="max-w-6xl mx-auto flex items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">47</span>
            <span className="text-xs text-white/40 leading-tight">Replies<br />sent (30d)</span>
          </div>
          <div className="w-px h-8 bg-white/[0.06] hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">8.2s</span>
            <span className="text-xs text-white/40 leading-tight">Avg draft<br />time</span>
          </div>
          <div className="w-px h-8 bg-white/[0.06] hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-emerald-400">94%</span>
            <span className="text-xs text-white/40 leading-tight">Drafts sent<br />unedited</span>
          </div>
          <div className="w-px h-8 bg-white/[0.06] hidden sm:block"></div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">4</span>
            <span className="text-xs text-white/40 leading-tight">Active<br />this session</span>
          </div>
          <div className="ml-auto hidden md:flex items-center gap-2 text-xs text-white/30">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
            Live · updating in real time
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-sm font-semibold text-white/60 uppercase tracking-wider">
            Recent submissions
          </h1>
          <span className="text-xs text-white/30">Showing 4 of 47</span>
        </div>

        <div className="space-y-4">
          {submissions.map((sub) => {
            const status = statusConfig[sub.status as keyof typeof statusConfig];
            return (
              <div
                key={sub.id}
                className="bg-zinc-900 border border-white/[0.06] rounded-xl overflow-hidden"
              >
                {/* Submission header */}
                <div className="flex items-center gap-4 px-5 py-4 border-b border-white/[0.04]">
                  <div
                    className={`w-9 h-9 rounded-full ${sub.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}
                  >
                    {sub.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-white">{sub.name}</span>
                      <span className="text-xs text-white/30">{sub.email}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-white/40">{sub.subject}</span>
                      <span className="text-white/20 text-xs">·</span>
                      <span className="text-xs text-white/30">{sub.receivedAt}</span>
                    </div>
                  </div>
                  <div
                    className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${status.className}`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${status.dot}`}></div>
                    {status.label}
                  </div>
                </div>

                {/* Two-column body */}
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.04]">
                  {/* Left: submission message */}
                  <div className="px-5 py-4">
                    <p className="text-xs font-semibold text-white/30 uppercase tracking-wider mb-3">
                      Submission
                    </p>
                    <p className="text-sm text-white/70 leading-relaxed">&ldquo;{sub.message}&rdquo;</p>
                  </div>

                  {/* Right: AI reply */}
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-xs font-semibold text-white/30 uppercase tracking-wider">
                        AI Draft
                      </p>
                      <div className="flex items-center gap-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2 py-0.5">
                        <svg className="w-2.5 h-2.5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span className="text-xs text-indigo-400 font-medium">GPT-4o mini</span>
                      </div>
                    </div>
                    <div className="text-sm text-white/70 leading-relaxed space-y-2">
                      <p className="text-white/90 font-medium">{sub.aiReply.greeting}</p>
                      {sub.aiReply.body.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                      <p className="text-white/90">
                        {sub.aiReply.sign}<br />
                        <span className="text-white/30 text-xs">[Your name]</span>
                      </p>
                    </div>
                    {sub.status !== "pending" && (
                      <div className="flex gap-2 mt-4">
                        <div className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs py-2 rounded-lg font-semibold text-center cursor-pointer transition-colors">
                          {sub.status === "sent" ? "Sent ✓" : "Send this draft"}
                        </div>
                        {sub.status === "draft" && (
                          <div className="px-3 py-2 border border-white/10 text-white/50 hover:text-white/80 text-xs rounded-lg cursor-pointer transition-colors">
                            Edit
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/25 mb-3">
            This is a demo with sample data. Your real inbox connects to your actual Typeform submissions.
          </p>
          <Link
            href="/onboarding"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors"
          >
            Connect your Typeform — it&apos;s free →
          </Link>
        </div>
      </main>
    </div>
  );
}
