import {
  Search,
  Bell,
  Moon,
  Activity,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  return (
    <header
      className="
        h-20
        border-b
        border-slate-800
        bg-slate-950/70
        backdrop-blur-xl
        flex
        items-center
        justify-between
        px-8
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">

        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search deployments, pods, services..."
            className="
              bg-slate-900
              border
              border-slate-800
              rounded-2xl
              pl-10
              pr-4
              py-3
              w-[420px]
              outline-none
              text-white
              placeholder:text-slate-500
              focus:border-indigo-500
              transition-all
            "
          />
        </div>

      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Cluster Status */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            bg-green-500/10
            border
            border-green-500/20
          "
        >
          <Activity
            size={16}
            className="text-green-400"
          />

          <span className="text-green-400 text-sm font-medium">
            Cluster Healthy
          </span>
        </div>

        {/* Dark Mode Icon */}
        <button
          className="
            p-3
            rounded-xl
            bg-slate-900
            border
            border-slate-800
            hover:border-indigo-500
            transition-all
          "
        >
          <Moon size={18} />
        </button>

        {/* Notification Icon */}
        <button
          className="
            relative
            p-3
            rounded-xl
            bg-slate-900
            border
            border-slate-800
            hover:border-indigo-500
            transition-all
          "
        >
          <Bell size={18} />

          <span
            className="
              absolute
              -top-1
              -right-1
              w-3
              h-3
              bg-red-500
              rounded-full
            "
          ></span>
        </button>

        {/* User Profile */}
        <div
          className="
            flex
            items-center
            gap-3
            bg-slate-900
            border
            border-slate-800
            px-3
            py-2
            rounded-2xl
          "
        >
          <div
            className="
              w-10
              h-10
              rounded-full
              bg-gradient-to-r
              from-indigo-500
              to-cyan-500
            "
          ></div>

          <div>
            <p className="text-sm font-semibold">
              Nitesh
            </p>

            <p className="text-xs text-slate-400">
              DevOps Engineer
            </p>
          </div>

          <ChevronDown
            size={16}
            className="text-slate-400"
          />
        </div>

      </div>
    </header>
  );
}
