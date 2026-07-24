"use client";

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
