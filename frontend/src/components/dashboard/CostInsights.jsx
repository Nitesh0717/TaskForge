export default function CostInsights() {
  return (
    <div
      className="
      bg-[#111827]/80
      backdrop-blur-xl
      border
      border-slate-800
      rounded-3xl
      p-6
      "
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">
          Cost Insights
        </h2>

        <span className="text-green-400 text-sm">
          ↓ 12% This Month
        </span>
      </div>

      <div className="space-y-5">

        <div>
          <p className="text-slate-400">
            Estimated Monthly Cost
          </p>

          <h2 className="text-5xl font-black text-cyan-400 mt-2">
            $42.80
          </h2>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Kubernetes</span>
            <span>65%</span>
          </div>

          <div className="h-3 bg-slate-800 rounded-full">
            <div className="h-3 w-[65%] bg-cyan-400 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Monitoring</span>
            <span>20%</span>
          </div>

          <div className="h-3 bg-slate-800 rounded-full">
            <div className="h-3 w-[20%] bg-purple-400 rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Storage</span>
            <span>15%</span>
          </div>

          <div className="h-3 bg-slate-800 rounded-full">
            <div className="h-3 w-[15%] bg-green-400 rounded-full" />
          </div>
        </div>

      </div>
    </div>
  );
}
