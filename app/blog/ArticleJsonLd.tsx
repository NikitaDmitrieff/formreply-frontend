"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ArticleJsonLd() {
  const pathname = usePathname();
  const [title, setTitle] = useState("");

  useEffect(() => {
    setTitle(document.title);
  }, []);

  if (!pathname || pathname === "/blog" || !title) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title.replace(" — FormReply", ""),
    author: {
      "@type": "Organization",
      name: "FormReply",
      url: "https://formreply.app",
    },
    publisher: {
      "@type": "Organization",
      name: "FormReply",
      url: "https://formreply.app",
    },
    url: `https://formreply.app${pathname}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://formreply.app${pathname}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
