export default function StatsCard({ title, value }) {
  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-amber-50">
        {title}
      </h3>
      <p className="mt-2 text-amber-100">{value}</p>
    </div>
  );
}
