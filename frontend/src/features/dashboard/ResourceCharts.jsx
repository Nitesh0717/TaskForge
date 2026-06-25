import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const data = [
  { value: 35 },
  { value: 40 },
  { value: 45 },
  { value: 42 },
  { value: 50 },
  { value: 58 },
  { value: 61 },
  { value: 55 },
  { value: 63 },
];

function Card({ title }) {
  return (
    <div className="flex-1 bg-slate-900 rounded-2xl p-5">

      <h3 className="mb-4 text-lg font-semibold">
        {title}
      </h3>

      <ResponsiveContainer
        width="100%"
        height={180}
      >

        <LineChart data={data}>

          <Line
            type="monotone"
            dataKey="value"
            stroke="#4F8CFF"
            strokeWidth={3}
            dot={false}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default function ResourceCharts() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Resource Usage
        </h2>

        <span className="text-green-400">
          ● Live
        </span>

      </div>

      <div className="flex gap-6">

        <Card title="CPU Usage" />

        <Card title="Memory Usage" />

      </div>

    </div>
  );
}
