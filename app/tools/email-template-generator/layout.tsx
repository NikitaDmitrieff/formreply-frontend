import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Template Generator — Free Contact Form Reply Templates | FormReply",
  description:
    "Generate professional email reply templates for contact form submissions. Choose inquiry type and tone, get 3 ready-to-use templates instantly. Free, no signup.",
  keywords: [
    "contact form reply template",
    "form response template",
    "email reply template generator",
    "professional email template",
    "contact form email template",
    "form submission reply",
  ],
  alternates: {
    canonical: "https://formreply.app/tools/email-template-generator",
  },
  openGraph: {
    title: "Email Template Generator — Free Contact Form Reply Templates | FormReply",
    description:
      "Generate 3 professional reply templates for any contact form inquiry. Choose type and tone. Free tool by FormReply.",
    type: "website",
    url: "https://formreply.app/tools/email-template-generator",
    siteName: "FormReply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Template Generator — Free Contact Form Reply Templates | FormReply",
    description:
      "Generate professional reply templates for contact form submissions. Free tool by FormReply.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Email Template Generator",
  description:
    "Generate professional email reply templates for contact form submissions. Choose inquiry type and tone, get 3 ready-to-use templates instantly.",
  url: "https://formreply.app/tools/email-template-generator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Organization",
    name: "FormReply",
    url: "https://formreply.app",
  },
};

export default function EmailTemplateGeneratorLayout({
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
