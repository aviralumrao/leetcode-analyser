"use client";
import { Search } from "lucide-react";

export default function SearchBar({
  username,
  setUsername,
  handleSearch,
  loading,
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-3 sm:p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <Search size={18} className="text-neutral-500" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter LeetCode username"
            className="w-full bg-transparent text-sm text-neutral-100 placeholder-neutral-500 outline-none"
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Search size={16} />
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
}