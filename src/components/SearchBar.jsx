"use client";
import { Search } from "lucide-react";

export default function SearchBar({
  username,
  setUsername,
  handleSearch,
  loading,
}) {
  return (
    <div className="flex justify-center py-1 gap-2">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter LeetCode username"
        className="w-2xl border rounded-full px-3 py-2"
      />

      <button
        onClick={handleSearch}
        disabled={loading}
        className="flex items-center gap-2 rounded bg-gray-800 px-3 py-2 text-white"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
