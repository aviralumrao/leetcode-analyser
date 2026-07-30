"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <div>
            <p className="text-base font-semibold tracking-tight text-neutral-100">
              LeetCode Analyser
            </p>
            <p className="text-xs text-neutral-500">Track your progress</p>
          </div>
        </a>

        <Link href="/compare">
          <button className="rounded-full border border-blue-500/30 bg-blue-600/90 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500">
            Compare Users
          </button>
        </Link>
      </div>
    </nav>
  );
}