export default function StatsCard({ title, value }) {
  return (
    <div className="rounded-xl bg-neutral-900 p-6 text-center">
      <h2 className="text-3xl font-bold text-neutral-100">{value}</h2>
      <p className="mt-2 text-neutral-500">{title}</p>
    </div>
  );
}