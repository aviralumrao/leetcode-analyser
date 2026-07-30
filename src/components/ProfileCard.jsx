export default function ProfileCard({ profile }) {
  if (!profile) {
    return (
      <div className="rounded-[24px] border border-white/10 bg-neutral-900/60 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-dashed border-white/15 text-sm text-neutral-500">
            ?
          </div>
          <div>
            <h2 className="text-lg font-semibold text-neutral-100">Profile information</h2>
            <p className="mt-1 text-sm text-neutral-500">Search a user to see their profile here.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[24px] border border-white/10 bg-neutral-900/70 p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <img src={profile.avatar} alt={profile.username} className="h-24 w-24 rounded-full border border-white/10 object-cover" />

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">{profile.username}</h2>
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              Active profile
            </span>
          </div>
          <div className="mt-4 grid gap-3 text-sm text-neutral-400 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Rank</p>
              <p className="mt-1 font-medium text-neutral-200">{profile.ranking}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Country</p>
              <p className="mt-1 font-medium text-neutral-200">{profile.country}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">Reputation</p>
              <p className="mt-1 font-medium text-neutral-200">{profile.reputation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}