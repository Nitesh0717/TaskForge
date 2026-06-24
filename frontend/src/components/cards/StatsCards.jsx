import {
  Server,
  CheckCircle,
  Rocket,
  GitBranch,
} from "lucide-react";

const cards = [
  {
    title: "Running Pods",
    value: "12",
    icon: Server,
    color: "text-cyan-400",
  },
  {
    title: "Healthy Services",
    value: "5",
    icon: CheckCircle,
    color: "text-green-400",
  },
  {
    title: "Deployments",
    value: "8",
    icon: Rocket,
    color: "text-purple-400",
  },
  {
    title: "Pipeline Success",
    value: "100%",
    icon: GitBranch,
    color: "text-yellow-400",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="
            bg-[#111827]/80
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-6
            hover:border-cyan-500/50
            hover:scale-[1.02]
            transition-all
          "
        >
          <card.icon
            size={34}
            className={card.color}
          />

          <p className="text-slate-400 mt-4">
            {card.title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
