export default function BadgeCard({ icon, name }) {
  return (
    <div className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-neutral-900/70 p-4">
      <img src={icon} alt={name} className="h-12 w-12 shrink-0 object-contain" />
      <p className="text-sm font-medium text-white">{name}</p>
    </div>
  );
}