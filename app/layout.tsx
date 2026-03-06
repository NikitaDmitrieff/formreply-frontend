import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormReply — AI replies to your contact forms",
  description: "AI drafts personalized replies to contact form submissions and delivers them to your inbox within seconds. Connect Typeform or Webflow, pay once, done.",
  openGraph: {
    title: "FormReply — AI replies to your contact forms",
    description: "AI drafts personalized replies to contact form submissions and delivers them to your inbox within seconds.",
    type: "website",
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
