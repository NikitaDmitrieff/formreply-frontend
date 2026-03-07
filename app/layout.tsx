import type { Metadata } from "next";
import "./globals.css";

const APP_URL = "https://formreply.app";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: "FormReply — AI Reply Drafts for Form Submissions",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  description: "FormReply watches your Typeform, Webflow, and Google Forms submissions and drafts a personalized email reply — delivered to your inbox in seconds. Start free (5 replies/mo), then $19/month.",
  keywords: [
    "typeform auto reply",
    "typeform email reply",
    "typeform contact form automation",
    "typeform webhook email notification",
    "contact form ai reply",
    "typeform follow up email",
    "google forms auto reply",
    "webflow form automation",
    "ai email drafting",
    "contact form automation",
  ],
  alternates: {
    canonical: APP_URL,
  },
  openGraph: {
    title: "FormReply — AI Reply Drafts for Form Submissions",
    description: "Stop writing contact form replies from scratch. FormReply generates a personalized draft for every Typeform, Webflow, and Google Forms submission and emails it to you in ~10 seconds.",
    type: "website",
    url: APP_URL,
    siteName: "FormReply",
  },
  twitter: {
    card: "summary_large_image",
    title: "FormReply — AI Reply Drafts for Form Submissions",
    description: "Form submission → personalized reply draft in your inbox in 10 seconds. Works with Typeform, Webflow, and Google Forms. Start free, then $19/month.",
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  if (/bot|crawler/i.test(navigator.userAgent)) return;
  var payload = JSON.stringify({
    path: window.location.pathname,
    referrer: document.referrer || null,
    user_agent: navigator.userAgent
  });
  var url = "https://formreply-backend-production.up.railway.app/analytics";
  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, new Blob([payload], { type: "application/json" }));
  } else {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true
    });
  }
})();
`,
          }}
        />
      </body>
    </html>
  );
}
