const logs = [
  {
    time: "21:48",
    event: "auth-service deployed",
    status: "success",
  },
  {
    time: "21:46",
    event: "Docker image pushed",
    status: "success",
  },
  {
    time: "21:44",
    event: "GitHub Action completed",
    status: "success",
  },
  {
    time: "21:41",
    event: "Prometheus scrape healthy",
    status: "success",
  },
];

export default function ActivityFeed() {
  return (
    <div className="bg-[#111827]/80 rounded-3xl border border-slate-800 p-6 h-full">

      <h2 className="text-xl font-bold mb-6">
        Live Activity Stream
      </h2>

      <div className="space-y-4">

        {logs.map((log, index) => (
          <div
            key={index}
            className="flex items-start gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-green-400 mt-2" />

            <div>
              <p className="font-medium">
                {log.event}
              </p>

              <span className="text-xs text-slate-400">
                {log.time}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
