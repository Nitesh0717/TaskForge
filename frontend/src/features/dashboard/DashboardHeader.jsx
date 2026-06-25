import { RefreshCw, Clock } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">

      <div>

        <h1 className="text-5xl font-bold text-white">
          Welcome back,
          <span className="text-violet-400"> Nitesh! 👋</span>
        </h1>

        <p className="text-slate-400 mt-2">
          Here's what's happening with your infrastructure today.
        </p>

      </div>

      <div className="flex gap-4">

        <button className="flex items-center gap-2 bg-[#111827] border border-slate-700 rounded-xl px-5 py-3">

          <Clock size={18} />

          Last 30 minutes

        </button>

        <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-500 rounded-xl px-6 py-3 transition">

          <RefreshCw size={18} />

          Refresh

        </button>

      </div>

    </div>
  );
}
