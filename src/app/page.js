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

        <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <ProfileCard />
          <StatsCard />
        </div>
      </main>
    </>
  );
}
