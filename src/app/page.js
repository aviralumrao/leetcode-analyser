"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";
import Footer from "@/components/Footer";
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

      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <SearchBar
          username={username}
          setUsername={setUsername}
          handleSearch={handleSearch}
          loading={loading}
        />
        <ProfileCard profile={profile} />

        {profile && (
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Solved" value={profile.totalSolved} />
            <StatsCard title="Ranking" value={profile.ranking} />
            <StatsCard title="Contest Rating" value={contest.contestRating} />
            <StatsCard title="Badges" value={badges.badgesCount} />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
