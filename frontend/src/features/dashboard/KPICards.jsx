const cards = [
  {
    title: "Running Pods",
    value: 12,
    color: "text-cyan-400",
  },
  {
    title: "Healthy Services",
    value: 5,
    color: "text-green-400",
  },
  {
    title: "Deployments",
    value: 8,
    color: "text-violet-400",
  },
  {
    title: "Pipeline Success",
    value: "100%",
    color: "text-sky-400",
  },
];

export default function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6 hover:border-violet-500 transition"
        >
          <p className="text-slate-400">
            {card.title}
          </p>

          <h2 className={`text-5xl font-bold mt-3 ${card.color}`}>
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
