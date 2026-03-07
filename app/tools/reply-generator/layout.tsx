import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Contact Form Reply Generator — FormReply",
  description:
    "Paste a contact form submission and get a ready-to-send reply instantly. Choose your tone (professional, friendly, casual), copy, and send. Free tool by FormReply.",
  keywords: [
    "contact form reply generator",
    "contact form response template",
    "reply to contact form submission",
    "email reply generator",
    "form response generator",
    "contact form reply template",
    "auto reply contact form",
    "typeform reply generator",
  ],
  alternates: {
    canonical: "https://formreply.app/tools/reply-generator",
  },
  openGraph: {
    title: "Free Contact Form Reply Generator — FormReply",
    description:
      "Paste a contact form submission and get a ready-to-send reply instantly. Choose your tone, copy, and send.",
    type: "website",
    url: "https://formreply.app/tools/reply-generator",
    siteName: "FormReply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Contact Form Reply Generator — FormReply",
    description:
      "Paste a contact form submission, get a reply draft in seconds. Free tool by FormReply.",
  },
};

export default function ReplyGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
