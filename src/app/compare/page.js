"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CompareSearch from "@/components/CompareSearch";
import ComparisonTable from "@/components/ComparisonTable";
import ComparisonBarChart from "@/components/ComparisonBarChart";
import { getUser, getUser_contest, getUser_badges } from "@/lib/api";

export default function ComparePage() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const [profile1, setProfile1] = useState(null);
  const [profile2, setProfile2] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCompare = async () => {
    if (!user1.trim() || !user2.trim()) {
      setError("Please enter both usernames.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const [data1, data2] = await Promise.all([
        getUser(user1),
        getUser(user2),
      ]);
      const [contestData1, contestData2] = await Promise.all([
        getUser_contest(user1),
        getUser_contest(user2),
      ]);
      const [badgesData1, badgesData2] = await Promise.all([
        getUser_badges(user1),
        getUser_badges(user2),
      ]);

      setProfile1({
        username: user1,
        ...data1,
        contestRating: contestData1.contestRating,
        badgesCount: badgesData1.badgesCount,
      });

      setProfile2({
        username: user2,
        ...data2,
        contestRating: contestData2.contestRating,
        badgesCount: badgesData2.badgesCount,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to fetch user data.");
      setProfile1(null);
      setProfile2(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-[28px] border border-white/10 bg-neutral-900/70 p-6 sm:p-8">
          <div className="max-w-2xl">
            {" "}
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Put two profiles side by side and see the difference.
            </h1>
          </div>
        </section>

        <CompareSearch
          user1={user1}
          setUser1={setUser1}
          user2={user2}
          setUser2={setUser2}
          handleCompare={handleCompare}
          loading={loading}
        />

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {profile1 && profile2 && (
          <>
            <ComparisonTable profile1={profile1} profile2={profile2} />
            <ComparisonBarChart profile1={profile1} profile2={profile2} />
          </>
        )}
      </main>
    </>
  );
}
