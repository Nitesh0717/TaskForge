import {
  GitBranch,
  Workflow,
  Container,
  Server,
  Database,
  Activity,
} from "lucide-react";

export default function InfrastructureMap() {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          DevOps Delivery Pipeline
        </h2>

        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
          Live
        </span>
      </div>

      <div className="grid grid-cols-6 gap-4">

        <PipelineCard icon={<GitBranch />} label="GitHub" />
        <PipelineCard icon={<Workflow />} label="Actions" />
        <PipelineCard icon={<Container />} label="Docker" />
        <PipelineCard icon={<Server />} label="Kubernetes" />
        <PipelineCard icon={<Database />} label="MongoDB" />
        <PipelineCard icon={<Activity />} label="Grafana" />

      </div>

    </div>
  );
}

function PipelineCard({ icon, label }) {
  return (
    <div
      className="
      bg-slate-900
      border border-slate-800
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
        {icon}
      </div>

      <p>{label}</p>
    </div>
  );
}
