import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Typeform Salesforce Integration: Sync Leads, Then Actually Reply to Them — FormReply",
  description:
    "The Typeform Salesforce integration creates contacts and opportunities automatically. But Salesforce won't write your first reply. Here's how to close the gap before the lead goes cold.",
  openGraph: {
    title: "Typeform Salesforce Integration: Sync Leads, Then Actually Reply to Them",
    description:
      "Typeform + Salesforce captures and routes leads instantly. FormReply handles the part Salesforce skips — drafting a personalized first reply in 10 seconds.",
    url: "https://formreply-frontend.vercel.app/blog/typeform-salesforce-integration",
    siteName: "FormReply",
    type: "article",
  },
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      {/* Nav */}
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

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-16">
        <header className="mb-12">
          <div className="text-sm text-indigo-600 font-medium mb-3">Guide &middot; Typeform Integrations</div>
          <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
            Typeform Salesforce Integration: Capture the Lead, Then Reply Before It Goes Cold
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            The Typeform-to-Salesforce integration is one of the most complete lead capture setups available. Contacts
            get created, opportunities get logged, and your pipeline stays current. The one thing it doesn&rsquo;t do
            is write the first reply — and that&rsquo;s where most qualified leads slip through.
          </p>
        </header>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Teams Pair Typeform with Salesforce</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform produces high-quality lead data. Its conversational format encourages respondents to write more —
            context about their company size, the problem they&rsquo;re trying to solve, their timeline, their budget.
            A Typeform submission typically contains more signal than a standard web form.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Salesforce is where that data needs to live for enterprise sales teams. Contacts, leads, accounts,
            opportunities — the full CRM structure. When Typeform and Salesforce are connected, a new form submission
            automatically creates a Contact or Lead record in Salesforce, populated with everything the respondent
            provided.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That&rsquo;s a genuinely powerful setup: high-quality data capture feeding directly into enterprise CRM
            infrastructure with no manual data entry.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How to Connect Typeform to Salesforce</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            There are three main ways to set up the Typeform-Salesforce integration:
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Option 1: Zapier</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Zapier&rsquo;s Typeform-to-Salesforce Zap is the most common approach. You configure a trigger (new
            Typeform submission) and an action (create Lead, create Contact, or create Custom Object in Salesforce).
            Field mapping is done through Zapier&rsquo;s visual interface. No code required; setup takes 15–30 minutes.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The limitation is cost at scale: Zapier charges per task, and high-volume form submissions can push costs
            quickly. For teams with moderate volume (&lt;1,000 submissions/month), Zapier is usually fine.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Option 2: Native Typeform + Salesforce Connection</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Typeform has a native Salesforce integration available on Business and Enterprise plans. You connect via
            OAuth under <strong>Connect &rarr; Salesforce</strong>, then map form fields to Salesforce object fields.
            This is more reliable than Zapier for high-volume use and doesn&rsquo;t add per-task costs.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Note that the native integration supports Lead and Contact creation. For more complex Salesforce objects or
            custom logic (e.g., creating both a Lead and an Opportunity with custom field logic), you&rsquo;ll typically
            need Zapier, Make, or a custom webhook integration.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Option 3: Typeform Webhook + Salesforce API</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            For full control, you can build a custom integration: configure a Typeform webhook to send submission
            payloads to an endpoint you control, then use the Salesforce REST API to create records with whatever
            logic you need. This requires developer resources but allows unlimited customization.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Field Mapping: Getting the Data Right</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Regardless of which integration method you use, field mapping is where most setup time is spent. Common
            Typeform-to-Salesforce mappings:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Typeform Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Salesforce Field</th>
                  <th className="border border-gray-200 px-4 py-2 text-left text-gray-700">Object Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Name (short text)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">First Name + Last Name</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead / Contact</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Email</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead / Contact</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Company (short text)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Company</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Message (long text)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Description</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead / Contact</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Budget (dropdown)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Annual Revenue (or custom)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Form URL (hidden field)</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead Source</td>
                  <td className="border border-gray-200 px-4 py-2 text-gray-600">Lead</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            One common issue: Typeform collects full name as a single field, while Salesforce stores first and last
            name separately. You&rsquo;ll need either a custom split step (in Zapier/Make) or a custom field on the
            Typeform side.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Gap Salesforce Doesn&rsquo;t Close</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Here&rsquo;s the problem with the Typeform-to-Salesforce pipeline: it&rsquo;s built for data organization,
            not for communication.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a lead fills out your contact form at 2pm on a Tuesday, Salesforce immediately has a new Lead record.
            Your sales team can see it in their queue. But writing the first reply — the one that acknowledges the
            specific problem this person described, positions your product relevantly, and moves the conversation
            forward — that still has to happen manually.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            And for enterprise sales teams dealing with inbound volume, that reply rarely happens within five minutes.
            Often it doesn&rsquo;t happen for hours. By that point, the lead has moved on, evaluated a competitor,
            or simply cooled off.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Salesforce has email templates and automated email workflows (through Pardot/Marketing Cloud or native
            automation). But those send generic sequences, not personalized first replies based on what the prospect
            actually wrote. &ldquo;Thanks for reaching out, someone will be in touch shortly&rdquo; is not the same
            as a reply that references their specific use case.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Running Typeform + Salesforce + FormReply in Parallel</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The solution isn&rsquo;t to replace your Salesforce integration. It&rsquo;s to add a parallel layer that
            handles the reply side while Salesforce handles the data side.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The workflow:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 mb-6">
            <li>Respondent submits your Typeform contact form.</li>
            <li><strong>Salesforce path:</strong> Zapier or native integration creates the Lead/Contact record — your CRM is updated.</li>
            <li><strong>Reply path (FormReply):</strong> Simultaneously, FormReply reads the same submission and drafts a personalized reply based on what the respondent wrote.</li>
            <li>Within 10 seconds, a reply draft appears in the assigned rep&rsquo;s Gmail inbox.</li>
            <li>The rep reviews, adjusts if needed, and sends — often before Salesforce has even finished routing the lead.</li>
          </ol>
          <p className="text-gray-600 leading-relaxed mb-4">
            Both systems run independently. FormReply doesn&rsquo;t replace Salesforce; it closes the communication
            gap that Salesforce was never designed to fill.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Who This Setup Fits</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The Typeform + Salesforce + FormReply stack works best for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
            <li><strong>B2B SaaS teams</strong> handling inbound demo requests or sales inquiries where first-reply speed directly correlates with close rate</li>
            <li><strong>Professional services firms</strong> (agencies, consultancies, law firms) where the initial reply needs to be substantive, not templated</li>
            <li><strong>Enterprise SDR teams</strong> processing high inbound volume where reps can&rsquo;t personally craft every first reply from scratch</li>
            <li><strong>Founders and solo sellers</strong> who use Typeform for qualified lead intake and Salesforce as their CRM of record</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-4">
            It&rsquo;s less useful for transactional forms (support tickets, survey responses) where the goal is
            routing rather than personal reply.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">FAQ</h2>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Does Salesforce have a native Typeform integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. Typeform&rsquo;s Business and Enterprise plans include a native Salesforce connection. You can also
            use Zapier, Make, or a custom webhook to create Salesforce records from Typeform submissions — often with
            more flexibility in field mapping and object types.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Will adding FormReply break my existing Typeform-Salesforce integration?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            No. FormReply connects to Typeform independently via the Typeform API. It doesn&rsquo;t interfere with
            your existing webhook or native integration. Both systems receive the same submission data simultaneously.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            Can FormReply route reply drafts to different Gmail inboxes based on Salesforce assignment logic?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Currently FormReply routes drafts to a single connected Gmail account. If your Salesforce setup involves
            round-robin rep assignment, the simplest approach is routing through a shared inbox that the assigned rep
            monitors, or using a single SDR inbox for first-reply coverage.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            What if my Typeform has complex conditional logic — will FormReply still work?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yes. FormReply reads all submitted answer fields regardless of the branching path the respondent took.
            The reply draft is based on the actual answers provided, not on the form structure. Complex forms with
            many conditional branches tend to produce richer context, which means better reply drafts.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">
            How is FormReply different from Salesforce Einstein reply suggestions?
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Salesforce Einstein features (including email reply suggestions) are available on higher-tier Salesforce
            plans and operate within the Salesforce interface. FormReply works outside Salesforce — it drafts replies
            directly in Gmail, which is where most salespeople actually send emails from. There&rsquo;s no CRM
            switching required to use the draft.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-indigo-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Your Salesforce gets the data. Your inbox gets the reply draft.
          </h2>
          <p className="text-gray-600 mb-6">
            FormReply runs alongside your Typeform-Salesforce integration and drafts a personalized reply to every
            form submission in 10 seconds — in Gmail, ready to review and send.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </article>
    </main>
  );
}
