import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Response Time Calculator — How Fast Should You Reply? | FormReply",
  description:
    "Calculate your ideal lead response time. Compare your speed to industry benchmarks and see how faster replies impact revenue. Free tool, no signup.",
  keywords: [
    "lead response time",
    "how fast to reply to leads",
    "response time benchmark",
    "lead response time calculator",
    "speed to lead",
    "contact form response time",
    "sales response time",
  ],
  alternates: {
    canonical: "https://formreply.app/tools/response-time-calculator",
  },
  openGraph: {
    title: "Lead Response Time Calculator — How Fast Should You Reply? | FormReply",
    description:
      "Compare your response time to industry benchmarks. See revenue impact of faster replies. Free tool by FormReply.",
    type: "website",
    url: "https://formreply.app/tools/response-time-calculator",
    siteName: "FormReply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Response Time Calculator — How Fast Should You Reply? | FormReply",
    description:
      "Calculate your ideal lead response time and see how speed impacts revenue. Free tool by FormReply.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lead Response Time Calculator",
  "description":
    "Calculate your ideal lead response time. Compare your speed to industry benchmarks and see how faster replies impact revenue.",
  "url": "https://formreply.app/tools/response-time-calculator",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "author": {
    "@type": "Organization",
    "name": "FormReply",
    "url": "https://formreply.app",
  },
};

export default function ResponseTimeCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
