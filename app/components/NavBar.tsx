"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a
            href="#try-demo"
            className="text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors hidden sm:block"
          >
            Try it
          </a>
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
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="sm:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden border-t border-gray-100 mt-3 pt-3 pb-1 max-w-5xl mx-auto flex flex-col gap-2">
          <a
            href="#try-demo"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 transition-colors"
          >
            Try it
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 transition-colors"
          >
            How it works
          </a>
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 transition-colors"
          >
            Pricing
          </a>
        </div>
      )}
    </nav>
  );
}
