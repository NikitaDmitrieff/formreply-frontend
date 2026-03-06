import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://formreply-frontend.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: "FormReply — AI replies to your Typeform contact form submissions",
  description: "AI drafts personalized email replies to every Typeform or Webflow contact form submission and delivers them to your inbox in 15 seconds. Stop copy-pasting. Start replying faster.",
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
    title: "FormReply — AI replies to your Typeform submissions",
    description: "Connect your Typeform or Webflow form. Every submission gets an AI-drafted reply delivered to your inbox in 15 seconds.",
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
    title: "FormReply — AI replies to your Typeform contact form submissions",
    description: "Stop manually drafting replies to every form submission. FormReply sends AI-drafted replies to your inbox in 15 seconds.",
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
