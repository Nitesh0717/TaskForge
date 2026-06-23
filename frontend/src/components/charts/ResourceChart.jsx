import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "10:00", cpu: 35 },
  { name: "10:10", cpu: 48 },
  { name: "10:20", cpu: 40 },
  { name: "10:30", cpu: 65 },
  { name: "10:40", cpu: 52 },
  { name: "10:50", cpu: 75 },
  { name: "11:00", cpu: 68 },
];

export default function ResourceChart() {
  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-slate-800">
      <h2 className="text-xl font-semibold mb-4">
        Cluster CPU Usage
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="cpu"
              stroke="#6366F1"
              fill="#6366F1"
              fillOpacity={0.25}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
