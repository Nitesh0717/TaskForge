import {
  Activity,
  AlertTriangle,
  Cpu,
  HardDrive,
  Network,
  ShieldCheck,
} from "lucide-react";

const alerts = [
  {
    title: "High CPU Usage",
    severity: "Warning",
    time: "2 min ago",
  },
  {
    title: "Memory Spike Detected",
    severity: "Critical",
    time: "8 min ago",
  },
  {
    title: "Prometheus Scrape Delay",
    severity: "Info",
    time: "15 min ago",
  },
];

export default function Monitoring() {
  return (
    <div className="p-8 space-y-8">

      <div
        className="
        rounded-3xl
        p-8
        bg-gradient-to-r
        from-green-600/20
        via-cyan-600/20
        to-blue-600/20
        border
        border-slate-800
        "
      >
        <h1 className="text-5xl font-black">
          Monitoring Center
        </h1>

        <p className="text-slate-400 mt-3">
          Prometheus, Grafana and AlertManager observability dashboard.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          icon={<ShieldCheck size={28} />}
          title="Prometheus"
          value="Healthy"
        />

        <StatCard
          icon={<Activity size={28} />}
          title="Grafana"
          value="Online"
        />

        <StatCard
          icon={<AlertTriangle size={28} />}
          title="Active Alerts"
          value="3"
        />

        <StatCard
          icon={<Network size={28} />}
          title="Targets"
          value="12"
        />

      </div>

      <div className="grid grid-cols-3 gap-6">

        <MetricCard
          title="CPU Usage"
          value="68%"
          icon={<Cpu size={24} />}
          width="68%"
        />

        <MetricCard
          title="Memory Usage"
          value="42%"
          icon={<HardDrive size={24} />}
          width="42%"
        />

        <MetricCard
          title="Network Traffic"
          value="81%"
          icon={<Network size={24} />}
          width="81%"
        />

      </div>

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
          Alert Manager
        </h2>

        <div className="space-y-4">

          {alerts.map((alert) => (
            <div
              key={alert.title}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-4
              flex
              justify-between
              items-center
              "
            >
              <div>
                <h3 className="font-semibold">
                  {alert.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {alert.time}
                </p>
              </div>

              <span className="text-cyan-400">
                {alert.severity}
              </span>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

function StatCard({ icon, title, value }) {
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
      <div className="text-cyan-400">
        {icon}
      </div>

      <p className="text-slate-400 mt-3">
        {title}
      </p>

      <h2 className="text-3xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

function MetricCard({
  title,
  value,
  icon,
  width,
}) {
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
      <div className="flex items-center gap-3">

        <div className="text-cyan-400">
          {icon}
        </div>

        <h3 className="font-semibold">
          {title}
        </h3>

      </div>

      <h2 className="text-4xl font-black mt-5">
        {value}
      </h2>

      <div className="w-full h-3 bg-slate-800 rounded-full mt-4">
        <div
          className="h-3 rounded-full bg-cyan-400"
          style={{ width }}
        />
      </div>
    </div>
  );
}
