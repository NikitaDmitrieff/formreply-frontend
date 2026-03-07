import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Form Spam Checker — Is This Submission Spam? | FormReply",
  description:
    "Paste a form submission and instantly check if it's spam. Free spam score tool with detailed analysis — no signup required.",
  keywords: [
    "form spam checker",
    "contact form spam",
    "form submission spam",
    "spam score checker",
    "spam detection tool",
    "is this form spam",
    "form spam filter",
  ],
  alternates: {
    canonical: "https://formreply.app/tools/form-spam-checker",
  },
  openGraph: {
    title: "Free Form Spam Checker — Is This Submission Spam? | FormReply",
    description:
      "Paste a form submission and instantly check if it's spam. Free spam score tool with detailed analysis.",
    type: "website",
    url: "https://formreply.app/tools/form-spam-checker",
    siteName: "FormReply",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Form Spam Checker — Is This Submission Spam? | FormReply",
    description:
      "Paste a form submission and get an instant spam score with detailed breakdown. Free tool by FormReply.",
  },
};

export default function FormSpamCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
