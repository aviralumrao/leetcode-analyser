"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-100 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-1 py-2">
        <a href="/" className="flex items-center gap-3">
          <div>
            <p className="text-lg font-semibold tracking-tight oklch(87% 0 none)">
              LeetCode Analyser
            </p>
            <p className="text-xs oklch(70.7% 0.022 261.325)">
              Track your progress
            </p>
          </div>
        </a>

       
        <Link href="/compare">
          <button className="rounded-full bg-blue-600 px-4 py-2 font-medium text-white" >
            Compare Users
          </button>
        </Link>
      </div>

      
    </nav>
  );
}
