"use client";
import { Search } from "lucide-react";

export default function SearchBar({
  username,
  setUsername,
  handleSearch,
  loading,
}) {
  return (
    <div className="flex justify-center gap-2 py-4">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter LeetCode username"
        className="w-full max-w-xl rounded-full bg-neutral-900 px-4 py-2 text-neutral-100 placeholder-neutral-500 focus:outline-none"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500 disabled:opacity-50"
      >
        <Search size={16} />
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}