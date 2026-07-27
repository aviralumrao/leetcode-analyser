export default function ProfileCard({ profile }) {
  if (!profile) {
    return (
      <div className="p-4">
        <h2 className="text-lg font-semibold text-neutral-100">Profile Information</h2>
        <p className="mt-1 text-sm text-neutral-500">Search User</p>
      </div>
    );
  }

  return (
    <div className="mt-10 rounded-xl bg-neutral-900 p-6">
      <div className="flex items-center gap-5">
        <img src={profile.avatar} className="h-20 w-20 rounded-full" />

        <div>
          <h2 className="text-2xl font-bold text-neutral-100">{profile.username}</h2>
          <p className="text-neutral-400">Rank: {profile.ranking}</p>
          <p className="text-neutral-400">Country: {profile.country}</p>
          <p className="text-neutral-400">Reputation: {profile.reputation}</p>
        </div>
      </div>
    </div>
  );
}