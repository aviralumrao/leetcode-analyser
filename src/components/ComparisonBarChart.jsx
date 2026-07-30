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
    <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-4 sm:p-6">
      <h2 className="mb-5 text-xl font-semibold text-neutral-100">Difficulty Comparison</h2>

      <div className="h-[320px] rounded-2xl border border-white/10 bg-black/20 p-2 sm:h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2f2f2f" />
            <XAxis dataKey="difficulty" tick={{ fill: "#a3a3a3" }} />
            <YAxis tick={{ fill: "#a3a3a3" }} />
            <Tooltip
              contentStyle={{ background: "#171717", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}
              labelStyle={{ color: "#e5e5e5" }}
            />
            <Legend wrapperStyle={{ color: "#a3a3a3" }} />
            <Bar dataKey={profile1.username} fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey={profile2.username} fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}