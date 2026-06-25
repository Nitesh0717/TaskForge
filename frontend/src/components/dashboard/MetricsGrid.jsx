const metrics = [
  {
    title: "Requests",
    value: "24K",
    change: "+18%",
  },
  {
    title: "Latency",
    value: "38ms",
    change: "-12%",
  },
  {
    title: "Errors",
    value: "0.02%",
    change: "-8%",
  },
  {
    title: "Uptime",
    value: "99.98%",
    change: "+0.1%",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">

      {metrics.map((metric) => (
        <div
          key={metric.title}
          className="
            bg-[#111827]/80
            backdrop-blur-xl
            border
            border-slate-800
            rounded-3xl
            p-5
            hover:border-cyan-500/40
            hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]
            transition-all
          "
        >
          <p className="text-slate-400 text-sm">
            {metric.title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {metric.value}
          </h2>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-green-400 text-sm">
              {metric.change}
            </span>

            <div className="w-16 h-2 rounded-full bg-slate-800">
              <div className="w-12 h-2 rounded-full bg-cyan-400" />
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}
