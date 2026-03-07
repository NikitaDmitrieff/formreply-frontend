import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — FormReply | Guides, Integrations & Form Automation Tips",
  description:
    "Learn how to automate form replies, connect Typeform to your tools, and respond to leads faster. Guides, integration tutorials, and comparison articles.",
  openGraph: {
    title: "FormReply Blog — Guides, Integrations & Form Automation Tips",
    description:
      "Learn how to automate form replies, connect Typeform to your tools, and respond to leads faster.",
    url: "https://formreply.app/blog",
    siteName: "FormReply",
    type: "website",
  },
};

interface BlogPost {
  slug: string;
  title: string;
  category: string;
}

const POSTS: BlogPost[] = [
  // Guides & How-To
  { slug: "tally-form-auto-reply", title: "Tally Form Auto-Reply: How to Respond to Submissions with AI", category: "Guides" },
  { slug: "google-forms-auto-reply", title: "How to Auto-Reply to Google Forms Submissions with AI", category: "Guides" },
  { slug: "jotform-auto-reply", title: "Jotform Auto-Reply: How to Respond to Form Submissions Instantly with AI", category: "Guides" },
  { slug: "webflow-form-auto-reply", title: "Webflow Form Submissions: How to Auto-Reply with AI (No Code)", category: "Guides" },
  { slug: "typeform-auto-reply", title: "How to Automatically Reply to Typeform Submissions (Without Zapier)", category: "Guides" },
  { slug: "typeform-automate-responses", title: "How to Automate Responses to Typeform Submissions", category: "Guides" },
  { slug: "typeform-contact-form-automation", title: "How to Automate Responses to Your Typeform Contact Form", category: "Guides" },
  { slug: "typeform-webhook-setup", title: "How to Set Up a Typeform Webhook (Step-by-Step Guide)", category: "Guides" },
  { slug: "typeform-api-webhook", title: "Typeform API Webhook: Receive Submissions Instantly — Then Actually Reply", category: "Guides" },
  { slug: "typeform-send-email-on-submission", title: "How to Send an Email When Someone Submits Your Typeform", category: "Guides" },
  { slug: "typeform-send-responses-to-respondents", title: "How to Send Typeform Responses Back to the Respondent", category: "Guides" },
  { slug: "typeform-email-to-respondent", title: "Typeform Email to Respondent: How to Reply Personally to Every Submission", category: "Guides" },
  { slug: "typeform-follow-up-email", title: "How to Send a Follow-Up Email After Every Typeform Submission", category: "Guides" },
  { slug: "typeform-quiz-result-email", title: "How to Send Quiz Results by Email in Typeform", category: "Guides" },
  { slug: "typeform-reply-to-submissions", title: "How to Reply to Typeform Submissions: 3 Approaches Compared", category: "Guides" },
  { slug: "typeform-50-submissions-workflow", title: "How We Reply to 50 Typeform Submissions Per Week in Under 2 Hours", category: "Guides" },
  { slug: "typeform-autoresponder", title: "Typeform Autoresponder: Stop Sending Templates, Start Sending Real Replies", category: "Guides" },
  { slug: "typeform-conditional-logic-email", title: "Typeform Conditional Logic + Email: Route Submissions and Draft Smarter Replies", category: "Guides" },
  { slug: "typeform-contact-form-notification-email", title: "Typeform Contact Form Notification Email: What You Get vs. What You Need", category: "Guides" },
  { slug: "typeform-contact-form-to-email", title: "Typeform Contact Form to Email: How Notifications Work (and How to Reply Automatically)", category: "Guides" },
  { slug: "typeform-email-notification", title: "Typeform Email Notification: Get Submission Alerts + Reply Drafts in One Email", category: "Guides" },
  { slug: "typeform-intake-form-email", title: "Typeform Intake Form Email: How to Reply Personally at Scale", category: "Guides" },
  { slug: "typeform-lead-generation", title: "Typeform Lead Generation: Why Your Form Converts but Your Follow-Up Doesn't", category: "Guides" },
  { slug: "typeform-contact-form-template", title: "Typeform Contact Form Template: Fields, Logic, and Setup That Actually Converts", category: "Guides" },
  { slug: "typeform-survey-template", title: "Typeform Survey Templates: Best Free Templates for Every Use Case", category: "Guides" },

  // Integrations
  { slug: "typeform-hubspot-integration", title: "Typeform HubSpot Integration: Connect Your Form, Then Actually Reply to the Lead", category: "Integrations" },
  { slug: "typeform-salesforce-integration", title: "Typeform Salesforce Integration: Sync Leads, Then Actually Reply to Them", category: "Integrations" },
  { slug: "typeform-pipedrive-integration", title: "Typeform Pipedrive Integration: Capture Leads, Then Reply Before They Go Cold", category: "Integrations" },
  { slug: "typeform-crm-integration", title: "Typeform CRM Integration: Capture the Lead and Reply Before It Hits Your CRM", category: "Integrations" },
  { slug: "typeform-mailchimp-integration", title: "Typeform Mailchimp Integration: Grow Your List and Reply to the People Who Have Questions", category: "Integrations" },
  { slug: "typeform-activecampaign-integration", title: "Typeform ActiveCampaign Integration: Capture Leads, Trigger Automations, and Reply to Every Inquiry", category: "Integrations" },
  { slug: "typeform-convertkit-integration", title: "Typeform ConvertKit Integration: Grow Your List and Reply to Every Message That Counts", category: "Integrations" },
  { slug: "typeform-klaviyo-integration", title: "Typeform Klaviyo Integration: Capture Leads and Reply to the Ones Who Have Questions", category: "Integrations" },
  { slug: "typeform-brevo-integration", title: "Typeform Brevo Integration: Automate Your List and Reply to Every Inquiry", category: "Integrations" },
  { slug: "typeform-airtable-integration", title: "Typeform Airtable Integration: Sync Form Submissions to a Base", category: "Integrations" },
  { slug: "typeform-notion-integration", title: "Typeform Notion Integration: Send Form Submissions to a Notion Database", category: "Integrations" },
  { slug: "typeform-google-sheets-email", title: "Typeform + Google Sheets + Email: Collect, Track, and Reply Without Zapier", category: "Integrations" },
  { slug: "typeform-asana-integration", title: "How to Connect Typeform to Asana (Step-by-Step)", category: "Integrations" },
  { slug: "typeform-monday-integration", title: "Typeform Monday.com Integration: How to Connect Submissions to Your Boards", category: "Integrations" },
  { slug: "typeform-microsoft-teams-integration", title: "How to Connect Typeform to Microsoft Teams (Step-by-Step)", category: "Integrations" },
  { slug: "typeform-slack-notification", title: "How to Get Slack Notifications for Typeform Submissions (And Why Email Might Be Better)", category: "Integrations" },

  // Comparisons
  { slug: "google-forms-vs-typeform", title: "Google Forms vs Typeform: Which Is Better for Contact Forms?", category: "Comparisons" },
  { slug: "best-form-auto-reply-tools", title: "Best Form Auto-Reply Tools: FormReply vs Zapier vs Manual", category: "Comparisons" },
  { slug: "typeform-zapier-alternative", title: "Typeform + Zapier for Contact Form Replies: Is There a Better Alternative?", category: "Comparisons" },
  { slug: "typeform-google-forms-alternative", title: "Typeform vs Google Forms: Which Is the Better Alternative in 2024?", category: "Comparisons" },
  { slug: "typeform-jotform-comparison", title: "Typeform vs JotForm: Full Comparison (2025)", category: "Comparisons" },
  { slug: "typeform-tally-alternative", title: "Typeform vs Tally: Which Form Builder Should You Use?", category: "Comparisons" },
];

