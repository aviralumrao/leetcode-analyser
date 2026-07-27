export default function StatsCard({ title, value }) {
  return (
    <div className="rounded-xl border bg-gray-800 p-6 shadow text-center">
      <h2 className="text-3xl font-bold">
        {value}
      </h2>

      <p className="mt-2 text-white-500">
        {title}
      </p>
    </div>
  );
}