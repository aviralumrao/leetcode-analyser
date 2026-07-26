export default function ProfileCard({ profile }) {
  if (!profile) {
    return (
      <div className=" p-4">
        <h2 className="text-lg font-semibold">Profile Information</h2>
        <p className="mt-1 text-sm text-slate-600">Search User</p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-xl border bg-gray p-6 shadow">
      <div className="flex items-center gap-5">
        <img
          src={profile.avatar}
          className="h-20 w-20 rounded-full"
        />

        <div>
          <h2 className="text-2xl font-bold">{profile.username}</h2>
          <p className="text-white">Rank: {profile.ranking}</p>
          <p className="text-white">Country: {profile.country}</p>
          <p className="text-white">Reputation: {profile.reputation}</p>
        </div>
      </div>
    </div>
  );
}