const CATEGORIES = ["Guides", "Integrations", "Comparisons"] as const;

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Guides: "Step-by-step tutorials on automating form replies with Typeform, Google Forms, Tally, Jotform, Webflow, and more.",
  Integrations: "Connect your form builder to your CRM, email platform, project management tool, and more.",
  Comparisons: "Side-by-side comparisons of form builders and automation tools.",
};

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-indigo-600 tracking-tight">
            FormReply
          </Link>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Guides, integration tutorials, and comparisons to help you reply to form submissions faster.
          </p>
        </header>

        {CATEGORIES.map((category) => {
          const posts = POSTS.filter((p) => p.category === category);
          return (
            <section key={category} className="mb-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{category}</h2>
              <p className="text-gray-500 text-sm mb-6">{CATEGORY_DESCRIPTIONS[category]}</p>
              <div className="space-y-3">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block group px-4 py-3 -mx-4 rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    <span className="text-gray-800 group-hover:text-indigo-700 font-medium transition-colors">
                      {post.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <section className="mt-16 border-t border-gray-100 pt-12 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Ready to automate your form replies?</h2>
          <p className="text-gray-500 mb-6">
            5 free AI-drafted replies per month. No credit card required.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Try FormReply free
          </Link>
        </section>
      </div>

      <footer className="border-t border-gray-100 mt-8 px-6 py-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>&copy; {new Date().getFullYear()} FormReply</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <Link href="/changelog" className="hover:text-gray-600">Changelog</Link>
            <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
            <Link href="/support" className="hover:text-gray-600">Support</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
