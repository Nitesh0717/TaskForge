export default function CICD() {
  return (
    <div className="p-8 space-y-8">

      <div className="rounded-3xl p-8 bg-[#111827] border border-slate-800">
        <h1 className="text-5xl font-black">
          CI/CD Control Center
        </h1>

        <p className="text-slate-400 mt-2">
          GitHub Actions • Docker • Kubernetes Delivery Pipeline
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800">
          <p>Pipeline Success</p>
          <h2 className="text-5xl font-bold">100%</h2>
        </div>

        <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800">
          <p>Builds Today</p>
          <h2 className="text-5xl font-bold">12</h2>
        </div>

        <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800">
          <p>Deployments</p>
          <h2 className="text-5xl font-bold">8</h2>
        </div>

        <div className="bg-[#111827] rounded-3xl p-6 border border-slate-800">
          <p>Failed Jobs</p>
          <h2 className="text-5xl font-bold">0</h2>
        </div>

      </div>

    </div>
  );
}
