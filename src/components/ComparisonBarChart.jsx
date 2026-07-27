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
    <div className="mt-8 rounded-xl bg-neutral-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-neutral-100">Difficulty Comparison</h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
          <XAxis dataKey="difficulty" tick={{ fill: "#a3a3a3" }} />
          <YAxis tick={{ fill: "#a3a3a3" }} />
          <Tooltip
            contentStyle={{ background: "#171717", border: "none", borderRadius: "8px" }}
            labelStyle={{ color: "#e5e5e5" }}
          />
          <Legend wrapperStyle={{ color: "#a3a3a3" }} />
          <Bar dataKey={profile1.username} fill="#3b82f6" radius={[4, 4, 0, 0]} />
          <Bar dataKey={profile2.username} fill="#22c55e" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}