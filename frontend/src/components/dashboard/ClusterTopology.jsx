import {
  Server,
  Database,
  Activity,
  ShieldCheck,
} from "lucide-react";

const nodes = [
  {
    icon: <Server size={28} />,
    title: "API Gateway",
    status: "Healthy",
    color: "cyan",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Auth Service",
    status: "Healthy",
    color: "green",
  },
  {
    icon: <Server size={28} />,
    title: "Task Service",
    status: "Healthy",
    color: "purple",
  },
  {
    icon: <Activity size={28} />,
    title: "Notification",
    status: "Running",
    color: "yellow",
  },
  {
    icon: <Database size={28} />,
    title: "MongoDB",
    status: "Connected",
    color: "blue",
  },
];

export default function ClusterTopology() {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Kubernetes Cluster Topology
        </h2>

        <span className="text-green-400 text-sm">
          ● Live Cluster
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4">

        {nodes.map((node) => (
          <div
            key={node.title}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              hover:border-cyan-400
              hover:scale-105
              transition-all
              cursor-pointer
              text-center
            "
          >
            <div className="flex justify-center text-cyan-400 mb-3">
              {node.icon}
            </div>

            <h3 className="font-semibold">
              {node.title}
            </h3>

            <p className="text-green-400 text-sm mt-2">
              {node.status}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}
