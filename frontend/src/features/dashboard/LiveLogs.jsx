const logs = [
  "[INFO] auth-service started",
  "[INFO] Connected to MongoDB",
  "[INFO] User login successful",
  "[WARN] CPU usage high",
  "[INFO] Notification sent",
  "[INFO] Pipeline completed",
];

export default function LiveLogs() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6 h-full">

      <div className="flex justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Live Logs
        </h2>

        <span className="text-green-400">
          ● Live
        </span>

      </div>

      <div className="space-y-3 font-mono text-sm">

        {logs.map((log, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl p-3 border border-slate-800"
          >
            {log}
          </div>
        ))}

      </div>

    </div>
  );
}
