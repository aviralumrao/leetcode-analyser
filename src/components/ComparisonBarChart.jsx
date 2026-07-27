"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

export default function ComparisonBarChart({ profile1, profile2 }) {
  const data = [
    {
      difficulty: "Easy",
      [profile1.username]: profile1.easySolved,
      [profile2.username]: profile2.easySolved,
    },
    {
      difficulty: "Medium",
      [profile1.username]: profile1.mediumSolved,
      [profile2.username]: profile2.mediumSolved,
    },
    {
      difficulty: "Hard",
      [profile1.username]: profile1.hardSolved,
      [profile2.username]: profile2.hardSolved,
    },
  ];

  return (
    <div className="mt-8 p-6 ">
      <h2 className="mb-6 text-2xl font-semibold">Difficulty Comparison</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="difficulty" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey={profile1.username} fill="#3b82f6" />

          <Bar dataKey={profile2.username} fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
