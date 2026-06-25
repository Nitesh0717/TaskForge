const systems = [
" Kubernetes API",
" Prometheus",
" Grafana",
" MongoDB",
" Redis",
];

export default function SystemStatus(){

return(

<div className="bg-[#111827]/80 border border-slate-800 rounded-3xl p-6">

<h2 className="text-2xl font-bold mb-6">
System Status
</h2>

<div className="space-y-5">

{systems.map(system=>(

<div
key={system}
className="flex justify-between"
>

<span>{system}</span>

<span className="text-green-400">
Healthy
</span>

</div>

))}

</div>

</div>

)

}
