import {
  LayoutDashboard,
  Rocket,
  Boxes,
  Activity,
  GitBranch,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/",
    },
    {
      name: "Deployments",
      icon: Rocket,
      path: "/deployments",
    },
    {
      name: "Kubernetes",
      icon: Boxes,
      path: "/kubernetes",
    },
    {
      name: "Monitoring",
      icon: Activity,
      path: "/monitoring",
    },
    {
      name: "CI/CD",
      icon: GitBranch,
      path: "/cicd",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/settings",
    },
  ];

  return (
    <aside
      className="
      w-[280px]
      min-h-screen
      bg-[#0B1120]
      border-r
      border-slate-800
      flex
      flex-col
      justify-between
      "
    >
      <div>
        <div className="p-6 border-b border-slate-800">
          <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            TaskForge
          </h1>

          <p className="text-slate-400 mt-2">
            DevOps Control Plane
          </p>
        </div>

        <div className="p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3
                px-4 py-3
                rounded-2xl
                transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400"
                    : "hover:bg-slate-900 text-slate-300"
                }
              `
              }
            >
              <link.icon size={20} />

              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="p-4">
          <div
            className="
            bg-[#111827]
            border
            border-slate-800
            rounded-3xl
            p-5
            "
          >
            <p className="text-slate-400 text-sm">
              Cluster Health
            </p>

            <h2 className="text-5xl font-bold text-green-400 mt-2">
              99.98%
            </h2>

            <div className="w-full h-3 rounded-full bg-slate-800 mt-4">
              <div className="w-[99%] h-3 rounded-full bg-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div
          className="
          bg-[#111827]
          border
          border-slate-800
          rounded-3xl
          p-4
          flex
          items-center
          gap-3
          "
        >
          <div
            className="
            w-12 h-12
            rounded-full
            bg-gradient-to-r
            from-cyan-500
            to-purple-500
            "
          />

          <div>
            <p className="font-semibold">
              Nitesh
            </p>

            <p className="text-slate-400 text-sm">
              DevOps Engineer
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
