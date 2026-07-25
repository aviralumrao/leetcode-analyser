"use client";
import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Enter LeetCode username..." />

      <button>
        <Search /> Search
      </button>
    </div>
  );
}
