"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import CompareSearch from "@/components/CompareSearch";
import ComparisonTable from "@/components/ComparisonTable";
import ComparisonBarChart from "@/components/ComparisonBarChart";
import { getUser } from "@/lib/api";

export default function ComparePage() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");

  const [profile1, setProfile1] = useState(null);
  const [profile2, setProfile2] = useState(null);

  const [contest1, setProfileContest1] = useState(null);
  const [badges1, setProfileBadges1] = useState(null);
  const [contest2, setProfileContest2] = useState(null);
  const [badges2, setProfileBadges2] = useState(null);

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

      setProfile1({ username: user1, data: data1 });
      setProfileContest1({ username: user1, contest: contestData1 });
      setProfileBadges1({ username: user1, badges: badgesData1 });

      setProfile2({ username: user2, data: data2 });
      setProfileContest2({ username: user2, contest: contestData2 });
      setProfileBadges2({ username: user2, badges: badgesData2 });

      console.log(data1, contestData1, badgesData1);
      console.log(data2, contestData2, badgesData2);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch user data.");
      setProfile1(null);
      setProfile2(null);
      setProfileContest1(null);
      setProfileContest2(null);
      setProfileBadges1(null);
      setProfileBadges2(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 text-center text-4xl font-bold">Compare Users</h1>

          <CompareSearch
            user1={user1}
            setUser1={setUser1}
            user2={user2}
            setUser2={setUser2}
            handleCompare={handleCompare}
            loading={loading}
          />

          {profile1 && profile2 && (
            <>
              <ComparisonTable profile1={profile1} profile2={profile2} />

              <ComparisonBarChart profile1={profile1} profile2={profile2} />
            </>
          )}
        </div>
      </main>
    </>
  );
}
