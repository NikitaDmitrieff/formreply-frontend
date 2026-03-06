import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://formreply-frontend.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: "FormReply — AI Reply Drafts for Typeform Submissions",
  description: "FormReply watches your Typeform and drafts a personalized email reply for every submission — delivered to your inbox in seconds. Review and send. $9/month.",
  keywords: [
    "typeform auto reply",
    "typeform email reply",
    "typeform contact form automation",
    "typeform webhook email notification",
    "contact form ai reply",
    "typeform follow up email",
    "ai email drafting",
    "contact form automation",
  ],
  alternates: {
    canonical: APP_URL,
  },
  openGraph: {
    title: "FormReply — AI Reply Drafts for Typeform Submissions",
    description: "Stop writing contact form replies from scratch. FormReply generates a personalized draft for every Typeform submission and emails it to you in ~10 seconds.",
    type: "website",
    url: APP_URL,
    siteName: "FormReply",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FormReply — AI replies to your contact form submissions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FormReply — AI Reply Drafts for Typeform Submissions",
    description: "Typeform submission → personalized reply draft in your inbox in 10 seconds. Review, send. $9/month.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
