"use client";

import { useState } from "react";

import { getUser } from "@/lib/api";
import Navbar from "@/components/Navbar";
import CompareSearch from "@/components/CompareSearch";

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
      setProfile1({ username: user1, ...data1 });
      setProfile2({ username: user2, ...data2 });
      console.log(data1);
      console.log(data2);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch one or both users.");
      setProfile1(null);
      setProfile2(null);
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
        </div>
      </main>
    </>
  );
}
