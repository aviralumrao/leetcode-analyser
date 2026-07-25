import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 sm:px-6 lg:px-8">
        <SearchBar />
        <ProfileCard />

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </main>
    </>
  );
}
