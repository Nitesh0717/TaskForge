const alerts = [
  {
    level: "INFO",
    message: "Deployment completed",
  },
  {
    level: "WARNING",
    message: "CPU usage above 75%",
  },
  {
    level: "INFO",
    message: "Redis connected",
  },
];

export default function Alerts() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6 h-full">

      <div className="flex justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Alerts
        </h2>

        <span className="text-yellow-400">
          3 Active
        </span>

      </div>

      <div className="space-y-4">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl p-4 border border-slate-800"
          >
            <div className="text-xs text-cyan-400">
              {alert.level}
            </div>

            <div className="mt-1">
              {alert.message}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}
