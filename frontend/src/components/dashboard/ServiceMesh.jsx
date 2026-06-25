import {
  Shield,
  Server,
  Database,
  Wifi,
} from "lucide-react";

const services = [
  { name: "API Gateway", icon: Server },
  { name: "Auth Service", icon: Shield },
  { name: "Task Service", icon: Server },
  { name: "Notification", icon: Wifi },
  { name: "MongoDB", icon: Database },
];

export default function ServiceMesh() {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Service Mesh
        </h2>

        <span className="text-green-400 text-sm">
          Active
        </span>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {services.map((service) => (
          <div
            key={service.name}
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              p-5
              text-center
              hover:border-cyan-400
              transition-all
            "
          >
            <service.icon
              size={28}
              className="mx-auto text-cyan-400"
            />

            <p className="mt-3">
              {service.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
