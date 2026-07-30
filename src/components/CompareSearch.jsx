export default function CompareSearch({
  user1,
  setUser1,
  user2,
  setUser2,
  handleCompare,
  loading,
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-4 sm:p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Enter first username"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none"
        />

        <input
          type="text"
          placeholder="Enter second username"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 outline-none"
        />
      </div>

      <button
        onClick={handleCompare}
        disabled={loading}
        className="mt-4 rounded-2xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Searching..." : "Compare"}
      </button>
    </div>
  );
}