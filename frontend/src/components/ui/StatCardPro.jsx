import GlassCard from "./GlassCard";

export default function StatCardPro({
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <GlassCard className="p-6">

      <div className="flex items-center justify-between">

        <div className="text-cyan-400">
          {icon}
        </div>

        <span className="text-green-400 text-sm">
          Live
        </span>

      </div>

      <p className="text-slate-400 mt-4">
        {title}
      </p>

      <h2 className="text-4xl font-black mt-2">
        {value}
      </h2>

      <div className="mt-5">
        <div className="w-full h-2 rounded-full bg-slate-800">
          <div className="w-3/4 h-2 rounded-full bg-cyan-400" />
        </div>
      </div>

      <p className="text-xs text-slate-500 mt-2">
        {subtitle}
      </p>

    </GlassCard>
  );
}
