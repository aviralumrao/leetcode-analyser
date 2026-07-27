"use client";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

export default function DifficultyPieChart({ profile }) {
  if (!profile) {
    return (
      <div className="mt-10 rounded-xl border bg-white p-6 shadow">
        <h2 className="text-xl font-semibold">Difficulty Breakdown</h2>

        <p className="mt-3 text-gray-500">Search a user to view the chart.</p>
      </div>
    );
  }

  const data = [
    {
      name: "Easy",
      value: profile.easySolved,
    },
    {
      name: "Medium",
      value: profile.mediumSolved,
    },
    {
      name: "Hard",
      value: profile.hardSolved,
    },
  ];

  return (
    <div className="mt-10 rounded-xl border bg-grey p-6 shadow">
      <h2 className="mb-6 text-xl font-semibold">Difficulty Breakdown</h2>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
