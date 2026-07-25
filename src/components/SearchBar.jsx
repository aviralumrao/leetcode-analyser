"use client";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex justify-center py-1 gap-2">
      <input
        type="text"
        placeholder="Enter LeetCode username..."
        className="w-2xl border rounded-full px-3 py-2"
      />

      <button className="flex items-center gap-2 rounded bg-gray-800 px-3 py-2 text-white">
        <Search size={16} />
        <span>Search</span>
      </button>
    </div>
  );
}
