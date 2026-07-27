"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="/" className="flex items-center gap-3">
          <div>
            <p className="text-lg font-semibold tracking-tight text-neutral-100">
              LeetCode Analyser
            </p>
            <p className="text-xs text-neutral-500">
              Track your progress
            </p>
          </div>
        </a>

        <Link href="/compare">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500">
            Compare Users
          </button>
        </Link>
      </div>
    </nav>
  );
}