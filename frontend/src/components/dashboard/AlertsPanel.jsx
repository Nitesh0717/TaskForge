export default function AlertsPanel() {
  const alerts = [
    {
      title: "All Pods Healthy",
      color: "green",
    },
    {
      title: "CI Pipeline Passed",
      color: "cyan",
    },
    {
      title: "Monitoring Active",
      color: "indigo",
    },
  ];

  return (
    <div className="bg-[#111827]/80 rounded-3xl border border-slate-800 p-6">

      <h2 className="text-xl font-bold mb-6">
        Incident Center
      </h2>

      <div className="space-y-4">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="
              bg-slate-900
              border
              border-slate-700
              rounded-2xl
              p-4
              hover:border-cyan-400
              transition-all
            "
          >
            {alert.title}
          </div>
        ))}

      </div>

    </div>
  );
}
