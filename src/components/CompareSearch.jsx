export default function CompareSearch({
  user1,
  setUser1,
  user2,
  setUser2,
  handleCompare,
  loading,
}) {
  return (
    <div className="mb-8 rounded-xl bg-neutral-900 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Enter first username"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          className="rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none"
        />

        <input
          type="text"
          placeholder="Enter second username"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          className="rounded-lg bg-neutral-800 px-4 py-3 text-neutral-100 placeholder-neutral-500 focus:outline-none"
        />
      </div>

      <button
        onClick={handleCompare}
        disabled={loading}
        className="mt-4 rounded-lg bg-blue-600 px-10 py-2 text-white hover:bg-blue-500 disabled:opacity-50"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}