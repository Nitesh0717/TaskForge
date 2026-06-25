const stages = [
  "Git Push",
  "Build",
  "Docker",
  "Push",
  "Deploy",
  "Health Check",
];

export default function Pipelines() {
  return (
    <div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6 h-full">

      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">
          CI/CD Pipeline
        </h2>

        <span className="text-green-400">
          Success
        </span>
      </div>

      <div className="space-y-4">

        {stages.map((stage) => (
          <div
            key={stage}
            className="flex items-center justify-between bg-slate-900 rounded-xl p-3"
          >
            <span>{stage}</span>

            <span className="text-green-400">
              ✓
            </span>
          </div>
        ))}

      </div>

    </div>
  );
}
