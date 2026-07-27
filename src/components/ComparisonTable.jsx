export default function ComparisonTable({ profile1, profile2 }) {
  return (
    <div className="mt-8 rounded-xl bg-neutral-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-neutral-100">Comparison Table</h2>

      <table className="w-full text-center text-neutral-300">
        <thead>
          <tr className="text-neutral-500">
            <th className="p-3 font-normal">Metric</th>
            <th className="p-3 font-normal">{profile1.username}</th>
            <th className="p-3 font-normal">{profile2.username}</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-3 font-medium text-neutral-100">Solved</td>
            <td>{profile1.totalSolved}</td>
            <td>{profile2.totalSolved}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium text-neutral-100">Easy</td>
            <td>{profile1.easySolved}</td>
            <td>{profile2.easySolved}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium text-neutral-100">Medium</td>
            <td>{profile1.mediumSolved}</td>
            <td>{profile2.mediumSolved}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium text-neutral-100">Hard</td>
            <td>{profile1.hardSolved}</td>
            <td>{profile2.hardSolved}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium text-neutral-100">Ranking</td>
            <td>{profile1.ranking}</td>
            <td>{profile2.ranking}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium text-neutral-100">Badges</td>
            <td>{badgesData1.badgesCount}</td>
            <td>{badgesData2.badgesCount}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium text-neutral-100">Contest Rating</td>
            <td>{contestData1.contestRating}</td>
            <td>{contestData2.contestRating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}