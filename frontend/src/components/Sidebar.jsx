import {
  LayoutDashboard,
  Rocket,
  Server,
  Activity,
  GitBranch,
  Bell,
  Settings,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Rocket, label: "Deployments" },
  { icon: Server, label: "Kubernetes" },
  { icon: Activity, label: "Monitoring" },
  { icon: GitBranch, label: "CI/CD" },
  { icon: Bell, label: "Alerts" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside
      className="
        w-72
        min-h-screen
        flex
        flex-col
        bg-slate-950
        border-r
        border-slate-800
        backdrop-blur-xl
        shadow-2xl
      "
    >
      {/* Logo Section */}
      <div className="p-6 border-b border-slate-800">
        <h1
          className="
            text-4xl
            font-extrabold
            bg-gradient-to-r
            from-indigo-400
            via-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
          "
        >
          TaskForge
        </h1>

        <p className="text-slate-400 text-sm mt-2">
          Cloud Native DevOps Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-center
              gap-4
              px-4
              py-3
              mb-3
              rounded-2xl
              cursor-pointer
              text-slate-300
              transition-all
              duration-300
              hover:bg-indigo-500/15
              hover:text-indigo-400
              hover:translate-x-1
            "
          >
            <item.icon size={20} />
            <span className="font-medium">
              {item.label}
            </span>
          </div>
        ))}
      </nav>

      {/* Cluster Health Card */}
      <div className="p-4">
        <div
          className="
            bg-gradient-to-br
            from-slate-900
            to-slate-800
            rounded-3xl
            p-5
            border
            border-slate-700
          "
        >
          <p className="text-sm text-slate-400">
            Cluster Health
          </p>

          <h2 className="text-3xl font-bold text-green-400 mt-2">
            99.98%
          </h2>

          <div className="mt-4 h-2 rounded-full bg-slate-700 overflow-hidden">
            <div className="h-full w-[99%] bg-green-400 rounded-full"></div>
          </div>

          <p className="text-xs text-slate-500 mt-2">
            All services operational
          </p>
        </div>
      </div>
    </aside>
  );
}
