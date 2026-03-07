"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/10 transition-all duration-200 ${
        scrolled ? "py-2.5" : "py-4"
      } px-6`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-white tracking-tight"
        >
          <Image src="/logo.png" alt="FormReply" width={28} height={28} />
          <span>FormReply</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/tools/reply-generator"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors hidden sm:block"
          >
            Free tools
          </Link>
          <Link
            href="/demo"
            className="text-white/70 hover:text-white text-sm font-medium transition-colors hidden sm:block"
          >
            See demo
          </Link>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </div>
    </nav>
  );
}
