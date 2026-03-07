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
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-200 ${
        scrolled
          ? "bg-white/90 border-gray-200 py-2.5 shadow-sm"
          : "bg-white/70 border-transparent py-4"
      } px-6`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-gray-900 tracking-tight"
        >
          <Image src="/logo.png" alt="FormReply" width={28} height={28} />
          <span>FormReply</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/demo"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors hidden sm:block"
          >
            Demo
          </Link>
          <a
            href="#how-it-works"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors hidden sm:block"
          >
            How it works
          </a>
          <a
            href="#pricing"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors hidden sm:block"
          >
            Pricing
          </a>
          <Link
            href="/onboarding"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start free
          </Link>
        </div>
      </div>
    </nav>
  );
}
