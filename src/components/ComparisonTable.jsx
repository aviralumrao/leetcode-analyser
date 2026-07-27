export default function ComparisonTable({ profile1, profile2 }) {
  return (
    <div className="mt-8 p-6 ">
      <h2 className="mb-6 text-2xl font-semibold">
        Comparison Table
      </h2>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th className="p-3">Metric</th>
            <th className="p-3">{profile1.username}</th>
            <th className="p-3">{profile2.username}</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-3 font-medium">Solved</td>
            <td>{profile1.totalSolved}</td>
            <td>{profile2.totalSolved}</td>
          </tr>

          <tr className="border-b">
            <td className="p-3 font-medium">Easy</td>
            <td>{profile1.easySolved}</td>
            <td>{profile2.easySolved}</td>
          </tr>

          <tr className="border-b">
            <td className="p-3 font-medium">Medium</td>
            <td>{profile1.mediumSolved}</td>
            <td>{profile2.mediumSolved}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium">Hard</td>
            <td>{profile1.hardSolved}</td>
            <td>{profile2.hardSolved}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium">Ranking</td>
            <td>{profile1.ranking}</td>
            <td>{profile2.ranking}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium">Badges</td>
            <td>{badgesData1.badgesCount}</td>
            <td>{badgesData2.badgesCount}</td>
          </tr>

          <tr>
            <td className="p-3 font-medium">Ranking</td>
            <td>{contestData1.contestRating}</td>
            <td>{contestData2.contestRating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}