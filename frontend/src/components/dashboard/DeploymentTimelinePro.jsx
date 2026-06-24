import {
  CheckCircle2,
  GitBranch,
  Container,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const stages = [
  {
    icon: <GitBranch size={20} />,
    title: "Code Commit",
    time: "21:41",
    status: "completed",
  },
  {
    icon: <Container size={20} />,
    title: "Docker Build",
    time: "21:43",
    status: "completed",
  },
  {
    icon: <Rocket size={20} />,
    title: "Kubernetes Deploy",
    time: "21:45",
    status: "completed",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Health Check",
    time: "21:47",
    status: "completed",
  },
];

export default function DeploymentTimelinePro() {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">
          Deployment Timeline
        </h2>

        <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm">
          Production
        </span>
      </div>

      <div className="space-y-5">

        {stages.map((stage) => (
          <div
            key={stage.title}
            className="
              flex
              items-center
              justify-between
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-4
              hover:border-cyan-400
              transition-all
            "
          >
            <div className="flex items-center gap-4">

              <div className="text-cyan-400">
                {stage.icon}
              </div>

              <div>
                <h3 className="font-medium">
                  {stage.title}
                </h3>

                <p className="text-slate-400 text-sm">
                  {stage.time}
                </p>
              </div>

            </div>

            <CheckCircle2
              size={20}
              className="text-green-400"
            />
          </div>
        ))}

      </div>
    </div>
  );
}
