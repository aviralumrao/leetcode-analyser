import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import ProfileCard from "@/components/ProfileCard";
import StatsCard from "@/components/StatsCard";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="">
        <SearchBar/>

        <ProfileCard />

        <div>
          <StatsCard />
        </div>
      </main>
    </>
  );
}
