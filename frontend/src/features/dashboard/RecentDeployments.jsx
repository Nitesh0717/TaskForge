const deployments = [
  ["auth-service","v1.2.3","Success"],
  ["task-service","v2.4.1","Success"],
  ["notification","v1.0.8","Success"],
  ["api-gateway","v3.1.0","Success"],
];

export default function RecentDeployments() {

return (

<div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-6">
Recent Deployments
</h2>

<div className="space-y-5">

{deployments.map(([service,version,status])=>(

<div
key={service}
className="flex justify-between items-center border-b border-slate-800 pb-3"
>

<div>

<h3 className="font-semibold">
{service}
</h3>

<p className="text-slate-400 text-sm">
{version}
</p>

</div>

<span className="text-green-400">
{status}
</span>

</div>

))}

</div>

</div>

)

}
