const deployments = [
  "Build Successful",
  "Docker Image Created",
  "Image Pushed",
  "Kubernetes Deployment",
  "Health Check Passed",
];

export default function DeploymentTimeline() {
  return (
    <div className="bg-[#111827] rounded-2xl border border-slate-800 p-6">
      <h2 className="text-xl font-semibold mb-6">
        Recent Deployments
      </h2>

      <div className="space-y-5">
        {deployments.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>

            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
