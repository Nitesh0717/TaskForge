import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { cpuData } from "../../data/dashboardData";

export default function ResourceUsageChart() {
  return (
    <div className="bg-[#111827]/80 backdrop-blur-xl rounded-3xl border border-slate-800 p-6 h-[400px]">
      <h2 className="text-xl font-semibold mb-4">
        Cluster CPU Usage
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={cpuData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="cpu"
            stroke="#6366f1"
            fill="#6366f155"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
