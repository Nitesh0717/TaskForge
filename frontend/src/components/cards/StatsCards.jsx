import {
  Server,
  CheckCircle2,
  Rocket,
  GitBranch,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Running Pods",
    value: "12",
    trend: "+2 today",
    icon: Server,
    iconColor: "text-cyan-400",
    glow: "from-cyan-500/20 to-blue-500/5",
  },
  {
    title: "Healthy Services",
    value: "5",
    trend: "100% healthy",
    icon: CheckCircle2,
    iconColor: "text-green-400",
    glow: "from-green-500/20 to-emerald-500/5",
  },
  {
    title: "Deployments",
    value: "8",
    trend: "+3 this week",
    icon: Rocket,
    iconColor: "text-purple-400",
    glow: "from-purple-500/20 to-pink-500/5",
  },
  {
    title: "Pipeline Success",
    value: "100%",
    trend: "No failures",
    icon: GitBranch,
    iconColor: "text-yellow-400",
    glow: "from-yellow-500/20 to-orange-500/5",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`
            relative
            overflow-hidden
            rounded-3xl
            border
            border-slate-800
            bg-[#111827]/80
            backdrop-blur-xl
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-500/40
            hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
          `}
        >
          <div
            className={`
              absolute
              inset-0
              opacity-40
              bg-gradient-to-br
              ${card.glow}
            `}
          />

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-slate-900
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                "
              >
                <card.icon
                  size={28}
                  className={card.iconColor}
                />
              </div>

              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp size={14} />
                <span>Live</span>
              </div>
            </div>

            <p className="text-slate-400 mt-5 text-sm">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {card.value}
            </h2>

            <div className="mt-4">
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"
                  style={{ width: "80%" }}
                />
              </div>

              <p className="text-xs text-slate-400 mt-2">
                {card.trend}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
