const logs = [
  {
    title: "auth-service deployed",
    time: "21:48",
  },
  {
    title: "Docker image pushed",
    time: "21:46",
  },
  {
    title: "GitHub Action completed",
    time: "21:44",
  },
  {
    title: "Prometheus scrape healthy",
    time: "21:41",
  },
];

export default function ActivityFeed() {
  return (
    <div
      className="
      bg-[#111827]/80
      border
      border-slate-800
      rounded-3xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Live Activity Stream
      </h2>

      <div className="space-y-6">

        {logs.map((log) => (
          <div
            key={log.title}
            className="flex gap-4"
          >
            <div className="w-3 h-3 rounded-full bg-green-400 mt-2" />

            <div>
              <p>{log.title}</p>

              <span className="text-slate-400 text-sm">
                {log.time}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
