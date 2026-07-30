"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";
import Footer from "@/components/Footer";
import DifficultyPieChart from "@/components/DifficultyPieChart";
import BadgeCard from "@/components/BadgeCard";
import { useState } from "react";
import { getUser, getUser_contest, getUser_badges } from "@/lib/api";

export default function Home() {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [contest, setProfileContest] = useState(null);
  const [badges, setProfileBadges] = useState(null);
  const [error, setError] = useState("");

  async function handleSearch() {
    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }

    setLoading(true);
    setError("");
    setProfile(null);
    setProfileContest(null);
    setProfileBadges(null);

    try {
      const user_data = await getUser(username);
      const user_contest_data = await getUser_contest(username);
      const user_badges_data = await getUser_badges(username);
      setProfile(user_data);
      setProfileContest(user_contest_data);
      setProfileBadges(user_badges_data);
      console.log(user_data);
      console.log(user_contest_data);
      console.log(user_badges_data);
    } catch (err) {
      setError("Unable to fetch user data.");
      setProfile(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <SearchBar
          username={username}
          setUsername={setUsername}
          handleSearch={handleSearch}
          loading={loading}
        />

        {error && (
          <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <ProfileCard profile={profile} />

        {profile && (
          <>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                  Questions Solving Data
                </h3>
                <div className="space-y-3">
                  <StatsCard title="Total Solved" value={profile.totalSolved} />
                  <StatsCard title="Easy" value={profile.easySolved} />
                  <StatsCard title="Medium" value={profile.mediumSolved} />
                  <StatsCard title="Hard" value={profile.hardSolved} />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                  Contests
                </h3>
                <div className="space-y-3">
                  <StatsCard
                    title="Contest Attended"
                    value={contest.contestAttend}
                  />
                  <StatsCard
                    title="Contest Rating"
                    value={contest.contestRating}
                  />
                  <StatsCard
                    title="Contest Global Ranking"
                    value={contest.contestGLobalRating}
                  />
                  <StatsCard
                    title="Contest Badges"
                    value={contest.contestBadges}
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-400">
                  Badges
                </h3>
                <div className="space-y-3">
                  <StatsCard title="Total Badges" value={badges.badgesCount} />
                  {badges.badges.map((badge) => (
                    <BadgeCard
                      key={badge.id}
                      icon={badge.icon}
                      name={badge.displayName}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-4 sm:p-6">
              <DifficultyPieChart profile={profile} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
