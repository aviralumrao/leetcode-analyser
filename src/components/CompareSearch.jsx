export default function CompareSearch({
  user1,
  setUser1,
  user2,
  setUser2,
  handleCompare,
  loading,
}) {
  return (
    <div className="mb-8 p-6 ">

      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Enter first username"
          value={user1}
          onChange={(e) => setUser1(e.target.value)}
          className="rounded-lg border px-4 py-3"
        />

        <input
          type="text"
          placeholder="Enter second username"
          value={user2}
          onChange={(e) => setUser2(e.target.value)}
          className="rounded-lg border px-4 py-3"
        />
      </div>

      <button
        onClick={handleCompare}
        disabled={loading}
        className="rounded bg-gray-800 px-10 py-2 text-white"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}
