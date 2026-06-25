import {
  Boxes,
  Server,
  Cpu,
  HardDrive,
  Activity,
  CheckCircle,
} from "lucide-react";

const pods = [
  {
    name: "auth-service",
    status: "Running",
    cpu: "35m",
    memory: "128Mi",
  },
  {
    name: "task-service",
    status: "Running",
    cpu: "42m",
    memory: "145Mi",
  },
  {
    name: "notification-service",
    status: "Running",
    cpu: "20m",
    memory: "95Mi",
  },
];

export default function Kubernetes() {
  return (
    <div className="p-8 space-y-8">

      <div className="
        rounded-3xl
        p-8
        bg-gradient-to-r
        from-cyan-600/20
        via-blue-600/20
        to-purple-600/20
        border
        border-slate-800
      ">
        <h1 className="text-5xl font-black">
          Kubernetes Control Plane
        </h1>

        <p className="text-slate-400 mt-3">
          Monitor nodes, pods, services and cluster health.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        <StatCard
          icon={<Boxes size={28} />}
          title="Namespaces"
          value="4"
        />

        <StatCard
          icon={<Server size={28} />}
          title="Nodes"
          value="3"
        />

        <StatCard
          icon={<CheckCircle size={28} />}
          title="Healthy Pods"
          value="12"
        />

        <StatCard
          icon={<Activity size={28} />}
          title="Services"
          value="5"
        />

      </div>

      <div className="
        bg-[#111827]/80
        border
        border-slate-800
        rounded-3xl
        p-6
      ">
        <h2 className="text-2xl font-bold mb-6">
          Pod Explorer
        </h2>

        <table className="w-full">

          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="text-left py-3">Pod</th>
              <th className="text-left py-3">Status</th>
              <th className="text-left py-3">CPU</th>
              <th className="text-left py-3">Memory</th>
            </tr>
          </thead>

          <tbody>

            {pods.map((pod) => (
              <tr
                key={pod.name}
                className="border-b border-slate-900"
              >
                <td className="py-4">
                  {pod.name}
                </td>

                <td className="text-green-400">
                  {pod.status}
                </td>

                <td>
                  {pod.cpu}
                </td>

                <td>
                  {pod.memory}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <ResourceCard
          title="CPU Usage"
          value="68%"
          icon={<Cpu size={24} />}
        />

        <ResourceCard
          title="Storage Usage"
          value="55%"
          icon={<HardDrive size={24} />}
        />

      </div>

    </div>
  );
}

function StatCard({ icon, title, value }) {
  return (
    <div className="
      bg-[#111827]/80
      border
      border-slate-800
      rounded-3xl
      p-6
    ">
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

function ResourceCard({
  title,
  value,
  icon,
}) {
  return (
    <div className="
      bg-[#111827]/80
      border
      border-slate-800
      rounded-3xl
      p-6
    ">
      <div className="flex items-center gap-3">
        <div className="text-cyan-400">
          {icon}
        </div>

        <h2 className="font-bold">
          {title}
        </h2>
      </div>

      <div className="mt-6">
        <h3 className="text-4xl font-black">
          {value}
        </h3>

        <div className="w-full h-3 bg-slate-800 rounded-full mt-4">
          <div className="w-2/3 h-3 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
