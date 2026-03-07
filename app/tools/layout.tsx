import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools for Contact Form Management | FormReply",
  description:
    "Free tools to manage your contact form submissions — spam checker, reply generator, and more. No signup required.",
  alternates: {
    canonical: "https://formreply.app/tools",
  },
  openGraph: {
    title: "Free Tools for Contact Form Management | FormReply",
    description:
      "Free tools to manage your contact form submissions — spam checker, reply generator, and more.",
    type: "website",
    url: "https://formreply.app/tools",
    siteName: "FormReply",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
