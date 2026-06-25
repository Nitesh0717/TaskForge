import {
  Server,
  Shield,
  Database,
  Bell,
  Box,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    name: "auth-service",
    pods: 2,
    color: "text-cyan-400",
  },
  {
    icon: Box,
    name: "task-service",
    pods: 4,
    color: "text-violet-400",
  },
  {
    icon: Bell,
    name: "notification",
    pods: 2,
    color: "text-orange-400",
  },
  {
    icon: Database,
    name: "mongodb",
    pods: 1,
    color: "text-green-400",
  },
  {
    icon: Network,
    name: "redis",
    pods: 1,
    color: "text-red-400",
  },
];

export default function InfrastructureMap() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6 h-full">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Infrastructure Overview
        </h2>

        <span className="text-green-400">
          ● Live
        </span>

      </div>

      <div className="space-y-4">

        {services.map((service) => (

          <div
            key={service.name}
            className="flex justify-between items-center bg-slate-900 rounded-2xl p-4 hover:border-cyan-500 border border-slate-800 transition"
          >

            <div className="flex items-center gap-4">

              <service.icon
                className={service.color}
                size={24}
              />

              <div>

                <h3 className="font-semibold">
                  {service.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {service.pods} Pods
                </p>

              </div>

            </div>

            <Server
              className="text-slate-500"
            />

          </div>

        ))}

      </div>

    </div>
  );
}
