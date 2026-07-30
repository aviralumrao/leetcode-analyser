export default function StatsCard({ title, value }) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-neutral-900/70 p-5 text-left">
      <p className="text-sm font-medium text-neutral-400">{title}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">{value}</h2>
    </div>
  );
}