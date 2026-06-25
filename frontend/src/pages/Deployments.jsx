import {
  Rocket,
  CheckCircle,
  Clock,
  Container,
} from "lucide-react";

const deployments = [
  {
    service: "auth-service",
    image: "taskforge/auth:v1.8.2",
    replicas: "2/2",
    status: "Healthy",
    version: "v1.8.2",
  },
  {
    service: "task-service",
    image: "taskforge/task:v2.1.0",
    replicas: "3/3",
    status: "Healthy",
    version: "v2.1.0",
  },
  {
    service: "notification-service",
    image: "taskforge/notification:v1.4.5",
    replicas: "1/1",
    status: "Healthy",
    version: "v1.4.5",
  },
];

export default function Deployments() {
  return (
    <div className="p-8 space-y-8">

      <div
        className="
        rounded-3xl
        p-8
        bg-gradient-to-r
        from-cyan-600/20
        via-purple-600/20
        to-indigo-600/20
        border
        border-slate-800
        "
      >
        <h1 className="text-5xl font-black">
          Deployments Center
        </h1>

        <p className="text-slate-400 mt-3">
          Manage Kubernetes deployments, rollouts and versions.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">

        <StatCard
          title="Active Deployments"
          value="8"
          icon={<Rocket size={28} />}
        />

        <StatCard
          title="Healthy Services"
          value="5"
          icon={<CheckCircle size={28} />}
        />

        <StatCard
          title="Pending Rollouts"
          value="1"
          icon={<Clock size={28} />}
        />

      </div>

      <div className="grid grid-cols-3 gap-6">

        {deployments.map((item) => (
          <div
            key={item.service}
            className="
            bg-[#111827]/80
            border
            border-slate-800
            rounded-3xl
            p-6
            hover:border-cyan-500/40
            transition-all
            "
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <Container
                  size={28}
                  className="text-cyan-400"
                />

                <h2 className="font-bold text-lg">
                  {item.service}
                </h2>
              </div>

              <span className="text-green-400">
                ● {item.status}
              </span>
            </div>

            <div className="mt-6 space-y-3">

              <Info
                label="Image"
                value={item.image}
              />

              <Info
                label="Replicas"
                value={item.replicas}
              />

              <Info
                label="Version"
                value={item.version}
              />

            </div>

            <div className="mt-6 flex gap-3">

              <button
                className="
                flex-1
                bg-cyan-500
                text-black
                font-semibold
                py-3
                rounded-xl
                "
              >
                Rollout
              </button>

              <button
                className="
                flex-1
                border
                border-slate-700
                rounded-xl
                py-3
                "
              >
                Logs
              </button>

            </div>
          </div>
        ))}

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
          Deployment History
        </h2>

        <table className="w-full">
          <thead>
            <tr className="text-slate-400 border-b border-slate-800">
              <th className="text-left py-3">Service</th>
              <th className="text-left py-3">Version</th>
              <th className="text-left py-3">Time</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-b border-slate-900">
              <td className="py-4">auth-service</td>
              <td>v1.8.2</td>
              <td>21:47</td>
              <td className="text-green-400">
                Success
              </td>
            </tr>

            <tr className="border-b border-slate-900">
              <td className="py-4">task-service</td>
              <td>v2.1.0</td>
              <td>21:45</td>
              <td className="text-green-400">
                Success
              </td>
            </tr>

            <tr>
              <td className="py-4">notification-service</td>
              <td>v1.4.5</td>
              <td>21:43</td>
              <td className="text-green-400">
                Success
              </td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}

function StatCard({ title, value, icon }) {
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

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="text-slate-400">
        {label}
      </span>

      <span>{value}</span>
    </div>
  );
}
