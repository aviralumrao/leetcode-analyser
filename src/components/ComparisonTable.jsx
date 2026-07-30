export default function ComparisonTable({ profile1, profile2 }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-4 sm:p-6">
      <h2 className="mb-5 text-xl font-semibold text-neutral-100">Comparison Table</h2>

      <div className="overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm text-neutral-300">
          <thead className="bg-black/20 text-neutral-400">
            <tr>
              <th className="p-3 font-medium">Metric</th>
              <th className="p-3 font-medium">{profile1.username}</th>
              <th className="p-3 font-medium">{profile2.username}</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Solved</td>
              <td className="p-3">{profile1.totalSolved}</td>
              <td className="p-3">{profile2.totalSolved}</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Easy</td>
              <td className="p-3">{profile1.easySolved}</td>
              <td className="p-3">{profile2.easySolved}</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Medium</td>
              <td className="p-3">{profile1.mediumSolved}</td>
              <td className="p-3">{profile2.mediumSolved}</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Hard</td>
              <td className="p-3">{profile1.hardSolved}</td>
              <td className="p-3">{profile2.hardSolved}</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Ranking</td>
              <td className="p-3">{profile1.ranking}</td>
              <td className="p-3">{profile2.ranking}</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Badges</td>
              <td className="p-3">{profile1.badgesCount}</td>
              <td className="p-3">{profile2.badgesCount}</td>
            </tr>

            <tr className="border-t border-white/10">
              <td className="p-3 font-medium text-neutral-100">Contest Rating</td>
              <td className="p-3">{profile1.contestRating}</td>
              <td className="p-3">{profile2.contestRating}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}